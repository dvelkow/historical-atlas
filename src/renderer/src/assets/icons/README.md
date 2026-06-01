# Icons

Custom UI icons live here. The current deliverables are individual 256×256 raster PNG
badges with transparent outside corners, dark atlas-style faces, and the app-context tint
baked into each image:

- `icon-war.png`
- `icon-ally.png`
- `icon-interaction.png`
- `icon-person.png`
- `icon-treaty.png`
- `icon-trade.png`
- `icon-religion.png`
- `icon-dynasty.png`
- `icon-culture.png`
- `icon-event.png`

**Requirements:** no text, transparent outside the badge, legible when rendered at 16px.
Full spec:
[`/DESIGN_ASSETS.md`](../../../../../DESIGN_ASSETS.md).

Until these exist, the app renders labelled text placeholders via
[`PlaceholderIcon.tsx`](../../components/PlaceholderIcon.tsx).
