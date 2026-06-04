import type { Country } from '../countryTypes'

const slovenia: Country = {
  id: 'slovenia',
  name: 'Slovenia',
  mapNames: ['Slovenia'],
  color: '#3fae72',
  centroid: [14.5, 46.05],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Noricum & Pannonia',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Emona (Ljubljana)',
      religion: ['Roman & Celtic paganism → Christianity'],
      culture: ['Roman', 'Celtic', 'Illyrian'],
      summary:
        'The Eastern Alps and the upper Sava valley formed the Roman provinces of Noricum and Pannonia, where the colony of Emona (modern Ljubljana) and the Amber and Alpine trade routes linked Italy to the Danube frontier.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman provinces', note: 'Noricum and Pannonia guarded the Alpine passes leading down into Roman Italy.' },
        { to: 'austria', type: 'interaction', label: 'Province of Noricum', note: 'Shared the Norican mountain kingdom-turned-province across the Eastern Alps.' },
        { to: 'hungary', type: 'interaction', label: 'Pannonian frontier', note: 'The Sava lands edged the great Roman province of Pannonia on the Danube.' }
      ],
      figures: [{ name: 'Constantius II', title: 'Roman emperor (fought at Emona/Mursa)', years: 'r. 337–361' }]
    },
    {
      startYear: 476,
      endYear: 745,
      eraId: 'early-medieval',
      name: 'Slavic settlement & Carantania',
      modernEquivalent: false,
      government: 'Slavic principality',
      capital: 'Karnburg (Krnski grad)',
      religion: ['Slavic paganism'],
      culture: ['Alpine Slav'],
      summary:
        'As Rome fell, Alpine Slavs settled the valleys and built Carantania, the first Slavic principality in the Eastern Alps; for a time it sheltered under the tribal realm of Samo against Avar and Frankish pressure.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Carantania', note: 'The Slavic principality of Carantania straddled what became Carinthia and Styria.' },
        { to: 'czechia', type: 'ally', label: 'The realm of Samo', note: 'Carantania allied with Samo’s wider Slavic realm against the Avars and Franks.' },
        { to: 'germany', type: 'war', label: 'Frankish & Avar wars', note: 'Duke Valuk’s Slavs fought off Avar and early Frankish raids.' }
      ],
      figures: [
        { name: 'Samo', title: 'Founder of the first Slavic realm', years: 'r. c. 623–658' },
        { name: 'Valuk', title: 'Duke of the Carantanian Slavs', years: 'fl. c. 630' }
      ]
    },
    {
      startYear: 745,
      endYear: 1335,
      eraId: 'early-medieval',
      name: 'Frankish & Holy Roman marches',
      modernEquivalent: false,
      government: 'Frankish duchy / Imperial marches',
      capital: 'Karnburg / Krainburg (Kranj)',
      religion: ['Roman Catholic Christianity'],
      culture: ['Slovene', 'Bavarian German'],
      summary:
        'Carantania placed itself under Frankish protection and was absorbed into the Carolingian and Holy Roman world; German nobility and clergy colonized the land, and the Freising Manuscripts (c. 1000) preserved the oldest written Slovene.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Holy Roman marches', note: 'Carantania became a march of the Frankish realm and then the Holy Roman Empire.' },
        { to: 'austria', type: 'interaction', label: 'German colonization', note: 'Bavarian and Frankish settlers reshaped Carinthia, Carniola and Styria.' },
        { to: 'hungary', type: 'war', label: 'Magyar raids', note: 'Tenth-century Magyar incursions swept through the Slovene marches before the Hungarians settled the plains.' }
      ],
      figures: [
        { name: 'Borut', title: 'Duke of Carantania (sought Frankish aid)', years: 'r. c. 740–750' },
        { name: 'Abbot Abraham of Freising', title: 'Associated with the Freising Manuscripts', years: 'd. 994' }
      ]
    },
    {
      startYear: 1335,
      endYear: 1918,
      eraId: 'late-medieval',
      name: 'Habsburg lands (Carniola)',
      modernEquivalent: false,
      government: 'Habsburg crown lands',
      capital: 'Laibach (Ljubljana)',
      religion: ['Roman Catholic (Protestant interlude)'],
      culture: ['Slovene', 'Austrian German'],
      summary:
        'The Duchy of Carniola and the neighbouring Slovene lands passed to the Habsburgs in 1335 and stayed under them for nearly six centuries; the Reformation gave Slovene its first printed books through Primož Trubar, and 19th-century nationalism awakened a literary culture.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg crown lands', note: 'Carniola, Carinthia and Styria were ruled from Vienna for almost 600 years.' },
        { to: 'turkey', type: 'war', label: 'Ottoman raids', note: 'The Slovene lands were a frontier battered by Ottoman incursions into the 16th and 17th centuries.' },
        { to: 'italy', type: 'interaction', label: 'Adriatic & Napoleonic frontier', note: 'Briefly part of Napoleon’s Illyrian Provinces (1809–13) with Trieste as their capital.' }
      ],
      figures: [
        { name: 'Primož Trubar', title: 'Author of the first Slovene books', years: '1508–1586' },
        { name: 'Jurij Vega', title: 'Mathematician & artillery officer', years: '1754–1802' },
        { name: 'France Prešeren', title: 'National poet', years: '1800–1849' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1941,
      eraId: 'world-wars',
      name: 'Yugoslavia',
      modernEquivalent: false,
      government: 'Constitutional monarchy (Yugoslav kingdom)',
      capital: 'Ljubljana (regional) / Belgrade',
      religion: ['Roman Catholic'],
      culture: ['Slovene'],
      summary:
        'With the collapse of Austria-Hungary, the Slovenes joined the Kingdom of Serbs, Croats and Slovenes — renamed Yugoslavia in 1929 — gaining a Slavic state but ceding the western littoral to Italy.',
      relations: [
        { to: 'serbia', type: 'ally', label: 'Kingdom of Yugoslavia', note: 'United with Serbs and Croats in the Serb-led Yugoslav kingdom.' },
        { to: 'croatia', type: 'ally', label: 'South Slav union', note: 'Fellow founding nation of the common South Slav state.' },
        { to: 'italy', type: 'war', label: 'Lost the littoral', note: 'The Treaty of Rapallo (1920) handed the Slovene coast and Istria to Italy.' }
      ],
      figures: [
        { name: 'Rudolf Maister', title: 'General who secured the northern border', years: '1874–1934' },
        { name: 'Anton Korošec', title: 'Slovene statesman & Yugoslav premier', years: '1872–1940' }
      ]
    },
    {
      startYear: 1941,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'WWII partition & occupation',
      modernEquivalent: false,
      government: 'Axis military occupation',
      capital: 'Ljubljana (Italian/German zone)',
      religion: ['Roman Catholic'],
      culture: ['Slovene'],
      summary:
        'In 1941 the Axis carved Slovenia among Nazi Germany, Fascist Italy and Hungary, intending to erase the nation; a fierce Partisan resistance under the communist-led Liberation Front fought a brutal occupation and civil war.',
      relations: [
        { to: 'germany', type: 'war', label: 'Nazi annexation', note: 'Germany seized Lower Styria and Upper Carniola for outright Germanization.' },
        { to: 'italy', type: 'war', label: 'Province of Ljubljana', note: 'Fascist Italy annexed the south, including Ljubljana, until its 1943 collapse.' },
        { to: 'hungary', type: 'war', label: 'Annexed Prekmurje', note: 'Hungary occupied the Prekmurje region in the northeast.' }
      ],
      figures: [
        { name: 'Boris Kidrič', title: 'Leader of the Liberation Front', years: '1912–1953' },
        { name: 'Franc Rozman-Stane', title: 'Partisan military commander', years: '1911–1944' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Socialist Republic of Slovenia',
      modernEquivalent: false,
      government: 'Socialist republic (within Yugoslavia)',
      capital: 'Ljubljana',
      religion: ['State atheism / Roman Catholic'],
      culture: ['Slovene'],
      summary:
        'As one of the six republics of Tito’s Yugoslavia, Slovenia became its most industrialised and prosperous member, enjoying high living standards and growing autonomy before pressing for independence in the late 1980s.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Yugoslav federation', note: 'A republic within Belgrade-centred socialist Yugoslavia.' },
        { to: 'croatia', type: 'ally', label: 'Northern Yugoslav republics', note: 'The two wealthiest republics, often aligned against centralism.' },
        { to: 'austria', type: 'interaction', label: 'Window to the West', note: 'An open border with Austria gave non-aligned Yugoslavia a link to Western markets.' }
      ],
      figures: [
        { name: 'Edvard Kardelj', title: 'Slovene chief ideologue of Yugoslavia', years: '1910–1979' },
        { name: 'Milan Kučan', title: 'Last Communist leader & reformer', years: '1986–1990' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Slovenia',
      government: 'Parliamentary republic',
      capital: 'Ljubljana',
      religion: ['Roman Catholic / secular'],
      culture: ['Slovene'],
      summary:
        'Slovenia declared independence in 1991 and won it in the brief Ten-Day War; the prosperous Alpine state joined the EU and NATO in 2004 and adopted the euro in 2007, becoming a stable Central European democracy.',
      relations: [
        { to: 'serbia', type: 'war', label: 'Ten-Day War (1991)', note: 'A ten-day conflict with the Yugoslav People’s Army secured independence.' },
        { to: 'croatia', type: 'ally', label: 'EU neighbours', note: 'Independence partners and fellow EU members, despite a lingering Bay of Piran dispute.' },
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Joined NATO and the European Union (2004) and the eurozone (2007).' }
      ],
      figures: [
        { name: 'Milan Kučan', title: 'First President of independent Slovenia', years: 'r. 1991–2002' },
        { name: 'Janez Drnovšek', title: 'Long-serving Prime Minister & President', years: '1992–2008' }
      ]
    }
  ]
}

export default slovenia
