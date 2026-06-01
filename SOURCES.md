# Sources & Historical Notes

**Historical Atlas** ships with a first-pass, hand-authored dataset of European (and
adjacent Mediterranean / Near Eastern) history from **0 AD to the present**. This document
explains the dataset's scope, how approximations are handled, and the kinds of references
it is built from.

> **This is a curated educational summary, not a primary-source citation database.** The
> figures, dates, descriptions, and "sentiment" values are a starting point intended to be
> reviewed, corrected, and expanded. Where precision matters, consult the references below.

---

## What the dataset contains

The data lives in [`src/renderer/src/data/`](src/renderer/src/data/) as typed TypeScript:

| File | Contents | Approx. count |
|---|---|---|
| [`eras.ts`](src/renderer/src/data/eras.ts) | 11 contiguous historical eras | 11 |
| [`entities.ts`](src/renderer/src/data/entities.ts) | polities/empires with centroid, capital, government, religion/culture tags, territories, span, description | ~75 |
| [`relations.ts`](src/renderer/src/data/relations.ts) | wars, alliances, and notable interactions between entities, with year ranges | ~95 |
| [`events.ts`](src/renderer/src/data/events.ts) | major dated events for the timeline | ~90 |
| [`figures.ts`](src/renderer/src/data/figures.ts) | public figures tied to an entity and a span of years | ~60 |

### Eras covered (per the brief)

Roman · Late Antiquity · Early Medieval · High Medieval · Late Medieval · Early Modern ·
Revolutionary & Napoleonic · 19th Century · World War Era · Cold War · Contemporary.

---

## ⚠️ How approximations are marked

Because drawing accurate historical borders for two millennia is out of scope for a
first pass, the app makes the following **explicit, visible** simplifications:

1. **Modern map as the base.** The rendered landmasses and borders are the *present-day*
   political map (Natural Earth — see [ASSETS.md](ASSETS.md)). No historical frontiers are
   drawn.
2. **Centroid markers, not territories.** Each polity is placed at a single approximate
   *centre of power* (longitude/latitude). These are indicative, not authoritative.
3. **Territory highlighting is by modern country.** When you select a polity, the modern
   countries it *roughly* overlapped are highlighted. This deliberately over- or
   under-states real control (e.g. the Roman Empire highlights all of modern France even
   though frontiers differed). Each entity carries `approximate: true`, and several carry a
   `sourceNote` calling out the specific simplification (e.g. Byzantium's single marker
   standing in for an empire whose borders shifted enormously from 330–1453; the United
   States placed at the map's western edge for visibility).
4. **The UI says so.** An `APPROXIMATE BORDERS` badge sits in the header, every left-panel
   entry shows an "Approximate — modern borders, indicative centre of power" footnote, and
   the map carries a "Modern borders · approximate historical positions" caption.
5. **Sentiment values are illustrative.** Relation `sentiment` (−100…+100) and figure
   stats (Influence/Military/Legacy, 0–10) are editorial ratings for visual interest, **not**
   sourced quantitative measurements.
6. **Era boundaries are buckets.** Eras are made contiguous (e.g. the "19th Century" bucket
   ends in 1913 so 1914 falls in the "World War Era"); these are pedagogical groupings, and
   reasonable historians draw the lines differently.

---

## Reference sources

The dataset is compiled from widely available, reputable tertiary and reference works —
the kind used for an educational overview atlas. Key categories:

### General reference & encyclopedic
- **Wikipedia** and **Wikidata** — for dates, capitals, spans, and short descriptions of
  polities, rulers, wars, and treaties (cross-checked across articles).
- **Encyclopædia Britannica** — overview articles on empires, eras, and figures.
- **Oxford** reference works (e.g. *Oxford Dictionary of the Middle Ages*, *Oxford
  Companion to Military History*) for definitions and date ranges.

### Historical atlases (the model for this kind of project)
- *The Penguin Atlas of...* series (Colin McEvedy: *Ancient*, *Medieval*, *Modern History*).
- *The Times Atlas of World History* / *The Times Complete History of the World*.
- *DK Atlas of World History* and *DK History of the World Map by Map*.
- The **Euratlas** "Periodis" historical maps of Europe (year-by-year), used as a sanity
  check for which polities existed when and roughly where their centres lay.

### Geographic base data
- **Historical borders** — period-accurate European boundaries come from the open
  [`historical-basemaps`](https://github.com/aourednik/historical-basemaps) dataset
  (GPL-3.0), sampled at ~rough-period snapshots (100, 400, … 1914, 1945, 1994, 2010). The
  map shows the snapshot nearest the selected year, so borders morph through history. These
  are **approximate** reconstructions, not exact frontiers. See [ASSETS.md](ASSETS.md) for
  the license caveat.
- **Natural Earth** (public domain) — the original modern base map, now superseded by the
  historical borders above and no longer rendered.

### Period / topic references (examples)
- Roman: standard accounts of the Principate, the *limes*, and the Crisis/Tetrarchy.
- Medieval: histories of the Carolingians, the Caliphates, Byzantium, the Crusades, the
  Mongol invasions, and the Reconquista.
- Early Modern → 19th c.: the Reformation and Wars of Religion, the Habsburg–Ottoman and
  Habsburg–Bourbon rivalries, the Napoleonic Wars, the Congress of Vienna system, and the
  unifications of Germany and Italy.
- 20th c.: standard treatments of WWI's alliance system, WWII, the Cold War blocs (NATO /
  Warsaw Pact), and post-1991 European integration and the Russo-Ukrainian War.

---

## Known limitations & intended next steps

- **Borders are period snapshots, not continuous** — the map jumps to the nearest of ~23
  epoch snapshots, so a border change is shown at the snapshot boundary rather than the exact
  year it happened. They are also approximate reconstructions (GPL-3.0 dataset; see
  [ASSETS.md](ASSETS.md)).
- **Empires map to one representative country** — big multi-country shapes (Roman Empire,
  Carolingian Empire) are clickable as a single entity (Rome→Italy, Carolingian→France).
- **Eurocentric by design** — the brief is European history; non-European powers appear
  only where they interact with Europe (Parthia/Persia, the Caliphates, the Ottomans, the
  Mongols, the USA, the USSR).
- **Coverage is representative, not exhaustive** — many minor states, wars, and figures are
  omitted. Gaps in an entity's lifespan are intentional where a polity genuinely did not
  exist (e.g. France 1940–1944 under occupation).
- **Dates are CE only** and the timeline starts at year 0 per the brief; pre-CE history is
  out of scope.
- **Editorial values** (`sentiment`, figure stats) should be treated as flavour, not data.

Corrections and additions are welcome — the data files are plain, well-typed TypeScript and
are designed to be edited directly.
