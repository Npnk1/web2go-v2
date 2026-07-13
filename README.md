# Web2Go

Premium multilingual Next.js website for Web2Go, focused on AI website optimization, modern search visibility, technical SEO, performance, trust, and conversion.

## Routes

- English: `/en`
- Dutch: `/nl`
- Spanish: `/es`
- Root `/` redirects to `/en`

Localized legal pages are available at `/:locale/privacy` and `/:locale/terms`.

## Run locally

```bash
pnpm.cmd install
pnpm.cmd dev
```

Open `http://localhost:3000/en`.

## Validate

```bash
pnpm.cmd run typecheck
pnpm.cmd run build
```

## Contact form

The contact form posts to `/api/contact` and validates requests on the client and server.

For production email delivery, copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
CONTACT_FROM_EMAIL=...
```

If the Resend/contact environment variables are missing, the API returns a development-safe success response after validation and does not pretend to send email.

## Notes

- All visible page copy lives in `i18n/*.ts` dictionaries.
- The language switcher preserves the current page and hash where possible, for example `/en#services` to `/nl#services`.
- Canonicals, hreflang alternates, sitemap entries, and JSON-LD are localized.
- If PowerShell blocks `pnpm`, use `pnpm.cmd` as shown above.
