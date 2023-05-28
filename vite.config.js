import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vuetify(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { // devOptions is a way to checkout the PWA on the dev environment, should not be needed later
          enabled: true
        }
      })
  ],
  server: {
    port: 8000,
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
