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
        'A wealthy, thoroughly Romanised peninsula that gave Rome emperors such as Trajan and Hadrian before the Germanic migrations.',
      relations: [],
      figures: [{ name: 'Trajan', title: 'Roman Emperor (b. Hispania)', years: 'r. 98–117' }]
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
        { to: 'france', type: 'war', label: 'Battle of Tours (732)', note: 'The Umayyad advance into Francia was halted near Tours.' }
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
