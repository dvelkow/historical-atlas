import type { Country } from '../countryTypes'

const greece: Country = {
  id: 'greece',
  name: 'Greece',
  mapNames: ['Greece'],
  color: '#6a8fd0',
  centroid: [22.5, 39.3],
  periods: [
    {
      startYear: 0,
      endYear: 1453,
      eraId: 'early-medieval',
      name: 'Roman & Byzantine Greece',
      government: 'Roman / Byzantine Empire',
      capital: 'Constantinople',
      religion: ['Greek polytheism → Eastern Orthodoxy'],
      culture: ['Greek', 'Byzantine'],
      summary: 'The Greek world was the cultural heart of the Eastern Roman (Byzantine) Empire — guardian of Orthodoxy and classical learning until 1453.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Christianised the Rus’', note: 'Byzantium brought Orthodoxy and Cyrillic to the East Slavs (988).' },
        { to: 'turkey', type: 'war', label: 'Ottoman conquest (1453)', note: 'The fall of Constantinople ended the Byzantine Empire.' }
      ],
      figures: [{ name: 'Justinian I', title: 'Byzantine Emperor', years: 'r. 527–565' }]
    },
    {
      startYear: 1453,
      endYear: 1821,
      eraId: 'early-modern',
      name: 'Ottoman Greece',
      government: 'Ottoman provinces',
      capital: '— (ruled from Constantinople)',
      religion: ['Eastern Orthodoxy under Ottoman rule'],
      culture: ['Greek'],
      summary: 'Under Ottoman rule for nearly four centuries, the Greeks preserved their Orthodox faith and identity until the war of independence.',
      relations: [
        { to: 'turkey', type: 'interaction', label: 'Under Ottoman rule', note: 'Greeks held an autonomous religious community within the empire.' }
      ],
      figures: []
    },
    {
      startYear: 1832,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Modern Greece',
      government: 'Kingdom → Republic',
      capital: 'Athens',
      religion: ['Eastern Orthodoxy'],
      culture: ['Greek'],
      summary: 'Independent from 1832 with Western backing, Greece expanded at Ottoman expense, endured occupation and civil war, and joined the EU in 1981.',
      relations: [
        { to: 'turkey', type: 'war', label: 'War of Independence & later wars', note: 'Won independence (1821–32); recurring conflict thereafter.' },
        { to: 'united-kingdom', type: 'ally', label: 'Great-power backing', note: 'Britain, France, and Russia backed Greek independence.' },
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Member of the European Union and eurozone.' }
      ],
      figures: [{ name: 'Eleftherios Venizelos', title: 'Statesman', years: '1864–1936' }]
    }
  ]
}

export default greece
