import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import type { RelationType } from '../data/countryTypes'
import { getCountry, relationsAt, bordersForYear, entityForBorderName, landPath, periodFor } from '../data'
import { MAP_WIDTH, MAP_HEIGHT, graticulePath, geoPathString, project, geoBounds } from '../map/projection'
import { cloth } from '../audio'

interface Props {
  year: number
  selectedId: string | null
  onSelect: (id: string) => void
}

const ARC_COLOR: Record<RelationType, string> = {
  war: '#d6504a',
  ally: '#4a8fd6',
  interaction: '#e0a14e'
}

// Fill/stroke for relation-target shapes, by relation type.
const REL_FILL: Record<RelationType, string> = {
  war: 'rgba(214,80,74,0.42)',
  ally: 'rgba(74,143,214,0.42)',
  interaction: 'rgba(224,161,78,0.4)'
}
const REL_STROKE: Record<RelationType, string> = {
  war: 'rgba(214,80,74,0.95)',
  ally: 'rgba(74,143,214,0.95)',
  interaction: 'rgba(224,161,78,0.95)'
}

export function WorldMap({ year, selectedId, onSelect }: Props): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null)
  const [view, setView] = useState({ k: 1, x: 0, y: 0 })
  const [animate, setAnimate] = useState(false)
  const pan = useRef<{ sx: number; sy: number; vbx: number; vby: number; ox: number; oy: number } | null>(null)
  const didPan = useRef(false)

  const selected = selectedId ? getCountry(selectedId) : undefined
  const relations = useMemo(() => relationsAt(selected, year), [selected, year])
  // Period-correct name for the on-map label (e.g. "Frankish Kingdom" in 700).
  const selectedPeriod = useMemo(() => (selected ? periodFor(selected, year) : undefined), [selected, year])

  // Period-accurate border shapes for the epoch nearest this year.
  const { epoch, features } = useMemo(() => bordersForYear(year), [year])

  const featurePaths = useMemo(() => {
    const kept = features.features
      .map((f) => ({
        name: f.properties?.name as string | undefined,
        entityId: entityForBorderName(f.properties?.name),
        f
      }))
      // Drop globe-spanning wrap artifacts from the source data: a few polygons
      // (e.g. "central Asian khanates" in the 1700/1715 epochs) cross the
      // antimeridian and project to a frame-filling shape. As non-aliased context
      // they're drawn with an opaque fill, so they paint over every country drawn
      // before them — the "countries vanish at 1757 and earlier" bug. Only ever
      // drop NON-interactive context; an aliased country (Russia/USSR also wrap in
      // later epochs) is always kept and just renders translucent.
      .filter((fp) => {
        if (fp.entityId) return true
        const b = geoBounds(fp.f)
        if (!b) return false
        return !(b[1][0] - b[0][0] > MAP_WIDTH * 2.5 || b[1][1] - b[0][1] > MAP_HEIGHT * 2.5)
      })
      .map((fp) => ({ name: fp.name, entityId: fp.entityId, d: geoPathString(fp.f) }))
      // Drop degenerate features that project to nothing (e.g. the zero-size
      // "Ostrogoths" slivers in the 600 epoch) — they render no path anyway.
      .filter((fp) => fp.d.length > 0)

    // Merge fragments into ONE path per polity. The source draws several polities
    // as multiple separate features (e.g. "Carolingian Empire" ×2, "Danes" ×2),
    // which, when translucent and overlapping, double-darken the tint and fight
    // over clicks. Grouping tracked polities by entity id (and named/anonymous
    // context by name) means each polity is a single fill — no overlap stacking —
    // and a single clickable, highlightable shape.
    const groups = new Map<
      string,
      { key: string; names: Set<string>; entityId?: string; d: string }
    >()
    for (const fp of kept) {
      const key = fp.entityId ? `e:${fp.entityId}` : fp.name ? `n:${fp.name}` : '__ctx__'
      const g = groups.get(key)
      if (g) {
        g.d += ' ' + fp.d
        if (fp.name) g.names.add(fp.name)
      } else {
        groups.set(key, {
          key,
          names: new Set(fp.name ? [fp.name] : []),
          entityId: fp.entityId,
          d: fp.d
        })
      }
    }
    return [...groups.values()].map((g) => ({
      key: g.key,
      name: g.names.size ? [...g.names].join(' / ') : undefined,
      entityId: g.entityId,
      d: g.d
    }))
  }, [features])

  // Is the selected entity actually present on the map this epoch?
  const selectedPresent = useMemo(
    () => featurePaths.some((fp) => fp.entityId === selectedId),
    [featurePaths, selectedId]
  )

  // Relation-target entity id -> relation type (to tint its shape).
  const targetType = useMemo(() => {
    const m = new Map<string, RelationType>()
    for (const r of relations) if (r.target) m.set(r.target.id, r.type)
    return m
  }, [relations])

  // Paint order: dim context first, tracked polities above it, relation targets
  // above those, and the selected polity last so its highlight/stroke is never
  // occluded by a neighbour drawn later in the source array.
  const orderedPaths = useMemo(() => {
    const prio = (fp: { entityId?: string }): number => {
      if (fp.entityId && fp.entityId === selectedId) return 3
      if (fp.entityId && targetType.has(fp.entityId)) return 2
      if (fp.entityId) return 1
      return 0
    }
    return [...featurePaths].sort((a, b) => prio(a) - prio(b))
  }, [featurePaths, selectedId, targetType])

  const arrows = useMemo(() => {
    if (!selected || !selectedPresent) return []
    const from = project(selected.centroid[0], selected.centroid[1])
    if (!from) return []
    return relations
      .map((r, i) => {
        if (!r.target) return null
        const to = project(r.target.centroid[0], r.target.centroid[1])
        if (!to || Math.hypot(to[0] - from[0], to[1] - from[1]) < 2) return null
        return { id: `${r.to}-${i}`, type: r.type, path: buildArc(from[0], from[1], to[0], to[1], i) }
      })
      .filter(Boolean) as { id: string; type: RelationType; path: string }[]
  }, [selected, selectedPresent, relations])

  const selectedPt = useMemo(() => {
    if (!selected || !selectedPresent) return null
    const p = project(selected.centroid[0], selected.centroid[1])
    return p ? { x: p[0], y: p[1] } : null
  }, [selected, selectedPresent])

  // ---- zoom / pan -------------------------------------------------------
  const toViewBox = (clientX: number, clientY: number): DOMPoint | null => {
    const ctm = svgRef.current?.getScreenCTM()
    if (!ctm) return null
    return new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse())
  }

  // Selecting a country snaps back to the full-Europe view. The relation arrows
  // fan out across the whole continent (war/ally/interaction), so both ends must
  // be visible — zooming in on the selected polity would push the arrow targets
  // off-frame and hide most of the map (the "we can only see Russia" problem).
  // Selection is conveyed by the highlighted fill, the glowing marker, and the
  // arrows; manual scroll/drag is still available for detail.
  useEffect(() => {
    if (!selected) return
    setAnimate(true)
    setView({ k: 1, x: 0, y: 0 })
    const t = window.setTimeout(() => setAnimate(false), 520)
    return () => window.clearTimeout(t)
  }, [selectedId]) // eslint-disable-line react-hooks/exhaustive-deps

  const onWheel = (e: React.WheelEvent) => {
    const c = toViewBox(e.clientX, e.clientY)
    if (!c) return
    setAnimate(false)
    setView((v) => {
      const factor = e.deltaY < 0 ? 1.2 : 1 / 1.2
      const k = clamp(v.k * factor, 1, 12)
      if (k === v.k) return v
      const x = clamp(c.x - (k / v.k) * (c.x - v.x), MAP_WIDTH * (1 - k), 0)
      const y = clamp(c.y - (k / v.k) * (c.y - v.y), MAP_HEIGHT * (1 - k), 0)
      return { k, x, y }
    })
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return
    const p = toViewBox(e.clientX, e.clientY)
    if (!p) return
    pan.current = { sx: e.clientX, sy: e.clientY, vbx: p.x, vby: p.y, ox: view.x, oy: view.y }
    didPan.current = false
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const start = pan.current
    if (!start || (e.buttons & 1) === 0) return
    if (!didPan.current && Math.hypot(e.clientX - start.sx, e.clientY - start.sy) > 3) {
      didPan.current = true
      setAnimate(false)
    }
    if (!didPan.current) return
    const p = toViewBox(e.clientX, e.clientY)
    if (!p) return
    setView((v) => ({
      ...v,
      x: clamp(start.ox + (p.x - start.vbx), MAP_WIDTH * (1 - v.k), 0),
      y: clamp(start.oy + (p.y - start.vby), MAP_HEIGHT * (1 - v.k), 0)
    }))
  }

  const onPointerUp = () => {
    pan.current = null
  }

  const resetView = () => {
    setAnimate(true)
    setView({ k: 1, x: 0, y: 0 })
    window.setTimeout(() => setAnimate(false), 520)
  }

  const handleFeatureClick = (entityId?: string) => {
    if (didPan.current || !entityId) return
    cloth()
    onSelect(entityId)
  }

  const zoomTransform = `translate(${view.x} ${view.y}) scale(${view.k})`

  return (
    <div className="worldmap">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="worldmap-svg"
        style={{ cursor: view.k > 1 ? 'grab' : 'default' }}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onDoubleClick={resetView}
      >
        <defs>
          <radialGradient id="ocean" cx="48%" cy="40%" r="78%">
            <stop offset="0%" stopColor="#102136" />
            <stop offset="60%" stopColor="#0a1524" />
            <stop offset="100%" stopColor="#060d17" />
          </radialGradient>
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {(['war', 'ally', 'interaction'] as const).map((t) => (
            <marker
              key={t}
              id={`arrow-${t}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="3"
              markerHeight="3"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill={ARC_COLOR[t]} />
            </marker>
          ))}
        </defs>

        <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#ocean)" />

        <g
          className="zoom-layer"
          transform={zoomTransform}
          style={{ transition: animate ? 'transform 0.5s cubic-bezier(.4,0,.2,1)' : 'none' }}
        >
          <path d={landPath} className="land-base" />
          <path d={graticulePath} className="graticule" />

          <g className="countries">
            {orderedPaths.map((fp) => {
              const entityId = fp.entityId
              const isSelected = !!entityId && entityId === selectedId
              const tint = entityId ? targetType.get(entityId) : undefined
              const cls = ['country', entityId ? 'country--eu' : '', isSelected ? 'country--selected' : '']
                .filter(Boolean)
                .join(' ')
              let style: CSSProperties | undefined
              if (isSelected && selected) {
                style = { fill: hexA(selected.color, 0.62), stroke: hexA(selected.color, 1) }
              } else if (tint) {
                style = { fill: REL_FILL[tint], stroke: REL_STROKE[tint] }
              } else if (entityId) {
                const c = getCountry(entityId)?.color ?? '#6b7da0'
                style = { fill: hexA(c, 0.4), stroke: hexA(c, 0.88) }
              }
              return (
                <path
                  key={fp.key}
                  d={fp.d}
                  className={cls}
                  style={style}
                  onClick={entityId ? () => handleFeatureClick(entityId) : undefined}
                >
                  {fp.name && <title>{fp.name}</title>}
                </path>
              )
            })}
          </g>

          <g className="arrows">
            {arrows.map((a) => (
              <path
                key={a.id}
                d={a.path}
                fill="none"
                stroke={ARC_COLOR[a.type]}
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeDasharray="6 5"
                markerEnd={`url(#arrow-${a.type})`}
                className="arrow-path"
                style={{ filter: `drop-shadow(0 0 2.5px ${ARC_COLOR[a.type]})` }}
              />
            ))}
          </g>

          {selectedPt && selected && (
            <g transform={`translate(${selectedPt.x}, ${selectedPt.y})`} className="sel-marker">
              <circle r="3.4" fill="#fff7e6" stroke={selected.color} strokeWidth="1.4" filter="url(#glow)" />
              <text x="0" y="-8" textAnchor="middle" className="sel-label">
                {selectedPeriod?.name ?? selected.name}
              </text>
            </g>
          )}
        </g>
      </svg>

      {view.k > 1.01 && (
        <button className="map-zoom" onClick={resetView} title="Reset view (or double-click the map)">
          {view.k.toFixed(1)}× · reset
        </button>
      )}

      <div className="map-footnote">
        Borders ≈ {fmtYear(epoch)} · click a polity to explore · scroll to zoom · drag to pan
      </div>
    </div>
  )
}

// ---- helpers --------------------------------------------------------------

function buildArc(sx: number, sy: number, ex: number, ey: number, index: number): string {
  const mx = (sx + ex) / 2
  const my = (sy + ey) / 2
  const dx = ex - sx
  const dy = ey - sy
  const dist = Math.hypot(dx, dy) || 1
  const nx = -dy / dist
  const ny = dx / dist
  const sign = index % 2 === 0 ? 1 : -1
  const lift = Math.min(Math.max(dist * 0.2, 26), 120) * sign
  const cx = mx + nx * lift
  const cy = my + ny * lift
  return `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n))
}

function hexA(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${alpha})`
}

function fmtYear(y: number): string {
  return y <= 0 ? '1 CE' : `${y} CE`
}
