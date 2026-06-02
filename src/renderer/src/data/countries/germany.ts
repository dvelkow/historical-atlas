import type { Country } from '../countryTypes'

const germany: Country = {
  id: 'germany',
  name: 'Germany',
  mapNames: ['Germany'],
  color: '#b8902f',
  centroid: [10.4, 51.2],
  periods: [
    {
      startYear: 0,
      endYear: 481,
      eraId: 'roman',
      name: 'Germania',
      modernEquivalent: false,
      government: 'Tribal confederations',
      religion: ['Germanic paganism'],
      culture: ['Germanic'],
      summary:
        'The free Germanic tribes east of the Rhine resisted Roman conquest, annihilating three legions at the Teutoburg Forest (9 CE) and later spilling into the empire.',
      relations: [
        { to: 'italy', type: 'war', label: 'Teutoburg & the Marcomannic Wars', note: 'Germanic tribes destroyed three legions in 9 CE and later pressed the Roman frontier.' },
        { to: 'france', type: 'war', label: 'Rhine frontier wars', note: 'Endless skirmishing with Roman Gaul along the Rhine and Danube.' },
        { to: 'spain', type: 'interaction', label: 'The great migrations', note: 'Vandals and Suebi swept through Gaul into Roman Hispania.' }
      ],
      figures: [
        { name: 'Arminius', title: 'Cheruscan war leader', years: 'c. 18 BCE – 21 CE' },
        { name: 'Alaric I', title: 'Visigothic king (sacked Rome 410)', years: 'r. 395–410' }
      ]
    },
    {
      startYear: 481,
      endYear: 962,
      eraId: 'early-medieval',
      name: 'East Francia',
      government: 'Frankish kingdom',
      capital: 'Aachen',
      religion: ['Catholic Christianity'],
      culture: ['Frankish', 'German'],
      summary:
        'Part of Charlemagne’s empire, the eastern Frankish lands split off at Verdun (843) and coalesced into the German kingdom under the Ottonians.',
      relations: [
        { to: 'france', type: 'interaction', label: 'Treaty of Verdun (843)', note: 'The shared Carolingian inheritance divided East from West Francia.' },
        { to: 'hungary', type: 'war', label: 'Battle of Lechfeld (955)', note: 'Otto I broke the Magyar raids, securing the German lands.' },
        { to: 'italy', type: 'interaction', label: 'Revival of the Empire (962)', note: 'Otto I was crowned emperor in Rome, founding the Holy Roman Empire.' }
      ],
      figures: [
        { name: 'Henry the Fowler', title: 'First Saxon king', years: 'r. 919–936' },
        { name: 'Otto I', title: 'King & Emperor', years: 'r. 936–973' }
      ]
    },
    {
      startYear: 962,
      endYear: 1517,
      eraId: 'high-medieval',
      name: 'Holy Roman Empire',
      modernEquivalent: false,
      government: 'Elective monarchy / confederation',
      capital: 'Itinerant (Aachen, Nuremberg, Prague)',
      religion: ['Roman Catholicism'],
      culture: ['German'],
      summary:
        'A vast, decentralised confederation of German principalities under an elected emperor, locked in a long contest with the Papacy over supremacy in Christendom.',
      relations: [
        { to: 'italy', type: 'war', label: 'Imperial campaigns in Italy', note: 'Emperors repeatedly intervened in Italy and clashed with the Papacy.' },
        { to: 'france', type: 'interaction', label: 'Rivalry over the Rhine', note: 'Competition with the French crown along the western frontier.' }
      ],
      figures: [{ name: 'Frederick Barbarossa', title: 'Holy Roman Emperor', years: 'r. 1155–1190' }]
    },
    {
      startYear: 1517,
      endYear: 1648,
      eraId: 'early-modern',
      name: 'Reformation Germany',
      government: 'Holy Roman Empire (fragmented)',
      capital: 'Vienna (imperial)',
      religion: ['Catholic & Lutheran'],
      culture: ['German'],
      summary:
        'Luther’s Reformation split the empire along confessional lines, culminating in the catastrophic Thirty Years’ War that devastated the German lands.',
      relations: [
        { to: 'spain', type: 'ally', label: 'Habsburg compact', note: 'The Austrian and Spanish Habsburgs coordinated against France.' },
        { to: 'sweden', type: 'war', label: "Thirty Years' War", note: 'Swedish intervention ravaged the Protestant and Catholic states alike.' },
        { to: 'france', type: 'war', label: "Thirty Years' War", note: 'France backed the empire’s enemies to weaken the Habsburgs.' }
      ],
      figures: [{ name: 'Martin Luther', title: 'Reformer', years: '1483–1546' }]
    },
    {
      startYear: 1648,
      endYear: 1871,
      eraId: 'early-modern',
      name: 'Prussia & the German States',
      government: 'Kingdom of Prussia (rising)',
      capital: 'Berlin',
      religion: ['Lutheran / Catholic'],
      culture: ['German (Prussian)'],
      summary:
        'A disciplined military Prussia under Frederick the Great rose among the German states and, under Bismarck, defeated Austria and France to forge a united Germany.',
      relations: [
        { to: 'austria', type: 'war', label: 'Austro-Prussian War (1866)', note: 'Prussia ejected Austria from German affairs.' },
        { to: 'france', type: 'war', label: 'Franco-Prussian War (1870–71)', note: 'Victory over France sealed German unification.' }
      ],
      figures: [
        { name: 'Frederick the Great', title: 'King of Prussia', years: 'r. 1740–1786' },
        { name: 'Otto von Bismarck', title: 'Chancellor', years: '1815–1898' }
      ]
    },
    {
      startYear: 1871,
      endYear: 1918,
      eraId: 'world-wars',
      name: 'German Empire',
      government: 'Federal monarchy',
      capital: 'Berlin',
      religion: ['Lutheran / Catholic'],
      culture: ['German'],
      summary:
        'Industrial powerhouse and rising rival to Britain, the Kaiserreich led the Central Powers into the First World War and collapsed in revolution in 1918.',
      relations: [
        { to: 'austria', type: 'ally', label: 'Dual Alliance (1879)', note: 'The core of the Central Powers.' },
        { to: 'france', type: 'war', label: 'First World War', note: 'The Western Front, 1914–1918.' },
        { to: 'united-kingdom', type: 'war', label: 'First World War', note: 'Naval rivalry and then total war.' },
        { to: 'russia', type: 'war', label: 'Eastern Front', note: 'War with the Russian Empire until its 1917 collapse.' }
      ],
      figures: [{ name: 'Wilhelm II', title: 'German Emperor', years: 'r. 1888–1918' }]
    },
    {
      startYear: 1933,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'Nazi Germany',
      government: 'Totalitarian dictatorship',
      capital: 'Berlin',
      religion: ['(state-subordinated churches)'],
      culture: ['German'],
      summary:
        'Hitler’s expansionist Third Reich launched the Second World War and perpetrated the Holocaust before its total defeat in 1945.',
      relations: [
        { to: 'italy', type: 'ally', label: 'Pact of Steel / Axis', note: 'Alliance with Mussolini’s Italy.' },
        { to: 'russia', type: 'war', label: 'Operation Barbarossa', note: 'The invasion of the USSR — the war’s deadliest theatre.' },
        { to: 'united-kingdom', type: 'war', label: 'Second World War', note: 'The Battle of Britain and the war in the West.' },
        { to: 'france', type: 'war', label: 'Fall of France (1940)', note: 'France was overrun and occupied.' }
      ],
      figures: [{ name: 'Adolf Hitler', title: 'Führer', years: 'r. 1933–1945' }]
    },
    {
      startYear: 1949,
      endYear: 1990,
      eraId: 'cold-war',
      name: 'Divided Germany',
      government: 'Federal Republic (West) & GDR (East)',
      capital: 'Bonn / East Berlin',
      religion: ['Protestant / Catholic / atheist (East)'],
      culture: ['German'],
      summary:
        'Split between a democratic, capitalist West and a communist East along the Iron Curtain, with the Berlin Wall (1961) its starkest symbol until 1989.',
      relations: [
        { to: 'france', type: 'ally', label: 'European integration', note: 'West Germany and France built the European Communities together.' },
        { to: 'russia', type: 'interaction', label: 'Front line of the Cold War', note: 'East Germany was the USSR’s westernmost satellite.' }
      ],
      figures: [{ name: 'Konrad Adenauer', title: 'Chancellor (West)', years: 'r. 1949–1963' }]
    },
    {
      startYear: 1990,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Federal Republic of Germany',
      government: 'Federal parliamentary republic',
      capital: 'Berlin',
      religion: ['Protestant / Catholic / secular'],
      culture: ['German'],
      summary:
        'Reunified in 1990, Germany became Europe’s largest economy and the central engine of the European Union.',
      relations: [
        { to: 'france', type: 'ally', label: 'Franco-German EU engine', note: 'The core partnership of the European Union.' },
        { to: 'russia', type: 'interaction', label: 'Energy ties then sanctions', note: 'Deep gas trade gave way to confrontation after 2022.' }
      ],
      figures: [{ name: 'Angela Merkel', title: 'Chancellor', years: 'r. 2005–2021' }]
    }
  ]
}

export default germany
