import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { AliasOptions } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 4173,
  },
  resolve: {
    alias: getAlias(),
  },
});

function getPath(path: string): string {
  return `/src/${path}`;
}

function getAlias(): AliasOptions {
  return [
    { find: "@components", replacement: getPath("components") },
    { find: "@icons", replacement: getPath("icons") },
    { find: "@styles", replacement: getPath("styles") },
    { find: "@pages", replacement: getPath("pages") },
  ];
}
