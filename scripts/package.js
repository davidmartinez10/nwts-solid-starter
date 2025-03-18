import "../nwts.env.js";

import {proper_spawn} from "nwts-tools/dist/lib/proper-spawn.js";

await proper_spawn(`npx nwts-package`);
