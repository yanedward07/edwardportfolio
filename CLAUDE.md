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

## Sections (in page order) and content status

| Section | Component | Content lives in | Status |
|---|---|---|---|
| Hero | `src/components/Hero.tsx` | inline in the component | ✅ Real (name, tagline, bio, portrait) |
| About | `src/components/About.tsx` | inline in the component | ✅ Real (full bio) |
| Timeline | `src/components/Timeline.tsx` | `src/data/timeline.ts` | ✅ Real (7 entries, May 2025 – Present) |
| Projects | `src/components/Projects.tsx` + `ProjectCard.tsx` | `src/data/projects.ts` | ⏳ Placeholder |
| Beyond the Work | `src/components/BeyondTheWork.tsx` | `src/data/beyondTheWork.ts` | 🟡 Text real; Cue Club photos real, Badminton photos placeholder |
| Skills | `src/components/Skills.tsx` | `src/data/skills.ts` | ⏳ Placeholder |
| Contact | `src/components/Contact.tsx` | inline in the component | ⏳ Placeholder |

Beyond the Work covers two extracurriculars — Varsity Badminton and Co-Founder/Co-President of the Western Cue Club — each with real write-up copy (`ExtracurricularEntry.description`, an array of paragraphs) and its own photo grid. Each `ExtracurricularPhoto` has an optional `image`: when set, the real photo renders (Western Cue Club's 8 photos, in `src/assets/images/cue-club/`); when absent, a dashed placeholder card renders instead (still used for Varsity Badminton). All photos share the same tilted "scattered photo" animation (Framer Motion, alternating rotation, straightens + scales on hover) regardless of whether they're real or placeholder.

Shared content types are in `src/types/content.ts` (`TimelineEntry`, `Project`, `SkillGroup`, `ExtracurricularPhoto`, `ExtracurricularEntry`).

## Assets

Images live in `src/assets/images/` (subfolders per topic are fine, e.g. `cue-club/`) and are imported directly into the file that uses them — either a component (e.g. `import heroPortrait from '../assets/images/hero-portrait.png'` in `Hero.tsx`) or a data file (e.g. `beyondTheWork.ts` imports each Cue Club photo and assigns it to that entry's `image` field) — so Vite bundles and hashes them. Keep new images in that folder with descriptive lowercase-kebab-case filenames (e.g. `hero-portrait.png`, not `IMG_1234.PNG`).

Raw camera files (`.CR3`, `.CR2`, `.NEF`, `.ARW`) are gitignored — they can't render on the web and are too large to track. Convert to JPG first. Before committing any photo sourced from a camera/phone at full resolution, resize it for web (e.g. `npx sharp-cli -i in.jpg -o outDir --autoOrient -q 82 --mozjpeg resize 1200 --fit inside --withoutEnlargement`) — this took the 8 Cue Club photos from ~18MB to ~1.1MB total with no visible quality loss at display size.

## Content status

Real content has been filled in for **Hero, About, Timeline, Beyond the Work's text, and Beyond the Work's Cue Club photos** (see the table above). **Projects, Skills, and Contact still hold placeholder text**, and **Beyond the Work's Varsity Badminton photos are still dashed placeholder cards** (e.g. "Placeholder Project One/Two/Three", generic skill lists, a placeholder email) — these are next up. Content continues to be filled in **section by section**: for sections backed by a `src/data/*.ts` file, replace the placeholder array entries there; for Hero/About/Contact, edit the copy directly in the component.
