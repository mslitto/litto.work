import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

const manualChunks = (id : string) => {
  if (id.includes('node_modules') || id.includes('/lib/') || id.includes('/routes/')) {
    return 'vendor'
  }

  return 'index'
}

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
  server: {
    port: 8000,
    strictPort: false,
  },
  preview: {
    port: 8000,
    strictPort: false,
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
})
