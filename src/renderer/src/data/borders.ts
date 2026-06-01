import { feature } from 'topojson-client'
import type { FeatureCollection, Geometry } from 'geojson'
import topoData from '../assets/borders/europe-borders.topo.json'

// Period-accurate European borders, packed as one shared-arc TopoJSON with one
// object per epoch year (see scripts/build-borders.cjs). Source: the open
// `historical-basemaps` dataset (GPL-3.0) — see ASSETS.md / SOURCES.md.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topo = topoData as any

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
