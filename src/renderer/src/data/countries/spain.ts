import type { Country } from '../countryTypes'

const spain: Country = {
  id: 'spain',
  name: 'Spain',
  mapNames: ['Spain'],
  color: '#c79a3a',
  centroid: [-3.7, 40.2],
  periods: [
    {
      startYear: 0,
      endYear: 472,
      eraId: 'roman',
      name: 'Roman Hispania',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Tarraco / Corduba',
      religion: ['Roman polytheism', 'later Christianity'],
      culture: ['Hispano-Roman'],
      summary:
        'A wealthy, thoroughly Romanised peninsula that gave Rome emperors such as Trajan and Hadrian, before Vandals, Suebi and Visigoths crossed the Pyrenees.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'A favoured Roman province', note: 'Hispania gave Rome emperors (Trajan, Hadrian), olive oil and silver.' },
        { to: 'germany', type: 'war', label: 'Germanic invasions', note: 'Vandals and Suebi overran the peninsula in the 5th century.' },
        { to: 'france', type: 'interaction', label: 'Neighbour across the Pyrenees', note: 'Linked to Roman Gaul by road and trade.' }
      ],
      figures: [
        { name: 'Trajan', title: 'Roman Emperor (b. Hispania)', years: 'r. 98–117' },
        { name: 'Hadrian', title: 'Roman Emperor (b. Hispania)', years: 'r. 117–138' }
      ]
    },
    {
      startYear: 472,
      endYear: 711,
      eraId: 'early-medieval',
      name: 'Visigothic Hispania',
      modernEquivalent: false,
      government: 'Germanic kingdom',
      capital: 'Toledo',
      religion: ['Arian then Catholic Christianity'],
      culture: ['Visigothic', 'Hispano-Roman'],
      summary:
        'The Visigoths built a kingdom across Iberia from their capital at Toledo, converting from Arianism to Catholicism under Reccared (589) and nurturing scholars like Isidore of Seville — until the Umayyad invasion of 711 swept it away.',
      relations: [
        { to: 'france', type: 'war', label: 'Franks drive out the Goths', note: 'Clovis’s victory at Vouillé (507) pushed the Visigoths from Gaul into Iberia.' },
        { to: 'italy', type: 'war', label: 'Byzantine Spania', note: 'Justinian’s Byzantines held a southern coastal province until c. 624.' },
        { to: 'germany', type: 'interaction', label: 'A Germanic successor kingdom', note: 'One of the Arian Germanic realms born from Rome’s fall.' }
      ],
      figures: [
        { name: 'Reccared I', title: 'King (converted to Catholicism)', years: 'r. 586–601' },
        { name: 'Isidore of Seville', title: 'Scholar & archbishop', years: 'c. 560–636' }
      ]
    },
    {
      startYear: 711,
      endYear: 1492,
      eraId: 'high-medieval',
      name: 'Al-Andalus & the Reconquista',
      government: 'Muslim emirates & Christian kingdoms',
      capital: 'Córdoba / Toledo',
      religion: ['Islam', 'Roman Catholicism', 'Judaism'],
      culture: ['Andalusi', 'Castilian', 'Aragonese'],
      summary:
        'Muslim Iberia (Al-Andalus) was a centre of learning while the Christian kingdoms pushed south in the centuries-long Reconquista, completed at Granada in 1492.',
      relations: [
        { to: 'france', type: 'war', label: 'Battle of Tours (732)', note: 'Charles Martel halted the Umayyad advance into Francia.' },
        { to: 'portugal', type: 'war', label: 'The Reconquista', note: 'The Christian advance south birthed Portugal (Ourique, 1139) and pressed Al-Andalus.' },
        { to: 'italy', type: 'interaction', label: 'The Mediterranean Muslim world', note: 'Ties of trade and learning across Sicily and the Maghreb.' }
      ],
      figures: [
        { name: 'Abd al-Rahman III', title: 'Caliph of Córdoba', years: 'r. 929–961' },
        { name: 'Isabella I of Castile', title: 'Queen', years: 'r. 1474–1504' }
      ]
    },
    {
      startYear: 1492,
      endYear: 1700,
      eraId: 'early-modern',
      name: 'Habsburg Spain',
      government: 'Composite monarchy (Habsburg)',
      capital: 'Madrid',
      religion: ['Roman Catholicism'],
      culture: ['Spanish'],
      summary:
        'Funded by American silver, Spain became the first global empire and champion of the Counter-Reformation under Charles V and Philip II.',
      relations: [
        { to: 'france', type: 'war', label: 'Habsburg–Valois & Bourbon wars', note: 'A long struggle for European dominance.' },
        { to: 'netherlands', type: 'war', label: "Eighty Years' War", note: 'The Dutch revolt against Spanish rule (1568–1648).' },
        { to: 'united-kingdom', type: 'war', label: 'Anglo-Spanish War; Armada (1588)', note: 'The failed invasion of Elizabethan England.' },
        { to: 'germany', type: 'ally', label: 'Habsburg compact', note: 'Coordination with the Austrian Habsburgs.' }
      ],
      figures: [{ name: 'Philip II', title: 'King of Spain', years: 'r. 1556–1598' }]
    },
    {
      startYear: 1700,
      endYear: 1808,
      eraId: 'early-modern',
      name: 'Bourbon Spain',
      government: 'Monarchy (Bourbon)',
      capital: 'Madrid',
      religion: ['Roman Catholicism'],
      culture: ['Spanish'],
      summary:
        'After the War of the Spanish Succession the Bourbons reformed the state, though Spain’s relative power declined behind Britain and France.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Colonial & naval wars', note: 'Conflicts over empire and trade.' },
        { to: 'france', type: 'ally', label: 'Bourbon Family Compacts', note: 'Dynastic alliance of the French and Spanish Bourbons.' }
      ],
      figures: [{ name: 'Charles III', title: 'King of Spain', years: 'r. 1759–1788' }]
    },
    {
      startYear: 1808,
      endYear: 1939,
      eraId: 'long-19th',
      name: 'Constitutional Spain',
      government: 'Monarchy / republics (turbulent)',
      capital: 'Madrid',
      religion: ['Roman Catholicism'],
      culture: ['Spanish'],
      summary:
        'The Peninsular War, loss of the American empire, and chronic instability culminated in the Spanish Civil War (1936–39).',
      relations: [
        { to: 'france', type: 'war', label: 'Peninsular War (1808–14)', note: 'Spanish resistance to Napoleon’s occupation.' }
      ],
      figures: [{ name: 'Francisco Goya', title: 'Painter & chronicler', years: '1746–1828' }]
    },
    {
      startYear: 1975,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Kingdom of Spain (democracy)',
      government: 'Constitutional monarchy',
      capital: 'Madrid',
      religion: ['Catholic / secular'],
      culture: ['Spanish'],
      summary:
        'After Franco’s death Spain transitioned to democracy, joined the European Communities (1986), and became a modern EU member.',
      relations: [
        { to: 'france', type: 'ally', label: 'EU partner', note: 'Fellow member of the European Union.' },
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Integrated into the EU single market and eurozone.' }
      ],
      figures: [{ name: 'Juan Carlos I', title: 'King (transition)', years: 'r. 1975–2014' }]
    }
  ]
}

export default spain
