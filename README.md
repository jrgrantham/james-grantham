This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Reproducible build

Use Node **26.13.0 (LTS)** and npm **11.20.0**. `.nvmrc`, `package.json` and `netlify.toml` pin the tested versions. Node 26 is an LTS line according to the [Node release schedule](https://nodejs.org/en/about/previous-releases).

```sh
nvm install
nvm use
npm --version # must be 11.20.0; install that exact npm version if necessary
npm ci --include=dev --no-audit --no-fund
CI=true npm test -- --watchAll=false --runInBand src/views/Homepage.test.jsx
CI='' npm run build
```

`package-lock.json` is the only authoritative lockfile. Use `npm ci` for clean builds; use npm when intentionally changing dependencies. Do not recreate `yarn.lock`. Existing local edits to both lockfiles were preserved in `.local-backups/lockfiles-before-node-lts/` (ignored by Git) before npm metadata was synchronised and Yarn's lockfile removed. Existing resolved versions were retained; npm added its missing TypeScript peer dependency to make the lockfile complete.

The smallest compatibility change is explicit OpenSSL legacy-provider arguments in the `start` and `build` scripts. React Scripts 3.4.0/Webpack 4 and Babel Loader 8.0.6 still use MD4 hashing. This is a temporary build-tool workaround, not a dependency security upgrade or a browser/runtime setting. No global `NODE_OPTIONS` is required. See [Node's explanation](https://nodejs.org/en/blog/release/v17.0.0). Retire the workaround when the build toolchain is upgraded in a separate task.

## Netlify settings

The committed `netlify.toml` supplies the build configuration below. Keep the site's production branch as **master**; no production setting has been changed through this repository task.

| Setting | Required value |
| --- | --- |
| Production branch (Netlify UI) | `master` |
| Base directory | repository root (`/` in the confirmed UI, `.` in TOML) |
| Build command | `npm ci --include=dev --no-audit --no-fund && CI='' npm run build` |
| Publish directory | `build/` |
| Node | `26.13.0` |
| npm | `11.20.0` |
| `NPM_FLAGS` | `--include=dev --no-audit --no-fund` |

Remove old Node 10/npm 6 overrides, any Yarn selection (`NETLIFY_USE_YARN`, Yarn package-manager settings), old incompatible `NPM_FLAGS`, and any global `NODE_OPTIONS` override. Leave `NODE_ENV` unset during dependency installation. The build creates production assets itself. Preserve contact environment settings; no contact service is changed here. Ensure the selected Netlify build image can install the pinned Node release; the old deploy's runtime is not reused. Clear the old dependency cache for the first release build.

Netlify normally runs an automatic `npm install` when no alternative lockfile exists. The explicit `npm ci` in the build command then replaces that tree from the authoritative lock, including build dependencies, before compilation. This deliberately costs an extra install to avoid relying on a stale cached tree. Configuration precedence and dependency selection are documented in [Netlify's dependency guide](https://docs.netlify.com/build/configure-builds/manage-dependencies/).

`CI=''` is scoped to the compilation step because the legacy application has existing lint warnings; tests still use `CI=true`. The existing `public/_redirects` SPA fallback is retained for old routes. Neither React source, application dependencies, contact behaviour nor approved artwork changed.

## Validation and remaining release checks

An isolated source export with no existing `node_modules` passed `npm ci`, both existing homepage tests and the production build on the exact pinned versions, with `NODE_OPTIONS` unset. The tested package/runtime inputs exactly match this checkout. Chrome screenshots of the isolated build were byte-for-byte identical to the approved screenshots at 320px, 393px and 1440px. Compilation retains the known legacy lint and Browserslist warnings. The unrelated original `App.test.js` assertion is not part of the homepage check.

The unavailable default Heroku contact endpoint remains a release blocker unless a working hosting override is verified. This task does not fix dependency advisories, backend authorisation, or legacy personal-information exposure. The first Netlify build, actual iPhone layout/Home Screen icon and successful contact delivery still require release acceptance. No merge or deployment was performed.

## Available scripts

- `npm start`: development server on http://localhost:3000.
- `npm test`: interactive tests.
- `npm run build`: production output in `build/`.
- `npm run eject`: irreversible Create React App ejection; not needed for this setup.
