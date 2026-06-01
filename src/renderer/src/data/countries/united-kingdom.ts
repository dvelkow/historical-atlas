import type { Country } from '../countryTypes'

const unitedKingdom: Country = {
  id: 'united-kingdom',
  name: 'United Kingdom',
  mapNames: ['United Kingdom'],
  color: '#b03b3b',
  centroid: [-1.8, 52.8],
  periods: [
    {
      startYear: 0,
      endYear: 410,
      eraId: 'roman',
      name: 'Roman Britain',
      government: 'Roman province',
      capital: 'Londinium (London)',
      religion: ['Roman polytheism', 'later Christianity'],
      culture: ['Romano-British'],
      summary:
        'Britain south of Hadrian’s Wall was a Roman province for nearly four centuries until the legions withdrew around 410.',
      relations: [],
      figures: [{ name: 'Boudica', title: 'Iceni queen (revolt)', years: 'd. c. 60/61' }]
    },
    {
      startYear: 410,
      endYear: 1066,
      eraId: 'early-medieval',
      name: 'Anglo-Saxon England',
      government: 'Kingdoms (later unified Wessex)',
      capital: 'Winchester',
      religion: ['Catholic Christianity'],
      culture: ['Anglo-Saxon'],
      summary:
        'Anglo-Saxon kingdoms emerged after Rome, resisted Viking invasions under Alfred the Great, and were unified before the Norman Conquest of 1066.',
      relations: [
        { to: 'denmark', type: 'war', label: 'Viking invasions', note: 'Danish raids and Cnut’s North Sea Empire.' }
      ],
      figures: [{ name: 'Alfred the Great', title: 'King of Wessex', years: 'r. 871–899' }]
    },
    {
      startYear: 1066,
      endYear: 1485,
      eraId: 'high-medieval',
      name: 'Kingdom of England (Plantagenet)',
      government: 'Feudal monarchy',
      capital: 'London',
      religion: ['Roman Catholicism'],
      culture: ['English', 'Anglo-Norman'],
      summary:
        'The Norman and Plantagenet kings ruled lands in France, were checked by Magna Carta (1215), and fought the Hundred Years’ War with France.',
      relations: [
        { to: 'france', type: 'war', label: "Hundred Years' War", note: 'A long dynastic war over the French crown.' }
      ],
      figures: [
        { name: 'William the Conqueror', title: 'King of England', years: 'r. 1066–1087' },
        { name: 'Henry V', title: 'King of England', years: 'r. 1413–1422' }
      ]
    },
    {
      startYear: 1485,
      endYear: 1707,
      eraId: 'early-modern',
      name: 'Tudor & Stuart England',
      government: 'Monarchy (rising Parliament)',
      capital: 'London',
      religion: ['Anglicanism (from 1534)'],
      culture: ['English'],
      summary:
        'Henry VIII’s break with Rome, Elizabeth I’s defeat of the Spanish Armada, civil war, and the founding of an overseas empire and naval power.',
      relations: [
        { to: 'spain', type: 'war', label: 'Anglo-Spanish War; the Armada (1588)', note: 'England turned back Philip II’s invasion fleet.' },
        { to: 'netherlands', type: 'war', label: 'Anglo-Dutch Wars', note: 'Commercial naval wars for trade supremacy.' }
      ],
      figures: [{ name: 'Elizabeth I', title: 'Queen of England', years: 'r. 1558–1603' }]
    },
    {
      startYear: 1707,
      endYear: 1815,
      eraId: 'early-modern',
      name: 'Kingdom of Great Britain',
      government: 'Parliamentary monarchy',
      capital: 'London',
      religion: ['Anglican / Presbyterian'],
      culture: ['British'],
      summary:
        'The union of England and Scotland built a global empire and naval supremacy, fought France across the world, and led the coalitions against Napoleon.',
      relations: [
        { to: 'france', type: 'war', label: 'Anglo-French & Napoleonic Wars', note: 'A century of wars for empire ending at Waterloo.' },
        { to: 'spain', type: 'war', label: 'Wars with Spain', note: 'Colonial and naval conflicts.' }
      ],
      figures: [{ name: 'The Duke of Wellington', title: 'General & statesman', years: '1769–1852' }]
    },
    {
      startYear: 1815,
      endYear: 1914,
      eraId: 'long-19th',
      name: 'United Kingdom (Pax Britannica)',
      government: 'Constitutional monarchy',
      capital: 'London',
      religion: ['Anglicanism (established)'],
      culture: ['British'],
      summary:
        'The foremost world power of the 19th century — the workshop of the world and ruler of the largest empire in history — balancing the European powers.',
      relations: [
        { to: 'russia', type: 'war', label: 'Crimean War (1853–56)', note: 'Checking Russian expansion toward the Ottomans.' },
        { to: 'france', type: 'ally', label: 'Entente Cordiale (1904)', note: 'Settling colonial disputes and drawing together.' }
      ],
      figures: [{ name: 'Queen Victoria', title: 'Queen & Empress', years: 'r. 1837–1901' }]
    },
    {
      startYear: 1914,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'United Kingdom (World Wars)',
      government: 'Constitutional monarchy',
      capital: 'London',
      religion: ['Anglicanism'],
      culture: ['British'],
      summary:
        'Britain and its empire fought through both world wars, standing alone against Nazi Germany in 1940 before the Allied victory of 1945.',
      relations: [
        { to: 'germany', type: 'war', label: 'Both World Wars', note: 'The Western Front, the Battle of Britain, and the Allied campaigns.' },
        { to: 'france', type: 'ally', label: 'Allied powers', note: 'Partner in the Entente and the WWII Allies.' },
        { to: 'russia', type: 'ally', label: 'Grand Alliance (WWII)', note: 'Allied with the USSR against the Axis.' }
      ],
      figures: [{ name: 'Winston Churchill', title: 'Prime Minister', years: 'r. 1940–45, 1951–55' }]
    },
    {
      startYear: 1946,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'United Kingdom (modern)',
      government: 'Constitutional monarchy',
      capital: 'London',
      religion: ['Anglican / secular'],
      culture: ['British'],
      summary:
        'A founding NATO member that decolonised, joined the European Communities in 1973, and left the EU (Brexit) in 2020 while remaining a major power.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'EU membership then Brexit', note: 'Joined in 1973, departed the EU in 2020.' },
        { to: 'russia', type: 'interaction', label: 'Cold War & after', note: 'NATO adversary of the USSR, then sanctions over Ukraine.' }
      ],
      figures: [{ name: 'Margaret Thatcher', title: 'Prime Minister', years: 'r. 1979–1990' }]
    }
  ]
}

export default unitedKingdom
