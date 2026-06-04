import type { Country } from '../countryTypes'

const croatia: Country = {
  id: 'croatia',
  name: 'Croatia',
  mapNames: ['Croatia'],
  color: '#d2553e',
  centroid: [15.97, 45.8],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Dalmatia & Pannonia',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Salona',
      religion: ['Roman & Illyrian paganism → Christianity'],
      culture: ['Illyrian', 'Roman'],
      summary:
        'The Adriatic coast and its hinterland became the wealthy Roman provinces of Dalmatia and Pannonia, studded with cities like Salona; the emperor Diocletian retired to his vast fortified palace at Split, around which the city later grew.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman provinces', note: 'Dalmatia and Pannonia were prized provinces facing Italy across the Adriatic.' },
        { to: 'hungary', type: 'interaction', label: 'The Pannonian frontier', note: 'Pannonia formed part of the Danubian limes guarding the empire’s northern edge.' }
      ],
      figures: [
        { name: 'Diocletian', title: 'Roman Emperor (built Split palace)', years: 'r. 284–305' }
      ]
    },
    {
      startYear: 476,
      endYear: 925,
      eraId: 'early-medieval',
      name: 'Croat Migration & Duchy',
      modernEquivalent: false,
      government: 'Tribal duchy (under Frankish, then Byzantine influence)',
      capital: 'Nin / Klis',
      religion: ['Slavic paganism → Latin Christianity'],
      culture: ['Croat', 'Slavic'],
      summary:
        'White Croats settled the ruined Roman lands in the 7th century and gradually accepted Christianity; an early duchy took shape under dukes like Trpimir and Branimir, whose recognition by Pope John VIII (879) marked Croatia’s entry into Latin Christendom while it manoeuvred between Frankish and Byzantine overlords.',
      relations: [
        { to: 'germany', type: 'war', label: 'Frankish overlordship', note: 'Duke Ljudevit Posavski revolted against Frankish rule (819–822) before the duchy won autonomy.' },
        { to: 'italy', type: 'interaction', label: 'Papal recognition', note: 'Pope John VIII recognised Duke Branimir’s independent Croatia in 879.' },
        { to: 'greece', type: 'interaction', label: 'Byzantine influence', note: 'The Dalmatian coastal towns and the early dukes shifted between Byzantine and Frankish spheres.' }
      ],
      figures: [
        { name: 'Trpimir I', title: 'Duke of Croatia (founder of the Trpimirović dynasty)', years: 'r. c. 845–864' },
        { name: 'Branimir', title: 'Duke of Croatia (won papal recognition)', years: 'r. 879–892' }
      ]
    },
    {
      startYear: 925,
      endYear: 1102,
      eraId: 'high-medieval',
      name: 'Kingdom of Croatia',
      government: 'Medieval kingdom',
      capital: 'Biograd / Nin / Knin',
      religion: ['Catholic Christianity'],
      culture: ['Croat'],
      summary:
        'Tomislav was crowned the first king of Croatia around 925, forging a medieval Adriatic kingdom that reached its height under Petar Krešimir IV and Demetrius Zvonimir; the male Trpimirović line died out in 1091, opening the way to union with Hungary.',
      relations: [
        { to: 'hungary', type: 'war', label: 'Magyar rivalry & succession', note: 'Tomislav checked Magyar raids; a century later the Árpáds pressed their dynastic claim to the throne.' },
        { to: 'italy', type: 'interaction', label: 'Venice & the papacy', note: 'King Zvonimir was crowned with papal blessing (1075) as Venice contested the Adriatic towns.' },
        { to: 'greece', type: 'interaction', label: 'Byzantine Dalmatia', note: 'Petar Krešimir IV extended royal authority over the Byzantine Dalmatian cities.' }
      ],
      figures: [
        { name: 'Tomislav', title: 'First King of Croatia', years: 'r. c. 910–928' },
        { name: 'Petar Krešimir IV', title: 'King (height of the kingdom)', years: 'r. 1058–1074' },
        { name: 'Demetrius Zvonimir', title: 'King of Croatia', years: 'r. 1075–1089' }
      ]
    },
    {
      startYear: 1102,
      endYear: 1527,
      eraId: 'late-medieval',
      name: 'Croatia in Union with Hungary',
      modernEquivalent: false,
      government: 'Kingdom in personal union under the Hungarian crown',
      capital: 'Zagreb / Knin',
      religion: ['Catholic Christianity'],
      culture: ['Croat'],
      summary:
        'By the Pacta Conventa (1102) Croatian nobles accepted the Hungarian king Coloman, beginning a personal union that preserved a distinct Croatian realm under its own ban; over the following centuries Croatia bore the brunt of the advancing Ottomans, a struggle that climaxed in the disaster at Krbava Field (1493).',
      relations: [
        { to: 'hungary', type: 'ally', label: 'Pacta Conventa (1102)', note: 'A personal union under the Hungarian crown, keeping Croatian self-rule under a ban.' },
        { to: 'turkey', type: 'war', label: 'Ottoman onslaught', note: 'The Croatian nobility was crushed at the Battle of Krbava Field in 1493.' },
        { to: 'italy', type: 'war', label: 'Venetian Dalmatia', note: 'Venice seized much of the Dalmatian coast through the later Middle Ages.' }
      ],
      figures: [
        { name: 'Coloman', title: 'King of Hungary & Croatia', years: 'r. 1095–1116' },
        { name: 'Nikola IV Zrinski', title: 'Ban & magnate of the Ottoman wars', years: 'c. 1508–1566' }
      ]
    },
    {
      startYear: 1527,
      endYear: 1918,
      eraId: 'early-modern',
      name: 'Habsburg Croatia',
      modernEquivalent: false,
      government: 'Kingdom under the Habsburgs (Military Frontier)',
      capital: 'Zagreb',
      religion: ['Catholic Christianity'],
      culture: ['Croat'],
      summary:
        'After the Ottoman victory at Mohács the Croatian estates elected Ferdinand of Habsburg king (1527), tying Croatia’s fate to Vienna; the Military Frontier (Vojna Krajina) became a permanent armed shield against the Ottomans, and in the 19th century the Illyrian movement kindled a Croatian national revival.',
      relations: [
        { to: 'austria', type: 'ally', label: 'Habsburg election (1527)', note: 'The Croatian Sabor chose Ferdinand I, binding Croatia to the Habsburg monarchy for four centuries.' },
        { to: 'turkey', type: 'war', label: 'The Military Frontier', note: 'The Vojna Krajina was settled with soldier-farmers to hold the line against the Ottomans.' },
        { to: 'hungary', type: 'interaction', label: 'Lands of St Stephen’s crown', note: 'Croatia remained linked to Hungary within the Habsburg realm, its autonomy a constant point of friction.' }
      ],
      figures: [
        { name: 'Nikola Šubić Zrinski', title: 'Ban (hero of the siege of Szigetvár)', years: 'c. 1508–1566' },
        { name: 'Josip Jelačić', title: 'Ban of Croatia (1848 revolution)', years: 'r. 1848–1859' },
        { name: 'Ljudevit Gaj', title: 'Leader of the Illyrian movement', years: '1809–1872' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1941,
      eraId: 'world-wars',
      name: 'Kingdom of Yugoslavia',
      modernEquivalent: false,
      government: 'Monarchy (Kingdom of Serbs, Croats and Slovenes)',
      capital: 'Belgrade (Zagreb regional)',
      religion: ['Catholic Christianity'],
      culture: ['Croat'],
      summary:
        'In 1918 Croatia joined the new Kingdom of Serbs, Croats and Slovenes, but Serb-dominated centralism bred deep Croatian discontent; the assassination of Stjepan Radić (1928) and the autonomous Banovina of Croatia (1939) marked the failed search for a fair settlement.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Serb-dominated kingdom', note: 'Croats chafed under the centralism of the Belgrade-led Yugoslav state.' },
        { to: 'italy', type: 'war', label: 'Adriatic disputes', note: 'Italy annexed Rijeka (Fiume) and contested the eastern Adriatic littoral.' },
        { to: 'hungary', type: 'interaction', label: 'Postwar borders', note: 'The old union dissolved as new frontiers were drawn across former Habsburg lands.' }
      ],
      figures: [
        { name: 'Stjepan Radić', title: 'Croatian Peasant Party leader', years: '1871–1928' },
        { name: 'Vladko Maček', title: 'Leader who won the 1939 Banovina', years: '1879–1964' }
      ]
    },
    {
      startYear: 1941,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'Independent State of Croatia',
      modernEquivalent: false,
      government: 'Axis puppet state (Ustaše regime)',
      capital: 'Zagreb',
      religion: ['Catholic Christianity'],
      culture: ['Croat'],
      summary:
        'After the Axis dismembered Yugoslavia in 1941, the fascist Ustaše proclaimed the Independent State of Croatia, a brutal puppet of Germany and Italy whose genocidal camps left a lasting scar; Tito’s Partisans waged a fierce resistance that liberated the country by 1945.',
      relations: [
        { to: 'germany', type: 'ally', label: 'Axis puppet state', note: 'The Ustaše regime was installed and propped up by Nazi Germany.' },
        { to: 'italy', type: 'ally', label: 'Italian patronage', note: 'Mussolini’s Italy co-sponsored the new state and took swathes of the Dalmatian coast.' },
        { to: 'serbia', type: 'war', label: 'Partisan & ethnic war', note: 'A savage war pitted the Ustaše against Serbs, Partisans and Chetniks.' }
      ],
      figures: [
        { name: 'Ante Pavelić', title: 'Poglavnik of the Ustaše state', years: 'r. 1941–1945' },
        { name: 'Josip Broz Tito', title: 'Partisan commander', years: '1892–1980' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Socialist Republic of Croatia',
      modernEquivalent: false,
      government: 'Socialist republic within Yugoslavia',
      capital: 'Zagreb',
      religion: ['State atheism / Catholic'],
      culture: ['Croat'],
      summary:
        'Croatia became one of the six federal republics of Tito’s socialist Yugoslavia; the Croatian Spring of 1971 demanded greater autonomy and reform before being suppressed, yet it seeded the national movement that would carry Croatia to independence.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Yugoslav federation', note: 'A constituent republic alongside Serbia within Tito’s federal Yugoslavia.' },
        { to: 'russia', type: 'interaction', label: 'Tito–Stalin split', note: 'Yugoslav Croatia stood outside the Soviet bloc after Tito broke with Moscow in 1948.' },
        { to: 'italy', type: 'interaction', label: 'Trieste & Istria', note: 'The postwar settlement assigned Istria to Yugoslavia, ending centuries of Italian claims.' }
      ],
      figures: [
        { name: 'Vladimir Bakarić', title: 'Croatian communist leader', years: '1912–1983' },
        { name: 'Savka Dabčević-Kučar', title: 'Leader of the 1971 Croatian Spring', years: '1923–2009' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Croatia',
      government: 'Parliamentary republic',
      capital: 'Zagreb',
      religion: ['Catholic / secular'],
      culture: ['Croat'],
      summary:
        'Croatia declared independence in 1991 and won the Homeland War (1991–95) against rebel Serbs and the Yugoslav army; it joined NATO and, in 2013, the European Union, adopting the euro and entering the Schengen zone in 2023.',
      relations: [
        { to: 'serbia', type: 'war', label: 'Homeland War (1991–95)', note: 'Croatia secured independence against the rebel Krajina Serbs and the Yugoslav army.' },
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'NATO member (2009) and European Union member (2013); euro and Schengen from 2023.' },
        { to: 'hungary', type: 'ally', label: 'EU neighbour', note: 'Close ties with its former union partner, now a fellow EU member.' }
      ],
      figures: [
        { name: 'Franjo Tuđman', title: 'First President of independent Croatia', years: 'r. 1990–1999' },
        { name: 'Kolinda Grabar-Kitarović', title: 'President of Croatia', years: 'r. 2015–2020' }
      ]
    }
  ]
}

export default croatia
