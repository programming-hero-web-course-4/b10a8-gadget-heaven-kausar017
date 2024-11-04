import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // এই লাইনটি আনকোমেন্ট করা হয়েছে
  resolve: {
    alias: {
      path: 'path-browserify'
    }
  }
})
