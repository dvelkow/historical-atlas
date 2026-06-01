import type { Country } from '../countryTypes'

const turkey: Country = {
  id: 'turkey',
  name: 'Turkey',
  mapNames: ['Turkey'],
  color: '#c0843a',
  centroid: [33.0, 39.2],
  periods: [
    {
      startYear: 1299,
      endYear: 1922,
      eraId: 'early-modern',
      name: 'Ottoman Empire',
      government: 'Imperial sultanate',
      capital: 'Constantinople (Istanbul)',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Ottoman'],
      summary: 'From a frontier beylik the Ottomans grew to span three continents, took Constantinople in 1453, and besieged Vienna before a long decline.',
      relations: [
        { to: 'austria', type: 'war', label: 'Ottoman–Habsburg wars', note: 'Two sieges of Vienna (1529, 1683) marked the high-water mark.' },
        { to: 'italy', type: 'war', label: 'Ottoman–Venetian Wars', note: 'Centuries of conflict with Venice for the eastern Mediterranean.' },
        { to: 'russia', type: 'war', label: 'Russo-Turkish Wars', note: 'A long contest over the Black Sea and Balkans.' },
        { to: 'france', type: 'ally', label: 'Franco-Ottoman alliance (1536)', note: 'A pragmatic entente against the Habsburgs.' },
        { to: 'greece', type: 'war', label: 'Greek War of Independence', note: 'Greece won independence from Ottoman rule (1821–32).' }
      ],
      figures: [
        { name: 'Mehmed II', title: 'The Conqueror', years: 'r. 1451–1481' },
        { name: 'Suleiman the Magnificent', title: 'Sultan', years: 'r. 1520–1566' }
      ]
    },
    {
      startYear: 1923,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Turkey',
      government: 'Republic',
      capital: 'Ankara',
      religion: ['Sunni Islam (secular state)'],
      culture: ['Turkish'],
      summary: 'The secular nation-state founded by Atatürk from the ruins of the empire, bridging Europe and the Middle East and a NATO member from 1952.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Aegean & Cyprus disputes', note: 'Tense NATO neighbours with long-running disputes.' },
        { to: 'germany', type: 'ally', label: 'NATO partner', note: 'A pillar of NATO’s southeastern flank.' }
      ],
      figures: [{ name: 'Mustafa Kemal Atatürk', title: 'Founding President', years: 'r. 1923–1938' }]
    }
  ]
}

export default turkey
