import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // VUE MODULE
      '/vue-page': {
        target: 'http://localhost:2000/vue',
      },
      '^/vue/.*': {
        target: 'http://localhost:2000',
      },
    }
  }
})
