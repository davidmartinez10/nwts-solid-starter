import "../nwts.env.js";

import fs from "fs/promises";

await Promise.all([
  fs.rm(process.env.BUILD_DIRECTORY, { recursive: true, force: true })
    .catch(Boolean),
  fs.rm(process.env.PACKAGE_DIRECTORY, { recursive: true, force: true })
    .catch(Boolean)
]);
