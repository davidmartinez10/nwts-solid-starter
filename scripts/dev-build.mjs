#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

await $`npx vite build --minify false`;
await $`npx nwts-run`;
