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

Remove old Node 10/npm 6 overrides, any Yarn selection (`NETLIFY_USE_YARN`, Yarn package-manager settings), old incompatible `NPM_FLAGS`, and any global `NODE_OPTIONS` override. Leave `NODE_ENV` unset during dependency installation. The build creates production assets itself. The homepage now uses an email link; the former REACT_APP_CONTACT_ENDPOINT override is unused and may be removed from Netlify separately. No backend or mail service is required by the homepage. Ensure the selected Netlify build image can install the pinned Node release; the old deploy's runtime is not reused. Clear the old dependency cache for the first release build.

Netlify normally runs an automatic `npm install` when no alternative lockfile exists. The explicit `npm ci` in the build command then replaces that tree from the authoritative lock, including build dependencies, before compilation. This deliberately costs an extra install to avoid relying on a stale cached tree. Configuration precedence and dependency selection are documented in [Netlify's dependency guide](https://docs.netlify.com/build/configure-builds/manage-dependencies/).

`CI=''` remains scoped to compilation; tests use `CI=true`. The legacy application has been removed. `public/_redirects` now redirects old/unknown URLs home with HTTP 301, while existing static files take precedence. On preview hosts using an SPA fallback, App also replaces non-root browser paths with `/` and renders only the approved homepage. Approved artwork and dependency versions are unchanged.

## Validation and remaining release checks

The Node LTS setup was validated with an isolated clean install. The release cleanup passes the focused homepage and old-route tests (16 tests) and production build. The only current build warning is stale Browserslist data; dependency upgrades are outside this task.

Legacy About/CV/login/phone-number/family/project pages, their data, components and image assets are removed from the checkout and production bundle. No removed source paths remain in source maps. A build scan against 265 collected legacy-content markers found no matches; the old Heroku endpoint is absent. Original personal-data values are never printed by the scan. Obsolete root-level public icons/logos are removed; the approved `/home/` artwork and manifest remain.

The contact section now links to the existing intended recipient with `mailto:`. There are no form fields, submission code or backend requests. Opening the link requires the visitor's email application; no message delivery is claimed by the website.

Local HTTP preview tests emulate Netlify's committed static-file precedence and redirect rule; old page and removed-asset URLs redirect to `/` and show only the homepage. The homepage's above-contact appearance is compared with approved screenshots at 320px, 393px and 1440px, including the zero mobile specialisms top margin from commit 38a4718. Contact rendering and sticky-header behaviour are checked at the same widths.

Remaining acceptance: verify the first Netlify build and real hosted redirects, actual iPhone/Home Screen appearance and that the email link opens the intended email application. This removes content from the next deployment; it does not erase Git history, cached pages or previous Netlify deploys. There has been no merge or deployment. Dependency advisories and broader build-tool maintenance remain separate work.

## Available scripts

- `npm start`: development server on http://localhost:3000.
- `npm test`: interactive tests.
- `npm run build`: production output in `build/`.
- `npm run eject`: irreversible Create React App ejection; not needed for this setup.
