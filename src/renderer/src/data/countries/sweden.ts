import type { Country } from '../countryTypes'

const sweden: Country = {
  id: 'sweden',
  name: 'Sweden',
  mapNames: ['Sweden'],
  color: '#3a7ac0',
  centroid: [15.5, 60.2],
  periods: [
    {
      startYear: 800,
      endYear: 1100,
      eraId: 'early-medieval',
      name: 'Viking Age Sweden',
      government: 'Petty kingdoms (Svear & Götar)',
      capital: 'Birka / Uppsala',
      religion: ['Norse paganism', 'early Christianity'],
      culture: ['Norse', 'Swedish'],
      summary:
        'From the trading town of Birka the Svear looked east: Swedish Vikings — the Varangians — opened the great river routes to the Rus’ lands and Byzantium, raiding and trading as far as the Caspian and Constantinople before the first kings accepted Christianity.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Varangians & the Rus’ routes', note: 'Swedish Vikings (the Rus’) opened the river trade down to Novgorod and Kyiv.' },
        { to: 'greece', type: 'interaction', label: 'The road to Miklagård', note: 'Varangian traders and mercenaries reached Byzantine Constantinople.' },
        { to: 'denmark', type: 'war', label: 'Scandinavian rivalry', note: 'Shifting raids and alliances among the Norse kingdoms.' }
      ],
      figures: [
        { name: 'Erik the Victorious', title: 'King of the Swedes', years: 'r. c. 970–995' },
        { name: 'Olof Skötkonung', title: 'First Christian king', years: 'r. c. 995–1022' }
      ]
    },
    {
      startYear: 1100,
      endYear: 1397,
      eraId: 'high-medieval',
      name: 'Medieval Kingdom of Sweden',
      government: 'Elective monarchy',
      capital: 'Uppsala / Stockholm',
      religion: ['Roman Catholicism'],
      culture: ['Swedish'],
      summary:
        'A Christian kingdom coalesced around Uppsala and the new town of Stockholm, launching crusades into Finland and trading through the Hanseatic League, before entering the Kalmar Union with Denmark and Norway in 1397.',
      relations: [
        { to: 'russia', type: 'war', label: 'Wars with Novgorod', note: 'Rivalry over Finland and Karelia, including clashes on the Neva.' },
        { to: 'denmark', type: 'interaction', label: 'Toward the Kalmar Union', note: 'Nordic dynastic ties culminating in the 1397 union under Margaret I.' },
        { to: 'germany', type: 'interaction', label: 'Hanseatic trade', note: 'German Hansa merchants dominated Baltic commerce and towns like Visby.' }
      ],
      figures: [
        { name: 'Birger Jarl', title: 'Regent & founder of Stockholm', years: 'c. 1210–1266' },
        { name: 'Saint Eric (Erik IX)', title: 'King & crusader', years: 'r. 1156–1160' }
      ]
    },
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
