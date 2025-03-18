import {proper_spawn} from "nwts-tools/dist/lib/proper-spawn.js";

await proper_spawn(`npm run clean`);
await proper_spawn(`npm run build`);
await proper_spawn(`npm run compile`);
await proper_spawn(`npm run package`);
