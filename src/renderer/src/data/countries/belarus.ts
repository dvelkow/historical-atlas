import type { Country } from '../countryTypes'

const belarus: Country = {
  id: 'belarus',
  name: 'Belarus',
  mapNames: ['Byelarus', 'Belarus'],
  color: '#4f9c5a',
  centroid: [27.55, 53.9],
  periods: [
    {
      startYear: 0,
      endYear: 862,
      eraId: 'roman',
      name: 'East Slavic & Baltic Tribes',
      modernEquivalent: false,
      government: 'Tribal societies',
      capital: '— (no central seat)',
      religion: ['Slavic & Baltic paganism'],
      culture: ['East Slavic', 'Baltic'],
      summary:
        'The forests between the Dnieper and the Western Dvina were settled by East Slavic tribes — the Krivichs, Dregovichs and Radimichs — living among older Baltic peoples in scattered hillforts and riverside clearings.',
      relations: [
        { to: 'lithuania', type: 'interaction', label: 'Baltic neighbours', note: 'Slavic settlers mingled with the Baltic tribes who occupied the same woodlands.' },
        { to: 'ukraine', type: 'interaction', label: 'The Dnieper world', note: 'Shared the East Slavic river network running south toward the middle Dnieper.' },
        { to: 'russia', type: 'interaction', label: 'Eastern Slavic kin', note: 'Part of the same expanding East Slavic tribal continuum across the northern forests.' }
      ],
      figures: []
    },
    {
      startYear: 862,
      endYear: 1240,
      eraId: 'early-medieval',
      name: "Principality of Polotsk & the Rus'",
      modernEquivalent: false,
      government: 'Princely city-states',
      capital: 'Polotsk',
      religion: ['Slavic paganism → Orthodox Christianity'],
      culture: ['East Slavic (Rus’)'],
      summary:
        'Polotsk and Turov rose as powerful princely cities within the loose federation of Kievan Rus’; Polotsk minted its own line of princes and the learned Euphrosyne built churches and copied manuscripts before the Mongol storm reached the Rus’.',
      relations: [
        { to: 'ukraine', type: 'interaction', label: 'Kievan Rus’', note: 'Polotsk and Turov were leading principalities of the Rus’ centred on Kyiv.' },
        { to: 'russia', type: 'interaction', label: 'Shared Rus’ heritage', note: 'Part of the common political and Orthodox culture of the early Rus’.' },
        { to: 'lithuania', type: 'war', label: 'Frontier raids', note: 'The Polotsk lands clashed and traded with the pagan Lithuanian tribes to the west.' }
      ],
      figures: [
        { name: 'Euphrosyne of Polotsk', title: 'Princess, abbess & patron of letters', years: 'c. 1101–1167' },
        { name: 'Vseslav of Polotsk', title: 'Prince (the "Sorcerer")', years: 'r. 1044–1101' }
      ]
    },
    {
      startYear: 1240,
      endYear: 1569,
      eraId: 'high-medieval',
      name: 'Grand Duchy of Lithuania',
      modernEquivalent: false,
      government: 'Grand duchy (feudal monarchy)',
      capital: 'Vilnius (Vilna)',
      religion: ['Orthodox Christianity', 'Catholicism'],
      culture: ['Ruthenian (Old Belarusian)', 'Lithuanian'],
      summary:
        'The Belarusian lands became the Ruthenian heartland of the Grand Duchy of Lithuania, where Old Belarusian (Ruthenian) served as the chancery language and the Statutes of Lithuania codified one of Europe’s most advanced legal systems.',
      relations: [
        { to: 'lithuania', type: 'ally', label: 'Ruthenian core of the Grand Duchy', note: 'The Belarusian lands formed the populous Slavic, Orthodox core of the Lithuanian state.' },
        { to: 'poland', type: 'ally', label: 'Union with Poland', note: 'Joined Poland in dynastic union from 1386, drawing the duchy westward.' },
        { to: 'russia', type: 'war', label: 'Muscovite wars', note: 'Fought a long series of frontier wars with rising Muscovy over the Rus’ inheritance.' }
      ],
      figures: [
        { name: 'Francysk Skaryna', title: 'Humanist & pioneer printer', years: '1486–1551' },
        { name: 'Vytautas the Great', title: 'Grand Duke of Lithuania', years: 'r. 1392–1430' }
      ]
    },
    {
      startYear: 1569,
      endYear: 1795,
      eraId: 'early-modern',
      name: 'Polish–Lithuanian Commonwealth',
      modernEquivalent: false,
      government: 'Elective monarchy (noble republic)',
      capital: 'Warsaw / Vilnius',
      religion: ['Catholicism', 'Uniate (Greek Catholic)', 'Orthodox Christianity'],
      culture: ['Ruthenian', 'Polish'],
      summary:
        'Within the vast Polish–Lithuanian Commonwealth the Belarusian lands saw the rise of the Uniate Church through the Union of Brest (1596) and the steady Polonization of their nobility, even as the peasantry kept the old tongue and faith.',
      relations: [
        { to: 'poland', type: 'ally', label: 'The Commonwealth', note: 'United with Poland and Lithuania in the Commonwealth from the Union of Lublin (1569).' },
        { to: 'russia', type: 'war', label: 'Russo-Polish wars', note: 'Devastated by repeated invasions, above all the catastrophic "Deluge" wars of the 1650s.' },
        { to: 'lithuania', type: 'ally', label: 'Within the Grand Duchy', note: 'Remained the Slavic heartland of the Lithuanian half of the Commonwealth.' }
      ],
      figures: [
        { name: 'Tadeusz Kościuszko', title: 'Military leader & national hero (born near Kosava)', years: '1746–1817' },
        { name: 'Lew Sapieha', title: 'Statesman, author of the 1588 Statute', years: '1557–1633' }
      ]
    },
    {
      startYear: 1795,
      endYear: 1917,
      eraId: 'long-19th',
      name: 'Russian Empire',
      modernEquivalent: false,
      government: 'Imperial governorates',
      capital: '— (ruled from Saint Petersburg)',
      religion: ['Orthodox Christianity', 'Catholicism', 'Judaism'],
      culture: ['Belarusian', 'Russian', 'Polish', 'Jewish'],
      summary:
        'Annexed in the Partitions of Poland, the Belarusian lands became the Russian Empire’s "Northwestern Krai", subjected to Russification, the suppression of the Uniate Church, and confinement of its large Jewish population within the Pale of Settlement.',
      relations: [
        { to: 'russia', type: 'interaction', label: 'The Northwestern Krai', note: 'Absorbed into the Russian Empire and governed as borderland provinces.' },
        { to: 'poland', type: 'war', label: 'Anti-Tsarist uprisings', note: 'Swept by the 1830–31 and 1863 risings against Russian rule, the latter led here by Kalinowski.' },
        { to: 'lithuania', type: 'interaction', label: 'Shared governorates', note: 'Grouped with the Lithuanian lands in the empire’s northwestern provinces.' }
      ],
      figures: [
        { name: 'Kastuś Kalinowski', title: 'Leader of the 1863 Uprising', years: '1838–1864' },
        { name: 'Yanka Kupala', title: 'National poet', years: '1882–1942' }
      ]
    },
    {
      startYear: 1917,
      endYear: 1991,
      eraId: 'world-wars',
      name: 'Byelorussian SSR',
      modernEquivalent: false,
      government: 'Soviet socialist republic',
      capital: 'Minsk',
      religion: ['State atheism'],
      culture: ['Belarusian', 'Russian'],
      summary:
        'After a fleeting 1918 People’s Republic, Belarus became a founding republic of the Soviet Union; the Second World War brought almost unimaginable devastation — roughly a quarter of the population perished — and the 1986 Chernobyl disaster blanketed much of the country in fallout.',
      relations: [
        { to: 'russia', type: 'ally', label: 'Soviet republic', note: 'A founding member of the USSR (1922), bound tightly to Moscow.' },
        { to: 'germany', type: 'war', label: 'Nazi occupation', note: 'Brutally occupied 1941–44, with massive partisan resistance and catastrophic civilian losses.' },
        { to: 'ukraine', type: 'interaction', label: 'Chernobyl fallout', note: 'Bore the heaviest contamination from the 1986 disaster across the Ukrainian border.' }
      ],
      figures: [
        { name: 'Pyotr Masherov', title: 'Soviet partisan & Party leader', years: '1918–1980' },
        { name: 'Vasil Bykaŭ', title: 'War novelist', years: '1924–2003' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Republic of Belarus',
      government: 'Presidential republic (authoritarian)',
      capital: 'Minsk',
      religion: ['Orthodox Christianity', 'Catholicism', 'secular'],
      culture: ['Belarusian', 'Russian'],
      summary:
        'Independent since 1991, Belarus has been ruled since 1994 by Alexander Lukashenko, "Europe’s last dictator", who deepened union with Russia; the disputed 2020 election triggered mass protests met with sweeping repression.',
      relations: [
        { to: 'russia', type: 'ally', label: 'Union State', note: 'Bound to Russia in an ever-tightening "Union State" of economic, military and political ties.' },
        { to: 'ukraine', type: 'interaction', label: 'Launchpad for 2022 invasion', note: 'Let Russian forces stage and strike from its territory in the 2022 war on Ukraine.' },
        { to: 'lithuania', type: 'war', label: 'Border & migrant crisis', note: 'Tensions soared after 2020 as Vilnius hosted the exiled opposition and faced an engineered migrant crisis.' }
      ],
      figures: [
        { name: 'Alexander Lukashenko', title: 'President', years: 'r. 1994–present' },
        { name: 'Svetlana Tikhanovskaya', title: 'Opposition leader (2020)', years: 'b. 1982' }
      ]
    }
  ]
}

export default belarus
