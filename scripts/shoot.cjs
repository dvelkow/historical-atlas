// One-off: capture a README screenshot (year 1942, Nazi Germany selected) from the
// running web dev server via an offscreen Electron window. Run with:
//   node_modules/.bin/electron scripts/shoot.cjs
const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const path = require('path')

const URL = process.env.SHOOT_URL || 'http://localhost:5199'
const OUT = path.join(__dirname, '..', 'docs', 'screenshot-1942-germany.png')

// Drive the app's own React props (no DOM data-ids exist) to set the year + selection.
const SET_STATE = `(() => {
  function fiberOf(el){const k=Object.keys(el).find(k=>k.startsWith('__reactFiber$'));return k?el[k]:null;}
  function findUp(f,p){while(f){if(p(f))return f;f=f.return;}return null;}
  const dial=document.querySelector('.year-dial');
  const svg=document.querySelector('.worldmap-svg')||document.querySelector('.worldmap');
  let onChange,onSelect;
  if(dial){const f=findUp(fiberOf(dial),x=>x&&x.memoizedProps&&typeof x.memoizedProps.onChange==='function'&&typeof x.memoizedProps.min==='number');onChange=f&&f.memoizedProps.onChange;}
  if(svg){const f=findUp(fiberOf(svg),x=>x&&x.memoizedProps&&typeof x.memoizedProps.onSelect==='function');onSelect=f&&f.memoizedProps.onSelect;}
  if(onChange)onChange(1942);
  if(onSelect)onSelect('germany');
  return {ok:!!onChange&&!!onSelect};
})()`

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    show: false,
    backgroundColor: '#070b12',
    webPreferences: { offscreen: true }
  })
  win.webContents.setFrameRate(60)
  win.webContents.setAudioMuted(true)

  await win.loadURL(URL)
  await win.webContents.executeJavaScript('document.fonts.ready.then(()=>true)')
  await sleep(2500) // border TopoJSON + first render
  const res = await win.webContents.executeJavaScript(SET_STATE)
  console.log('state set:', JSON.stringify(res))
  await sleep(1800) // map ease animation + relations arrows

  const img = await win.webContents.capturePage()
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, img.toPNG())
  const { width, height } = img.getSize()
  console.log(`wrote ${OUT} (${width}x${height}, ${fs.statSync(OUT).size} bytes)`)
  app.quit()
})
