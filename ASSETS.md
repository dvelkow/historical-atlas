# Assets & Licenses

This document records every third-party asset bundled with **Historical Atlas**, its
source, and its license. Assets are stored locally in the repository — the app makes no
network requests at runtime.

---

## Historical borders (the live base map)

| | |
|---|---|
| **File** | [`src/renderer/src/assets/borders/europe-borders.topo.json`](src/renderer/src/assets/borders/europe-borders.topo.json) |
| **Format** | TopoJSON — one object per epoch year (shared arcs), Europe-filtered, ~600 KB |
| **Epochs** | 100, 400, 600, 800, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1715, 1800, 1815, 1880, 1914, 1920, 1938, 1945, 1960, 1994, 2010 |
| **Source** | [`historical-basemaps`](https://github.com/aourednik/historical-basemaps) by Aurélien Ourednik |
| **License** | **GPL-3.0** |
| **Built by** | [`scripts/build-borders.cjs`](scripts/build-borders.cjs) (fetches the snapshots, filters to Europe, rounds coordinates, packs into one TopoJSON) |

This is the **map you actually see** — the borders change to the snapshot nearest the
selected year, so the shapes morph through history (Roman Empire → Carolingian → fragmented
HRE → nation-states → EU era). Each polygon's `name` is its period polity (e.g. "Holy Roman
Empire", "Ottoman Empire"); a name→entity alias table
([`borderAliases.ts`](src/renderer/src/data/borderAliases.ts)) links clickable shapes to our
country data.

> ⚠️ **License note:** the borders dataset is **GPL-3.0** (copyleft). That is fine for
> personal, educational, and internal use. If you distribute a build publicly, the GPL may
> extend to the distributed work — revisit licensing (or swap to a more permissive border
> source) before shipping a closed-source release.
>
> ⚠️ Borders are **approximate** historical reconstructions on "rough period" snapshots, not
> exact year-by-year frontiers.

---

## World map geometry (legacy — no longer rendered)

The modern Natural Earth map below was the original base map. It has been **replaced** by the
historical borders above and is no longer imported by the app; the file is kept for reference.

| | |
|---|---|
| **File** | [`src/renderer/src/assets/map/countries-110m.json`](src/renderer/src/assets/map/countries-110m.json) |
| **Format** | TopoJSON (countries + land objects, ~105 KB) |
| **Resolution** | 1:110 m (low detail, ideal for a continental/world view) |
| **Source package** | [`world-atlas@2.0.2`](https://github.com/topojson/world-atlas) by Mike Bostock |
| **Downloaded from** | `https://unpkg.com/world-atlas@2.0.2/countries-110m.json` |
| **Underlying data** | [Natural Earth](https://www.naturalearthdata.com/) — *1:110m Cultural Vectors, Admin 0 – Countries* |
| **License** | **Public Domain** |

### License details

- **Natural Earth** data is released into the **public domain**. From the Natural Earth
  terms of use: *"All versions of Natural Earth raster and vector map data found on this
  website are in the public domain. You may use the maps in any manner, including
  modifying the content and design, electronic dissemination, and offset printing."*
  No permission is needed, and attribution — while not required — is appreciated and
  given here.
- The **`world-atlas`** packaging scripts/tooling that convert Natural Earth shapefiles
  to TopoJSON are distributed under the **ISC License** (© Michael Bostock). This
  license covers the build tooling; the resulting geographic data remains public domain.

### How it was obtained

```bash
curl -sL https://unpkg.com/world-atlas@2.0.2/countries-110m.json \
  -o src/renderer/src/assets/map/countries-110m.json
```

### How it is used

The TopoJSON is imported directly by the renderer
([`src/renderer/src/map/projection.ts`](src/renderer/src/map/projection.ts)), converted
to GeoJSON with `topojson-client`, and projected with `d3-geo` (a Europe-centred Mercator
fitted to a fixed bounding box). Each feature carries a `name` property (e.g. `"France"`,
`"United Kingdom"`) which the app matches against an entity's `territories` list to softly
highlight the modern countries a historical polity roughly covered.

> **Important:** The geometry is a **modern** political map. It is used as a *base layer
> only*. Historical borders are **not** drawn. Historical polities are represented by
> approximate centroid markers, labels, and relationship arcs overlaid on the modern map.
> See [SOURCES.md](SOURCES.md) for how historical approximations are handled.

---

## Fonts

No font files are bundled. The UI uses a system serif/sans stack
(`Iowan Old Style` / `Palatino` / `Georgia` → serif, and the platform UI sans-serif)
so the app ships with **no external font downloads** and works fully offline. The
renderer's Content-Security-Policy forbids remote resources.

## Icons & portraits

All icons and the public-figure portrait are **labeled placeholders**, not final art
(e.g. `ICON_WAR`, `ICON_ALLY`, `ICON_INTERACTION`, `ICON_PERSON`, `ICON_TREATY`,
`ICON_TRADE`, `ICON_RELIGION`, `ICON_DYNASTY`, `ICON_CULTURE`). They are rendered as
small text chips by [`PlaceholderIcon.tsx`](src/renderer/src/components/PlaceholderIcon.tsx)
and the brand mark is a hand-drawn inline SVG compass. No third-party icon set or imagery
is included.

---

## Runtime dependencies (npm)

| Package | License | Use |
|---|---|---|
| `react`, `react-dom` | MIT | UI |
| `d3-geo` | ISC | map projection & path generation |
| `topojson-client` | ISC | TopoJSON → GeoJSON |
| `electron` | MIT | desktop shell |
| `electron-vite`, `vite`, `@vitejs/plugin-react` | MIT | build tooling |
| `electron-builder` | MIT | packaging |
| `typescript` | Apache-2.0 | types/tooling |

All are permissively licensed (MIT/ISC/Apache-2.0).
