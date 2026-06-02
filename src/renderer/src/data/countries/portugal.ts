import type { Country } from '../countryTypes'

const portugal: Country = {
  id: 'portugal',
  name: 'Portugal',
  mapNames: ['Portugal'],
  color: '#1f8a70',
  centroid: [-8.2, 39.7],
  periods: [
    {
      startYear: 868,
      endYear: 1139,
      eraId: 'early-medieval',
      name: 'County of Portugal (Reconquista)',
      government: 'County under León-Castile',
      capital: 'Guimarães / Coimbra',
      religion: ['Roman Catholicism'],
      culture: ['Galician-Portuguese'],
      summary:
        'Reconquered from the Moors and ruled by counts under León-Castile, the Portucalense county on the Atlantic edge of Iberia grew autonomous under the Burgundian house — until Afonso Henriques won independence as Portugal’s first king (1139).',
      relations: [
        { to: 'spain', type: 'war', label: 'Reconquista & break from León', note: 'War on the Moors and a struggle for autonomy from León-Castile.' },
        { to: 'france', type: 'interaction', label: 'The Burgundian counts', note: 'Henry of Burgundy’s dynasty came south of the Pyrenees to rule the county.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Crusaders on the coast', note: 'Northern crusaders sailing to the Holy Land aided the capture of Lisbon (1147).' }
      ],
      figures: [
        { name: 'Vímara Peres', title: 'Count, founder of Portucale', years: 'd. 873' },
        { name: 'Afonso I Henriques', title: 'First King of Portugal', years: 'r. 1139–1185' }
      ]
    },
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
        { to: 'spain', type: 'war', label: 'Battle of Aljubarrota (1385)', note: 'Portugal secured independence from Castile, with English archers’ help.' }
      ],
      figures: [
        { name: 'Henry the Navigator', title: 'Prince & patron of exploration', years: '1394–1460' },
        { name: 'Vasco da Gama', title: 'Navigator to India', years: 'c. 1460–1524' }
      ]
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
