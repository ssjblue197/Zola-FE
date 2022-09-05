/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePluginFonts } from 'vite-plugin-fonts'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  preview: {
    port: 3030
  },
  base: '/',
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginFonts({
      google: {
        families: ['Source Sans Pro'],
      },
    }),
  ]
})
