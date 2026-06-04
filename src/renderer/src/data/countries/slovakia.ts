import type { Country } from '../countryTypes'

const slovakia: Country = {
  id: 'slovakia',
  name: 'Slovakia',
  mapNames: ['Slovakia'],
  color: '#5a52b0',
  centroid: [19.5, 48.7],
  periods: [
    {
      startYear: 0,
      endYear: 833,
      eraId: 'roman',
      name: 'Roman Frontier & Slavic Settlement',
      modernEquivalent: false,
      government: 'Roman frontier zone → tribal chiefdoms',
      capital: '— (Devín / Gerulata forts)',
      religion: ['Celtic & Germanic paganism → Slavic paganism'],
      culture: ['Celtic', 'Germanic (Quadi)', 'Roman', 'Slavic'],
      summary:
        'The Danube marked the limes of the Roman Empire, guarded by forts at Gerulata and Devín against the Germanic Quadi; as Rome withdrew, Slavs settled the Carpathian basin and, around 631, briefly united under the Frankish merchant Samo to repel Avars and Franks alike.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'The Danube limes', note: 'Roman forts such as Gerulata anchored the empire’s northern frontier on the Danube.' },
        { to: 'germany', type: 'war', label: 'Samo vs. the Franks', note: 'Samo’s Slavic union crushed King Dagobert I’s Franks at Wogastisburg (631).' },
        { to: 'austria', type: 'interaction', label: 'Shared frontier lands', note: 'The same middle-Danube borderlands later formed the Carolingian–Slavic contact zone.' }
      ],
      figures: [
        { name: 'Samo', title: 'Founder of the first Slavic union', years: 'r. c. 623–658' }
      ]
    },
    {
      startYear: 833,
      endYear: 907,
      eraId: 'early-medieval',
      name: 'Great Moravia',
      modernEquivalent: false,
      government: 'Slavic principality',
      capital: 'Nitra / Mikulčice',
      religion: ['Slavic paganism → Christianity'],
      culture: ['West Slavic (Moravian)'],
      summary:
        'The first major West Slavic state rose around Nitra and Moravia under Mojmír I and reached its height under Svatopluk I; the Byzantine missionaries Cyril and Methodius brought the Glagolitic alphabet and a Slavic liturgy, before the Magyar invasions shattered the realm around 907.',
      relations: [
        { to: 'germany', type: 'war', label: 'Frankish pressure', note: 'Great Moravia repeatedly fought East Frankish kings while resisting their overlordship.' },
        { to: 'czechia', type: 'interaction', label: 'Bohemian sub-princes', note: 'Bohemia’s dukes acknowledged Moravian supremacy under Svatopluk I.' },
        { to: 'hungary', type: 'war', label: 'Fall to the Magyars', note: 'Arriving Magyar horsemen destroyed Great Moravia around 906–907.' }
      ],
      figures: [
        { name: 'Svatopluk I', title: 'Greatest ruler of Great Moravia', years: 'r. 870–894' },
        { name: 'Saints Cyril & Methodius', title: 'Apostles to the Slavs', years: 'mission from 863' }
      ]
    },
    {
      startYear: 907,
      endYear: 1526,
      eraId: 'high-medieval',
      name: 'Kingdom of Hungary — "Upper Hungary"',
      modernEquivalent: false,
      government: 'Medieval feudal kingdom',
      capital: '— (Esztergom / Buda)',
      religion: ['Roman Catholicism'],
      culture: ['Slovak', 'Hungarian', 'German (settlers)'],
      summary:
        'Slovak lands became a core region — "Upper Hungary" — of the medieval Kingdom of Hungary, prized for its silver and gold mining towns like Kremnica and Banská Štiavnica; after the catastrophe at Mohács (1526), Pressburg (Bratislava) would become the kingdom’s capital.',
      relations: [
        { to: 'hungary', type: 'interaction', label: 'Core of the kingdom', note: 'Upper Hungary supplied much of the realm’s mineral wealth and royal mints.' },
        { to: 'czechia', type: 'war', label: 'Hussite incursions', note: 'Czech Hussite armies and the Jiskra brotherhoods campaigned across the Slovak lands in the 1400s.' },
        { to: 'austria', type: 'interaction', label: 'Habsburg neighbours', note: 'The Habsburgs of Austria pressed claims that bore fruit after 1526.' }
      ],
      figures: [
        { name: 'Matthias Corvinus', title: 'King of Hungary (founded Academia Istropolitana, Pressburg)', years: 'r. 1458–1490' }
      ]
    },
    {
      startYear: 1526,
      endYear: 1918,
      eraId: 'early-modern',
      name: 'Royal & Habsburg Hungary',
      modernEquivalent: false,
      government: 'Habsburg monarchy (Royal Hungary)',
      capital: 'Pressburg (Bratislava)',
      religion: ['Roman Catholicism', 'Lutheranism'],
      culture: ['Slovak', 'Hungarian', 'German'],
      summary:
        'As the Ottomans overran central Hungary, the Slovak lands became the heart of Habsburg "Royal Hungary" with its capital at Pressburg; the 19th-century national revival saw Ľudovít Štúr codify the modern Slovak literary language (1843), even as Magyarization pressed hard on Slovak culture.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg rule', note: 'Pressburg served as the Habsburg coronation city for Hungarian kings until 1830.' },
        { to: 'turkey', type: 'war', label: 'Ottoman wars', note: 'Royal Hungary held the front line against the Ottomans for over 150 years.' },
        { to: 'hungary', type: 'interaction', label: 'Magyarization', note: 'After the 1867 Compromise, intense Magyarization policies targeted the Slovak language.' }
      ],
      figures: [
        { name: 'Ľudovít Štúr', title: 'Codifier of literary Slovak', years: '1815–1856' },
        { name: 'Maria Theresa', title: 'Habsburg ruler of Hungary', years: 'r. 1740–1780' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1939,
      eraId: 'world-wars',
      name: 'Czechoslovakia (First Republic)',
      modernEquivalent: false,
      government: 'Democratic republic (with the Czechs)',
      capital: 'Prague (Bratislava regional)',
      religion: ['Roman Catholicism', 'Lutheranism'],
      culture: ['Slovak', 'Czech'],
      summary:
        'With the collapse of Austria-Hungary, Slovaks joined the Czechs in the new democratic Czechoslovak Republic, championed abroad by the Slovak airman-diplomat Milan Rastislav Štefánik; the union brought schools and a parliament but also Czech-centred "Czechoslovakism" that chafed against Slovak autonomists.',
      relations: [
        { to: 'czechia', type: 'ally', label: 'Czechoslovak union', note: 'Slovaks and Czechs formed a single state in 1918.' },
        { to: 'hungary', type: 'war', label: 'Border war & Slovak Soviet Republic', note: 'Hungarian Red Army forces fought over the new southern border in 1919.' },
        { to: 'france', type: 'ally', label: 'Little Entente backing', note: 'France sponsored Czechoslovakia within the interwar Little Entente.' }
      ],
      figures: [
        { name: 'Milan Rastislav Štefánik', title: 'Co-founder of Czechoslovakia', years: '1880–1919' },
        { name: 'Andrej Hlinka', title: 'Slovak autonomist priest-politician', years: '1864–1938' }
      ]
    },
    {
      startYear: 1939,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'First Slovak Republic',
      modernEquivalent: false,
      government: 'Clero-authoritarian one-party state (Axis client)',
      capital: 'Bratislava',
      religion: ['Roman Catholicism'],
      culture: ['Slovak'],
      summary:
        'After the Munich dismemberment of Czechoslovakia, a nominally independent Slovak state emerged in 1939 as a clero-authoritarian client of Nazi Germany under Jozef Tiso, complicit in deporting its Jews; in 1944 partisans and soldiers launched the Slovak National Uprising against the regime.',
      relations: [
        { to: 'germany', type: 'ally', label: 'Axis client state', note: 'Tiso’s Slovakia was a satellite of Nazi Germany and joined the invasion of the USSR.' },
        { to: 'czechia', type: 'interaction', label: 'Break-up of the union', note: 'The state was carved from Czechoslovakia after the German occupation of the Czech lands.' },
        { to: 'russia', type: 'war', label: 'Eastern Front', note: 'Slovak troops fought alongside the Wehrmacht against the Soviet Union.' }
      ],
      figures: [
        { name: 'Jozef Tiso', title: 'President (collaborationist; executed 1947)', years: 'r. 1939–1945', note: 'A Catholic priest whose regime deported Slovak Jews; tried and hanged for treason after the war.' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1992,
      eraId: 'cold-war',
      name: 'Communist Czechoslovakia',
      modernEquivalent: false,
      government: 'Communist socialist republic (federated 1969)',
      capital: 'Prague (Bratislava, Slovak Socialist Republic)',
      religion: ['State atheism / Roman Catholicism'],
      culture: ['Slovak', 'Czech'],
      summary:
        'Czechoslovakia was reunited and, after the 1948 coup, became a Soviet-bloc state; the 1968 Prague Spring — led by the Slovak reformer Alexander Dubček — was crushed by Warsaw Pact tanks but yielded a federalised state, until the 1989 Velvet Revolution swept communism away.',
      relations: [
        { to: 'czechia', type: 'ally', label: 'Federated republic', note: 'The 1969 federation created a Czech and a Slovak Socialist Republic within one state.' },
        { to: 'russia', type: 'war', label: 'Crushing the Prague Spring', note: 'Soviet-led Warsaw Pact forces invaded in August 1968 to end Dubček’s reforms.' },
        { to: 'germany', type: 'interaction', label: 'Eastern Bloc', note: 'Tied into the Warsaw Pact and Comecon behind the Iron Curtain.' }
      ],
      figures: [
        { name: 'Alexander Dubček', title: 'Leader of the Prague Spring', years: 'r. 1968–1969' },
        { name: 'Gustáv Husák', title: 'Slovak communist "normalizer"', years: 'r. 1969–1989' }
      ]
    },
    {
      startYear: 1993,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Slovak Republic',
      government: 'Parliamentary republic',
      capital: 'Bratislava',
      religion: ['Roman Catholicism / secular'],
      culture: ['Slovak'],
      summary:
        'The peaceful "Velvet Divorce" of 1 January 1993 split Czechoslovakia into independent Czech and Slovak states; Slovakia joined the EU and NATO in 2004 and adopted the euro in 2009, anchoring itself firmly in the West.',
      relations: [
        { to: 'czechia', type: 'ally', label: 'The Velvet Divorce', note: 'Czechoslovakia split amicably into two states on 1 January 1993; the two remain close partners.' },
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Slovakia joined NATO and the European Union in 2004 and the eurozone in 2009.' },
        { to: 'ukraine', type: 'interaction', label: 'Eastern border & refugees', note: 'A direct EU border with Ukraine, a major route for refugees after Russia’s 2022 invasion.' }
      ],
      figures: [
        { name: 'Michal Kováč', title: 'First President of independent Slovakia', years: 'r. 1993–1998' }
      ]
    }
  ]
}

export default slovakia
