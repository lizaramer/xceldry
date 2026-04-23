import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (
            id.includes('/node_modules/react/') ||
            id.includes('/node_modules/react-dom/') ||
            id.includes('/node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }

          if (id.includes('/node_modules/@radix-ui/')) {
            const match = id.match(/@radix-ui\/react-([^/]+)/);
            return match ? `radix-${match[1]}` : 'radix-vendor';
          }

          if (id.includes('/node_modules/lucide-react/')) {
            return 'icons-vendor';
          }

          if (id.includes('recharts') || id.includes('d3-')) {
            return 'charts-vendor';
          }

          return 'vendor';
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
