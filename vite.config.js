import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // http://143.110.241.146:5055/
    host: "143.110.241.146",
    port: "3000",
  },
});
