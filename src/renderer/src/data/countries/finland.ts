import type { Country } from '../countryTypes'

const finland: Country = {
  id: 'finland',
  name: 'Finland',
  mapNames: ['Finland'],
  color: '#2f8f8f',
  centroid: [24.9, 60.2],
  periods: [
    {
      startYear: 0,
      endYear: 1150,
      eraId: 'roman',
      name: 'Finnic Tribes',
      modernEquivalent: false,
      government: 'Stateless tribal societies',
      capital: '— (no central authority)',
      religion: ['Finnic paganism (shamanism, nature worship)'],
      culture: ['Finns (Suomi)', 'Tavastians (Häme)', 'Karelians', 'Sámi'],
      summary:
        'The forests and lakelands were home to pagan Finnic peoples — the Finns of the southwest, the Tavastians of the interior, and the Karelians of the east — who lived by hunting, fishing, and a lucrative fur trade, their lands increasingly contested between Catholic Sweden and Orthodox Novgorod.',
      relations: [
        { to: 'sweden', type: 'interaction', label: 'Baltic fur trade', note: 'Swedish traders and raiders crossed the Gulf of Bothnia long before any conquest.' },
        { to: 'russia', type: 'interaction', label: 'Novgorod’s eastern reach', note: 'The republic of Novgorod taxed and traded with the Karelians of the east.' }
      ],
      figures: [
        { name: 'Väinämöinen', title: 'Legendary bard-hero of Finnic myth', years: 'mythical' }
      ]
    },
    {
      startYear: 1150,
      endYear: 1809,
      eraId: 'high-medieval',
      name: 'Swedish Finland',
      modernEquivalent: false,
      government: 'Provinces of the Kingdom of Sweden',
      capital: 'Turku (Åbo)',
      religion: ['Roman Catholicism → Lutheranism (from 1527)'],
      culture: ['Finnish', 'Swedish'],
      summary:
        'Through the Northern Crusades Sweden drew Finland into its realm, making it the kingdom’s eastern half and a bulwark against Novgorod and Russia; the Reformation gave Finns a written language (Agricola’s Bible), but after centuries of border wars the entire province was lost to Russia in the Finnish War of 1808–09.',
      relations: [
        { to: 'sweden', type: 'ally', label: 'Eastern half of the realm', note: 'For over six centuries Finland was an integral part of the Kingdom of Sweden.' },
        { to: 'russia', type: 'war', label: 'Wars with Novgorod & Russia', note: 'A long frontier of conflict ending with Sweden’s defeat in the Finnish War (1808–09).' },
        { to: 'germany', type: 'interaction', label: 'Hanseatic & Lutheran ties', note: 'Hanseatic trade and the German Reformation shaped Finnish towns and the church.' }
      ],
      figures: [
        { name: 'Birger Jarl', title: 'Swedish regent (Second Crusade)', years: 'd. 1266' },
        { name: 'Mikael Agricola', title: 'Reformer & father of written Finnish', years: 'c. 1510–1557' }
      ]
    },
    {
      startYear: 1809,
      endYear: 1917,
      eraId: 'long-19th',
      name: 'Grand Duchy of Finland',
      modernEquivalent: false,
      government: 'Autonomous grand duchy under the Russian tsar',
      capital: 'Helsinki (from 1812)',
      religion: ['Lutheranism'],
      culture: ['Finnish', 'Swedish'],
      summary:
        'Ceded to Russia in 1809, Finland became an autonomous grand duchy with its own laws, diet, and currency under the tsar as grand duke; a national awakening flowered — Lönnrot compiled the Kalevala and Snellman championed the Finnish language — before harsh Russification at the century’s end stirred the drive for independence.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Autonomy under the tsar', note: 'The tsar ruled as grand duke, granting Finland wide self-government until late Russification.' },
        { to: 'sweden', type: 'interaction', label: 'Swedish legacy', note: 'Swedish law, language, and elites endured long after the political tie was cut.' },
        { to: 'germany', type: 'interaction', label: 'National Romantic currents', note: 'German Romantic nationalism inspired the Fennoman movement and its language struggle.' }
      ],
      figures: [
        { name: 'Elias Lönnrot', title: 'Compiler of the Kalevala', years: '1802–1884' },
        { name: 'J.V. Snellman', title: 'Philosopher & Fennoman statesman', years: '1806–1881' }
      ]
    },
    {
      startYear: 1917,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'Republic of Finland',
      government: 'Parliamentary republic',
      capital: 'Helsinki',
      religion: ['Lutheranism'],
      culture: ['Finnish', 'Swedish'],
      summary:
        'Finland declared independence amid the Russian Revolution in December 1917, endured a bitter civil war between Reds and Whites in 1918, and then defied the Soviet Union in the Winter War (1939–40) and the Continuation War (1941–44), losing Karelia but preserving its sovereignty.',
      relations: [
        { to: 'russia', type: 'war', label: 'Winter & Continuation Wars', note: 'Repelled the Soviet invasion of 1939–40 and fought on until the 1944 armistice, ceding Karelia.' },
        { to: 'germany', type: 'ally', label: 'Co-belligerent (1941–44)', note: 'Fought alongside Germany in the Continuation War before turning against it in the Lapland War.' },
        { to: 'sweden', type: 'interaction', label: 'Neutral neighbour & volunteers', note: 'Neutral Sweden sent volunteers and aid during the Winter War.' }
      ],
      figures: [
        { name: 'C.G.E. Mannerheim', title: 'Marshal & wartime commander', years: '1867–1951' },
        { name: 'Risto Ryti', title: 'President during the wars', years: 'r. 1940–1944' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Cold War Finland',
      government: 'Parliamentary republic (armed neutrality)',
      capital: 'Helsinki',
      religion: ['Lutheranism'],
      culture: ['Finnish', 'Swedish'],
      summary:
        'Walking a careful line between the blocs, Finland kept its democracy and market economy while accommodating Soviet sensitivities — the policy critics dubbed "Finlandization" — guided by the Paasikivi–Kekkonen line, and grew prosperous as a neutral broker that hosted the 1975 Helsinki Accords.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'YYA Treaty & neutrality', note: 'The 1948 Treaty of Friendship bound Finland to neutral coexistence with the USSR.' },
        { to: 'sweden', type: 'ally', label: 'Nordic cooperation', note: 'Joined the Nordic Council and shared a passport-free Nordic labour market.' },
        { to: 'germany', type: 'interaction', label: 'Trade across the blocs', note: 'Traded with both West and East Germany while remaining outside either alliance.' }
      ],
      figures: [
        { name: 'J.K. Paasikivi', title: 'President (architect of neutrality)', years: 'r. 1946–1956' },
        { name: 'Urho Kekkonen', title: 'Long-serving President', years: 'r. 1956–1982' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Finland',
      government: 'Parliamentary republic',
      capital: 'Helsinki',
      religion: ['Lutheranism / secular'],
      culture: ['Finnish', 'Swedish'],
      summary:
        'Freed from Cold War constraints, Finland joined the European Union in 1995 and adopted the euro, rode the Nokia boom to high-tech prosperity, and — abandoning generations of neutrality after Russia’s 2022 invasion of Ukraine — joined NATO in 2023.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & eurozone partner', note: 'Joined the EU in 1995 and adopted the euro, anchoring itself in the European core.' },
        { to: 'russia', type: 'interaction', label: 'From partner to threat', note: 'Post-Soviet trade gave way to a sealed border and NATO accession after the 2022 invasion of Ukraine.' },
        { to: 'sweden', type: 'ally', label: 'Joint road to NATO', note: 'Finland and Sweden applied to NATO together in 2022; Finland acceded in 2023.' }
      ],
      figures: [
        { name: 'Tarja Halonen', title: 'First female President', years: 'r. 2000–2012' },
        { name: 'Sanna Marin', title: 'Prime Minister (NATO bid)', years: 'r. 2019–2023' }
      ]
    }
  ]
}

export default finland
