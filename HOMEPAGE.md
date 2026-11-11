# Homepage refresh — chatgpt branch

Recreates the approved 11 November 2026 concept as responsive React/CSS at `/`. Existing non-home routes and the older application remain unchanged. This branch starts from stable master, not the unrelated dev branch.

Ivory background, forest-green headings, ochre details; introduction, project shortcuts, engineering background, tool banner, offshore recollections and contact. Icons and workbench image are extracted from the approved concept; replace these small source crops with original full-resolution assets when available. Homepage favicon/Apple/manifest icons use a coordinating JG monogram.

Kitchen links to its confirmed live URL. Other project destinations are intentionally unconnected and say so when selected; no speculative links or authentication changes. Contact uses the existing sendmail endpoint, overridable with REACT_APP_CONTACT_ENDPOINT; successful live delivery has not been verified. Never claim delivery on a failed HTTP response; preserve the draft on failure.

Verification: production build passes with NODE_OPTIONS=--openssl-legacy-provider (required by the existing older Create React App toolchain). Two focused tests pass: project-link behaviour and contact delivery failure/draft preservation. Desktop browser rendering and project disclosure checked. Actual iPhone layout, Home Screen icon and live contact delivery remain acceptance checks. Legacy full test suite was not run; existing App.test.js still contains the original unrelated learn-react assertion.

No dependency upgrade, live deployment, master merge, DNS or hosting configuration change included.
