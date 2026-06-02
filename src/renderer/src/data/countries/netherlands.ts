import type { Country } from '../countryTypes'

const netherlands: Country = {
  id: 'netherlands',
  name: 'Netherlands',
  mapNames: ['Netherlands'],
  color: '#e08a2e',
  centroid: [5.4, 52.2],
  periods: [
    {
      startYear: 0,
      endYear: 690,
      eraId: 'roman',
      name: 'Roman Batavia & Germania Inferior',
      modernEquivalent: false,
      government: 'Roman province & frontier tribes',
      capital: 'Noviomagus (Nijmegen)',
      religion: ['Germanic & Roman paganism'],
      culture: ['Batavian', 'Frisian', 'Roman'],
      summary:
        'The Rhine delta marked Rome’s northern frontier: the Batavi served as crack auxiliaries and rose in the great revolt of 69 CE, while beyond the limes the Frisians and Franks pressed in as Roman power faded.',
      relations: [
        { to: 'italy', type: 'war', label: 'The Batavian Revolt (69 CE)', note: 'Civilis led the Batavi in a fierce rising against Rome on the Rhine frontier.' },
        { to: 'germany', type: 'interaction', label: 'The Germanic frontier', note: 'The lower Rhine separated Roman territory from the free Germanic tribes.' }
      ],
      figures: [
        { name: 'Gaius Julius Civilis', title: 'Leader of the Batavian Revolt', years: 'fl. 69–70 CE' }
      ]
    },
    {
      startYear: 690,
      endYear: 1100,
      eraId: 'early-medieval',
      name: 'Frisia & the Carolingian Low Countries',
      government: 'Frisian kingdom → Frankish counties',
      capital: 'Utrecht / Dorestad',
      religion: ['Frisian paganism', 'Christianity'],
      culture: ['Frisian', 'Frankish'],
      summary:
        'The seafaring Frisians and the great trade emporium of Dorestad flourished until Charlemagne absorbed them into the Frankish realm; the Low Countries then passed into the orbit of the German Empire.',
      relations: [
        { to: 'france', type: 'war', label: 'Frankish conquest of Frisia', note: 'Charles Martel and Charlemagne subdued the pagan Frisians by 785.' },
        { to: 'germany', type: 'interaction', label: 'Into the Empire', note: 'The Low Countries fell within East Francia and then the Holy Roman Empire.' },
        { to: 'denmark', type: 'war', label: 'Viking raids on Dorestad', note: 'Norse raiders repeatedly sacked the rich emporium in the 9th century.' }
      ],
      figures: [
        { name: 'Radbod', title: 'King of the Frisians', years: 'r. c. 680–719' },
        { name: 'Saint Willibrord', title: 'Apostle to the Frisians', years: '658–739' }
      ]
    },
    {
      startYear: 1100,
      endYear: 1433,
      eraId: 'high-medieval',
      name: 'Counties of Holland & Flanders',
      government: 'Imperial & French fiefs',
      capital: 'Bruges / The Hague',
      religion: ['Roman Catholicism'],
      culture: ['Dutch', 'Flemish'],
      summary:
        'Wealthy on cloth and North Sea trade, the counties of Flanders, Holland and Brabant grew rich and turbulent — Flanders a fief of France, Holland of the Empire — until the dukes of Burgundy gathered them into one realm.',
      relations: [
        { to: 'france', type: 'war', label: 'Flanders & the French crown', note: 'Flemish towns resisted France — the Battle of the Golden Spurs (1302).' },
        { to: 'united-kingdom', type: 'interaction', label: 'The wool & cloth trade', note: 'Flemish weavers depended on English wool, binding the two economies.' },
        { to: 'germany', type: 'interaction', label: 'Imperial fiefs', note: 'Holland, Brabant and Utrecht lay within the Holy Roman Empire.' }
      ],
      figures: [
        { name: 'Floris V', title: 'Count of Holland', years: 'r. 1256–1296' },
        { name: 'Jacob van Artevelde', title: 'Ghent statesman', years: 'c. 1290–1345' }
      ]
    },
    {
      startYear: 1433,
      endYear: 1568,
      eraId: 'late-medieval',
      name: 'Burgundian & Habsburg Netherlands',
      modernEquivalent: false,
      government: 'Burgundian then Habsburg dynastic union',
      capital: 'Brussels / Mechelen',
      religion: ['Roman Catholicism'],
      culture: ['Dutch', 'Flemish', 'Burgundian'],
      summary:
        'The Dukes of Burgundy gathered the seventeen provinces of the Low Countries into one rich realm; it passed to the Habsburgs and Charles V, whose son Philip II’s rule provoked the revolt that began in 1568.',
      relations: [
        { to: 'france', type: 'war', label: 'Burgundy vs. France', note: 'The Valois dukes of Burgundy long contested power with the French crown.' },
        { to: 'spain', type: 'interaction', label: 'Into the Habsburg empire', note: 'The provinces passed through Charles V to Habsburg Spain.' },
        { to: 'austria', type: 'interaction', label: 'Habsburg inheritance', note: 'Mary of Burgundy’s marriage brought the Low Countries to the Austrian Habsburgs.' }
      ],
      figures: [
        { name: 'Philip the Good', title: 'Duke of Burgundy', years: 'r. 1419–1467' },
        { name: 'Charles V', title: 'Holy Roman Emperor (born in Ghent)', years: 'r. 1519–1556' }
      ]
    },
    {
      startYear: 1568,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Dutch Republic',
      government: 'Federal republic',
      capital: 'Amsterdam / The Hague',
      religion: ['Calvinism (Dutch Reformed)'],
      culture: ['Dutch'],
      summary: 'Born of revolt against Spain, the maritime republic of the Dutch Golden Age dominated world trade, finance, and art in the 17th century.',
      relations: [
        { to: 'spain', type: 'war', label: "Eighty Years' War", note: 'The long revolt that won Dutch independence (1568–1648).' },
        { to: 'united-kingdom', type: 'war', label: 'Anglo-Dutch Wars', note: 'Commercial naval wars for trade supremacy.' },
        { to: 'france', type: 'war', label: 'Franco-Dutch War (1672)', note: 'Survived Louis XIV’s invasion by flooding the land.' }
      ],
      figures: [{ name: 'William the Silent', title: 'Leader of the revolt', years: '1533–1584' }]
    },
    {
      startYear: 1815,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Kingdom of the Netherlands',
      government: 'Constitutional monarchy',
      capital: 'Amsterdam',
      religion: ['Protestant / Catholic / secular'],
      culture: ['Dutch'],
      summary: 'A prosperous constitutional monarchy and trading nation, a founding member of NATO and the European Communities.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & Benelux partner', note: 'Founding member of the European project.' },
        { to: 'france', type: 'ally', label: 'EU partner', note: 'Close European ally.' }
      ],
      figures: [{ name: 'Willem-Alexander', title: 'King', years: 'r. 2013–' }]
    }
  ]
}

export default netherlands
