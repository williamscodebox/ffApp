import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwinds from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwinds()],
  server: {
    proxy: {
      "/api/": "http://localhost:3000",
      // "/uploads/": "http://localhost:3000",
    },
  },
});
