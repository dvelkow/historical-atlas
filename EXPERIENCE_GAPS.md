# Biggest Gaps in the Game Experience (prioritised backlog)

What would most improve the Historical Atlas next, ranked. Companion to
[`AGENT_NOTES.md`](AGENT_NOTES.md) (how to work) and [`HANDOFF.md`](HANDOFF.md) (full reference).
State as of 2026-06-02: **24 country entities, ~154 periods, 97 portraits**.

---

## 1. Early-medieval map looks messy (≈ year 700–1000) — *user-reported, do this next*

At year **888** (→ the **800 CE** epoch) the map shows **overlapping translucent shapes and
"empty" patches**. It's not a crash and not a globe-spanning wrap artifact (those are filtered) —
it's visual quality. Diagnosed causes:

- **Duplicate / multipolygon fragments.** The 800 epoch has the same polity drawn as several
  separate features — e.g. **"Carolingian Empire" ×2, "Danes" ×2, "Northmen" ×2, "Guanches" ×2**.
  When two of these are aliased + translucent and overlap, the tint **double-darkens** at the
  overlap, and clickable areas fight each other.
- **Land-backdrop misalignment.** The faint modern coastline backdrop (`.land-base`, from
  `countries-110m.json`) is drawn under the *coarse, low-res* historical polygons, so their edges
  don't line up → a "double coastline" / smeared-overlap look in places.
- **Sparse non-aliased context.** Big chunks of NE/eastern Europe are tribal polygons with no
  alias (Finno-Ugric taiga, Mari, Permians, Veps, Mordvinians, Bashkirs, Khazars, Baltic tribes…)
  drawn in the dim navy `.country` fill (#1b2740) ≈ ocean — so they read as **empty**.

**Suggested fix:** (a) de-duplicate within an epoch — group features by `properties.name` and
render each polity as one path; (b) consider drawing aliased/interactive polygons *above* a
single merged context layer (one fill, not many overlapping translucent ones); (c) optionally
add a faint stroke or slightly warmer fill to non-aliased land so "empty" reads as land not sea;
(d) sanity-check the other migration-era epochs (400, 600, 1000) the same way. Verify with
`preview_screenshot` at 400/600/800/1000 **and** DOM bbox/overlap checks (trust the numbers).

## 2. Missing modern nations — wave 2

Wave 1 added 8 (Norway, Ireland, Czechia, Serbia, Romania, Ukraine, Switzerland, Belgium), but at
2010 ~40 of 68 map polygons are still non-interactive context. Highest-value remaining **European
sovereign states**: **Finland, Estonia, Latvia, Lithuania, Croatia, Slovakia, Slovenia, Bosnia,
Moldova, Belarus** (+ Iceland, Luxembourg, Albania, North Macedonia, Montenegro). Same recipe as
wave 1 (`AGENT_NOTES.md` → "How to add things"); a few are currently aliased to a neighbour and
should be promoted (e.g. **Croatia → Hungary** today). The **non-European framers** (Abbasid/
Fatimid/Umayyad Caliphates, Persia/Iran, North Africa, the Caucasus, the Mongols/Golden Horde)
are permanently inert context — a stretch goal, but they shaped European history.

## 3. Very uneven era depth

A few countries are richly periodised (France 13, Germany 9, UK 8) while others compress huge
spans into one block — so clicking them across centuries shows the *same* panel:
- **Greece** — `Modern Greece` is a single **1832–2025** period (no Balkan Wars / WWII occupation
  / civil war / junta / EU detail).
- **Turkey** — the **Ottoman Empire is one 1299–1922 block** (no Süleyman-era peak vs. long decline).
- **Denmark** (3 periods total), **Portugal**, **Netherlands** could use more 19th/20th-c. depth.
Split these into era-accurate periods with their own relations + figures.

## 4. Portraits are still mostly placeholders

97 PNGs exist of **~156 named figures**. France's originals + all 14 Bulgaria + a few shared
reuses are done; the **8 new nations' ~59 portraits** (see `FIGURES_NATIONS.md`) and the original
backlog in `FIGURES.md` §5 are still placeholder cards. They light up automatically as PNGs are
dropped in (then `npm run build`).

## 5. Relations are period-wide (mild anachronism)

A relation shows for the country's whole period, so e.g. an alliance signed in 1894 appears as an
arrow for the entire 1870–1940 period. Optional: add per-relation `startYear`/`endYear` to
`CountryRelation` and filter arrows by the current year for tighter accuracy.

## 6. Smaller polish

- **Map clickability holes:** some entities are only clickable in eras where the dataset carries a
  distinct polygon (e.g. no separate "Bohemia"/"Norway" shape in the high-medieval epochs — they
  sit inside the HRE/Scandinavia blobs). The *data* is complete; only the on-map shape is missing.
  Could be addressed by adding finer epochs in `scripts/build-borders.cjs`.
- **Events timeline is global, not per-country** — the bottom timeline shows world events, not the
  selected polity's own events.
- **Tints are faint at full zoom** (by design — dim land in open sea); revisit alpha if desired.
- **Packaging:** the Windows `.exe` (`npm run dist:win`) is **unsigned** (SmartScreen warns) and
  uses the default Electron icon — a custom app icon + signing before public distribution. Note the
  borders dataset is **GPL-3.0** (fine for personal/educational; revisit for closed-source release).

---

### Suggested order
**1 (888 visual)** → **2 (wave-2 nations)** → **3 (depth)** → 4 (portraits, incremental) → 5/6 polish.
