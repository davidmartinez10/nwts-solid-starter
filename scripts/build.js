import "../nwts.env.js";

import {proper_spawn} from "nwts-tools/dist/lib/proper-spawn.js";

process.env.NODE_ENV = "production";

await proper_spawn(`npx vite build --sourcemap false`);
