import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-layout',
      fileName: 'vue-layout',
      formats: ["cjs", "es", "umd"],
    },
  },
})
