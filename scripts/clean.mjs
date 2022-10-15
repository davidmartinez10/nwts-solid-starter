#!/usr/bin/env zx
import "zx/globals";
import "../nwts.config.mjs";

const { BUILD_DIRECTORY, PACKAGE_DIRECTORY } = process.env;

await Promise.all([fs.remove(BUILD_DIRECTORY), fs.remove(PACKAGE_DIRECTORY)]);
