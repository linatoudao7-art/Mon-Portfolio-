import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pour GitHub Pages dans un dépôt « portfolio » : base: '/portfolio/'
export default defineConfig({ plugins: [react()], base: '/' })
