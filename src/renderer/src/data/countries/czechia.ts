import type { Country } from '../countryTypes'

const czechia: Country = {
  id: 'czechia',
  name: 'Czechia',
  mapNames: ['Czech Republic', 'Czechia'],
  color: '#b06a3a',
  centroid: [15.4, 49.8],
  periods: [
    {
      startYear: 0,
      endYear: 833,
      eraId: 'roman',
      name: 'Celtic Boii & Germanic Marcomanni',
      modernEquivalent: false,
      government: 'Tribal kingdoms',
      capital: '— (no fixed centre)',
      religion: ['Celtic & Germanic paganism'],
      culture: ['Celtic', 'Germanic', 'early Slavic'],
      summary:
        'The Celtic Boii gave Bohemia its name before the Germanic Marcomanni under Maroboduus built a kingdom that defied Rome; as they migrated away, Slavic settlers moved in to form the realm that became Great Moravia.',
      relations: [
        { to: 'italy', type: 'war', label: 'The Marcomannic Wars', note: 'Marcus Aurelius fought the Marcomanni of Bohemia along the Danube.' },
        { to: 'germany', type: 'interaction', label: 'Germanic neighbours', note: 'The Marcomanni were one of the great Germanic peoples on Rome’s frontier.' }
      ],
      figures: [
        { name: 'Maroboduus', title: 'King of the Marcomanni', years: 'r. c. 9 BCE – 18 CE' }
      ]
    },
    {
      startYear: 833,
      endYear: 907,
      eraId: 'early-medieval',
      name: 'Great Moravia',
      modernEquivalent: false,
      government: 'Slavic principality',
      capital: 'Veligrad (Mikulčice?)',
      religion: ['Slavic paganism → Orthodox/Latin Christianity'],
      culture: ['West Slavic'],
      summary:
        'The first major West Slavic state spanned Moravia and Bohemia; the mission of Saints Cyril and Methodius brought a Slavonic liturgy and the Glagolitic script before Magyar raids destroyed it around 907.',
      relations: [
        { to: 'germany', type: 'war', label: 'East Frankish pressure', note: 'Svatopluk I resisted repeated campaigns by the East Frankish kings to subdue Moravia.' },
        { to: 'hungary', type: 'war', label: 'Magyar invasions', note: 'Invading Magyars shattered Great Moravia in the early 10th century.' }
      ],
      figures: [
        { name: 'Svatopluk I', title: 'King of Great Moravia', years: 'r. 871–894' },
        { name: 'Saint Methodius', title: 'Archbishop, Slavic apostle', years: 'c. 815–885' }
      ]
    },
    {
      startYear: 907,
      endYear: 1526,
      eraId: 'early-medieval',
      name: 'Duchy & Kingdom of Bohemia',
      government: 'Duchy → kingdom',
      capital: 'Prague',
      religion: ['Catholicism → Hussitism (from 1419)'],
      culture: ['Czech'],
      summary:
        'The Přemyslid dukes built a Bohemian realm that became a leading kingdom of the Holy Roman Empire; Charles IV made Prague an imperial capital and founded its university in 1348, while the Hussite Wars later convulsed the land.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Within the Holy Roman Empire', note: 'Bohemia’s king was a prince-elector and Charles IV ruled the Empire from Prague.' },
        { to: 'poland', type: 'war', label: 'Piast rivalry', note: 'Přemyslid and Piast rulers contested Silesia and the Bohemian–Polish frontier.' },
        { to: 'austria', type: 'war', label: 'Habsburg neighbours', note: 'Přemysl Otakar II clashed with Rudolf of Habsburg and fell at Marchfeld in 1278.' },
        { to: 'hungary', type: 'interaction', label: 'Shared crowns', note: 'The Jagiellonians wore the crowns of both Bohemia and Hungary until 1526.' }
      ],
      figures: [
        { name: 'Charles IV', title: 'King of Bohemia & Holy Roman Emperor', years: 'r. 1346–1378' },
        { name: 'Jan Hus', title: 'Reformer burned at Constance', years: 'c. 1369–1415' }
      ]
    },
    {
      startYear: 1526,
      endYear: 1918,
      eraId: 'early-modern',
      name: 'Habsburg Bohemia',
      modernEquivalent: false,
      government: 'Habsburg crown land',
      capital: 'Prague (ruled from Vienna)',
      religion: ['Catholicism'],
      culture: ['Czech', 'German'],
      summary:
        'Ruled from Vienna after 1526, Bohemia’s 1618 Defenestration of Prague ignited the Thirty Years’ War; defeat at White Mountain in 1620 crushed the Protestant estates and bound the land tightly to the Habsburg monarchy.',
      relations: [
        { to: 'austria', type: 'interaction', label: 'Habsburg rule', note: 'Bohemia became a hereditary Habsburg crown land governed from Vienna.' },
        { to: 'germany', type: 'war', label: 'Thirty Years’ War', note: 'The Bohemian revolt of 1618 opened the devastating war across the German lands.' },
        { to: 'sweden', type: 'war', label: 'Swedish campaigns', note: 'Swedish armies repeatedly invaded Bohemia and besieged Prague late in the war.' }
      ],
      figures: [
        { name: 'Ferdinand II', title: 'Habsburg emperor & king of Bohemia', years: 'r. 1619–1637' },
        { name: 'Jan Amos Comenius', title: 'Exiled educator & bishop', years: '1592–1670' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1993,
      eraId: 'world-wars',
      name: 'Czechoslovakia',
      government: 'Republic → communist state',
      capital: 'Prague',
      religion: ['Catholicism', 'Secular'],
      culture: ['Czech', 'Slovak'],
      summary:
        'Born from the collapse of Austria-Hungary in 1918, the democratic republic was betrayed at Munich in 1938 and occupied by the Nazis; communists seized power in 1948, Soviet tanks crushed the 1968 Prague Spring, and the 1989 Velvet Revolution restored freedom.',
      relations: [
        { to: 'germany', type: 'war', label: 'Munich & occupation', note: 'The 1938 Munich Agreement ceded the Sudetenland before Nazi Germany occupied the Czech lands.' },
        { to: 'russia', type: 'war', label: '1968 invasion', note: 'Soviet-led Warsaw Pact forces crushed the Prague Spring and enforced bloc loyalty.' },
        { to: 'austria', type: 'interaction', label: 'Post-Habsburg successor', note: 'Czechoslovakia emerged as a successor state to the dissolved Austro-Hungarian monarchy.' }
      ],
      figures: [
        { name: 'Tomáš Masaryk', title: 'Founding president', years: 'r. 1918–1935' },
        { name: 'Václav Havel', title: 'Dissident, last Czechoslovak president', years: '1936–2011' }
      ]
    },
    {
      startYear: 1993,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Czech Republic',
      government: 'Parliamentary republic',
      capital: 'Prague',
      religion: ['Secular', 'Catholicism'],
      culture: ['Czech'],
      summary:
        'The peaceful 1993 “Velvet Divorce” split Czechoslovakia into the Czech Republic and Slovakia; the new state joined NATO in 1999 and the European Union in 2004, anchoring itself in the West.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU & NATO partner', note: 'Germany became Czechia’s largest trading partner and a fellow EU and NATO member.' },
        { to: 'austria', type: 'interaction', label: 'Neighbourly ties', note: 'Cross-border cooperation deepened despite disputes over the Temelín nuclear plant.' },
        { to: 'poland', type: 'ally', label: 'Visegrád partner', note: 'Czechia joined Poland, Slovakia and Hungary in the Visegrád Group.' }
      ],
      figures: [
        { name: 'Václav Havel', title: 'First Czech president', years: 'r. 1993–2003' },
        { name: 'Václav Klaus', title: 'Architect of the split & president', years: 'r. 2003–2013' }
      ]
    }
  ]
}

export default czechia
