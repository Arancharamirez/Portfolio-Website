import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set site and base for GitHub Pages.
// base must match the GitHub repository name exactly (case-sensitive):
// https://github.com/Arancharamirez/Portfolio-Website → '/Portfolio-Website'
export default defineConfig({
  site: 'https://arancharamirez.github.io',
  base: '/Portfolio-Website',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
