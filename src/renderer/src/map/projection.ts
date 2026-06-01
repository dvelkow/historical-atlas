import { geoMercator, geoPath, geoGraticule10, type GeoProjection } from 'd3-geo'

// Fixed SVG drawing space; the <svg> scales responsively via CSS while all
// projected coordinates live in this 1000×760 space.
export const MAP_WIDTH = 1000
export const MAP_HEIGHT = 760

// The window we frame: Atlantic to the Caucasus, North Africa to the Arctic.
// fitExtent is given the four CORNER POINTS (a MultiPoint), not a lat/lon
// polygon — fitting a polygon makes d3 treat the edges as geodesics (and is
// winding-sensitive), which fits a far larger area and shrinks Europe to world
// scale. Points have no edges, so the fit matches the lon/lat box exactly.
const VIEW_CORNERS = {
  type: 'MultiPoint',
  coordinates: [
    [-24, 31],
    [56, 31],
    [56, 71],
    [-24, 71]
  ]
}

export const projection: GeoProjection = geoMercator().fitExtent(
  [
    [10, 10],
    [MAP_WIDTH - 10, MAP_HEIGHT - 10]
  ],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  VIEW_CORNERS as any
)

const pathGen = geoPath(projection)

// Faint graticule for an "atlas" feel.
export const graticulePath: string = pathGen(geoGraticule10()) ?? ''

/** SVG path string for any GeoJSON feature/geometry, in the fixed space. */
export function geoPathString(f: unknown): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return pathGen(f as any) ?? ''
}

/** [lng,lat] → [x,y] in the fixed space, or null if unprojectable. */
export function project(lng: number, lat: number): [number, number] | null {
  const p = projection([lng, lat])
  if (!p) return null
  return [p[0], p[1]]
}
