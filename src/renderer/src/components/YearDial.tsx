import { useCallback, useEffect, useRef } from 'react'
import type { Era } from '../data/types'
import compassDial from '../assets/ui/compass-dial@2x.png'
import { tick } from '../audio'

interface Props {
  year: number
  era: Era
  min: number
  max: number
  onChange: (year: number) => void
}

const YEARS_PER_DEG = 1.4 // rotary-drag sensitivity

export function YearDial({ year, era, min, max, onChange }: Props): JSX.Element {
  const dialRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ startAngle: number; startYear: number } | null>(null)

  // Tick on every year change (rapid changes -> fast ticking), skipping mount.
  const tickMounted = useRef(false)
  useEffect(() => {
    if (tickMounted.current) tick()
    else tickMounted.current = true
  }, [year])

  const angleFromEvent = useCallback((clientX: number, clientY: number): number => {
    const el = dialRef.current
    if (!el) return 0
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    return (Math.atan2(clientX - cx, cy - clientY) * 180) / Math.PI // 0 = up, + clockwise
  }, [])

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      ;(e.target as Element).setPointerCapture?.(e.pointerId)
      drag.current = { startAngle: angleFromEvent(e.clientX, e.clientY), startYear: year }
    },
    [angleFromEvent, year]
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!drag.current) return
      const a = angleFromEvent(e.clientX, e.clientY)
      let delta = a - drag.current.startAngle
      if (delta > 180) delta -= 360
      if (delta < -180) delta += 360
      onChange(drag.current.startYear + delta * YEARS_PER_DEG)
    },
    [angleFromEvent, onChange]
  )

  const endDrag = useCallback(() => {
    drag.current = null
  }, [])

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      const step = e.shiftKey ? 10 : 1
      onChange(year + (e.deltaY < 0 ? step : -step))
    },
    [onChange, year]
  )

  return (
    <div className="year-dial-wrap">
      <div
        className="year-dial"
        ref={dialRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onWheel={onWheel}
        role="slider"
        aria-label="Year"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={year}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') onChange(year + 1)
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') onChange(year - 1)
          else if (e.key === 'PageUp') onChange(year + 10)
          else if (e.key === 'PageDown') onChange(year - 10)
        }}
      >
        <img className="dial-bg" src={compassDial} alt="" draggable={false} />
        <div className="dial-center">
          <span className="dial-kicker">YEAR</span>
          <span className="dial-year">{fmtYear(year)}</span>
          <span className="dial-era">{era.name}</span>
        </div>
      </div>
    </div>
  )
}

function fmtYear(y: number): string {
  return y <= 0 ? '1' : String(y)
}
