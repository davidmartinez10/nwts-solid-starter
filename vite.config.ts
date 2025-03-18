import {execSync} from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {defineConfig, Plugin} from "vite";
import solidPlugin from "vite-plugin-solid";

import {manifest} from "./nwts.manifest";

const nwts_plugin = {
  async options() {
    const package_json
      = JSON.parse(await fs.promises.readFile("./package.json", "utf-8"));

    if (package_json?.bundleDependencies && package_json?.dependencies) {
      Object.assign(manifest, {
        dependencies: Object.fromEntries(
          Object.entries(package_json.dependencies).filter(function(value) {
            return package_json.bundleDependencies.includes(value[0]);
          }))
      });
    }

    if (! fs.existsSync("public")) { fs.mkdirSync("public"); }
    await fs.promises.writeFile(path.join("public", "package.json"),
                                JSON.stringify(manifest));
    execSync(`npm install`,
             { stdio: "inherit", cwd: path.join(process.cwd(), "public") });
  }
} as unknown as Plugin;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin(), nwts_plugin],
  build: {
    assetsDir: ".",
    sourcemap: "inline",
    outDir: process.env.BUILD_DIRECTORY,
    emptyOutDir: true,
    rollupOptions: {output: {format: "umd"}}
  },
});
