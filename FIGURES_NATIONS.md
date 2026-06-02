# New Nations — Leader Portraits (drop-in instructions)

The **missing-nations expansion** adds 8 full countries (Norway, Ireland, Czechia, Serbia,
Romania, Ukraine, Switzerland, Belgium). Their leaders ship as **placeholders**; drop a PNG with
the **exact filename** below into the figures folder and it replaces the placeholder
automatically — **no code changes**.

- **Folder:** `src/renderer/src/assets/figures/`
- **Art spec & technical spec:** identical to every other portrait — see [`FIGURES.md`](FIGURES.md)
  sections 1–2 (stylised 2D painted bust, 256×256 RGBA, dark vignette, period regalia, warm gold
  rim light, no baked frame/text). Rebuild (`npm run build`) after adding files.
- Filenames are the figure's name run through the app's slug rule, already computed below — just
  match them verbatim.

> **Already present (no work needed):** `trajan.png` (Romania reuses the existing Spain portrait),
> `maria-theresa.png` (Belgium reuses Austria's), and `christian-iv.png` (Norway reuses Denmark's)
> — these three already display. `vaclav-havel.png` and `guillaume-henri-dufour.png` each appear in
> two periods but need only **one** file.

## Norway
- `harald-fairhair.png` — **Harald Fairhair** · First king of a united Norway (r. c. 872–930)
- `olaf-ii-st-olaf.png` — **Olaf II (St Olaf)** · King & patron saint (r. 1015–1028)
- `sverre-sigurdsson.png` — **Sverre Sigurdsson** · King who won the civil wars (r. 1184–1202)
- `haakon-iv-haakonsson.png` — **Haakon IV Haakonsson** · King of Norway's golden age (r. 1217–1263)
- `margaret-i.png` — **Margaret I** · Queen who forged the Kalmar Union (r. 1387–1412)
- `christian-iv.png` — **Christian IV** · King of Denmark–Norway *(already present)*
- `henrik-wergeland.png` — **Henrik Wergeland** · Poet of the national awakening (1808–1845)
- `christian-michelsen.png` — **Christian Michelsen** · PM at the 1905 dissolution (1857–1925)
- `haakon-vii.png` — **Haakon VII** · First king of independent Norway (r. 1905–1957)
- `gro-harlem-brundtland.png` — **Gro Harlem Brundtland** · Prime Minister (1939–present)

## Ireland
- `saint-patrick.png` — **Saint Patrick** · Apostle of Ireland (fl. 5th century)
- `brian-boru.png` — **Brian Boru** · High King, victor at Clontarf (r. 1002–1014)
- `richard-de-clare-strongbow.png` — **Richard de Clare (Strongbow)** · Norman Lord of Leinster (c. 1130–1176)
- `hugh-o-neill.png` — **Hugh O'Neill** · Earl of Tyrone (c. 1550–1616)
- `daniel-o-connell.png` — **Daniel O'Connell** · Leader of Catholic Emancipation (1775–1847)
- `charles-stewart-parnell.png` — **Charles Stewart Parnell** · Home Rule leader (1846–1891)
- `michael-collins.png` — **Michael Collins** · Revolutionary & Free State leader (1890–1922)
- `eamon-de-valera.png` — **Éamon de Valera** · Taoiseach & President (1882–1975)

## Czechia
- `svatopluk-i.png` — **Svatopluk I** · King of Great Moravia (r. 871–894)
- `saint-methodius.png` — **Saint Methodius** · Slavic apostle (c. 815–885)
- `charles-iv.png` — **Charles IV** · King of Bohemia & Holy Roman Emperor (r. 1346–1378)
- `jan-hus.png` — **Jan Hus** · Reformer burned at Constance (c. 1369–1415)
- `ferdinand-ii.png` — **Ferdinand II** · Habsburg emperor & king of Bohemia (r. 1619–1637)
- `jan-amos-comenius.png` — **Jan Amos Comenius** · Exiled educator & bishop (1592–1670)
- `tomas-masaryk.png` — **Tomáš Masaryk** · Founding president (r. 1918–1935)
- `vaclav-havel.png` — **Václav Havel** · Dissident president (1936–2011) *(used twice)*
- `vaclav-klaus.png` — **Václav Klaus** · Architect of the split & president (r. 2003–2013)

## Serbia
- `stefan-nemanja.png` — **Stefan Nemanja** · Dynastic founder (r. c. 1166–1196)
- `saint-sava.png` — **Saint Sava** · First Serbian archbishop (1175–1236)
- `stefan-dusan.png` — **Stefan Dušan** · Tsar of the Serbs and Greeks (r. 1331–1355)
- `prince-lazar.png` — **Prince Lazar** · Ruler who fell at Kosovo (r. 1373–1389)
- `patriarch-makarije-sokolovic.png` — **Patriarch Makarije Sokolović** · Restorer of the Peć Patriarchate (r. 1557–1571)
- `karadorde-petrovic.png` — **Karađorđe Petrović** · Leader of the First Uprising (r. 1804–1813)
- `peter-i.png` — **Peter I** · King of Serbia (r. 1903–1918)
- `josip-broz-tito.png` — **Josip Broz Tito** · Leader of socialist Yugoslavia (r. 1945–1980)
- `slobodan-milosevic.png` — **Slobodan Milošević** · President during the breakup wars (r. 1989–2000)

## Romania
- `trajan.png` — **Trajan** · Roman emperor *(already present)*
- `decebalus.png` — **Decebalus** · Last king of Dacia (r. 87–106)
- `vlad-iii-dracula.png` — **Vlad III Dracula** · Prince of Wallachia (r. 1448, 1456–62, 1476)
- `stephen-the-great.png` — **Stephen the Great** · Prince of Moldavia (r. 1457–1504)
- `michael-the-brave.png` — **Michael the Brave** · Unifier of the three lands (r. 1593–1601)
- `carol-i.png` — **Carol I** · First king of Romania (r. 1881–1914)
- `michael-i.png` — **Michael I** · Last king of Romania (r. 1927–30, 1940–47)
- `nicolae-ceausescu.png` — **Nicolae Ceaușescu** · Communist dictator (r. 1965–1989)

## Ukraine
- `yaroslav-the-wise.png` — **Yaroslav the Wise** · Grand Prince of Kyiv (r. 1019–1054)
- `danylo-of-galicia.png` — **Danylo of Galicia** · King of Rus' (r. 1253–1264)
- `konstanty-ostrogski.png` — **Konstanty Ostrogski** · Ruthenian magnate (c. 1526–1608)
- `bohdan-khmelnytsky.png` — **Bohdan Khmelnytsky** · Hetman of the Cossacks (r. 1648–1657)
- `ivan-mazepa.png` — **Ivan Mazepa** · Hetman who allied with Sweden (r. 1687–1709)
- `taras-shevchenko.png` — **Taras Shevchenko** · National poet (1814–1861)
- `mykhailo-hrushevsky.png` — **Mykhailo Hrushevsky** · President of the 1917 republic (1866–1934)
- `volodymyr-zelensky.png` — **Volodymyr Zelensky** · President (r. 2019–present)

## Switzerland
- `huldrych-zwingli.png` — **Huldrych Zwingli** · Reformer of Zürich (1484–1531)
- `niklaus-von-flue.png` — **Niklaus von Flüe** · Hermit & peacemaker (1417–1487)
- `frederic-cesar-de-la-harpe.png` — **Frédéric-César de La Harpe** · Helvetic Republic leader (1754–1838)
- `guillaume-henri-dufour.png` — **Guillaume-Henri Dufour** · General & mapmaker (1787–1875) *(used twice)*
- `henri-dunant.png` — **Henri Dunant** · Founder of the Red Cross (1828–1910)

## Belgium
- `charles-v.png` — **Charles V** · Holy Roman Emperor, born in Ghent (r. 1519–1556)
- `maria-theresa.png` — **Maria Theresa** · Habsburg sovereign *(already present)*
- `william-i.png` — **William I** · King of the United Netherlands (r. 1815–1840)
- `leopold-i.png` — **Leopold I** · First King of the Belgians (r. 1831–1865)
- `leopold-ii.png` — **Leopold II** · King & ruler of the Congo Free State (r. 1865–1909)

---

**~59 new files to make** (62 unique names minus the 3 already present). Drop them into
`src/renderer/src/assets/figures/`, rebuild, and each lights up its leader automatically.
