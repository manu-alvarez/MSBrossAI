import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Arantxa Translate PRO v3.0',
        short_name: 'ArantxaTranslate',
        description: 'PWA Multi-LLM para traducir, resumir y procesar documentos',
        theme_color: '#00f2fe',
        background_color: '#050508',
        display: 'standalone',
        start_url: '/traductor/',
        icons: [
          { src: '/traductor/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/traductor/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  base: '/traductor/',
});
