import {defineConfig, Plugin} from "vite";
import solidPlugin from "vite-plugin-solid";

import {manifest} from "./nwts.manifest";

async function options() {
  await import("zx/globals");
  fs.writeJSON(path.join("public", "package.json"), manifest);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin(), {options} as unknown as Plugin],
  build: {sourcemap: "inline", outDir: process.env.BUILD_DIRECTORY},
});
