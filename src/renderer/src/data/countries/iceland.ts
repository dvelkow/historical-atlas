import type { Country } from '../countryTypes'

const iceland: Country = {
  id: 'iceland',
  name: 'Iceland',
  mapNames: ['Iceland', 'Icelandic Commonwealth'],
  color: '#79b6d6',
  centroid: [-19.0, 64.8],
  periods: [
    {
      startYear: 0,
      endYear: 874,
      eraId: 'roman',
      name: 'Unsettled North Atlantic',
      modernEquivalent: false,
      government: 'None (uninhabited)',
      capital: '—',
      religion: ['None'],
      culture: ['Uninhabited (Irish hermit visitors)'],
      summary:
        'For most of the first millennium Iceland was an empty volcanic island in the far North Atlantic, untouched by farming; only Irish hermit monks — the papar — are said to have wintered on its shores before the first Norse keels appeared.',
      relations: [],
      figures: []
    },
    {
      startYear: 874,
      endYear: 1262,
      eraId: 'early-medieval',
      name: 'Icelandic Commonwealth',
      government: 'Stateless commonwealth (chieftains & the Alþingi)',
      capital: 'Þingvellir (the Alþingi assembly site)',
      religion: ['Norse paganism → Christianity (from 1000)'],
      culture: ['Norse', 'Icelandic'],
      summary:
        'The Norse landnám (settlement) began around 874 with Ingólfr Arnarson at Reykjavík; in 930 the free farmers founded the Alþingi at Þingvellir — the world’s oldest parliament — adopted Christianity by peaceful vote in 1000, and produced the great sagas, before the bloody Sturlung feuds broke the stateless republic apart.',
      relations: [
        { to: 'norway', type: 'interaction', label: 'Norse motherland', note: 'Most settlers came from western Norway, fleeing the centralising King Harald Fairhair.' },
        { to: 'ireland', type: 'interaction', label: 'Gaelic strand & the papar', note: 'Settlers brought Gaelic slaves and wives; Irish monks had reputedly wintered there first.' },
        { to: 'denmark', type: 'interaction', label: 'Norse-world trade', note: 'Tied into the wider Scandinavian trading and cultural sphere of the Viking Age.' }
      ],
      figures: [
        { name: 'Ingólfr Arnarson', title: 'First Norse settler of Iceland', years: 'fl. c. 874' },
        { name: 'Leif Erikson', title: 'Iceland-born explorer of Vinland', years: 'c. 970–1020' },
        { name: 'Snorri Sturluson', title: 'Saga-writer & chieftain', years: '1179–1241' }
      ]
    },
    {
      startYear: 1262,
      endYear: 1380,
      eraId: 'high-medieval',
      name: 'Norwegian Rule',
      modernEquivalent: false,
      government: 'Dominion of the Norwegian crown',
      capital: '— (ruled from Norway)',
      religion: ['Catholic Christianity'],
      culture: ['Icelandic'],
      summary:
        'Exhausted by the Sturlung civil strife, the Icelandic chieftains swore the "Old Covenant" (Gamli sáttmáli) in 1262–64, submitting to the king of Norway in exchange for peace, law, and grain ships — ending the Commonwealth.',
      relations: [
        { to: 'norway', type: 'interaction', label: 'The Old Covenant (1262)', note: 'Iceland accepted the Norwegian king as sovereign under the Gamli sáttmáli.' },
        { to: 'denmark', type: 'interaction', label: 'Scandinavian orbit', note: 'Drawn into the dynastic politics of the Nordic kingdoms.' }
      ],
      figures: [
        { name: 'Gissur Þorvaldsson', title: 'Earl who brought Iceland under Norway', years: 'c. 1209–1268' },
        { name: 'Hákon IV of Norway', title: 'King who gained Iceland', years: 'r. 1217–1263' }
      ]
    },
    {
      startYear: 1380,
      endYear: 1814,
      eraId: 'late-medieval',
      name: 'Danish Rule',
      modernEquivalent: false,
      government: 'Possession of the Danish crown',
      capital: '— (ruled from Copenhagen)',
      religion: ['Catholic → Lutheran (Reformation imposed 1550)'],
      culture: ['Icelandic'],
      summary:
        'Through the Kalmar Union of 1380 Iceland passed with Norway to the Danish crown; Denmark forced the Lutheran Reformation (the last Catholic bishop beheaded in 1550), strangled the island with a royal trade monopoly, and saw it ravaged by the catastrophic Laki eruption of 1783.',
      relations: [
        { to: 'denmark', type: 'interaction', label: 'Danish crown & trade monopoly', note: 'The Kalmar Union brought Iceland under Denmark, later bound by a punishing royal trade monopoly.' },
        { to: 'norway', type: 'interaction', label: 'Old union dissolved', note: 'Long administered together with Norway before Denmark took direct control.' },
        { to: 'united-kingdom', type: 'interaction', label: 'English & "Turkish" raids', note: 'English fishermen contested its waters and Barbary corsairs raided in 1627.' }
      ],
      figures: [
        { name: 'Jón Arason', title: 'Last Catholic bishop of Iceland', years: '1484–1550' },
        { name: 'Guðbrandur Þorláksson', title: 'Bishop who printed the Icelandic Bible', years: '1541–1627' }
      ]
    },
    {
      startYear: 1814,
      endYear: 1918,
      eraId: 'long-19th',
      name: 'Danish Dependency & Home Rule',
      modernEquivalent: false,
      government: 'Danish dependency (home rule from 1904)',
      capital: 'Reykjavík',
      religion: ['Lutheran Christianity'],
      culture: ['Icelandic'],
      summary:
        'When Norway was lost to Sweden in 1814 Iceland stayed Danish; a national-romantic independence movement led by Jón Sigurðsson revived the Alþingi (1845) and won a constitution (1874) and home rule (1904).',
      relations: [
        { to: 'denmark', type: 'interaction', label: 'Struggle for self-rule', note: 'Decades of constitutional pressure won the Alþingi back and home rule in 1904.' },
        { to: 'norway', type: 'interaction', label: 'Parted Nordic paths', note: 'Severed from Norway after the 1814 Treaty of Kiel left Norway to Sweden.' },
        { to: 'united-kingdom', type: 'interaction', label: 'North Atlantic trade & emigration', note: 'British markets for fish and a wave of emigration to the wider world.' }
      ],
      figures: [
        { name: 'Jón Sigurðsson', title: 'Leader of the independence movement', years: '1811–1879' },
        { name: 'Hannes Hafstein', title: 'First Minister for Iceland (home rule)', years: '1861–1922' }
      ]
    },
    {
      startYear: 1918,
      endYear: 1944,
      eraId: 'world-wars',
      name: 'Kingdom of Iceland',
      modernEquivalent: false,
      government: 'Sovereign kingdom in personal union with Denmark',
      capital: 'Reykjavík',
      religion: ['Lutheran Christianity'],
      culture: ['Icelandic'],
      summary:
        'The Act of Union of 1918 made Iceland a sovereign kingdom sharing only its monarch with Denmark; cut off from occupied Copenhagen in 1940, the island was occupied first by Britain and then by the United States during the Second World War.',
      relations: [
        { to: 'denmark', type: 'interaction', label: 'Personal union (1918)', note: 'Shared the Danish king but governed itself, with the union open to revision after 25 years.' },
        { to: 'united-kingdom', type: 'war', label: 'British occupation (1940)', note: 'Britain pre-emptively occupied neutral Iceland after Denmark fell to Germany.' },
        { to: 'germany', type: 'war', label: 'Wartime sea-lanes', note: 'A strategic Allied base athwart the Atlantic convoy routes hunted by U-boats.' }
      ],
      figures: [
        { name: 'Christian X', title: 'King of Iceland & Denmark', years: 'r. 1918–1944' },
        { name: 'Sveinn Björnsson', title: 'Regent, later first President', years: '1881–1952' }
      ]
    },
    {
      startYear: 1944,
      endYear: 2025,
      eraId: 'cold-war',
      name: 'Republic of Iceland',
      government: 'Parliamentary republic',
      capital: 'Reykjavík',
      religion: ['Lutheran / secular'],
      culture: ['Icelandic'],
      summary:
        'Iceland declared a full republic at Þingvellir on 17 June 1944; a founding member of NATO (1949) despite having no army, it fought the "Cod Wars" with Britain over fishing limits, weathered the dramatic banking collapse of 2008, and rebuilt into a prosperous Nordic democracy.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'The Cod Wars (1958–1976)', note: 'Repeated confrontations as Iceland expanded its fishing limits against the Royal Navy.' },
        { to: 'norway', type: 'ally', label: 'Nordic & NATO partner', note: 'Close Nordic Council ties and a fellow founding member of NATO.' },
        { to: 'denmark', type: 'ally', label: 'Independence & Nordic cooperation', note: 'Amicable Nordic relations after the 1944 break, with manuscript treasures later returned.' }
      ],
      figures: [
        { name: 'Sveinn Björnsson', title: 'First President of Iceland', years: 'r. 1944–1952' },
        { name: 'Vigdís Finnbogadóttir', title: 'First elected female head of state', years: 'r. 1980–1996' },
        { name: 'Jóhanna Sigurðardóttir', title: 'Prime Minister after the 2008 crash', years: 'r. 2009–2013' }
      ]
    }
  ]
}

export default iceland
