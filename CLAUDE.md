# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website with:

- **Frontend**: SvelteKit (static site generation) with TypeScript, UnoCSS, and Svelte 5

## RULES

- **ALWAYS** run `pnpm check && pnpm lint` after making changes to the codebase.

### Frontend (SvelteKit)

```bash
cd frontend
pnpm install    # Install dependencies
pnpm check      # Run svelte-check for type errors
pnpm lint       # Run Prettier and ESLint
```

## Architecture & Patterns

### Frontend Structure

- **Static Site Generation**: All content is pre-rendered at build time
- **Data Management**: Portfolio content stored in TypeScript files (`/frontend/src/lib/data/`)
- **Component Library**: Reusable components in `/frontend/src/lib/components/`
- **Routing**: File-based routing with pattern `/[category]/[slug]/`
- **State**: Minimal global state, only theme preference in Svelte stores

### Key Patterns

1. **Type Safety**: All data structures defined in `/frontend/src/lib/types.ts`
2. **Component Composition**: Card components use slots and composition patterns
3. **CSS Variables**: Dynamic styling through CSS custom properties
4. **No API Communication**: Frontend data is hardcoded, no runtime API calls
