import type { Country } from '../countryTypes'

const northMacedonia: Country = {
  id: 'north-macedonia',
  name: 'North Macedonia',
  mapNames: ['Macedonia', 'North Macedonia'],
  color: '#d4a833',
  centroid: [21.7, 41.6],
  periods: [
    {
      startYear: 0,
      endYear: 395,
      eraId: 'roman',
      name: 'Roman Macedonia',
      modernEquivalent: false,
      government: 'Roman province',
      capital: 'Thessalonica / Stobi & Scupi (regional centres)',
      religion: ['Roman & Greek paganism → Christianity'],
      culture: ['Roman', 'Greek', 'Paeonian'],
      summary:
        'The Vardar valley formed the northern reaches of the Roman province of Macedonia, crossed by the great Via Egnatia; the cities of Stobi and Scupi (modern Skopje) flourished as Roman colonies and trade hubs.',
      relations: [
        { to: 'italy', type: 'interaction', label: 'Roman province', note: 'Governed from Rome as part of the province of Macedonia, a key Balkan crossroads.' },
        { to: 'greece', type: 'interaction', label: 'The Via Egnatia', note: 'The Roman road linking the Adriatic to Byzantium ran through Macedonian territory.' }
      ],
      figures: [
        { name: 'Paul the Apostle', title: 'Christian missionary in Macedonia', years: 'c. 5–65' }
      ]
    },
    {
      startYear: 395,
      endYear: 1018,
      eraId: 'late-antique',
      name: 'Byzantine & First Bulgarian Macedonia',
      modernEquivalent: false,
      government: 'Byzantine themes / Bulgarian tsardom',
      capital: 'Ohrid (under Samuil)',
      religion: ['Orthodox Christianity'],
      culture: ['Slavic', 'Byzantine', 'Bulgarian'],
      summary:
        'Slavic tribes settled the region after Rome split; Ohrid became a great religious and literary centre where Saints Clement and Naum taught the Slavic letters, and Macedonia formed the heartland of Tsar Samuil’s Bulgarian empire until Basil II crushed it in 1018.',
      relations: [
        { to: 'bulgaria', type: 'interaction', label: 'Samuil’s tsardom', note: 'Ohrid was a capital of the First Bulgarian Empire under Tsar Samuil.' },
        { to: 'greece', type: 'war', label: 'Byzantine reconquest', note: 'Basil II "the Bulgar-Slayer" destroyed Samuil’s army and annexed the region in 1018.' },
        { to: 'russia', type: 'interaction', label: 'The Ohrid literary school', note: 'Clement and Naum of Ohrid spread the Slavic letters later carried across the Orthodox world.' }
      ],
      figures: [
        { name: 'Saint Clement of Ohrid', title: 'Scholar of the Ohrid school', years: 'd. 916' },
        { name: 'Saint Naum of Ohrid', title: 'Co-founder of the Ohrid school', years: 'c. 830–910' },
        { name: 'Tsar Samuil', title: 'Tsar of Bulgaria (Ohrid)', years: 'r. 997–1014' }
      ]
    },
    {
      startYear: 1018,
      endYear: 1371,
      eraId: 'high-medieval',
      name: 'Byzantine & Serbian Rule',
      modernEquivalent: false,
      government: 'Byzantine themes → Serbian Empire',
      capital: 'Skopje (Dušan’s capital)',
      religion: ['Orthodox Christianity'],
      culture: ['Byzantine', 'Slavic', 'Serbian'],
      summary:
        'Recovered by Byzantium after 1018, the region was contested for centuries before becoming the heartland of Stefan Dušan’s mighty Serbian Empire, who was crowned emperor at Skopje (1346) and made it his capital.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Dušan’s imperial capital', note: 'Stefan Dušan ruled his Serbian Empire from Skopje and issued his famous law code there.' },
        { to: 'greece', type: 'war', label: 'Byzantine rivalry', note: 'A frontier fought over by Byzantium, Serbia and Bulgaria across the high Middle Ages.' },
        { to: 'bulgaria', type: 'war', label: 'Balkan three-way contest', note: 'The Vardar lands changed hands in the rivalry between Bulgarian and Serbian tsars.' }
      ],
      figures: [
        { name: 'Stefan Dušan', title: 'Emperor of the Serbs (crowned at Skopje)', years: 'r. 1331–1355' }
      ]
    },
    {
      startYear: 1371,
      endYear: 1912,
      eraId: 'late-medieval',
      name: 'Ottoman Macedonia',
      modernEquivalent: false,
      government: 'Ottoman provinces (Rumelia)',
      capital: '— (ruled from Constantinople; Skopje a sanjak seat)',
      religion: ['Orthodox Christianity & Islam under Ottoman rule'],
      culture: ['Macedonian Slav', 'Turkish', 'Albanian', 'Greek'],
      summary:
        'For over five centuries the region lay under Ottoman rule as part of Rumelia; by the late 19th century the contested "Macedonian Question" set rival national movements against one another, culminating in the failed Ilinden Uprising of 1903.',
      relations: [
        { to: 'turkey', type: 'interaction', label: 'Under Ottoman rule', note: 'Part of Ottoman Rumelia for more than 500 years, with Skopje a major provincial centre.' },
        { to: 'bulgaria', type: 'interaction', label: 'The Macedonian Question', note: 'IMRO and Bulgarian, Greek and Serbian claims clashed over the region’s national future.' },
        { to: 'greece', type: 'war', label: 'Rival national movements', note: 'Greek, Bulgarian and Serbian bands fought a guerrilla struggle for Macedonia before 1912.' }
      ],
      figures: [
        { name: 'Gotse Delchev', title: 'Revolutionary, IMRO leader', years: '1872–1903' },
        { name: 'Krste Misirkov', title: 'Philologist of Macedonian identity', years: '1874–1926' }
      ]
    },
    {
      startYear: 1912,
      endYear: 1944,
      eraId: 'world-wars',
      name: 'Serbian / Yugoslav "Vardar Macedonia"',
      modernEquivalent: false,
      government: 'Serbian then Yugoslav administration ("South Serbia")',
      capital: 'Skopje',
      religion: ['Orthodox Christianity'],
      culture: ['Macedonian Slav', 'Serbian'],
      summary:
        'Won by Serbia in the Balkan Wars of 1912–13 and confirmed by the Treaty of Bucharest, the Vardar region was incorporated into the Kingdom of Yugoslavia and administered as "South Serbia," its Slavic population pressed to assimilate.',
      relations: [
        { to: 'serbia', type: 'interaction', label: 'Annexed as "South Serbia"', note: 'Ruled by Serbia and then the Kingdom of Yugoslavia after the Balkan Wars.' },
        { to: 'turkey', type: 'war', label: 'First Balkan War (1912)', note: 'The Balkan League drove the Ottomans from Macedonia in 1912.' },
        { to: 'bulgaria', type: 'war', label: 'Second Balkan War (1913)', note: 'Bulgaria fought its former allies over the partition of Macedonia and lost the Vardar zone.' }
      ],
      figures: [
        { name: 'Dimitrija Chupovski', title: 'Advocate of Macedonian statehood', years: '1878–1940' }
      ]
    },
    {
      startYear: 1944,
      endYear: 1991,
      eraId: 'cold-war',
      name: 'Socialist Republic of Macedonia',
      modernEquivalent: false,
      government: 'Federal republic of socialist Yugoslavia',
      capital: 'Skopje',
      religion: ['State atheism / Macedonian Orthodox'],
      culture: ['Macedonian'],
      summary:
        'Established as one of the six constituent republics of Tito’s Yugoslavia, the republic saw the formal codification of the Macedonian literary language (1945) and the restoration of the autonomous Macedonian Orthodox Church (1967).',
      relations: [
        { to: 'serbia', type: 'ally', label: 'Yugoslav federation', note: 'A republic within the Socialist Federal Republic of Yugoslavia alongside Serbia.' },
        { to: 'greece', type: 'interaction', label: 'The name dispute begins', note: 'Codifying a "Macedonian" nation sowed the long disagreement with neighbouring Greece.' },
        { to: 'bulgaria', type: 'interaction', label: 'Disputed language & history', note: 'Sofia contested the new codified Macedonian language and national narrative.' }
      ],
      figures: [
        { name: 'Lazar Koliševski', title: 'First republic leader', years: 'r. 1945–1963' },
        { name: 'Blaže Koneski', title: 'Codifier of the Macedonian language', years: '1921–1993' }
      ]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'North Macedonia',
      government: 'Parliamentary republic',
      capital: 'Skopje',
      religion: ['Macedonian Orthodox / Islam / secular'],
      culture: ['Macedonian', 'Albanian'],
      summary:
        'Macedonia became peacefully independent in 1991; after a decades-long name dispute with Greece, the Prespa Agreement (2018) renamed the country North Macedonia, opening the way to NATO membership in 2020 and EU candidacy.',
      relations: [
        { to: 'greece', type: 'ally', label: 'Prespa Agreement (2018)', note: 'Resolved the name dispute by renaming the country North Macedonia, ending Greek vetoes.' },
        { to: 'serbia', type: 'interaction', label: 'Peaceful separation', note: 'Left Yugoslavia without war in 1991, the only republic to do so peacefully.' },
        { to: 'albania', type: 'ally', label: 'Ohrid Framework & NATO', note: 'The 2001 Ohrid Agreement secured Albanian-minority rights; both joined NATO in the same era.' }
      ],
      figures: [
        { name: 'Kiro Gligorov', title: 'First President of independent Macedonia', years: 'r. 1991–1999' },
        { name: 'Zoran Zaev', title: 'Prime Minister (Prespa Agreement)', years: 'r. 2017–2022' }
      ]
    }
  ]
}

export default northMacedonia
