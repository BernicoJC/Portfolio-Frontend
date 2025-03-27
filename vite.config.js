import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  },
  server: {
    port: process.env.PORT || 4173,
    host: true
  }
});
