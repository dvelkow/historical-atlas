import { app, BrowserWindow, shell, Menu, screen } from 'electron'
import { join } from 'path'

const isDev = !!process.env.ELECTRON_RENDERER_URL

function createWindow(): void {
  // Never open larger than the usable screen, or the right-hand panel ends up
  // off the edge on smaller displays. Cap to the work area and center.
  const { width: areaW, height: areaH } = screen.getPrimaryDisplay().workAreaSize
  const width = Math.min(1680, areaW)
  const height = Math.min(1000, areaH)
  console.log(`[atlas] work area ${areaW}x${areaH} -> window ${width}x${height}`)

  const win = new BrowserWindow({
    width,
    height,
    minWidth: Math.min(1180, areaW),
    minHeight: Math.min(740, areaH),
    center: true,
    show: false,
    backgroundColor: '#0b0f17',
    title: 'Historical Atlas',
    autoHideMenuBar: true,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: join(__dirname, '../preload/index.mjs'),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  win.on('ready-to-show', () => win.show())

  // Open external links in the user's browser rather than inside the app.
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  if (isDev) {
    win.loadURL(process.env.ELECTRON_RENDERER_URL as string)
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  // Minimal application menu — keep the chrome out of the way of the atlas.
  if (process.platform === 'darwin') {
    Menu.setApplicationMenu(
      Menu.buildFromTemplate([
        { role: 'appMenu' },
        { role: 'editMenu' },
        {
          role: 'viewMenu'
        },
        { role: 'windowMenu' }
      ])
    )
  } else {
    Menu.setApplicationMenu(null)
  }

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
