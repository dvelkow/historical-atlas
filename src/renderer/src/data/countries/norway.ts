import type { Country } from '../countryTypes'

const norway: Country = {
  id: 'norway',
  name: 'Norway',
  mapNames: ['Norway'],
  color: '#4f7fa6',
  centroid: [9, 61],
  periods: [
    {
      startYear: 793,
      endYear: 1066,
      eraId: 'early-medieval',
      name: 'Viking Age Norway',
      government: 'Petty kingdoms → unified monarchy',
      capital: 'Nidaros (Trondheim) / Avaldsnes',
      religion: ['Norse paganism → Christianity'],
      culture: ['Norse', 'Norwegian'],
      summary:
        'From the raid on Lindisfarne in 793, Norwegian seafarers struck across the North Sea and settled the Atlantic — Iceland, the Faroes and Greenland; Harald Fairhair welded the petty kingdoms into one realm around 872, and the age closed when Harald Hardrada fell at Stamford Bridge in 1066.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Viking raids', note: 'The 793 sack of Lindisfarne opened centuries of Norse attacks and rule across the British Isles.' },
        { to: 'denmark', type: 'war', label: 'Norse rivalry', note: 'Norway and Denmark contended for dominance over the Scandinavian and North Sea worlds.' },
        { to: 'sweden', type: 'war', label: 'Scandinavian rivalry', note: 'Shifting wars and alliances among the Norse kingdoms, settled in part at Svolder in 1000.' }
      ],
      figures: [
        { name: 'Harald Fairhair', title: 'First king of a united Norway', years: 'r. c. 872–930' },
        { name: 'Olaf II (St Olaf)', title: 'King & patron saint', years: 'r. 1015–1028' }
      ]
    },
    {
      startYear: 1066,
      endYear: 1397,
      eraId: 'high-medieval',
      name: 'Kingdom of Norway',
      government: 'Hereditary monarchy',
      capital: 'Bergen / Nidaros',
      religion: ['Roman Catholicism'],
      culture: ['Norwegian'],
      summary:
        'A Christian kingdom consolidated through bitter civil wars and emerged at its height under Haakon IV, ruling a North Atlantic realm from Iceland and Greenland to the Hebrides and Man, before dynastic union drew it toward Denmark.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Battle of Largs', note: 'Haakon IV’s 1263 campaign ended with Norway ceding the Hebrides and Man to Scotland in 1266.' },
        { to: 'denmark', type: 'interaction', label: 'Dynastic union', note: 'Marriage ties bound the Norwegian and Danish crowns ahead of the 1397 Kalmar Union.' },
        { to: 'sweden', type: 'interaction', label: 'Shared crowns', note: 'Norway and Sweden were briefly joined under King Magnus VII in the 14th century.' }
      ],
      figures: [
        { name: 'Sverre Sigurdsson', title: 'King who won the civil wars', years: 'r. 1184–1202' },
        { name: 'Haakon IV Haakonsson', title: 'King of Norway’s golden age', years: 'r. 1217–1263' }
      ]
    },
    {
      startYear: 1397,
      endYear: 1814,
      eraId: 'late-medieval',
      name: 'Denmark–Norway',
      modernEquivalent: false,
      government: 'Union under the Danish crown',
      capital: '— (ruled from Copenhagen)',
      religion: ['Roman Catholicism → Lutheranism'],
      culture: ['Norwegian', 'Danish'],
      summary:
        'Joined to Denmark in the Kalmar Union of 1397, Norway lost its separate institutions and became the junior partner of the Danish crown for over four centuries, ruled from distant Copenhagen until the Napoleonic settlement tore the union apart.',
      relations: [
        { to: 'denmark', type: 'interaction', label: 'Junior partner', note: 'Norway was governed from Copenhagen, its old council and chancery absorbed into the Danish state.' },
        { to: 'sweden', type: 'war', label: 'Kalmar rivalry', note: 'Recurrent wars with Sweden over the Nordic dominions and the Baltic.' }
      ],
      figures: [
        { name: 'Margaret I', title: 'Queen who forged the Kalmar Union', years: 'r. 1387–1412' },
        { name: 'Christian IV', title: 'King of Denmark–Norway', years: 'r. 1588–1648' }
      ]
    },
    {
      startYear: 1814,
      endYear: 1905,
      eraId: 'long-19th',
      name: 'Union with Sweden',
      modernEquivalent: false,
      government: 'Crown union under the Swedish king',
      capital: 'Christiania (Oslo)',
      religion: ['Lutheranism'],
      culture: ['Norwegian'],
      summary:
        'Ceded by Denmark at the Treaty of Kiel in 1814, Norway adopted its own liberal Eidsvoll constitution but was forced into a personal union with Sweden — keeping its own parliament until rising nationalism dissolved the union peacefully in 1905.',
      relations: [
        { to: 'sweden', type: 'interaction', label: 'Forced union', note: 'Norway shared the Swedish king and foreign policy from 1814 until the union’s dissolution in 1905.' },
        { to: 'denmark', type: 'interaction', label: 'Treaty of Kiel', note: 'Denmark ceded Norway to the Swedish crown in 1814 after backing Napoleon.' }
      ],
      figures: [
        { name: 'Henrik Wergeland', title: 'Poet of the national awakening', years: '1808–1845' },
        { name: 'Christian Michelsen', title: 'PM at the 1905 dissolution', years: '1857–1925' }
      ]
    },
    {
      startYear: 1905,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Kingdom of Norway',
      government: 'Constitutional monarchy',
      capital: 'Oslo',
      religion: ['Lutheran / secular'],
      culture: ['Norwegian'],
      summary:
        'Independent from 1905 under a new dynasty, Norway endured German occupation in the Second World War, became a founding member of NATO, and turned North Sea oil into one of the world’s largest sovereign wealth funds while staying outside the EU.',
      relations: [
        { to: 'germany', type: 'war', label: 'WWII occupation', note: 'Nazi Germany invaded in 1940 and occupied Norway until 1945, propping up the Quisling regime.' },
        { to: 'united-kingdom', type: 'ally', label: 'WWII ally', note: 'The king and government ran the resistance and merchant fleet in exile from London.' },
        { to: 'russia', type: 'interaction', label: 'Arctic frontier', note: 'Norway guards NATO’s northern flank along its border with Russia in the high Arctic.' }
      ],
      figures: [
        { name: 'Haakon VII', title: 'First king of independent Norway', years: 'r. 1905–1957' },
        { name: 'Gro Harlem Brundtland', title: 'Prime Minister', years: '1939–present' }
      ]
    }
  ]
}

export default norway
