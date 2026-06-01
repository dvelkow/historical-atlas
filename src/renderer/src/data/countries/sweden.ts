import type { Country } from '../countryTypes'

const sweden: Country = {
  id: 'sweden',
  name: 'Sweden',
  mapNames: ['Sweden'],
  color: '#3a7ac0',
  centroid: [15.5, 60.2],
  periods: [
    {
      startYear: 1611,
      endYear: 1721,
      eraId: 'early-modern',
      name: 'Swedish Empire',
      government: 'Kingdom',
      capital: 'Stockholm',
      religion: ['Lutheranism'],
      culture: ['Swedish'],
      summary: 'The Baltic great power of the 17th century, decisive in the Thirty Years’ War under Gustavus Adolphus, until broken by Russia.',
      relations: [
        { to: 'germany', type: 'war', label: "Thirty Years' War", note: 'Swedish intervention turned the tide for the Protestant cause.' },
        { to: 'poland', type: 'war', label: 'The Deluge (1655)', note: 'Swedish invasion devastated the Commonwealth.' },
        { to: 'russia', type: 'war', label: 'Great Northern War', note: 'Defeat by Russia ended Swedish supremacy in the Baltic.' }
      ],
      figures: [{ name: 'Gustavus Adolphus', title: 'King of Sweden', years: 'r. 1611–1632' }]
    },
    {
      startYear: 1814,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Kingdom of Sweden (modern)',
      government: 'Constitutional monarchy',
      capital: 'Stockholm',
      religion: ['Lutheran / secular'],
      culture: ['Swedish'],
      summary: 'Neutral through two centuries of European wars, Sweden built a model welfare state, joined the EU in 1995, and NATO in 2024.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Joined the European Union in 1995.' }
      ],
      figures: [{ name: 'Dag Hammarskjöld', title: 'UN Secretary-General', years: '1905–1961' }]
    }
  ]
}

export default sweden
