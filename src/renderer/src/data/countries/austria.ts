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
      government: 'Roman provinces',
      capital: 'Carnuntum / Vindobona (Vienna)',
      religion: ['Roman polytheism'],
      culture: ['Romano-Celtic'],
      summary: 'The Danube provinces of Noricum and Pannonia guarded the empire’s frontier against the Germanic and steppe peoples.',
      relations: [],
      figures: [{ name: 'Marcus Aurelius', title: 'Emperor (campaigned here)', years: 'r. 161–180' }]
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
      summary: 'A frontier march grew into a duchy and, under the Habsburgs from 1278, the nucleus of a great dynastic power.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Within the Holy Roman Empire', note: 'A leading principality of the Empire.' }
      ],
      figures: [{ name: 'Rudolf I of Habsburg', title: 'King of the Romans', years: 'r. 1273–1291' }]
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
