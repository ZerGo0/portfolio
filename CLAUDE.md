# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
- Name
  - Portfolio (SvelteKit) — package `frontend/package.json` name: `portfolio`.
- Description
  - Static portfolio website generated with SvelteKit 2 (Svelte 5 runes), styled via UnoCSS + SCSS, deployed to Cloudflare Workers with Wrangler. Content is stored in TypeScript files and fully pre-rendered.
- Key notes or warnings (e.g. API quirks, data formats, environment caveats)
  - Static Site Generation is enabled globally (`frontend/src/routes/+layout.ts` sets `prerender = true`).
  - No runtime API calls; all content lives under `frontend/src/lib/data/*` with types in `frontend/src/lib/types.ts`.
  - Path aliases are configured in `frontend/svelte.config.js` (`$lib`, `@data`, `@components`, `@md`, `@stores`, `@utils`).
  - Use `pnpm`; after any change, run `pnpm check && pnpm lint` in `frontend/`.
  - Cloudflare Worker output is under `.svelte-kit/cloudflare/_worker.js` (see `frontend/wrangler.json`).

## Global Rules
The following rules MUST always be included verbatim in every CLAUDE.md:
- **NEVER** use emojis!
- **NEVER** try to run the dev server!
- **NEVER** try to build in the project directory, always build in the `/tmp` directory!
- **ALWAYS** search for existing code patterns in the codebase and follow them consistently
- **NEVER** use comments in code — code should be self-explanatory

## High-Level Architecture
- Databases, services, frameworks, or core technologies
  - SvelteKit 2 + Svelte 5 (runes), Vite 5, TypeScript (strict), UnoCSS, SCSS, Prism.js, marked, Cloudflare Workers (via `@sveltejs/adapter-cloudflare` + `wrangler`).
- How different systems interact (backend, frontend, workers, etc.)
  - Single frontend app. Build step generates a Cloudflare Worker bundle; static assets served by Cloudflare. No backend or database.
- Where the source of truth lives for schemas or shared types
  - `frontend/src/lib/types.ts` defines item/skill/project/experience/education types used across data files and components.

## Project Guidelines
For each major project in the monorepo:

- frontend
  - Language(s) used
    - TypeScript, Svelte 5 with runes.
  - Framework(s) / runtime
    - SvelteKit 2 on Vite 5; Cloudflare Workers adapter; UnoCSS with presets and shortcuts; SCSS for global styles.
  - Package manager
    - `pnpm` (see `frontend/pnpm-lock.yaml`).
  - Important Packages (list key dependencies, not exhaustive)
    - `@sveltejs/kit`, `svelte`, `vite`, `@sveltejs/adapter-cloudflare`, `unocss` (+ presets), `@iconify-json/carbon`, `marked`, `prismjs`, `dompurify`, `sass`, `eslint`, `prettier`, `svelte-check`, `wrangler`.
  - Checks (Claude must run these every time after making changes)
    - `pnpm check && pnpm lint` (from `frontend/`).
  - Rules / conventions (prefer ALWAYS/NEVER phrasing for clarity)
    - ALWAYS keep TypeScript strict and follow the shapes in `src/lib/types.ts`.
    - ALWAYS use configured path aliases (`$lib`, `@data`, `@components`, `@md`, `@stores`, `@utils`).
    - ALWAYS use UnoCSS utilities and CSS variables; prefer component composition (Card + subcomponents).
    - ALWAYS sanitize and highlight Markdown via the existing `Markdown.svelte` pattern (marked + DOMPurify + Prism).
    - NEVER add runtime API calls; content is static and pre-rendered.
    - NEVER inline imports.
    - NEVER try to run `git commit` unless explicitly told to.
    - NEVER leave bread crumbs when you delete old code.
    - ALWAYS do what the rules say in AGENTS.md; don't ask for permissions—just follow them.
  - Useful files (only those that need calling out)
    - `frontend/svelte.config.js` — adapter, aliases, compiler options (runes: true).
    - `frontend/vite.config.ts` — Vite plugins (UnoCSS, SvelteKit) and SCSS preprocessing.
    - `frontend/uno.config.ts` — UnoCSS extractors, presets, shortcuts.
    - `frontend/tsconfig.json` — strict TS with `verbatimModuleSyntax`.
    - `frontend/wrangler.json` — Cloudflare deployment config and routes.
    - `frontend/src/lib/types.ts` — source of truth for data types.
    - `frontend/src/lib/data/*` — portfolio content; keep shapes consistent with types.
    - `frontend/src/routes/+layout.ts` — sets global `prerender = true`.

## Key Architectural Patterns
- Static site generation
  - `prerender = true` globally; routes derive content from typed TS data modules.
- Component composition
  - Card components split into subcomponents (`Card`, `CardTitle`, `CardLink`, `CardDivider`, `CardLogo`) and use slots.
- Styling and theming
  - UnoCSS utilities with custom shortcuts; CSS variables for dynamic theming; theme store toggles `data-theme` on `:root`.
- Markdown rendering
  - `Markdown.svelte` uses marked + DOMPurify + Prism; follow this pattern for any rich text.
- Icons
  - UnoCSS Icons with `i-carbon-*` classes via `UIcon.svelte`.

State Check: Single project (`frontend`), no backend/database, SSG enabled, Cloudflare Workers deployment, `pnpm` package manager, checks are `pnpm check && pnpm lint`, types live in `frontend/src/lib/types.ts`, data in `frontend/src/lib/data/*`, path aliases configured in `frontend/svelte.config.js`, and Global Rules above apply in full.
