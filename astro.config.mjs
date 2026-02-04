import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  site: 'https://aseinteg.com',
  integrations: [sitemap()],
  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    },
    plugins: [tailwindcss()],
  },
});