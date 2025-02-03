import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Estimate Daily Calories & Macros",
        short_name: "Calorie Estimator",
        theme_color: "#fa4454",
        background_color: "#000",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js, css, html,png, svg, ico}"],
      },
    }),
  ],
  build: {
    sourcemap: false, // Disable source maps for a faster build
    chunkSizeWarningLimit: 500, // Avoid warnings for large chunks
  },
});
