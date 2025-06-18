import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwinds from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwinds()],
  server: {
    proxy: {
      "/api/": "http://localhost:3000",
      // "/uploads/": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
