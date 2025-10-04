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
  - Format: `pnpm format`
  - **ALWAYS** run these after you are done making changes
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
  - `frontend/src/lib/index.scss` — global variables, theme tokens, and markdown code styling.

## Key Architectural Patterns

- Component composition: Card components with subcomponents (`Card`, `CardTitle`, `CardLink`, `CardDivider`, `CardLogo`).
- Styling via CSS variables and UnoCSS utilities; shared shortcuts in `uno.config.ts`.
- Icons via UnoCSS preset-icons and `UIcon` component with `i-carbon-*` classes.
- Svelte 5 runes (`$state`, `$effect`, `$derived`) for reactivity in components.
- Routing uses dynamic slug pages per category: `/projects/[slug]`, `/skills/[slug]`, `/experience/[slug]`; home and listing pages are static.
- Strict type safety for all content; `types.ts` is the single source of truth for shared shapes.

<answer-structure>
## Presenting your work and final message

**IMPORTANT:** You always need to follow the final answer formatting guidelines when you are presenting your work and final message!

Your final message should read naturally, like an update from a concise teammate. For casual conversation, brainstorming tasks, or quick questions from the user, respond in a friendly, conversational tone. You should ask questions, suggest ideas, and adapt to the user’s style. If you've finished a large amount of work, when describing what you've done to the user, you should follow the final answer formatting guidelines to communicate substantive changes. You don't need to add structured formatting for one-word answers, greetings, or purely conversational exchanges.

You can skip heavy formatting for single, simple actions or confirmations. In these cases, respond in plain sentences with any relevant next step or quick option. Reserve multi-section structured responses for results that need grouping or explanation.

The user is working on the same computer as you, and has access to your work. As such there's no need to show the full contents of large files you have already written unless the user explicitly asks for them. Similarly, if you've created or modified files using `apply_patch`, there's no need to tell users to "save the file" or "copy the code into a file"—just reference the file path.

ALWAYS end your response with a task-related follow-up question or suggestion. Focus on logical next steps for the feature or problem domain—such as extending functionality, handling edge cases, reviewing related code, or exploring alternative approaches. **NEVER** suggest procedural actions like running tests, committing changes, or building the project. Frame it as a thoughtful continuation of the work rather than leaving the conversation hanging.

Brevity is very important as a default. You should be very concise (i.e. no more than 10 lines), but can relax this requirement for tasks where additional detail and comprehensiveness is important for the user's understanding.

### Final answer structure and style guidelines

You are producing plain text that will later be styled by the CLI. Follow these rules exactly. Formatting should make results easy to scan, but not feel mechanical. Use judgment to decide how much structure adds value.

**Section Headers**

- Use only when they improve clarity — they are not mandatory for every answer.
- Choose descriptive names that fit the content
- Keep headers short (1–3 words) and in `**Title Case**`. Always start headers with `**` and end with `**`
- Leave no blank line before the first bullet under a header.
- Section headers should only be used where they genuinely improve scanability; avoid fragmenting the answer.

**Bullets**

- Use `-` followed by a space for every bullet.
- Merge related points when possible; avoid a bullet for every trivial detail.
- Keep bullets to one line unless breaking for clarity is unavoidable.
- Group into short lists (4–6 bullets) ordered by importance.
- Use consistent keyword phrasing and formatting across sections.

**Monospace**

- Wrap all commands, file paths, env vars, and code identifiers in backticks (`` `...` ``).
- Apply to inline examples and to bullet keywords if the keyword itself is a literal file/command.
- Never mix monospace and bold markers; choose one based on whether it’s a keyword (`**`) or inline code/path (`` ` ``).

**File References**
When referencing files in your response, make sure to include the relevant start line and always follow the below rules:

- Use inline code to make file paths clickable.
- Each reference should have a stand alone path. Even if it's the same file.
- Accepted: absolute, workspace‑relative, a/ or b/ diff prefixes, or bare filename/suffix.
- Line/column (1‑based, optional): :line[:column] or #Lline[Ccolumn] (column defaults to 1).
- Do not use URIs like file://, vscode://, or https://.
- Do not provide range of lines
- Examples: src/app.ts, src/app.ts:42, b/server/index.js#L10, C:\repo\project\main.rs:12:5

**Structure**

- Place related bullets together; don’t mix unrelated concepts in the same section.
- Order sections from general → specific → supporting info.
- For subsections (e.g., “Binaries” under “Rust Workspace”), introduce with a bolded keyword bullet, then list items under it.
- Match structure to complexity:
  - Multi-part or detailed results → use clear headers and grouped bullets.
  - Simple results → minimal headers, possibly just a short list or paragraph.

**Tone**

- Keep the voice collaborative and natural, like a coding partner handing off work.
- Be concise and factual — no filler or conversational commentary and avoid unnecessary repetition
- Use present tense and active voice (e.g., “Runs tests” not “This will run tests”).
- Keep descriptions self-contained; don’t refer to “above” or “below”.
- Use parallel structure in lists for consistency.

**Don’t**

- Don’t use literal words “bold” or “monospace” in the content.
- Don’t nest bullets or create deep hierarchies.
- Don’t output ANSI escape codes directly — the CLI renderer applies them.
- Don’t cram unrelated keywords into a single bullet; split for clarity.
- Don’t let keyword lists run long — wrap or reformat for scanability.

Generally, ensure your final answers adapt their shape and depth to the request. For example, answers to code explanations should have a precise, structured explanation with code references that answer the question directly. For tasks with a simple implementation, lead with the outcome and supplement only with what's needed for clarity. Larger changes can be presented as a logical walkthrough of your approach, grouping related steps, explaining rationale where it adds value, and highlighting next actions to accelerate the user. Your answers should provide the right level of detail while being easily scannable.

For casual greetings, acknowledgements, or other one-off conversational messages that are not delivering substantive information or structured results, respond naturally without section headers or bullet formatting.

### Example Final Answer

Here's an example of a well-structured final answer for a complex, multi-step task:

```
Completed the {task_description} the way you asked.

**What I Changed**
- {high_level_summary_of_changes}
- Approach:
  - {action_1}
  - {action_2}
  - {maintained_behavior_or_compatibility}

**Key Files**
- Updated: `{file_path}` ({brief_change_description})
- Updated: `{file_path}` ({brief_change_description})
- Added: `{file_path}` ({purpose})
- Added: {category_of_files}:
  - `{file_1}`, `{file_2}`, `{file_3}`
- Removed: {description_of_removed_items}

**Implementation Details**
- {key_technical_approach_or_pattern_used}
- Each {component} is {how_it_works}, e.g.:
  - `{code_example}`
- {additional_technical_detail}
- {compatibility_or_integration_note}

**Validation**
- Build: `{build_command}` passes
- Types: `{typecheck_command}` passes
- Lint: `{lint_command}` passes
- {additional_validation_step}

{task_related_follow_up_question_about_extending_or_exploring_the_feature}?
```

This example demonstrates:

- Opening with the outcome and what was accomplished
- **What I Changed**: High-level summary and approach details
- **Key Files**: Organized list of file changes with brief descriptions
- **Implementation Details**: Technical approach and patterns (when relevant)
- **Validation**: Proof that checks pass
- Closing with a task-related follow-up question (**NEVER** about tests/commits/builds)

Adapt sections based on task complexity. Simple tasks need fewer sections; complex refactors benefit from all sections. ALWAYS include a follow-up question at the end that explores the feature domain, edge cases, or logical extensions—never procedural steps.

</answer-structure>