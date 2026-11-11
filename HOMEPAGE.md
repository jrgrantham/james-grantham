# Homepage refresh — chatgpt branch

Recreates the approved 11 November 2026 concept as responsive React/CSS at `/`. Existing non-home routes and the older application remain unchanged. This branch starts from stable master, not the unrelated dev branch.

Ivory background, forest-green headings, ochre details; introduction, project shortcuts, engineering background, tool banner, offshore recollections and contact. Icons and workbench image are extracted from the approved concept; replace these small source crops with original full-resolution assets when available. Homepage favicon/Apple/manifest icons use a coordinating JG monogram.

Kitchen links to its confirmed live URL. Other project destinations are intentionally unconnected and say so when selected; no speculative links or authentication changes. Contact uses the existing sendmail endpoint, overridable with REACT_APP_CONTACT_ENDPOINT; successful live delivery has not been verified. Never claim delivery on a failed HTTP response; preserve the draft on failure.

Verification: production build passes with NODE_OPTIONS=--openssl-legacy-provider (required by the existing older Create React App toolchain). Two focused tests pass: project-link behaviour and contact delivery failure/draft preservation. Desktop browser rendering and project disclosure checked. Actual iPhone layout, Home Screen icon and live contact delivery remain acceptance checks. Legacy full test suite was not run; existing App.test.js still contains the original unrelated learn-react assertion.

No dependency upgrade, live deployment, master merge, DNS or hosting configuration change included.

## Focused visual refinement — 11 November 2026

Header now shows the JG mark alone, with the full name retained in the hero. Specialisms are slightly larger and wrap only between complete phrases. The experience heading uses two deliberate lines. Contact heading and panel spacing are reduced. On mobile the existing workbench photograph appears between the introduction and shortcuts at 150px tall; desktop image layout is preserved. Icon images use containment rather than stretching, and the tool image cannot shrink in its flex row.

Validation: existing homepage tests pass (2/2); production build passes using the existing OpenSSL compatibility setting, with pre-existing warnings elsewhere in the application. Chrome screenshots and layout measurements checked at 320px, 393px and 1440px: no horizontal overflow, complete specialism phrases, two intact experience lines, and the notebook and calipers visible in the shallow mobile crop. No AGENTS.md was found in the checkout or its ancestor directories.

Outstanding: the original four-icon sheet and matching engineering clipboard were not available in the checkout or conversation. The existing five image files remain pending replacement with properly framed extractions from those originals. Before release, complete those replacements and recheck their desktop/mobile framing, then verify actual iPhone layout, Home Screen icon and live contact delivery. The legacy App.test.js learn-react assertion remains unrelated to this homepage and was not run. Local package-lock.json and yarn.lock edits are preserved and excluded from this visual commit. No dependencies, contact service, hosting, merge or deployment changed.
