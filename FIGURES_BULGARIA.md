# Bulgaria — Leader Portraits (drop-in instructions)

The **Bulgaria expansion** ships with all leaders already wired up as **placeholders** (the
labelled person-icon card). To turn any of them into a real painted portrait, just drop a PNG
with the **exact filename** below into the figures folder — **no code changes**. The app derives
each figure's filename from its name automatically, so the moment the file exists it replaces the
placeholder for that leader.

## Where to put them
```
src/renderer/src/assets/figures/
```
(Same folder as every other portrait. Add one PNG per leader; missing ones keep their placeholder.)

## Exact filenames (this is all you need to match)

| Filename to create | Leader | Period | Dates |
|---|---|---|---|
| `kubrat.png` | **Kubrat** | Old Great Bulgaria | r. c. 632–665 |
| `krum.png` | **Krum** | First Bulgarian Empire | r. c. 803–814 |
| `boris-i.png` | **Boris I** | First Bulgarian Empire | r. 852–889 |
| `simeon-i-the-great.png` | **Simeon I the Great** | First Bulgarian Empire | r. 893–927 |
| `peter-delyan.png` | **Peter Delyan** | Byzantine Bulgaria | r. 1040–1041 |
| `kaloyan.png` | **Kaloyan** | Second Bulgarian Empire | r. 1197–1207 |
| `ivan-asen-ii.png` | **Ivan Asen II** | Second Bulgarian Empire | r. 1218–1241 |
| `paisius-of-hilendar.png` | **Paisius of Hilendar** | Ottoman Bulgaria | 1722–1773 |
| `vasil-levski.png` | **Vasil Levski** | Ottoman Bulgaria | 1837–1873 |
| `ferdinand-i.png` | **Ferdinand I** | Principality & Tsardom | r. 1887–1918 |
| `boris-iii.png` | **Boris III** | Principality & Tsardom | r. 1918–1943 |
| `georgi-dimitrov.png` | **Georgi Dimitrov** | People's Republic | r. 1946–1949 |
| `todor-zhivkov.png` | **Todor Zhivkov** | People's Republic | r. 1954–1989 |
| `zhelyu-zhelev.png` | **Zhelyu Zhelev** | Republic of Bulgaria | r. 1990–1997 |

> 14 files total. They are listed in the same chronological order they appear in
> `src/renderer/src/data/countries/bulgaria.ts`.

## Art style & technical spec
Use the **same spec as every other portrait** — see [`FIGURES.md`](FIGURES.md) sections 1–2:
- Stylised, semi-realistic 2D painted bust ("Gilded Strategist"), head-and-shoulders, slight 3/4.
- **PNG, 1:1 square, ≥ 256×256**, baked-in dark navy vignette backdrop, no frame/text/nameplate.
- Period-accurate regalia (Bulgar khan’s caftan for Kubrat/Krum; Byzantine-style crown and loros
  for the tsars Simeon, Kaloyan, Ivan Asen II; 19th-c. revolutionary dress for Levski; royal
  uniform for Ferdinand I and Boris III; mid-century suits for Dimitrov/Zhivkov/Zhelev).
- Warm gold rim light from upper-left; reads clearly at ~44 px.

## How the matching works (for reference)
The filename is the leader's name, slugified by `figureSlug()` in
[`src/renderer/src/assets/figures.ts`](src/renderer/src/assets/figures.ts): strip accents,
lowercase, and replace any run of non `a–z 0–9` with a single `-`. The filenames above are the
already-computed result, so **just match them verbatim** — you don't need to run the slugifier.

If you ever rename a leader in `bulgaria.ts`, recompute its filename (or add an `image: 'foo.png'`
override on that figure) so the portrait keeps matching.

## Checklist
- [ ] PNG, 1:1, ≥ 256×256, dark vignette, no baked frame/text.
- [ ] Recognisable likeness + period regalia, consistent gold rim lighting.
- [ ] Filename exactly matches the table above.
- [ ] Dropped into `src/renderer/src/assets/figures/` — rebuild (`npm run build`) and it appears.
