import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone web config — used for in-browser preview / verification of the
// renderer without launching the Electron shell. The renderer is written as a
// pure web app, so the same code powers both the desktop build (electron-vite)
// and this browser build.
export default defineConfig({
  root: 'src/renderer',
  base: './',
  resolve: {
    alias: { '@': resolve(__dirname, 'src/renderer/src') }
  },
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'dist-web'),
    emptyOutDir: true
  },
  server: {
    port: 5199,
    strictPort: false
  }
})
