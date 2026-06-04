import type { Country } from '../countryTypes'

const lithuania: Country = {
  id: 'lithuania',
  name: 'Lithuania',
  mapNames: ['Lithuania'],
  color: '#8a9c3a',
  centroid: [25.3, 54.7],
  periods: [
    {
      startYear: 0,
      endYear: 1236,
      eraId: 'roman',
      name: 'Baltic Tribes',
      modernEquivalent: false,
      government: 'Tribal clans & chiefdoms',
      capital: '— (no fixed centre)',
      religion: ['Baltic paganism'],
      culture: ['Baltic', 'Aukštaitian', 'Samogitian'],
      summary:
        'Pagan Baltic tribes — Aukštaitians, Samogitians and their kin — hunted the deep forests and traded the prized Baltic amber south along the rivers, clinging to their old gods as the last unconverted peoples of Europe.',
      relations: [
        { to: 'poland', type: 'interaction', label: 'Amber & forest frontier', note: 'River trade routes linked the Baltic tribes to the Slavic lands to the south.' },
        { to: 'germany', type: 'war', label: 'Saxon & crusader raids', note: 'German and Scandinavian raiders pressed against the pagan Baltic coast.' },
        { to: 'russia', type: 'interaction', label: 'Rus’ neighbours', note: 'The Balts bordered and traded with the emerging principalities of the Rus’.' }
      ],
      figures: [
        { name: 'Mindaugas', title: 'Uniting Baltic duke (pre-coronation)', years: 'fl. 1230s' }
      ]
    },
    {
      startYear: 1236,
      endYear: 1569,
      eraId: 'high-medieval',
      name: 'Grand Duchy of Lithuania',
      government: 'Grand duchy (monarchy)',
      capital: 'Vilnius (from c. 1323)',
      religion: ['Baltic paganism → Catholicism (from 1387)'],
      culture: ['Lithuanian', 'Ruthenian'],
      summary:
        'Mindaugas was crowned king in 1253, and under Gediminas, Algirdas and Vytautas the Great the realm swelled into the largest state in Europe, reaching the shores of the Black Sea. The Krewo union with Poland (1386) brought Christianity, and the joint victory over the Teutonic Knights at Grunwald (1410) sealed their rise.',
      relations: [
        { to: 'poland', type: 'ally', label: 'Union of Krewo (1386)', note: 'Jogaila married Queen Jadwiga and accepted Catholicism, binding Lithuania to Poland.' },
        { to: 'germany', type: 'war', label: 'Battle of Grunwald (1410)', note: 'Vytautas and Jogaila crushed the Teutonic Knights, breaking their power in the Baltic.' },
        { to: 'russia', type: 'war', label: 'Expansion over the Rus’ lands', note: 'Lithuania absorbed vast Ruthenian territories and clashed with rising Muscovy.' }
      ],
      figures: [
        { name: 'Mindaugas', title: 'First crowned King of Lithuania', years: 'r. 1236–1263' },
        { name: 'Gediminas', title: 'Grand Duke (founder of Vilnius)', years: 'r. 1316–1341' },
        { name: 'Vytautas the Great', title: 'Grand Duke (greatest extent)', years: 'r. 1392–1430' }
      ]
    },
    {
      startYear: 1569,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Polish–Lithuanian Commonwealth',
      modernEquivalent: false,
      government: 'Elective monarchy (noble republic)',
      capital: 'Vilnius (Grand Duchy) / Kraków & Warsaw (joint)',
      religion: ['Catholicism', 'Orthodoxy', 'Judaism'],
      culture: ['Lithuanian', 'Polish', 'Ruthenian'],
      summary:
        'The Union of Lublin (1569) merged the Grand Duchy with Poland into one of Europe’s largest states, a noble republic governed by an elected king and a fractious Sejm — until the three Partitions wiped it from the map by 1795.',
      relations: [
        { to: 'poland', type: 'ally', label: 'Union of Lublin (1569)', note: 'Lithuania and Poland fused into a single Commonwealth with a shared monarch and parliament.' },
        { to: 'russia', type: 'war', label: 'Wars with Muscovy & the Partitions', note: 'Centuries of warfare with Moscow ended as Russia seized the lion’s share in the Partitions.' },
        { to: 'sweden', type: 'war', label: 'The Deluge', note: 'Swedish invasions devastated the Commonwealth in the mid-17th century.' }
      ],
      figures: [
        { name: 'Sigismund II Augustus', title: 'Last Jagiellonian, architect of the Union', years: 'r. 1548–1572' },
        { name: 'Stanisław August Poniatowski', title: 'Last king of the Commonwealth', years: 'r. 1764–1795' }
      ]
    },
    {
      startYear: 1795,
      endYear: 1918,
      eraId: 'revolutionary',
      name: 'Russian Rule',
      modernEquivalent: false,
      government: 'Russian imperial governorates',
      capital: '— (ruled from Saint Petersburg)',
      religion: ['Catholicism', 'Orthodoxy under Russian rule'],
      culture: ['Lithuanian', 'Polish'],
      summary:
        'Annexed by Russia in the Partitions, Lithuania rose in the great uprisings of 1830 and 1863; Saint Petersburg answered with a ban on the Latin-script Lithuanian press (1864–1904), which only fuelled a determined national revival.',
      relations: [
        { to: 'russia', type: 'war', label: 'Annexation & uprisings', note: 'Tsarist rule crushed the 1830 and 1863 revolts and banned the Lithuanian press.' },
        { to: 'poland', type: 'ally', label: 'Joint uprisings', note: 'Lithuanians and Poles rebelled together against Russian rule in 1830–31 and 1863.' },
        { to: 'germany', type: 'interaction', label: 'Smuggled books & WWI', note: 'Banned books were printed in East Prussia and smuggled across the border by knygnešiai.' }
      ],
      figures: [
        { name: 'Jonas Basanavičius', title: 'Patriarch of the national revival', years: '1851–1927' },
        { name: 'Vincas Kudirka', title: 'Poet & national awakener', years: '1858–1899' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1940,
      eraId: 'world-wars',
      name: 'First Republic of Lithuania',
      government: 'Republic → authoritarian regime',
      capital: 'Kaunas (provisional; Vilnius held by Poland)',
      religion: ['Catholicism'],
      culture: ['Lithuanian'],
      summary:
        'Lithuania declared independence on 16 February 1918 and built an interwar republic with its provisional capital at Kaunas, Vilnius having been seized by Poland. After a 1926 coup, Antanas Smetona ruled as an authoritarian president until Soviet occupation.',
      relations: [
        { to: 'poland', type: 'war', label: 'Dispute over Vilnius', note: 'Poland’s seizure of Vilnius (1920) poisoned relations for the whole interwar period.' },
        { to: 'germany', type: 'war', label: 'Klaipėda & the 1939 ultimatum', note: 'Lithuania took the Memel/Klaipėda region in 1923 but was forced to cede it to Nazi Germany in 1939.' },
        { to: 'russia', type: 'interaction', label: 'Soviet neighbour', note: 'A 1920 treaty recognised independence before the 1939 pact doomed it to Soviet annexation.' }
      ],
      figures: [
        { name: 'Antanas Smetona', title: 'First & authoritarian President', years: 'r. 1919–1920, 1926–1940' },
        { name: 'Jonas Basanavičius', title: 'Signatory of the Act of Independence', years: '1851–1927' }
      ]
    },
    {
      startYear: 1940,
      endYear: 1990,
      eraId: 'cold-war',
      name: 'Soviet Lithuania',
      modernEquivalent: false,
      government: 'Soviet socialist republic',
      capital: 'Vilnius',
      religion: ['State atheism / Catholic'],
      culture: ['Lithuanian'],
      summary:
        'Annexed as the Lithuanian SSR under the Molotov–Ribbentrop Pact, Lithuania endured mass deportations and a fierce partisan war by the "Forest Brothers". The Sąjūdis reform movement led the way, and in March 1990 Lithuania became the first Soviet republic to declare independence.',
      relations: [
        { to: 'russia', type: 'war', label: 'Soviet annexation & resistance', note: 'Occupied in 1940; partisans fought the USSR into the 1950s before Sąjūdis broke free in 1990.' },
        { to: 'germany', type: 'war', label: 'Nazi occupation (1941–44)', note: 'Wartime German occupation brought the Holocaust that destroyed Lithuania’s Jewish community.' },
        { to: 'latvia', type: 'ally', label: 'Baltic independence drive', note: 'The Baltic Way human chain (1989) linked Lithuanians, Latvians and Estonians against Soviet rule.' }
      ],
      figures: [
        { name: 'Vytautas Landsbergis', title: 'Sąjūdis leader & independence head of state', years: 'r. 1990–1992' },
        { name: 'Juozas Lukša', title: 'Anti-Soviet partisan commander', years: '1921–1951' }
      ]
    },
    {
      startYear: 1990,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Lithuania',
      government: 'Parliamentary republic',
      capital: 'Vilnius',
      religion: ['Catholic / secular'],
      culture: ['Lithuanian'],
      summary:
        'Independence won and the last Soviet troops gone by 1993, Lithuania anchored itself in the West, joining the European Union and NATO in 2004 and adopting the euro in 2015, while warily watching its eastern neighbours.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Joined the European Union and NATO in 2004; hosts NATO forces led in part by Germany.' },
        { to: 'poland', type: 'ally', label: 'Regional partner', note: 'Close EU and NATO cooperation, including the joint LITPOLUKRBRIG brigade.' },
        { to: 'russia', type: 'interaction', label: 'Wary eastern neighbour', note: 'Tense relations over Kaliningrad, energy and security on NATO’s eastern flank.' }
      ],
      figures: [
        { name: 'Vytautas Landsbergis', title: 'First post-Soviet head of state', years: 'r. 1990–1992' },
        { name: 'Dalia Grybauskaitė', title: 'President of Lithuania', years: 'r. 2009–2019' }
      ]
    }
  ]
}

export default lithuania
