# Approved homepage — chatgpt branch

The homepage uses ivory, forest green and ochre, with introduction, personal-project shortcuts, engineering background/tool banner, offshore recollections and contact. Kitchen links to its confirmed URL; RC Garage, Music, Aquarium and the engineering tool retain their existing project-information behaviour.

The JG/Contact header remains sticky with an opaque page-coloured background. The introduction keeps this order: specialisms, full name, tagline, paragraph and photograph (alongside the text on desktop). Specialisms remain green with three deliberate mobile lines. The zero mobile top margin from commit 38a4718 and the approved gaps/typography are preserved. The existing notebook/calipers crop is 150px tall on mobile. Five supplied original icon assets retain their artwork and framing; see public/home/ASSETS.md.

## Release cleanup

The legacy application and its About, CV, authentication, phone-number, family and project pages/data/assets are removed. The only rendered page is the approved homepage. Old/unknown URLs redirect home with HTTP 301 on Netlify; an App fallback also normalises old paths on SPA preview hosts. Static homepage assets continue to be served normally. Obsolete root-level public icons/logos are removed.

Contact is now a simple email link to the intended recipient established in the previous contact implementation. It retains the green heading, pale panel and responsive layout. No form fields, submission state, Heroku endpoint or contact-service dependency remain in the deployed application.

Validation: focused homepage/route tests (16) and production build pass. Build text/source maps were checked against removed source paths and 265 legacy-content markers without exposing values. Browser checks cover old URL redirects using a local Netlify-rule emulation, the approved appearance above contact, email rendering and sticky header at 320px, 393px and 1440px. Real hosted redirects and actual device/email-client behaviour remain release acceptance checks. Previous deploys/caches and Git history are not erased by this source change.

## Build setup

Node 26.13.0 and npm 11.20.0 are pinned. package-lock.json remains authoritative and unchanged by this cleanup. The existing temporary OpenSSL compatibility argument is scoped to start/build scripts. See README.md and netlify.toml for exact Netlify settings. Original pre-maintenance lockfile edits remain in ignored .local-backups/lockfiles-before-node-lts/.

No dependency upgrade, merge or deployment is included. No AGENTS.md was found in the checkout or ancestor directories.
