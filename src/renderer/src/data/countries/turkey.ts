import type { Country } from '../countryTypes'

const turkey: Country = {
  id: 'turkey',
  name: 'Turkey',
  mapNames: ['Turkey'],
  color: '#c0843a',
  centroid: [33.0, 39.2],
  periods: [
    {
      startYear: 0,
      endYear: 1071,
      eraId: 'early-medieval',
      name: 'Roman & Byzantine Anatolia',
      modernEquivalent: false,
      government: 'Roman / Byzantine provinces',
      capital: 'Constantinople / Nicaea',
      religion: ['Eastern Orthodox Christianity'],
      culture: ['Greek', 'Anatolian'],
      summary:
        'For a thousand years Anatolia was the wealthy heartland of the Roman and then Byzantine Empire — until the Seljuk victory at Manzikert (1071) threw open the plateau to Turkic settlement.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Byzantine heartland', note: 'Anatolia and the Aegean formed the core of the Eastern Roman world.' },
        { to: 'italy', type: 'war', label: 'Wars with Rome & the Latins', note: 'From the Gothic wars to the Fourth Crusade’s sack of Constantinople (1204).' },
        { to: 'russia', type: 'interaction', label: 'Rus’ raids & trade', note: 'The Rus’ raided and traded with Constantinople along the Black Sea.' }
      ],
      figures: [
        { name: 'Justinian I', title: 'Byzantine Emperor', years: 'r. 527–565' },
        { name: 'Basil II', title: 'Byzantine Emperor', years: 'r. 976–1025' }
      ]
    },
    {
      startYear: 1077,
      endYear: 1299,
      eraId: 'high-medieval',
      name: 'Seljuk Sultanate of Rum',
      modernEquivalent: false,
      government: 'Turkic sultanate',
      capital: 'Konya',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Persianate'],
      summary:
        'After Manzikert the Seljuk Turks settled Anatolia, and the Sultanate of Rum at Konya turned it into a Turkish-Muslim land — the cradle of what became Turkey — until the Mongols and rising beyliks broke it apart.',
      relations: [
        { to: 'greece', type: 'war', label: 'Wars with Byzantium', note: 'The Seljuks seized the Anatolian plateau from a reeling Byzantium.' },
        { to: 'france', type: 'war', label: 'The Crusades pass through', note: 'Crusader armies fought across Seljuk Anatolia en route to Jerusalem.' },
        { to: 'italy', type: 'interaction', label: 'Italian sea-trade', note: 'Venetian and Genoese merchants traded along the Anatolian coasts.' }
      ],
      figures: [
        { name: 'Alp Arslan', title: 'Great Seljuk Sultan (Manzikert)', years: 'r. 1063–1072' },
        { name: 'Kilij Arslan II', title: 'Sultan of Rum', years: 'r. 1156–1192' }
      ]
    },
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
