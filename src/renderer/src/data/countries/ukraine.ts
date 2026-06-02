import type { Country } from '../countryTypes'

const ukraine: Country = {
  id: 'ukraine',
  name: 'Ukraine',
  mapNames: ['Ukraine'],
  color: '#4aa0a0',
  centroid: [31, 49],
  periods: [
    {
      startYear: 882,
      endYear: 1349,
      eraId: 'early-medieval',
      name: 'Kyivan Rus’ & Galicia-Volhynia',
      government: 'Princely federation',
      capital: 'Kyiv / Halych',
      religion: ['Slavic paganism → Orthodox Christianity (from 988)'],
      culture: ['East Slavic', 'Rus’'],
      summary:
        'From 882 Kyiv was the heart of the Rus’, a great river-trading realm Christianised from Byzantium under Volodymyr in 988; after the Mongol onslaught of 1240 the western principality of Galicia-Volhynia carried the legacy on until 1349.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Byzantine Christianisation', note: 'Volodymyr adopted Orthodox Christianity from Constantinople in 988.' },
        { to: 'russia', type: 'interaction', label: 'Shared Rus’ heritage', note: 'Kyiv was the common cradle from which the northern Rus’ principalities grew.' },
        { to: 'poland', type: 'war', label: 'Western frontier', note: 'Repeated wars and dynastic ties over Galicia along the Polish border.' }
      ],
      figures: [
        { name: 'Yaroslav the Wise', title: 'Grand Prince of Kyiv', years: 'r. 1019–1054' },
        { name: 'Danylo of Galicia', title: 'King of Rus’', years: 'r. 1253–1264' }
      ]
    },
    {
      startYear: 1349,
      endYear: 1648,
      eraId: 'late-medieval',
      name: 'Lithuanian & Polish Rule',
      modernEquivalent: false,
      government: 'Provinces of Lithuania, then the Commonwealth',
      capital: '— (ruled from Vilnius / Kraków)',
      religion: ['Orthodox Christianity', 'Roman Catholicism'],
      culture: ['Ruthenian'],
      summary:
        'Most Ukrainian lands passed to the Grand Duchy of Lithuania and then, after the 1569 Union of Lublin, to the Polish-Lithuanian Commonwealth, while the southern steppe lay open to Crimean Tatar raids.',
      relations: [
        { to: 'poland', type: 'war', label: 'Commonwealth rule', note: 'Polish-Lithuanian magnates colonised the lands and bound peasants to serfdom.' },
        { to: 'turkey', type: 'war', label: 'Crimean Tatar raids', note: 'Ottoman-vassal Tatars carried off captives from the open southern steppe.' },
        { to: 'russia', type: 'interaction', label: 'Muscovite frontier', note: 'Orthodox ties drew the lands toward an emerging rival in the east.' }
      ],
      figures: [
        { name: 'Konstanty Ostrogski', title: 'Ruthenian magnate & patron', years: 'c. 1526–1608' }
      ]
    },
    {
      startYear: 1648,
      endYear: 1764,
      eraId: 'early-modern',
      name: 'Cossack Hetmanate',
      government: 'Cossack military republic',
      capital: 'Chyhyryn / Baturyn',
      religion: ['Orthodox Christianity'],
      culture: ['Ukrainian Cossack'],
      summary:
        'Bohdan Khmelnytsky’s 1648 uprising broke Polish rule and forged a Cossack state; the 1654 Pereyaslav agreement pulled it toward Russia, and Hetman Mazepa’s later revolt with Sweden ended in defeat at Poltava.',
      relations: [
        { to: 'poland', type: 'war', label: 'Khmelnytsky uprising', note: 'The 1648 revolt shattered Polish authority over the Ukrainian lands.' },
        { to: 'russia', type: 'war', label: 'Overlordship & Mazepa’s revolt', note: 'The 1654 Pereyaslav pact brought Russian suzerainty that Mazepa later defied.' },
        { to: 'sweden', type: 'ally', label: 'Mazepa’s alliance', note: 'Mazepa joined Charles XII against Russia, crushed at Poltava in 1709.' },
        { to: 'turkey', type: 'ally', label: 'Ottoman protection', note: 'Hetman Doroshenko briefly sought Ottoman overlordship in the 1670s.' }
      ],
      figures: [
        { name: 'Bohdan Khmelnytsky', title: 'Hetman of the Cossacks', years: 'r. 1648–1657' },
        { name: 'Ivan Mazepa', title: 'Hetman who allied with Sweden', years: 'r. 1687–1709' }
      ]
    },
    {
      startYear: 1764,
      endYear: 1917,
      eraId: 'early-modern',
      name: 'Russian & Austrian Partition',
      modernEquivalent: false,
      government: 'Imperial provinces',
      capital: '— (ruled from St Petersburg / Vienna)',
      religion: ['Orthodox Christianity', 'Greek Catholicism'],
      culture: ['Ukrainian'],
      summary:
        'The Hetmanate was abolished in 1764 and the lands divided: the bulk fell to the Russian Empire, which suppressed the Ukrainian language, while Habsburg Galicia became a nursery of the national revival.',
      relations: [
        { to: 'russia', type: 'war', label: 'Russification', note: 'The Russian Empire banned Ukrainian publishing under the 1876 Ems decree.' },
        { to: 'austria', type: 'interaction', label: 'Habsburg Galicia', note: 'Looser Austrian rule allowed a Ukrainian cultural and political revival.' },
        { to: 'poland', type: 'interaction', label: 'Galician rivalry', note: 'Ukrainians and Poles contested land and power within Habsburg Galicia.' }
      ],
      figures: [
        { name: 'Taras Shevchenko', title: 'National poet', years: '1814–1861' }
      ]
    },
    {
      startYear: 1917,
      endYear: 1991,
      eraId: 'world-wars',
      name: 'Soviet Ukraine',
      modernEquivalent: false,
      government: 'Soviet republic',
      capital: 'Kharkiv / Kyiv',
      religion: ['State atheism', 'Orthodox Christianity'],
      culture: ['Ukrainian', 'Soviet'],
      summary:
        'A brief independent republic (1917–21) was crushed and absorbed into the USSR; the Holodomor famine of 1932–33 killed millions, and the lands were devastated again in the Second World War.',
      relations: [
        { to: 'russia', type: 'war', label: 'Soviet rule & the Holodomor', note: 'Stalin’s forced collectivisation caused the 1932–33 famine that killed millions.' },
        { to: 'germany', type: 'war', label: 'Nazi occupation', note: 'Invasion and occupation in 1941–44 brought mass killing and ruin.' },
        { to: 'poland', type: 'war', label: 'Interwar border', note: 'Western Ukraine lay under Poland until the Soviet annexation of 1939.' }
      ],
      figures: [
        { name: 'Mykhailo Hrushevsky', title: 'President of the 1917 People’s Republic', years: '1866–1934' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Independent Ukraine',
      government: 'Semi-presidential republic',
      capital: 'Kyiv',
      religion: ['Orthodox Christianity', 'Greek Catholicism'],
      culture: ['Ukrainian'],
      summary:
        'Ukraine won independence in 1991 and turned westward through the 2004 Orange Revolution and 2014 Maidan; Russia answered by annexing Crimea in 2014 and launching a full-scale invasion in 2022.',
      relations: [
        { to: 'russia', type: 'war', label: 'Annexation & the 2022 war', note: 'Russia seized Crimea in 2014 and invaded the whole country in 2022.' },
        { to: 'poland', type: 'ally', label: 'Key wartime ally', note: 'Poland became a vital conduit for refugees and military aid.' },
        { to: 'germany', type: 'ally', label: 'EU support', note: 'Germany backed Ukraine’s EU candidacy and arms supplies after 2022.' }
      ],
      figures: [
        { name: 'Volodymyr Zelensky', title: 'President', years: 'r. 2019–present' }
      ]
    }
  ]
}

export default ukraine
