import type { Country } from '../countryTypes'

const portugal: Country = {
  id: 'portugal',
  name: 'Portugal',
  mapNames: ['Portugal'],
  color: '#1f8a70',
  centroid: [-8.2, 39.7],
  periods: [
    {
      startYear: 1139,
      endYear: 1580,
      eraId: 'late-medieval',
      name: 'Kingdom of Portugal (Age of Discovery)',
      government: 'Kingdom',
      capital: 'Lisbon',
      religion: ['Roman Catholicism'],
      culture: ['Portuguese'],
      summary: 'The Atlantic pioneer of European expansion, whose navigators opened the sea routes to India and Brazil and built a global maritime empire.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Anglo-Portuguese Alliance (1386)', note: 'The oldest alliance in the world still in force.' },
        { to: 'spain', type: 'interaction', label: 'Iberian rivalry', note: 'Rivalry and dynastic union with Castile/Spain.' }
      ],
      figures: [{ name: 'Henry the Navigator', title: 'Prince & patron of exploration', years: '1394–1460' }]
    },
    {
      startYear: 1640,
      endYear: 1910,
      eraId: 'early-modern',
      name: 'Kingdom of Portugal (restored)',
      government: 'Monarchy',
      capital: 'Lisbon',
      religion: ['Roman Catholicism'],
      culture: ['Portuguese'],
      summary: 'After restoring independence from Spain in 1640, Portugal leaned on its British alliance and its Brazilian empire amid relative decline.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Anglo-Portuguese Alliance', note: 'Britain protected Portugal and its trade.' },
        { to: 'spain', type: 'war', label: 'Restoration War', note: 'War of independence from the Spanish crown (1640–68).' }
      ],
      figures: [{ name: 'Marquis of Pombal', title: 'Reforming minister', years: '1699–1782' }]
    },
    {
      startYear: 1974,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Portuguese Republic',
      government: 'Semi-presidential republic',
      capital: 'Lisbon',
      religion: ['Roman Catholicism / secular'],
      culture: ['Portuguese'],
      summary: 'The Carnation Revolution (1974) ended dictatorship and empire; Portugal became a democracy and joined the European Communities in 1986.',
      relations: [
        { to: 'spain', type: 'ally', label: 'EU & Iberian partner', note: 'Close neighbour and fellow EU member.' },
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Member of the European Union and eurozone.' }
      ],
      figures: [{ name: 'Mário Soares', title: 'Prime Minister & President', years: '1924–2017' }]
    }
  ]
}

export default portugal
