import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __LOCALSTORAGE_VERSION__: 1,
  },
  plugins: [svelte()],
})
