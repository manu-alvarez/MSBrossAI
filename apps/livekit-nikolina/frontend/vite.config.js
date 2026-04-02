import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: './',
    server: {
        host: true,
        port: 5174,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081',
                changeOrigin: true,
            }
        }
    },
    preview: {
        port: 5174,
    }
})
