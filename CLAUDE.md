# edwardportfolio

Personal portfolio/resume site.

## Tech stack (installed versions)

- **Vite** 8.3 — build tool / dev server
- **React** 19.2 + **react-dom** 19.2
- **TypeScript** 6.0 (`react-ts` template)
- **Tailwind CSS** 4.3, wired in via the `@tailwindcss/vite` plugin (`vite.config.ts`), imported in `src/index.css` with `@import 'tailwindcss'`
- **Framer Motion** 13.2 — section reveal animations and the project-card expand/collapse
- Package manager: **npm**
- Lint: `oxlint` (`npm run lint`)

## Architecture

Single-page, scroll-based site — no router, no separate pages. `App.tsx` renders one fixed `Nav` plus all sections stacked in a `<main>`.

- **Anchor nav**: `src/components/Nav.tsx` links to each section's `id` and smooth-scrolls via `scrollIntoView`. The active link is highlighted using `src/hooks/useActiveSection.ts`, an `IntersectionObserver`-based scroll-spy (no external scroll-spy library).
- **Section wrapper**: `src/components/Section.tsx` gives every section a consistent `id`, spacing, and `scroll-mt` offset for the fixed nav.
- **Project cards expand in place**: `src/components/Projects.tsx` holds `activeId` (accordion state — only one card open at a time). `src/components/ProjectCard.tsx` renders each card and animates its own expand/collapse with Framer Motion (`layout` + `AnimatePresence`) when it becomes the active card. There is no modal and no route change — the card grows inline to reveal detail.

## Sections (in page order) and placeholder content

| Section | Component | Placeholder content lives in |
|---|---|---|
| Hero | `src/components/Hero.tsx` | inline in the component |
| About | `src/components/About.tsx` | inline in the component |
| Timeline | `src/components/Timeline.tsx` | `src/data/timeline.ts` |
| Projects | `src/components/Projects.tsx` + `ProjectCard.tsx` | `src/data/projects.ts` |
| Skills | `src/components/Skills.tsx` | `src/data/skills.ts` |
| Contact | `src/components/Contact.tsx` | inline in the component |

Shared content types are in `src/types/content.ts` (`TimelineEntry`, `Project`, `SkillGroup`).

## Content status

All copy is currently **placeholder text** (lorem-ipsum-style bios, "Placeholder Project One/Two/Three", generic timeline entries, etc.) — nothing here is real yet. Real content will be filled in **section by section**: for sections backed by a `src/data/*.ts` file, replace the placeholder array entries there; for Hero/About/Contact, edit the copy directly in the component.
