# Historical Atlas — Engineering Handoff

This document briefs the next agent: what the app is, how it's built, where everything lives,
what's done, what's in progress **right now**, and how to verify your work. Read the
"IMMEDIATE TASK" section first.

---

## ✅ DONE: projection + "whole map seeable" (2026-06-01)

The map projection bug **and** the related "we can only see Russia" complaint are both
**fixed, verified across eras, and shipped to the desktop build.**

**The projection bug (fixed):** `src/renderer/src/map/projection.ts` built the Europe-focused
Mercator projection with `geoMercator().fitExtent(extent, VIEW_BBOX)` where `VIEW_BBOX` was a
lat/lon **Polygon**. d3-geo treats polygon edges as geodesics and is winding-sensitive, so it
fit a near-global area and rendered Europe at world scale — countries came out tiny and
clustered. The fix: `fitExtent` is now given a **MultiPoint of the four corner points**
(`VIEW_CORNERS`). Confirmed in the running app — France renders ~99–129px wide, Europe fills
the frame at proper scale at **100 / 800 / 1700 / 1914** (all screenshotted).

**The "only see Russia" complaint (fixed) — and the design call behind it:** the real cause
of "we can only see Russia" after the projection fix was the **fly-to-centroid-on-select**
behaviour (`WorldMap.tsx`). Centering+zooming on a huge eastern polity like Russia filled the
frame with it and pushed western Europe off. We chased a fixed `ZOOM_TO_COUNTRY`, then a
zoom-to-fit-bbox, before settling on the right answer: **selecting a country now snaps back to
the full-Europe view (k=1), not a zoom-in.** Rationale — the relation **arrows** (war/ally/
interaction) fan across the whole continent, so both ends must be visible; any zoom-to-country
hides the arrow targets and most of the map. Selection is conveyed by the highlighted fill,
the glowing marker, and the arrows. Manual scroll/drag still zooms for detail; double-click or
the reset chip returns to full view. Verified: **Russia @ 1700 and @ 1914 both show the whole
map** with arrows reaching France/Sweden/Poland/Germany/Turkey.

(The old `ZOOM_TO_COUNTRY` constant was removed. `geoBounds` in `projection.ts` is now used
by the wrap-artifact filter below.)

If you want to revisit this, the only knob is the `useEffect` keyed on `selectedId` in
`WorldMap.tsx` — it just `setView({ k: 1, x: 0, y: 0 })`.

### ✅ DONE: countries vanished at 1757 and earlier (2026-06-01)

**Symptom:** at year ≤ 1757 the map went "mostly empty" — Spain, the UK, the Dutch, the German
states, Poland etc. disappeared (France/Austria/Russia stayed). Looked fine in screenshots
because the missing area was painted the same dark navy as the sea (tip #2 bit me hard here).

**Cause:** the `historical-basemaps` source has a few **antimeridian-wrap artifacts** — polygons
whose ring winding makes d3-geo fill the *complement*, so they project to a frame-filling shape.
The worst is **"central Asian khanates"** in the **1700 & 1715 epochs** (projected bbox ≈
3817×3817, starting at x≈−1578, far west of Ireland). Because it has **no alias**, it's drawn
with an **opaque** context fill, so it painted over every polygon drawn before it in the array.
The same wrap exists for **Russia/USSR/UK/Spain** in 1800–2010 epochs, but those are **aliased**
→ translucent tint → they don't hide anything, which is why >1757 looked fine.

**Fix:** `WorldMap.tsx` `featurePaths` now drops globe-spanning wrap artifacts — but **only
non-aliased context** (`!entityId && projected w>2.5·MAP_WIDTH || h>2.5·MAP_HEIGHT`). An aliased
country is *never* dropped (so the USSR's wrapped polygon in 1960 still renders). Verified by
hit-test (`elementsFromPoint`) that Spain/UK/Germany are no longer occluded at 1700/1715, and
that 1960/2010 still contain Russia.

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

## 🗺️ Tips for working on the map (read before touching `WorldMap.tsx` / `projection.ts`)

The map is by far the trickiest part. Hard-won lessons:

1. **Never `fitExtent` a lat/lon polygon.** Fit a **MultiPoint of corners** (`VIEW_CORNERS` in
   `projection.ts`). d3-geo treats polygon edges as geodesics and is winding-sensitive, so a
   rectangle polygon makes it fit a near-global area and render Europe at world scale (tiny,
   clustered). This cost me an afternoon — don't reintroduce it. The projection is fixed to
   lon −24…56 / lat 31…71; it does **not** recenter per selection.

2. **Debug with DOM numbers, not screenshots.** The dark navy theme makes screenshots look
   low-contrast and "empty," and I twice misjudged the map from them. Verify with
   `preview_eval`: read `path.getBBox()` (geometry/viewBox coords, *pre*-zoom) and
   `path.getBoundingClientRect()` (screen px, *post*-zoom). A correctly-scaled France is
   ~100–130px wide in the viewBox; if it's ~20px, the projection is broken.

3. **Two coordinate spaces.** The `<svg>` has a fixed `viewBox` (1000×760) and scales via CSS.
   Zoom/pan is a `<g transform="translate(x,y) scale(k)">` wrapping the content (`view={k,x,y}`).
   So `project()`/`geoPathString()` output is viewBox space; the on-screen position is that
   *times* the zoom transform. `getBBox` ignores the transform; `getBoundingClientRect` includes
   it. Use the right one for what you're checking.

4. **Polygons keep their full real geometry.** Russia reaches the Pacific, the Ottomans reach
   Arabia — they extend far off-frame east and the viewBox just clips them. A huge
   `getBoundingClientRect` width for Russia is normal; **don't** try to clip geometry or
   "fix" it. (This is also why selecting a giant eastern polity must *not* zoom-to-it.)

5. **The pan clamp is load-bearing.** `x ∈ [W(1-k), 0]`, `y ∈ [H(1-k), 0]` keeps land covering
   the frame; at `k=1` it forces `x=y=0` (snaps to the full-Europe fit). That's why "reset" and
   "select → full view" both just `setView({k:1,x:0,y:0})`.

6. **`didPan` prevents drag-selecting.** A pointermove >3px sets `didPan.current=true`;
   `handleFeatureClick` bails if it's set, so a drag-release doesn't select a country. Any new
   clickable map element must respect `didPan`.

7. **The `animate` flag.** The CSS transition on the zoom `<g>` is enabled only for programmatic
   moves (select/reset) and turned **off** before wheel/drag — otherwise dragging visibly lags
   behind the cursor. Call `setAnimate(false)` before any manual view change.

8. **Clicking is name→entity, via `borderAliases.ts`.** Map polygons are historical polities
   ("Holy Roman Empire", "Carolingian Empire"), not modern countries. To make a polygon
   clickable, add its **exact lower-cased name** to `BORDER_ALIAS`. The names have typos and
   en-dashes ("Scottalnd", "Polish–Lithuanian Commonwealth") — match them verbatim. Re-run
   `node scripts/build-borders.cjs`; it prints the full polity vocabulary across all epochs.
   Big empires intentionally map to one representative entity (Roman→Italy, Carolingian→France).

9. **Adding a country needs BOTH halves.** A `countries/<id>.ts` file (for the panel data +
   the `centroid` that anchors its arrows) **and** alias entries for its polygon names per era
   (so its shape is clickable/highlightable). One without the other = data with no shape, or a
   shape with no data.

10. **Arrows anchor at the entity `centroid`, not the polygon.** So set a sensible centroid
    (Moscow for Russia, not the centroid of Siberia) or arrows start in the wrong place.
    Arrowheads are SVG `marker`s with `markerWidth/Height=3` (the user's "50% smaller" request).

11. **Borders are stepped, nearest-epoch snapshots** (`bordersForYear` → `epochForYear`,
    23 epochs). A border change appears at the snapshot boundary, not the exact year. Add more
    epochs in `scripts/build-borders.cjs` and rebuild if you need finer granularity.

12. **Tints are subtle at full zoom on purpose** — only European polygons are drawn, so Europe
    sits in open sea and the 0.34-alpha country fills read faint when fully zoomed out; they pop
    once you scroll in. If you improve legibility, change the alpha/stroke, **not** the geometry.

13. **Selection does not zoom** (current design — see the DONE section). It snaps to full Europe
    so both ends of every relation arrow stay visible. The only knob is the `useEffect` keyed on
    `selectedId`. If you ever re-add zoom-to-country, you must also keep the arrow targets in
    frame, or the map "disappears" for big/eastern countries.

14. **Beware globe-spanning wrap artifacts in the source data.** A few polygons (notably
    "central Asian khanates" @1700/1715, and Russia/USSR/UK/Spain in later epochs) cross the
    antimeridian and project to a frame-filling shape. A **non-aliased** one is opaque and paints
    over every country drawn before it → "countries vanish" (this was the ≤1757 bug). `featurePaths`
    filters them out via `geoBounds`, but **only non-interactive context** — never an aliased
    country (those just wrap-tint harmlessly). To find them: the node snippet in the DONE section
    builds the projection and lists any polygon with projected `w/h > 2.5×` the map or `x0` far
    west. A *real* clean fix would dewrap/clip them in `scripts/build-borders.cjs`.

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
