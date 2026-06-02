import type { Country } from '../countryTypes'

const hungary: Country = {
  id: 'hungary',
  name: 'Hungary',
  mapNames: ['Hungary'],
  color: '#a0623a',
  centroid: [19.4, 47.2],
  periods: [
    {
      startYear: 0,
      endYear: 568,
      eraId: 'roman',
      name: 'Roman Pannonia',
      modernEquivalent: false,
      government: 'Roman province, then migration-era kingdoms',
      capital: 'Aquincum (Budapest) / Sirmium',
      religion: ['Roman paganism → Christianity'],
      culture: ['Pannonian', 'Roman', 'Hunnic'],
      summary:
        'The Danube basin was the Roman province of Pannonia, a vital military frontier; after Rome it became the heartland of Attila’s Hunnic empire and a corridor for Goths and Gepids before the Avars arrived.',
      relations: [
        { to: 'italy', type: 'war', label: 'Huns & Rome', note: 'Attila ruled the Pannonian plain and invaded Italy in 452.' },
        { to: 'austria', type: 'interaction', label: 'Neighbouring Noricum', note: 'Pannonia bordered the Roman Danube province of Noricum to the west.' }
      ],
      figures: [
        { name: 'Attila', title: 'King of the Huns', years: 'r. 434–453' }
      ]
    },
    {
      startYear: 568,
      endYear: 1000,
      eraId: 'early-medieval',
      name: 'Avar Khaganate & the Magyar Conquest',
      modernEquivalent: false,
      government: 'Avar khaganate → Magyar tribal confederacy',
      capital: '— (nomadic)',
      religion: ['Steppe paganism (Tengrism)'],
      culture: ['Avar', 'Magyar', 'Slavic'],
      summary:
        'For two centuries the Avars ruled the Carpathian Basin until Charlemagne broke them; then in 895 the Magyars under Árpád seized the plain and raided deep into Europe — until their defeat at Lechfeld (955) turned them toward a settled, Christian kingdom.',
      relations: [
        { to: 'germany', type: 'war', label: 'Magyar raids & Lechfeld (955)', note: 'Hungarian horsemen ravaged Germany until Otto I crushed them at Lechfeld.' },
        { to: 'france', type: 'war', label: 'Charlemagne destroys the Avars', note: 'Frankish campaigns shattered the Avar khaganate around 800.' },
        { to: 'italy', type: 'war', label: 'Raids into Italy', note: 'Magyar war-bands plundered Lombardy and beyond in the early 10th century.' }
      ],
      figures: [
        { name: 'Árpád', title: 'Grand Prince of the Magyars', years: 'r. c. 895–907' },
        { name: 'Saint Stephen I', title: 'First Christian king', years: 'r. 1000–1038' }
      ]
    },
    {
      startYear: 1000,
      endYear: 1526,
      eraId: 'high-medieval',
      name: 'Kingdom of Hungary',
      government: 'Christian kingdom',
      capital: 'Esztergom / Buda',
      religion: ['Roman Catholicism'],
      culture: ['Hungarian (Magyar)'],
      summary: 'Founded by St Stephen in 1000, the Magyar kingdom was a major Central European power — surviving the Mongol storm of 1241 — and a bulwark against the Ottomans until Mohács.',
      relations: [
        { to: 'austria', type: 'war', label: 'Wars with the Babenbergs & Habsburgs', note: 'Recurrent fighting over the Danube frontier.' },
        { to: 'poland', type: 'interaction', label: 'Shared crowns', note: 'Angevin and Jagiellonian kings linked the Hungarian and Polish thrones.' },
        { to: 'turkey', type: 'war', label: 'Ottoman–Hungarian Wars', note: 'Ended at Mohács (1526), where the king and army were destroyed.' }
      ],
      figures: [
        { name: 'Béla IV', title: 'King (rebuilt after the Mongols)', years: 'r. 1235–1270' },
        { name: 'Matthias Corvinus', title: 'King of Hungary', years: 'r. 1458–1490' }
      ]
    },
    {
      startYear: 1526,
      endYear: 1867,
      eraId: 'early-modern',
      name: 'Habsburg Hungary',
      government: 'Kingdom under the Habsburgs',
      capital: 'Pressburg (Bratislava) / Buda',
      religion: ['Roman Catholicism', 'Calvinism'],
      culture: ['Hungarian'],
      summary: 'Partitioned between Ottomans and Habsburgs, then reunited under Austrian rule, Hungary chafed against Vienna and revolted in 1848.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg rule', note: 'Ruled from Vienna; the 1848 revolution was suppressed.' },
        { to: 'turkey', type: 'war', label: 'Ottoman occupation', note: 'Central Hungary was an Ottoman province for 150 years.' }
      ],
      figures: [{ name: 'Lajos Kossuth', title: 'Leader of 1848', years: '1802–1894' }]
    },
    {
      startYear: 1867,
      endYear: 1918,
      eraId: 'world-wars',
      name: 'Austria-Hungary (Hungarian half)',
      modernEquivalent: false,
      government: 'Dual monarchy',
      capital: 'Budapest',
      religion: ['Roman Catholicism'],
      culture: ['Hungarian'],
      summary: 'The 1867 Compromise made Hungary an equal partner in the Dual Monarchy, which fought and collapsed in the First World War.',
      relations: [
        { to: 'austria', type: 'ally', label: 'Dual Monarchy', note: 'Joined with Austria in a single great power.' },
        { to: 'germany', type: 'ally', label: 'Central Powers', note: 'Allied with Germany in WWI.' }
      ],
      figures: [{ name: 'Gyula Andrássy', title: 'Statesman', years: '1823–1890' }]
    },
    {
      startYear: 1989,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Hungary',
      government: 'Parliamentary republic',
      capital: 'Budapest',
      religion: ['Roman Catholicism / secular'],
      culture: ['Hungarian'],
      summary: 'After communism, Hungary joined NATO (1999) and the EU (2004), later taking a more nationalist, Eurosceptic turn.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Member of the European Union since 2004.' },
        { to: 'austria', type: 'ally', label: 'Central European neighbour', note: 'Close ties with neighbouring Austria.' }
      ],
      figures: [{ name: 'József Antall', title: 'First post-communist PM', years: 'r. 1990–1993' }]
    }
  ]
}

export default hungary
