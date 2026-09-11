# Operon Group website

The public Operon Group website uses Next.js App Router, React, and TypeScript.
Routes: `/` and `/privacy`. No database or environment variables are required for
local development.

## Local setup

Use **Node.js 24** (`.nvmrc` pins 24.11.1) and **pnpm 11.19.0**. Select Node for
this project with your version manager; leave other projects' runtimes unchanged.
The `packageManager` field pins pnpm. Run the following from the repository root:

```sh
node --version
npx --yes pnpm@11.19.0 --version
npx --yes pnpm@11.19.0 install --frozen-lockfile
npx --yes pnpm@11.19.0 dev --hostname 127.0.0.1
```

These commands use the pinned pnpm without replacing a global installation. If
`pnpm --version` already reports 11.19.0, use plain `pnpm` in place of
`npx --yes pnpm@11.19.0` throughout.

Open the local URL printed by Next.js (normally <http://127.0.0.1:3000>) and check
both `/` and `/privacy`. Next.js can select the next free port when the default
is occupied. To choose a known free port explicitly:

```sh
npx --yes pnpm@11.19.0 dev --hostname 127.0.0.1 --port 3001
```

Leave other projects' servers running. Stop this server with Ctrl+C in its
terminal. Edit `app/page.tsx`, `app/privacy/page.tsx`, or `app/globals.css` and
Next.js reloads automatically.

## Checks and editor

```sh
npx --yes pnpm@11.19.0 typecheck  # Generate route types, then check TypeScript
npx --yes pnpm@11.19.0 check      # Type checking and production build
```

Run checks before starting the dev server so both commands are not writing to
`.next` at once. Preserve `pnpm-lock.yaml`; use frozen installs unless deliberately
updating dependencies. Only `sharp` has build approval in `pnpm-workspace.yaml`.

Open `operongroup-site.code-workspace` in VS Code and use **Terminal > Run Task**:
`install`, `dev`, or `check`. Tasks invoke pnpm 11.19.0 through npx, and `dev`
prompts for a port. GitHub Actions runs frozen installation, type checking, and
production build on pull requests and pushes to `main` or `codex/operon-setup`.

## Contribution boundaries

Work on a feature branch and keep changes focused. Read `AGENTS.md` before editing.
This repository is public: keep credentials, private strategy, and research records
outside it. Local secrets belong in ignored `.env.local` files when needed.
Do not merge or deploy production without explicit authorization.
