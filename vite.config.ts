// vite.config.ts
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { VitePluginRadar } from 'vite-plugin-radar'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({ target: 'netlify' }),
    tailwindcss(),
    VitePluginRadar({
      enableDev: true,
      // Google Analytics tag injection
      analytics: {
        id: 'G-Q1EHMXSL9G',
      },
    }),
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.slice(-3) === '.md') {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`
        }
      },
    },
  ],
})
