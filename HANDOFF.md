# Historical Atlas — Engineering Handoff

This document briefs the next agent: what the app is, how it's built, where everything lives,
what's done, what's in progress **right now**, and how to verify your work. Read the
"IMMEDIATE TASK" section first.

---

## 🔴 IMMEDIATE TASK (in progress — finish this first)

I was fixing a **map projection bug** and the fix is applied but **not yet verified or
shipped to the desktop build.**

**The bug:** `src/renderer/src/map/projection.ts` built the Europe-focused Mercator
projection with `geoMercator().fitExtent(extent, VIEW_BBOX)` where `VIEW_BBOX` was a lat/lon
**Polygon**. d3-geo treats polygon edges as geodesics and is winding-sensitive, so it fit a
near-global area and rendered Europe at world scale — countries came out tiny and clustered
(the user reported "we can only see Russia… I want the whole map seeable"). Root cause was
**not** zoom; it was the projection.

**The fix (already written):** `fitExtent` is now given a **MultiPoint of the four corner
points** (`VIEW_CORNERS`) instead of a polygon. Verified in isolation with a node script:
polygon → `scale 117` (broken); MultiPoint → `scale 607`, France ~129px wide (correct).
`npm run typecheck` passes.

**What you must still do:**
1. `npm run web` (or use the Claude Preview MCP server named `atlas-web`, port 5199), open at
   ~1470×860, **hard-reload**, and confirm: Europe fills the frame at proper scale, all
   period polities render (not tiny/clustered), borders look right at 100 / 800 / 1700 / 1914.
2. Re-check the user's original complaint: select **Russia at 1700** and confirm the **whole
   map is visible** (western Europe no longer pushed off / shrunk). `ZOOM_TO_COUNTRY` in
   `WorldMap.tsx` was lowered to `1.2` while chasing this; with the projection fixed you may
   be able to restore a slightly stronger zoom (e.g. 1.4–1.6) — use judgement and a screenshot.
3. Rebuild and relaunch the desktop app: `npm run build` then `npx electron .` (see "Running").
4. Tell the user it's fixed, with a screenshot.

There are also stray helper scripts in `/tmp` (`projtest*.cjs`, `checkborders.cjs`,
`figlist*.cjs`) — diagnostics only, safe to ignore.

---

## What the app is

**Historical Atlas** is a polished **Electron desktop app** (React + TypeScript + Vite) — an
*interactive historical atlas of Europe* from 0 AD to the present. It is an explorable
reference tool, **not a game**. The user explores history by:

- A central **map of Europe** whose **borders are historically accurate and morph by era**
  (Roman Empire → Carolingian → fragmented HRE → nation-states → EU).
- A **circular year dial** (top-center) to move through time (drag, scroll, arrow keys).
- **Clicking a country/polity** → it's highlighted, the map gently zooms to it, and **curved
  dotted arrows** fan out to related polities: **red = war, blue = ally, orange = notable
  interaction**, with an arrowhead at the target.
- **Left panel:** the selected polity for that year — era, period name, capital, government,
  religion/culture tags, summary; below it, **Notable Figures** (large painted portrait cards).
- **Right panel:** relations grouped into Wars / Allies / Notable Interactions (click a row to
  jump to that country).
- **Bottom:** an events timeline near the current year + an era strip (click to jump eras).

The visual style is a dark navy + antique-gold "atlas" aesthetic (serif headings, ornate
panels). The dark theme makes screenshots look low-contrast — trust DOM measurements over
eyeballing screenshots.

---

## Tech stack & how to run

- **electron-vite** drives main/preload/renderer. **React 18**, **d3-geo** (projection),
  **topojson-client/-server** (borders), **electron-builder** (packaging).
- The renderer is a **pure web app** — it runs with or without Electron. This matters for
  verification: you can preview it in a browser without launching Electron.

**Scripts (`package.json`):**
- `npm run dev` — full Electron app with HMR.
- `npm run web` — renderer only in a browser (for the Preview MCP). Port 5199, configured in
  `.claude/launch.json` (server name `atlas-web`).
- `npm run build` — production Electron build into `out/`.
- `npx electron .` — launch the built app (main entry is `out/main/index.js`).
- `npm run typecheck` — `tsc --noEmit` on the renderer. **Always run before declaring done.**
- `npm run dist:win` / `dist:mac` — package installers (Windows x64 nsis + portable; mac).

**Verification workflow I use every change:** edit → `npm run typecheck` → start the
`atlas-web` Preview MCP server → resize 1470×860 → drive it with `preview_eval` (click eras,
countries, read DOM) → `preview_screenshot` → when good, `npm run build` → `pkill -f Electron`
→ `npx electron .` (background) → grep the log for `[atlas] work area` / errors. The Electron
window opens at the screen work area size (logged on boot). The user is on macOS (arm64); the
work area is **1470×858**, so always test the renderer at ~1470px wide.

---

## Repository map

```
src/main/index.ts          Electron main: window sized to screen work area, hidden-inset
                           titlebar, minimal menu, opens external links in browser.
src/preload/index.ts       contextBridge → window.electronAPI (platform/versions). Built as
                           index.mjs; main references ../preload/index.mjs.
src/renderer/index.html    CSP meta (allows file: img-src for packaged build, ws: for dev HMR).
src/renderer/src/
  main.tsx                 React root.
  App.tsx                  Top-level state: { year, selectedId }. Derives era/country/period/
                           relations/events. Lays out topbar / left / center / right / bottom.
                           ERA_YEARS maps the era-strip buttons to representative years.
  components/
    WorldMap.tsx           ★ The heart. Renders the period border polygons, hybrid clicking,
                           relation arrows, the selected label, and ALL zoom/pan logic.
    YearDial.tsx           Compass dial: a PNG background (assets/ui/compass-dial@2x.png) with
                           YEAR/number/era text overlaid; rotary drag + wheel + arrow keys.
    SelectedPanel.tsx      Left panel — selected country + its period facts + summary.
    RelationsPanel.tsx     Right panel — outgoing relations grouped by type; rows are clickable.
    FigureCard.tsx         Notable figures. If a portrait PNG exists → big "character card"
                           (image + name overlaid); else a compact placeholder row.
    PlaceholderIcon.tsx    Renders the icon badge PNGs (war/ally/person/etc).
  data/
    index.ts               Barrel — re-exports everything below.
    types.ts               Era, HistEvent, PlaceholderIcon token, RelationType. (Some legacy
                           Entity/Relation/Figure types remain, unused — safe to ignore.)
    eras.ts                11 eras (Roman … Contemporary), eraForYear(), MIN_YEAR=0,
                           MAX_YEAR/PRESENT_YEAR=2025.
    events.ts              Global timeline events + eventsNear(year). Clicking sets the year.
    countryTypes.ts        Country, CountryPeriod, CountryRelation, CountryFigure interfaces.
    countries.ts           Loads countries/*.ts via import.meta.glob. getCountry, periodFor,
                           relationsAt (outgoing, target resolved), countriesActiveAt,
                           activeMapNamesAt.
    countries/*.ts         ★ One file per country (15 so far). The dataset. See its README.
    borders.ts             Loads the period-border TopoJSON. borderEpochs, epochForYear(year)
                           (nearest), bordersForYear(year) → { epoch, FeatureCollection }.
    borderAliases.ts       ★ Maps historical polity names → our country ids (the hybrid glue).
  map/projection.ts        ★ The Europe Mercator projection + geoPathString() + project().
  styles/index.css         All styling (one file).
  assets/
    borders/europe-borders.topo.json   23 epoch snapshots, one shared-arc TopoJSON (~606KB).
    icons/*.png + icons.ts             10 icon badges + URL map.
    figures/*.png + figures.ts         Figure portraits (11 French done) + slug loader.
    ui/compass-dial*.png               Year-dial artwork.
    map/countries-110m.json            LEGACY modern map — no longer imported (kept for ref).
scripts/build-borders.cjs   One-time: fetch historical-basemaps snapshots, filter to Europe,
                           round coords, pack into the TopoJSON. Re-run to add/adjust epochs.
ASSETS.md / SOURCES.md      Asset licenses + data sources (read these; note the GPL caveat).
FIGURES.md / DESIGN_ASSETS.md  Art specs for portraits and icons/compass (for the designer).
```

---

## Two data models you must understand

The app reconciles **two representations** ("hybrid" — the user explicitly chose this):

### 1. Country entities (the data)
`data/countries/*.ts` — each is a `Country` with `{ id, name, mapNames, color, centroid,
periods[] }`. A **period** is one polity-in-time `{ startYear, endYear, eraId, name,
government, capital, religion[], culture[], summary, relations[], figures[] }`. Picking a year
selects the containing period. **Relations are OUTGOING and directional** — they become the
arrows. Mutual wars/alliances are listed on **both** countries. Gaps between periods are
intentional ("nothing notable" → not interactive that year). 15 countries exist: France,
Germany, United Kingdom, Spain, Italy, Austria, Russia, Netherlands, Sweden, Turkey, Denmark,
Poland, Greece, Portugal, Hungary. **Adding a country = drop a new file** (auto-discovered).

### 2. Historical border polygons (the visuals)
`assets/borders/europe-borders.topo.json` — 23 epoch snapshots (years 100, 400, 600, 800,
1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1715, 1800, 1815, 1880, 1914, 1920, 1938,
1945, 1960, 1994, 2010) from the open **`historical-basemaps`** dataset (GPL-3.0). Each
polygon has a period `name` (e.g. "Holy Roman Empire", "Carolingian Empire", "Ottoman
Empire"). For a given year the app shows the **nearest** epoch.

### The glue (`borderAliases.ts`)
`entityForBorderName("Holy Roman Empire") → "germany"`. This maps each historical polity name
to one of our country entities. **Big empires map to one representative entity** (Roman
Empire → Italy, Carolingian → France, Byzantine → Greece, Ottoman → Turkey). Polygons with no
alias are drawn as **dim, non-interactive context**. In `WorldMap.tsx`, each polygon: if it
aliases to an entity it's clickable and tinted with that entity's color; the selected entity's
polygon is highlighted strongly; relation-target polygons are tinted by relation type;
clicking selects the mapped entity. Tooltips (`<title>`) show the real period name.

**Gotcha:** the alias keys are lower-cased exact strings from the dataset and include odd
spellings/typos ("Scottalnd", en-dashes in "Polish–Lithuanian Commonwealth"). To extend
coverage, re-run `node scripts/build-borders.cjs` — it prints the full polity vocabulary —
then add aliases.

---

## Key systems & gotchas

- **Projection (`map/projection.ts`):** fixed 1000×760 viewBox; `geoMercator` fit to the
  Europe window via a **MultiPoint** (see IMMEDIATE TASK — never fit a lat/lon polygon).
  `geoPathString(feature)` → SVG path; `project(lon,lat)` → [x,y]. Borders/Russia/Turkey
  keep full geometry (extend off-frame east); the viewBox clips them visually.
- **Zoom/pan (`WorldMap.tsx`):** `view = {k,x,y}` with pan clamped so land always covers the
  frame. Scroll = zoom-to-cursor; left-drag = pan (a `didPan` ref suppresses the click that
  would otherwise select on drag-release); double-click / the "reset" chip resets.
  Selecting a country flies to its centroid at `ZOOM_TO_COUNTRY` (currently 1.2) with a CSS
  transition (the `animate` flag turns the transition off during manual pan).
- **Year dial:** compass PNG behind text. Drag is rotary (angle delta → years). The ±buttons
  were removed earlier per the user. Range 0–2025.
- **Icons & portraits are PNGs, slug-matched.** `assets/figures.ts` globs `figures/*.png`
  and maps by `figureSlug(name)`; `FigureCard` shows the portrait if present, else a
  placeholder. **Only 11 French portraits exist** — the rest fall back to placeholders. The
  full filename list + art spec is in `FIGURES.md` (style: stylised 2D "leader portrait",
  256×256, dark vignette). Icon spec is in `DESIGN_ASSETS.md`.
- **CSP** (`index.html`) allows `file:` images (for the packaged build) and `ws:` (dev HMR).
  Don't tighten it without re-testing the packaged `.exe`/app.
- **Windows `.exe`:** `npm run dist:win` builds an x64 NSIS installer + portable exe into
  `release/`. Builds on macOS without Wine. App is **unsigned** (SmartScreen warns) and uses
  the default Electron icon. License caveat: the borders dataset is **GPL-3.0** — fine for
  personal/educational use; revisit before any closed-source public distribution.

---

## Suggested next steps (after the projection fix)

1. **Finish/verify the projection + zoom** so the whole map is clearly visible at every era
   (the active user request).
2. **Expand the dataset** — add the remaining European countries (Ireland, Norway, Belgium,
   Switzerland, Czechia, Ukraine, Romania, Serbia, Bulgaria, Finland, the Baltics) as new
   `countries/*.ts` files, and add their border-name aliases. Flesh out thin periods.
3. **More figure portraits** — generate the remaining ~72 PNGs per `FIGURES.md`; they light up
   automatically as added.
4. **Polish:** consider per-relation year ranges (currently relations show for the whole
   period, which can look slightly anachronistic), a custom app icon, and tuning border
   legibility at full zoom (tints are subtle when zoomed all the way out).

Keep the verification loop tight: typecheck → preview/screenshot → build → relaunch Electron.
The user appreciates concise status updates with a screenshot and values historical accuracy.
