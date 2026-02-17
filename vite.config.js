import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    base: "/neeti-collective/",
    plugins: [react()],
    build: {
        minify: "esbuild",
        sourcemap: false, // VERY IMPORTANT
    },
    define: {
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
});
