# Repository instructions

- This is the public Operon Group Next.js website. Keep private strategy,
  credentials, customer data, and research records outside the repository.
- Inspect Git status before editing. Preserve existing work and use a feature
  branch; do not work directly on `main`.
- Use Node.js 24 (`.nvmrc`: 24.11.1) and pnpm 11.19.0. Keep runtime changes local
  to this project. See README for an npx fallback if global pnpm is older.
- Install with `pnpm install --frozen-lockfile`. Preserve `pnpm-lock.yaml` unless
  a dependency update is explicitly in scope. Build approvals must be booleans;
  only `sharp` is currently approved.
- Run `pnpm check` after technical changes. It generates Next.js route types,
  checks TypeScript, and builds production output. Run it before starting dev.
- Start dev on an available port, bind to `127.0.0.1`, and leave other projects'
  servers running. Verify `/` and `/privacy` in a browser when available.
- Keep setup changes separate from design or content changes. Do not introduce
  a database without a specific request.
- Review and stage specific files. Do not commit generated output, local logs,
  secrets, or unrelated edits. Never merge or deploy production without explicit
  authorization.
