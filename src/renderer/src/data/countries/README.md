# Country data

This folder holds **one file per country** — the whole history of that country in a single,
self-contained module. Adding a country is just dropping a new `*.ts` file here; it is
auto-discovered (via `import.meta.glob` in [`../countries.ts`](../countries.ts)) and appears
on the map with no registry edits.

## File shape

Each file `export default` a `Country` ([type](../countryTypes.ts)):

```ts
import type { Country } from '../countryTypes'

const france: Country = {
  id: 'france',                 // kebab-case, must match the filename
  name: 'France',
  mapNames: ['France'],         // Natural Earth names this entity occupies on the map
  color: '#3b6fb0',             // highlight + arrow colour
  centroid: [2.5, 46.6],        // [lon, lat] — arrow anchor + zoom-to target
  periods: [ /* chronological periods */ ]
}
export default france
```

## Periods = "what's notable, when"

A country's history is a list of **periods** (one polity/state at a time). Picking a year
selects the period containing it. **Gaps are intentional:** if nothing notable is happening
for a country in some span, leave a gap — the country is then **not clickable** in those
years (it renders as dim background land). Don't invent filler periods.

Each period carries:

| field | purpose |
|---|---|
| `startYear` / `endYear` | inclusive range this period is shown for |
| `eraId` | global era ([../eras.ts](../eras.ts)) — for the era label |
| `name` | the polity, e.g. "Kingdom of France (Capetian)" |
| `government`, `capital`, `religion[]`, `culture[]` | left-panel facts |
| `summary` | one-paragraph overview |
| `relations[]` | **outgoing** relations → the directional arrows on the map |
| `figures[]` | notable people of the period |

## Relations are OUTGOING and directional

A `relation` is *from this country to another*, and renders as a line with an arrowhead at
the target. Keep them **notable** — major wars, real alliances, defining interactions — not
every minor skirmish.

```ts
relations: [
  { to: 'united-kingdom', type: 'war',         label: "Hundred Years' War", note: '…' },
  { to: 'russia',         type: 'ally',        label: 'Franco-Russian Alliance (1894)' },
  { to: 'turkey',         type: 'interaction', label: 'Franco-Ottoman alliance (1536)' }
]
```

- `type`: `war` (red) · `ally` (blue) · `interaction` (orange/amber).
- `to` must be another country's `id`. If the target country file doesn't exist yet, the
  relation still lists in the panel but has no arrow/colour until that file is added.
- Mutual wars/alliances are listed on **both** countries (each from its own perspective), so
  the arrows appear whichever side you click.

## Currently covered (first pass)

France, Germany, United Kingdom, Spain, Italy, Austria, Russia, Netherlands, Sweden, Turkey,
Denmark, Poland, Greece, Portugal, Hungary. More European countries can be added the same way.
