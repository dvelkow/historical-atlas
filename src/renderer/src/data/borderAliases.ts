// Maps a historical polity name (as it appears in the period border snapshots,
// lower-cased) to one of our country entities. This is the "hybrid" glue: the
// map shows accurate, era-specific shapes, but clicking one opens the data for
// the modern entity that best represents it.
//
// Big multi-country empires are mapped to a single representative entity
// (e.g. the Roman Empire shape → Italy/Rome; the Carolingian Empire →
// France). Polities with no entry are drawn as non-interactive context.

const A: Record<string, string> = {}
const map = (id: string, ...names: string[]) => names.forEach((n) => (A[n.toLowerCase()] = id))

// France — incl. the Frankish/Carolingian realm and medieval kingdom
map('france',
  'france', 'kingdom of france', 'carolingian empire', 'frankish kingdom', 'franks',
  'neustria', 'angevin empire', 'comté de toulouse', 'vasconia')

// Germany — HRE, Prussia, the empire, the two Germanies, major states
map('germany',
  'germany', 'holy roman empire', 'prussia', 'east prussia', 'brandenburg', 'hohenzollern',
  'german empire', 'west germany', 'east germany',
  'germany (france)', 'germany (soviet)', 'germany (uk)', 'germany (usa)', 'saar protectorate',
  'bavaria', 'saxony', 'hanover', 'hannover', 'württemberg', 'baden', 'swabia', 'duchy of swabia',
  'thuringia', 'alamans')

// United Kingdom — England, the Anglo-Saxon kingdoms, the union
map('united-kingdom',
  'united kingdom', 'united kingdom of great britain and ireland', 'england',
  'england and ireland', 'english territory', 'wessex', 'mercia', 'northumbria', 'nothumbria',
  'kent', 'essex')

// Spain — Iberian Christian & Muslim realms, Visigoths
map('spain',
  'spain', 'castile', 'castilla', 'castille', 'aragón', 'aragon', 'león', 'leon', 'navarre',
  'granada', 'caliphate of córdoba', 'emirate of córdoba', 'almohad caliphate',
  'almoravid dynasty', 'asturias', 'visigothic kingdom', 'visigoths')

// Portugal
map('portugal', 'portugal')

// Italy — Rome, the Papacy, the city-states & later kingdom
map('italy',
  'italy', 'roman empire', 'western roman empire', 'papal states', 'venice', 'venetia',
  'genoa', 'florence', 'milan', 'naples', 'sicily', 'kingdom of the two sicilies',
  'kingdom of sardinia', 'sardinia-piedmont', 'savoy', 'tuscany', 'lombardy',
  'lombard duchies', 'lombard principalities', 'ostrogoths', 'kingdom of italy', 'kingfom of italy')

// Greece — the Byzantine (Eastern Roman) world
map('greece', 'greece', 'byzantine empire', 'eastern roman empire', 'trebizond')

// Turkey — the Ottoman state and the Anatolian Seljuks
map('turkey',
  'turkey', 'ottoman empire', 'ottoman sultanate', 'seljuk empire', 'seljuk caliphate',
  'beylik of aydin')

// Russia — Rus', Muscovy, the empire, the USSR
map('russia',
  'russia', 'russian empire', 'ussr', 'tsardom of muscovy', 'grand duchy of moscow',
  "kievan rus", 'kyivan rus', "rus' khaganate", 'novgorod', 'principality of kyiv',
  'principality of novgorod', 'principality of vladimir-suzdal', 'south russia')

// Poland — kingdom, union, commonwealth
map('poland',
  'poland', 'poland-lithuania', 'poland-llituania', 'polish–lithuanian commonwealth',
  'republic of kraków')

// Austria — duchy/empire, Austria-Hungary
map('austria',
  'austria', 'austrian empire', 'austria hungary', 'austro-hungarian empire')

// Hungary
map('hungary', 'hungary', 'kingdom of hungary', 'imperial hungary', 'magyars')

// Netherlands
map('netherlands', 'netherlands', 'dutch republic', 'batavian republic')

// Sweden
map('sweden', 'sweden', 'sweden–norway', 'swedes', 'swedes and goths', 'geats')

// Denmark — incl. the Danes and the Kalmar Union
map('denmark', 'denmark', 'denmark-norway', 'danes', 'kalmar union')

// ---------------------------------------------------------------------------
// Early-medieval polities (pre-1200): map each to the modern entity that best
// represents the territory, so the early map is interactive too. (Big empires
// already mapped above: Byzantine→Greece, Carolingian→France, etc.)
// ---------------------------------------------------------------------------
map('united-kingdom', 'picts', 'scotland', 'scots', 'welsh', 'cantia', 'dumnonia', 'dumonii', 'gwynedd', 'sussex')
map('france', 'burgundy', 'burgunds', 'burgandy', 'west francia', 'britany', 'broërec', 'brittany', 'duchy of normandy')
map('germany', 'saxons', 'czechs', 'duchy of bohemia', 'kingdom of bohemia', 'great moravia', 'moravia', 'prussians')
map('italy', 'emirate of sicily', 'duchy of benevento', 'dutchy of benevento', 'benevento', 'corsica', 'sardinia', 'lombards', 'exarchate of ravenna')
map('spain', 'suebi', 'kingdom of asturias', 'kingdom of león', 'kingdom of castile', 'al-andalus')
map('netherlands', 'frisians', 'frisia', 'county of holland', 'county of flanders', 'flanders', 'brabant')
map('denmark', 'norway', 'kingdom of norway', 'icelandic commonwealth', 'iceland')
map('sweden', 'svealand', 'geatland')
map('hungary', 'avars', 'gepids', 'hunnic empire', 'huns', 'croatia', 'kingdom of croatia')
map('poland', 'pomerania', 'duchy of pomerania', 'masovia', 'silesia')
map('russia', 'principality of polotsk', 'principality of galicia-volhynia', 'principality of smolensk', 'volga bulgars')
map('turkey', 'sultanate of rum', 'seljuk sultanate of rum', 'danishmends')
map('greece', 'latin empire', 'empire of nicaea', 'despotate of epirus', 'nicaea')

export const BORDER_ALIAS = A

/** The entity id a historical polity name maps to, if any. */
export function entityForBorderName(name: string | undefined): string | undefined {
  if (!name) return undefined
  return A[name.toLowerCase()]
}
