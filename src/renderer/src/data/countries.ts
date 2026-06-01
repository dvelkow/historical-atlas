import type { Country, CountryPeriod, CountryRelation } from './countryTypes'

// Auto-discover every country file under ./countries/*.ts. Adding a new country
// is just dropping a file there — it appears on the map automatically.
const modules = import.meta.glob<{ default: Country }>('./countries/*.ts', { eager: true })

export const countries: Country[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.name.localeCompare(b.name))

const byId = new Map(countries.map((c) => [c.id, c]))

// Lower-cased Natural Earth name -> country (so clicking a map shape resolves).
const byMapName = new Map<string, Country>()
for (const c of countries) {
  for (const n of c.mapNames) byMapName.set(n.toLowerCase(), c)
}

export function getCountry(id: string): Country | undefined {
  return byId.get(id)
}

export function countryByMapName(name: string): Country | undefined {
  return byMapName.get(name.toLowerCase())
}

/** Is this Natural Earth map name one of our (clickable) European entities? */
export function isInteractiveMapName(name: string): boolean {
  return byMapName.has(name.toLowerCase())
}

/** The period of a country active at `year`, if any. */
export function periodFor(country: Country | undefined, year: number): CountryPeriod | undefined {
  if (!country) return undefined
  return country.periods.find((p) => year >= p.startYear && year <= p.endYear)
}

export interface ResolvedRelation extends CountryRelation {
  target?: Country
}

/** Outgoing relations of a country at `year`, with the target country resolved. */
export function relationsAt(country: Country | undefined, year: number): ResolvedRelation[] {
  const period = periodFor(country, year)
  if (!period) return []
  return period.relations.map((r) => ({ ...r, target: byId.get(r.to) }))
}

/** Countries that have a notable period covering `year`. */
export function countriesActiveAt(year: number): Country[] {
  return countries.filter((c) => c.periods.some((p) => year >= p.startYear && year <= p.endYear))
}

/**
 * Natural Earth names that are interactive *at this year* — i.e. the country
 * has a notable period then. Countries with nothing notable happening are not
 * clickable in that year (rendered as dim background land).
 */
export function activeMapNamesAt(year: number): Set<string> {
  const s = new Set<string>()
  for (const c of countriesActiveAt(year)) {
    for (const n of c.mapNames) s.add(n.toLowerCase())
  }
  return s
}
