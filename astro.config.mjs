import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  site: 'https://litto.work',
  outDir: './docs',
  output: 'static',
  trailingSlash: 'always',
})
