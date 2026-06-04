import type { Country } from '../countryTypes'

const greece: Country = {
  id: 'greece',
  name: 'Greece',
  mapNames: ['Greece'],
  color: '#6a8fd0',
  centroid: [22.5, 39.3],
  periods: [
    {
      startYear: 0,
      endYear: 330,
      eraId: 'roman',
      name: 'Roman Greece',
      modernEquivalent: false,
      government: 'Roman provinces (Achaea & Macedonia)',
      capital: 'Corinth (Achaea) / Thessalonica (Macedonia)',
      religion: ['Greek & Roman polytheism → early Christianity'],
      culture: ['Greek', 'Roman'],
      summary:
        'Conquered by Rome in the second century BCE, the Greek lands were organised into the senatorial province of Achaea and the province of Macedonia. Under the Pax Romana the cities of Athens, Corinth and Thessalonica flourished as centres of learning while Greek language and philosophy captivated their conquerors — "captive Greece took captive her fierce conqueror." Hadrian lavished buildings on Athens, and the missionary journeys of St Paul planted the first churches at Philippi, Corinth and Thessalonica.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Province of Rome', note: 'Achaea and Macedonia were Roman provinces, but Greek culture conquered Roman taste in turn.' },
        { to: 'turkey', type: 'interaction', label: 'The Greek-speaking East', note: 'Greece shared the Hellenised eastern half of the Empire with the rich cities of Asia Minor.' },
        { to: 'bulgaria', type: 'interaction', label: 'The Balkan frontier', note: 'Macedonia bordered the Thracian and Moesian lands guarding the lower Danube.' }
      ],
      figures: [
        { name: 'Hadrian', title: 'Roman Emperor & patron of Athens', years: 'r. 117–138' },
        { name: 'St Paul', title: 'Apostle to the Greeks', years: 'fl. c. 49–58' },
        { name: 'Plutarch', title: 'Greek historian & priest of Delphi', years: 'c. 46–120' }
      ]
    },
    {
      startYear: 330,
      endYear: 1204,
      eraId: 'late-antique',
      name: 'Byzantine Empire',
      modernEquivalent: false,
      government: 'Eastern Roman Empire (autocratic monarchy)',
      capital: 'Constantinople',
      religion: ['Eastern Orthodox Christianity'],
      culture: ['Greek', 'Roman', 'Byzantine'],
      summary:
        'In 330 Constantine the Great refounded the Greek colony of Byzantium as Constantinople, his "New Rome," and the Greek-speaking East became the enduring heart of the Roman world. Justinian I reconquered Italy and Africa and raised the Hagia Sophia; the Empire then weathered the Persian and Arab onslaughts before the Macedonian dynasty restored a golden age, Basil II "the Bulgar-Slayer" crushing Bulgaria in 1018. For nine centuries Byzantium guarded Orthodoxy and classical Greek learning, until the Venetian-led Fourth Crusade sacked Constantinople in 1204 and shattered the Empire.',
      relations: [
        { to: 'italy', type: 'war', label: 'Reconquest & the Fourth Crusade', note: 'Justinian retook Italy from the Goths; centuries later Venice diverted the Fourth Crusade to sack Constantinople (1204).' },
        { to: 'bulgaria', type: 'war', label: 'Byzantine–Bulgarian wars', note: 'Centuries of war for the Balkans, from Krum at the walls to Basil II’s conquest of Bulgaria (1018).' },
        { to: 'russia', type: 'interaction', label: 'Christianised the Rus’', note: 'Byzantium brought Orthodoxy and the Cyrillic letters to the East Slavs (988).' },
        { to: 'turkey', type: 'war', label: 'Wars with Persia & the Arabs', note: 'The Empire’s eastern frontier was held against Sasanian Persia and then the Arab caliphates.' }
      ],
      figures: [
        { name: 'Constantine the Great', title: 'Founder of Constantinople', years: 'r. 306–337' },
        { name: 'Justinian I', title: 'Emperor (reconquest & Hagia Sophia)', years: 'r. 527–565' },
        { name: 'Basil II', title: 'Emperor (the Bulgar-Slayer)', years: 'r. 976–1025' }
      ]
    },
    {
      startYear: 1204,
      endYear: 1453,
      eraId: 'high-medieval',
      name: 'Late Byzantium & Frankish Greece',
      modernEquivalent: false,
      government: 'Latin Empire & crusader states → restored Byzantine Empire',
      capital: 'Nicaea → Constantinople',
      religion: ['Eastern Orthodox & Latin Catholic'],
      culture: ['Greek', 'Frankish', 'Venetian'],
      summary:
        'The Fourth Crusade dismembered the Empire: Frankish knights and Venetians carved out the Latin Empire, the Principality of Achaea and the Duchy of Athens, while Greek successor states held out at Nicaea, Epirus and Trebizond. In 1261 Michael VIII Palaiologos of Nicaea recaptured Constantinople and founded the last imperial dynasty, the Palaiologoi. But the restored Empire, hemmed in by Latins, Serbs and the rising Ottomans and torn by civil war, dwindled to little more than its capital, which fell to Mehmed II in 1453 as Constantine XI died on the walls.',
      relations: [
        { to: 'france', type: 'war', label: 'Crusaders & the Latin Empire', note: 'Frankish knights seized Constantinople and ruled a Latin Empire and the crusader states of Greece (1204–61).' },
        { to: 'italy', type: 'war', label: 'Venetian Greece', note: 'Venice took Crete, the islands and key ports, dominating the seas around a shrinking Empire.' },
        { to: 'serbia', type: 'war', label: 'Serbian expansion', note: 'Stefan Dušan’s Serbia overran much of Byzantine Macedonia and Epirus in the 14th century.' },
        { to: 'turkey', type: 'war', label: 'Ottoman conquest (1453)', note: 'The Ottomans whittled the Empire down and stormed Constantinople in 1453.' }
      ],
      figures: [
        { name: 'Michael VIII Palaiologos', title: 'Emperor (recaptured Constantinople, 1261)', years: 'r. 1259–1282' },
        { name: 'Constantine XI Palaiologos', title: 'Last Byzantine Emperor', years: 'r. 1449–1453' }
      ]
    },
    {
      startYear: 1453,
      endYear: 1821,
      eraId: 'late-medieval',
      name: 'Ottoman Greece',
      modernEquivalent: false,
      government: 'Ottoman provinces',
      capital: '— (ruled from Constantinople)',
      religion: ['Eastern Orthodoxy under Ottoman rule'],
      culture: ['Greek'],
      summary:
        'For nearly four centuries the Greek lands lay within the Ottoman Empire, last redoubts such as Venetian Crete falling by 1669. The sultans governed their Christian subjects through the Orthodox millet, and the Ecumenical Patriarch of Constantinople became guardian of a Greek identity bound to faith and language. In the mountains the klephts and armatoloi kept up armed resistance, while abroad a prosperous diaspora and the ideas of the Greek Enlightenment — championed by scholars like Adamantios Korais — and the secret Filiki Eteria prepared the ground for revolution.',
      relations: [
        { to: 'turkey', type: 'interaction', label: 'Under Ottoman rule', note: 'Greeks formed the Orthodox millet, governed through the Patriarchate of Constantinople.' },
        { to: 'italy', type: 'war', label: 'Venetian–Ottoman wars', note: 'Venice fought the Ottomans over Crete and the Morea; Crete fell in 1669.' },
        { to: 'russia', type: 'ally', label: 'Orthodox protector', note: 'Orthodox Russia stirred the Greeks against the sultan, as in the Orlov Revolt of 1770.' }
      ],
      figures: [
        { name: 'Adamantios Korais', title: 'Scholar of the Greek Enlightenment', years: '1748–1833' },
        { name: 'Rigas Feraios', title: 'Revolutionary poet & visionary', years: '1757–1798' }
      ]
    },
    {
      startYear: 1821,
      endYear: 1914,
      eraId: 'long-19th',
      name: 'Kingdom of Greece',
      government: 'Kingdom (constitutional monarchy)',
      capital: 'Nafplio → Athens',
      religion: ['Eastern Orthodoxy'],
      culture: ['Greek'],
      summary:
        'The War of Independence began in 1821, led by chieftains like Theodoros Kolokotronis; Britain, France and Russia destroyed the Ottoman–Egyptian fleet at Navarino (1827), and a sovereign Greek kingdom was recognised in 1832 under the Bavarian prince Otto. Otto was deposed in 1862 and replaced by the Danish-born George I, whose long reign saw parliamentary government take root. The dream of the "Megali Idea" — uniting all Greeks of the former Byzantine world — drove territorial expansion, crowned by the gains of the Balkan Wars (1912–13), which won Greece Macedonia, Epirus and Crete.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Independence & the Megali Idea', note: 'Won independence (1821–32) and warred repeatedly with the Ottomans to redeem Greek lands.' },
        { to: 'united-kingdom', type: 'ally', label: 'Great-power backing', note: 'Britain, France and Russia backed independence and won the Battle of Navarino (1827).' },
        { to: 'bulgaria', type: 'war', label: 'Second Balkan War (1913)', note: 'Greece and Serbia turned on Bulgaria to divide Ottoman Macedonia.' },
        { to: 'serbia', type: 'ally', label: 'Balkan League', note: 'Allied with Serbia in the Balkan Wars against the Ottomans and then Bulgaria.' }
      ],
      figures: [
        { name: 'Theodoros Kolokotronis', title: 'General of the War of Independence', years: '1770–1843' },
        { name: 'Otto of Greece', title: 'First King of Greece (Bavarian)', years: 'r. 1832–1862' },
        { name: 'George I', title: 'King of the Hellenes', years: 'r. 1863–1913' }
      ]
    },
    {
      startYear: 1914,
      endYear: 1949,
      eraId: 'world-wars',
      name: 'War, Catastrophe & Civil War',
      modernEquivalent: false,
      government: 'Kingdom / republic / dictatorship (in turmoil)',
      capital: 'Athens',
      religion: ['Eastern Orthodoxy'],
      culture: ['Greek'],
      summary:
        'The "National Schism" between the pro-Entente Eleftherios Venizelos and the neutralist King Constantine I split the nation through the First World War. Venizelos’s pursuit of the Megali Idea ended in the Asia Minor Catastrophe of 1922, when the Greek army was routed and Smyrna burned; the 1923 population exchange uprooted over a million Anatolian Greeks. Years of instability gave way to the Metaxas dictatorship (1936), then to the brutal Axis occupation of 1941–44, with its devastating famine, and finally to the Greek Civil War (1946–49) between government and communist forces.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Asia Minor Catastrophe (1919–22)', note: 'The Greco-Turkish War ended in disaster and the 1923 exchange of populations.' },
        { to: 'germany', type: 'war', label: 'Axis occupation (1941–44)', note: 'Nazi Germany led the occupation; resistance, reprisals and famine ravaged the country.' },
        { to: 'italy', type: 'war', label: 'Repulse of Mussolini (1940)', note: 'Greece threw back the Italian invasion from Albania before Germany intervened.' },
        { to: 'united-kingdom', type: 'ally', label: 'Allies & the Civil War', note: 'Fought alongside Britain; British and then American backing aided the royalists against the communists.' }
      ],
      figures: [
        { name: 'Eleftherios Venizelos', title: 'Statesman (the Megali Idea)', years: '1864–1936' },
        { name: 'Ioannis Metaxas', title: 'Dictator (the 4th of August regime)', years: 'r. 1936–1941' }
      ]
    },
    {
      startYear: 1949,
      endYear: 1974,
      eraId: 'cold-war',
      name: 'Postwar Kingdom & the Colonels',
      modernEquivalent: false,
      government: 'Constitutional monarchy → military junta',
      capital: 'Athens',
      religion: ['Eastern Orthodoxy'],
      culture: ['Greek'],
      summary:
        'Anchored firmly in the Western camp, Greece joined NATO in 1952 and rebuilt with Marshall Plan aid, enjoying rapid postwar growth under conservative governments led by Konstantinos Karamanlis. Political tension over the left and the Cyprus question festered until April 1967, when a clique of army officers seized power. The repressive junta of the Colonels crushed dissent — bloodily putting down the Athens Polytechnic uprising of 1973 — before its reckless attempt to annex Cyprus provoked the Turkish invasion of 1974 and brought the regime crashing down.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'NATO & the West', note: 'Joined NATO in 1952; American and British support underpinned the postwar order.' },
        { to: 'turkey', type: 'war', label: 'The Cyprus crisis (1974)', note: 'The junta’s coup in Cyprus triggered the Turkish invasion and partition of the island.' },
        { to: 'germany', type: 'interaction', label: 'Guest-workers & reconstruction', note: 'Hundreds of thousands of Greeks emigrated to work in West Germany’s booming economy.' }
      ],
      figures: [
        { name: 'Konstantinos Karamanlis', title: 'Conservative Prime Minister', years: 'PM 1955–1963' },
        { name: 'Georgios Papadopoulos', title: 'Leader of the Colonels’ junta', years: 'r. 1967–1973' }
      ]
    },
    {
      startYear: 1974,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Restoration of Democracy',
      government: 'Parliamentary republic',
      capital: 'Athens',
      religion: ['Eastern Orthodoxy'],
      culture: ['Greek'],
      summary:
        'The fall of the junta opened the Metapolitefsi, the transition to stable democracy. Karamanlis returned to legalise the parties and steer the country through a December 1974 referendum that abolished the monarchy, founding the Third Hellenic Republic. A new democratic constitution followed in 1975. Greece anchored itself to the West by joining the European Economic Community in 1981, the same year Andreas Papandreou’s socialist PASOK swept to power and reshaped Greek politics for a generation.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EEC accession (1981)', note: 'Greece joined the European Economic Community, binding it to Western Europe.' },
        { to: 'france', type: 'ally', label: 'European integration', note: 'France backed Greek entry into the EEC and deeper European ties.' },
        { to: 'turkey', type: 'interaction', label: 'Aegean tensions', note: 'Disputes over the Aegean and Cyprus kept the two NATO neighbours at odds.' }
      ],
      figures: [
        { name: 'Konstantinos Karamanlis', title: 'PM & President (the Metapolitefsi)', years: 'PM 1974–1980' },
        { name: 'Andreas Papandreou', title: 'Founder of PASOK & Prime Minister', years: 'PM 1981–1989' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Hellenic Republic',
      government: 'Parliamentary republic',
      capital: 'Athens',
      religion: ['Eastern Orthodoxy / secular'],
      culture: ['Greek'],
      summary:
        'A full member of the European project, Greece adopted the euro in 2001 and proudly hosted the Athens 2004 Olympic Games. But the global crash exposed unsustainable public debt, and from 2009 the country plunged into a sovereign-debt crisis; three international bailouts came tied to harsh austerity, mass unemployment and bruising clashes with creditors before Greece exited its programmes in 2018. A long-running dispute over the name of neighbouring "Macedonia" was settled by the 2018 Prespa Agreement with North Macedonia.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'The debt crisis & austerity', note: 'Germany led the eurozone creditors whose bailouts and austerity terms dominated 2009–18.' },
        { to: 'north-macedonia', type: 'interaction', label: 'The Prespa Agreement (2018)', note: 'Resolved the decades-long "Macedonia" name dispute with its northern neighbour.' },
        { to: 'turkey', type: 'interaction', label: 'Aegean & migration disputes', note: 'Continued friction over maritime borders and the routes of refugees crossing the Aegean.' }
      ],
      figures: [
        { name: 'Konstantinos Karamanlis (the younger)', title: 'Prime Minister (Athens 2004)', years: 'PM 2004–2009' },
        { name: 'Alexis Tsipras', title: 'Prime Minister (the bailout years)', years: 'PM 2015–2019' }
      ]
    }
  ]
}

export default greece
