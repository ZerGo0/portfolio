# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- Name: Portfolio
- Description: Static personal portfolio site built with SvelteKit 2 and Svelte 5 (runes), styled with UnoCSS and SCSS, deployed to Cloudflare Workers.
- Key notes/warnings:
  - Static Site Generation only: `src/routes/+layout.ts` sets `prerender = true`; do not add runtime data fetching or server endpoints.
  - Content source of truth lives in TypeScript under `frontend/src/lib/data/*` and shared types in `frontend/src/lib/types.ts`.
  - Markdown is sanitized in `Markdown.svelte` using DOMPurify and highlighted with Prism; only pass sanitized HTML via `{@html}`.
  - Cloudflare Worker entry is `.svelte-kit/cloudflare/_worker.js` with assets bound as `ASSETS` (see `frontend/wrangler.json`).

## Global Rules

- **NEVER** use emojis!
- **NEVER** try to run the dev server!
- **NEVER** try to build in the project directory, always build in the `/tmp` directory!
- **ALWAYS** search for existing code patterns in the codebase and follow them consistently
- **NEVER** use comments in code — code should be self-explanatory

## High-Level Architecture

- Frontend: SvelteKit 2 + Svelte 5 (runes enabled), TypeScript strict.
- Styling: UnoCSS (with shortcuts and preset-icons) and SCSS for global styles.
- Content/Data: Hardcoded TS modules under `frontend/src/lib/data/*`; no API calls.
- Hosting: Cloudflare Workers via `@sveltejs/adapter-cloudflare` and `wrangler`.
- Schemas/Types source of truth: `frontend/src/lib/types.ts`.

## Project Guidelines

### frontend — Portfolio SSG
- Language: TypeScript
- Framework/Runtime: SvelteKit 2 (Svelte 5 runes)
- Package Manager: pnpm
- Important Packages: `@sveltejs/adapter-cloudflare`, `@sveltejs/kit`, `svelte`, `unocss`, `@unocss/preset-icons`, `@unocss/extractor-svelte`, `sass`, `marked`, `dompurify`, `prismjs`, `dayjs`, `slugify`, `wrangler`
- Checks:
  - Syntax Check: `pnpm check`
  - Lint: `pnpm lint`
  - Claude must run both after any change
- Rules / Conventions:
  - ALWAYS keep the site prerendered; do not remove `export const prerender = true` or add runtime fetching.
  - ALWAYS use path aliases from `svelte.config.js` (`$lib`, `@data`, `@components`, `@md`, `@stores`, `@utils`).
  - ALWAYS add/edit content in `frontend/src/lib/data/*`; keep data typed against `frontend/src/lib/types.ts`.
  - ALWAYS use UnoCSS utilities and CSS variables for styling; prefer existing shortcuts in `uno.config.ts`.
  - ALWAYS render icons via `UIcon` with UnoCSS classes (e.g., `i-carbon-...`).
  - ALWAYS sanitize and render markdown via `Markdown.svelte` (DOMPurify + marked + Prism).
  - NEVER introduce backend endpoints or client-side network calls.
  - NEVER run `pnpm dev` or `wrangler dev`; build in `/tmp` only.
  - Build workflow (when needed): copy `frontend` to `/tmp`, then inside that copy run `pnpm install && pnpm run build`.
- Useful files:
  - `frontend/svelte.config.js` — Cloudflare adapter, aliases, runes enabled.
  - `frontend/uno.config.ts` — UnoCSS presets and shortcuts.
  - `frontend/vite.config.ts` — UnoCSS + SvelteKit plugins, SCSS options.
  - `frontend/wrangler.json` — Worker entry, assets binding, routes.
  - `frontend/src/lib/types.ts` — shared types for data files.
  - Data modules: `frontend/src/lib/data/{projects,experience,skills,education,assets,navbar,app}.ts`.
  - `frontend/src/lib/components/*` — reusable component library (Cards, Icons, Markdown, etc.).
  - `frontend/src/lib/stores/theme.ts` — minimal global state for theme, persisted to `localStorage`.

## Key Architectural Patterns

- Component composition: Card components with subcomponents (`Card`, `CardTitle`, `CardLink`, `CardDivider`, `CardLogo`).
- Styling via CSS variables and UnoCSS utilities; shared shortcuts in `uno.config.ts`.
- Icons via UnoCSS preset-icons and `UIcon` component with `i-carbon-*` classes.
- Svelte 5 runes (`$state`, `$effect`, `$derived`) for reactivity in components.
- Routing uses dynamic slug pages per category: `/projects/[slug]`, `/skills/[slug]`, `/experience/[slug]`; home and listing pages are static.
- Strict type safety for all content; `types.ts` is the single source of truth for shared shapes.
