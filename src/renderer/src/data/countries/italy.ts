import type { Country } from '../countryTypes'

const italy: Country = {
  id: 'italy',
  name: 'Italy',
  mapNames: ['Italy'],
  color: '#3a8a5a',
  centroid: [12.5, 42.8],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Italy',
      modernEquivalent: false,
      government: 'Roman Empire (heartland)',
      capital: 'Rome',
      religion: ['Roman polytheism', 'later Christianity'],
      culture: ['Roman', 'Latin'],
      summary:
        'The Italian peninsula was the heart of the Roman Empire and, after its fall in the West (476), the seat of the Papacy.',
      relations: [],
      figures: [{ name: 'Augustus', title: 'First Roman Emperor', years: 'r. 27 BCE – 14 CE' }]
    },
    {
      startYear: 1000,
      endYear: 1494,
      eraId: 'high-medieval',
      name: 'Medieval Italy (city-states & Papacy)',
      government: 'City-republics, Papal States, kingdoms',
      capital: 'Rome / Florence / Venice',
      religion: ['Roman Catholicism'],
      culture: ['Italian'],
      summary:
        'Wealthy maritime and banking city-states — Venice, Florence, Genoa — and the Papacy made Italy the cradle of the Renaissance.',
      relations: [
        { to: 'germany', type: 'war', label: 'Imperial interventions', note: 'Holy Roman Emperors repeatedly campaigned in Italy.' },
        { to: 'turkey', type: 'war', label: 'Ottoman–Venetian Wars', note: 'Venice fought the Ottomans across the eastern Mediterranean.' }
      ],
      figures: [
        { name: 'Lorenzo de’ Medici', title: 'Ruler of Florence', years: '1449–1492' }
      ]
    },
    {
      startYear: 1494,
      endYear: 1815,
      eraId: 'early-modern',
      name: 'Italian states (contested)',
      government: 'Patchwork of states under foreign influence',
      capital: '—',
      religion: ['Roman Catholicism'],
      culture: ['Italian'],
      summary:
        'The Italian Wars made the peninsula a battleground for France and Habsburg Spain/Austria, which dominated Italian affairs for centuries.',
      relations: [
        { to: 'france', type: 'interaction', label: 'Italian Wars', note: 'French invasions contested Italy with the Habsburgs.' },
        { to: 'spain', type: 'interaction', label: 'Spanish domination', note: 'Spain ruled Naples, Sicily, and Milan.' },
        { to: 'austria', type: 'interaction', label: 'Austrian domination', note: 'Austria controlled much of northern Italy after 1714.' }
      ],
      figures: [{ name: 'Galileo Galilei', title: 'Scientist', years: '1564–1642' }]
    },
    {
      startYear: 1861,
      endYear: 1946,
      eraId: 'world-wars',
      name: 'Kingdom of Italy',
      government: 'Constitutional monarchy → Fascist regime',
      capital: 'Rome',
      religion: ['Roman Catholicism'],
      culture: ['Italian'],
      summary:
        'Unified under the House of Savoy in 1861, Italy joined the great powers, fell under Mussolini’s Fascism, and fought as an Axis power in WWII.',
      relations: [
        { to: 'austria', type: 'war', label: 'Wars of Independence & WWI', note: 'Unification against Austria; then the WWI Italian Front.' },
        { to: 'germany', type: 'ally', label: 'Axis (Pact of Steel)', note: 'Allied with Nazi Germany from 1936/39.' }
      ],
      figures: [
        { name: 'Giuseppe Garibaldi', title: 'Unification general', years: '1807–1882' },
        { name: 'Benito Mussolini', title: 'Fascist dictator', years: 'r. 1922–1943' }
      ]
    },
    {
      startYear: 1946,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Italian Republic',
      government: 'Parliamentary republic',
      capital: 'Rome',
      religion: ['Roman Catholicism / secular'],
      culture: ['Italian'],
      summary:
        'A founding member of NATO and the European Communities, Italy became a major industrial economy and EU member.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Founding member of the European project.' },
        { to: 'france', type: 'ally', label: 'EU & NATO partner', note: 'Close European ally and neighbour.' }
      ],
      figures: [{ name: 'Alcide De Gasperi', title: 'Prime Minister', years: 'r. 1945–1953' }]
    }
  ]
}

export default italy
