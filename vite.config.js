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
            src: "/icons/logo1-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/logo1-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/screenshot-wide.png",
            sizes: "1280x720",
            type: "image/png",
          },
          {
            src: "/screenshots/screenshot-mobile.png",
            sizes: "750x1334",
            type: "image/png",
          },
        ],
      },
      description:
        "Estimate your daily calorie and macro intake based on your goals and activity level.",
      categories: ["health", "fitness", "nutrition"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico,json,webp,jpg,jpeg}"],
        navigateFallback: "index.html",
      },
    }),
  ],
  build: {
    sourcemap: false, // Disable source maps for a faster build
    chunkSizeWarningLimit: 500, // Avoid warnings for large chunks
  },
});
