import type { Country } from '../countryTypes'

const netherlands: Country = {
  id: 'netherlands',
  name: 'Netherlands',
  mapNames: ['Netherlands'],
  color: '#e08a2e',
  centroid: [5.4, 52.2],
  periods: [
    {
      startYear: 1568,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Dutch Republic',
      government: 'Federal republic',
      capital: 'Amsterdam / The Hague',
      religion: ['Calvinism (Dutch Reformed)'],
      culture: ['Dutch'],
      summary: 'Born of revolt against Spain, the maritime republic of the Dutch Golden Age dominated world trade, finance, and art in the 17th century.',
      relations: [
        { to: 'spain', type: 'war', label: "Eighty Years' War", note: 'The long revolt that won Dutch independence (1568–1648).' },
        { to: 'united-kingdom', type: 'war', label: 'Anglo-Dutch Wars', note: 'Commercial naval wars for trade supremacy.' },
        { to: 'france', type: 'war', label: 'Franco-Dutch War (1672)', note: 'Survived Louis XIV’s invasion by flooding the land.' }
      ],
      figures: [{ name: 'William the Silent', title: 'Leader of the revolt', years: '1533–1584' }]
    },
    {
      startYear: 1815,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Kingdom of the Netherlands',
      government: 'Constitutional monarchy',
      capital: 'Amsterdam',
      religion: ['Protestant / Catholic / secular'],
      culture: ['Dutch'],
      summary: 'A prosperous constitutional monarchy and trading nation, a founding member of NATO and the European Communities.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & Benelux partner', note: 'Founding member of the European project.' },
        { to: 'france', type: 'ally', label: 'EU partner', note: 'Close European ally.' }
      ],
      figures: [{ name: 'Willem-Alexander', title: 'King', years: 'r. 2013–' }]
    }
  ]
}

export default netherlands
