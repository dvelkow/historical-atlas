import type { Country } from '../countryTypes'

const poland: Country = {
  id: 'poland',
  name: 'Poland',
  mapNames: ['Poland'],
  color: '#b03b6f',
  centroid: [19.4, 52.0],
  periods: [
    {
      startYear: 966,
      endYear: 1385,
      eraId: 'high-medieval',
      name: 'Kingdom of Poland (Piast)',
      government: 'Feudal monarchy',
      capital: 'Gniezno / Kraków',
      religion: ['Roman Catholicism'],
      culture: ['Polish'],
      summary: 'Christianised in 966, the Piast kingdom consolidated the Polish lands and resisted the Holy Roman Empire and the Teutonic Knights.',
      relations: [
        { to: 'germany', type: 'war', label: 'Wars with the Empire & Teutonic Order', note: 'Conflict over the Baltic and western frontier.' }
      ],
      figures: [{ name: 'Casimir III the Great', title: 'King of Poland', years: 'r. 1333–1370' }]
    },
    {
      startYear: 1569,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Polish–Lithuanian Commonwealth',
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
