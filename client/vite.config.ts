import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000, // Change this to any port you prefer
    host: true, // This allows the server to be accessed externally
  },
});
