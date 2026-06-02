import type { Country } from '../countryTypes'

const bulgaria: Country = {
  id: 'bulgaria',
  name: 'Bulgaria',
  mapNames: ['Bulgaria'],
  color: '#8359a3',
  centroid: [25.3, 42.7],
  periods: [
    {
      startYear: 632,
      endYear: 681,
      eraId: 'early-medieval',
      name: 'Old Great Bulgaria',
      modernEquivalent: false,
      government: 'Nomadic khanate (Bulgar confederation)',
      capital: 'Phanagoria',
      religion: ['Tengrism (steppe paganism)'],
      culture: ['Bulgar'],
      summary:
        'Khan Kubrat united the Bulgar tribes north of the Black Sea into "Old Great Bulgaria"; after his death it split, one horde moving west to the Danube and another east to the Volga.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Byzantine frontier', note: 'Kubrat was allied with — and baptised at — Constantinople.' },
        { to: 'russia', type: 'interaction', label: 'The Pontic–Caspian steppe', note: 'Shared the steppe with the Khazars; the eastern horde founded Volga Bulgaria.' }
      ],
      figures: [{ name: 'Kubrat', title: 'Khan of the Bulgars', years: 'r. c. 632–665' }]
    },
    {
      startYear: 681,
      endYear: 1018,
      eraId: 'early-medieval',
      name: 'First Bulgarian Empire',
      government: 'Khanate → Christian tsardom',
      capital: 'Pliska / Preslav',
      religion: ['Tengrism → Orthodox Christianity (from 864)'],
      culture: ['Bulgar', 'Slavic'],
      summary:
        'Asparukh founded a Bulgarian state on the Danube in 681; Khan Krum shattered Byzantine armies, Boris I adopted Orthodox Christianity (864), and under Simeon the Great Bulgaria reached the Aegean and rivalled Constantinople — cradle of the Cyrillic script — until Basil II destroyed it in 1018.',
      relations: [
        { to: 'greece', type: 'war', label: 'Byzantine–Bulgarian wars', note: 'Krum killed Emperor Nikephoros (811); Basil II "the Bulgar-Slayer" finally conquered it (1018).' },
        { to: 'russia', type: 'interaction', label: 'Cyrillic & Orthodoxy', note: 'Preslav’s scholars shaped the Cyrillic script later carried to the Rus’.' },
        { to: 'italy', type: 'interaction', label: 'Rome courts Boris I', note: 'Boris weighed the Pope against Constantinople before choosing the Eastern Church (870).' }
      ],
      figures: [
        { name: 'Krum', title: 'Khan (defeated Byzantium)', years: 'r. c. 803–814' },
        { name: 'Boris I', title: 'Knyaz (Christianised Bulgaria)', years: 'r. 852–889' },
        { name: 'Simeon I the Great', title: 'Tsar (golden age)', years: 'r. 893–927' }
      ]
    },
    {
      startYear: 1018,
      endYear: 1185,
      eraId: 'high-medieval',
      name: 'Byzantine Bulgaria',
      modernEquivalent: false,
      government: 'Byzantine themes',
      capital: '— (ruled from Constantinople)',
      religion: ['Orthodox Christianity'],
      culture: ['Bulgarian'],
      summary:
        'For over a century and a half Bulgaria was a province of the Byzantine Empire, its people rising repeatedly — under Peter Delyan and others — until the Asen brothers’ revolt restored independence in 1185.',
      relations: [
        { to: 'greece', type: 'war', label: 'Byzantine rule & uprisings', note: 'Repeated Bulgarian revolts against rule from Constantinople.' },
        { to: 'russia', type: 'interaction', label: 'Shared Orthodoxy', note: 'Bulgarian clergy and letters kept ties with the wider Slavic Orthodox world.' }
      ],
      figures: [{ name: 'Peter Delyan', title: 'Leader of the 1040 uprising', years: 'r. 1040–1041' }]
    },
    {
      startYear: 1185,
      endYear: 1396,
      eraId: 'high-medieval',
      name: 'Second Bulgarian Empire',
      government: 'Tsardom',
      capital: 'Tarnovo',
      religion: ['Orthodox Christianity'],
      culture: ['Bulgarian'],
      summary:
        'The Asen dynasty restored the tsardom at Tarnovo; Kaloyan crushed the Latin Crusaders and captured their emperor at Adrianople (1205), and Ivan Asen II made Bulgaria the dominant Balkan power — before fragmentation and the Ottoman conquest of 1396.',
      relations: [
        { to: 'greece', type: 'war', label: 'Byzantine rivalry', note: 'A three-way Balkan contest with Byzantium and the Latins.' },
        { to: 'italy', type: 'war', label: 'Crushing the Latin Empire', note: 'Kaloyan routed the Fourth-Crusade Latins and captured Emperor Baldwin I at Adrianople (1205).' },
        { to: 'turkey', type: 'war', label: 'Ottoman conquest (1396)', note: 'The Ottomans absorbed the fragmented tsardom after the fall of Tarnovo.' }
      ],
      figures: [
        { name: 'Kaloyan', title: 'Tsar (the Roman-Slayer)', years: 'r. 1197–1207' },
        { name: 'Ivan Asen II', title: 'Tsar (height of the empire)', years: 'r. 1218–1241' }
      ]
    },
    {
      startYear: 1396,
      endYear: 1878,
      eraId: 'early-modern',
      name: 'Ottoman Bulgaria',
      modernEquivalent: false,
      government: 'Ottoman provinces (Rumelia)',
      capital: '— (ruled from Constantinople)',
      religion: ['Orthodox Christianity under Ottoman rule'],
      culture: ['Bulgarian'],
      summary:
        'Nearly five centuries under the Ottomans dimmed but never extinguished Bulgarian identity; the National Revival and the April Uprising (1876) set the stage for liberation by Russia in 1877–78.',
      relations: [
        { to: 'turkey', type: 'interaction', label: 'Under Ottoman rule', note: 'Part of Ottoman Rumelia for nearly 500 years.' },
        { to: 'russia', type: 'ally', label: 'Liberation (1877–78)', note: 'The Russo-Turkish War freed Bulgaria and created an autonomous principality.' },
        { to: 'greece', type: 'interaction', label: 'The Orthodox millet', note: 'Greeks and Bulgarians shared — and contested — the Orthodox community under the sultans.' }
      ],
      figures: [
        { name: 'Paisius of Hilendar', title: 'Monk of the National Revival', years: '1722–1773' },
        { name: 'Vasil Levski', title: 'Revolutionary (the Apostle of Freedom)', years: '1837–1873' }
      ]
    },
    {
      startYear: 1878,
      endYear: 1946,
      eraId: 'long-19th',
      name: 'Principality & Tsardom of Bulgaria',
      government: 'Principality → Tsardom (monarchy)',
      capital: 'Sofia',
      religion: ['Orthodox Christianity'],
      culture: ['Bulgarian'],
      summary:
        'Autonomous from 1878 and a fully independent tsardom in 1908, Bulgaria fought the Balkan Wars and sided with Germany in both World Wars — losing territory each time — until the monarchy fell to communism in 1946.',
      relations: [
        { to: 'turkey', type: 'war', label: 'Independence & First Balkan War', note: 'Threw off Ottoman suzerainty (1908) and led the Balkan League against it (1912).' },
        { to: 'greece', type: 'war', label: 'Balkan Wars & the World Wars', note: 'Fought Greece in the Second Balkan War (1913) and again in both World Wars.' },
        { to: 'germany', type: 'ally', label: 'Central Powers & the Axis', note: 'Allied with Germany in WWI and again under Tsar Boris III in WWII.' }
      ],
      figures: [
        { name: 'Ferdinand I', title: 'Prince & Tsar of Bulgaria', years: 'r. 1887–1918' },
        { name: 'Boris III', title: 'Tsar of Bulgaria', years: 'r. 1918–1943' }
      ]
    },
    {
      startYear: 1946,
      endYear: 1990,
      eraId: 'cold-war',
      name: 'People’s Republic of Bulgaria',
      government: 'Communist people’s republic',
      capital: 'Sofia',
      religion: ['State atheism / Orthodox'],
      culture: ['Bulgarian'],
      summary:
        'The most loyal of the Soviet satellites, Bulgaria industrialised and aligned tightly with Moscow under Todor Zhivkov for 35 years, until the fall of communism in 1989–90.',
      relations: [
        { to: 'russia', type: 'ally', label: 'Closest Soviet ally', note: 'The most faithful member of the Warsaw Pact and Comecon.' },
        { to: 'germany', type: 'interaction', label: 'Eastern Bloc', note: 'Tied into the East German–led socialist economy and the Iron Curtain.' },
        { to: 'greece', type: 'interaction', label: 'Cold War frontier', note: 'Bordered NATO’s Greece across the Iron Curtain.' }
      ],
      figures: [
        { name: 'Georgi Dimitrov', title: 'Communist founder-leader', years: 'r. 1946–1949' },
        { name: 'Todor Zhivkov', title: 'Communist head of state', years: 'r. 1954–1989' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Bulgaria',
      government: 'Parliamentary republic',
      capital: 'Sofia',
      religion: ['Orthodox / secular'],
      culture: ['Bulgarian'],
      summary:
        'After communism Bulgaria became a democracy and joined NATO (2004) and the European Union (2007), while wrestling with emigration and corruption.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Member of NATO (2004) and the European Union (2007).' },
        { to: 'greece', type: 'ally', label: 'EU neighbour', note: 'Close economic ties with fellow EU member Greece.' },
        { to: 'turkey', type: 'interaction', label: 'Neighbour & NATO ally', note: 'A long border and large Turkish minority, managed within NATO.' }
      ],
      figures: [{ name: 'Zhelyu Zhelev', title: 'First democratic President', years: 'r. 1990–1997' }]
    }
  ]
}

export default bulgaria
