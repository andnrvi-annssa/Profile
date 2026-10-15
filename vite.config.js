import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' cocok untuk Vercel / Netlify / domain sendiri.
// Untuk GitHub Pages di sub-folder (mis. /andini-portfolio/), ubah menjadi base: '/andini-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
