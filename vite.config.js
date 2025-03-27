import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },
  server: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: ["bernico-12c1c54f39fd.herokuapp.com", "www.bernicojc.com"]
  }
});
