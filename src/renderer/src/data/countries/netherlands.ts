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
      startYear: 1795,
      endYear: 1815,
      eraId: 'revolutionary',
      name: 'Batavian Republic & French Rule',
      modernEquivalent: false,
      government: 'Revolutionary republic → French client kingdom → French départements',
      capital: 'The Hague / Amsterdam',
      religion: ['Calvinism / Catholicism (disestablished)'],
      culture: ['Dutch'],
      summary:
        'Dutch Patriots and invading French armies toppled the old Republic in 1795 and proclaimed the Batavian Republic; Napoleon reshaped it into the Kingdom of Holland under his brother Louis Bonaparte (1806), then annexed the Netherlands outright into the French Empire (1810–1813).',
      relations: [
        { to: 'france', type: 'interaction', label: 'French client & annexation', note: 'A sister republic, then Louis Bonaparte’s Kingdom of Holland, then absorbed into Napoleon’s France (1810).' },
        { to: 'united-kingdom', type: 'war', label: 'War with Britain', note: 'As a French satellite the Dutch lost colonies and fleets to Britain, including the defeat at Camperdown (1797).' },
        { to: 'germany', type: 'war', label: 'Liberation of 1813', note: 'Napoleon’s collapse after Leipzig let the Dutch rise and expel the French, restoring the House of Orange.' }
      ],
      figures: [
        { name: 'Louis Bonaparte', title: 'King of Holland', years: 'r. 1806–1810' },
        { name: 'Rutger Jan Schimmelpenninck', title: 'Grand Pensionary of the Batavian Commonwealth', years: 'r. 1805–1806' }
      ]
    },
    {
      startYear: 1815,
      endYear: 1914,
      eraId: 'long-19th',
      name: 'Kingdom of the Netherlands',
      government: 'Constitutional monarchy',
      capital: 'Amsterdam / The Hague',
      religion: ['Protestant / Catholic'],
      culture: ['Dutch'],
      summary:
        'The Congress of Vienna created the United Kingdom of the Netherlands under William I (1815), joining the Dutch and Belgian provinces; Belgium seceded (1830–39), Thorbecke’s 1848 constitution forged a true parliamentary monarchy, and a vast colonial empire in the East Indies underwrote a prosperous, neutral nation.',
      relations: [
        { to: 'belgium', type: 'war', label: 'Belgian secession (1830–39)', note: 'The southern provinces revolted and broke away to form independent Belgium.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Vienna settlement & free trade', note: 'Britain backed the new kingdom as a buffer against France and shared in its global commerce.' },
        { to: 'germany', type: 'interaction', label: 'Customs & the Rhine trade', note: 'Growing economic ties bound Dutch ports to the industrialising German hinterland.' }
      ],
      figures: [
        { name: 'William I', title: 'First King of the Netherlands', years: 'r. 1815–1840' },
        { name: 'Johan Thorbecke', title: 'Liberal statesman (1848 constitution)', years: '1798–1872' },
        { name: 'Wilhelmina', title: 'Queen of the Netherlands', years: 'r. 1890–1948' }
      ]
    },
    {
      startYear: 1914,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'The World Wars',
      modernEquivalent: false,
      government: 'Constitutional monarchy (occupied 1940–45)',
      capital: 'Amsterdam / The Hague',
      religion: ['Protestant / Catholic'],
      culture: ['Dutch'],
      summary:
        'The Netherlands stayed neutral through the First World War, but Nazi Germany invaded in May 1940; five years of brutal occupation followed, marked by the deportation and murder of most Dutch Jews and the famine of the Hunger Winter of 1944–45 before liberation.',
      relations: [
        { to: 'germany', type: 'war', label: 'Invasion & occupation (1940–45)', note: 'Germany overran the neutral Netherlands in 1940 and occupied it until 1945; Rotterdam was devastated by bombing.' },
        { to: 'united-kingdom', type: 'ally', label: 'Allied liberation', note: 'British, Canadian and American forces freed the country, including the airborne battle at Arnhem (1944).' },
        { to: 'belgium', type: 'interaction', label: 'Shared occupation & exile', note: 'Both Low Countries were overrun in 1940, their governments fleeing into exile in London.' }
      ],
      figures: [
        { name: 'Wilhelmina', title: 'Queen-in-exile during WWII', years: 'r. 1890–1948' },
        { name: 'Anne Frank', title: 'Diarist of the occupation', years: '1929–1945' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1992,
      eraId: 'cold-war',
      name: 'Postwar & Decolonization',
      government: 'Constitutional monarchy',
      capital: 'Amsterdam / The Hague',
      religion: ['Protestant / Catholic / secular'],
      culture: ['Dutch'],
      summary:
        'After liberation the Netherlands lost its great colony when Indonesia won independence (1949); it became a founding member of NATO and the EEC, rebuilt under a generous welfare state, and after the catastrophic North Sea flood of 1953 raised the colossal Delta Works to hold back the sea.',
      relations: [
        { to: 'belgium', type: 'ally', label: 'The Benelux union', note: 'With Belgium and Luxembourg the Dutch formed the Benelux customs union, a model for European integration.' },
        { to: 'germany', type: 'ally', label: 'EEC & NATO founder', note: 'A founding member of the European Communities (1957) and of NATO (1949) alongside West Germany.' },
        { to: 'luxembourg', type: 'ally', label: 'Benelux partner', note: 'Tied to Luxembourg through Benelux and the early European project.' },
        { to: 'united-kingdom', type: 'ally', label: 'Western alliance', note: 'A close Cold War partner within NATO against the Soviet bloc.' }
      ],
      figures: [
        { name: 'Juliana', title: 'Queen of the Netherlands', years: 'r. 1948–1980' },
        { name: 'Beatrix', title: 'Queen of the Netherlands', years: 'r. 1980–2013' }
      ]
    },
    {
      startYear: 1992,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Modern Netherlands',
      government: 'Constitutional monarchy',
      capital: 'Amsterdam / The Hague',
      religion: ['Secular / Protestant / Catholic'],
      culture: ['Dutch'],
      summary:
        'The Maastricht Treaty, signed in the Dutch city of Maastricht in 1992, launched the European Union; the Netherlands became a core eurozone and EU member, with Rotterdam standing as Europe’s greatest port and a gateway to the continent.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & eurozone partner', note: 'A founding eurozone member tightly integrated with Germany, its largest trading partner.' },
        { to: 'belgium', type: 'ally', label: 'Benelux & EU neighbour', note: 'Continued close cooperation through Benelux and the European Union.' },
        { to: 'france', type: 'ally', label: 'European Union core', note: 'A central partner in the EU and the single market.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Trade & Brexit', note: 'A major trading partner whose departure from the EU (Brexit) reshaped North Sea commerce.' }
      ],
      figures: [
        { name: 'Beatrix', title: 'Queen of the Netherlands', years: 'r. 1980–2013' },
        { name: 'Willem-Alexander', title: 'King of the Netherlands', years: 'r. 2013–' }
      ]
    }
  ]
}

export default netherlands
