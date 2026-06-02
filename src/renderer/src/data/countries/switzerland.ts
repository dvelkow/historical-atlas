import type { Country } from '../countryTypes'

const switzerland: Country = {
  id: 'switzerland',
  name: 'Switzerland',
  mapNames: ['Switzerland'],
  color: '#9a4040',
  centroid: [8.2, 46.8],
  periods: [
    {
      startYear: 0,
      endYear: 476,
      eraId: 'roman',
      name: 'Roman Helvetia & Raetia',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Aventicum (Avenches)',
      religion: ['Celtic & Roman paganism'],
      culture: ['Helvetii', 'Raeti', 'Roman'],
      summary:
        'The Celtic Helvetii were turned back by Caesar in 58 BCE and their Alpine lands organised into Roman Helvetia and Raetia — crossed by vital trans-Alpine roads — until the Alemanni and Burgundians settled them as Rome fell.',
      relations: [
        { to: 'italy', type: 'war', label: 'Caesar halts the Helvetii', note: 'Caesar defeated the migrating Helvetii at Bibracte in 58 BCE and made the land Roman.' },
        { to: 'france', type: 'interaction', label: 'Roman Gaul', note: 'Helvetia formed part of the Roman Gallic provinces.' }
      ],
      figures: [
        { name: 'Divico', title: 'Helvetii leader vs. Rome', years: 'fl. 1st century BCE' }
      ]
    },
    {
      startYear: 476,
      endYear: 1291,
      eraId: 'early-medieval',
      name: 'Alemannic & Burgundian Lands',
      modernEquivalent: false,
      government: 'Germanic kingdoms within the Frankish realm & Empire',
      capital: '— (Sankt Gallen, Zürich)',
      religion: ['Christianity'],
      culture: ['Alemannic', 'Burgundian', 'Romansh'],
      summary:
        'Settled by the Alemanni in the north and Burgundians in the west, the Alpine lands were Christianised by Irish monks like Saint Gall, absorbed into the Frankish realm and then the Holy Roman Empire — the patchwork from which the Confederacy would spring in 1291.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Within the Empire', note: 'The Alpine lands lay inside East Francia and the Holy Roman Empire.' },
        { to: 'france', type: 'interaction', label: 'Burgundian west', note: 'The western, French-speaking lands belonged to the kingdom of Burgundy.' },
        { to: 'ireland', type: 'interaction', label: 'Irish missionaries', note: 'Saint Gall and other Irish monks founded the great Alpine monasteries.' }
      ],
      figures: [
        { name: 'Saint Gall', title: 'Irish monk, founder of St Gallen', years: 'c. 550–646' }
      ]
    },
    {
      startYear: 1291,
      endYear: 1798,
      eraId: 'high-medieval',
      name: 'Old Swiss Confederacy',
      government: 'Confederation of cantons',
      capital: '— (no fixed capital; Tagsatzung diet)',
      religion: ['Catholic, then split Catholic & Reformed (from 1520s)'],
      culture: ['German', 'French', 'Italian', 'Romansh'],
      summary:
        'The 1291 alliance of forest cantons grew by crushing the Habsburgs at Morgarten (1315) and Sempach (1386) and Burgundy under Charles the Bold; famed for its pikemen and mercenaries, it won independence from the Empire at Westphalia (1648) but was riven by the Reformation of Zwingli and Calvin.',
      relations: [
        { to: 'austria', type: 'war', label: 'Habsburg wars of independence', note: 'The cantons routed Habsburg armies at Morgarten in 1315 and Sempach in 1386.' },
        { to: 'germany', type: 'interaction', label: 'Empire & Reformation', note: 'Nominally within the Holy Roman Empire until 1648, the land split between Zwingli’s Zürich and the Catholic cantons.' },
        { to: 'france', type: 'war', label: 'Burgundian Wars & mercenary service', note: 'Swiss pikemen broke Charles the Bold of Burgundy and later served as the kings of France’s guard.' },
        { to: 'italy', type: 'war', label: 'Lombard campaigns', note: 'Swiss expansion into Lombardy ended in the bloody defeat at Marignano in 1515.' }
      ],
      figures: [
        { name: 'Huldrych Zwingli', title: 'Reformer of Zürich', years: '1484–1531' },
        { name: 'Niklaus von Flüe', title: 'Hermit & peacemaker', years: '1417–1487' }
      ]
    },
    {
      startYear: 1798,
      endYear: 1848,
      eraId: 'revolutionary',
      name: 'Helvetic Republic & Restoration',
      modernEquivalent: false,
      government: 'French client republic, then restored confederation',
      capital: 'Aarau / Lucerne / Bern (shifting)',
      religion: ['Catholic & Reformed'],
      culture: ['German', 'French', 'Italian', 'Romansh'],
      summary:
        'French armies invaded in 1798 and imposed the centralised Helvetic Republic; Napoleon’s 1803 Act of Mediation restored the cantons, and after 1815 the loose confederation returned — until the brief Sonderbund civil war of 1847 forced a federal solution.',
      relations: [
        { to: 'france', type: 'war', label: 'Invasion & Mediation', note: 'French troops overthrew the old order in 1798 and Napoleon redrew the cantons in 1803.' },
        { to: 'austria', type: 'interaction', label: 'Restoration order', note: 'The 1815 Congress of Vienna guaranteed Swiss neutrality and the restored confederation.' }
      ],
      figures: [
        { name: 'Frédéric-César de La Harpe', title: 'Helvetic Republic leader', years: '1754–1838' },
        { name: 'Guillaume-Henri Dufour', title: 'General who won the Sonderbund war', years: '1787–1875' }
      ]
    },
    {
      startYear: 1848,
      endYear: 2025,
      eraId: 'long-19th',
      name: 'Federal Switzerland',
      government: 'Federal directorial republic',
      capital: 'Bern',
      religion: ['Catholic & Protestant, secular state'],
      culture: ['German', 'French', 'Italian', 'Romansh'],
      summary:
        'The 1848 federal constitution created the modern state; armed neutrality kept it out of both World Wars, Henri Dunant founded the Red Cross in 1863, and it grew into a global banking hub — joining the UN only in 2002 while staying outside the European Union.',
      relations: [
        { to: 'france', type: 'interaction', label: 'Neutral neighbour', note: 'A peaceful francophone border and deep economic ties marked relations with France.' },
        { to: 'germany', type: 'interaction', label: 'Neutrality in the World Wars', note: 'Surrounded by the Axis after 1940, Switzerland held to armed neutrality and uneasy trade.' },
        { to: 'italy', type: 'interaction', label: 'Alpine neighbour', note: 'Shared Alpine passes and the Italian-speaking canton of Ticino bound the two states.' }
      ],
      figures: [
        { name: 'Henri Dunant', title: 'Founder of the Red Cross', years: '1828–1910' },
        { name: 'Guillaume-Henri Dufour', title: 'First federal general & mapmaker', years: '1787–1875' }
      ]
    }
  ]
}

export default switzerland
