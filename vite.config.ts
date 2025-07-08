// vite.config.ts
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { VitePluginRadar } from "vite-plugin-radar";
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: "G-Q1EHMXSL9G",
      },
    }),
    tsConfigPaths(),
    tanstackStart({ target: "netlify" }),
  ],
});
