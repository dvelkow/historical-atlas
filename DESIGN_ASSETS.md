# Design Brief — Icons & Compass

This is the art spec for the **Historical Atlas** custom assets. It tells the designer
exactly what to draw, in what format, and what to name each file so they drop straight into
the app with no code changes beyond flipping one switch.

There are two deliverables:

1. **10 placeholder icons** → `src/renderer/src/assets/icons/`
2. **1 compass / year-dial overlay** → `src/renderer/src/assets/ui/`

---

## 0. Shared visual language

The app is a dark, elegant "antique atlas" UI. Match it:

| Token | Value | Use |
|---|---|---|
| Gold (primary) | `#caa14a` | rims, lines, primary accent |
| Gold (light) | `#d9c25e` | highlights, year text |
| Navy face (dark) | `#0a0e15` | deepest face |
| Navy face (mid) | `#16202f` | face center |
| Hairline | `#2a3344` | inner keylines / grooves |
| Parchment ink | `#e9e3d3` | (for reference only — text is drawn by the app) |

**Mood:** engraved line-art, like a cartouche on an old map or a coin die — thin, confident,
elegant lines; minimal fills; no drop shadows baked in; no gradients on the icons.

---

## 1. Placeholder icons

### Folder & format

- **Folder:** `src/renderer/src/assets/icons/`
- **Format:** **SVG** (strongly preferred — crisp at every size, tiny, tintable).
- **Single colour, tintable:** draw everything with `fill="currentColor"` and/or
  `stroke="currentColor"`. **Do not hardcode any colour.** The app recolours each icon at
  runtime (see the tint table below), so a monochrome shape is required.
- **Canvas:** `viewBox="0 0 24 24"`, artwork centred with ~2px safe padding (so it lives in
  roughly a 20×20 area).
- **Stroke:** ~1.75px nominal, round caps & joins. `vector-effect="non-scaling-stroke"` is
  fine but not required.
- **Background:** transparent. No bounding box, no chip — the app supplies the chip/circle.
- **Legibility:** must read clearly at **16px** (smallest use) and still look good at **42px**
  (the figure portrait). Keep interior detail sparse.

> ⚠️ Because the app tints them, **deliver each icon as one flat silhouette/line drawing.**
> The colours below are only so you know how each will appear in context.

### The 10 icons

| # | Filename | App tint (context) | Concept | Visual description |
|---|---|---|---|---|
| 1 | `icon-war.svg` | red `#d6504a` | War / conflict | **Two crossed swords**, blades up, hilts crossing low. Slim straight blades, simple cruciform guards, round pommels. Classic, symmetrical, instantly "battle." |
| 2 | `icon-ally.svg` | blue `#4a8fd6` | Alliance / alignment | **A handshake** — two forearms meeting from left and right, hands clasped at centre. Simplified to clean line forms. (Alt if too fiddly at 16px: two interlocking rings.) |
| 3 | `icon-interaction.svg` | orange `#e0a14e` | Notable interaction (generic) | **Two curved arrows** chasing each other into a ring (an exchange / dialogue loop). Reads as "contact between two parties." |
| 4 | `icon-person.svg` | grey `#cfd2da` | Public figure / "Influence" stat / portrait fallback | **A classical side-profile bust** (Roman-coin style head facing left, head + neck + a hint of shoulder/drapery). Dignified, antique. This is also the large 42px portrait placeholder, so it must hold up bigger. |
| 5 | `icon-treaty.svg` | gold `#e0b06a` | Treaty / agreement | **An unfurled scroll** with a small **wax seal** hanging at the bottom and a curl at each end. |
| 6 | `icon-trade.svg` | gold `#e0b06a` | Trade / commerce | **A balance scale** — central post, beam, two hanging pans. (Alt: two overlapping coins.) Reads as commerce/exchange of goods. |
| 7 | `icon-religion.svg` | purple `#c4a6dc` | Religion / faith / culture-conversion | **Deliberately non-denominational** (it covers paganism, Christianity, Islam, Orthodoxy…). A small **classical temple facade** — two/three columns under a triangular pediment — with a faint **radiant halo / sun-rays** behind the pediment. Neutral "place of worship / the sacred." |
| 8 | `icon-dynasty.svg` | gold `#d9c25e` | Dynasty / royal lineage | **A simple coronet / crown** — a band with 3–5 points, a small jewel dot on the centre point. Clean and regal. |
| 9 | `icon-culture.svg` | green `#9fd0b3` | Culture / "Legacy" stat | **A laurel wreath** — two laurel branches curving up into a near-circle, almost meeting at the top, open at the bottom. Evokes legacy, honour, classical achievement. |
| 10 | `icon-event.svg` | gold `#d9c25e` | Era / dated event marker | **A pennant banner on a short staff** (a swallow-tail flag), or a **milestone obelisk**. Pick the banner: a staff with a triangular/forked pennant — "a moment planted in time." |

### Where each icon appears (so you can sanity-check sizes)

- War / Ally / Interaction → tiny **badges on the map arcs** (~16px) **and** the right-panel
  relation group headers (18px). These three must be the most legible-at-tiny.
- Treaty / Trade / Religion / Dynasty / Culture → **relation rows** in the right panel (16px)
  and **timeline event chips** (16px).
- Person → **figure "Influence" stat** (18px) and the **portrait placeholder** (42px).
- War / Culture → also used for figure stats "Military" and "Legacy" (18px).
- Event → **timeline event chips** and era markers (16px).

---

## 2. Compass / year-dial overlay

A single decorative artwork that sits **behind** the dial's text. The app draws the year
number, the word "YEAR", and the era name on top — and these change with time — so **the image
must contain no text and no numerals.**

### Folder & format

- **Folder:** `src/renderer/src/assets/ui/`
- **Filename:** `compass-dial.svg` (preferred).
  If raster instead, deliver `compass-dial@2x.png` and `compass-dial@3x.png` (see sizing).
- **Format:** **SVG preferred.** Gradients, fine grooves, and subtle metallic shading are
  welcome here (unlike the flat icons) — this is the "jewellery" of the UI.
- **Background:** transparent **outside the circle** (the dial floats over the map).

### Sizing & layout

- The dial renders at **188 × 188 px** on screen. Author at **`viewBox="0 0 200 200"`** (or a
  512×512 master if raster), artwork centred.
- **Outer artwork diameter:** up to **~188** of the 200 (leave ~6px breathing room to the edge
  so the glow isn't clipped).
- **Clear centre zone:** keep a **central circle ⌀ ~120px** visually calm — no busy detail,
  no bright highlights. The app prints the year here:
  - "YEAR" kicker (small gold caps) near the top of the zone,
  - the big year number (serif, ~37px) in the middle,
  - the era name (small gold caps, up to ~124px wide) below.
  A subtle darkening/vignette in this zone is good (improves text contrast); just keep it even.

### What to draw

Think antique brass **compass / chronometer bezel**:

1. **Outer ring / bezel:** a polished **antique-gold rim** (`#caa14a`→`#d9c25e`) around a dark
   obsidian face (`#0a0e15`→`#16202f`). Fine concentric grooves or a faint guilloché texture
   on the ring read as engraved metal.
2. **Inner keyline:** a thin hairline ring (`#2a3344`) just inside the bezel.
3. **Tick ring:** fine **tick marks** around the circle (minor ticks frequent, **major ticks**
   longer/bolder at the quarter or every ~30°), in gold. These are the "gauge." Keep them
   **outside the clear centre zone.** (Do **not** add numbers — the app overlays year labels.)
4. **Top index / needle:** a slim **gold pointer at 12 o'clock** pointing inward to the tick
   ring — this marks "the current year." Make it a touch ornate (a fine diamond index, a
   fleur, or a compass needle tip). This is the only "needle."
5. **Compass-rose flourish (optional, subtle):** a faint etched 8- or 16-point star / rose on
   the face behind the centre zone, very low contrast, so it doesn't fight the year text.
6. **Glow (optional):** a soft outer gold glow is welcome since the dial floats over the map.

### What NOT to include

- ❌ No text, no numerals, no era names (all drawn by the app).
- ❌ Nothing critical inside the central ⌀120 zone.

> **Integration note:** the app will render `compass-dial.svg` as the dial background and keep
> drawing the dynamic **year number + era + numeric tick labels** on top. So if you bake the
> tick *marks* into the art, leave the *numbers* off; the app positions the changing year
> labels itself.

### Optional extra: separate rotating needle

If you'd like the needle to **spin** as the user scrubs years (a future enhancement), deliver
it as a separate centred file **`compass-needle.svg`** (pointing straight up, pivot at the
exact centre, transparent elsewhere). Optional — the static top index in `compass-dial.svg` is
enough for now.

---

## 3. Optional: brand mark

The little compass glyph in the top-left header is currently an inline SVG. If you want to
replace it, deliver **`src/renderer/src/assets/ui/brand-mark.svg`** — a 40×40, single-colour
(`currentColor`) compass-rose that echoes `compass-dial.svg` at small size. Low priority.

---

## 4. Delivery checklist

```
src/renderer/src/assets/
├── icons/
│   ├── icon-war.svg
│   ├── icon-ally.svg
│   ├── icon-interaction.svg
│   ├── icon-person.svg
│   ├── icon-treaty.svg
│   ├── icon-trade.svg
│   ├── icon-religion.svg
│   ├── icon-dynasty.svg
│   ├── icon-culture.svg
│   └── icon-event.svg
└── ui/
    ├── compass-dial.svg          (required)
    ├── compass-needle.svg        (optional)
    └── brand-mark.svg            (optional)
```

- [ ] All icons monochrome via `currentColor`, `viewBox="0 0 24 24"`, transparent bg.
- [ ] Each icon legible at 16px and clean at 42px.
- [ ] `compass-dial.svg` text-free, clear ⌀120 centre, transparent outside the circle.
- [ ] Filenames exactly as listed (lowercase, hyphenated) for drop-in integration.

When the files land in these folders, swapping the text placeholders for the real art is a
one-component change in
[`PlaceholderIcon.tsx`](src/renderer/src/components/PlaceholderIcon.tsx) (map each `ICON_*`
token to its `icons/*.svg`) and one in
[`YearDial.tsx`](src/renderer/src/components/YearDial.tsx) (use `ui/compass-dial.svg` as the
dial background). Ping me and I'll wire it up.
