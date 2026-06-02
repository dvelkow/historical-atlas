import type { Country } from '../countryTypes'

const austria: Country = {
  id: 'austria',
  name: 'Austria',
  mapNames: ['Austria'],
  color: '#caa53d',
  centroid: [14.6, 47.6],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Noricum & Pannonia',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Carnuntum / Vindobona (Vienna)',
      religion: ['Roman polytheism'],
      culture: ['Romano-Celtic'],
      summary: 'The Danube provinces of Noricum and Pannonia guarded the empire’s frontier against the Germanic and steppe peoples, their legionary towns the seeds of later cities like Vienna.',
      relations: [
        { to: 'germany', type: 'war', label: 'Marcomannic Wars', note: 'Marcus Aurelius fought the Germanic tribes along the Danube from Carnuntum.' },
        { to: 'italy', type: 'interaction', label: 'A Roman frontier province', note: 'Noricum supplied iron and soldiers to the empire’s heartland.' }
      ],
      figures: [
        { name: 'Marcus Aurelius', title: 'Emperor (campaigned here)', years: 'r. 161–180' },
        { name: 'Saint Severinus', title: 'Apostle of Noricum', years: 'c. 410–482' }
      ]
    },
    {
      startYear: 476,
      endYear: 976,
      eraId: 'early-medieval',
      name: 'Avar Pannonia & the Carolingian March',
      modernEquivalent: false,
      government: 'Migration-era duchies; Avar khaganate; Frankish march',
      capital: 'Salzburg / Lorch',
      religion: ['Christianity', 'Avar & Slavic paganism'],
      culture: ['Bavarian', 'Slavic', 'Avar'],
      summary:
        'After Rome the Danube lands passed through Ostrogoths, Lombards and Bavarians while the Avars dominated the Pannonian plain — until Charlemagne destroyed the Avar khaganate and planted the eastern march (Ostmark) that gave Austria its name, even as Magyar raids overran it.',
      relations: [
        { to: 'france', type: 'war', label: 'Charlemagne destroys the Avars', note: 'Frankish campaigns (791–803) shattered the Avar khaganate.' },
        { to: 'germany', type: 'interaction', label: 'Bavarian stem duchy & East Francia', note: 'The lands lay within Bavaria and then the East Frankish kingdom.' },
        { to: 'hungary', type: 'war', label: 'Magyar raids', note: 'Hungarian horsemen devastated the march through the 10th century.' }
      ],
      figures: [
        { name: 'Saint Rupert', title: 'Bishop of Salzburg', years: 'c. 660–710' },
        { name: 'Arnulf of Carinthia', title: 'Carolingian Emperor', years: 'r. 896–899' }
      ]
    },
    {
      startYear: 976,
      endYear: 1493,
      eraId: 'high-medieval',
      name: 'Duchy of Austria (Babenberg → Habsburg)',
      government: 'Duchy within the Holy Roman Empire',
      capital: 'Vienna',
      religion: ['Roman Catholicism'],
      culture: ['German'],
      summary: 'The eastern march grew into a duchy under the Babenbergs and, after Rudolf of Habsburg’s victory in 1278, became the nucleus of a great dynastic power straddling the Danube.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Within the Holy Roman Empire', note: 'A leading principality of the Empire, raised to a duchy in 1156.' },
        { to: 'hungary', type: 'war', label: 'Babenberg–Árpád border wars', note: 'Recurrent fighting over the Danube frontier with the Hungarian crown.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Capture of Richard the Lionheart', note: 'Duke Leopold V seized the returning English king in 1192 and held him for ransom.' }
      ],
      figures: [
        { name: 'Leopold VI', title: 'Duke of Austria', years: 'r. 1198–1230' },
        { name: 'Rudolf I of Habsburg', title: 'King of the Romans', years: 'r. 1273–1291' }
      ]
    },
    {
      startYear: 1493,
      endYear: 1804,
      eraId: 'early-modern',
      name: 'Habsburg Monarchy',
      government: 'Composite monarchy (Habsburg)',
      capital: 'Vienna',
      religion: ['Roman Catholicism'],
      culture: ['German', 'multi-ethnic'],
      summary: 'The Habsburgs amassed a multinational realm, held the imperial crown, and led the defence of Europe against the Ottomans at Vienna.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Sieges of Vienna (1529, 1683)', note: 'The Ottoman high-water mark in Europe was broken at Vienna.' },
        { to: 'spain', type: 'ally', label: 'Habsburg family compact', note: 'The Austrian and Spanish branches coordinated against France.' },
        { to: 'france', type: 'war', label: 'Habsburg–Bourbon rivalry', note: 'Centuries of rivalry with France for European dominance.' },
        { to: 'sweden', type: 'war', label: "Thirty Years' War", note: 'Swedish armies invaded the Habsburg-led empire.' }
      ],
      figures: [{ name: 'Maria Theresa', title: 'Archduchess & Empress', years: 'r. 1740–1780' }]
    },
    {
      startYear: 1804,
      endYear: 1867,
      eraId: 'long-19th',
      name: 'Austrian Empire',
      government: 'Absolute monarchy',
      capital: 'Vienna',
      religion: ['Roman Catholicism'],
      culture: ['German', 'multi-ethnic'],
      summary: 'Anchor of Metternich’s conservative order after 1815, the empire balanced a dozen nationalities while losing ground to France and Prussia.',
      relations: [
        { to: 'france', type: 'war', label: 'Napoleonic Wars', note: 'Repeated defeats including Austerlitz (1805).' },
        { to: 'italy', type: 'war', label: 'Italian wars of independence', note: 'Austria fought to hold its Italian possessions.' },
        { to: 'germany', type: 'war', label: 'Austro-Prussian War (1866)', note: 'Prussia ejected Austria from German affairs.' }
      ],
      figures: [{ name: 'Klemens von Metternich', title: 'State Chancellor', years: '1773–1859' }]
    },
    {
      startYear: 1867,
      endYear: 1918,
      eraId: 'world-wars',
      name: 'Austria-Hungary',
      modernEquivalent: false,
      government: 'Dual monarchy',
      capital: 'Vienna / Budapest',
      religion: ['Roman Catholicism'],
      culture: ['German', 'Hungarian', 'Slavic'],
      summary: 'The Dual Monarchy of many nations whose ultimatum to Serbia in 1914 triggered the First World War — and which it did not survive.',
      relations: [
        { to: 'germany', type: 'ally', label: 'Dual Alliance (1879)', note: 'The core of the Central Powers.' },
        { to: 'russia', type: 'war', label: 'First World War (Eastern Front)', note: 'Rivalry in the Balkans erupted into war.' },
        { to: 'italy', type: 'war', label: 'WWI Italian Front', note: 'Italy joined the Allies against Austria-Hungary in 1915.' }
      ],
      figures: [{ name: 'Franz Joseph I', title: 'Emperor-King', years: 'r. 1848–1916' }]
    },
    {
      startYear: 1955,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Austria',
      government: 'Federal parliamentary republic',
      capital: 'Vienna',
      religion: ['Roman Catholicism / secular'],
      culture: ['Austrian'],
      summary: 'A neutral republic after 1955, Austria prospered and joined the European Union in 1995.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Close economic and EU integration with Germany.' }
      ],
      figures: [{ name: 'Bruno Kreisky', title: 'Chancellor', years: 'r. 1970–1983' }]
    }
  ]
}

export default austria
