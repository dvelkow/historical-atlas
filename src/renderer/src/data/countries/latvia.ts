import type { Country } from '../countryTypes'

const latvia: Country = {
  id: 'latvia',
  name: 'Latvia',
  mapNames: ['Latvia'],
  color: '#9c3a4a',
  centroid: [24.1, 56.9],
  periods: [
    {
      startYear: 0,
      endYear: 1201,
      eraId: 'roman',
      name: 'Baltic Tribes',
      modernEquivalent: false,
      government: 'Tribal chiefdoms & hillfort districts',
      capital: '— (tribal hillforts such as Tērvete and Daugmale)',
      religion: ['Baltic & Finnic paganism'],
      culture: ['Latgalian', 'Couronian', 'Semigallian', 'Selonian', 'Livonian'],
      summary:
        'For a millennium the eastern Baltic shore was home to the pagan Latgalians, Couronians, Semigallians and Selonians, alongside the Finnic Livs; amber, furs and the great river road of the Daugava drew Roman, Viking and Rus’ traders to these tribal lands.',
      relations: [
        { to: 'sweden', type: 'interaction', label: 'Viking amber & raids', note: 'Norse traders and raiders worked the Baltic coast and the Daugava trade route.' },
        { to: 'russia', type: 'interaction', label: 'The Daugava river road', note: 'The river linked the Baltic to the Rus’ principalities of Polotsk, which exacted tribute from border tribes.' },
        { to: 'lithuania', type: 'interaction', label: 'Kindred Balts', note: 'The Latvian tribes shared language and pagan religion with the neighbouring Lithuanian Balts.' }
      ],
      figures: [
        { name: 'Visvaldis', title: 'Prince of Jersika (Latgalian ruler)', years: 'fl. early 1200s' }
      ]
    },
    {
      startYear: 1201,
      endYear: 1561,
      eraId: 'high-medieval',
      name: 'Terra Mariana & Livonian Order',
      modernEquivalent: false,
      government: 'Crusader confederation of bishoprics & military order',
      capital: 'Riga',
      religion: ['Roman Catholicism (forced Christianisation)'],
      culture: ['Baltic German', 'Latgalian', 'Couronian', 'Livonian'],
      summary:
        'Bishop Albert founded Riga in 1201 and the Sword-Brothers (later the Livonian Order) subjugated the Baltic tribes in the Livonian Crusade, binding the land into "Terra Mariana" under German lords; Riga grew rich as a Hanseatic port while a Baltic-German elite ruled over the native peasantry.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'German crusaders & Hansa', note: 'Riga and the order were ruled by a Baltic-German elite and tied into the Hanseatic trade network.' },
        { to: 'russia', type: 'war', label: 'Wars with the Rus’', note: 'The order clashed with Novgorod and Pskov along the eastern frontier.' },
        { to: 'lithuania', type: 'war', label: 'Crusades against the Balts', note: 'The Livonian Order fought the still-pagan Lithuanians, who shattered it at Saule (1236).' }
      ],
      figures: [
        { name: 'Albert of Riga', title: 'Bishop & founder of Riga', years: 'r. 1199–1229' },
        { name: 'Walter von Plettenberg', title: 'Master of the Livonian Order', years: 'r. 1494–1535' }
      ]
    },
    {
      startYear: 1561,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Duchy of Courland & Swedish/Polish Livonia',
      modernEquivalent: false,
      government: 'Vassal duchy & contested provinces',
      capital: 'Jelgava (Mitau) / Riga',
      religion: ['Lutheranism', 'Roman Catholicism'],
      culture: ['Baltic German', 'Latvian'],
      summary:
        'As the Livonian Order dissolved, the land split: the Duchy of Courland became a fief of Poland-Lithuania — even briefly colonising Tobago and Gambia under Duke Jacob — while Vidzeme (Livonia) passed from Poland to Sweden and finally to Russia after the Great Northern War.',
      relations: [
        { to: 'poland', type: 'interaction', label: 'Courland a Polish fief', note: 'The Duchy of Courland was a vassal of the Polish-Lithuanian Commonwealth.' },
        { to: 'sweden', type: 'interaction', label: 'Swedish Livonia', note: 'Vidzeme and Riga came under the Swedish crown after 1621, a relatively orderly "good Swedish times".' },
        { to: 'russia', type: 'war', label: 'Great Northern War', note: 'Peter the Great seized Livonia from Sweden, taking Riga in 1710.' }
      ],
      figures: [
        { name: 'Jacob Kettler', title: 'Duke of Courland (colonial era)', years: 'r. 1642–1682' },
        { name: 'Ernst Johann von Biron', title: 'Duke of Courland', years: 'r. 1737–1769' }
      ]
    },
    {
      startYear: 1795,
      endYear: 1918,
      eraId: 'long-19th',
      name: 'Russian Baltic Provinces',
      modernEquivalent: false,
      government: 'Imperial Russian governorates',
      capital: 'Riga (provincial seat)',
      religion: ['Lutheranism', 'Russian Orthodoxy'],
      culture: ['Latvian', 'Baltic German', 'Russian'],
      summary:
        'With the partitions of Poland, Courland joined Livonia inside the Russian Empire as the Baltic governorates, still dominated by Baltic-German landlords; the 19th-century National Awakening of the Young Latvians forged a modern Latvian identity, language and ambition for self-rule.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Imperial governorates', note: 'Courland and Livonia were ruled from St Petersburg, later subject to Russification.' },
        { to: 'germany', type: 'interaction', label: 'Baltic-German landlords', note: 'A Baltic-German nobility held the land and dominated Riga’s civic life.' },
        { to: 'estonia', type: 'interaction', label: 'Shared Baltic awakening', note: 'Latvians and Estonians underwent parallel national revivals within the same imperial borderland.' }
      ],
      figures: [
        { name: 'Krišjānis Barons', title: 'Folklorist (father of the dainas)', years: '1835–1923' },
        { name: 'Krišjānis Valdemārs', title: 'Leader of the Young Latvians', years: '1825–1891' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1940,
      eraId: 'world-wars',
      name: 'First Republic of Latvia',
      government: 'Parliamentary republic → authoritarian regime',
      capital: 'Riga',
      religion: ['Lutheranism', 'Roman Catholicism', 'Russian Orthodoxy'],
      culture: ['Latvian'],
      summary:
        'Latvia declared independence on 18 November 1918 and won it in the bitter War of Independence (1918–20) against Germans and Bolsheviks; a democratic interwar republic followed until Kārlis Ulmanis’ 1934 coup ushered in authoritarian rule.',
      relations: [
        { to: 'russia', type: 'war', label: 'War of Independence', note: 'Latvian forces, aided by allies, defeated Soviet Russia and secured recognition in the 1920 peace treaty.' },
        { to: 'germany', type: 'war', label: 'Defeating the Baltische Landeswehr', note: 'Latvians routed German and West Russian forces at Cēsis (1919) to keep their new state.' },
        { to: 'estonia', type: 'ally', label: 'Baltic neighbours', note: 'The young Baltic states cooperated militarily and diplomatically in the interwar years.' }
      ],
      figures: [
        { name: 'Kārlis Ulmanis', title: 'Founding PM & authoritarian leader', years: '1877–1942' },
        { name: 'Jānis Čakste', title: 'First President of Latvia', years: 'r. 1922–1927' }
      ]
    },
    {
      startYear: 1940,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Soviet Latvia',
      modernEquivalent: false,
      government: 'Soviet socialist republic',
      capital: 'Riga',
      religion: ['State atheism (Lutheran/Catholic/Orthodox suppressed)'],
      culture: ['Latvian', 'Russian'],
      summary:
        'Annexed by the USSR in 1940 under the Molotov–Ribbentrop Pact, occupied by Nazi Germany (1941–44) and then re-annexed, Latvia endured mass deportations and Russification as the Latvian SSR; the Singing Revolution and the Baltic Way human chain of 1989 led to restored independence in 1991.',
      relations: [
        { to: 'russia', type: 'war', label: 'Soviet annexation & deportations', note: 'The USSR annexed Latvia in 1940 and deported tens of thousands to Siberia in 1941 and 1949.' },
        { to: 'germany', type: 'war', label: 'Nazi occupation (1941–44)', note: 'Germany overran Latvia during Operation Barbarossa, devastating its Jewish community in the Holocaust.' },
        { to: 'estonia', type: 'ally', label: 'The Baltic Way', note: 'On 23 August 1989 some two million people formed a human chain across Estonia, Latvia and Lithuania for freedom.' }
      ],
      figures: [
        { name: 'Anatolijs Gorbunovs', title: 'Chair of the Supreme Council (restorer)', years: 'r. 1988–1993' },
        { name: 'Vilis Lācis', title: 'Soviet-era head of government', years: 'r. 1940–1959' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Latvia',
      government: 'Parliamentary republic',
      capital: 'Riga',
      religion: ['Lutheran / Catholic / Orthodox / secular'],
      culture: ['Latvian', 'Russian'],
      summary:
        'Independence restored in 1991, Latvia reoriented westward — joining the European Union and NATO in 2004 and adopting the euro in 2014 — while managing relations with Russia and the legacy of its large Russian-speaking minority.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Latvia joined both NATO and the European Union in 2004 and the eurozone in 2014.' },
        { to: 'estonia', type: 'ally', label: 'Baltic cooperation', note: 'Close partners in Baltic and Nordic-Baltic security and economic forums.' },
        { to: 'russia', type: 'interaction', label: 'Wary eastern neighbour', note: 'Tense ties driven by the Russian-speaking minority and post-2014 security fears.' }
      ],
      figures: [
        { name: 'Vaira Vīķe-Freiberga', title: 'President (led EU/NATO accession)', years: 'r. 1999–2007' },
        { name: 'Guntis Ulmanis', title: 'First post-Soviet President', years: 'r. 1993–1999' }
      ]
    }
  ]
}

export default latvia
