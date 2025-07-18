# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website with:

- **Frontend**: SvelteKit (static site generation) with TypeScript, UnoCSS, and Svelte 5

## RULES

- **ALWAYS** run `pnpm check && pnpm lint` after making changes to the codebase.

## Technology Stack

- **Framework**: SvelteKit with Svelte 5 (runes enabled)
- **Language**: TypeScript (strict mode)
- **Styling**: UnoCSS with custom shortcuts, SCSS for global styles
- **Icons**: UnoCSS Icons (@iconify-json/carbon)
- **Markdown**: marked with Prism.js for syntax highlighting
- **Deployment**: Cloudflare Workers (via wrangler)
- **Package Manager**: pnpm

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

## Path Aliases

The project uses these path aliases for cleaner imports:

- `$lib` → `./src/lib`
- `@data` → `./src/lib/data`
- `@components` → `./src/lib/components`
- `@md` → `./src/lib/md`
- `@stores` → `./src/lib/stores`
- `@utils` → `./src/lib/utils`

## Key Files

### Data Files (`/frontend/src/lib/data/`)

- `projects.ts` - Portfolio projects data
- `experience.ts` - Work experience entries
- `skills.ts` - Technical skills categorized
- `education.ts` - Educational background
- `home.ts` - Homepage content
- `navbar.ts` - Navigation structure

### Configuration

- `uno.config.ts` - UnoCSS configuration with custom shortcuts
- `svelte.config.js` - SvelteKit configuration with Cloudflare adapter
- `wrangler.json` - Cloudflare Workers deployment config

## Component Guidelines

1. **Component Structure**: Components follow a composition pattern with sub-components (e.g., Card → CardTitle, CardLink, CardDivider)
2. **Styling**: Use UnoCSS utility classes and CSS variables for theming
3. **Icons**: Use UIcon component with UnoCSS icon classes (format: `i-carbon-{icon-name}`)
4. **Type Safety**: All components should have proper TypeScript types

## Common Tasks

### Adding a New Project

1. Add project data to `/frontend/src/lib/data/projects.ts`
2. Add screenshots to `/frontend/static/assets/projects/[project-slug]/`
3. Project will automatically appear on the projects page

### Adding a New Skill

1. Add skill data to `/frontend/src/lib/data/skills.ts`
2. Add logo to `/frontend/static/logos/`
3. Skill will automatically appear on the skills page

### Updating Resume

- Replace `/frontend/static/resume.pdf` with the new version
