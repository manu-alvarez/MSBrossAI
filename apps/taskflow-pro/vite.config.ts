import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 8887 },
  preview: { port: 8887 },
  build: {
    rollupOptions: {
      plugins: [
        commonjs({
          include: /node_modules/,
          requireReturnsDefault: 'auto',
        })
      ],
      output: {
        format: 'iife',
        inlineDynamicImports: true,
      }
    }
  }
});
