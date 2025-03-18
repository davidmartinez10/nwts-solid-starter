import "../nwts.env.js";

import fs from "fs";
import {proper_spawn} from "nwts-tools/dist/lib/proper-spawn.js";

process.env.DEBUG = "true";

await proper_spawn(`npx vite build --mode development --minify false`);

const args = JSON.parse(await fs.promises.readFile(
               `${process.env.BUILD_DIRECTORY}/package.json`))["chromium-args"]
             || "";

await proper_spawn(
  `npx nw ${process.env.BUILD_DIRECTORY} --remote-debugging-port=${
    process.env.DEBUG_PORT} ${args.split(" ")}`);