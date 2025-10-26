import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://arbicuir.com",
  integrations: [svelte()],
  vite: {
    plugins: [tailwind()],
  }
});