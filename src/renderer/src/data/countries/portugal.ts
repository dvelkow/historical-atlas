import type { Country } from '../countryTypes'

const portugal: Country = {
  id: 'portugal',
  name: 'Portugal',
  mapNames: ['Portugal'],
  color: '#1f8a70',
  centroid: [-8.2, 39.7],
  periods: [
    {
      startYear: 0,
      endYear: 409,
      eraId: 'roman',
      name: 'Roman Lusitania',
      modernEquivalent: false,
      government: 'Roman province',
      capital: 'Emerita Augusta (Mérida)',
      religion: ['Roman paganism → Christianity'],
      culture: ['Lusitanian', 'Hispano-Roman'],
      summary:
        'West of the Iberian peninsula, the province of Lusitania was thoroughly Romanised — its towns, roads and villas prospering for four centuries until the Germanic crossings of 409 ended Roman rule.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'A Roman province', note: 'Lusitania was one of the wealthy provinces of Roman Hispania.' },
        { to: 'spain', type: 'interaction', label: 'Shared Iberia', note: 'Part of the Roman Iberian world alongside the rest of Hispania.' }
      ],
      figures: []
    },
    {
      startYear: 409,
      endYear: 868,
      eraId: 'late-antique',
      name: 'Suebi, Visigoths & al-Andalus',
      modernEquivalent: false,
      government: 'Germanic kingdoms, then Muslim rule',
      capital: 'Bracara (Braga) / Coimbra',
      religion: ['Arian & Catholic Christianity', 'Islam (from 711)'],
      culture: ['Suebi', 'Visigothic', 'Andalusi'],
      summary:
        'The Suebi built a kingdom in the northwest, absorbed by the Visigoths, until the Umayyad conquest of 711 brought the west under al-Andalus as Gharb — until Christian reconquest crept south to form the county of Portugal.',
      relations: [
        { to: 'spain', type: 'war', label: 'Iberian kingdoms & the Reconquista', note: 'Shared the fate of Visigothic Hispania and the Muslim conquest, then the Christian reconquest.' },
        { to: 'france', type: 'interaction', label: 'Frankish frontier', note: 'The Carolingians pushed the Christian frontier south of the Pyrenees.' }
      ],
      figures: [
        { name: 'Hermeric', title: 'First king of the Suebi', years: 'r. 409–438' }
      ]
    },
    {
      startYear: 868,
      endYear: 1139,
      eraId: 'early-medieval',
      name: 'County of Portugal (Reconquista)',
      government: 'County under León-Castile',
      capital: 'Guimarães / Coimbra',
      religion: ['Roman Catholicism'],
      culture: ['Galician-Portuguese'],
      summary:
        'Reconquered from the Moors and ruled by counts under León-Castile, the Portucalense county on the Atlantic edge of Iberia grew autonomous under the Burgundian house — until Afonso Henriques won independence as Portugal’s first king (1139).',
      relations: [
        { to: 'spain', type: 'war', label: 'Reconquista & break from León', note: 'War on the Moors and a struggle for autonomy from León-Castile.' },
        { to: 'france', type: 'interaction', label: 'The Burgundian counts', note: 'Henry of Burgundy’s dynasty came south of the Pyrenees to rule the county.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Crusaders on the coast', note: 'Northern crusaders sailing to the Holy Land aided the capture of Lisbon (1147).' }
      ],
      figures: [
        { name: 'Vímara Peres', title: 'Count, founder of Portucale', years: 'd. 873' },
        { name: 'Afonso I Henriques', title: 'First King of Portugal', years: 'r. 1139–1185' }
      ]
    },
    {
      startYear: 1139,
      endYear: 1580,
      eraId: 'late-medieval',
      name: 'Kingdom of Portugal (Age of Discovery)',
      government: 'Kingdom',
      capital: 'Lisbon',
      religion: ['Roman Catholicism'],
      culture: ['Portuguese'],
      summary: 'The Atlantic pioneer of European expansion, whose navigators opened the sea routes to India and Brazil and built a global maritime empire.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Anglo-Portuguese Alliance (1386)', note: 'The oldest alliance in the world still in force.' },
        { to: 'spain', type: 'war', label: 'Battle of Aljubarrota (1385)', note: 'Portugal secured independence from Castile, with English archers’ help.' }
      ],
      figures: [
        { name: 'Henry the Navigator', title: 'Prince & patron of exploration', years: '1394–1460' },
        { name: 'Vasco da Gama', title: 'Navigator to India', years: 'c. 1460–1524' }
      ]
    },
    {
      startYear: 1580,
      endYear: 1640,
      eraId: 'early-modern',
      name: 'Iberian Union',
      modernEquivalent: false,
      government: 'Personal union under the Spanish Habsburg crown',
      capital: 'Lisbon (king resident in Madrid)',
      religion: ['Roman Catholicism'],
      culture: ['Portuguese'],
      summary:
        'When King Sebastian died at Alcácer Quibir and the line failed, the 1580 succession crisis placed Portugal under the Spanish Habsburg kings — the "Sixty Years’ Captivity." Bound to Madrid’s wars, Portugal saw Dutch and English fleets prey on its Asian and Brazilian trade posts, until the nobles’ revolt of 1640 restored an independent crown.',
      relations: [
        { to: 'spain', type: 'interaction', label: 'Union of the crowns (1580)', note: 'Philip II of Spain became Philip I of Portugal, joining the two monarchies for sixty years.' },
        { to: 'netherlands', type: 'war', label: 'Dutch raids on the empire', note: 'Dragged into Spain’s war with the Dutch, who seized Portuguese trade posts in Asia and Brazil.' },
        { to: 'united-kingdom', type: 'war', label: 'Anglo-Spanish hostilities', note: 'English privateers and fleets struck Portuguese shipping while the crown was tied to Habsburg Spain.' }
      ],
      figures: [
        { name: 'Philip II of Spain', title: 'King (as Philip I of Portugal)', years: 'r. 1580–1598' },
        { name: 'Sebastian I', title: 'Last Avis king, fell at Alcácer Quibir', years: 'r. 1557–1578' }
      ]
    },
    {
      startYear: 1640,
      endYear: 1910,
      eraId: 'early-modern',
      name: 'Kingdom of Portugal (restored)',
      government: 'Monarchy',
      capital: 'Lisbon',
      religion: ['Roman Catholicism'],
      culture: ['Portuguese'],
      summary: 'After restoring independence from Spain in 1640, Portugal leaned on its British alliance and its Brazilian empire amid relative decline.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Anglo-Portuguese Alliance', note: 'Britain protected Portugal and its trade.' },
        { to: 'spain', type: 'war', label: 'Restoration War', note: 'War of independence from the Spanish crown (1640–68).' }
      ],
      figures: [{ name: 'Marquis of Pombal', title: 'Reforming minister', years: '1699–1782' }]
    },
    {
      startYear: 1910,
      endYear: 1933,
      eraId: 'long-19th',
      name: 'First Republic',
      government: 'Parliamentary republic',
      capital: 'Lisbon',
      religion: ['Secular state / Roman Catholicism'],
      culture: ['Portuguese'],
      summary:
        'The revolution of 1910 toppled the monarchy and proclaimed a republic — turbulent and fiercely anticlerical, it churned through dozens of governments and constant coups. Portugal entered the Great War on the Allied side in 1916, fighting in Flanders and Africa, until the military coup of 1926 ended parliamentary rule and opened the way to dictatorship.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Allied co-belligerent in WWI', note: 'Honouring the old alliance, Portugal sent an expeditionary corps to fight alongside Britain in France.' },
        { to: 'germany', type: 'war', label: 'The Great War (1916–18)', note: 'Germany declared war after Portugal seized German ships; Portuguese troops fought on the Western Front and in Africa.' },
        { to: 'france', type: 'ally', label: 'Western Front', note: 'Portuguese divisions held the line in Flanders, suffering heavily at the Battle of the Lys (1918).' }
      ],
      figures: [
        { name: 'Afonso Costa', title: 'Republican Prime Minister', years: '1871–1937' },
        { name: 'Sidónio Pais', title: 'President-dictator of the "New Republic"', years: 'r. 1917–1918' }
      ]
    },
    {
      startYear: 1933,
      endYear: 1974,
      eraId: 'world-wars',
      name: 'Estado Novo',
      modernEquivalent: false,
      government: 'Corporatist authoritarian regime',
      capital: 'Lisbon',
      religion: ['Roman Catholicism'],
      culture: ['Portuguese'],
      summary:
        'António de Oliveira Salazar built the "New State," a corporatist authoritarian regime that ruled Portugal for four decades. It kept the country neutral in the Second World War while leasing the Azores to the Allies, then clung to its African empire through the long, draining Colonial Wars of the 1960s and 70s — until the army’s Carnation Revolution overthrew the dictatorship in 1974.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Azores bases in WWII', note: 'Though neutral, Salazar invoked the old alliance to grant Britain and the Allies bases in the Azores (1943).' },
        { to: 'spain', type: 'ally', label: 'Iberian Pact', note: 'Salazar and Franco signed a non-aggression pact (1939), keeping both Iberian dictatorships out of the world war.' },
        { to: 'germany', type: 'interaction', label: 'Wartime wolfram trade', note: 'Neutral Portugal sold tungsten ore to both the Axis and the Allies during the Second World War.' }
      ],
      figures: [
        { name: 'António de Oliveira Salazar', title: 'Prime Minister & founder of the Estado Novo', years: '1889–1970' },
        { name: 'Marcello Caetano', title: 'Last Estado Novo premier', years: 'r. 1968–1974' }
      ]
    },
    {
      startYear: 1974,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Portuguese Republic',
      government: 'Semi-presidential republic',
      capital: 'Lisbon',
      religion: ['Roman Catholicism / secular'],
      culture: ['Portuguese'],
      summary: 'The Carnation Revolution (1974) ended dictatorship and empire; Portugal became a democracy and joined the European Communities in 1986.',
      relations: [
        { to: 'spain', type: 'ally', label: 'EU & Iberian partner', note: 'Close neighbour and fellow EU member.' },
        { to: 'germany', type: 'ally', label: 'EU partner', note: 'Member of the European Union and eurozone.' }
      ],
      figures: [{ name: 'Mário Soares', title: 'Prime Minister & President', years: '1924–2017' }]
    }
  ]
}

export default portugal
