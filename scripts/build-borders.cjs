#!/usr/bin/env node
/*
 * Builds src/renderer/src/assets/borders/europe-borders.topo.json from the
 * open `historical-basemaps` dataset (GPL-3.0). Fetches a curated set of
 * "rough period" snapshots, keeps only features touching Europe + their NAME,
 * rounds coordinates, and packs every epoch into ONE TopoJSON topology so the
 * arcs shared between epochs are stored once (small file).
 *
 * Run once: node scripts/build-borders.cjs
 */
const fs = require('fs')
const path = require('path')
const { topology } = require('topojson-server')

const EPOCHS = [
  100, 400, 600, 800, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1715,
  1800, 1815, 1880, 1914, 1920, 1938, 1945, 1960, 1994, 2010
]
// Generous Europe + Mediterranean/Anatolia box for filtering whole features.
const BBOX = { minLon: -30, maxLon: 64, minLat: 27, maxLat: 74 }
const BASE = 'https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson'
const CACHE = '/tmp/borders_cache'
const OUT = path.resolve(__dirname, '../src/renderer/src/assets/borders/europe-borders.topo.json')

const round = (n) => Math.round(n * 100) / 100
function roundCoords(c) {
  if (typeof c[0] === 'number') return [round(c[0]), round(c[1])]
  return c.map(roundCoords)
}
function intersectsEurope(coords) {
  let hit = false
  const scan = (c) => {
    if (hit) return
    if (typeof c[0] === 'number') {
      const [x, y] = c
      if (x >= BBOX.minLon && x <= BBOX.maxLon && y >= BBOX.minLat && y <= BBOX.maxLat) hit = true
    } else for (const cc of c) scan(cc)
  }
  scan(coords)
  return hit
}

async function getEpoch(year) {
  if (!fs.existsSync(CACHE)) fs.mkdirSync(CACHE, { recursive: true })
  const cacheFile = path.join(CACHE, `world_${year}.geojson`)
  if (fs.existsSync(cacheFile)) return JSON.parse(fs.readFileSync(cacheFile, 'utf8'))
  const res = await fetch(`${BASE}/world_${year}.geojson`)
  if (!res.ok) throw new Error(`fetch world_${year} -> ${res.status}`)
  const txt = await res.text()
  fs.writeFileSync(cacheFile, txt)
  return JSON.parse(txt)
}

;(async () => {
  const objects = {}
  const vocab = new Map() // name -> Set(years)
  for (const year of EPOCHS) {
    const gj = await getEpoch(year)
    const features = []
    for (const f of gj.features) {
      const name = f.properties.NAME || f.properties.name
      if (!name || !f.geometry) continue
      if (!intersectsEurope(f.geometry.coordinates)) continue
      features.push({
        type: 'Feature',
        properties: { name },
        geometry: { type: f.geometry.type, coordinates: roundCoords(f.geometry.coordinates) }
      })
      if (!vocab.has(name)) vocab.set(name, new Set())
      vocab.get(name).add(year)
    }
    objects[`y${year}`] = { type: 'FeatureCollection', features }
    console.log(`  ${year}: ${features.length} features`)
  }

  const topo = topology(objects, 1e5)
  if (!fs.existsSync(path.dirname(OUT))) fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, JSON.stringify(topo))
  const kb = (fs.statSync(OUT).size / 1024).toFixed(0)
  console.log(`\nWrote ${OUT} (${kb} KB), ${EPOCHS.length} epochs.`)

  const names = [...vocab.keys()].sort((a, b) => a.localeCompare(b))
  console.log(`\n=== ${names.length} unique European polity names across all epochs ===`)
  console.log(names.join(' | '))
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
