import {NWJSManifest} from "nwts-tools/lib/types/nwjs_manifest";

import package_json from "./package.json";

let { name, displayName } = package_json;
if (! displayName) { displayName = name; }

export const manifest: NWJSManifest = {
  name: displayName,
  domain: name,
  main: process.env.NODE_ENV === "development" && ! process.env.DEBUG
          ? `http://localhost:${process.env.PORT}`
          : "index.html",
  window: {
    width: 500,
    height: 500,
    position: "center",
  },
  "node-remote": ["<all_urls>"]
};
