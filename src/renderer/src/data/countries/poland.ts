import type { Country } from '../countryTypes'

const poland: Country = {
  id: 'poland',
  name: 'Poland',
  mapNames: ['Poland'],
  color: '#b03b6f',
  centroid: [19.4, 52.0],
  periods: [
    {
      startYear: 0,
      endYear: 966,
      eraId: 'roman',
      name: 'Early Slavic Tribes',
      modernEquivalent: false,
      government: 'Tribal societies',
      capital: '— (no fixed centre)',
      religion: ['Slavic paganism'],
      culture: ['West Slavic', 'Lechitic'],
      summary:
        'The lands between the Oder and the Vistula passed from the Przeworsk culture and Germanic migrations to the West Slavic tribes, the Polans among them, who coalesced into the Piast realm baptised under Mieszko I in 966.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Germanic neighbours', note: 'Germanic peoples and later the Frankish-German world bordered the Slavic tribes.' },
        { to: 'russia', type: 'interaction', label: 'Slavic kin', note: 'Part of the wider Slavic world stretching east toward the Rus’.' }
      ],
      figures: []
    },
    {
      startYear: 966,
      endYear: 1385,
      eraId: 'high-medieval',
      name: 'Kingdom of Poland (Piast)',
      government: 'Feudal monarchy',
      capital: 'Gniezno / Kraków',
      religion: ['Roman Catholicism'],
      culture: ['Polish'],
      summary: 'Christianised under Mieszko I in 966, the Piast kingdom consolidated the Polish lands, survived the Mongol storm of 1241, and resisted the Holy Roman Empire and the Teutonic Knights.',
      relations: [
        { to: 'germany', type: 'war', label: 'Wars with the Empire & Teutonic Order', note: 'Conflict over the Baltic and the western frontier.' },
        { to: 'russia', type: 'war', label: 'Wars with Kievan Rus', note: 'Bolesław I intervened in Kyiv (1018) amid centuries of eastern rivalry.' },
        { to: 'hungary', type: 'interaction', label: 'Dynastic ties', note: 'Shared kings and marriages linked the Piast and Árpád houses.' }
      ],
      figures: [
        { name: 'Mieszko I', title: 'First Christian duke', years: 'r. c. 960–992' },
        { name: 'Casimir III the Great', title: 'King of Poland', years: 'r. 1333–1370' }
      ]
    },
    {
      startYear: 1385,
      endYear: 1569,
      eraId: 'late-medieval',
      name: 'Jagiellonian Poland',
      government: 'Kingdom (personal union with Lithuania)',
      capital: 'Kraków',
      religion: ['Roman Catholicism'],
      culture: ['Polish', 'Lithuanian'],
      summary:
        'The 1385 Union of Krewo joined Poland and Lithuania under the Jagiellon dynasty; their combined armies crushed the Teutonic Knights at Grunwald (1410), ushering in a golden age that culminated in the 1569 Union of Lublin and the Commonwealth.',
      relations: [
        { to: 'germany', type: 'war', label: 'Grunwald & the Teutonic Order', note: 'The great victory of 1410 broke the Teutonic Knights’ power in the Baltic.' },
        { to: 'russia', type: 'war', label: 'Wars with Muscovy', note: 'Poland-Lithuania and rising Moscow fought over the Ruthenian lands.' },
        { to: 'hungary', type: 'interaction', label: 'Shared Jagiellon crowns', note: 'Jagiellon kings also wore the crowns of Hungary and Bohemia.' },
        { to: 'turkey', type: 'war', label: 'The Ottoman threat', note: 'King Władysław fell fighting the Ottomans at Varna in 1444.' }
      ],
      figures: [
        { name: 'Władysław II Jagiełło', title: 'King (victor at Grunwald)', years: 'r. 1386–1434' },
        { name: 'Casimir IV Jagiellon', title: 'King of Poland', years: 'r. 1447–1492' }
      ]
    },
    {
      startYear: 1569,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Polish–Lithuanian Commonwealth',
      modernEquivalent: false,
      government: 'Elective monarchy / noble republic',
      capital: 'Kraków → Warsaw',
      religion: ['Roman Catholicism', 'Orthodoxy', 'Judaism'],
      culture: ['Polish', 'Lithuanian', 'Ruthenian'],
      summary: 'One of Europe’s largest states, a multi-ethnic noble republic with an elected king — until partitioned out of existence by its neighbours.',
      relations: [
        { to: 'sweden', type: 'war', label: 'The Deluge (1655)', note: 'A devastating Swedish invasion.' },
        { to: 'russia', type: 'war', label: 'Russo-Polish wars', note: 'A long struggle over the eastern borderlands.' },
        { to: 'turkey', type: 'war', label: 'Relief of Vienna (1683)', note: 'Jan III Sobieski broke the Ottoman siege of Vienna.' }
      ],
      figures: [{ name: 'Jan III Sobieski', title: 'King of Poland', years: 'r. 1674–1696' }]
    },
    {
      startYear: 1918,
      endYear: 1939,
      eraId: 'world-wars',
      name: 'Second Polish Republic',
      government: 'Republic',
      capital: 'Warsaw',
      religion: ['Roman Catholicism'],
      culture: ['Polish'],
      summary: 'Reborn after WWI, Poland repelled a Soviet invasion in 1920 before being crushed between Nazi Germany and the USSR in 1939.',
      relations: [
        { to: 'germany', type: 'war', label: 'German invasion (1939)', note: 'The invasion that began the Second World War.' },
        { to: 'russia', type: 'war', label: 'Polish–Soviet War (1920)', note: 'Poland turned back the Red Army at Warsaw.' }
      ],
      figures: [{ name: 'Józef Piłsudski', title: 'Marshal & leader', years: '1867–1935' }]
    },
    {
      startYear: 1947,
      endYear: 1989,
      eraId: 'cold-war',
      name: "Polish People's Republic",
      government: 'One-party socialist state',
      capital: 'Warsaw',
      religion: ['Roman Catholicism (despite the state)'],
      culture: ['Polish'],
      summary: 'A Soviet satellite in the Warsaw Pact whose Solidarity movement helped bring down communism across the Eastern bloc.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Warsaw Pact / Soviet bloc', note: 'Under Soviet domination until 1989.' }
      ],
      figures: [{ name: 'Lech Wałęsa', title: 'Solidarity leader', years: 'b. 1943' }]
    },
    {
      startYear: 1989,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Poland',
      government: 'Parliamentary republic',
      capital: 'Warsaw',
      religion: ['Roman Catholicism'],
      culture: ['Polish'],
      summary: 'A post-communist democracy that joined NATO (1999) and the EU (2004) and became a frontline supporter of Ukraine.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Deeply integrated with the European Union.' },
        { to: 'russia', type: 'interaction', label: 'Wary neighbour', note: 'A frontline NATO state opposed to Russian expansion.' }
      ],
      figures: [{ name: 'Lech Wałęsa', title: 'First democratic President', years: 'r. 1990–1995' }]
    }
  ]
}

export default poland
