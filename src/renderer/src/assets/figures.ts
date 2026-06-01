// Loads every figure portrait under ./figures/*.png and maps it by slug.
// Drop a PNG named per FIGURES.md and it lights up its figure automatically.
const modules = import.meta.glob<string>('./figures/*.png', { eager: true, import: 'default' })

const SPECIAL: Record<string, string> = {
  ł: 'l', Ł: 'l', ø: 'o', Ø: 'o', ß: 'ss', æ: 'ae', Æ: 'ae', œ: 'oe', đ: 'd', þ: 'th', ð: 'd'
}

/** Slugify a figure name into its portrait filename stem (see FIGURES.md §3). */
export function figureSlug(name: string): string {
  return name
    .split('')
    .map((ch) => SPECIAL[ch] ?? ch)
    .join('')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const bySlug: Record<string, string> = {}
for (const [path, url] of Object.entries(modules)) {
  const slug = path.split('/').pop()!.replace(/\.png$/, '')
  bySlug[slug] = url
}

/**
 * Portrait URL for a figure, or undefined if none has been added yet.
 * `nameOrFile` is the figure's display name (or an explicit `image` override).
 */
export function figureImage(nameOrFile: string): string | undefined {
  const slug = nameOrFile.endsWith('.png') ? nameOrFile.replace(/\.png$/, '') : figureSlug(nameOrFile)
  return bySlug[slug]
}

/** How many portraits are currently bundled (for diagnostics). */
export const figureImageCount = Object.keys(bySlug).length
