let {
  NODE_ENV          = "development",
  PORT              = 3000,
  DEBUG_PORT        = 9222,
  BUILD_DIRECTORY   = "build",
  PACKAGE_DIRECTORY = "dist",
  PACKAGE_TYPE      = "plain",
  NWJS_FFMPEG       = "PATCH",
}
= process.env;

Object.assign(process.env, {
  NODE_ENV,
  PORT,
  DEBUG_PORT,
  BUILD_DIRECTORY,
  PACKAGE_DIRECTORY,
  PACKAGE_TYPE,
  NWJS_FFMPEG
});
