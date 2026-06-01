import { contextBridge } from 'electron'

// Expose a small, read-only surface to the renderer for desktop-shell features.
// The atlas itself runs as a pure web app; this only enriches the "About"
// footer and lets the renderer know it is hosted inside Electron.
const api = {
  isElectron: true,
  platform: process.platform,
  versions: {
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node
  }
}

export type ElectronAPI = typeof api

try {
  contextBridge.exposeInMainWorld('electronAPI', api)
} catch (error) {
  // contextIsolation disabled fallback (should not happen with our config).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).electronAPI = api
}
