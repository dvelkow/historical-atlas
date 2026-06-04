import type { Country } from '../countryTypes'

const moldova: Country = {
  id: 'moldova',
  name: 'Moldova',
  mapNames: ['Moldova'],
  color: '#b5793a',
  centroid: [28.85, 47.0],
  periods: [
    {
      startYear: 0,
      endYear: 271,
      eraId: 'roman',
      name: 'Roman Dacia Frontier',
      modernEquivalent: false,
      government: 'Tribal lands beyond the Roman limes',
      capital: '— (no central seat)',
      religion: ['Dacian & Sarmatian paganism'],
      culture: ['Dacian', 'Sarmatian', 'Roman'],
      summary:
        'The lands between the Carpathians and the lower Danube lay on the wild edge of the Roman world; while Trajan conquered Dacia proper across the river, the steppe of the future Moldova belonged to free Dacians and roaming Sarmatian horsemen who raided and traded with the legions.',
      relations: [
        { to: 'italy', type: 'war', label: 'On Rome’s Dacian frontier', note: 'The free tribes here harried the Roman province of Dacia and the Danube garrisons.' },
        { to: 'romania', type: 'interaction', label: 'Beyond Roman Dacia', note: 'Shared the Daco-Roman frontier world with the conquered lands west of the river.' },
        { to: 'russia', type: 'interaction', label: 'Sarmatian steppe', note: 'Iranian-speaking Sarmatian nomads ranged across the Pontic steppe into the region.' }
      ],
      figures: [
        { name: 'Trajan', title: 'Roman emperor (conqueror of Dacia)', years: 'r. 98–117' },
        { name: 'Decebalus', title: 'King of the Dacians', years: 'r. 87–106' }
      ]
    },
    {
      startYear: 271,
      endYear: 1359,
      eraId: 'late-antique',
      name: 'Migration-Era Steppe',
      modernEquivalent: false,
      government: 'Successive nomadic confederations',
      capital: '— (nomadic)',
      religion: ['Steppe paganism / Tengrism → Orthodox Christianity'],
      culture: ['Gothic', 'Hunnic', 'Slavic', 'Turkic', 'Mongol'],
      summary:
        'After Rome abandoned Dacia in 271 the open lands east of the Carpathians became a highway for migrating peoples — Goths and Huns, then Avars, Bulgars, Pechenegs and Cumans — until the Mongols of the Golden Horde dominated the steppe, ruling it until their grip loosened in the mid-14th century.',
      relations: [
        { to: 'russia', type: 'war', label: 'Golden Horde steppe', note: 'The Mongol Golden Horde held the western steppe, exacting tribute across the region.' },
        { to: 'hungary', type: 'war', label: 'Frontier of the marches', note: 'The Hungarian crown pushed marcher lords east against the steppe peoples.' },
        { to: 'turkey', type: 'interaction', label: 'Pecheneg & Cuman waves', note: 'Turkic Pechenegs and Cumans migrated through before being absorbed or scattered.' }
      ],
      figures: [
        { name: 'Attila', title: 'King of the Huns', years: 'r. c. 434–453' },
        { name: 'Athanaric', title: 'Gothic judge (Thervingi)', years: 'r. c. 369–381' }
      ]
    },
    {
      startYear: 1359,
      endYear: 1538,
      eraId: 'late-medieval',
      name: 'Principality of Moldavia',
      government: 'Principality (voivodeship)',
      capital: 'Suceava',
      religion: ['Orthodox Christianity'],
      culture: ['Moldavian', 'Romanian'],
      summary:
        'Founded by Bogdan I around 1359 as he threw off Hungarian overlordship, the Principality of Moldavia reached its zenith under Stephen the Great (Ștefan cel Mare), who in a long and brilliant reign defended his small realm against Ottomans, Hungarians and Poles, winning the famous victory at Vaslui (1475).',
      relations: [
        { to: 'turkey', type: 'war', label: 'Stephen’s Ottoman wars', note: 'Stephen the Great routed a vast Ottoman army at Vaslui (1475) before later defeats forced tribute.' },
        { to: 'poland', type: 'war', label: 'Codrii Cosminului (1497)', note: 'Stephen ambushed and crushed the invading army of King John I Albert of Poland.' },
        { to: 'hungary', type: 'war', label: 'Breaking free of Buda', note: 'Bogdan I founded the principality in revolt against Hungarian suzerainty; Stephen won at Baia (1467).' }
      ],
      figures: [
        { name: 'Bogdan I', title: 'Founding voivode of Moldavia', years: 'r. c. 1359–1365' },
        { name: 'Stephen the Great', title: 'Voivode (Ștefan cel Mare)', years: 'r. 1457–1504' }
      ]
    },
    {
      startYear: 1538,
      endYear: 1812,
      eraId: 'early-modern',
      name: 'Ottoman Vassal Moldavia',
      modernEquivalent: false,
      government: 'Autonomous tributary principality',
      capital: 'Iași',
      religion: ['Orthodox Christianity'],
      culture: ['Moldavian', 'Romanian', 'Greek (Phanariot)'],
      summary:
        'From Süleyman the Magnificent’s campaign of 1538 Moldavia became an autonomous but tribute-paying vassal of the Ottoman Porte; after the failed revolt of 1711 the sultans replaced native princes with appointed Phanariot Greek governors, who farmed the realm for over a century.',
      relations: [
        { to: 'turkey', type: 'interaction', label: 'Tributary of the Porte', note: 'An autonomous principality paying tribute, its princes confirmed (and later named) by the sultan.' },
        { to: 'poland', type: 'war', label: 'Wars over the borderlands', note: 'Moldavia was repeatedly contested and ravaged in Polish–Ottoman wars, as at Cecora (1620).' },
        { to: 'russia', type: 'interaction', label: 'Russia’s southern advance', note: 'Cantemir allied with Peter the Great in 1711; Russian armies later crossed Moldavia in war after war.' }
      ],
      figures: [
        { name: 'Dimitrie Cantemir', title: 'Prince & scholar of Moldavia', years: 'r. 1710–1711' },
        { name: 'Vasile Lupu', title: 'Prince of Moldavia', years: 'r. 1634–1653' }
      ]
    },
    {
      startYear: 1812,
      endYear: 1918,
      eraId: 'long-19th',
      name: 'Bessarabia under Russia',
      modernEquivalent: false,
      government: 'Russian imperial governorate (oblast → guberniya)',
      capital: 'Chișinău',
      religion: ['Orthodox Christianity'],
      culture: ['Moldavian', 'Romanian', 'Russian'],
      summary:
        'By the Treaty of Bucharest (1812) ending the Russo-Turkish war, the Ottomans ceded the eastern half of Moldavia between the Prut and Dniester to the Russian Empire; renamed Bessarabia, it was gradually Russified over the following century.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Annexed as Bessarabia', note: 'Ceded to the Russian Empire in 1812 and subjected to a long policy of Russification.' },
        { to: 'turkey', type: 'war', label: 'Prize of the 1806–12 war', note: 'The Treaty of Bucharest transferred the land from Ottoman suzerainty to Russia.' },
        { to: 'romania', type: 'interaction', label: 'Severed from Moldavia', note: 'The cession split Bessarabia from the rest of Moldavia, which later joined Wallachia to form Romania.' }
      ],
      figures: [
        { name: 'Alexander I', title: 'Russian emperor (annexed Bessarabia)', years: 'r. 1801–1825' },
        { name: 'Bogdan Petriceicu Hasdeu', title: 'Bessarabian-born scholar', years: '1838–1907' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1940,
      eraId: 'world-wars',
      name: 'Union with Romania',
      modernEquivalent: false,
      government: 'Province of the Kingdom of Romania',
      capital: 'Chișinău',
      religion: ['Orthodox Christianity'],
      culture: ['Romanian', 'Moldavian'],
      summary:
        'Amid the collapse of the Russian Empire, the Bessarabian parliament (Sfatul Țării) proclaimed union with the Kingdom of Romania in 1918; for two interwar decades Bessarabia was a Romanian province, though Soviet Russia never recognised the loss.',
      relations: [
        { to: 'romania', type: 'ally', label: 'Union of 1918', note: 'The Sfatul Țării voted to unite Bessarabia with the Kingdom of Romania.' },
        { to: 'russia', type: 'war', label: 'Soviet non-recognition', note: 'Soviet Russia refused to accept the union and pressed claims to Bessarabia throughout the period.' },
        { to: 'ukraine', type: 'interaction', label: 'Dniester frontier', note: 'Across the river the Soviets created the Moldavian ASSR within Ukraine as a counter-claim.' }
      ],
      figures: [
        { name: 'Ion Inculeț', title: 'President of the Sfatul Țării', years: '1884–1940' },
        { name: 'Pantelimon Halippa', title: 'Bessarabian unionist leader', years: '1883–1979' }
      ]
    },
    {
      startYear: 1940,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Moldavian SSR',
      modernEquivalent: false,
      government: 'Soviet socialist republic',
      capital: 'Chișinău',
      religion: ['State atheism / Orthodox'],
      culture: ['Moldavian', 'Russian', 'Romanian'],
      summary:
        'Under the secret Molotov–Ribbentrop Pact the USSR annexed Bessarabia in 1940 and forged the Moldavian SSR; after the German–Romanian interlude of the war it was reabsorbed in 1944, then Sovietised, collectivised and Russified for nearly half a century.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Soviet republic', note: 'Annexed via the Molotov–Ribbentrop Pact and ruled from Moscow as the Moldavian SSR.' },
        { to: 'romania', type: 'war', label: 'Torn from Romania', note: 'Seized from Romania in 1940; briefly retaken by Antonescu’s Romania (1941–44) before the Soviet return.' },
        { to: 'ukraine', type: 'interaction', label: 'Reshaped borders', note: 'Soviet redrawing handed Bessarabia’s coast and south to Ukraine while fixing the new republic’s shape.' }
      ],
      figures: [
        { name: 'Ivan Bodiul', title: 'Communist Party first secretary', years: 'r. 1961–1980' },
        { name: 'Mircea Snegur', title: 'Last Soviet-era leader, first President', years: 'r. 1990–1997' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Moldova',
      government: 'Parliamentary republic',
      capital: 'Chișinău',
      religion: ['Orthodox / secular'],
      culture: ['Moldovan', 'Romanian', 'Russian'],
      summary:
        'Moldova declared independence as the USSR dissolved in 1991, almost at once losing control of the Russian-backed breakaway of Transnistria; long Europe’s poorest state, it has steadily turned westward, winning EU candidate status in 2022 under President Maia Sandu.',
      relations: [
        { to: 'romania', type: 'ally', label: 'Closest partner', note: 'Shared language and history bind Moldova to Romania, its main bridge to the EU.' },
        { to: 'russia', type: 'war', label: 'Transnistria & gas pressure', note: 'A short 1992 war left Russian-backed Transnistria breakaway; Moscow keeps troops and leverages energy.' },
        { to: 'ukraine', type: 'ally', label: 'Wartime neighbour', note: 'Hosted refugees and aligned westward after Russia’s 2022 invasion of neighbouring Ukraine.' }
      ],
      figures: [
        { name: 'Mircea Snegur', title: 'First President of Moldova', years: 'r. 1990–1997' },
        { name: 'Maia Sandu', title: 'Pro-EU President', years: 'r. 2020–present' }
      ]
    }
  ]
}

export default moldova
