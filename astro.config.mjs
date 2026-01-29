// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://halwolf.github.io',
  base: '/empresas-aseinteg/',
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    optimizeDeps:{
      include: ['astro-leaflet > leaflet'],
    },
    plugins: [tailwindcss()],
  },
});