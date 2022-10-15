# NW.ts Tools Solid Starter
A starter template preconfigured to work with HMR and the VSCode debugger out-of-the-box.<br>

## Usage
```bash
$ npm install
```
Then, go to the `Run & Debug` editor tab and press `F5` to run the application inside the debugger.

Take a look at the contents of `nwts.manifest.ts`, from which the NW.js manifest is generated and saved to disk as `package.json` inside the public directory. You might also want to read `nwts.config.mjs`, where some environment variables that are important for the build process are defined.

## Main Scripts
### `npm start` or `npm run dev-hmr`
Runs the app in development mode with hot module replacement.

### `npm run patch-codecs`
Optional. It replaces the FFMPEG library that is included with NW.js. Licensing restrictions apply for non-FOSS programs.

### `npm run clean`
Deletes the build and the package directories.

### `npm run typecheck`
Runs the Typescript static analyzer.

### `npm run build`
Builds for production.

### `npm run compile-to-bin`
Takes a production build and runs it through the `nwjc`compiler that comes with the SDK flavors of NW.js. Useful for code protection.

### `Sequential build and distribution`
```bash
$ npm run clean
$ npm run typecheck
$ npm run build
$ npm run compile-to-bin
$ npm run package
```
Each script depends on the previous.

### `npm run package`
Packages the app for distribution.
Visit [NW.ts-Tools](https://github.com/davidmartinez10/nwts-tools.git) or take a look at `nwts-tools/types/env.d.ts` to know how to configure the packager to your needs.

### Included
- NW.js (SDK flavor)
- NW.ts-Tools
- Solid.js
- Typescript
- Vite
