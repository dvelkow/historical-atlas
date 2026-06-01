import type { RelationType, PlaceholderIcon } from './types'

// ---------------------------------------------------------------------------
// Country-centric data model.
//
// Every European country is an "entity" whose history is split into PERIODS
// (one polity/state at a time, e.g. "Kingdom of France (Capetian)", "Third
// Republic"). Picking a year selects the period that contains it. Each period
// carries that era's government, capital, culture, a summary, the notable
// historic figures, and its OUTGOING relations to other countries (wars,
// alliances, notable interactions) — these become the directional arrows on
// the map.
//
// FILE ORGANISATION — one file per country under `data/countries/*.ts`, each
// `export default` a `Country`. They are auto-discovered with import.meta.glob
// (see countries.ts), so adding a country = drop a new file; no registry edit.
// Relations only reference country ids that exist as files.
// ---------------------------------------------------------------------------

export type { RelationType } from './types'

/** A directional, OUTGOING relation from the owning country to `to`. */
export interface CountryRelation {
  /** Target country id (must match another country file's `id`). */
  to: string
  type: RelationType
  /** Short headline, e.g. "Hundred Years' War", "Auld Alliance". */
  label: string
  /** Optional one-line detail shown on hover / in the panel. */
  note?: string
  /** Optional icon override (defaults derived from type/kind). */
  icon?: PlaceholderIcon
}

export interface CountryFigure {
  name: string
  title: string
  /** Display string, e.g. "r. 1643–1715" or "1412–1431". */
  years?: string
  note?: string
  /** Optional portrait override (filename in assets/figures/); defaults to a
   *  slug of `name`. See FIGURES.md. */
  image?: string
}

export interface CountryPeriod {
  /** Inclusive year range this period is shown for. */
  startYear: number
  endYear: number
  /** Global era id (see eras.ts) this period belongs to. */
  eraId: string
  /** The polity/state name during this period. */
  name: string
  government?: string
  capital?: string
  religion?: string[]
  culture?: string[]
  summary: string
  /** Outgoing relations active during this period. */
  relations: CountryRelation[]
  /** Notable figures of this period. */
  figures: CountryFigure[]
}

export interface Country {
  /** Stable id, kebab-case, matches the filename, e.g. "france". */
  id: string
  /** Display name, e.g. "France". */
  name: string
  /** Natural Earth country names (from the map TopoJSON) that map to this
   *  entity. Usually one, but lets a modern shape stand in for the territory. */
  mapNames: string[]
  /** Accent colour for highlight + arrows + swatches. */
  color: string
  /** [lon, lat] anchor for arrows and the zoom-to-country target. */
  centroid: [number, number]
  /** History, in chronological periods. */
  periods: CountryPeriod[]
}
