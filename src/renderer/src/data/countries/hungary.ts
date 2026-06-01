import type { Country } from '../countryTypes'

const hungary: Country = {
  id: 'hungary',
  name: 'Hungary',
  mapNames: ['Hungary'],
  color: '#a0623a',
  centroid: [19.4, 47.2],
  periods: [
    {
      startYear: 1000,
      endYear: 1526,
      eraId: 'high-medieval',
      name: 'Kingdom of Hungary',
      government: 'Christian kingdom',
      capital: 'Esztergom / Buda',
      religion: ['Roman Catholicism'],
      culture: ['Hungarian (Magyar)'],
      summary: 'Founded by St Stephen in 1000, the Magyar kingdom was a major Central European power and a bulwark against the Ottomans until Mohács.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Ottoman–Hungarian Wars', note: 'Ended at Mohács (1526), where the king and army were destroyed.' }
      ],
      figures: [{ name: 'Matthias Corvinus', title: 'King of Hungary', years: 'r. 1458–1490' }]
    },
    {
      startYear: 1526,
      endYear: 1867,
      eraId: 'early-modern',
      name: 'Habsburg Hungary',
      government: 'Kingdom under the Habsburgs',
      capital: 'Pressburg (Bratislava) / Buda',
      religion: ['Roman Catholicism', 'Calvinism'],
      culture: ['Hungarian'],
      summary: 'Partitioned between Ottomans and Habsburgs, then reunited under Austrian rule, Hungary chafed against Vienna and revolted in 1848.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg rule', note: 'Ruled from Vienna; the 1848 revolution was suppressed.' },
        { to: 'turkey', type: 'war', label: 'Ottoman occupation', note: 'Central Hungary was an Ottoman province for 150 years.' }
      ],
      figures: [{ name: 'Lajos Kossuth', title: 'Leader of 1848', years: '1802–1894' }]
    },
    {
      startYear: 1867,
      endYear: 1918,
      eraId: 'world-wars',
      name: 'Austria-Hungary (Hungarian half)',
      government: 'Dual monarchy',
      capital: 'Budapest',
      religion: ['Roman Catholicism'],
      culture: ['Hungarian'],
      summary: 'The 1867 Compromise made Hungary an equal partner in the Dual Monarchy, which fought and collapsed in the First World War.',
      relations: [
        { to: 'austria', type: 'ally', label: 'Dual Monarchy', note: 'Joined with Austria in a single great power.' },
        { to: 'germany', type: 'ally', label: 'Central Powers', note: 'Allied with Germany in WWI.' }
      ],
      figures: [{ name: 'Gyula Andrássy', title: 'Statesman', years: '1823–1890' }]
    },
    {
      startYear: 1989,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Hungary',
      government: 'Parliamentary republic',
      capital: 'Budapest',
      religion: ['Roman Catholicism / secular'],
      culture: ['Hungarian'],
      summary: 'After communism, Hungary joined NATO (1999) and the EU (2004), later taking a more nationalist, Eurosceptic turn.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Member of the European Union since 2004.' },
        { to: 'austria', type: 'ally', label: 'Central European neighbour', note: 'Close ties with neighbouring Austria.' }
      ],
      figures: [{ name: 'József Antall', title: 'First post-communist PM', years: 'r. 1990–1993' }]
    }
  ]
}

export default hungary
