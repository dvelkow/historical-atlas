import type { PlaceholderIcon as IconToken } from '../data/types'
import { iconSrc } from '../assets/icons'

// Renders a custom icon badge (PNG: dark atlas face + tinted glyph baked in,
// transparent corners). The badge is self-contained, so we render the image
// directly with no chip/border wrapper. The token is kept as title/alt for
// tooltips and accessibility. (Name retained for compatibility with callers.)
interface Props {
  icon: IconToken
  size?: number
  className?: string
}

export function PlaceholderIcon({ icon, size = 22, className }: Props): JSX.Element {
  return (
    <img
      className={`ph-icon ${className ?? ''}`}
      src={iconSrc[icon]}
      title={icon}
      alt={icon}
      width={size}
      height={size}
      draggable={false}
    />
  )
}
