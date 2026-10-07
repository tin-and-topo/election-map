# Security Policy

## Reporting a Vulnerability

Do not open a public issue for a suspected vulnerability or exposed credential.
Report it privately to the project owner listed in the README, including the affected file or component, a reproduction summary, and any potential impact. Remove or rotate exposed credentials through the approved organization process before sharing further details.

## Project Expectations

- Keep credentials, tokens, certificates, and local environment files out of Git.
- Use HTTPS with certificate verification enabled for external services.
- Pin Python dependencies and review updates before merging them.
- Run the configured pre-commit checks before submitting changes.
- Confirm the target portal, account, and item identifiers before any ArcGIS write operation.

## Public GitHub Pages application

This site is a static public information guide. Its security boundary is intentionally narrow:

- It does not include sign-in, forms, analytics, voter-address lookup, local storage, cookies, or third-party JavaScript.
- Do not add API keys, election-management credentials, voter records, home addresses, or other sensitive data to the repository, page source, or client-side JavaScript. Anything delivered to a browser is public.
- The application uses a restrictive Content Security Policy and referrer policy in `index.html`. If it moves off GitHub Pages, also configure equivalent or stricter HTTP response headers at the host.
- Use only HTTPS endpoints. Review the privacy practices and integrity implications before adding any map, analytics, captcha, font, or other third-party service.
- Client-side content is rendered with DOM text APIs rather than injected HTML. Preserve that pattern when adding upstream data.

## Before publishing official election information

- Confirm the source, jurisdiction, effective date, and reviewer for every deadline, polling location, contest, and ballot question.
- Keep a documented publishing and correction process, including an election-authority contact path.
- Use a protected default branch, required reviews, and GitHub secret scanning. Enable Dependabot for any future dependencies.
- Do not introduce address-based district lookup without a privacy review and a server-side threat model; a public static site cannot keep submitted addresses confidential.
