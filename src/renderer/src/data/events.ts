import type { HistEvent } from './types'

// ---------------------------------------------------------------------------
// Major events. The timeline strip shows those nearest the selected year;
// `entityIds` links an event to polities so selection can bias the strip.
// ---------------------------------------------------------------------------

export const events: HistEvent[] = [
  // ---- Roman ----
  { id: 'e-9-teutoburg', year: 9, title: 'Battle of the Teutoburg Forest', description: 'Germanic tribes annihilate three Roman legions, fixing the empire’s northern limit at the Rhine.', eraId: 'roman', entityIds: ['roman-empire', 'germanic-peoples'], icon: 'ICON_WAR' },
  { id: 'e-14-augustus', year: 14, title: 'Death of Augustus', description: 'The first Roman emperor dies; Tiberius succeeds him, confirming hereditary rule.', eraId: 'roman', entityIds: ['roman-empire'], icon: 'ICON_PERSON' },
  { id: 'e-33-crucifixion', year: 33, title: 'Crucifixion of Jesus', description: 'In Roman Judaea — the founding event of Christianity.', eraId: 'roman', entityIds: ['roman-empire'], icon: 'ICON_RELIGION' },
  { id: 'e-64-fire', year: 64, title: 'Great Fire of Rome', description: 'Nero rebuilds the capital; the first persecutions of Christians follow.', eraId: 'roman', entityIds: ['roman-empire'], icon: 'ICON_EVENT' },
  { id: 'e-70-jerusalem', year: 70, title: 'Destruction of the Second Temple', description: 'Titus crushes the Jewish revolt and sacks Jerusalem.', eraId: 'roman', entityIds: ['roman-empire'], icon: 'ICON_WAR' },
  { id: 'e-106-dacia', year: 106, title: 'Conquest of Dacia', description: 'Trajan annexes Dacia; the empire reaches its greatest extent under his reign.', eraId: 'roman', entityIds: ['roman-empire', 'dacian-kingdom'], icon: 'ICON_WAR' },
  { id: 'e-122-hadrian', year: 122, title: "Hadrian's Wall begun", description: 'The empire turns from expansion to fortified frontiers.', eraId: 'roman', entityIds: ['roman-empire'], icon: 'ICON_EVENT' },
  { id: 'e-212-caracalla', year: 212, title: 'Edict of Caracalla', description: 'Roman citizenship extended to nearly all free inhabitants of the empire.', eraId: 'roman', entityIds: ['roman-empire'], icon: 'ICON_TREATY' },

  // ---- Late Antiquity ----
  { id: 'e-284-diocletian', year: 284, title: 'Diocletian reforms the empire', description: 'The Tetrarchy and administrative reforms stabilise Rome after the Crisis of the Third Century.', eraId: 'late-antique', entityIds: ['western-roman-empire'], icon: 'ICON_EVENT' },
  { id: 'e-313-milan', year: 313, title: 'Edict of Milan', description: 'Constantine legalises Christianity across the empire.', eraId: 'late-antique', entityIds: ['western-roman-empire'], icon: 'ICON_RELIGION' },
  { id: 'e-330-constantinople', year: 330, title: 'Foundation of Constantinople', description: 'Constantine dedicates a new eastern capital — the future heart of Byzantium.', eraId: 'late-antique', entityIds: ['byzantine-empire'], icon: 'ICON_EVENT' },
  { id: 'e-378-adrianople', year: 378, title: 'Battle of Adrianople', description: 'The Goths destroy an eastern Roman army, a shock to imperial confidence.', eraId: 'late-antique', entityIds: ['byzantine-empire', 'visigoths'], icon: 'ICON_WAR' },
  { id: 'e-395-division', year: 395, title: 'Permanent division of the Empire', description: 'On the death of Theodosius I the empire splits into a Latin West and Greek East.', eraId: 'late-antique', entityIds: ['western-roman-empire', 'byzantine-empire'], icon: 'ICON_EVENT' },
  { id: 'e-410-sack', year: 410, title: 'Sack of Rome by the Visigoths', description: 'Alaric’s Goths take the Eternal City — unthinkable for 800 years.', eraId: 'late-antique', entityIds: ['western-roman-empire', 'visigoths'], icon: 'ICON_WAR' },
  { id: 'e-451-chalons', year: 451, title: 'Battle of the Catalaunian Plains', description: 'A Roman–Visigothic coalition halts Attila the Hun in Gaul.', eraId: 'late-antique', entityIds: ['western-roman-empire', 'huns'], icon: 'ICON_WAR' },
  { id: 'e-476-fall', year: 476, title: 'Fall of the Western Roman Empire', description: 'Odoacer deposes Romulus Augustulus, the last western emperor.', eraId: 'late-antique', entityIds: ['western-roman-empire'], icon: 'ICON_EVENT' },

  // ---- Early Medieval ----
  { id: 'e-496-clovis', year: 496, title: 'Conversion of Clovis', description: 'The Frankish king accepts Catholic Christianity, binding the Franks to Rome.', eraId: 'early-medieval', entityIds: ['frankish-kingdom'], icon: 'ICON_RELIGION' },
  { id: 'e-527-justinian', year: 527, title: 'Accession of Justinian I', description: 'Reconquest of the West, the Hagia Sophia, and the codification of Roman law.', eraId: 'early-medieval', entityIds: ['byzantine-empire'], icon: 'ICON_PERSON' },
  { id: 'e-622-hijra', year: 622, title: 'The Hijra & rise of Islam', description: 'Muhammad’s migration to Medina marks year one of the Islamic calendar.', eraId: 'early-medieval', entityIds: ['umayyad-caliphate'], icon: 'ICON_RELIGION' },
  { id: 'e-711-guadalete', year: 711, title: 'Umayyad conquest of Hispania', description: 'Muslim armies overthrow the Visigothic kingdom; Al-Andalus is born.', eraId: 'early-medieval', entityIds: ['umayyad-caliphate', 'al-andalus', 'visigoths'], icon: 'ICON_WAR' },
  { id: 'e-732-tours', year: 732, title: 'Battle of Tours', description: 'Charles Martel halts the Umayyad advance into Francia.', eraId: 'early-medieval', entityIds: ['frankish-kingdom', 'umayyad-caliphate'], icon: 'ICON_WAR' },
  { id: 'e-800-charlemagne', year: 800, title: 'Coronation of Charlemagne', description: 'Pope Leo III crowns Charlemagne "Emperor of the Romans" in St Peter’s.', eraId: 'early-medieval', entityIds: ['carolingian-empire', 'papal-states'], icon: 'ICON_PERSON' },
  { id: 'e-843-verdun', year: 843, title: 'Treaty of Verdun', description: 'Charlemagne’s empire is divided among his grandsons — the seed of France and Germany.', eraId: 'early-medieval', entityIds: ['carolingian-empire'], icon: 'ICON_TREATY' },
  { id: 'e-862-rus', year: 862, title: "Founding of the Rus'", description: 'Rurik and the Varangians establish rule over the East Slavs.', eraId: 'early-medieval', entityIds: ['kievan-rus'], icon: 'ICON_EVENT' },
  { id: 'e-962-otto', year: 962, title: 'Otto I crowned Emperor', description: 'The founding of the Holy Roman Empire.', eraId: 'early-medieval', entityIds: ['holy-roman-empire'], icon: 'ICON_PERSON' },
  { id: 'e-988-rus-baptism', year: 988, title: "Baptism of Kievan Rus'", description: 'Vladimir I adopts Orthodox Christianity from Byzantium.', eraId: 'early-medieval', entityIds: ['kievan-rus', 'byzantine-empire'], icon: 'ICON_RELIGION' },

  // ---- High Medieval ----
  { id: 'e-1054-schism', year: 1054, title: 'The Great Schism', description: 'The Christian Church splits into Roman Catholic and Eastern Orthodox.', eraId: 'high-medieval', entityIds: ['papal-states', 'byzantine-empire'], icon: 'ICON_RELIGION' },
  { id: 'e-1066-hastings', year: 1066, title: 'Norman Conquest of England', description: 'William the Conqueror defeats Harold at Hastings.', eraId: 'high-medieval', entityIds: ['kingdom-of-england', 'anglo-saxon-england'], icon: 'ICON_WAR' },
  { id: 'e-1071-manzikert', year: 1071, title: 'Battle of Manzikert', description: 'The Seljuks shatter the Byzantine army, opening Anatolia to the Turks.', eraId: 'high-medieval', entityIds: ['byzantine-empire', 'seljuk-rum'], icon: 'ICON_WAR' },
  { id: 'e-1095-crusade', year: 1095, title: 'First Crusade proclaimed', description: 'Pope Urban II calls Western knights to recover the Holy Land.', eraId: 'high-medieval', entityIds: ['papal-states', 'crusader-states'], icon: 'ICON_RELIGION' },
  { id: 'e-1099-jerusalem', year: 1099, title: 'Crusaders take Jerusalem', description: 'The First Crusade founds the Latin Kingdom of Jerusalem.', eraId: 'high-medieval', entityIds: ['crusader-states'], icon: 'ICON_WAR' },
  { id: 'e-1187-hattin', year: 1187, title: 'Saladin retakes Jerusalem', description: 'Victory at Hattin shatters the Crusader states and triggers the Third Crusade.', eraId: 'high-medieval', entityIds: ['ayyubid-sultanate', 'crusader-states'], icon: 'ICON_WAR' },
  { id: 'e-1204-fourth', year: 1204, title: 'Sack of Constantinople', description: 'The Fourth Crusade, steered by Venice, storms the Byzantine capital.', eraId: 'high-medieval', entityIds: ['republic-of-venice', 'byzantine-empire'], icon: 'ICON_WAR' },
  { id: 'e-1212-navas', year: 1212, title: 'Las Navas de Tolosa', description: 'A decisive Christian victory that breaks Almohad power in Iberia.', eraId: 'high-medieval', entityIds: ['crown-of-castile', 'almohad-caliphate'], icon: 'ICON_WAR' },
  { id: 'e-1215-magna-carta', year: 1215, title: 'Magna Carta', description: 'English barons force King John to accept limits on royal power.', eraId: 'high-medieval', entityIds: ['kingdom-of-england'], icon: 'ICON_TREATY' },
  { id: 'e-1240-mongols', year: 1240, title: 'Mongols sack Kyiv', description: 'The Mongol invasion ends Kievan Rus’ and begins two centuries of the Golden Horde.', eraId: 'high-medieval', entityIds: ['golden-horde', 'kievan-rus'], icon: 'ICON_WAR' },

  // ---- Late Medieval ----
  { id: 'e-1337-hundred', year: 1337, title: "Hundred Years' War begins", description: 'England and France clash over the French crown.', eraId: 'late-medieval', entityIds: ['kingdom-of-france', 'kingdom-of-england'], icon: 'ICON_WAR' },
  { id: 'e-1347-plague', year: 1347, title: 'The Black Death', description: 'Plague kills perhaps a third of Europe’s population within years.', eraId: 'late-medieval', entityIds: [], icon: 'ICON_EVENT' },
  { id: 'e-1389-kosovo', year: 1389, title: 'Battle of Kosovo', description: 'Ottoman victory over a Serbian-led coalition seals their grip on the Balkans.', eraId: 'late-medieval', entityIds: ['ottoman-empire'], icon: 'ICON_WAR' },
  { id: 'e-1429-joan', year: 1429, title: 'Joan of Arc lifts the siege of Orléans', description: 'The turning point of the Hundred Years’ War in France’s favour.', eraId: 'late-medieval', entityIds: ['kingdom-of-france', 'kingdom-of-england'], icon: 'ICON_PERSON' },
  { id: 'e-1453-fall', year: 1453, title: 'Fall of Constantinople', description: 'Mehmed II takes the city, ending the Byzantine Empire after 1,100 years.', eraId: 'late-medieval', entityIds: ['ottoman-empire', 'byzantine-empire'], icon: 'ICON_WAR' },
  { id: 'e-1453-castillon', year: 1453, title: "End of the Hundred Years' War", description: 'France expels the English from all but Calais.', eraId: 'late-medieval', entityIds: ['kingdom-of-france', 'kingdom-of-england'], icon: 'ICON_TREATY' },
  { id: 'e-1469-spain', year: 1469, title: 'Union of Castile and Aragon', description: 'The marriage of Ferdinand and Isabella unites the crowns of Spain.', eraId: 'late-medieval', entityIds: ['crown-of-castile', 'crown-of-aragon'], icon: 'ICON_DYNASTY' },
  { id: 'e-1480-ugra', year: 1480, title: 'Great Stand on the Ugra', description: 'Muscovy throws off the Mongol yoke for good.', eraId: 'late-medieval', entityIds: ['grand-duchy-moscow', 'golden-horde'], icon: 'ICON_WAR' },
  { id: 'e-1492-granada', year: 1492, title: 'Fall of Granada & voyage of Columbus', description: 'The Reconquista is completed and Spain reaches the Americas.', eraId: 'late-medieval', entityIds: ['crown-of-castile'], icon: 'ICON_EVENT' },

  // ---- Early Modern ----
  { id: 'e-1517-reformation', year: 1517, title: 'Luther’s Ninety-five Theses', description: 'The Protestant Reformation fractures Latin Christendom.', eraId: 'early-modern', entityIds: ['holy-roman-empire', 'papal-states'], icon: 'ICON_RELIGION' },
  { id: 'e-1529-vienna', year: 1529, title: 'First Siege of Vienna', description: 'Suleiman the Magnificent’s Ottomans are repulsed from the Habsburg capital.', eraId: 'early-modern', entityIds: ['ottoman-empire', 'holy-roman-empire'], icon: 'ICON_WAR' },
  { id: 'e-1571-lepanto', year: 1571, title: 'Battle of Lepanto', description: 'A Holy League fleet defeats the Ottoman navy in the Mediterranean.', eraId: 'early-modern', entityIds: ['spanish-empire', 'ottoman-empire', 'republic-of-venice'], icon: 'ICON_WAR' },
  { id: 'e-1588-armada', year: 1588, title: 'Defeat of the Spanish Armada', description: 'England turns back Philip II’s invasion fleet.', eraId: 'early-modern', entityIds: ['spanish-empire', 'kingdom-of-england'], icon: 'ICON_WAR' },
  { id: 'e-1618-thirty', year: 1618, title: "Thirty Years' War begins", description: 'A devastating religious and dynastic war engulfs Central Europe.', eraId: 'early-modern', entityIds: ['holy-roman-empire'], icon: 'ICON_WAR' },
  { id: 'e-1648-westphalia', year: 1648, title: 'Peace of Westphalia', description: 'Ends the Thirty Years’ War and establishes the modern system of sovereign states.', eraId: 'early-modern', entityIds: ['holy-roman-empire', 'kingdom-of-france', 'dutch-republic'], icon: 'ICON_TREATY' },
  { id: 'e-1683-vienna2', year: 1683, title: 'Second Siege of Vienna', description: 'A Polish-led relief army breaks the Ottoman siege, beginning their retreat from Europe.', eraId: 'early-modern', entityIds: ['ottoman-empire', 'holy-roman-empire', 'polish-lithuanian-commonwealth'], icon: 'ICON_WAR' },
  { id: 'e-1700-gnw', year: 1700, title: 'Great Northern War begins', description: 'Russia, Denmark, and Poland challenge Swedish supremacy in the Baltic.', eraId: 'early-modern', entityIds: ['swedish-empire', 'russian-empire'], icon: 'ICON_WAR' },
  { id: 'e-1721-russia', year: 1721, title: 'Russian Empire proclaimed', description: 'Peter the Great takes the title of Emperor after defeating Sweden.', eraId: 'early-modern', entityIds: ['russian-empire'], icon: 'ICON_PERSON' },
  { id: 'e-1763-7yw', year: 1763, title: "End of the Seven Years' War", description: 'A near-global war reshapes empires; Britain emerges dominant overseas.', eraId: 'early-modern', entityIds: ['kingdom-of-great-britain', 'kingdom-of-france', 'kingdom-of-prussia'], icon: 'ICON_TREATY' },
  { id: 'e-1772-partition', year: 1772, title: 'First Partition of Poland', description: 'Russia, Prussia, and Austria begin dismembering the Commonwealth.', eraId: 'early-modern', entityIds: ['polish-lithuanian-commonwealth', 'russian-empire', 'kingdom-of-prussia'], icon: 'ICON_WAR' },

  // ---- Revolutionary & Napoleonic ----
  { id: 'e-1789-revolution', year: 1789, title: 'The French Revolution', description: 'The storming of the Bastille and the Declaration of the Rights of Man.', eraId: 'revolutionary', entityIds: ['first-french-empire'], icon: 'ICON_EVENT' },
  { id: 'e-1804-napoleon', year: 1804, title: 'Napoleon crowned Emperor', description: 'The Napoleonic Code is promulgated the same year.', eraId: 'revolutionary', entityIds: ['first-french-empire'], icon: 'ICON_PERSON' },
  { id: 'e-1805-austerlitz', year: 1805, title: 'Trafalgar & Austerlitz', description: 'Britain wins the seas; Napoleon wins his masterpiece on land.', eraId: 'revolutionary', entityIds: ['first-french-empire', 'united-kingdom', 'austrian-empire'], icon: 'ICON_WAR' },
  { id: 'e-1812-russia', year: 1812, title: 'Invasion of Russia', description: 'Napoleon’s Grande Armée is destroyed by the Russian winter and scorched earth.', eraId: 'revolutionary', entityIds: ['first-french-empire', 'russian-empire'], icon: 'ICON_WAR' },
  { id: 'e-1815-waterloo', year: 1815, title: 'Battle of Waterloo', description: 'Napoleon’s final defeat; the Congress of Vienna restores a balance of power.', eraId: 'revolutionary', entityIds: ['first-french-empire', 'united-kingdom'], icon: 'ICON_WAR' },

  // ---- 19th Century ----
  { id: 'e-1815-congress', year: 1815, title: 'Congress of Vienna', description: 'The great powers redraw Europe and found a conservative order.', eraId: 'long-19th', entityIds: ['austrian-empire', 'united-kingdom', 'russian-empire'], icon: 'ICON_TREATY' },
  { id: 'e-1848-springtime', year: 1848, title: 'Revolutions of 1848', description: 'Liberal and national revolts sweep across Europe.', eraId: 'long-19th', entityIds: ['austrian-empire'], icon: 'ICON_EVENT' },
  { id: 'e-1853-crimea', year: 1853, title: 'Crimean War', description: 'Britain and France fight Russia to defend the Ottoman Empire.', eraId: 'long-19th', entityIds: ['united-kingdom', 'france-restoration', 'russian-empire'], icon: 'ICON_WAR' },
  { id: 'e-1861-italy', year: 1861, title: 'Unification of Italy', description: 'The Kingdom of Italy is proclaimed under the House of Savoy.', eraId: 'long-19th', entityIds: ['kingdom-of-italy'], icon: 'ICON_EVENT' },
  { id: 'e-1871-germany', year: 1871, title: 'Unification of Germany', description: 'After defeating France, the German Empire is proclaimed at Versailles.', eraId: 'long-19th', entityIds: ['german-empire', 'france-restoration'], icon: 'ICON_EVENT' },
  { id: 'e-1882-triple', year: 1882, title: 'Triple Alliance formed', description: 'Germany, Austria-Hungary, and Italy bind together.', eraId: 'long-19th', entityIds: ['german-empire', 'austria-hungary', 'kingdom-of-italy'], icon: 'ICON_TREATY' },
  { id: 'e-1904-entente', year: 1904, title: 'Entente Cordiale', description: 'Britain and France settle colonial disputes and draw together.', eraId: 'long-19th', entityIds: ['french-third-republic', 'united-kingdom'], icon: 'ICON_TREATY' },
  { id: 'e-1908-bosnia', year: 1908, title: 'Bosnian annexation crisis', description: 'Austria-Hungary annexes Bosnia, inflaming Serbia and Russia.', eraId: 'long-19th', entityIds: ['austria-hungary', 'kingdom-of-serbia'], icon: 'ICON_EVENT' },
  { id: 'e-1914-sarajevo', year: 1914, title: 'Assassination at Sarajevo', description: 'Archduke Franz Ferdinand is killed, triggering the July Crisis.', eraId: 'long-19th', entityIds: ['austria-hungary', 'kingdom-of-serbia'], icon: 'ICON_WAR' },

  // ---- World War era ----
  { id: 'e-1914-wwi', year: 1914, title: 'Outbreak of the First World War', description: 'Europe’s alliance system drags the continent into industrial war.', eraId: 'world-wars', entityIds: ['german-empire', 'french-third-republic', 'united-kingdom', 'russian-empire', 'austria-hungary'], icon: 'ICON_WAR' },
  { id: 'e-1917-revolution', year: 1917, title: 'Russian Revolution', description: 'The Bolsheviks seize power; Russia leaves the war.', eraId: 'world-wars', entityIds: ['soviet-union', 'russian-empire'], icon: 'ICON_EVENT' },
  { id: 'e-1918-armistice', year: 1918, title: 'Armistice & collapse of empires', description: 'Germany, Austria-Hungary, the Ottomans, and Russia all fall.', eraId: 'world-wars', entityIds: ['german-empire', 'austria-hungary', 'ottoman-empire'], icon: 'ICON_TREATY' },
  { id: 'e-1919-versailles', year: 1919, title: 'Treaty of Versailles', description: 'A punitive peace redraws Europe and sows future grievance.', eraId: 'world-wars', entityIds: ['weimar-germany', 'french-third-republic', 'united-kingdom'], icon: 'ICON_TREATY' },
  { id: 'e-1933-hitler', year: 1933, title: 'Hitler comes to power', description: 'The Weimar Republic gives way to the Nazi dictatorship.', eraId: 'world-wars', entityIds: ['nazi-germany', 'weimar-germany'], icon: 'ICON_PERSON' },
  { id: 'e-1939-wwii', year: 1939, title: 'Outbreak of the Second World War', description: 'Germany invades Poland after the Molotov–Ribbentrop Pact.', eraId: 'world-wars', entityIds: ['nazi-germany', 'soviet-union', 'united-kingdom', 'french-third-republic'], icon: 'ICON_WAR' },
  { id: 'e-1941-barbarossa', year: 1941, title: 'Operation Barbarossa', description: 'Germany invades the USSR; the war’s deadliest theatre opens.', eraId: 'world-wars', entityIds: ['nazi-germany', 'soviet-union'], icon: 'ICON_WAR' },
  { id: 'e-1944-dday', year: 1944, title: 'D-Day landings', description: 'The Western Allies open the second front in Normandy.', eraId: 'world-wars', entityIds: ['united-states', 'united-kingdom', 'nazi-germany'], icon: 'ICON_WAR' },
  { id: 'e-1945-victory', year: 1945, title: 'End of WWII in Europe', description: 'Nazi Germany surrenders; the continent lies in ruins and divided.', eraId: 'world-wars', entityIds: ['nazi-germany', 'soviet-union', 'united-states'], icon: 'ICON_EVENT' },

  // ---- Cold War ----
  { id: 'e-1949-nato', year: 1949, title: 'NATO founded; two Germanys', description: 'The Western alliance forms; Germany is split into East and West.', eraId: 'cold-war', entityIds: ['united-states', 'west-germany', 'east-germany'], icon: 'ICON_TREATY' },
  { id: 'e-1955-warsaw', year: 1955, title: 'Warsaw Pact founded', description: 'The Soviet bloc’s military alliance answers NATO.', eraId: 'cold-war', entityIds: ['soviet-union', 'east-germany'], icon: 'ICON_TREATY' },
  { id: 'e-1957-rome', year: 1957, title: 'Treaty of Rome', description: 'Six nations found the European Economic Community.', eraId: 'cold-war', entityIds: ['west-germany', 'france-modern', 'italy-republic'], icon: 'ICON_TREATY' },
  { id: 'e-1961-wall', year: 1961, title: 'Berlin Wall built', description: 'East Germany seals off West Berlin; the Cold War’s starkest symbol.', eraId: 'cold-war', entityIds: ['east-germany', 'west-germany'], icon: 'ICON_EVENT' },
  { id: 'e-1968-prague', year: 1968, title: 'Prague Spring crushed', description: 'Warsaw Pact tanks end reform in Czechoslovakia.', eraId: 'cold-war', entityIds: ['soviet-union'], icon: 'ICON_WAR' },
  { id: 'e-1989-wall', year: 1989, title: 'Fall of the Berlin Wall', description: 'The Eastern bloc’s communist regimes collapse across the year.', eraId: 'cold-war', entityIds: ['east-germany', 'west-germany'], icon: 'ICON_EVENT' },
  { id: 'e-1991-ussr', year: 1991, title: 'Dissolution of the Soviet Union', description: 'The USSR breaks into fifteen independent states; the Cold War ends.', eraId: 'cold-war', entityIds: ['soviet-union', 'russian-federation', 'ukraine'], icon: 'ICON_EVENT' },

  // ---- Contemporary ----
  { id: 'e-1990-reunification', year: 1990, title: 'German reunification', description: 'East and West Germany reunite within NATO and the EC.', eraId: 'contemporary', entityIds: ['germany-reunified', 'west-germany', 'east-germany'], icon: 'ICON_EVENT' },
  { id: 'e-1993-maastricht', year: 1993, title: 'Maastricht Treaty / EU founded', description: 'The European Union is created, paving the way for the euro.', eraId: 'contemporary', entityIds: ['european-union'], icon: 'ICON_TREATY' },
  { id: 'e-1999-euro', year: 1999, title: 'The euro introduced', description: 'A single currency for much of the EU.', eraId: 'contemporary', entityIds: ['european-union'], icon: 'ICON_TRADE' },
  { id: 'e-2004-enlargement', year: 2004, title: 'Big Bang EU enlargement', description: 'Ten mostly post-communist states join the EU.', eraId: 'contemporary', entityIds: ['european-union'], icon: 'ICON_EVENT' },
  { id: 'e-2014-crimea', year: 2014, title: 'Russia annexes Crimea', description: 'War returns to Europe as Russia seizes Crimea and backs separatists in Ukraine.', eraId: 'contemporary', entityIds: ['russian-federation', 'ukraine'], icon: 'ICON_WAR' },
  { id: 'e-2016-brexit', year: 2016, title: 'Brexit referendum', description: 'The UK votes to leave the EU; it departs in 2020.', eraId: 'contemporary', entityIds: ['united-kingdom', 'european-union'], icon: 'ICON_EVENT' },
  { id: 'e-2022-invasion', year: 2022, title: 'Full-scale invasion of Ukraine', description: 'Russia launches the largest war in Europe since 1945.', eraId: 'contemporary', entityIds: ['russian-federation', 'ukraine', 'european-union'], icon: 'ICON_WAR' }
]

// ---- Lookup helpers -------------------------------------------------------

// Events carry historically-specific polity ids ("byzantine-empire",
// "ottoman-empire", "kingdom-of-france"…). This maps each of those to the
// modern country entity that best represents it, so selecting a country (e.g.
// "greece") surfaces the events of its historical predecessors. Polities with
// no modern European entity (crusader-states, european-union, united-states…)
// are intentionally absent.
const EVENT_ENTITY_TO_COUNTRY: Record<string, string> = {
  'roman-empire': 'italy',
  'western-roman-empire': 'italy',
  'kingdom-of-italy': 'italy',
  'italy-republic': 'italy',
  'republic-of-venice': 'italy',
  'papal-states': 'italy',
  'byzantine-empire': 'greece',
  'frankish-kingdom': 'france',
  'carolingian-empire': 'france',
  'kingdom-of-france': 'france',
  'first-french-empire': 'france',
  'france-restoration': 'france',
  'france-modern': 'france',
  'french-third-republic': 'france',
  'holy-roman-empire': 'germany',
  'kingdom-of-prussia': 'germany',
  'german-empire': 'germany',
  'weimar-germany': 'germany',
  'nazi-germany': 'germany',
  'west-germany': 'germany',
  'east-germany': 'germany',
  'germany-reunified': 'germany',
  'germanic-peoples': 'germany',
  'kievan-rus': 'russia',
  'grand-duchy-moscow': 'russia',
  'russian-empire': 'russia',
  'soviet-union': 'russia',
  'russian-federation': 'russia',
  'golden-horde': 'russia',
  'kingdom-of-england': 'united-kingdom',
  'anglo-saxon-england': 'united-kingdom',
  'kingdom-of-great-britain': 'united-kingdom',
  'united-kingdom': 'united-kingdom',
  'ottoman-empire': 'turkey',
  'seljuk-rum': 'turkey',
  'crown-of-castile': 'spain',
  'crown-of-aragon': 'spain',
  'spanish-empire': 'spain',
  'al-andalus': 'spain',
  'almohad-caliphate': 'spain',
  'umayyad-caliphate': 'spain',
  'visigoths': 'spain',
  'austria-hungary': 'austria',
  'austrian-empire': 'austria',
  'dutch-republic': 'netherlands',
  'swedish-empire': 'sweden',
  'polish-lithuanian-commonwealth': 'poland',
  'kingdom-of-serbia': 'serbia',
  'dacian-kingdom': 'romania',
  'huns': 'hungary',
  ukraine: 'ukraine'
}

/** Does this event concern the given country entity (directly or via a
 *  historical predecessor)? */
export function eventLinksCountry(ev: HistEvent, countryId: string | null | undefined): boolean {
  if (!countryId || !ev.entityIds) return false
  return ev.entityIds.some((eid) => eid === countryId || EVENT_ENTITY_TO_COUNTRY[eid] === countryId)
}

/**
 * Returns events near a year, nearest first. If `entityId` is a selected
 * country, events linked to it (or to a historical predecessor) are favoured —
 * pulled ahead of unrelated events at a similar distance.
 */
export function eventsNear(year: number, entityId?: string, limit = 8): HistEvent[] {
  const scored = events.map((e) => {
    const distance = Math.abs(e.year - year)
    const linked = eventLinksCountry(e, entityId) ? 1 : 0
    // Linked events get a distance discount so they surface for the selection.
    const score = distance - linked * 40
    return { e, distance, score }
  })
  scored.sort((a, b) => a.score - b.score || a.distance - b.distance || a.e.year - b.e.year)
  return scored.slice(0, limit).map((s) => s.e).sort((a, b) => a.year - b.year)
}
