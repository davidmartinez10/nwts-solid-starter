#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

await fs.ensureDir("public");
await fs.unlink("public/package.json").catch(() => void 0);
const dev_server = $`npx vite --port ${process.env.PORT} --strictPort`;

while (true) {
  if (await fs.pathExists("public/package.json")) { break; }
  await sleep(1000);
}

process.env.BUILD_DIRECTORY = "public";
await $`npx nwts-run`;

dev_server.nothrow().kill();
