import launch_json from "./.vscode/launch.json" assert {type : "json"};
import package_json from "./package.json" assert {type : "json"};

process.env.NODE_ENV = process.env.NODE_ENV || "development";

process.env.PORT = process.env.PORT || 3000;

process.env.DEBUG_PORT
  = process.env.DEBUG_PORT || launch_json?.configurations?.[0]?.port || 9222;

process.env.BUILD_DIRECTORY   = process.env.BUILD_DIRECTORY || "build";
process.env.PACKAGE_DIRECTORY = process.env.PACKAGE_DIRECTORY || "dist";
process.env.PACKAGE_TYPE      = process.env.PACKAGE_TYPE || "plain";

process.env.NWJS_VERSION
  = process.env.NWJS_VERSION
    || (package_json?.dependencies?.nw || package_json?.devDependencies?.nw)
         .replace("-sdk", "");

process.env.NWJS_FFMPEG = "PATCH";
