import type { Country } from '../countryTypes'

const estonia: Country = {
  id: 'estonia',
  name: 'Estonia',
  mapNames: ['Estonia'],
  color: '#4a90c8',
  centroid: [24.7, 59.4],
  periods: [
    {
      startYear: 0,
      endYear: 1227,
      eraId: 'roman',
      name: 'Ancient Estonians',
      modernEquivalent: false,
      government: 'Stateless county society (maakonnad & elders)',
      capital: '— (hill-forts such as Varbola & Otepää)',
      religion: ['Finnic paganism'],
      culture: ['Estonian (Baltic Finnic)'],
      summary:
        'Pagan Baltic-Finnic tribes farmed and traded along the eastern Baltic, organised into autonomous counties (maakonnad) governed by elders and meeting in popular assemblies. Viking-age Oeselian raiders from Saaremaa harried the Scandinavian coasts, and the Estonians long beat back missionaries and crusaders before falling in 1227.',
      relations: [
        { to: 'sweden', type: 'war', label: 'Oeselian sea-raids', note: 'Pirates from Saaremaa raided Sweden and the Baltic, even sacking Sigtuna in 1187 by some accounts.' },
        { to: 'denmark', type: 'war', label: 'Baltic raiding & defence', note: 'Estonian coastal raiders clashed with Danes long before the Danish crusade reached Tallinn.' },
        { to: 'russia', type: 'interaction', label: 'Novgorod & Pskov trade', note: 'Eastern counties traded and skirmished with the Rus principalities of Novgorod and Pskov.' }
      ],
      figures: [
        { name: 'Lembitu', title: 'Elder of Sakala (resistance leader)', years: 'd. 1217' }
      ]
    },
    {
      startYear: 1227,
      endYear: 1561,
      eraId: 'high-medieval',
      name: 'Terra Mariana / Livonian Order',
      modernEquivalent: false,
      government: 'Crusader confederation (Livonian Order, bishoprics, Danish crown)',
      capital: 'Reval (Tallinn) / Dorpat (Tartu)',
      religion: ['Roman Catholic Christianity'],
      culture: ['Baltic German', 'Estonian'],
      summary:
        'The Livonian Crusade subjugated the Estonians, who were divided between the German Sword-Brothers, prince-bishops, and the Danish crown in the church-state of Terra Mariana. Tallinn (Reval) and Tartu (Dorpat) flourished as Hanseatic trading towns, while the native peasantry sank into serfdom under a German-speaking elite — broken open by the great St George’s Night uprising of 1343.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Hanseatic League', note: 'Reval and Dorpat were prosperous Hanseatic ports linking Russia to the German Baltic trade.' },
        { to: 'denmark', type: 'war', label: 'Danish Estonia (1219–1346)', note: 'Valdemar II’s crusade founded Tallinn; Denmark later sold its northern Estonian lands to the Order in 1346.' },
        { to: 'russia', type: 'war', label: 'Wars with Novgorod & Pskov', note: 'The Order battled the Rus, from the 1242 Battle on the Ice to repeated Livonian frontier wars.' }
      ],
      figures: [
        { name: 'Albert of Riga', title: 'Bishop & crusade organiser', years: 'r. 1199–1229' },
        { name: 'Wolter von Plettenberg', title: 'Master of the Livonian Order', years: 'r. 1494–1535' }
      ]
    },
    {
      startYear: 1561,
      endYear: 1721,
      eraId: 'early-modern',
      name: 'Swedish Estonia',
      modernEquivalent: false,
      government: 'Province of the Swedish Empire',
      capital: 'Reval (Tallinn)',
      religion: ['Lutheran Protestantism'],
      culture: ['Swedish', 'Baltic German', 'Estonian'],
      summary:
        'As the Livonian Order collapsed, northern Estonia submitted to Sweden in 1561, and after the Livonian and Polish wars all Estonia became Swedish. Remembered as the "good old Swedish times," the era brought Lutheran schooling and the founding of Tartu (Dorpat) University in 1632 — until Russia seized the province after the Great Northern War.',
      relations: [
        { to: 'sweden', type: 'ally', label: 'Swedish realm', note: 'Estonia was a core Baltic province of the Swedish Empire for 160 years.' },
        { to: 'poland', type: 'war', label: 'Polish–Swedish wars', note: 'Sweden and Poland-Lithuania fought repeatedly over Livonia and the eastern Baltic.' },
        { to: 'russia', type: 'war', label: 'Great Northern War', note: 'Peter the Great conquered Estonia, confirmed by the Treaty of Nystad in 1721.' }
      ],
      figures: [
        { name: 'Gustavus Adolphus', title: 'King of Sweden (founded Tartu Univ.)', years: 'r. 1611–1632' },
        { name: 'Charles XII', title: 'King of Sweden (lost the Baltic)', years: 'r. 1697–1718' }
      ]
    },
    {
      startYear: 1721,
      endYear: 1918,
      eraId: 'early-modern',
      name: 'Russian Baltic Governorate',
      modernEquivalent: false,
      government: 'Governorates of the Russian Empire (Estland & northern Livland)',
      capital: 'Reval (Tallinn)',
      religion: ['Lutheran Protestantism', 'Russian Orthodox'],
      culture: ['Baltic German', 'Estonian', 'Russian'],
      summary:
        'Under the tsars the Baltic-German nobility kept its lands and privileges while the Estonian peasantry, freed from serfdom early in the 19th century, remained tied to the manor. The National Awakening — song festivals, a written literature, and the newspaper men of the 1860s–80s — forged a modern Estonian identity that survived late tsarist Russification.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'Tsarist rule & Russification', note: 'Ruled from St Petersburg; late-19th-century policy pushed Russian language and Orthodoxy.' },
        { to: 'germany', type: 'interaction', label: 'Baltic-German elite', note: 'A German-speaking nobility and burghers dominated land, church, and town life.' },
        { to: 'finland', type: 'interaction', label: 'Kindred awakening', note: 'Estonians looked to Finland’s national movement and shared Finnic culture for inspiration.' }
      ],
      figures: [
        { name: 'Friedrich Reinhold Kreutzwald', title: 'Author of the Kalevipoeg epic', years: '1803–1882' },
        { name: 'Carl Robert Jakobson', title: 'National Awakening leader & publicist', years: '1841–1882' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1940,
      eraId: 'world-wars',
      name: 'First Republic of Estonia',
      government: 'Parliamentary republic → authoritarian regime',
      capital: 'Tallinn',
      religion: ['Lutheran Protestantism'],
      culture: ['Estonian'],
      summary:
        'Estonia declared independence in February 1918 and secured it in the War of Independence, recognised by Soviet Russia in the 1920 Treaty of Tartu. A lively parliamentary democracy gave way in 1934 to the "Era of Silence," Konstantin Päts’ bloodless authoritarian turn, before the republic was crushed in 1940.',
      relations: [
        { to: 'russia', type: 'war', label: 'War of Independence (1918–20)', note: 'Estonia defeated Soviet Russia and the Baltic Germans, winning recognition at Tartu in 1920.' },
        { to: 'germany', type: 'war', label: 'Landeswehr War (1919)', note: 'Estonian forces beat the Baltic-German Landeswehr at Cēsis (Võnnu), aiding Latvia’s independence.' },
        { to: 'latvia', type: 'ally', label: 'Baltic cooperation', note: 'Estonia and Latvia coordinated defence and joined the 1934 Baltic Entente.' }
      ],
      figures: [
        { name: 'Konstantin Päts', title: 'State Elder & President', years: '1874–1956' },
        { name: 'Johan Laidoner', title: 'Commander-in-Chief in the War of Independence', years: '1884–1953' }
      ]
    },
    {
      startYear: 1940,
      endYear: 1991,
      eraId: 'world-wars',
      name: 'Soviet Occupation (Estonian SSR)',
      modernEquivalent: false,
      government: 'Soviet republic (with 1941–44 Nazi occupation)',
      capital: 'Tallinn',
      religion: ['State atheism / Lutheran'],
      culture: ['Estonian', 'Russian'],
      summary:
        'Annexed by the USSR in 1940 under the Molotov–Ribbentrop Pact, occupied by Nazi Germany in 1941–44, then re-annexed, Estonia endured mass deportations and the flight of tens of thousands. Soviet rule brought Russification and heavy industry — until the peaceful Singing Revolution of 1987–91 sang the nation back to freedom.',
      relations: [
        { to: 'russia', type: 'war', label: 'Soviet annexation & deportations', note: 'Occupied in 1940 and 1944; tens of thousands were deported to Siberia in 1941 and 1949.' },
        { to: 'germany', type: 'war', label: 'Nazi occupation (1941–44)', note: 'Germany occupied Estonia for three years before the Red Army returned.' },
        { to: 'latvia', type: 'ally', label: 'The Baltic Way (1989)', note: 'Two million Balts joined hands in a human chain across Estonia, Latvia, and Lithuania.' }
      ],
      figures: [
        { name: 'Johannes Käbin', title: 'Long-serving Estonian SSR party leader', years: 'r. 1950–1978' },
        { name: 'Arnold Rüütel', title: 'Soviet-era leader & later President', years: '1928–2024' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Estonia',
      government: 'Parliamentary republic',
      capital: 'Tallinn',
      religion: ['Secular / Lutheran'],
      culture: ['Estonian'],
      summary:
        'Independence was restored in August 1991 as the Soviet Union dissolved, and Estonia rapidly reoriented westward, joining both the European Union and NATO in 2004 and the euro in 2011. It reinvented itself as a pioneering digital state — e-residency, online voting, and "e-government" — while keeping a wary eye on its Russian neighbour.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO member', note: 'Joined the European Union and NATO in 2004 and adopted the euro in 2011.' },
        { to: 'finland', type: 'ally', label: 'Closest partner', note: 'Deep economic, cultural, and linguistic ties bind Estonia to its Finnic kin across the gulf.' },
        { to: 'russia', type: 'interaction', label: 'Wary neighbour', note: 'Relations soured over the 2007 Bronze Soldier riots and cyberattacks and Russia’s aggression in Ukraine.' }
      ],
      figures: [
        { name: 'Lennart Meri', title: 'First President of restored Estonia', years: 'r. 1992–2001' },
        { name: 'Kersti Kaljulaid', title: 'First woman President of Estonia', years: 'r. 2016–2021' }
      ]
    }
  ]
}

export default estonia
