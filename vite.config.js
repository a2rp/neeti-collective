import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    return {
        base: mode === "production" ? "/neeti-collective/" : "/",
        plugins: [react()],
        build: {
            minify: "esbuild",
            sourcemap: false,
        },
        define: {
            __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
        },
    };
});
