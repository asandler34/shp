# Seacoast Home Partners website

Next.js 16 App Router, TypeScript, Tailwind 4. Current offer and pricing authority: `../docs/Current-Decisions.md`.

## Local work

Run `npm ci`, copy `.env.example` to `.env.local`, then `npm run dev`.

`npm run build` produces the production application; `npm start` serves it. This application uses server actions and must run on a Next.js capable host. It cannot be published as a static HTML export. Keep package-lock.json; do not replace the framework or approved visual system just to deploy.

Routes: `/`, `/property-stewardship`, `/home-independence`, `/privacy`, `/robots.txt`, `/sitemap.xml`.

## Inquiries

For the chosen Vercel/Gmail setup, follow `../docs/VERCEL-LAUNCH.md`: configure `RESEND_API_KEY` and a verified `INQUIRY_FROM_EMAIL`. The recipient is seacoasthomepartners@gmail.com. No mail was actually sent during preparation. The form also offers direct email.

Alternatively, set the server-only `INQUIRY_WEBHOOK_URL` to an HTTPS endpoint. Optionally set `INQUIRY_WEBHOOK_TOKEN` to the bearer token expected by that endpoint. Never prefix these with NEXT_PUBLIC or commit production credentials.

For webhook mode, the receiver must durably record the inquiry before returning a 2xx response and notify the person handling callbacks. In email mode, success requires an acknowledged Resend email identifier; actual inbox delivery must be verified before launch. Configure rate limiting/spam controls at the host or receiver. The form has a honeypot, bounded inputs, and server-side validation; it does not replace infrastructure rate limiting.

Payload: `id`, `receivedAt`, `name`, normalized `phone`, optional `email`, `town`, optional `interest`, optional `note`, `contactConsent`, and `privacyVersion`. Optional fields are null. Use `id` as a deduplication key at the receiver. No real submissions are stored in source files, console logs, or this handoff.

Missing configuration, a timeout, redirect, or a non-2xx response returns an error and preserves the visitor's form data. Only an acknowledged submission displays success. The callback path must be tested end to end before launch.

## Release

Leave `SHP_PUBLIC_LAUNCH=false` until the checks in `../docs/LAUNCH-READINESS.md` are complete. This sets robots directives to noindex/disallow. It is an indexing control, not an access control: keep staging private through your hosting provider.

Set `SHP_PUBLIC_LAUNCH=true` and rebuild for production indexing. Canonical URLs use https://seacoasthomepartners.com. Configure the domain and HTTPS on the chosen host.

## Verification

`npm run build`

`npm run lint`

`node scripts/test-inquiry.cjs`

Stock image sources and limitations are in `../docs/IMAGE-CREDITS.md`. Images are illustrative architecture, not client properties or a founder portrait. The original palette, Inter and Source Serif 4 fonts, section order, grid structure, and pricing remain in place.
