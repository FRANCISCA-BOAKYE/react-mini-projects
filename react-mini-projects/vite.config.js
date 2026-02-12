import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you are not using Tailwind in Vite plugins, DO NOT include tailwindcss() here
export default defineConfig({
  plugins: [react()],
  base: './', // optional, ensures it works on Netlify
})
