# NW.ts Tools Solid Starter
A starter template set up for the VSCode debugger with HMR, code protection and build scripts.<br>

## Usage
```bash
$ npm install
```
Then, go to the `Run & Debug` editor tab and press `F5` to run the application inside the debugger.

Take a look at the contents of `nwts.manifest.ts`, from which the NW.js manifest is generated and saved to disk as `package.json` inside the public directory. You might also want to read `nwts.env.js`, where some environment variables that are important for the build process are defined.

## Scripts
### `npm start`
Runs the app in development mode.

### `npm run dev-hmr`
Runs the app in development mode with hot module replacement.

### `npm run patch-codecs`
Add a FFMPEG lib with proprietary codecs to the NW.js application folder under `node_modules/nw`. Take a look at https://www.ffmpeg.org/legal.html before using this for commercial purposes.

### `npm run clean`
Deletes the build and the package directories.

### `npm run build`
Builds for production.

### `npm run compile`
Takes a production build and runs it through the `nwjc`compiler that comes with the SDK flavors of NW.js. Useful for code protection.

### `npm run package`
Packages the app for distribution.
Visit [NW.ts-Tools](https://github.com/davidmartinez10/nwts-tools.git) or take a look at `nwts-tools/types/env.d.ts`.

### `npm run make`
Builds, compiles and packages the app using the scripts above.

### Included
- NW.js (SDK flavor)
- NW.ts-Tools
- Solid.js
- Typescript
- Vite
