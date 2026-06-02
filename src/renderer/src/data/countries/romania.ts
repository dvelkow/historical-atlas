import type { Country } from '../countryTypes'

const romania: Country = {
  id: 'romania',
  name: 'Romania',
  mapNames: ['Romania'],
  color: '#386a9c',
  centroid: [25, 45.9],
  periods: [
    {
      startYear: 106,
      endYear: 271,
      eraId: 'roman',
      name: 'Roman Dacia',
      modernEquivalent: false,
      government: 'Roman imperial province',
      capital: 'Ulpia Traiana Sarmizegetusa',
      religion: ['Roman polytheism'],
      culture: ['Daco-Roman', 'Latin'],
      summary:
        'Trajan conquered the Dacian kingdom in two bloody wars (101–106), turning its gold-rich mountains into a prized Roman province — the wellspring of the Latin language and identity Romanians still claim, even after Aurelian withdrew the legions in 271.',
      relations: [
        { to: 'italy', type: 'war', label: 'Trajan’s Dacian Wars', note: 'Rome conquered Dacia in 106 and colonised it with Latin-speaking settlers.' },
        { to: 'hungary', type: 'interaction', label: 'Transylvanian heartland', note: 'Roman Dacia centred on Transylvania, later fiercely contested with the Magyars.' }
      ],
      figures: [
        { name: 'Trajan', title: 'Roman emperor (conqueror)', years: 'r. 98–117' },
        { name: 'Decebalus', title: 'Last king of Dacia', years: 'r. 87–106' }
      ]
    },
    {
      startYear: 271,
      endYear: 1330,
      eraId: 'late-antique',
      name: 'Migration Era & the Vlachs',
      modernEquivalent: false,
      government: 'Migrating peoples; no settled state',
      capital: '— (none)',
      religion: ['Paganism → Orthodox Christianity'],
      culture: ['Daco-Roman (Vlach)', 'Slavic'],
      summary:
        'After Rome withdrew, waves of Goths, Huns, Gepids, Avars, Slavs, Bulgars and finally Magyars and Cumans swept the Carpathians and lower Danube; through it all the Romanised Vlachs endured, emerging as the principalities of Wallachia and Moldavia in the 14th century.',
      relations: [
        { to: 'hungary', type: 'war', label: 'Magyars in Transylvania', note: 'The Hungarian crown absorbed Transylvania, ruling over its Romanian population.' },
        { to: 'bulgaria', type: 'interaction', label: 'Bulgarian Danube', note: 'The First and Second Bulgarian Empires long held the lands south of the Danube.' },
        { to: 'greece', type: 'interaction', label: 'Byzantine orbit', note: 'Orthodox Christianity and Byzantine culture shaped the emerging Vlach society.' }
      ],
      figures: [
        { name: 'Gelou', title: 'Vlach voivode of Transylvania (semi-legendary)', years: 'fl. c. 900' }
      ]
    },
    {
      startYear: 1330,
      endYear: 1600,
      eraId: 'late-medieval',
      name: 'Wallachia & Moldavia',
      government: 'Princely voivodeships',
      capital: 'Târgoviște / Suceava',
      religion: ['Orthodox Christianity'],
      culture: ['Romanian'],
      summary:
        'The two Danubian principalities emerged in the 14th century — Wallachia under Basarab and Moldavia under Bogdan — and their warrior-princes Vlad the Impaler and Stephen the Great won fame resisting the advancing Ottomans.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Resistance to the Ottomans', note: 'Vlad III and Stephen the Great fought the sultans before the principalities became tributaries.' },
        { to: 'hungary', type: 'war', label: 'Hungarian suzerainty & wars', note: 'Both principalities alternated between Hungarian overlordship and open conflict.' },
        { to: 'poland', type: 'interaction', label: 'Moldavian–Polish ties', note: 'Moldavia often sought Polish protection against its neighbours.' }
      ],
      figures: [
        { name: 'Vlad III Dracula', title: 'Prince of Wallachia', years: 'r. 1448, 1456–1462, 1476' },
        { name: 'Stephen the Great', title: 'Prince of Moldavia', years: 'r. 1457–1504' }
      ]
    },
    {
      startYear: 1600,
      endYear: 1859,
      eraId: 'early-modern',
      name: 'Ottoman Vassalage & the Phanariots',
      modernEquivalent: false,
      government: 'Tributary principalities under Ottoman suzerainty',
      capital: 'Bucharest / Iași',
      religion: ['Orthodox Christianity'],
      culture: ['Romanian', 'Greek (Phanariot)'],
      summary:
        'Michael the Brave briefly united Wallachia, Moldavia and Transylvania in 1600, but the lands sank into Ottoman vassalage, ruled for a century by Greek Phanariot governors appointed from Constantinople.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Ottoman suzerainty', note: 'The principalities paid tribute and accepted princes named by the Porte.' },
        { to: 'russia', type: 'ally', label: 'Orthodox protector', note: 'Tsarist Russia increasingly intervened as champion of the Orthodox principalities.' },
        { to: 'austria', type: 'war', label: 'Habsburg pressure', note: 'Austria seized Oltenia and Bukovina and pressed on the Carpathian frontier.' }
      ],
      figures: [
        { name: 'Michael the Brave', title: 'Unifier of the three lands (1600)', years: 'r. 1593–1601' }
      ]
    },
    {
      startYear: 1859,
      endYear: 1947,
      eraId: 'long-19th',
      name: 'Kingdom of Romania',
      government: 'Constitutional monarchy',
      capital: 'Bucharest',
      religion: ['Orthodox Christianity'],
      culture: ['Romanian'],
      summary:
        'Wallachia and Moldavia united under Alexandru Ioan Cuza in 1859, won full independence in 1878, and emerged from the First World War as Greater Romania — only to be carved up and dragged through the Second World War.',
      relations: [
        { to: 'turkey', type: 'war', label: 'War of Independence (1877–78)', note: 'Romania fought alongside Russia to throw off Ottoman suzerainty.' },
        { to: 'austria', type: 'war', label: 'Transylvania & WWI', note: 'Romania entered WWI against Austria-Hungary and gained Transylvania in 1918.' },
        { to: 'russia', type: 'war', label: 'Bessarabia dispute', note: 'Repeated clashes with Russia over Bessarabia, lost again in 1940.' },
        { to: 'germany', type: 'war', label: 'Axis ally, then switch', note: 'Joined the Axis under Antonescu before turning against Germany in August 1944.' }
      ],
      figures: [
        { name: 'Carol I', title: 'First king of Romania', years: 'r. 1881–1914' },
        { name: 'Michael I', title: 'Last king of Romania', years: 'r. 1927–1930, 1940–1947' }
      ]
    },
    {
      startYear: 1947,
      endYear: 2025,
      eraId: 'cold-war',
      name: 'Communist & Modern Romania',
      government: 'Communist state → parliamentary republic',
      capital: 'Bucharest',
      religion: ['Orthodox Christianity / secular'],
      culture: ['Romanian'],
      summary:
        'A Soviet-bloc republic fell under Nicolae Ceaușescu’s harsh dictatorship until the violent 1989 revolution toppled him; democratic Romania then joined NATO (2004) and the European Union (2007).',
      relations: [
        { to: 'russia', type: 'ally', label: 'Soviet bloc member', note: 'A Warsaw Pact and Comecon state, though Ceaușescu pursued a maverick line.' },
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Romania joined the European Union in 2007.' },
        { to: 'hungary', type: 'interaction', label: 'Transylvanian minority', note: 'Tensions persist over the large Hungarian minority in Transylvania.' }
      ],
      figures: [
        { name: 'Nicolae Ceaușescu', title: 'Communist dictator', years: 'r. 1965–1989' }
      ]
    }
  ]
}

export default romania
