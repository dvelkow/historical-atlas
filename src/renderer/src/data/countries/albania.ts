import type { Country } from '../countryTypes'

const albania: Country = {
  id: 'albania',
  name: 'Albania',
  mapNames: ['Albania'],
  color: '#962a2a',
  centroid: [20.0, 41.0],
  periods: [
    {
      startYear: 0,
      endYear: 395,
      eraId: 'roman',
      name: 'Roman Illyricum',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Dyrrachium (Durrës)',
      religion: ['Illyrian & Roman paganism → Christianity'],
      culture: ['Illyrian', 'Roman', 'Greek'],
      summary:
        'The Illyrian tribes of the Adriatic coast were absorbed into Rome and reorganised as the province of Illyricum (later Epirus Nova). The port of Dyrrachium became the western anchor of the Via Egnatia, the great road linking the Adriatic to Constantinople.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman Illyricum', note: 'The Illyrian coast was governed from Rome; Dyrrachium faced Brundisium across the Adriatic.' },
        { to: 'greece', type: 'interaction', label: 'The Via Egnatia', note: 'The Roman highway ran from Dyrrachium east through Macedonia toward the Aegean.' }
      ],
      figures: [
        { name: 'Teuta', title: 'Illyrian queen (pre-Roman resistance)', years: 'r. c. 231–227 BCE' }
      ]
    },
    {
      startYear: 395,
      endYear: 1190,
      eraId: 'late-antique',
      name: 'Byzantine Illyria',
      modernEquivalent: false,
      government: 'Byzantine themes',
      capital: 'Dyrrachium (Durrës)',
      religion: ['Orthodox Christianity'],
      culture: ['Illyrian', 'Byzantine', 'Slavic'],
      summary:
        'After the empire split in 395, the Illyrian lands became an eastern Roman frontier, fought over by Slavs, Bulgarians and Normans. From the descendants of the Romanised Illyrians the Albanians (Arbanoi) emerge in the highland records of the 11th century.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Byzantine frontier', note: 'Durrës was a key Byzantine theme guarding the Adriatic approaches.' },
        { to: 'italy', type: 'war', label: 'Norman invasions', note: 'Robert Guiscard’s Normans stormed Dyrrachium in 1081 on their drive against Byzantium.' },
        { to: 'bulgaria', type: 'war', label: 'Bulgarian incursions', note: 'Samuel’s Bulgarian Empire seized much of the region before Basil II reconquered it.' }
      ],
      figures: [
        { name: 'Basil II', title: 'Byzantine emperor (reconquered Illyria)', years: 'r. 976–1025' }
      ]
    },
    {
      startYear: 1190,
      endYear: 1385,
      eraId: 'high-medieval',
      name: 'Medieval principalities',
      modernEquivalent: false,
      government: 'Principalities & feudal lordships',
      capital: 'Krujë / Berat',
      religion: ['Orthodox & Catholic Christianity'],
      culture: ['Albanian'],
      summary:
        'The Principality of Arbanon, founded around Krujë in 1190, was the first autonomous Albanian polity. As Byzantium waned, rival noble houses — the Thopia, Balsha and Muzaka — carved up the land between Serbia, the Angevins of Naples and Venice.',
      relations: [
        { to: 'serbia', type: 'war', label: 'Serbian expansion', note: 'Stefan Dušan’s empire overran much of Albania in the 14th century.' },
        { to: 'italy', type: 'interaction', label: 'Angevin Kingdom of Albania', note: 'Charles of Anjou proclaimed a Regnum Albaniae centred on Durrës in 1272.' },
        { to: 'greece', type: 'war', label: 'Byzantine retreat', note: 'Local lords broke free as Byzantine authority collapsed in the region.' }
      ],
      figures: [
        { name: 'Progon', title: 'Archon of Arbanon (founder)', years: 'r. c. 1190–1198' },
        { name: 'Karl Thopia', title: 'Prince of Albania', years: 'r. c. 1359–1388' }
      ]
    },
    {
      startYear: 1385,
      endYear: 1912,
      eraId: 'late-medieval',
      name: 'Ottoman Albania',
      modernEquivalent: false,
      government: 'Ottoman provinces (vilayets)',
      capital: '— (ruled from Constantinople)',
      religion: ['Islam (majority) & Christianity'],
      culture: ['Albanian'],
      summary:
        'After the Ottomans arrived in 1385, the warlord Gjergj Kastrioti — Skanderbeg — led a heroic 25-year resistance from Krujë (1443–68) that made him a European hero. His death opened the way to nearly four and a half centuries of Ottoman rule, during which much of the population converted to Islam.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Skanderbeg’s resistance', note: 'Skanderbeg held off repeated Ottoman armies from Krujë (1443–1468) before the land was subdued.' },
        { to: 'italy', type: 'ally', label: 'Venetian & Neapolitan support', note: 'Skanderbeg allied with Venice and Naples; after his death many Albanians (Arbëreshë) fled to Italy.' },
        { to: 'greece', type: 'interaction', label: 'Ali Pasha’s Ioannina', note: 'The Albanian Ali Pasha carved a near-independent fiefdom across Epirus until the sultan crushed him (1822).' }
      ],
      figures: [
        { name: 'Skanderbeg', title: 'Gjergj Kastrioti, national hero', years: '1405–1468' },
        { name: 'Ali Pasha of Ioannina', title: 'Albanian governor & warlord', years: '1740–1822' }
      ]
    },
    {
      startYear: 1912,
      endYear: 1939,
      eraId: 'world-wars',
      name: 'Independent Albania',
      government: 'Principality → Republic → Kingdom',
      capital: 'Tiranë',
      religion: ['Islam, Orthodox & Catholic Christianity'],
      culture: ['Albanian'],
      summary:
        'Independence was proclaimed at Vlorë in November 1912 as the Ottoman Balkans collapsed. After a chaotic principality and brief republic, the strongman Ahmet Zogu crowned himself King Zog I in 1928, ruling an unstable, increasingly Italian-dependent monarchy.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Independence (1912)', note: 'Ismail Qemali declared Albania independent of the Ottoman Empire at Vlorë.' },
        { to: 'italy', type: 'interaction', label: 'Italian patronage', note: 'Mussolini’s Italy bankrolled and steadily dominated King Zog’s economy and army.' },
        { to: 'serbia', type: 'war', label: 'Border wars', note: 'Conflict with Serbia and Montenegro over the new state’s frontiers and Kosovo’s Albanians.' }
      ],
      figures: [
        { name: 'Ismail Qemali', title: 'Founder of independent Albania', years: '1844–1919' },
        { name: 'King Zog I', title: 'King of the Albanians', years: 'r. 1928–1939' }
      ]
    },
    {
      startYear: 1939,
      endYear: 1944,
      eraId: 'world-wars',
      name: 'Italian & German occupation',
      modernEquivalent: false,
      government: 'Axis occupation (Italian protectorate, then German)',
      capital: 'Tiranë',
      religion: ['Islam, Orthodox & Catholic Christianity'],
      culture: ['Albanian'],
      summary:
        'Mussolini invaded and annexed Albania in April 1939, driving King Zog into exile and binding the country to the Italian crown. After Italy’s 1943 surrender Germany took over, and a communist-led partisan movement fought a fierce resistance that liberated the country in 1944.',
      relations: [
        { to: 'italy', type: 'war', label: 'Italian annexation (1939)', note: 'Mussolini occupied Albania and joined it to the Italian crown under King Victor Emmanuel III.' },
        { to: 'germany', type: 'war', label: 'German occupation (1943–44)', note: 'The Wehrmacht moved in after Italy’s armistice; partisans harried it until liberation.' },
        { to: 'greece', type: 'war', label: 'Greco-Italian War', note: 'Albania was the launchpad for Italy’s failed 1940 invasion of Greece.' }
      ],
      figures: [
        { name: 'Enver Hoxha', title: 'Communist partisan leader', years: '1908–1985' }
      ]
    },
    {
      startYear: 1944,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Communist Albania',
      modernEquivalent: false,
      government: 'Stalinist people’s republic',
      capital: 'Tiranë',
      religion: ['State atheism (religion banned 1967)'],
      culture: ['Albanian'],
      summary:
        'Enver Hoxha ruled a uniquely hard-line Stalinist state for over four decades, declaring the world’s first atheist country and dotting the land with hundreds of thousands of concrete bunkers. In paranoid isolation Albania broke successively with Yugoslavia, the Soviet Union and finally China.',
      relations: [
        { to: 'serbia', type: 'war', label: 'Break with Yugoslavia (1948)', note: 'Hoxha turned bitterly against Tito’s Yugoslavia, fearing absorption.' },
        { to: 'russia', type: 'war', label: 'Soviet split (1961)', note: 'Albania quit the Warsaw Pact, denouncing Khrushchev’s de-Stalinisation.' },
        { to: 'greece', type: 'interaction', label: 'Cold War frontier', note: 'A sealed, hostile border faced NATO’s Greece for decades.' }
      ],
      figures: [
        { name: 'Enver Hoxha', title: 'Communist dictator', years: 'r. 1944–1985' },
        { name: 'Ramiz Alia', title: 'Last communist leader', years: 'r. 1985–1992' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Albania',
      government: 'Parliamentary republic',
      capital: 'Tiranë',
      religion: ['Islam, Christianity & secular'],
      culture: ['Albanian'],
      summary:
        'The fall of communism opened a turbulent transition: the 1997 collapse of nationwide pyramid schemes plunged the country into anarchy and near civil war. Recovery brought NATO membership in 2009 and the status of an official EU candidate.',
      relations: [
        { to: 'italy', type: 'ally', label: 'NATO & migration', note: 'A close partner across the Adriatic and destination for mass 1990s emigration; both NATO members.' },
        { to: 'greece', type: 'ally', label: 'Neighbour & NATO ally', note: 'Deep economic ties and a large Albanian diaspora, despite old border disputes.' },
        { to: 'serbia', type: 'interaction', label: 'Kosovo question', note: 'Albania backed Kosovo’s ethnic-Albanians and its 2008 independence from Serbia.' }
      ],
      figures: [
        { name: 'Sali Berisha', title: 'First post-communist President', years: 'r. 1992–1997' },
        { name: 'Edi Rama', title: 'Prime Minister (EU accession drive)', years: 'r. 2013–present' }
      ]
    }
  ]
}

export default albania
