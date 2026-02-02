import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    },
    plugins: [tailwindcss()],
  },
});