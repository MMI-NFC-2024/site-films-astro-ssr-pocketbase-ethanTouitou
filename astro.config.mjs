// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://site-films.ethantouitou.fr',

  adapter: node({
    mode: 'standalone'
  }),

  security: {
    checkOrigin: false
  },

  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});