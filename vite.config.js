import { defineConfig } from 'vite'

export default defineConfig({
  base: '/zhuanhuan-personality-web/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
