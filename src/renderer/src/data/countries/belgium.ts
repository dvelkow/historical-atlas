import type { Country } from '../countryTypes'

const belgium: Country = {
  id: 'belgium',
  name: 'Belgium',
  mapNames: ['Belgium'],
  color: '#9a8a3a',
  centroid: [4.5, 50.6],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Gallia Belgica',
      modernEquivalent: false,
      government: 'Roman province',
      capital: 'Durocortorum (Reims) / Tongeren',
      religion: ['Celtic & Roman paganism'],
      culture: ['Belgic Gaul', 'Roman'],
      summary:
        'Caesar called the Belgae the bravest of the Gauls; their lands became the Roman province of Gallia Belgica, a prosperous frontier region until the Franks crossed the Rhine as Roman power collapsed.',
      relations: [
        { to: 'italy', type: 'war', label: 'Caesar’s conquest of the Belgae', note: 'Ambiorix wiped out a Roman legion before Caesar subdued the Belgic tribes.' },
        { to: 'france', type: 'interaction', label: 'Part of Roman Gaul', note: 'Gallia Belgica was one of the great provinces of Roman Gaul.' }
      ],
      figures: [
        { name: 'Ambiorix', title: 'Eburones chieftain vs. Caesar', years: 'fl. 54 BCE' }
      ]
    },
    {
      startYear: 476,
      endYear: 1384,
      eraId: 'early-medieval',
      name: 'Frankish Heartland & Medieval Principalities',
      modernEquivalent: false,
      government: 'Frankish core, then feudal counties & duchies',
      capital: 'Liège / Bruges',
      religion: ['Roman Catholicism'],
      culture: ['Flemish', 'Walloon', 'Frankish'],
      summary:
        'The region was the cradle of the Frankish kings and Charlemagne’s dynasty; after the empire split it fragmented into the wealthy county of Flanders, the duchy of Brabant and the prince-bishopric of Liège, straddling the French and German realms.',
      relations: [
        { to: 'france', type: 'war', label: 'Flanders, a turbulent French fief', note: 'The rich Flemish towns repeatedly defied the French crown — the Golden Spurs (1302).' },
        { to: 'germany', type: 'interaction', label: 'Lower Lotharingia in the Empire', note: 'Brabant and Liège lay within the Holy Roman Empire.' },
        { to: 'netherlands', type: 'interaction', label: 'The shared Low Countries', note: 'Bound to the northern provinces by trade, language and the cloth economy.' }
      ],
      figures: [
        { name: 'Godfrey of Bouillon', title: 'Leader of the First Crusade', years: 'c. 1060–1100' },
        { name: 'Jacob van Artevelde', title: 'Ghent statesman', years: 'c. 1290–1345' }
      ]
    },
    {
      startYear: 1384,
      endYear: 1714,
      eraId: 'late-medieval',
      name: 'Burgundian & Spanish Netherlands',
      modernEquivalent: false,
      government: 'Burgundian then Habsburg dynastic lands',
      capital: 'Brussels',
      religion: ['Roman Catholicism'],
      culture: ['Flemish', 'Walloon', 'Burgundian'],
      summary:
        'The wealthy southern Low Countries — Flanders and Brabant — were gathered by the Dukes of Burgundy, inherited by Habsburg Spain, and kept Catholic when the northern Dutch broke away in revolt.',
      relations: [
        { to: 'spain', type: 'interaction', label: 'Habsburg Spanish rule', note: 'After 1556 the southern provinces were governed from Madrid as the Spanish Netherlands.' },
        { to: 'netherlands', type: 'war', label: 'Split in the Dutch Revolt', note: 'The Catholic south stayed loyal to Spain while the Protestant north won independence.' },
        { to: 'france', type: 'war', label: 'Louis XIV’s wars of conquest', note: 'French armies repeatedly invaded, seizing Lille and other border towns.' }
      ],
      figures: [
        { name: 'Charles V', title: 'Holy Roman Emperor (born in Ghent)', years: 'r. 1519–1556' }
      ]
    },
    {
      startYear: 1714,
      endYear: 1794,
      eraId: 'early-modern',
      name: 'Austrian Netherlands',
      modernEquivalent: false,
      government: 'Habsburg crown land',
      capital: 'Brussels',
      religion: ['Roman Catholicism'],
      culture: ['Flemish', 'Walloon'],
      summary:
        'Transferred to the Austrian Habsburgs after the War of the Spanish Succession, the provinces were prosperous but restless under Vienna’s reforms before revolutionary France swept them away.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg rule from Vienna', note: 'Governed as a distant Austrian possession after the 1713 settlement.' },
        { to: 'france', type: 'war', label: 'Revolutionary annexation', note: 'French armies overran the territory and annexed it in 1794–1795.' }
      ],
      figures: [
        { name: 'Maria Theresa', title: 'Habsburg sovereign', years: 'r. 1740–1780' }
      ]
    },
    {
      startYear: 1794,
      endYear: 1830,
      eraId: 'revolutionary',
      name: 'French & Dutch Rule',
      modernEquivalent: false,
      government: 'French départements then Dutch kingdom',
      capital: '— (ruled from Paris, later The Hague)',
      religion: ['Roman Catholicism'],
      culture: ['Flemish', 'Walloon'],
      summary:
        'Annexed by revolutionary France and reshaped into départements, the region was merged in 1815 into the United Kingdom of the Netherlands — an unhappy union that broke apart in the 1830 revolution.',
      relations: [
        { to: 'france', type: 'war', label: 'Annexation by France', note: 'Incorporated directly into the French Republic and Empire from 1795.' },
        { to: 'netherlands', type: 'war', label: 'Forced union & 1830 revolt', note: 'Bound into the Dutch kingdom until Brussels rose in revolution to win independence.' }
      ],
      figures: [
        { name: 'William I', title: 'King of the United Netherlands', years: 'r. 1815–1840' }
      ]
    },
    {
      startYear: 1830,
      endYear: 2025,
      eraId: 'long-19th',
      name: 'Kingdom of Belgium',
      government: 'Constitutional monarchy',
      capital: 'Brussels',
      religion: ['Roman Catholicism', 'secular'],
      culture: ['Flemish', 'Walloon'],
      summary:
        'Independent from 1830 under guaranteed neutrality, Belgium became an early industrial powerhouse and the seat of Leopold II’s brutal Congo regime, was invaded by Germany in both World Wars, and hosts the headquarters of the EU and NATO in Brussels.',
      relations: [
        { to: 'netherlands', type: 'ally', label: 'Separation & Benelux', note: 'Split from the Dutch kingdom in 1830, later a founding Benelux partner.' },
        { to: 'germany', type: 'war', label: 'WWI & WWII invasions', note: 'German armies overran neutral Belgium in 1914 and again in 1940.' },
        { to: 'united-kingdom', type: 'ally', label: '1839 guarantor of neutrality', note: 'Britain guaranteed Belgian neutrality by the Treaty of London.' },
        { to: 'france', type: 'ally', label: 'Close European ally', note: 'A founding partner in NATO and the European Communities alongside France.' }
      ],
      figures: [
        { name: 'Leopold I', title: 'First King of the Belgians', years: 'r. 1831–1865' },
        { name: 'Leopold II', title: 'King and ruler of the Congo Free State', years: 'r. 1865–1909' }
      ]
    }
  ]
}

export default belgium
