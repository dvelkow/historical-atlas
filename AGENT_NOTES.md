# Working Notes for the Next Agent — how to make changes & current focus

Read [`HANDOFF.md`](HANDOFF.md) first (it's the full engineering reference: what the app is,
every file's role, the two data models, projection/zoom internals, and the dated DONE log).
**This file is the *method* + the *current focus*** — how I actually work on this repo and what's
next. Its companion is [`EXPERIENCE_GAPS.md`](EXPERIENCE_GAPS.md) (the prioritised backlog).

---

## The change loop (do this every time)

1. **Edit** the source (data lives in `src/renderer/src/data/`).
2. **`npm run typecheck`** — `tsc --noEmit`. Always green before moving on.
3. **Preview in the browser** via the Claude Preview MCP server **`atlas-web`** (port 5199):
   - resize to **1470×858** (the user's macOS work area — always test at this width).
   - drive it with `preview_eval`: set the year by dispatching wheel events on `.year-dial`
     (`new WheelEvent('wheel',{deltaY:-100,shiftKey:true})` = +10yr; loop until `.dial-year`
     reads the target), click a polity by dispatching a `MouseEvent('click')` on a
     `.countries .country` path, and read state from the DOM (`.sp-name`, `.map-footnote`,
     `getBBox()` / `getBoundingClientRect()`).
   - `preview_screenshot` to eyeball — but **trust DOM numbers over screenshots**; the dark
     navy theme makes things look emptier/low-contrast than they are. A correct France is
     ~100–130px wide in the 1000×760 viewBox; ~20px means the projection is broken.
4. **Ship to desktop** when good: `npm run build` → kill the old Electron
   (`pkill -f Electron`) → relaunch **from the repo root** with `npx electron .` (background),
   then grep the log for `[atlas] work area`.
5. **Commit + push** to `main` (solo repo, work directly on main). End commit messages with the
   `Co-Authored-By: Claude Opus 4.8` line.

### Two bash gotchas I hit
- **Never `cd` inside a compound bash command** — the working directory persists between tool
  calls, and a stray `cd src/...` made a later `npx electron .` launch an empty app from the
  wrong dir. Use **absolute paths** instead.
- After adding/removing image assets (portraits), you **must `npm run build`** — figures are
  bundled at build time via `import.meta.glob`; the dev preview hot-reloads but the packaged
  app won't see new PNGs until rebuilt.

---

## Data invariants — enforce with these node checks after ANY data edit

The dataset is large enough that two scripted invariants catch most mistakes. Run both; both
must pass before commit.

**1. No dangling relation targets** (every `to:` must be an existing entity id):
```bash
node -e 'const fs=require("fs"),p=require("path");const d="src/renderer/src/data/countries";
const ids=new Set(fs.readdirSync(d).filter(f=>f.endsWith(".ts")).map(f=>f.replace(".ts","")));let bad=0;
for(const f of fs.readdirSync(d).filter(f=>f.endsWith(".ts")))for(const m of fs.readFileSync(p.join(d,f),"utf8").matchAll(/to:\s*[\x27"]([^\x27"]+)[\x27"]/g))if(!ids.has(m[1])){console.log("DANGLING",f,m[1]);bad++;}
console.log(bad?bad+" dangling":"OK");'
```

**2. No >150-year period gaps and no overlaps** (so scrubbing never shows "no recorded polity"):
```bash
node -e 'const fs=require("fs"),p=require("path");const d="src/renderer/src/data/countries";let bad=0;
for(const f of fs.readdirSync(d).filter(f=>f.endsWith(".ts")).sort()){const s=fs.readFileSync(p.join(d,f),"utf8");
const per=[...s.matchAll(/startYear:\s*(-?\d+),[\s\S]*?endYear:\s*(-?\d+),/g)].map(m=>[+m[1],+m[2]]).sort((a,b)=>a[0]-b[0]);
let cur=0,g=[];for(const[a,b]of per){if(a-cur>150)g.push(cur+"-"+a);cur=Math.max(cur,b);}if(2025-cur>150)g.push(cur+"-2025");
let ov=[];for(let i=1;i<per.length;i++)if(per[i][0]<per[i-1][1])ov.push("overlap@"+per[i][0]);
if(g.length||ov.length){bad++;console.log(f,g.join(","),ov.join(","));}}console.log(bad?bad+" issues":"OK");'
```
(Small intentional gaps <150y are fine — e.g. France 1940–44 occupation.)

---

## How to add things

- **A country** = drop a new `data/countries/<id>.ts` (auto-discovered by `import.meta.glob`).
  Needs: a stable kebab `id`, a **distinct hex `color`** (grep existing colors first to avoid
  clashes), a `centroid: [lon,lat]` that anchors its arrows (use the political centre, e.g.
  Moscow for Russia), `mapNames`, and `periods[]`. Then **add border aliases** (below) and
  optionally a `FIGURES_*.md` portrait brief. `bulgaria.ts` is the gold-standard template.
- **A period** = `{ startYear, endYear, eraId, name, government, capital, religion[], culture[],
  summary, relations[], figures[] }`. Keep chronological, abut neighbours (no >150y gap).
  - `eraId` = the era containing `startYear` (roman 0–283 … contemporary 1991–2025; see `eras.ts`).
  - `modernEquivalent: false` ONLY for Roman-era provinces, foreign-ruled spans, or multinational
    empires/unions (so the panel doesn't mislabel them "(Modern X)"). Omit it otherwise.
  - `relations` are **outgoing/directional** → they become the map arrows; `to` must be a real id.
  - `figures` may be `[]` for a genuinely figure-less span (e.g. prehistoric).
- **Border aliases** (`data/borderAliases.ts`) are the hybrid glue: lower-cased **exact** polygon
  names from the TopoJSON (typos and en-dashes verbatim — "Scottalnd", "Polish–Lithuanian
  Commonwealth"). To see the vocabulary, load the topo and list `feature(topo,objects.yNNNN)`
  feature `name`s per epoch. **Watch geography**: e.g. "Volga Bulgars" (lon ~49) → russia, but
  Balkan "Bulgars"/"Bulgar Khanate" (lon ~22–26) → bulgaria. Big empires map to one
  representative entity.
- **Portraits** = 256×256 PNGs in `assets/figures/`, filename = the figure's name slugified by
  `figureSlug()` (`assets/figures.ts`). Drop-in, no code change. Art spec in `FIGURES.md`; the
  per-set briefs are `FIGURES_BULGARIA.md` and `FIGURES_NATIONS.md` (exact filenames listed).

## Bulk content via subagents (what worked)
For large content jobs (the 8-nation wave) I spawned **parallel subagents**, each given the exact
`Country`/`CountryPeriod` schema, `bulgaria.ts` as a formatting template, the full valid-id list,
a per-country period outline, and "output ONLY the file content". Then I wrote the files,
**typechecked, and ran both invariant scripts**. Fast and reliable *if* you validate hard after.
Pitfall: agents vary (some return text, some write the file themselves) — check which.

---

## Current focus (state as of 2026-06-02)

Recent DONE (see `HANDOFF.md` for details): projection fix → full-view-on-select → vanishing-
countries (wrap-artifact) fix → land backdrop → period-correct names + "(Modern X)" → pre-1200
build-out → **Bulgaria expansion + 14 portraits** → **8 new nations** (gap #1 wave 1) → **filled
every >150y "dark age" gap** (gap #2). The app now has **24 entities, ~154 periods, ~415
relations, ~220 figure slots, 97 portraits**.

We've been working through a ranked "3 biggest gaps" list:
- **#1 missing modern nations** — wave 1 done (Norway, Ireland, Czechia, Serbia, Romania,
  Ukraine, Switzerland, Belgium). **Wave 2 still open** (Finland, Baltics, Croatia, Slovakia,
  Slovenia, Bosnia, Moldova, Belarus, Iceland).
- **#2 dark-age timeline gaps** — **done** (invariant now green).
- **#3 uneven era depth** — **not started** (Greece/Turkey/Denmark compress huge spans).

**Newest user-reported issue (not yet fixed):** the early-medieval map (≈ year 888 / the 800
epoch) looks messy — overlapping translucent shapes and "empty" patches. See
`EXPERIENCE_GAPS.md` §3 for the diagnosis and suggested fix; that's the most likely next task.
