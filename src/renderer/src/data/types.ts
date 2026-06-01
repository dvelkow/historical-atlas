// ---------------------------------------------------------------------------
// Core data model for the Historical Atlas.
//
// Borders are NOT historical — we use a modern world map as the base and overlay
// approximate historical entity centroids, labels, and relationship arcs. Every
// entity carries `approximate: true` to make that explicit, and `territories`
// lists the *modern* countries a polity roughly covered (matched by the names
// used in the bundled Natural Earth TopoJSON) so we can softly highlight a
// region without claiming precise historical frontiers.
// ---------------------------------------------------------------------------

/** [longitude, latitude] in degrees. */
export type LngLat = [number, number]

export type RelationType = 'war' | 'ally' | 'interaction'

/** Sub-classification for `interaction` relations (drives the placeholder icon). */
export type InteractionKind =
  | 'treaty'
  | 'trade'
  | 'religion'
  | 'dynasty'
  | 'culture'
  | 'rivalry'
  | 'vassal'
  | 'diplomacy'

/** Labeled placeholder icons — intentionally NOT final art. */
export type PlaceholderIcon =
  | 'ICON_WAR'
  | 'ICON_ALLY'
  | 'ICON_INTERACTION'
  | 'ICON_PERSON'
  | 'ICON_TREATY'
  | 'ICON_TRADE'
  | 'ICON_RELIGION'
  | 'ICON_DYNASTY'
  | 'ICON_CULTURE'
  | 'ICON_EVENT'

export interface Era {
  id: string
  name: string
  /** Inclusive start year (CE). */
  startYear: number
  /** Inclusive end year (CE). Use the current year for open eras. */
  endYear: number
  blurb: string
  icon: PlaceholderIcon
}

export interface Entity {
  id: string
  name: string
  /** Optional longer/period-specific name, e.g. "Roman Empire — Principate". */
  fullName?: string
  eraId: string
  /** Inclusive year range during which the entity is shown on the map. */
  startYear: number
  endYear: number
  /** Approximate centre of power used to anchor the map marker + arcs. */
  centroid: LngLat
  capital?: string
  capitalCoord?: LngLat
  government?: string
  religion?: string[]
  culture?: string[]
  /** Modern country names (Natural Earth) this polity roughly overlapped. */
  territories?: string[]
  description: string
  /** Accent colour for the marker/region highlight. */
  color: string
  /** Always true here — borders are modern, positions are approximate. */
  approximate: boolean
  sourceNote?: string
}

export interface Relation {
  id: string
  from: string
  to: string
  type: RelationType
  kind?: InteractionKind
  label: string
  startYear: number
  endYear: number
  /** Display-only sentiment, -100..100 (negative = hostile). */
  sentiment?: number
  description?: string
  sourceNote?: string
}

export interface HistEvent {
  id: string
  year: number
  /** For multi-year events (wars, reigns). */
  endYear?: number
  title: string
  description?: string
  eraId: string
  entityIds?: string[]
  icon: PlaceholderIcon
}

export interface FigureStat {
  label: string
  value: number
  icon: PlaceholderIcon
}

export interface Figure {
  id: string
  name: string
  title: string
  entityId: string
  /** Years the figure is "current" (reign / activity), used to pick by year. */
  startYear: number
  endYear: number
  stats: FigureStat[]
  description: string
  sourceNote?: string
}
