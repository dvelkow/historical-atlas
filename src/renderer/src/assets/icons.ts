import type { PlaceholderIcon, RelationType } from '../data/types'

// Bundled icon badges (256×256 PNG, tint + dark atlas face baked in, transparent
// corners). Vite turns each import into a hashed asset URL.
import iconWar from './icons/icon-war.png'
import iconAlly from './icons/icon-ally.png'
import iconInteraction from './icons/icon-interaction.png'
import iconPerson from './icons/icon-person.png'
import iconTreaty from './icons/icon-treaty.png'
import iconTrade from './icons/icon-trade.png'
import iconReligion from './icons/icon-religion.png'
import iconDynasty from './icons/icon-dynasty.png'
import iconCulture from './icons/icon-culture.png'
import iconEvent from './icons/icon-event.png'

export const iconSrc: Record<PlaceholderIcon, string> = {
  ICON_WAR: iconWar,
  ICON_ALLY: iconAlly,
  ICON_INTERACTION: iconInteraction,
  ICON_PERSON: iconPerson,
  ICON_TREATY: iconTreaty,
  ICON_TRADE: iconTrade,
  ICON_RELIGION: iconReligion,
  ICON_DYNASTY: iconDynasty,
  ICON_CULTURE: iconCulture,
  ICON_EVENT: iconEvent
}

/** Which badge represents each relation type (used for the on-map arc badges). */
export const relationIcon: Record<RelationType, PlaceholderIcon> = {
  war: 'ICON_WAR',
  ally: 'ICON_ALLY',
  interaction: 'ICON_INTERACTION'
}
