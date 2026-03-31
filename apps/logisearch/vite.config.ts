import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'pwa-192x192.svg', 'pwa-512x512.svg'],
      manifest: {
        name: 'LogiSearch AI — Buscador Logístico Inteligente',
        short_name: 'LogiSearch',
        description: 'Calcula rutas, costos y encuentra transportistas con inteligencia artificial. Nacional e internacional.',
        theme_color: '#00B4D8',
        background_color: '#00101F',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        lang: 'es',
        categories: ['business', 'productivity', 'utilities'],
        icons: [
          {
            src: 'pwa-192x192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        // Cache strategies
        runtimeCaching: [
          {
            // Cache Google Fonts
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Cache font files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
        // Pre-cache app shell
        globPatterns: ['**/*.{js,css,html,svg,woff,woff2}'],
      },
      devOptions: {
        enabled: true, // Enable PWA in dev mode for testing
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // MUI and Emotion in its own chunk
          'vendor-mui': ['@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material'],
          // Framer Motion separate
          'vendor-motion': ['framer-motion'],
          // PDF generation separate (heavy, loaded on demand)
          'vendor-pdf': ['jspdf'],
          // Supabase separate
          'vendor-supabase': ['@supabase/supabase-js'],
        },
      },
    },
    // Increase chunk size warning limit (MUI is inherently large)
    chunkSizeWarningLimit: 600,
  },
})
