# Figure Portraits — Art Spec & File List

This is the single brief for the **historic-figure portraits**. They replace the placeholder
person icon shown in the **Notable Figures** card (left panel) for each figure of the
selected country/period.

- **Folder:** `src/renderer/src/assets/figures/`
- **Format:** PNG (RGBA), **one file per figure**, named by the slug rule below.
- **Drop-in:** the app derives each figure's filename from its name automatically, so just
  add the PNG with the right name and it appears in place of the placeholder. No code edits.
- There are **~156 figures** to make. The original 83 are listed at the bottom; Bulgaria's 14
  have a standalone brief in [`FIGURES_BULGARIA.md`](FIGURES_BULGARIA.md); and the 8 new nations'
  ~59 are in [`FIGURES_NATIONS.md`](FIGURES_NATIONS.md). All three sets use this same art spec.

---

## 1. Art style — "Gilded Strategist"

A **stylised, semi-realistic 2D portrait** — the look of a grand-strategy game's leader/advisor
art (think the painted leader portraits of *Civilization* or *Crusader Kings*), but flatter and
cleaner. The goal: **instantly recognisable** as the real person, yet clearly an illustration
that sits inside a dark, gilded antique-atlas UI.

**Keep it:**
- **Recognisable but stylised.** A real likeness — the actual person's face, hair, and
  period dress — simplified into clean painterly forms. Not photoreal; not cartoon/chibi.
- **2D and painterly.** Soft, low-texture digital painting with confident edges and gentle
  cel-like shading. Flat-ish lighting, minimal noise. Avoid heavy 3D rendering or glossy CGI.
- **Heroic, calm framing.** Dignified head-and-shoulders bust, face toward the viewer
  (frontal or slight 3/4). Neutral, composed expression. Period-accurate clothing, crown,
  armour, robes, or regalia — these carry the identity as much as the face.
- **Cohesive set.** Every portrait must feel like part of one collection: same lighting
  direction (soft key from upper-left, **warm gold rim light** on the shoulder/hair edge),
  same level of stylisation, the same backdrop treatment. A viewer flipping between
  Charlemagne and Churchill should feel they came from the same artist.

**Palette:** warm, slightly desaturated, harmonised to the UI (deep navy `#0b0f17`, antique
gold `#caa14a`, parchment `#e9e3d3`). Muted period colours; let gold accents and skin tones
carry warmth. **No neon, no pure white, no bright saturated backgrounds.**

**Background (bake it in):** a simple **dark backdrop** — deep navy/charcoal with a soft
radial vignette (lighter just behind the head, ~`#16223a` → `#0a0f1a` to the edges). It should
look like the figure emerges from shadow. **Do not** paint a frame, border, text, nameplate,
or props floating around them — the UI supplies the rounded mask and thin gold ring.

**Tone note:** a few figures are villains of history (e.g. Hitler, Stalin, Mussolini). Render
them **neutrally and historically** — same restrained style, no glorification, no caricature.

---

## 2. Technical spec

| | |
|---|---|
| Format | **PNG**, RGBA |
| Canvas | **1:1 square, 256 × 256 px** (master). 512×512 is welcome if convenient. |
| Subject | Head-and-shoulders bust, centred. Eyes on the upper third; top of head ~8% from the top; shoulders meet the bottom edge. |
| Background | Baked-in dark vignette (above). Fully opaque is fine — the card is dark. |
| Edges | The UI crops to a **rounded square** and adds a thin gold ring, so keep important detail within a centred safe area (inset ~6%); don't put detail in the corners. |
| Display size | Shown small (~44 px) in the figures list, so read at thumbnail size: large head, clear silhouette, strong value contrast. Avoid tiny fussy detail. |
| File size | Aim < 150 KB each (these are small thumbnails). |

---

## 3. Naming convention (important — this is how they're matched)

The filename is the figure's **name**, slugified:

1. Map special letters: `ł→l`, `ø→o`, `ß→ss`, `æ→ae`, `œ→oe`, `đ→d`, `þ→th`, `ð→d`.
2. Strip remaining accents (é→e, ü→u, ñ→n, ö→o, á→a, …).
3. Lowercase; replace any run of non `a–z 0–9` with a single `-`; trim leading/trailing `-`.
4. Append `.png`.

Examples: `Louis XIV` → `louis-xiv.png` · `Mustafa Kemal Atatürk` → `mustafa-kemal-ataturk.png`
· `Józef Piłsudski` → `jozef-pilsudski.png` · `Lorenzo de' Medici` → `lorenzo-de-medici.png`.

> The **exact filename for every figure is listed in section 5** — just match those, no need
> to compute slugs yourself.

---

## 4. How they're integrated

The renderer ([`assets/figures.ts`](src/renderer/src/assets/figures.ts)) loads every
`figures/*.png` and maps it by slug. The **Notable Figures** card
([`FigureCard.tsx`](src/renderer/src/components/FigureCard.tsx)) shows the matching portrait in
the round slot where the placeholder icon currently sits; if a figure has no PNG yet, it falls
back to the labelled `ICON_PERSON` placeholder. So the set can be delivered incrementally —
each file lights up its figure as soon as it's added.

---

## 5. The full list — 97 files to make

> `filename` — **Figure** · role (dates)

### Bulgaria
- `kubrat.png` — **Kubrat** · Khan of the Bulgars (r. c. 632–665)
- `krum.png` — **Krum** · Khan, defeated Byzantium (r. c. 803–814)
- `boris-i.png` — **Boris I** · Knyaz, Christianised Bulgaria (r. 852–889)
- `simeon-i-the-great.png` — **Simeon I the Great** · Tsar, golden age (r. 893–927)
- `peter-delyan.png` — **Peter Delyan** · Leader of the 1040 uprising (r. 1040–1041)
- `kaloyan.png` — **Kaloyan** · Tsar, the Roman-Slayer (r. 1197–1207)
- `ivan-asen-ii.png` — **Ivan Asen II** · Tsar, height of the empire (r. 1218–1241)
- `paisius-of-hilendar.png` — **Paisius of Hilendar** · Monk of the National Revival (1722–1773)
- `vasil-levski.png` — **Vasil Levski** · Revolutionary, the Apostle of Freedom (1837–1873)
- `ferdinand-i.png` — **Ferdinand I** · Prince & Tsar of Bulgaria (r. 1887–1918)
- `boris-iii.png` — **Boris III** · Tsar of Bulgaria (r. 1918–1943)
- `georgi-dimitrov.png` — **Georgi Dimitrov** · Communist founder-leader (r. 1946–1949)
- `todor-zhivkov.png` — **Todor Zhivkov** · Communist head of state (r. 1954–1989)
- `zhelyu-zhelev.png` — **Zhelyu Zhelev** · First democratic President (r. 1990–1997)

### Austria
- `marcus-aurelius.png` — **Marcus Aurelius** · Emperor (r. 161–180)
- `rudolf-i-of-habsburg.png` — **Rudolf I of Habsburg** · King of the Romans (r. 1273–1291)
- `maria-theresa.png` — **Maria Theresa** · Archduchess & Empress (r. 1740–1780)
- `klemens-von-metternich.png` — **Klemens von Metternich** · State Chancellor (1773–1859)
- `franz-joseph-i.png` — **Franz Joseph I** · Emperor-King (r. 1848–1916)
- `bruno-kreisky.png` — **Bruno Kreisky** · Chancellor (r. 1970–1983)

### Denmark
- `cnut-the-great.png` — **Cnut the Great** · King of the North Sea Empire (r. 1016–1035)
- `christian-iv.png` — **Christian IV** · King of Denmark–Norway (r. 1588–1648)
- `margrethe-ii.png` — **Margrethe II** · Queen (r. 1972–2024)

### France
- `saint-martin-of-tours.png` — **Saint Martin of Tours** · Bishop & monk (c. 316–397)
- `clovis-i.png` — **Clovis I** · King of the Franks (r. 481–511)
- `charlemagne.png` — **Charlemagne** · Emperor of the Romans (r. 768–814)
- `philip-ii-augustus.png` — **Philip II Augustus** · King of France (r. 1180–1223)
- `louis-ix-st-louis.png` — **Louis IX (St Louis)** · King & crusader (r. 1226–1270)
- `joan-of-arc.png` — **Joan of Arc** · French heroine (1412–1431)
- `charles-vii.png` — **Charles VII** · King of France (r. 1422–1461)
- `francis-i.png` — **Francis I** · King of France (r. 1515–1547)
- `cardinal-richelieu.png` — **Cardinal Richelieu** · Chief minister (1585–1642)
- `louis-xiv.png` — **Louis XIV** · The Sun King (r. 1643–1715)
- `napoleon-bonaparte.png` — **Napoleon Bonaparte** · Emperor of the French (r. 1804–1815)
- `napoleon-iii.png` — **Napoleon III** · Emperor of the French (r. 1852–1870)
- `georges-clemenceau.png` — **Georges Clemenceau** · Wartime Prime Minister (1841–1929)
- `charles-de-gaulle.png` — **Charles de Gaulle** · President of the Republic (r. 1959–1969)
- `emmanuel-macron.png` — **Emmanuel Macron** · President of the Republic (r. 2017–)

### Germany
- `arminius.png` — **Arminius** · Cheruscan war leader (c. 18 BCE – 21 CE)
- `otto-i.png` — **Otto I** · King & Emperor (r. 936–973)
- `frederick-barbarossa.png` — **Frederick Barbarossa** · Holy Roman Emperor (r. 1155–1190)
- `martin-luther.png` — **Martin Luther** · Reformer (1483–1546)
- `frederick-the-great.png` — **Frederick the Great** · King of Prussia (r. 1740–1786)
- `otto-von-bismarck.png` — **Otto von Bismarck** · Chancellor (1815–1898)
- `wilhelm-ii.png` — **Wilhelm II** · German Emperor (r. 1888–1918)
- `adolf-hitler.png` — **Adolf Hitler** · Führer (r. 1933–1945)
- `konrad-adenauer.png` — **Konrad Adenauer** · Chancellor (West) (r. 1949–1963)
- `angela-merkel.png` — **Angela Merkel** · Chancellor (r. 2005–2021)

### Greece
- `justinian-i.png` — **Justinian I** · Byzantine Emperor (r. 527–565)
- `eleftherios-venizelos.png` — **Eleftherios Venizelos** · Statesman (1864–1936)

### Hungary
- `matthias-corvinus.png` — **Matthias Corvinus** · King of Hungary (r. 1458–1490)
- `lajos-kossuth.png` — **Lajos Kossuth** · Leader of 1848 (1802–1894)
- `gyula-andrassy.png` — **Gyula Andrássy** · Statesman (1823–1890)
- `jozsef-antall.png` — **József Antall** · First post-communist PM (r. 1990–1993)

### Italy
- `augustus.png` — **Augustus** · First Roman Emperor (r. 27 BCE – 14 CE)
- `lorenzo-de-medici.png` — **Lorenzo de' Medici** · Ruler of Florence (1449–1492)
- `galileo-galilei.png` — **Galileo Galilei** · Scientist (1564–1642)
- `giuseppe-garibaldi.png` — **Giuseppe Garibaldi** · Unification general (1807–1882)
- `benito-mussolini.png` — **Benito Mussolini** · Fascist dictator (r. 1922–1943)
- `alcide-de-gasperi.png` — **Alcide De Gasperi** · Prime Minister (r. 1945–1953)

### Netherlands
- `william-the-silent.png` — **William the Silent** · Leader of the revolt (1533–1584)
- `willem-alexander.png` — **Willem-Alexander** · King (r. 2013–)

### Poland
- `casimir-iii-the-great.png` — **Casimir III the Great** · King of Poland (r. 1333–1370)
- `jan-iii-sobieski.png` — **Jan III Sobieski** · King of Poland (r. 1674–1696)
- `jozef-pilsudski.png` — **Józef Piłsudski** · Marshal & leader (1867–1935)
- `lech-walesa.png` — **Lech Wałęsa** · Solidarity leader / first democratic President

### Portugal
- `henry-the-navigator.png` — **Henry the Navigator** · Prince & patron of exploration (1394–1460)
- `marquis-of-pombal.png` — **Marquis of Pombal** · Reforming minister (1699–1782)
- `mario-soares.png` — **Mário Soares** · Prime Minister & President (1924–2017)

### Russia
- `vladimir-the-great.png` — **Vladimir the Great** · Grand Prince of Kyiv (r. 980–1015)
- `ivan-iv-the-terrible.png` — **Ivan IV (the Terrible)** · First Tsar (r. 1547–1584)
- `peter-the-great.png` — **Peter the Great** · Emperor of Russia (r. 1682–1725)
- `catherine-the-great.png` — **Catherine the Great** · Empress of Russia (r. 1762–1796)
- `joseph-stalin.png` — **Joseph Stalin** · Soviet leader (r. 1924–1953)
- `mikhail-gorbachev.png` — **Mikhail Gorbachev** · Soviet leader (r. 1985–1991)
- `vladimir-putin.png` — **Vladimir Putin** · President (r. 2000–)

### Spain
- `trajan.png` — **Trajan** · Roman Emperor (r. 98–117)
- `abd-al-rahman-iii.png` — **Abd al-Rahman III** · Caliph of Córdoba (r. 929–961)
- `isabella-i-of-castile.png` — **Isabella I of Castile** · Queen (r. 1474–1504)
- `philip-ii.png` — **Philip II** · King of Spain (r. 1556–1598)
- `charles-iii.png` — **Charles III** · King of Spain (r. 1759–1788)
- `francisco-goya.png` — **Francisco Goya** · Painter & chronicler (1746–1828)
- `juan-carlos-i.png` — **Juan Carlos I** · King (r. 1975–2014)

### Sweden
- `gustavus-adolphus.png` — **Gustavus Adolphus** · King of Sweden (r. 1611–1632)
- `dag-hammarskjold.png` — **Dag Hammarskjöld** · UN Secretary-General (1905–1961)

### Turkey
- `mehmed-ii.png` — **Mehmed II** · The Conqueror (r. 1451–1481)
- `suleiman-the-magnificent.png` — **Suleiman the Magnificent** · Sultan (r. 1520–1566)
- `mustafa-kemal-ataturk.png` — **Mustafa Kemal Atatürk** · Founding President (r. 1923–1938)

### United Kingdom
- `boudica.png` — **Boudica** · Iceni queen (d. c. 60/61)
- `alfred-the-great.png` — **Alfred the Great** · King of Wessex (r. 871–899)
- `william-the-conqueror.png` — **William the Conqueror** · King of England (r. 1066–1087)
- `henry-v.png` — **Henry V** · King of England (r. 1413–1422)
- `elizabeth-i.png` — **Elizabeth I** · Queen of England (r. 1558–1603)
- `the-duke-of-wellington.png` — **The Duke of Wellington** · General & statesman (1769–1852)
- `queen-victoria.png` — **Queen Victoria** · Queen & Empress (r. 1837–1901)
- `winston-churchill.png` — **Winston Churchill** · Prime Minister (r. 1940–45, 1951–55)
- `margaret-thatcher.png` — **Margaret Thatcher** · Prime Minister (r. 1979–1990)

---

## 6. Delivery checklist

- [ ] PNG, 1:1 square, ≥ 256×256, dark vignette backdrop, no baked frame/text.
- [ ] Recognisable likeness + period dress, consistent lighting & gold rim across the set.
- [ ] Reads well at ~44 px (strong silhouette, clear values).
- [ ] Filename exactly matches the list above (lowercase, hyphenated).
- [ ] Dropped into `src/renderer/src/assets/figures/` — it appears automatically.
