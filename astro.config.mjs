// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Home, projects, about, resume, links, and both blogs are fully static (Spec §2).
// If /journal gating is later confirmed (Spec §3a), switch that route to an
// on-demand-rendered page and add a server adapter — nothing else needs to change.
export default defineConfig({
  site: 'https://adhillon.net',
  output: 'static',
  server: {
    port: Number(process.env.PORT) || 4321,
  },
  // Blog + journal indexes were unified into /writing; keep old paths working.
  redirects: {
    '/blog': '/writing',
    '/journal': '/writing?tab=personal',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
