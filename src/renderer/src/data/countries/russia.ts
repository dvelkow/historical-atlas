import type { Country } from '../countryTypes'

const russia: Country = {
  id: 'russia',
  name: 'Russia',
  mapNames: ['Russia'],
  color: '#a93226',
  centroid: [37.6, 55.7],
  periods: [
    {
      startYear: 882,
      endYear: 1240,
      eraId: 'early-medieval',
      name: "Kievan Rus'",
      government: 'Federation of principalities',
      capital: 'Kyiv',
      religion: ['Slavic paganism → Eastern Orthodoxy'],
      culture: ['East Slavic'],
      summary: 'The first East Slavic state, Christianised from Byzantium in 988, ancestor of Russia, Ukraine, and Belarus, until the Mongol invasion.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Christianisation from Byzantium', note: 'The Rus’ adopted Orthodox Christianity (988) and the Cyrillic script.' }
      ],
      figures: [{ name: 'Vladimir the Great', title: 'Grand Prince of Kyiv', years: 'r. 980–1015' }]
    },
    {
      startYear: 1547,
      endYear: 1721,
      eraId: 'early-modern',
      name: 'Tsardom of Russia',
      government: 'Tsarist autocracy',
      capital: 'Moscow',
      religion: ['Eastern Orthodoxy'],
      culture: ['Russian'],
      summary: 'Proclaimed by Ivan the Terrible, the expanding Russian state pushed across Siberia and contested the west with Poland and Sweden.',
      relations: [
        { to: 'poland', type: 'war', label: 'Russo-Polish wars', note: 'Long struggle over the lands between them.' },
        { to: 'sweden', type: 'war', label: 'Wars for the Baltic', note: 'Rivalry culminating in the Great Northern War.' }
      ],
      figures: [{ name: 'Ivan IV (the Terrible)', title: 'First Tsar', years: 'r. 1547–1584' }]
    },
    {
      startYear: 1721,
      endYear: 1917,
      eraId: 'long-19th',
      name: 'Russian Empire',
      government: 'Absolute monarchy',
      capital: 'Saint Petersburg',
      religion: ['Eastern Orthodoxy'],
      culture: ['Russian', 'multi-ethnic'],
      summary: 'A continental empire and great power of the European concert, from Peter the Great’s reforms to defeat of Napoleon to revolution in 1917.',
      relations: [
        { to: 'sweden', type: 'war', label: 'Great Northern War (1700–21)', note: 'Russia shattered Swedish supremacy in the Baltic.' },
        { to: 'france', type: 'war', label: 'Napoleonic & Crimean Wars', note: '1812 invasion repelled; later defeated in the Crimea.' },
        { to: 'turkey', type: 'war', label: 'Russo-Turkish Wars', note: 'A long contest over the Black Sea and the Balkans.' },
        { to: 'france', type: 'ally', label: 'Franco-Russian Alliance (1894)', note: 'Aligned against Germany and Austria-Hungary.' },
        { to: 'germany', type: 'war', label: 'First World War', note: 'The Eastern Front until the 1917 revolution.' }
      ],
      figures: [
        { name: 'Peter the Great', title: 'Emperor of Russia', years: 'r. 1682–1725' },
        { name: 'Catherine the Great', title: 'Empress of Russia', years: 'r. 1762–1796' }
      ]
    },
    {
      startYear: 1922,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Soviet Union',
      modernEquivalent: false,
      government: 'One-party socialist state',
      capital: 'Moscow',
      religion: ['State atheism'],
      culture: ['Soviet (multi-ethnic)'],
      summary: 'The world’s first communist state, victor over Nazi Germany, and one of the two Cold War superpowers until its dissolution in 1991.',
      relations: [
        { to: 'germany', type: 'war', label: 'WWII Eastern Front', note: 'Operation Barbarossa and the drive to Berlin.' },
        { to: 'united-kingdom', type: 'ally', label: 'Grand Alliance (WWII)', note: 'Allied with Britain against the Axis.' },
        { to: 'poland', type: 'interaction', label: 'Warsaw Pact / Eastern bloc', note: 'Poland and the East were Soviet satellites.' },
        { to: 'france', type: 'interaction', label: 'Cold War divide', note: 'Opposed across the Iron Curtain.' }
      ],
      figures: [
        { name: 'Joseph Stalin', title: 'Soviet leader', years: 'r. 1924–1953' },
        { name: 'Mikhail Gorbachev', title: 'Soviet leader', years: 'r. 1985–1991' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Russian Federation',
      government: 'Federal semi-presidential republic',
      capital: 'Moscow',
      religion: ['Eastern Orthodoxy'],
      culture: ['Russian'],
      summary: 'The principal successor to the USSR, a nuclear power and energy exporter whose relations with the West collapsed after its invasions of Ukraine.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Energy ties then sanctions', note: 'Deep gas trade gave way to confrontation after 2022.' },
        { to: 'poland', type: 'interaction', label: 'Renewed tension', note: 'A frontline NATO state wary of Russian power.' }
      ],
      figures: [{ name: 'Vladimir Putin', title: 'President', years: 'r. 2000–' }]
    }
  ]
}

export default russia
