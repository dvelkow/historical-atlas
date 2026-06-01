import { feature } from 'topojson-client'
import type { FeatureCollection, Geometry } from 'geojson'
import topoData from '../assets/borders/europe-borders.topo.json'
import landTopo from '../assets/map/countries-110m.json'
import { geoPathString } from '../map/projection'

// Period-accurate European borders, packed as one shared-arc TopoJSON with one
// object per epoch year (see scripts/build-borders.cjs). Source: the open
// `historical-basemaps` dataset (GPL-3.0) — see ASSETS.md / SOURCES.md.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topo = topoData as any

// Static present-day landmass, drawn once as a faint backdrop behind the period
// polygons. Early epochs (esp. ~500–700 CE) only have scattered small polities,
// so without this the continent reads as empty sea; with it, undefined regions
// show as dim land and the historical polities tint on top. Coastlines barely
// move over 2000 years, so the modern outline aligns with the period shapes.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const landTopology = landTopo as any
export const landPath: string = geoPathString(
  feature(landTopology, landTopology.objects.land)
)

export interface BorderProps {
  name: string
}

export const borderEpochs: number[] = Object.keys(topo.objects)
  .map((k) => parseInt(k.replace(/^y/, ''), 10))
  .filter((n) => !Number.isNaN(n))
  .sort((a, b) => a - b)

/** The snapshot epoch (year) nearest to `year`. */
export function epochForYear(year: number): number {
  let best = borderEpochs[0]
  let bestDist = Infinity
  for (const e of borderEpochs) {
    const d = Math.abs(e - year)
    if (d < bestDist) {
      bestDist = d
      best = e
    }
  }
  return best
}

const fcCache = new Map<number, FeatureCollection<Geometry, BorderProps>>()

/** The border polygons for the epoch nearest `year`. */
export function bordersForYear(year: number): {
  epoch: number
  features: FeatureCollection<Geometry, BorderProps>
} {
  const epoch = epochForYear(year)
  let fc = fcCache.get(epoch)
  if (!fc) {
    fc = feature(topo, topo.objects[`y${epoch}`]) as unknown as FeatureCollection<
      Geometry,
      BorderProps
    >
    fcCache.set(epoch, fc)
  }
  return { epoch, features: fc }
}
