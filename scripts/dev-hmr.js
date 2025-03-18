import "../nwts.env.js";

import fs from "fs";
import {proper_spawn} from "nwts-tools/dist/lib/proper-spawn.js";

if (! fs.existsSync("public")) { await fs.promises.mkdir("public"); }
await fs.promises.rm("public/package.json").catch(Boolean);

const dev_server
  = proper_spawn(`npx vite --port ${process.env.PORT} --strictPort`);

while (true) {
  if (fs.existsSync("public/package.json")) { break; }

  await new Promise(function(resolve) { setTimeout(resolve, 1000); });
}

const args = JSON.parse(await fs.promises.readFile(
               "public/package.json"))["chromium-args"]
             || "";

await proper_spawn(`npx nw public --remote-debugging-port=${
  process.env.DEBUG_PORT} ${args.split(" ")}`);

dev_server.kill();
