<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Single Next.js 16 app (SESAJANS marketing site) at repo root. Package manager is npm; `npm install` is handled by the startup update script. No database or external services are needed to run/browse it.
- `package.json` pins `engines.node` to `20.x`, but the VM's default Node is v22 and the app installs/lints/builds/runs fine on it (only a harmless `EBADENGINE` npm warning). No node-version switching required.
- Standard commands (see `package.json`): `npm run dev` (Turbopack, port 3000), `npm run build`, `npm start`, `npm run lint`.
- `npm run lint` reports a pre-existing error in `src/components/Header.tsx` (`react-hooks/set-state-in-effect`) plus a few unused-var warnings. This does NOT block `npm run build`. Don't treat existing lint output as an environment problem.
- Contact form (`/iletisim` → `POST /api/contact`): with no `RESEND_API_KEY` set (dev default), it logs the payload to the server console, returns success, and redirects to `/tesekkur`. Set `RESEND_API_KEY`/`RESEND_FROM` only to exercise real email delivery via Resend.
- `middleware.ts` is present and logs a deprecation warning (Next.js prefers `proxy`); harmless.
- No test framework is configured — "testing" means lint + build + manual/browser verification.
