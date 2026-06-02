import type { Country } from '../countryTypes'

const ireland: Country = {
  id: 'ireland',
  name: 'Ireland',
  mapNames: ['Ireland'],
  color: '#4e9e6a',
  centroid: [-8, 53.2],
  periods: [
    {
      startYear: 0,
      endYear: 400,
      eraId: 'roman',
      name: 'Prehistoric & Celtic Ireland',
      modernEquivalent: false,
      government: 'Gaelic tribal kingdoms (túatha)',
      capital: 'Tara (ceremonial seat)',
      religion: ['Celtic paganism (druidism)'],
      culture: ['Gaelic', 'La Tène Celtic'],
      summary:
        'Beyond the reach of Rome, Iron Age Ireland was a patchwork of Gaelic túatha sharing a common Celtic culture, law and language — the world of the legendary High Kings at Tara, on the eve of Saint Patrick’s mission.',
      relations: [
        { to: 'united-kingdom', type: 'interaction', label: 'Raids on Roman Britain', note: 'Irish raiders struck the western coasts of Roman Britain and carried off captives.' },
        { to: 'france', type: 'interaction', label: 'Celtic kin', note: 'Part of the wider Atlantic Celtic world linked to Gaul and Britain.' }
      ],
      figures: []
    },
    {
      startYear: 400,
      endYear: 1169,
      eraId: 'early-medieval',
      name: 'Early Gaelic & Monastic Ireland',
      government: 'Gaelic kingdoms under a nominal High King',
      capital: 'Tara (seat of the High Kings)',
      religion: ['Celtic paganism → Christianity (from 5th century)'],
      culture: ['Gaelic', 'Norse-Gael'],
      summary:
        'Saint Patrick’s mission Christianised the island, whose monasteries became beacons of learning that sent missionaries across Europe; Gaelic kings vied for the High Kingship until Brian Boru broke Norse power at Clontarf in 1014.',
      relations: [
        { to: 'united-kingdom', type: 'interaction', label: 'Missionaries & raids on Britain', note: 'Irish monks like Columba evangelised Scotland and the north of England while raiders also struck the British coast.' },
        { to: 'france', type: 'interaction', label: 'Monastic links to the continent', note: 'Columbanus and other peregrini founded monasteries across Frankish Gaul.' },
        { to: 'denmark', type: 'war', label: 'Viking Dublin', note: 'Norse settlers founded Dublin and other coastal towns before Brian Boru checked them at Clontarf in 1014.' }
      ],
      figures: [
        { name: 'Saint Patrick', title: 'Apostle of Ireland', years: 'fl. 5th century' },
        { name: 'Brian Boru', title: 'High King (victor at Clontarf)', years: 'r. 1002–1014' }
      ]
    },
    {
      startYear: 1169,
      endYear: 1541,
      eraId: 'high-medieval',
      name: 'Norman Lordship of Ireland',
      modernEquivalent: false,
      government: 'Lordship under the English crown',
      capital: 'Dublin',
      religion: ['Catholicism'],
      culture: ['Gaelic', 'Anglo-Norman'],
      summary:
        'Anglo-Norman adventurers led by Strongbow landed in 1169 and Henry II claimed the island as a lordship of the English crown, though royal control gradually shrank to the Pale around Dublin as Gaelic lords reasserted themselves.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Norman conquest & lordship', note: 'Henry II and his successors held Ireland as a lordship of the English crown after 1171.' },
        { to: 'france', type: 'interaction', label: 'Angevin connections', note: 'The Anglo-Norman elite were bound into the wider French-speaking world of the Plantagenet realm.' }
      ],
      figures: [
        { name: 'Richard de Clare (Strongbow)', title: 'Norman Lord of Leinster', years: 'c. 1130–1176' }
      ]
    },
    {
      startYear: 1541,
      endYear: 1801,
      eraId: 'early-modern',
      name: 'Kingdom of Ireland under English rule',
      modernEquivalent: false,
      government: 'Kingdom subordinate to the English/British crown',
      capital: 'Dublin',
      religion: ['Catholicism', 'Protestantism (ruling minority)'],
      culture: ['Gaelic Irish', 'English & Scots settlers'],
      summary:
        'Henry VIII made Ireland a kingdom in 1541; Tudor conquest, the plantations, and the Cromwellian and Williamite wars crushed Gaelic and Catholic power, entrenching a Protestant Ascendancy over a dispossessed Catholic majority.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Conquest & plantation', note: 'Tudor and Stuart wars, plantations, and the Cromwellian and Williamite campaigns subjugated the island.' },
        { to: 'spain', type: 'ally', label: 'Catholic aid at Kinsale', note: 'A Spanish expedition landed in 1601 to support the Gaelic lords but was defeated alongside them.' },
        { to: 'france', type: 'ally', label: 'Jacobite & Catholic ties', note: 'Catholic Ireland looked to France during the Williamite war and afterward in the cause of the exiled Stuarts.' }
      ],
      figures: [
        { name: 'Hugh O’Neill', title: 'Earl of Tyrone (Nine Years’ War)', years: 'c. 1550–1616' }
      ]
    },
    {
      startYear: 1801,
      endYear: 1922,
      eraId: 'long-19th',
      name: 'Ireland in the United Kingdom',
      modernEquivalent: false,
      government: 'Part of the United Kingdom of Great Britain and Ireland',
      capital: 'Dublin (governed from London)',
      religion: ['Catholicism', 'Protestantism'],
      culture: ['Irish'],
      summary:
        'The Act of Union merged Ireland into the United Kingdom in 1801; the catastrophic Great Famine, decades of struggle for Catholic Emancipation and Home Rule, and finally the 1916 Easter Rising drove the island toward independence.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Union & independence struggle', note: 'From the 1801 union through the Famine and Home Rule to the War of Independence, Irish politics turned on the bond with Britain.' },
        { to: 'germany', type: 'interaction', label: 'Arms for the Rising', note: 'Republicans sought a German arms shipment, intercepted in 1916, ahead of the Easter Rising.' }
      ],
      figures: [
        { name: 'Daniel O’Connell', title: 'Leader of Catholic Emancipation', years: '1775–1847' },
        { name: 'Charles Stewart Parnell', title: 'Home Rule leader', years: '1846–1891' }
      ]
    },
    {
      startYear: 1922,
      endYear: 2025,
      eraId: 'world-wars',
      name: 'Irish Free State & Republic',
      government: 'Parliamentary republic',
      capital: 'Dublin',
      religion: ['Catholicism', 'secular'],
      culture: ['Irish'],
      summary:
        'The Anglo-Irish Treaty created the Free State in 1922 amid partition and civil war; the south stayed neutral in World War II, declared itself a republic in 1949, and joined the European Community in 1973 to become a prosperous modern member state.',
      relations: [
        { to: 'united-kingdom', type: 'interaction', label: 'Partition, Troubles & peace', note: 'Partition left Northern Ireland in the UK, fuelling the Troubles until the 1998 Good Friday Agreement brought peace.' },
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Both anchor the European Union, with Germany a key trade and political partner since 1973.' },
        { to: 'france', type: 'ally', label: 'EU partner', note: 'Ireland and France cooperate closely within the European Union and the eurozone.' }
      ],
      figures: [
        { name: 'Michael Collins', title: 'Revolutionary & Free State leader', years: '1890–1922' },
        { name: 'Éamon de Valera', title: 'Taoiseach & President', years: '1882–1975' }
      ]
    }
  ]
}

export default ireland
