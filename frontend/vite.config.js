import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  },
  build: {
    outDir: 'dist', // Change output directory to 'dist' for Vercel
    publicDir: 'public',
  },
})
