import type { Country } from '../countryTypes'

const serbia: Country = {
  id: 'serbia',
  name: 'Serbia',
  mapNames: ['Serbia'],
  color: '#a8403a',
  centroid: [20.8, 44],
  periods: [
    {
      startYear: 780,
      endYear: 1217,
      eraId: 'early-medieval',
      name: 'Medieval Serbian Principality',
      government: 'Tribal principalities → grand principality',
      capital: 'Ras',
      religion: ['Slavic paganism → Orthodox Christianity'],
      culture: ['Serbian', 'Slavic'],
      summary:
        'Early Serbian polities took shape in the Byzantine shadow, accepting Christianity in the 9th century; by the 1160s Stefan Nemanja united the lands and founded the Nemanjić dynasty that would carry Serbia to greatness.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Byzantine overlordship', note: 'Early Serbian princes acknowledged Constantinople’s suzerainty and drew their faith and culture from it.' },
        { to: 'bulgaria', type: 'war', label: 'Balkan rivalry', note: 'Serbs and Bulgarians contested the central Balkans through the early medieval centuries.' },
        { to: 'hungary', type: 'war', label: 'Northern frontier', note: 'The expanding Hungarian kingdom pressed on Serbia’s Danube and Sava borders.' }
      ],
      figures: [
        { name: 'Stefan Nemanja', title: 'Grand Prince, dynastic founder', years: 'r. c. 1166–1196' },
        { name: 'Saint Sava', title: 'First Serbian archbishop', years: '1175–1236' }
      ]
    },
    {
      startYear: 1217,
      endYear: 1459,
      eraId: 'high-medieval',
      name: 'Serbian Kingdom & Empire',
      government: 'Kingdom → empire → fragmented despotate',
      capital: 'Skopje / Prizren / Kruševac',
      religion: ['Orthodox Christianity'],
      culture: ['Serbian'],
      summary:
        'Crowned a kingdom in 1217, Serbia reached its zenith under Tsar Stefan Dušan, whose empire dominated the Balkans — but defeat at Kosovo in 1389 opened the way to Ottoman conquest, completed in 1459.',
      relations: [
        { to: 'greece', type: 'war', label: 'Byzantine rival', note: 'Dušan seized vast Byzantine lands and proclaimed himself emperor of the Serbs and Greeks.' },
        { to: 'bulgaria', type: 'war', label: 'Balkan wars', note: 'Serbia clashed with Bulgaria for primacy over the medieval Balkans.' },
        { to: 'turkey', type: 'war', label: 'Ottoman conquest', note: 'The Battle of Kosovo (1389) and the fall of Smederevo (1459) ended Serbian independence.' },
        { to: 'hungary', type: 'war', label: 'Border wars', note: 'Serbia fought and later leaned on Hungary along its northern frontier against the Ottomans.' }
      ],
      figures: [
        { name: 'Stefan Dušan', title: 'Tsar of the Serbs and Greeks', years: 'r. 1331–1355' },
        { name: 'Prince Lazar', title: 'Ruler who fell at Kosovo', years: 'r. 1373–1389' }
      ]
    },
    {
      startYear: 1459,
      endYear: 1804,
      eraId: 'early-modern',
      name: 'Ottoman Serbia',
      modernEquivalent: false,
      government: 'Ottoman province (sanjak/pashalik)',
      capital: 'Belgrade (Ottoman)',
      religion: ['Orthodox Christianity', 'Islam'],
      culture: ['Serbian'],
      summary:
        'For nearly 350 years Serbia lay under Ottoman rule, its Orthodox identity preserved by the Patriarchate of Peć and by hajduk rebels, while Habsburg–Ottoman wars repeatedly swept across its soil.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Ottoman rule', note: 'Serbia was governed from Istanbul, its Christian peasantry bound to Ottoman lords.' },
        { to: 'austria', type: 'war', label: 'Habsburg–Ottoman wars', note: 'Repeated Austrian campaigns reached Belgrade, briefly holding northern Serbia in the 18th century.' }
      ],
      figures: [
        { name: 'Patriarch Makarije Sokolović', title: 'Restorer of the Peć Patriarchate', years: 'r. 1557–1571' }
      ]
    },
    {
      startYear: 1804,
      endYear: 1918,
      eraId: 'revolutionary',
      name: 'Principality & Kingdom of Serbia',
      government: 'Autonomous principality → independent kingdom',
      capital: 'Belgrade',
      religion: ['Orthodox Christianity'],
      culture: ['Serbian'],
      summary:
        'The uprisings of 1804 and 1815 won autonomy, full independence followed in 1878, and the kingdom expanded in the Balkan Wars — before the assassination at Sarajevo in 1914 made Serbia the spark of the First World War.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Independence wars', note: 'The Serbian uprisings against Ottoman rule led to autonomy and, in 1878, recognised independence.' },
        { to: 'austria', type: 'war', label: '1914 ultimatum & WWI', note: 'Austria-Hungary’s ultimatum after the Sarajevo assassination triggered the First World War.' },
        { to: 'bulgaria', type: 'war', label: 'Balkan Wars', note: 'Serbia and Bulgaria, allies in 1912, fought each other over Macedonia in 1913.' },
        { to: 'russia', type: 'ally', label: 'Slavic Orthodox patron', note: 'Russia backed Serbia as a fellow Orthodox Slav state against Austria and the Ottomans.' }
      ],
      figures: [
        { name: 'Karađorđe Petrović', title: 'Leader of the First Uprising', years: 'r. 1804–1813' },
        { name: 'Peter I', title: 'King of Serbia', years: 'r. 1903–1918' }
      ]
    },
    {
      startYear: 1918,
      endYear: 2025,
      eraId: 'world-wars',
      name: 'Yugoslavia & Modern Serbia',
      modernEquivalent: false,
      government: 'Kingdom of Yugoslavia → socialist federation → republic',
      capital: 'Belgrade',
      religion: ['Orthodox Christianity / secular'],
      culture: ['Serbian', 'Yugoslav'],
      summary:
        'Serbia anchored the Kingdom of Yugoslavia and Tito’s socialist federation; its violent breakup in the 1990s left an independent Republic of Serbia that today balances ties to Russia with a path toward the EU.',
      relations: [
        { to: 'russia', type: 'ally', label: 'Slavic Orthodox ally', note: 'Russia remained Serbia’s closest great-power partner through the Yugoslav wars and after.' },
        { to: 'germany', type: 'war', label: 'WWII occupation & EU path', note: 'Nazi Germany occupied Serbia in 1941; today Germany is a key partner on Serbia’s EU accession route.' },
        { to: 'greece', type: 'ally', label: 'Orthodox ally', note: 'Greece stayed a sympathetic Orthodox neighbour and EU advocate for Serbia.' },
        { to: 'bulgaria', type: 'interaction', label: 'Balkan neighbour', note: 'Relations with neighbouring Bulgaria shifted from wartime foe to regional partner.' }
      ],
      figures: [
        { name: 'Josip Broz Tito', title: 'Leader of socialist Yugoslavia', years: 'r. 1945–1980' },
        { name: 'Slobodan Milošević', title: 'President during the breakup wars', years: 'r. 1989–2000' }
      ]
    }
  ]
}

export default serbia
