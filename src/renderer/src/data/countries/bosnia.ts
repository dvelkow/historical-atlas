import type { Country } from '../countryTypes'

const bosnia: Country = {
  id: 'bosnia',
  name: 'Bosnia and Herzegovina',
  mapNames: ['Bosnia and Herzegovina', 'Bosnia', 'Bosnia-Herzegovina'],
  color: '#7a6fc0',
  centroid: [18.0, 44.0],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Dalmatia & Pannonia',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Salona (provincial seat of Dalmatia)',
      religion: ['Illyrian & Roman paganism → Christianity'],
      culture: ['Illyrian', 'Roman'],
      summary:
        'After the long Illyrian wars, the rugged highlands between the Sava and the Adriatic were split between the provinces of Dalmatia and Pannonia, prized by Rome for their silver and lead mines and threaded with mountain roads.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman provinces', note: 'Dalmatia and Pannonia were governed from Rome; their mines fed the imperial economy.' },
        { to: 'croatia', type: 'interaction', label: 'Shared Dalmatia', note: 'The coastal hinterland and the Bosnian highlands formed one Roman provincial world.' }
      ],
      figures: [
        { name: 'Bato the Daesitiate', title: 'Illyrian rebel leader', years: 'fl. 6–9 CE' }
      ]
    },
    {
      startYear: 476,
      endYear: 1180,
      eraId: 'early-medieval',
      name: 'Slavic Settlement, Between the Powers',
      modernEquivalent: false,
      government: 'Tribal Slavic polities under shifting overlords',
      capital: '— (no fixed centre)',
      religion: ['Slavic paganism → Christianity'],
      culture: ['Slavic', 'Illyro-Roman'],
      summary:
        'Slavs settled the river valleys after the fall of Rome, and the small land of "Bosna" — first named by Emperor Constantine VII in the 10th century — was pulled between Byzantium, Croatia and Serbia for centuries.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Contested by Serbia', note: 'Bosnia was repeatedly drawn into the orbit of the early Serbian principalities.' },
        { to: 'croatia', type: 'interaction', label: 'Contested by Croatia', note: 'The Croatian kingdom claimed and at times held parts of the Bosnian lands.' },
        { to: 'greece', type: 'interaction', label: 'Byzantine overlordship', note: 'Constantine VII recorded "the small land called Bosona" as a Byzantine sphere.' }
      ],
      figures: [
        { name: 'Constantine VII Porphyrogenitus', title: 'Byzantine emperor & chronicler', years: 'r. 913–959', note: 'His De Administrando Imperio gives the first written mention of Bosnia.' }
      ]
    },
    {
      startYear: 1180,
      endYear: 1463,
      eraId: 'high-medieval',
      name: 'Banate & Kingdom of Bosnia',
      government: 'Banate → kingdom (feudal monarchy)',
      capital: 'Bobovac / Jajce',
      religion: ['Bosnian Church', 'Catholic', 'Orthodox'],
      culture: ['Bosnian', 'Slavic'],
      summary:
        'Ban Kulin opened Bosnia’s recorded statehood with his 1189 charter to the merchants of Ragusa, and the realm developed its own independent "Bosnian Church"; in 1377 Tvrtko I was crowned king, raising the medieval Bosnian state to its greatest extent.',
      relations: [
        { to: 'serbia', type: 'war', label: 'Tvrtko’s coronation & rivalry', note: 'Tvrtko I claimed the Serbian royal heritage and styled himself King of the Serbs, Bosnia and the Coast.' },
        { to: 'croatia', type: 'interaction', label: 'Hungarian-Croatian frontier', note: 'Bosnia bordered and bargained with the Croatian lands of the Hungarian crown.' },
        { to: 'hungary', type: 'war', label: 'Hungarian overlordship', note: 'Hungary repeatedly claimed suzerainty and launched anti-heretic crusades against Bosnia.' }
      ],
      figures: [
        { name: 'Ban Kulin', title: 'Ban of Bosnia', years: 'r. 1180–1204', note: 'His 1189 charter to Ragusa is the oldest Bosnian state document.' },
        { name: 'Tvrtko I', title: 'First King of Bosnia', years: 'r. 1377–1391' },
        { name: 'Stjepan Tomašević', title: 'Last King of Bosnia', years: 'r. 1461–1463' }
      ]
    },
    {
      startYear: 1463,
      endYear: 1878,
      eraId: 'early-modern',
      name: 'Ottoman Bosnia',
      modernEquivalent: false,
      government: 'Ottoman province (sanjak → eyalet)',
      capital: 'Sarajevo (later Travnik)',
      religion: ['Islam', 'Orthodox', 'Catholic'],
      culture: ['Bosnian Muslim', 'Serb', 'Croat'],
      summary:
        'Sultan Mehmed II conquered the kingdom in 1463, and over the following generations much of the population converted to Islam; as the Bosnia Eyalet the province prospered, and Sarajevo and Mostar — with its famous bridge — grew into flourishing Ottoman cities.',
      relations: [
        { to: 'turkey', type: 'interaction', label: 'Province of the Ottomans', note: 'Bosnia was a frontier eyalet of the empire for over four centuries.' },
        { to: 'austria', type: 'war', label: 'Habsburg frontier wars', note: 'The Bosnian border was a constant battlefront against the Habsburgs and their Military Frontier.' },
        { to: 'serbia', type: 'interaction', label: 'Shared Ottoman Balkans', note: 'Bosnia’s Orthodox population was bound to the wider Serb world under Ottoman rule.' }
      ],
      figures: [
        { name: 'Mehmed II', title: 'Ottoman conqueror of Bosnia', years: 'r. 1444–1481' },
        { name: 'Mehmed-paša Sokolović', title: 'Bosnian-born Grand Vizier', years: '1506–1579' },
        { name: 'Husein Gradaščević', title: 'Leader of the 1831 Bosnian revolt', years: '1802–1834' }
      ]
    },
    {
      startYear: 1878,
      endYear: 1918,
      eraId: 'long-19th',
      name: 'Austro-Hungarian Bosnia',
      modernEquivalent: false,
      government: 'Austro-Hungarian condominium (occupied → annexed)',
      capital: 'Sarajevo',
      religion: ['Islam', 'Orthodox', 'Catholic'],
      culture: ['Bosnian Muslim', 'Serb', 'Croat'],
      summary:
        'The Congress of Berlin handed Bosnia to Austria-Hungary to occupy in 1878, and Vienna formally annexed it in 1908, bringing railways, industry and tension; in 1914 the Sarajevo assassination of Archduke Franz Ferdinand lit the fuse of the First World War.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg administration', note: 'Occupied (1878) then annexed (1908) and modernised under Habsburg rule.' },
        { to: 'serbia', type: 'war', label: 'Sarajevo & the road to war', note: 'Serb nationalism over Bosnia and the 1914 assassination set Austria-Hungary and Serbia at war.' },
        { to: 'turkey', type: 'interaction', label: 'End of Ottoman claim', note: 'The 1908 annexation extinguished the last nominal Ottoman sovereignty over Bosnia.' }
      ],
      figures: [
        { name: 'Gavrilo Princip', title: 'Assassin of Franz Ferdinand', years: '1894–1918', note: 'His killing of the Archduke in Sarajevo on 28 June 1914 triggered WWI.' },
        { name: 'Benjámin Kállay', title: 'Austro-Hungarian administrator of Bosnia', years: '1839–1903' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1941,
      eraId: 'world-wars',
      name: 'Yugoslavia (Kingdom)',
      modernEquivalent: false,
      government: 'Constitutional then royal-dictatorship monarchy',
      capital: 'Belgrade (Sarajevo as regional centre)',
      religion: ['Islam', 'Orthodox', 'Catholic'],
      culture: ['Bosnian Muslim', 'Serb', 'Croat'],
      summary:
        'With the empire’s collapse Bosnia was absorbed into the new Kingdom of Serbs, Croats and Slovenes — renamed Yugoslavia in 1929 — its historic borders dissolved into shifting administrative regions dominated from Belgrade.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Within the Yugoslav kingdom', note: 'Bosnia became part of the Serb-led Kingdom of Serbs, Croats and Slovenes.' },
        { to: 'croatia', type: 'interaction', label: 'Croat–Serb balance', note: 'Bosnia’s Croats and Serbs were caught in the kingdom’s central national struggle.' },
        { to: 'austria', type: 'interaction', label: 'After the Habsburgs', note: 'The fall of Austria-Hungary in 1918 ended four decades of Habsburg administration.' }
      ],
      figures: [
        { name: 'Mehmed Spaho', title: 'Bosniak political leader', years: '1883–1939', note: 'Led the Yugoslav Muslim Organisation in interwar Yugoslavia.' }
      ]
    },
    {
      startYear: 1941,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'World War II',
      modernEquivalent: false,
      government: 'Axis puppet state (Independent State of Croatia)',
      capital: 'Sarajevo (within NDH-administered territory)',
      religion: ['Islam', 'Orthodox', 'Catholic'],
      culture: ['Bosnian Muslim', 'Serb', 'Croat'],
      summary:
        'Bosnia was swallowed into the Ustaše-run Independent State of Croatia (NDH), where the regime’s persecution of Serbs, Jews and Roma fed a brutal three-way war among Ustaše, Chetniks and the communist Partisans, who ultimately prevailed.',
      relations: [
        { to: 'croatia', type: 'war', label: 'Ustaše NDH rule', note: 'Bosnia was incorporated into the fascist Independent State of Croatia.' },
        { to: 'germany', type: 'war', label: 'Axis occupation', note: 'Nazi Germany backed the NDH and fought the Partisan insurgency across Bosnia.' },
        { to: 'serbia', type: 'war', label: 'Chetnik–Partisan conflict', note: 'Serb Chetniks and multiethnic Partisans clashed across the Bosnian mountains.' }
      ],
      figures: [
        { name: 'Josip Broz Tito', title: 'Partisan commander', years: '1892–1980', note: 'Led the communist Partisans, headquartered for a time in Bosnia (Jajce, 1943).' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1992,
      eraId: 'cold-war',
      name: 'Socialist Republic of Bosnia and Herzegovina',
      modernEquivalent: false,
      government: 'Socialist republic within federal Yugoslavia',
      capital: 'Sarajevo',
      religion: ['Islam', 'Orthodox', 'Catholic', 'State atheism'],
      culture: ['Bosnian Muslim', 'Serb', 'Croat'],
      summary:
        'Reconstituted within its historic borders as one of the six republics of Tito’s Yugoslavia, Bosnia became a deliberately multi-ethnic showcase, its capital crowned by hosting the 1984 Winter Olympics in Sarajevo.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Federal Yugoslav republic', note: 'A constituent socialist republic alongside Serbia and Croatia.' },
        { to: 'croatia', type: 'interaction', label: 'Shared federation', note: 'Bosnia’s three peoples mirrored the wider Yugoslav balance.' },
        { to: 'russia', type: 'interaction', label: 'Non-aligned socialism', note: 'Part of Tito’s Yugoslavia, communist yet outside the Soviet bloc.' }
      ],
      figures: [
        { name: 'Džemal Bijedić', title: 'Bosniak Yugoslav Prime Minister', years: '1917–1977' },
        { name: 'Branko Mikulić', title: 'Bosnian Yugoslav statesman', years: '1928–1994', note: 'Oversaw the 1984 Sarajevo Winter Olympics.' }
      ]
    },
    {
      startYear: 1992,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Bosnia and Herzegovina',
      government: 'Federal parliamentary republic (two entities)',
      capital: 'Sarajevo',
      religion: ['Islam', 'Orthodox', 'Catholic'],
      culture: ['Bosniak', 'Serb', 'Croat'],
      summary:
        'Independence in 1992 was met by the Bosnian War (1992–95), which brought ethnic cleansing and the Srebrenica genocide of 1995; the Dayton Agreement ended the fighting and created today’s federal state of two entities — the Federation and Republika Srpska.',
      relations: [
        { to: 'serbia', type: 'war', label: 'The Bosnian War (1992–95)', note: 'Bosnian Serb forces, backed from Belgrade, fought the new state; Srebrenica (1995) was ruled a genocide.' },
        { to: 'croatia', type: 'war', label: 'Croat–Bosniak war & peace', note: 'A 1993–94 Croat–Bosniak conflict ended in the Washington-brokered Federation.' },
        { to: 'united-kingdom', type: 'ally', label: 'Dayton & international oversight', note: 'NATO and Western powers enforced the 1995 Dayton Agreement and oversaw postwar Bosnia.' }
      ],
      figures: [
        { name: 'Alija Izetbegović', title: 'First President of independent Bosnia', years: 'r. 1990–1996' },
        { name: 'Ratko Mladić', title: 'Bosnian Serb general (convicted of genocide)', years: 'b. 1942', note: 'Commanded the forces responsible for the Srebrenica genocide; convicted by the ICTY in 2017.' }
      ]
    }
  ]
}

export default bosnia
