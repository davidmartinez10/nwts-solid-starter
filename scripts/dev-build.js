import "../nwts.env.js";

import fs from "fs";
import {proper_spawn} from "nwts-tools/dist/lib/proper-spawn.js";

await proper_spawn(`npx vite build --minify false`);

const args = JSON.parse(await fs.promises.readFile(
               "public/package.json"))["chromium-args"]
             || "";

await proper_spawn(
  `npx nw ${process.env.BUILD_DIRECTORY} --remote-debugging-port=${
    process.env.DEBUG_PORT} ${args.split(" ")}`);