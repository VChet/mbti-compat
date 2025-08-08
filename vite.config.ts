import { fileURLToPath, URL } from "node:url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import PWA_OPTIONS from "./src/constants/pwa-options.ts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueI18nPlugin(),
    VitePWA(PWA_OPTIONS)
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    port: 7300
  }
});
