import type { ManifestOptions, VitePWAOptions } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  name: "MBTI Compatibility",
  short_name: "MBTI Compat",
  id: "mbti-compat",
  description: "A service for analyzing MBTI personality compatibility in the form of a convenient list and interactive graph. Add people, select their personality types, and quickly assess the quality of relationships on a color scale — from poor to ideal",
  dir: "ltr",
  orientation: "portrait",
  theme_color: "#19191a",
  background_color: "#19191a",
  icons: [
    { src: "icon-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "icon-512x512.png", sizes: "512x512", type: "image/png" },
    { src: "icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" }
  ]
};

const pwaOptions: Partial<VitePWAOptions> = {
  base: "/",
  strategies: "injectManifest",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
  manifest,
  workbox: { sourcemap: true }
};

export default pwaOptions;
