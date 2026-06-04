import type { Country } from '../countryTypes'

const luxembourg: Country = {
  id: 'luxembourg',
  name: 'Luxembourg',
  mapNames: ['Luxembourg'],
  color: '#6f9ad8',
  centroid: [6.13, 49.75],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Gallia Belgica',
      modernEquivalent: false,
      government: 'Roman province',
      capital: 'Augusta Treverorum (Trier)',
      religion: ['Gallo-Roman paganism → Christianity'],
      culture: ['Treveri (Gaulish)', 'Roman'],
      summary:
        'The lands of the Celtic Treveri were folded into the Roman province of Gallia Belgica, governed from the great imperial city of Augusta Treverorum (Trier); Roman villas, roads, and vineyards laced the Moselle valley.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman Gallia Belgica', note: 'The Treveri lands were a prosperous province ruled from Rome, with Trier as a major imperial seat.' },
        { to: 'france', type: 'interaction', label: 'Heart of Roman Gaul', note: 'Part of the wider Gallic provinces straddling the Moselle and Rhine frontier.' },
        { to: 'germany', type: 'war', label: 'The Rhine frontier', note: 'Lay just behind the militarised limes facing the Germanic tribes across the Rhine.' }
      ],
      figures: [
        { name: 'Constantine the Great', title: 'Roman Emperor (resided at Trier)', years: 'r. 306–337' }
      ]
    },
    {
      startYear: 476,
      endYear: 963,
      eraId: 'early-medieval',
      name: 'Frankish Austrasia',
      modernEquivalent: false,
      government: 'Frankish kingdom / Carolingian Empire',
      capital: 'Metz / Aachen',
      religion: ['Roman Catholicism'],
      culture: ['Frankish', 'Gallo-Roman'],
      summary:
        'After Rome fell the region became part of Austrasia, the north-eastern heartland of the Merovingian and then Carolingian Franks, the cradle of Charlemagne’s dynasty before the Empire was carved up among his heirs.',
      relations: [
        { to: 'france', type: 'interaction', label: 'Frankish heartland', note: 'Part of the Frankish realm of Austrasia from which the Carolingian dynasty sprang.' },
        { to: 'germany', type: 'interaction', label: 'Carolingian core', note: 'Lay in the central lands later contested between West and East Francia.' },
        { to: 'italy', type: 'ally', label: 'Carolingians & the papacy', note: 'Frankish kings became defenders of the Roman Church and revived the Western Empire.' }
      ],
      figures: [
        { name: 'Charlemagne', title: 'King of the Franks & Emperor', years: 'r. 768–814' }
      ]
    },
    {
      startYear: 963,
      endYear: 1443,
      eraId: 'high-medieval',
      name: 'County & Duchy of Luxembourg',
      government: 'County → Duchy (within the Holy Roman Empire)',
      capital: 'Luxembourg City',
      religion: ['Roman Catholicism'],
      culture: ['Luxembourgish', 'Moselle Franconian'],
      summary:
        'Count Siegfried acquired the rocky promontory of Lucilinburhuc in 963, founding the fortress and dynasty of Luxembourg; the House of Luxembourg rose to extraordinary heights, giving the Holy Roman Empire emperors such as Henry VII and Charles IV and the crown of Bohemia.',
      relations: [
        { to: 'czechia', type: 'ally', label: 'Kings of Bohemia', note: 'The House of Luxembourg ruled Bohemia from 1310; Charles IV made Prague an imperial capital.' },
        { to: 'germany', type: 'interaction', label: 'Holy Roman emperors', note: 'Luxembourg counts became Holy Roman Emperors (Henry VII, Charles IV, Sigismund).' },
        { to: 'france', type: 'war', label: 'Franco-imperial frontier', note: 'A borderland repeatedly drawn into the wars between France and the Empire.' }
      ],
      figures: [
        { name: 'Siegfried', title: 'Count, founder of Luxembourg', years: 'r. c. 963–998' },
        { name: 'Henry VII', title: 'Count of Luxembourg & HRE Emperor', years: 'r. 1308–1313' },
        { name: 'Charles IV', title: 'HRE Emperor & King of Bohemia', years: 'r. 1346–1378' }
      ]
    },
    {
      startYear: 1443,
      endYear: 1815,
      eraId: 'early-modern',
      name: 'Burgundian & Habsburg Netherlands',
      modernEquivalent: false,
      government: 'Province of the Low Countries (Burgundian → Habsburg)',
      capital: 'Luxembourg City',
      religion: ['Roman Catholicism'],
      culture: ['Luxembourgish', 'Walloon', 'Flemish'],
      summary:
        'Passing to the Dukes of Burgundy in 1443 and then to the Spanish and Austrian Habsburgs, Luxembourg became one of the Seventeen Provinces of the Low Countries; its mighty citadel, repeatedly besieged by France, earned the fortress city the name "Gibraltar of the North" before revolutionary France annexed it.',
      relations: [
        { to: 'spain', type: 'interaction', label: 'Spanish Netherlands', note: 'Held by the Spanish Habsburgs as part of the Catholic Low Countries.' },
        { to: 'austria', type: 'interaction', label: 'Austrian Netherlands', note: 'Passed to the Austrian Habsburgs by the Treaty of Utrecht (1714).' },
        { to: 'france', type: 'war', label: 'The "Gibraltar of the North"', note: 'Louis XIV and later revolutionary France besieged and seized the great fortress.' }
      ],
      figures: [
        { name: 'Charles the Bold', title: 'Duke of Burgundy', years: 'r. 1467–1477' },
        { name: 'Charles V', title: 'Holy Roman Emperor & lord of the Low Countries', years: 'r. 1506–1555' }
      ]
    },
    {
      startYear: 1815,
      endYear: 1890,
      eraId: 'long-19th',
      name: 'Grand Duchy in union with the Netherlands',
      modernEquivalent: false,
      government: 'Grand Duchy in personal union with the Netherlands',
      capital: 'Luxembourg City',
      religion: ['Roman Catholicism'],
      culture: ['Luxembourgish'],
      summary:
        'The Congress of Vienna raised Luxembourg to a Grand Duchy in 1815, held in personal union by the Dutch king; the 1839 partition ceded the Walloon west to Belgium, and the 1867 Treaty of London settled a Prussian–French crisis by guaranteeing its perpetual neutrality.',
      relations: [
        { to: 'netherlands', type: 'interaction', label: 'Union with the Dutch crown', note: 'Ruled in personal union by the King of the Netherlands as Grand Duke (1815–1890).' },
        { to: 'belgium', type: 'interaction', label: 'The 1839 partition', note: 'Lost its French-speaking western half to newly independent Belgium.' },
        { to: 'germany', type: 'interaction', label: 'The 1867 Luxembourg Crisis', note: 'A Prussian garrison left and neutrality was guaranteed by the Treaty of London.' }
      ],
      figures: [
        { name: 'William I', title: 'King of the Netherlands & Grand Duke', years: 'r. 1815–1840' },
        { name: 'William III', title: 'King of the Netherlands & Grand Duke', years: 'r. 1849–1890' }
      ]
    },
    {
      startYear: 1890,
      endYear: 1939,
      eraId: 'world-wars',
      name: 'Independent Grand Duchy',
      government: 'Grand Duchy (constitutional monarchy)',
      capital: 'Luxembourg City',
      religion: ['Roman Catholicism'],
      culture: ['Luxembourgish'],
      summary:
        'When the Dutch crown passed to a woman in 1890, Luxembourg’s separate succession law gave it its own sovereign in the House of Nassau-Weilburg; the booming steel industry of the Minett region made the little state surprisingly wealthy, even under German occupation in the First World War.',
      relations: [
        { to: 'netherlands', type: 'interaction', label: 'End of the personal union', note: 'The shared crown ended in 1890 when Luxembourg gained its own Nassau-Weilburg dynasty.' },
        { to: 'germany', type: 'war', label: 'Occupied in WWI', note: 'German troops occupied the neutral Grand Duchy from 1914 to 1918.' },
        { to: 'belgium', type: 'ally', label: 'Economic union', note: 'Formed an economic and monetary union with Belgium (BLEU) in 1921.' }
      ],
      figures: [
        { name: 'Adolphe', title: 'First Grand Duke of the Nassau-Weilburg line', years: 'r. 1890–1905' },
        { name: 'Marie-Adélaïde', title: 'Grand Duchess', years: 'r. 1912–1919' }
      ]
    },
    {
      startYear: 1940,
      endYear: 1944,
      eraId: 'world-wars',
      name: 'German occupation',
      modernEquivalent: false,
      government: 'Nazi German military & civil administration',
      capital: 'Luxembourg City',
      religion: ['Roman Catholicism'],
      culture: ['Luxembourgish'],
      summary:
        'Nazi Germany invaded in May 1940 and soon annexed the Grand Duchy outright, imposing the German language, forced conscription into the Wehrmacht, and deportations; a 1942 general strike and quiet resistance defied the occupiers while Grand Duchess Charlotte rallied her people from exile.',
      relations: [
        { to: 'germany', type: 'war', label: 'Annexation by the Reich', note: 'Invaded and annexed in 1940, with forced conscription provoking a general strike in 1942.' },
        { to: 'united-kingdom', type: 'ally', label: 'Government in exile', note: 'Grand Duchess Charlotte broadcast to the resistance from London.' },
        { to: 'france', type: 'war', label: 'Caught in the Western Front', note: 'Overrun in the 1940 blitzkrieg and a battlefield again during the 1944 Ardennes fighting.' }
      ],
      figures: [
        { name: 'Charlotte', title: 'Grand Duchess (in exile)', years: 'r. 1919–1964' },
        { name: 'Gustav Simon', title: 'Nazi Gauleiter (occupation chief)', years: '1940–1944' }
      ]
    },
    {
      startYear: 1944,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Grand Duchy of Luxembourg',
      government: 'Grand Duchy (parliamentary democracy)',
      capital: 'Luxembourg City',
      religion: ['Roman Catholicism / secular'],
      culture: ['Luxembourgish'],
      summary:
        'Liberated in 1944, Luxembourg abandoned neutrality to become a founding member of Benelux, NATO, and the European institutions; its capital hosts the Court of Justice and other EU bodies, and the once steel-driven economy became one of the world’s great financial centres.',
      relations: [
        { to: 'belgium', type: 'ally', label: 'Benelux & the EU', note: 'A founding partner of Benelux and of the European Coal and Steel Community.' },
        { to: 'france', type: 'ally', label: 'EU founding members', note: 'Robert Schuman, born in Luxembourg, helped launch European integration alongside France.' },
        { to: 'germany', type: 'ally', label: 'European reconciliation', note: 'A founding EU member binding former adversaries; host of EU institutions.' }
      ],
      figures: [
        { name: 'Robert Schuman', title: 'EU founding father (born in Luxembourg)', years: '1886–1963' },
        { name: 'Jean-Claude Juncker', title: 'Prime Minister & EU Commission President', years: '1995–2013 (PM)' },
        { name: 'Grand Duke Henri', title: 'Grand Duke of Luxembourg', years: 'r. 2000–2025' }
      ]
    }
  ]
}

export default luxembourg
