import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __LOCALSTORAGE_VERSION__: 0,
  },
  plugins: [svelte()],
})
