import type { Country } from '../countryTypes'

const montenegro: Country = {
  id: 'montenegro',
  name: 'Montenegro',
  mapNames: ['Montenegro'],
  color: '#993a72',
  centroid: [19.26, 42.78],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Dalmatia',
      modernEquivalent: false,
      government: 'Roman provinces (Dalmatia / Praevalitana)',
      capital: 'Doclea (Duklja)',
      religion: ['Illyrian & Roman paganism → Christianity'],
      culture: ['Illyrian', 'Roman'],
      summary:
        'The rugged Adriatic hinterland of the Illyrians became Roman Dalmatia, and from the late empire the province of Praevalitana, centred on the city of Doclea (Duklja) that would one day give its name to the first Montenegrin state.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman province', note: 'Praevalitana and Dalmatia were governed from Rome, dotted with cities like Doclea.' },
        { to: 'albania', type: 'interaction', label: 'Shared Illyrian coast', note: 'The Illyrian tribes and Roman roads of the eastern Adriatic spanned both lands.' }
      ],
      figures: [
        { name: 'Diocletian', title: 'Roman emperor (Dalmatian-born)', years: 'r. 284–305' }
      ]
    },
    {
      startYear: 476,
      endYear: 1042,
      eraId: 'early-medieval',
      name: 'Byzantine & Slavic Duklja',
      modernEquivalent: false,
      government: 'Byzantine theme / early Slavic principality',
      capital: 'Doclea / Kotor',
      religion: ['Christianity (Latin & Orthodox)'],
      culture: ['Slavic', 'Byzantine', 'Romance'],
      summary:
        'As Slavs settled the karst mountains and bays, the early Slavic polity of Duklja took shape along the coast under loose Byzantine suzerainty, a frontier between the Latin West and the Greek East.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Byzantine & Latin coast', note: 'The Adriatic towns kept ties with Byzantine Italy and the Latin Church.' },
        { to: 'serbia', type: 'interaction', label: 'Slavic settlement', note: 'Shared in the Slavic settlement of the Balkans alongside the early Serb principalities.' },
        { to: 'greece', type: 'interaction', label: 'Byzantine suzerainty', note: 'Duklja recognised, and chafed under, the authority of Constantinople.' }
      ],
      figures: [
        { name: 'Jovan Vladimir', title: 'Prince of Duklja (saint)', years: 'r. c. 990–1016' }
      ]
    },
    {
      startYear: 1042,
      endYear: 1186,
      eraId: 'high-medieval',
      name: 'Kingdom of Duklja / Zeta',
      government: 'Medieval kingdom',
      capital: 'Skadar / Bar',
      religion: ['Christianity (Catholic & Orthodox)'],
      culture: ['Serbian', 'Slavic'],
      summary:
        'After Stefan Vojislav threw off Byzantine rule, the Vojislavljević dynasty raised Duklja (Zeta) into a kingdom — King Mihailo won a royal crown recognised by the Pope, and his son Constantine Bodin extended it across the western Balkans.',
      relations: [
        { to: 'greece', type: 'war', label: 'Revolt against Byzantium', note: 'Vojislav routed a Byzantine army (1042) to win independence for Duklja.' },
        { to: 'italy', type: 'ally', label: 'Papal recognition', note: 'King Mihailo received royal regalia and a crown from the Pope in Rome.' },
        { to: 'serbia', type: 'interaction', label: 'Lead Serb realm', note: 'Duklja was the foremost of the medieval Serb lands before Raška’s rise.' }
      ],
      figures: [
        { name: 'Stefan Vojislav', title: 'Founder of the Vojislavljević realm', years: 'r. c. 1018–1043' },
        { name: 'Mihailo I', title: 'King of Duklja (crowned by the Pope)', years: 'r. 1050–1081' },
        { name: 'Constantine Bodin', title: 'King of Duklja', years: 'r. 1081–1101' }
      ]
    },
    {
      startYear: 1186,
      endYear: 1496,
      eraId: 'late-medieval',
      name: 'Zeta under Serbia & the Balšići',
      modernEquivalent: false,
      government: 'Serbian crown land → semi-independent lordships',
      capital: 'Žabljak Crnojevića / Cetinje',
      religion: ['Orthodox Christianity'],
      culture: ['Serbian', 'Slavic'],
      summary:
        'Absorbed by Nemanjić Serbia as the province of Zeta, the land later fell to the semi-independent lordships of the Balšić and then the Crnojević nobles, who clung to the mountains as the Ottomans overran the Balkans.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Nemanjić Zeta', note: 'Zeta was the maritime appanage of the Serbian Nemanjić kingdom and empire.' },
        { to: 'turkey', type: 'war', label: 'Ottoman advance', note: 'The Balšić and Crnojević lords fought a losing struggle against the rising Ottomans.' },
        { to: 'italy', type: 'interaction', label: 'Venetian coast', note: 'Venice took the Adriatic towns of Kotor, Budva and Bar from the local lords.' }
      ],
      figures: [
        { name: 'Balša II', title: 'Lord of Zeta', years: 'r. 1378–1385' },
        { name: 'Ivan Crnojević', title: 'Lord of Zeta (founded Cetinje)', years: 'r. 1465–1490' }
      ]
    },
    {
      startYear: 1496,
      endYear: 1852,
      eraId: 'early-modern',
      name: 'Prince-Bishopric of Montenegro',
      modernEquivalent: false,
      government: 'Theocracy (prince-bishopric / vladika)',
      capital: 'Cetinje',
      religion: ['Orthodox Christianity'],
      culture: ['Montenegrin', 'Serbian'],
      summary:
        'In the highlands above the Ottoman tide rose a theocratic state ruled by the vladikas — Orthodox prince-bishops — and from 1697 the Petrović-Njegoš dynasty made the office hereditary, its crowning figure the warrior-poet Petar II Petrović-Njegoš.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Highland resistance', note: 'The vladikas waged ceaseless mountain warfare against Ottoman incursions.' },
        { to: 'russia', type: 'ally', label: 'Orthodox protector', note: 'Petar I and his successors looked to Orthodox Russia for subsidies and support.' },
        { to: 'italy', type: 'interaction', label: 'Venetian & French coast', note: 'Bordered Venetian (then French and Austrian) Dalmatia along the Bay of Kotor.' }
      ],
      figures: [
        { name: 'Petar I Petrović-Njegoš', title: 'Vladika (saint, unifier)', years: 'r. 1782–1830' },
        { name: 'Petar II Petrović-Njegoš', title: 'Vladika & poet (The Mountain Wreath)', years: '1813–1851' }
      ]
    },
    {
      startYear: 1852,
      endYear: 1918,
      eraId: 'long-19th',
      name: 'Principality & Kingdom of Montenegro',
      government: 'Principality → kingdom (monarchy)',
      capital: 'Cetinje',
      religion: ['Orthodox Christianity'],
      culture: ['Montenegrin', 'Serbian'],
      summary:
        'Danilo I secularised the state into a principality in 1852; under Prince — later King — Nikola I, Montenegro won full independence at the Congress of Berlin (1878) and was proclaimed a kingdom in 1910, before being overrun in the First World War.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Wars of independence', note: 'Montenegro’s independence was recognised in 1878; it led the Balkan League against the Ottomans in 1912.' },
        { to: 'russia', type: 'ally', label: 'Orthodox patron', note: 'Tsarist Russia bankrolled and championed the little Orthodox kingdom; Nikola’s daughters married into European courts.' },
        { to: 'serbia', type: 'ally', label: 'Balkan ally', note: 'Fought alongside Serbia in the Balkan Wars and the First World War.' }
      ],
      figures: [
        { name: 'Danilo I', title: 'Prince (secularised the state)', years: 'r. 1852–1860' },
        { name: 'Nikola I', title: 'Prince then King of Montenegro', years: 'r. 1860–1918' }
      ]
    },
    {
      startYear: 1918,
      endYear: 2006,
      eraId: 'world-wars',
      name: 'Yugoslavia',
      modernEquivalent: false,
      government: 'Kingdom → socialist federation → federal union',
      capital: 'Belgrade (Titograd / Podgorica regionally)',
      religion: ['Orthodox Christianity', 'State atheism (socialist era)'],
      culture: ['Montenegrin', 'Serbian', 'Yugoslav'],
      summary:
        'The kingdom was merged into the new Yugoslav state in 1918, becoming a republic in Tito’s socialist federation and later the junior partner of Serbia in rump Yugoslavia and the State Union of Serbia and Montenegro.',
      relations: [
        { to: 'serbia', type: 'ally', label: 'Yugoslav federation', note: 'Joined the Kingdom of Serbs, Croats and Slovenes and remained tied to Serbia to the very end.' },
        { to: 'croatia', type: 'interaction', label: 'Yugoslav republics', note: 'A constituent unit alongside Croatia, Bosnia, Slovenia and Macedonia in federal Yugoslavia.' },
        { to: 'russia', type: 'interaction', label: 'Soviet & post-Soviet ties', note: 'Tito broke with Stalin in 1948, but later rump Yugoslavia leaned again toward Moscow.' }
      ],
      figures: [
        { name: 'Josip Broz Tito', title: 'Yugoslav leader', years: 'r. 1945–1980' },
        { name: 'Milo Đukanović', title: 'Montenegrin premier (steered independence)', years: 'r. 1991–1998' }
      ]
    },
    {
      startYear: 2006,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Montenegro',
      government: 'Parliamentary republic',
      capital: 'Podgorica',
      religion: ['Orthodox Christianity', 'Islam', 'secular'],
      culture: ['Montenegrin', 'Serbian'],
      summary:
        'A narrow referendum in 2006 restored Montenegrin independence after nearly nine decades; the small Adriatic republic joined NATO in 2017 and became a front-runner for European Union membership.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Peaceful separation', note: 'Independence by referendum (2006) ended the union, leaving close but sometimes strained ties with Serbia.' },
        { to: 'italy', type: 'ally', label: 'NATO & EU partner', note: 'Joined NATO in 2017 and looks across the Adriatic to EU member Italy as it negotiates accession.' },
        { to: 'russia', type: 'interaction', label: 'Cooling ties', note: 'Once an Orthodox friend, Russia opposed Montenegro’s NATO entry and was linked to a 2016 coup plot.' }
      ],
      figures: [
        { name: 'Filip Vujanović', title: 'First President of independent Montenegro', years: 'r. 2006–2018' },
        { name: 'Milo Đukanović', title: 'President & long-dominant leader', years: 'r. 2018–2023' }
      ]
    }
  ]
}

export default montenegro
