import type { Country } from '../countryTypes'

const france: Country = {
  id: 'france',
  name: 'France',
  mapNames: ['France'],
  color: '#3b6fb0',
  centroid: [2.5, 46.6],
  periods: [
    {
      startYear: 0,
      endYear: 481,
      eraId: 'roman',
      name: 'Roman Gaul',
      modernEquivalent: false,
      government: 'Roman provinces',
      capital: 'Lugdunum (Lyon)',
      religion: ['Roman polytheism', 'later Christianity'],
      culture: ['Gallo-Roman'],
      summary:
        'Conquered by Caesar, Gaul became a prosperous, thoroughly Romanised group of provinces until Germanic peoples overran the Rhine frontier.',
      relations: [
        { to: 'germany', type: 'war', label: 'Rhine frontier wars', note: 'Centuries of conflict with the Germanic tribes across the Rhine.' }
      ],
      figures: [{ name: 'Saint Martin of Tours', title: 'Bishop & monk', years: 'c. 316–397' }]
    },
    {
      startYear: 481,
      endYear: 987,
      eraId: 'early-medieval',
      name: 'Frankish Kingdom',
      government: 'Germanic kingdom (Merovingian → Carolingian)',
      capital: 'Paris / Aachen',
      religion: ['Catholic Christianity'],
      culture: ['Frankish', 'Gallo-Roman'],
      summary:
        'Clovis united the Franks and converted to Catholicism; Charlemagne built an empire crowned in 800, later partitioned at Verdun (843) into the seeds of France and Germany.',
      relations: [
        { to: 'germany', type: 'interaction', label: 'Treaty of Verdun (843)', note: 'The Frankish empire split into West (France) and East (Germany) Francia.' },
        { to: 'spain', type: 'war', label: 'Battle of Tours (732)', note: 'Charles Martel halted the Umayyad advance from Iberia.' }
      ],
      figures: [
        { name: 'Clovis I', title: 'King of the Franks', years: 'r. 481–511' },
        { name: 'Charlemagne', title: 'Emperor of the Romans', years: 'r. 768–814' }
      ]
    },
    {
      startYear: 987,
      endYear: 1328,
      eraId: 'high-medieval',
      name: 'Kingdom of France (Capetian)',
      government: 'Feudal monarchy',
      capital: 'Paris',
      religion: ['Roman Catholicism'],
      culture: ['French'],
      summary:
        'From a small royal domain around Paris the Capetians steadily expanded royal power, clashing with the Angevin kings of England and joining the Crusades.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Angevin–Capetian wars', note: 'France clawed back the vast Plantagenet holdings in France.' },
        { to: 'germany', type: 'interaction', label: 'Rivalry with the Empire', note: 'Competition with the Holy Roman Empire over the Rhineland and the Papacy.' }
      ],
      figures: [
        { name: 'Philip II Augustus', title: 'King of France', years: 'r. 1180–1223' },
        { name: 'Louis IX (St Louis)', title: 'King & crusader', years: 'r. 1226–1270' }
      ]
    },
    {
      startYear: 1328,
      endYear: 1453,
      eraId: 'late-medieval',
      name: 'Kingdom of France (Valois)',
      government: 'Feudal monarchy',
      capital: 'Paris',
      religion: ['Roman Catholicism'],
      culture: ['French'],
      summary:
        'The disputed succession plunged France into the Hundred Years’ War with England; Joan of Arc turned the tide and the Valois expelled the English by 1453.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: "Hundred Years' War", note: 'A dynastic war over the French crown — Crécy, Agincourt, Orléans.' }
      ],
      figures: [
        { name: 'Joan of Arc', title: 'French heroine', years: '1412–1431' },
        { name: 'Charles VII', title: 'King of France', years: 'r. 1422–1461' }
      ]
    },
    {
      startYear: 1453,
      endYear: 1589,
      eraId: 'early-modern',
      name: 'Renaissance France (Valois)',
      government: 'Renaissance monarchy',
      capital: 'Paris',
      religion: ['Roman Catholicism', 'Huguenot (Calvinist) minority'],
      culture: ['French'],
      summary:
        'France contested Italy with Habsburg Spain, embraced the Renaissance under Francis I, and was torn by the Wars of Religion between Catholics and Huguenots.',
      relations: [
        { to: 'spain', type: 'war', label: 'Italian Wars', note: 'Habsburg–Valois struggle for dominance in Italy and Europe.' },
        { to: 'italy', type: 'interaction', label: 'Italian Wars campaigns', note: 'French armies repeatedly invaded the Italian peninsula.' },
        { to: 'turkey', type: 'ally', label: 'Franco-Ottoman alliance (1536)', note: 'A Catholic–Muslim entente against the common Habsburg enemy.' }
      ],
      figures: [{ name: 'Francis I', title: 'King of France', years: 'r. 1515–1547' }]
    },
    {
      startYear: 1589,
      endYear: 1789,
      eraId: 'early-modern',
      name: 'Bourbon France',
      government: 'Absolute monarchy',
      capital: 'Paris / Versailles',
      religion: ['Roman Catholicism'],
      culture: ['French'],
      summary:
        'Under Richelieu and the "Sun King" Louis XIV, France became Europe’s dominant power, centralised and at near-constant war with the Habsburgs, the Dutch, and Britain.',
      relations: [
        { to: 'spain', type: 'war', label: 'Franco-Spanish wars', note: 'Decades of conflict ending Spanish preeminence.' },
        { to: 'netherlands', type: 'war', label: 'Franco-Dutch War (1672)', note: "Louis XIV's invasion of the Dutch Republic." },
        { to: 'austria', type: 'war', label: 'Habsburg rivalry', note: 'Rivalry with Austria, reversed by the 1756 Diplomatic Revolution.' },
        { to: 'united-kingdom', type: 'war', label: 'Colonial & continental wars', note: 'A century of Anglo-French wars for empire.' }
      ],
      figures: [
        { name: 'Cardinal Richelieu', title: 'Chief minister', years: '1585–1642' },
        { name: 'Louis XIV', title: 'The Sun King', years: 'r. 1643–1715' }
      ]
    },
    {
      startYear: 1789,
      endYear: 1815,
      eraId: 'revolutionary',
      name: 'Revolution & First Empire',
      government: 'Republic → Napoleonic empire',
      capital: 'Paris',
      religion: ['Catholic / secular'],
      culture: ['French'],
      summary:
        'The Revolution toppled the monarchy and remade society; Napoleon then dominated the continent until the coalitions brought him down at Waterloo.',
      relations: [
        { to: 'united-kingdom', type: 'war', label: 'Napoleonic Wars', note: "Britain's wealth and navy financed the coalitions against France." },
        { to: 'austria', type: 'war', label: 'War of the coalitions', note: 'Austerlitz (1805) and repeated Austrian defeats.' },
        { to: 'russia', type: 'war', label: 'Invasion of Russia (1812)', note: 'The disastrous campaign that destroyed the Grande Armée.' }
      ],
      figures: [
        { name: 'Napoleon Bonaparte', title: 'Emperor of the French', years: 'r. 1804–1815' }
      ]
    },
    {
      startYear: 1815,
      endYear: 1870,
      eraId: 'long-19th',
      name: 'Restoration & Second Empire',
      government: 'Constitutional monarchy → Second Empire',
      capital: 'Paris',
      religion: ['Roman Catholicism'],
      culture: ['French'],
      summary:
        'France cycled through restored monarchy, revolutions, and Napoleon III’s Second Empire, fighting in the Crimea and Italy before defeat by Prussia.',
      relations: [
        { to: 'united-kingdom', type: 'ally', label: 'Crimean War alliance', note: 'Britain and France fought Russia together (1853–56).' },
        { to: 'russia', type: 'war', label: 'Crimean War', note: 'Allied war to check Russian expansion at Ottoman expense.' },
        { to: 'austria', type: 'war', label: 'War of 1859', note: 'France backed Piedmont against Austria in Italy.' }
      ],
      figures: [{ name: 'Napoleon III', title: 'Emperor of the French', years: 'r. 1852–1870' }]
    },
    {
      startYear: 1870,
      endYear: 1940,
      eraId: 'world-wars',
      name: 'Third Republic',
      government: 'Parliamentary republic',
      capital: 'Paris',
      religion: ['Catholic / secular (laïcité)'],
      culture: ['French'],
      summary:
        'The republic built a colonial empire and anchored the Triple Entente; it bore the worst of the Western Front in WWI before falling to Germany in 1940.',
      relations: [
        { to: 'germany', type: 'war', label: 'WWI & rivalry over Alsace-Lorraine', note: 'From the 1871 loss to the trenches of 1914–18.' },
        { to: 'russia', type: 'ally', label: 'Franco-Russian Alliance (1894)', note: 'A counterweight to Germany and Austria-Hungary.' },
        { to: 'united-kingdom', type: 'ally', label: 'Entente Cordiale (1904)', note: 'The core of the Allied coalition in both world wars.' }
      ],
      figures: [
        { name: 'Georges Clemenceau', title: 'Wartime Prime Minister', years: '1841–1929' }
      ]
    },
    {
      startYear: 1944,
      endYear: 1990,
      eraId: 'cold-war',
      name: 'Fourth & Fifth Republic',
      government: 'Republic (semi-presidential from 1958)',
      capital: 'Paris',
      religion: ['Catholic / secular'],
      culture: ['French'],
      summary:
        'Post-war France decolonised, reconciled with Germany to build European integration, and under de Gaulle became an independent nuclear power.',
      relations: [
        { to: 'germany', type: 'ally', label: 'Franco-German reconciliation', note: 'The Élysée Treaty (1963) and the engine of the European project.' },
        { to: 'united-kingdom', type: 'ally', label: 'NATO partner', note: 'Western allies despite de Gaulle’s independent line.' },
        { to: 'russia', type: 'interaction', label: 'Cold War divide', note: 'On the Western side of the Iron Curtain.' }
      ],
      figures: [{ name: 'Charles de Gaulle', title: 'President of the Republic', years: 'r. 1959–1969' }]
    },
    {
      startYear: 1991,
      endYear: 2025,
      eraId: 'contemporary',
      name: 'France (Fifth Republic)',
      government: 'Semi-presidential republic',
      capital: 'Paris',
      religion: ['Secular (laïcité)'],
      culture: ['French'],
      summary:
        'A leading member of the European Union and a nuclear-armed permanent member of the UN Security Council, paired with Germany at the heart of the EU.',
      relations: [
        { to: 'germany', type: 'ally', label: 'Franco-German EU engine', note: 'The central partnership driving European integration.' },
        { to: 'united-kingdom', type: 'interaction', label: 'Post-Brexit relations', note: 'Close ally turned trickier partner after the UK left the EU.' },
        { to: 'russia', type: 'interaction', label: 'Sanctions after 2022', note: 'Energy and diplomacy giving way to confrontation over Ukraine.' }
      ],
      figures: [{ name: 'Emmanuel Macron', title: 'President of the Republic', years: 'r. 2017–' }]
    }
  ]
}

export default france
