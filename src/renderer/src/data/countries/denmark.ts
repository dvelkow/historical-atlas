import type { Country } from '../countryTypes'

const denmark: Country = {
  id: 'denmark',
  name: 'Denmark',
  mapNames: ['Denmark'],
  color: '#d05a5a',
  centroid: [9.5, 56.0],
  periods: [
    {
      startYear: 0,
      endYear: 793,
      eraId: 'roman',
      name: 'Nordic Iron Age',
      modernEquivalent: false,
      government: 'Tribal chieftaincies',
      capital: '— (no fixed centre)',
      religion: ['Norse paganism'],
      culture: ['Germanic', 'Norse'],
      summary:
        'The Jutland peninsula and Danish isles were home to Germanic tribes — among them the Angles and Jutes who sailed to Britain — whose chieftains traded with Rome and laid the cultural ground for the Viking age.',
      relations: [
        { to: 'united-kingdom', type: 'interaction', label: 'Angles & Jutes to Britain', note: 'Peoples from the Danish lands migrated to settle post-Roman Britain.' },
        { to: 'italy', type: 'interaction', label: 'Amber trade with Rome', note: 'Baltic amber flowed south to the Roman world along old trade routes.' }
      ],
      figures: []
    },
    {
      startYear: 793,
      endYear: 1397,
      eraId: 'early-medieval',
      name: 'Viking & Medieval Denmark',
      government: 'Kingdom',
      capital: 'Roskilde / Copenhagen',
      religion: ['Norse paganism → Catholicism'],
      culture: ['Danish', 'Norse'],
      summary: 'A seafaring Norse kingdom whose Vikings raided and ruled across the North Sea — in England, Frisia and Normandy — and which, Christianised under Harald Bluetooth, came to unite Scandinavia in the Kalmar Union (1397).',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Viking invasions of England', note: 'Danish raids, the Danelaw, and Cnut’s North Sea Empire.' },
        { to: 'netherlands', type: 'war', label: 'Raids on Frisia & Dorestad', note: 'Danish fleets repeatedly sacked the Low Countries’ great emporium.' },
        { to: 'germany', type: 'interaction', label: 'The southern frontier', note: 'The Danevirke and Holstein marked the border with the Saxons and the Empire.' },
        { to: 'sweden', type: 'interaction', label: 'Kalmar Union (1397)', note: 'A union of the Scandinavian crowns under Denmark.' }
      ],
      figures: [
        { name: 'Harald Bluetooth', title: 'King who Christianised Denmark', years: 'r. c. 958–986' },
        { name: 'Cnut the Great', title: 'King of the North Sea Empire', years: 'r. 1016–1035' }
      ]
    },
    {
      startYear: 1397,
      endYear: 1523,
      eraId: 'late-medieval',
      name: 'Kalmar Union',
      modernEquivalent: false,
      government: 'Dynastic union of three crowns',
      capital: 'Copenhagen',
      religion: ['Catholicism'],
      culture: ['Danish', 'Norse', 'Swedish'],
      summary:
        'Margaret I bound Denmark, Norway and Sweden into a single monarchy at Kalmar in 1397, creating a vast Nordic realm steered from Copenhagen. Danish dominance and the bloodshed of Christian II’s "Stockholm Bloodbath" bred Swedish resentment, and Gustav Vasa’s revolt finally broke Sweden away in 1523.',
      relations: [
        { to: 'sweden', type: 'war', label: 'Swedish revolts & the break-up', note: 'Resentment of Danish rule culminated in the Stockholm Bloodbath (1520) and Sweden’s secession under Gustav Vasa (1523).' },
        { to: 'norway', type: 'ally', label: 'Norway in the union', note: 'Norway — with Iceland and the North Atlantic — stayed tied to the Danish crown long after Sweden left.' },
        { to: 'germany', type: 'war', label: 'Struggle with the Hanseatic League', note: 'The union contested Baltic trade and the Sound with the German merchant towns of the Hansa.' }
      ],
      figures: [
        { name: 'Margaret I', title: 'Queen, architect of the union', years: 'r. 1387–1412' },
        { name: 'Christian II', title: 'Last Kalmar king of all three realms', years: 'r. 1513–1523' }
      ]
    },
    {
      startYear: 1523,
      endYear: 1814,
      eraId: 'early-modern',
      name: 'Denmark–Norway',
      modernEquivalent: false,
      government: 'Kingdom (later absolute monarchy)',
      capital: 'Copenhagen',
      religion: ['Lutheranism'],
      culture: ['Danish'],
      summary: 'A Baltic and North Atlantic power often at war with Sweden for regional dominance, until losing Norway in 1814.',
      relations: [
        { to: 'sweden', type: 'war', label: 'Dano-Swedish wars', note: 'Repeated wars for Baltic supremacy; the Treaty of Roskilde (1658) ceded the eastern provinces of Scania.' },
        { to: 'germany', type: 'war', label: 'The Thirty Years’ War', note: 'Christian IV intervened on the Protestant side before being driven back by imperial armies.' },
        { to: 'norway', type: 'ally', label: 'The dual monarchy', note: 'Norway, Iceland and the Faroes were ruled jointly from Copenhagen for nearly three centuries.' }
      ],
      figures: [
        { name: 'Christian IV', title: 'King of Denmark–Norway', years: 'r. 1588–1648' }
      ]
    },
    {
      startYear: 1814,
      endYear: 1914,
      eraId: 'long-19th',
      name: 'Constitutional Denmark',
      government: 'Absolute monarchy → constitutional monarchy',
      capital: 'Copenhagen',
      religion: ['Lutheranism'],
      culture: ['Danish'],
      summary:
        'The Treaty of Kiel (1814) stripped away Norway, leaving a smaller Denmark that flowered in a cultural "Golden Age" of Andersen and Kierkegaard. The June Constitution of 1849 ended royal absolutism, but defeat by Prussia and Austria in 1864 tore away Schleswig-Holstein and shrank the kingdom to its modern core.',
      relations: [
        { to: 'norway', type: 'war', label: 'Loss of Norway (1814)', note: 'The Treaty of Kiel ceded Norway to Sweden after Denmark’s alliance with Napoleon failed.' },
        { to: 'germany', type: 'war', label: 'The Second Schleswig War (1864)', note: 'Defeat by Prussia and Austria cost Denmark the duchies of Schleswig and Holstein.' },
        { to: 'united-kingdom', type: 'war', label: 'Bombardment of Copenhagen', note: 'British fleets attacked Copenhagen and seized the Danish navy during the Napoleonic Wars.' }
      ],
      figures: [
        { name: 'N.F.S. Grundtvig', title: 'Pastor, founder of the folk high schools', years: '1783–1872' },
        { name: 'Christian IX', title: 'King, "father-in-law of Europe"', years: 'r. 1863–1906' }
      ]
    },
    {
      startYear: 1914,
      endYear: 1945,
      eraId: 'world-wars',
      name: 'The World Wars',
      modernEquivalent: false,
      government: 'Constitutional monarchy',
      capital: 'Copenhagen',
      religion: ['Lutheranism'],
      culture: ['Danish'],
      summary:
        'Denmark stayed neutral through the First World War, and a 1920 plebiscite peacefully returned North Schleswig to the kingdom. Neutrality could not save it in 1940, when Nazi Germany occupied the country; in 1943 the Danish resistance famously ferried almost the entire Jewish population to safety in neutral Sweden.',
      relations: [
        { to: 'germany', type: 'war', label: 'Nazi occupation (1940–45)', note: 'Germany overran Denmark in a single day in April 1940 and occupied it until liberation in 1945.' },
        { to: 'germany', type: 'interaction', label: 'North Schleswig plebiscite (1920)', note: 'A post-war vote peacefully reunited the Danish-speaking north of Schleswig with Denmark.' },
        { to: 'sweden', type: 'ally', label: 'Rescue of the Danish Jews (1943)', note: 'The resistance smuggled some 7,000 Jews across the Øresund to safety in neutral Sweden.' }
      ],
      figures: [
        { name: 'Christian X', title: 'King through both World Wars', years: 'r. 1912–1947' },
        { name: 'Niels Bohr', title: 'Physicist who fled the occupation', years: '1885–1962' }
      ]
    },
    {
      startYear: 1945,
      endYear: 1993,
      eraId: 'cold-war',
      name: 'Cold-War Welfare State',
      government: 'Constitutional monarchy (parliamentary)',
      capital: 'Copenhagen',
      religion: ['Lutheran / secular'],
      culture: ['Danish'],
      summary:
        'Abandoning neutrality, Denmark became a founding member of NATO in 1949 and built one of the world’s most comprehensive universal welfare states. It joined the European Communities in 1973, anchoring itself firmly in the Western alliance on the Cold War’s northern flank.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'NATO founder (1949)', note: 'Denmark joined the United States and Britain as a founding member of the Atlantic alliance.' },
        { to: 'germany', type: 'ally', label: 'Joining the EEC (1973)', note: 'Denmark entered the European Communities alongside Britain and Ireland.' },
        { to: 'russia', type: 'interaction', label: 'The Baltic Cold War frontier', note: 'Danish forces guarded the Baltic approaches against the Soviet bloc.' }
      ],
      figures: [
        { name: 'Frederik IX', title: 'King of post-war Denmark', years: 'r. 1947–1972' },
        { name: 'Jens Otto Krag', title: 'Prime Minister who led Denmark into the EEC', years: 'r. 1962–68, 1971–72' }
      ]
    },
    {
      startYear: 1993,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Modern Denmark',
      government: 'Constitutional monarchy (parliamentary)',
      capital: 'Copenhagen',
      religion: ['Lutheran / secular'],
      culture: ['Danish'],
      summary:
        'After voters rejected the Maastricht Treaty, Denmark joined the European Union in 1993 with four negotiated opt-outs, keeping its own krone. The Øresund Bridge opened a road-and-rail link to Sweden in 2000, and Denmark remains a prosperous, high-trust Nordic democracy and a leader in wind energy.',
      relations: [
        { to: 'germany', type: 'ally', label: 'EU member with opt-outs', note: 'Joined the European Union under the Maastricht Treaty (1993) while keeping its euro and defence opt-outs.' },
        { to: 'sweden', type: 'ally', label: 'The Øresund Bridge (2000)', note: 'A bridge-and-tunnel link across the Øresund joined Copenhagen to Malmö.' },
        { to: 'united-kingdom', type: 'ally', label: 'NATO partner', note: 'A close Atlantic ally, contributing forces to NATO operations abroad.' }
      ],
      figures: [
        { name: 'Margrethe II', title: 'Queen', years: 'r. 1972–2024' },
        { name: 'Frederik X', title: 'King', years: 'r. 2024–present' }
      ]
    }
  ]
}

export default denmark
