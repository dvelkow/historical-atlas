import type { Country } from '../countryTypes'

const turkey: Country = {
  id: 'turkey',
  name: 'Turkey',
  mapNames: ['Turkey'],
  color: '#c0843a',
  centroid: [33.0, 39.2],
  periods: [
    {
      startYear: 0,
      endYear: 1071,
      eraId: 'roman',
      name: 'Roman & Byzantine Anatolia',
      modernEquivalent: false,
      government: 'Roman / Byzantine provinces',
      capital: 'Constantinople / Nicaea',
      religion: ['Eastern Orthodox Christianity'],
      culture: ['Greek', 'Anatolian'],
      summary:
        'For a thousand years Anatolia was the wealthy heartland of the Roman and then Byzantine Empire — its cities, fields and silver the richest provinces of the realm — until the Seljuk victory at Manzikert (1071) threw open the plateau to Turkic settlement.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Byzantine heartland', note: 'Anatolia and the Aegean formed the core of the Greek-speaking Eastern Roman world.' },
        { to: 'italy', type: 'war', label: 'Wars with Rome & the Latins', note: 'From the Gothic and Lombard wars to the gathering rivalry with the Latin West.' },
        { to: 'russia', type: 'interaction', label: 'Rus’ raids & trade', note: 'The Rus’ raided and traded with Constantinople along the Black Sea.' }
      ],
      figures: [
        { name: 'Constantine the Great', title: 'Roman Emperor (founded Constantinople)', years: 'r. 306–337' },
        { name: 'Justinian I', title: 'Byzantine Emperor', years: 'r. 527–565' },
        { name: 'Basil II', title: 'Byzantine Emperor (the Bulgar-Slayer)', years: 'r. 976–1025' }
      ]
    },
    {
      startYear: 1077,
      endYear: 1299,
      eraId: 'high-medieval',
      name: 'Seljuk Sultanate of Rum',
      modernEquivalent: false,
      government: 'Turkic sultanate',
      capital: 'Konya',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Persianate'],
      summary:
        'After Manzikert the Seljuk Turks settled Anatolia, and the Sultanate of Rum at Konya turned it into a Turkish-Muslim land — the cradle of what became Turkey — until the Mongols crushed it at Köse Dağ (1243) and the rising beyliks broke it apart.',
      relations: [
        { to: 'greece', type: 'war', label: 'Wars with Byzantium', note: 'The Seljuks seized the Anatolian plateau from a reeling Byzantium.' },
        { to: 'france', type: 'war', label: 'The Crusades pass through', note: 'Crusader armies fought across Seljuk Anatolia en route to Jerusalem.' },
        { to: 'italy', type: 'interaction', label: 'Italian sea-trade', note: 'Venetian and Genoese merchants traded along the Anatolian coasts.' }
      ],
      figures: [
        { name: 'Alp Arslan', title: 'Great Seljuk Sultan (Manzikert)', years: 'r. 1063–1072' },
        { name: 'Kilij Arslan II', title: 'Sultan of Rum', years: 'r. 1156–1192' },
        { name: 'Rumi', title: 'Sufi poet & mystic of Konya', years: '1207–1273' }
      ]
    },
    {
      startYear: 1299,
      endYear: 1453,
      eraId: 'late-medieval',
      name: 'Rise of the Ottomans',
      government: 'Frontier beylik → sultanate',
      capital: 'Bursa / Edirne',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Ottoman'],
      summary:
        'From a small frontier beylik in Bithynia, Osman’s house grew through Bursa and Edirne to straddle Europe and Asia; victory over the Serbs at Kosovo (1389) secured the Balkans, but Bayezid I’s defeat by Timur at Ankara (1402) plunged the realm into an interregnum, from which Mehmed I rebuilt it.',
      relations: [
        { to: 'serbia', type: 'war', label: 'Battle of Kosovo (1389)', note: 'The Ottomans broke the Serbian-led coalition, opening the Balkans to conquest.' },
        { to: 'bulgaria', type: 'war', label: 'Conquest of Bulgaria', note: 'The Second Bulgarian Empire was absorbed after the fall of Tarnovo (1393–96).' },
        { to: 'hungary', type: 'war', label: 'Crusade of Nicopolis (1396)', note: 'Bayezid I shattered a Hungarian-led crusader army on the Danube.' },
        { to: 'greece', type: 'war', label: 'Encircling Byzantium', note: 'The shrinking Byzantine Empire was reduced almost to Constantinople itself.' }
      ],
      figures: [
        { name: 'Osman I', title: 'Founder of the dynasty', years: 'r. c. 1299–1326' },
        { name: 'Bayezid I', title: 'Sultan (the Thunderbolt)', years: 'r. 1389–1402' },
        { name: 'Mehmed I', title: 'Sultan (restored the empire)', years: 'r. 1413–1421' }
      ]
    },
    {
      startYear: 1453,
      endYear: 1566,
      eraId: 'late-medieval',
      name: 'The Classical Age',
      government: 'Imperial sultanate',
      capital: 'Constantinople (Istanbul)',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Ottoman'],
      summary:
        'Mehmed II took Constantinople in 1453, ending the Roman Empire and making the city his capital; Selim I conquered the Mamluks and assumed the caliphate (1517), and under Suleiman the Magnificent the empire reached its zenith of power, law and splendour.',
      relations: [
        { to: 'greece', type: 'war', label: 'Fall of Constantinople (1453)', note: 'Mehmed II’s conquest extinguished the last Byzantine state.' },
        { to: 'austria', type: 'war', label: 'Siege of Vienna (1529)', note: 'Suleiman besieged the Habsburg capital after crushing Hungary at Mohács (1526).' },
        { to: 'hungary', type: 'war', label: 'Battle of Mohács (1526)', note: 'The destruction of the Hungarian army opened central Europe to the Ottomans.' },
        { to: 'france', type: 'ally', label: 'Franco-Ottoman alliance (1536)', note: 'A pragmatic entente with France against the Habsburgs.' }
      ],
      figures: [
        { name: 'Mehmed II', title: 'The Conqueror', years: 'r. 1451–1481' },
        { name: 'Selim I', title: 'Sultan (the Grim)', years: 'r. 1512–1520' },
        { name: 'Suleiman the Magnificent', title: 'Sultan (the Lawgiver)', years: 'r. 1520–1566' }
      ]
    },
    {
      startYear: 1566,
      endYear: 1699,
      eraId: 'early-modern',
      name: 'Wars & the First Retreat',
      government: 'Imperial sultanate',
      capital: 'Constantinople (Istanbul)',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Ottoman'],
      summary:
        'The empire remained a great power but its momentum waned: the navy was checked at Lepanto (1571), the second siege of Vienna (1683) ended in disaster before the Polish-led relief, and the Treaty of Karlowitz (1699) marked the first great surrender of territory to Christian Europe.',
      relations: [
        { to: 'italy', type: 'war', label: 'Battle of Lepanto (1571)', note: 'A Holy League fleet led by Venice and Spain destroyed the Ottoman navy.' },
        { to: 'austria', type: 'war', label: 'Second Siege of Vienna (1683)', note: 'The failed siege and Habsburg counter-offensive reversed the tide in the Balkans.' },
        { to: 'poland', type: 'war', label: 'Relief of Vienna', note: 'Jan Sobieski’s Polish cavalry broke the siege of Vienna in 1683.' },
        { to: 'hungary', type: 'war', label: 'Loss of Hungary (Karlowitz)', note: 'Karlowitz (1699) ceded most of Hungary and Transylvania to the Habsburgs.' }
      ],
      figures: [
        { name: 'Selim II', title: 'Sultan (Lepanto)', years: 'r. 1566–1574' },
        { name: 'Köprülü Fazıl Ahmed', title: 'Grand Vizier', years: '1635–1676' },
        { name: 'Kara Mustafa Pasha', title: 'Grand Vizier (besieged Vienna)', years: 'd. 1683' }
      ]
    },
    {
      startYear: 1699,
      endYear: 1839,
      eraId: 'early-modern',
      name: 'The Long Decline',
      government: 'Imperial sultanate',
      capital: 'Constantinople (Istanbul)',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Ottoman'],
      summary:
        'A century and a half of steady retreat before Russia and the Habsburgs: the loss of the Crimea to Catherine the Great (1783), the rise of Serbian and Greek independence, and reforming sultans struggling to modernise an army and state that the European powers increasingly dwarfed.',
      relations: [
        { to: 'russia', type: 'war', label: 'Russo-Turkish Wars', note: 'Repeated defeats ceded the northern Black Sea coast and the Crimea (1783).' },
        { to: 'austria', type: 'war', label: 'Habsburg frontier wars', note: 'Continued Balkan warfare with Austria across the Danube.' },
        { to: 'serbia', type: 'war', label: 'Serbian uprisings (1804–1815)', note: 'Revolts won Serbia autonomy and a path to independence.' },
        { to: 'greece', type: 'war', label: 'Greek War of Independence', note: 'Greece won independence with European help (1821–1832).' }
      ],
      figures: [
        { name: 'Selim III', title: 'Reforming Sultan', years: 'r. 1789–1807' },
        { name: 'Mahmud II', title: 'Sultan (modernising reformer)', years: 'r. 1808–1839' }
      ]
    },
    {
      startYear: 1839,
      endYear: 1922,
      eraId: 'long-19th',
      name: 'Reform, Collapse & Partition',
      modernEquivalent: false,
      government: 'Constitutional → autocratic sultanate',
      capital: 'Constantinople (Istanbul)',
      religion: ['Sunni Islam'],
      culture: ['Turkish', 'Ottoman'],
      summary:
        'The Tanzimat reforms tried to remake the "Sick Man of Europe"; Abdülhamid II ruled as an autocrat until the Young Turk revolution (1908); the Balkan Wars (1912–13) stripped away nearly all European lands. Defeat in the First World War — during which the regime carried out the Armenian Genocide (1915), in which roughly a million Armenians were killed — brought Allied occupation and the abolition of the sultanate (1922).',
      relations: [
        { to: 'russia', type: 'war', label: 'Russo-Turkish War (1877–78)', note: 'Defeat cost most of the Balkans and forced recognition of new states.' },
        { to: 'bulgaria', type: 'war', label: 'Balkan Wars (1912–13)', note: 'The Balkan League drove the Ottomans almost entirely out of Europe.' },
        { to: 'greece', type: 'war', label: 'Balkan Wars & WWI', note: 'Greece took Ottoman lands in 1912–13 and contested Anatolia after 1918.' },
        { to: 'germany', type: 'ally', label: 'Central Powers in WWI', note: 'The Ottomans entered the First World War alongside Germany (1914).' }
      ],
      figures: [
        { name: 'Abdülmecid I', title: 'Sultan (launched the Tanzimat)', years: 'r. 1839–1861' },
        { name: 'Abdülhamid II', title: 'Autocratic Sultan', years: 'r. 1876–1909' },
        { name: 'Enver Pasha', title: 'Young Turk war minister', years: '1881–1922' }
      ]
    },
    {
      startYear: 1923,
      endYear: 1950,
      eraId: 'world-wars',
      name: 'Atatürk’s Republic',
      government: 'Single-party republic',
      capital: 'Ankara',
      religion: ['Secular state (Sunni-majority)'],
      culture: ['Turkish'],
      summary:
        'Mustafa Kemal Atatürk forged a secular nation-state from Ankara out of the empire’s ruins, abolishing the caliphate and driving sweeping reforms — a new Latin alphabet, secular law, the Western calendar and women’s suffrage. Under his successor İsmet İnönü, Turkey kept a careful neutrality through most of the Second World War.',
      relations: [
        { to: 'greece', type: 'war', label: 'Greco-Turkish War (1919–22)', note: 'The Turkish victory and 1923 population exchange settled the new borders.' },
        { to: 'greece', type: 'ally', label: 'Balkan Entente (1934)', note: 'Atatürk and Venizelos turned old enemies into partners in a regional pact.' },
        { to: 'germany', type: 'interaction', label: 'Wartime neutrality', note: 'Turkey stayed largely neutral, declaring war on Germany only in 1945.' },
        { to: 'united-kingdom', type: 'ally', label: 'Anglo-French treaty (1939)', note: 'A mutual-assistance pact, though Turkey avoided active belligerence.' }
      ],
      figures: [
        { name: 'Mustafa Kemal Atatürk', title: 'Founding President', years: 'r. 1923–1938' },
        { name: 'İsmet İnönü', title: 'President (wartime leader)', years: 'r. 1938–1950' }
      ]
    },
    {
      startYear: 1950,
      endYear: 2002,
      eraId: 'cold-war',
      name: 'Multiparty Turkey & the Coups',
      modernEquivalent: false,
      government: 'Multiparty republic (interrupted by coups)',
      capital: 'Ankara',
      religion: ['Secular state (Sunni-majority)'],
      culture: ['Turkish'],
      summary:
        'Free elections in 1950 ended single-party rule, and NATO membership (1952) anchored Turkey to the West against the Soviet Union. But democracy was repeatedly broken by military coups (1960, 1971, 1980), and in 1974 Turkey intervened in Cyprus, dividing the island.',
      relations: [
        { to: 'greece', type: 'war', label: 'Cyprus intervention (1974)', note: 'The Turkish landing partitioned Cyprus and inflamed relations with Greece.' },
        { to: 'germany', type: 'ally', label: 'NATO & guest workers', note: 'A NATO ally whose workers emigrated in huge numbers to West Germany.' },
        { to: 'russia', type: 'interaction', label: 'Cold War frontline', note: 'Turkey guarded NATO’s southeastern flank facing the Soviet Union.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Cyprus guarantor', note: 'Britain, Greece and Turkey were the treaty guarantors of Cyprus.' }
      ],
      figures: [
        { name: 'Adnan Menderes', title: 'PM (deposed and executed)', years: 'r. 1950–1960' },
        { name: 'Süleyman Demirel', title: 'Long-serving PM & President', years: '1924–2015' },
        { name: 'Turgut Özal', title: 'PM & President (liberal reformer)', years: 'r. 1983–1993' }
      ]
    },
    {
      startYear: 2002,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'Erdoğan’s Turkey',
      government: 'Presidential republic',
      capital: 'Ankara',
      religion: ['Secular state (Sunni-majority)'],
      culture: ['Turkish'],
      summary:
        'The AKP under Recep Tayyip Erdoğan brought years of rapid economic growth before a turn toward democratic backsliding, capped by a failed coup (2016) and a switch to a powerful executive presidency. A long-stalled EU bid gave way to a more assertive, independent regional power.',
      relations: [
        { to: 'greece', type: 'interaction', label: 'Aegean & migration disputes', note: 'Recurring tension over maritime borders, energy and refugee flows.' },
        { to: 'germany', type: 'interaction', label: 'Stalled EU accession', note: 'EU membership talks opened in 2005 but effectively froze.' },
        { to: 'russia', type: 'interaction', label: 'Rivals and dealmakers', note: 'Clashing in Syria and Libya yet cooperating on energy and arms.' },
        { to: 'united-kingdom', type: 'ally', label: 'NATO partner', note: 'A pivotal member of NATO’s southeastern flank.' }
      ],
      figures: [
        { name: 'Recep Tayyip Erdoğan', title: 'PM then President', years: 'PM 2003–2014; President 2014–' },
        { name: 'Abdullah Gül', title: 'President', years: 'r. 2007–2014' }
      ]
    }
  ]
}

export default turkey
