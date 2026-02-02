# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Musashino Art University Class of 200X alumni reunion (武蔵野美術大学同窓会). Built with Astro SSG and deployed to GitHub Pages.

## Technology Stack

- **Framework:** Astro (Static Site Generator)
- **Language:** JavaScript only (no TypeScript)
- **Node.js:** 25.5.0 (Volta管理)
- **npm:** 11.8.0 (Volta管理)
- **Linting:** Biome
- **Deployment:** GitHub Actions → GitHub Pages

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run Biome linter
npm run lint:fix     # Auto-fix lint issues
```

## Directory Structure

```
src/
├── pages/           # Astro pages (.astro)
├── layouts/         # Layout components
└── styles/          # CSS files
public/              # Static assets
```

## Key Constraints

- Japanese language content throughout
- Mobile-first design with 390px base viewport
- Vanilla JavaScript only - no external JS libraries
- All dimensions use `rem` units with fluid typography: `calc(16px * 100vw / 390px)`
- CSS animations use GPU-accelerated properties (transform, opacity)

## Architecture Notes

- Uses Intersection Observer API for scroll-triggered animations
- Google Forms integration for pre-event survey
- Typography: Courier Prime Italic (display), system serif (body)
