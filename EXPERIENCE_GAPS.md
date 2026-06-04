# Biggest Gaps in the Game Experience (prioritised backlog)

What would most improve the Historical Atlas next, ranked. Companion to
[`AGENT_NOTES.md`](AGENT_NOTES.md) (how to work) and [`HANDOFF.md`](HANDOFF.md) (full reference).
**State as of 2026-06-04: 39 country entities, ~291 periods, ~833 relations, ~495 figure slots,
97 portraits.**

The original top-3 gaps (early-medieval map mess, missing modern nations, uneven era depth) and the
first polish pass are **all done** — see the ✅ section at the bottom and the `HANDOFF.md` DONE log.
The list below is what remains, re-ranked.

---

## 1. Portraits are mostly placeholders — *now the most visible "unfinished" surface*

There are **97 portrait PNGs for ~495 figure slots**, so most figure cards render as compact
placeholders. This is the single most "unfinished"-looking thing left in the app, because every
country panel shows figures. The pipeline is drop-in: a 256×256 PNG in `assets/figures/` named by
`figureSlug(name)` lights the card up automatically (then `npm run build` to bundle). The art spec
is in `FIGURES.md`; per-set briefs in `FIGURES_BULGARIA.md` / `FIGURES_NATIONS.md`. **This needs an
image generator / designer — it is an asset task, not a code task.** Highest-value names first: the
leaders of the 20 expanded/added countries (Greece, Turkey, the Balkans, the Baltics, etc.).

To regenerate the exact list of missing portraits:
```bash
node -e 'const fs=require("fs"),p=require("path");const d="src/renderer/src/data/countries";
const have=new Set(fs.readdirSync("src/renderer/src/assets/figures").filter(f=>f.endsWith(".png")).map(f=>f.replace(".png","")));
const slug=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const miss=new Set();
for(const f of fs.readdirSync(d).filter(f=>f.endsWith(".ts")))for(const m of fs.readFileSync(p.join(d,f),"utf8").matchAll(/name:\s*[\x27"]([^\x27"]+)[\x27"],\s*title:/g)){const s=slug(m[1]);if(!have.has(s))miss.add(m[1]);}
console.log([...miss].sort().join("\n"),"\nMISSING:",miss.size);'
```

## 2. Remaining non-interactive context (the non-European framers + microstates)

At 2010, **39 of 68** map polygons are now interactive entities (was 24). The remaining context:
- **Non-European framers** that shaped Europe but have no entity: the Caucasus (Georgia, Armenia,
  Azerbaijan), the Middle East/Levant, North Africa (the Maghreb, Egypt), and the great Asian
  empires the dataset carries (Abbasid/Fatimid/Umayyad Caliphates already partly aliased to Spain
  for Iberia, Persia/Iran, the Mongols/Golden Horde). These are permanently inert unless added.
- **Microstates** with their own polygons: Andorra, Liechtenstein, Malta, Cyprus, San Marino,
  Greenland (a Danish territory — could alias to `denmark`). Low priority, small on the map.

## 3. Per-relation year ranges (mild anachronism) — *the deferred half of the polish gap*

A relation still shows for its whole period, so an alliance signed in 1894 appears as an arrow for
the entire 1870–1940 period. The mechanism wasn't added because filtering arrows by exact year
risks **emptying a period's relations panel** without a full data pass. If wanted: add optional
`since?`/`until?` to `CountryRelation`, filter in `relationsAt` **and** the arrow builder, and
*only* hide a relation when the fields are present (so un-dated relations always show). Then
backfill year ranges for the clearly-dated cases.

## 4. Map clickability holes in the high-medieval epochs

Some entities are only clickable in eras where the dataset carries a distinct polygon (e.g. no
separate "Bohemia"/"Norway"/"Lithuania" shape in some high-medieval epochs — they sit inside the
HRE/Scandinavia/Poland blobs). The *data* is complete and reachable once selected; only the on-map
shape is missing. Fix by adding finer epochs in `scripts/build-borders.cjs` and rebuilding.

## 5. Smaller polish

- **Always-on major-polity labels** would give a true "atlas" feel (currently only the *selected*
  polity is labelled, plus a hover `<title>` tooltip). Deferred: good placement (no overlaps,
  on-frame anchors for empires that run off the east edge) is a real heuristics problem — do it
  carefully or it looks worse.
- **Tints are faint at full zoom** (by design — dim land in open sea); they pop on zoom-in.
- **Packaging:** the Windows `.exe` (`npm run dist:win`) is **unsigned** (SmartScreen warns) and
  uses the default Electron icon — add a custom app icon + signing before public distribution. The
  borders dataset is **GPL-3.0** (fine for personal/educational; revisit for closed-source release).

---

## ✅ Done (see `HANDOFF.md` for detail)
1. **Early-medieval map mess (≈888)** — fragments of one polity are now merged into a single path
   (no double-darkened translucent overlap, one clickable shape), with paint-ordering so the
   selected polity draws on top; plus a warm-land / cool-sea treatment so untracked land reads as
   land, not empty sea. Verified across epochs 100/600/800/1000/2010.
2. **Missing modern nations — wave 2** — added 15 full entities (Finland, Estonia, Latvia,
   Lithuania, Croatia, Slovakia, Slovenia, Bosnia, Moldova, Belarus, Iceland, Albania, North
   Macedonia, Montenegro, Luxembourg). Interactive polities at 2010: 24 → 39.
3. **Uneven era depth** — Greece (3→9), Turkey (4→10), Denmark (4→8), Portugal (6→9) and the
   Netherlands (6→10) split into era-accurate periods, each with its own relations + figures.
4. **Polish** — a map relation **legend** (War/Alliance/Interaction colour key) and
   **per-country events** (a legacy→country alias maps historical polity ids so selecting a country
   surfaces and rail-highlights its own events and its predecessors').
