import type { Country } from '../countryTypes'

const denmark: Country = {
  id: 'denmark',
  name: 'Denmark',
  mapNames: ['Denmark'],
  color: '#d05a5a',
  centroid: [9.5, 56.0],
  periods: [
    {
      startYear: 793,
      endYear: 1397,
      eraId: 'early-medieval',
      name: 'Viking & Medieval Denmark',
      government: 'Kingdom',
      capital: 'Roskilde / Copenhagen',
      religion: ['Norse paganism → Catholicism'],
      culture: ['Danish', 'Norse'],
      summary: 'A seafaring Norse kingdom whose Vikings raided and ruled across the North Sea — in England, Frisia and Normandy — and which, Christianised under Harald Bluetooth, came to unite Scandinavia in the Kalmar Union (1397).',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Viking invasions of England', note: 'Danish raids, the Danelaw, and Cnut’s North Sea Empire.' },
        { to: 'netherlands', type: 'war', label: 'Raids on Frisia & Dorestad', note: 'Danish fleets repeatedly sacked the Low Countries’ great emporium.' },
        { to: 'germany', type: 'interaction', label: 'The southern frontier', note: 'The Danevirke and Holstein marked the border with the Saxons and the Empire.' },
        { to: 'sweden', type: 'interaction', label: 'Kalmar Union (1397)', note: 'A union of the Scandinavian crowns under Denmark.' }
      ],
      figures: [
        { name: 'Harald Bluetooth', title: 'King who Christianised Denmark', years: 'r. c. 958–986' },
        { name: 'Cnut the Great', title: 'King of the North Sea Empire', years: 'r. 1016–1035' }
      ]
    },
    {
      startYear: 1523,
      endYear: 1814,
      eraId: 'early-modern',
      name: 'Denmark–Norway',
      modernEquivalent: false,
      government: 'Kingdom (later absolute monarchy)',
      capital: 'Copenhagen',
      religion: ['Lutheranism'],
      culture: ['Danish'],
      summary: 'A Baltic and North Atlantic power often at war with Sweden for regional dominance, until losing Norway in 1814.',
      relations: [
        { to: 'sweden', type: 'war', label: 'Dano-Swedish wars', note: 'Repeated wars for Baltic supremacy.' }
      ],
      figures: [{ name: 'Christian IV', title: 'King of Denmark–Norway', years: 'r. 1588–1648' }]
    },
    {
      startYear: 1849,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Kingdom of Denmark',
      government: 'Constitutional monarchy',
      capital: 'Copenhagen',
      religion: ['Lutheran / secular'],
      culture: ['Danish'],
      summary: 'A constitutional monarchy and Nordic welfare state, a founding member of NATO and (from 1973) the European Communities.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Integrated into the European Union and NATO.' }
      ],
      figures: [{ name: 'Margrethe II', title: 'Queen', years: 'r. 1972–2024' }]
    }
  ]
}

export default denmark
