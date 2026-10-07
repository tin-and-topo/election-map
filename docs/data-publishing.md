# Election Data Publishing

## Current scope

The public site publishes a reviewed snapshot of Hamilton County, Tennessee’s November 3, 2026 election information. `assets/js/election-data.js` identifies its retrieval date and links every voter to the responsible Election Commission for their individualized ballot and Election Day polling place.

It deliberately does not accept addresses or query voter-registration systems. A public GitHub Pages site cannot make those inputs confidential.

## Publishing workflow

1. Use the local election authority as the source for polling locations, ballot content, and election dates.
2. Record the source URL, retrieval date, jurisdiction, election ID/date, and reviewer for every update.
3. Independently check election date, early-voting dates, registration deadline, polling locations, candidate names, and ballot questions before publishing.
4. Update the static data and its retrieval date, then have a second reviewer approve the change before deployment.
5. Preserve a change log outside of voter data; never place voter files or address lookups in this repository.

## Scaling model

Scale from county to Tennessee by maintaining one normalized public snapshot per jurisdiction and election. Each record should identify the jurisdiction, election date, source URL, retrieval date, site type, address, hours, and applicable districts. Election-specific ballot data must include the district or precinct applicability rule and an official verification link.

For nationwide coverage, source records must still come from each responsible state or local election authority. A national directory can route voters to the correct authority, but it should not be treated as a substitute for local official ballot and polling-place data. Automated collection should only be introduced after a per-source review for licensing, update frequency, terms, data quality, and privacy impact.
