import type { Era } from './types'

// The present year — open-ended eras run up to here.
export const PRESENT_YEAR = 2025
export const MIN_YEAR = 0
export const MAX_YEAR = PRESENT_YEAR

export const eras: Era[] = [
  {
    id: 'roman',
    name: 'Roman Empire',
    startYear: 0,
    endYear: 283,
    icon: 'ICON_EVENT',
    blurb:
      'The Principate at its height: a Mediterranean-wide empire ruled from Rome, bounded by the Rhine, Danube, and Euphrates.'
  },
  {
    id: 'late-antique',
    name: 'Late Antiquity',
    startYear: 284,
    endYear: 499,
    icon: 'ICON_EVENT',
    blurb:
      'Reform, Christianisation, and division of the Roman world, followed by the migrations and the fall of the West.'
  },
  {
    id: 'early-medieval',
    name: 'Early Medieval',
    startYear: 500,
    endYear: 999,
    icon: 'ICON_EVENT',
    blurb:
      'Successor kingdoms, the rise of Islam, the Carolingian renewal, and Byzantium as the surviving Roman heart of the East.'
  },
  {
    id: 'high-medieval',
    name: 'High Medieval',
    startYear: 1000,
    endYear: 1299,
    icon: 'ICON_EVENT',
    blurb:
      'Population growth, the Crusades, the contest of Empire and Papacy, and the flourishing of towns and universities.'
  },
  {
    id: 'late-medieval',
    name: 'Late Medieval',
    startYear: 1300,
    endYear: 1499,
    icon: 'ICON_EVENT',
    blurb:
      'Plague and dynastic war strain Europe while the Ottomans rise and the Renaissance begins in the Italian cities.'
  },
  {
    id: 'early-modern',
    name: 'Early Modern',
    startYear: 1500,
    endYear: 1788,
    icon: 'ICON_EVENT',
    blurb:
      'Reformation, overseas empires, the wars of religion, and the consolidation of dynastic and absolutist states.'
  },
  {
    id: 'revolutionary',
    name: 'Revolutionary & Napoleonic',
    startYear: 1789,
    endYear: 1814,
    icon: 'ICON_EVENT',
    blurb:
      'The French Revolution upends the old order; Napoleon redraws Europe before the coalitions restore a balance of power.'
  },
  {
    id: 'long-19th',
    name: '19th Century',
    startYear: 1815,
    endYear: 1913,
    icon: 'ICON_EVENT',
    blurb:
      'Industrialisation, nationalism, the unifications of Germany and Italy, and the alliance system that armed Europe.'
  },
  {
    id: 'world-wars',
    name: 'World War Era',
    startYear: 1914,
    endYear: 1945,
    icon: 'ICON_WAR',
    blurb:
      'Two world wars, the fall of empires, revolution in Russia, and the rise of totalitarian states reshape the continent.'
  },
  {
    id: 'cold-war',
    name: 'Cold War',
    startYear: 1946,
    endYear: 1990,
    icon: 'ICON_EVENT',
    blurb:
      'A divided continent under two blocs — NATO and the Warsaw Pact — with an Iron Curtain running through Germany.'
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    startYear: 1991,
    endYear: PRESENT_YEAR,
    icon: 'ICON_EVENT',
    blurb:
      'European integration and enlargement, a reunited Germany, and renewed conflict on Europe’s eastern frontier.'
  }
]

export function eraForYear(year: number): Era {
  // Eras are contiguous; pick the one whose range contains the year.
  const found = eras.find((e) => year >= e.startYear && year <= e.endYear)
  if (found) return found
  return year < eras[0].startYear ? eras[0] : eras[eras.length - 1]
}

export function eraById(id: string): Era | undefined {
  return eras.find((e) => e.id === id)
}
