#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

process.env.NODE_ENV = "production";

await $`npx vite build`;
