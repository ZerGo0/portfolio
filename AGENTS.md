# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- Name: Portfolio
- Description: Static personal portfolio built with SvelteKit 2 and Svelte 5 runes, styled via UnoCSS and SCSS, deployed to Cloudflare Workers.
- Key notes/warnings:
  - Entire site is statically generated; `frontend/src/routes/+layout.ts` exports `prerender = true`, so never add runtime data fetching or server endpoints.
  - All content lives in TypeScript modules under `frontend/src/lib/data/*` and must comply with the shapes in `frontend/src/lib/types.ts`.
  - Markdown rendering in `frontend/src/lib/components/Markdown.svelte` uses DOMPurify, marked, and Prism; only supply sanitized HTML or markdown strings to that component.
  - Cloudflare Worker deployment relies on `.svelte-kit/cloudflare/_worker.js` and the bindings defined in `frontend/wrangler.json`; keep asset references in sync.
  - `CLAUDE.md` is a symlink to `AGENTS.md`; always edit `AGENTS.md` so both instruction files stay identical.

## Global Rules

- **NEVER** use emojis!
- **NEVER** try to run the dev server!
- **NEVER** try to build in the project directory, always build in the `/tmp` directory!
- **ALWAYS** search for existing code patterns in the codebase and follow them consistently
- **NEVER** use comments in code - code should be self-explanatory
- **NEVER** cut corners, don't leave comments like `TODO: Implement X in the future here`! Always fully implement everything!
- **ALWAYS** when you're done, self-critique your work until you're sure it's correct
- **NEVER** run automated test suites unless a human explicitly requests it; do not search for tests by default.
- **ALWAYS** keep `CLAUDE.md` and `AGENTS.md` synchronized by updating `AGENTS.md` (the symlink target) directly.

## High-Level Architecture

- **Frontend:** Single `frontend` app using SvelteKit 2 with Svelte 5 runes and strict TypeScript.
- **Styling:** UnoCSS presets (icons, webfonts, shortcuts) plus SCSS tokens in `frontend/src/lib/index.scss`.
- **Content Source:** Typed data modules in `frontend/src/lib/data/*`, sharing interfaces from `frontend/src/lib/types.ts`.
- **Routing:** Prerendered static pages and `[slug]` routes that select entries with local data (`frontend/src/routes/**`); no network access at runtime.
- **Deployment:** Cloudflare Workers via `@sveltejs/adapter-cloudflare`; configuration in `frontend/wrangler.json` and output worker at `.svelte-kit/cloudflare/_worker.js`.
- **Markdown Pipeline:** `frontend/src/lib/components/Markdown.svelte` sanitizes and highlights markdown using DOMPurify, marked (GFM + mangle), and Prism.
- **Theme State:** `frontend/src/lib/stores/theme.ts` persists dark/light selection in `localStorage` on hydration.

## Project Guidelines

### frontend — Portfolio SSG
- Language: TypeScript
- Framework/Runtime: SvelteKit 2 (Svelte 5 runes)
- Package Manager: pnpm
- Important Packages: `@sveltejs/kit`, `@sveltejs/adapter-cloudflare`, `svelte`, `unocss`, `@unocss/preset-icons`, `sass`, `marked`, `dompurify`, `prismjs`, `dayjs`, `wrangler`
- Checks:
  - Syntax Check: `pnpm check`
  - Lint: `pnpm lint`
  - Format: `pnpm format`
  - **ALWAYS** run these after you are done making changes
- Rules / Conventions:
  - **ALWAYS** keep `export const prerender = true` in `src/routes/+layout.ts` and confirm new routes remain SSG-safe.
  - **ALWAYS** edit or add copy in `src/lib/data/*` and validate against `src/lib/types.ts` before importing it.
  - **ALWAYS** import through the aliases defined in `svelte.config.js` (`$lib`, `@data`, `@components`, `@md`, `@stores`, `@utils`).
  - **ALWAYS** reuse UnoCSS shortcuts and design tokens; place bespoke SCSS alongside `src/lib/index.scss`.
  - **ALWAYS** render icons with `UIcon` and UnoCSS `i-carbon-*` classes; map assets through `src/lib/data/assets.ts`.
  - **ALWAYS** route markdown through `Markdown.svelte` so DOMPurify and Prism run consistently across pages.
  - **ALWAYS** maintain theme persistence via the `theme` store in `src/lib/stores/theme.ts` rather than direct DOM manipulation.
  - **NEVER** add server endpoints, loaders with runtime fetches, or client-side network calls.
  - **NEVER** run `pnpm dev`, `vite dev`, or `wrangler dev`; only build from a `/tmp` copy.
  - **NEVER** reimplement search or date utilities; rely on helpers like `filterItemsByQuery` and `getHumanReadableDate` in `src/lib/utils/helpers.ts`.
- Useful files:
  - `frontend/svelte.config.js` — Cloudflare adapter setup, path aliases, runes enabled.
  - `frontend/vite.config.ts` — Vite + UnoCSS integration and SCSS preprocessing options.
  - `frontend/uno.config.ts` — UnoCSS presets, shortcuts, and font configuration.
  - `frontend/wrangler.json` — Cloudflare Worker bindings and routes.
  - `frontend/src/lib/types.ts` — Canonical types for projects, skills, experience, education, and assets.
  - `frontend/src/lib/utils/helpers.ts` — Shared search, date, and duration helpers.
  - `frontend/src/lib/components/Markdown.svelte` — Sanitized markdown renderer with Prism highlighting.
  - `frontend/src/lib/stores/theme.ts` — LocalStorage-backed theme toggle logic.
  - `frontend/src/lib/data/*` — Authoritative content modules consumed by pages.
  - `frontend/src/routes/**` — Static and `[slug]` pages; data loaders select entries from local modules.

## Patterns Directory

- `.zergo0/patterns/` is the canonical catalog of repository coding patterns generated by the `patterns` command; review relevant entries before implementing or refactoring features.
- When new patterns emerge, extend `.zergo0/patterns/` only after the implementation is stable, documenting intent, file locations, and reusable techniques to support future automation.

## Key Architectural Patterns

- Data-driven routing: each `[slug]/+page.ts` selects items from the matching `@data/*` list and exposes them to Svelte pages.
- Search experiences rely on Svelte 5 runes (`$state`, `$derived`) combined with utilities like `filterItemsByQuery` to keep filtering logic consistent.
- Card-based layout components (`Card`, `ExperienceCard`, `Banner`, `Chip`, etc.) compose pages while sharing UnoCSS shortcuts for spacing and typography.
- Asset helpers (`getAssetURL`, `isBlackAsset`) centralize image variant handling for light/dark logos.
- Markdown content flows through `Markdown.svelte` to guarantee DOMPurify sanitization and Prism syntax highlighting across the site.

<answer-structure>
## MANDATORY Answer Format

**CRITICAL:** You MUST follow these exact formatting rules for ALL responses. No exceptions.

**ABSOLUTE Requirements:**
- ALWAYS use the exact structure below
- NEVER deviate from the specified format
- ALWAYS end with a task-related follow-up question
- ALWAYS keep responses concise (≤10 lines unless technical details require more)

**EXACT Structure Template:**
```
Completed {task}.

**What I Changed**
- {high_level_summary}
- {key_approach_points}

**Key Files**
- Updated: `{file_path}` ({brief_change})
- Added: `{file_path}` ({purpose})

**Implementation Details**
- {technical_approach}
- {key_code_example}

**Validation**
- Types: `{typecheck_command}` passes
- Lint: `{lint_command}` passes
- {additional_validation_step}

{task_related_follow_up_question}
```

**NON-NEGOTIABLE Formatting Rules:**
- Headers: EXACTLY `**Title Case**` (1-3 words only)
- Bullets: ALWAYS start with `- ` (dash, space)
- Monospace: ALWAYS use backticks for commands, paths, code
- File references: ALWAYS use `path:line` format
- NEVER use conversational tone outside the follow-up question
- NEVER mention saving files or copying code
- NEVER suggest procedural actions (tests, commits, builds)

**MANDATORY Follow-up Questions:**
- MUST relate to extending functionality
- MUST explore edge cases or alternatives
- MUST be task-related (never procedural)

**NO EXCEPTIONS** to these rules regardless of request type, complexity, or perceived user intent.
</answer-structure>