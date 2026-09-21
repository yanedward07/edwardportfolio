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

- **Intro splash**: `src/components/IntroSplash.tsx`, rendered first in `App.tsx` (above `AuroraBackground`/`Nav`, `z-100` fixed overlay). Shows "Edward Yan" animating in over `AuroraBackground` once per browser session (gated by `sessionStorage['intro-shown']` — the `useState` initializer reads it, so a repeat view in the same session renders nothing at all, no flash). Auto-dismisses after 2.5s, or immediately on click anywhere on the overlay; either way, the name zooms toward the viewer on exit (`exit={{ scale: 12, opacity: 0 }}` on the text, with its own faster/snappier transition than the entrance) rather than a plain fade. A short two-tone chime is synthesized at runtime via the Web Audio API (`playRevealChime`, no audio asset/licensing needed) — attempted on mount (silently no-ops if the browser blocks autoplaying audio) and always played on the click-to-skip handler, since a click is a genuine user gesture that satisfies browser autoplay policy. Sets `document.body.style.overflow = 'hidden'` while visible, restored on dismiss.
- **Anchor nav**: `src/components/Nav.tsx` links to each section's `id` and smooth-scrolls via `scrollIntoView`. The active link is highlighted using `src/hooks/useActiveSection.ts`, an `IntersectionObserver`-based scroll-spy (no external scroll-spy library).
- **Section wrapper**: `src/components/Section.tsx` gives every section a consistent `id`, spacing, and `scroll-mt` offset for the fixed nav.
- **Project cards expand in place**: `src/components/Projects.tsx` holds `activeId` (accordion state — only one card open at a time). `src/components/ProjectCard.tsx` renders each card and animates its own expand/collapse with Framer Motion (`layout` + `AnimatePresence`) when it becomes the active card. There is no modal and no route change — the card grows inline to reveal detail.
- **Circular photo gallery**: `src/components/ui/circular-gallery.tsx` (`CircularGallery`) renders a set of photos in 3D on a rotating ring (CSS `rotateY`/`translateZ`, no external 3D library). Hovering it and scrolling rotates it locally — a native, non-passive `wheel` listener calls `preventDefault()` so the page itself doesn't scroll; move the cursor off the gallery to keep scrolling the page. It idles with a slow auto-rotation otherwise. `BeyondTheWork.tsx` uses one per extracurricular entry, computing `radius` from the photo count (`radiusForCount`) so spacing stays even whether an entry has 4 photos or 8.
- **Vimeo embeds**: `src/components/ui/vimeo-embed.tsx` (`VimeoEmbed`) wraps the Vimeo Player SDK. The `player.js` script loads once for the whole page via a module-scoped promise (`loadVimeoPlayerScript`), shared across every instance regardless of how many mount. The container uses the real CSS `aspect-ratio` property (a prop, not a padding-percentage hack) — pass the exact ratio from the video's own embed code (e.g. Vimeo's `padding-top: 170.21%` → `aspectRatio: '100 / 170.21'`) since these AR screen-recordings are portrait, not 16:9. `hash` is optional — some clips have no privacy hash (fully public) and omit `h` from the Player options entirely when absent. Status only flips to `'ready'` after the player's own `ready()` promise resolves, not just after the constructor call — the constructor resolves synchronously even when the video fails to load, so gating on `ready()` is what actually surfaces a "Video unavailable" state instead of a silent blank box.
- **YouTube embeds**: `src/components/ui/youtube-embed.tsx` (`YouTubeEmbed`) — just a plain iframe (`youtube.com/embed/{id}`) in the same `aspect-ratio` container as `VimeoEmbed`, no SDK script, no privacy hash, no ready-state gating needed. Added as a second hosting option after a Vimeo account access issue; in `ProjectCard.tsx`'s video rendering, `video.youtube` is checked before `video.vimeo`/`video.src`. `ProjectVideo.heading` is an optional prominent title rendered above a video (for a featured/showcase clip) — distinct from `caption`, which always renders as a short line below.

## Sections (in page order) and content status

| Section | Component | Content lives in | Status |
|---|---|---|---|
| Hero | `src/components/Hero.tsx` | inline in the component | ✅ Real (name, tagline, bio, portrait) |
| About | `src/components/About.tsx` | inline in the component | ✅ Real (full bio) |
| Timeline | `src/components/Timeline.tsx` | `src/data/timeline.ts` | ✅ Real (7 entries, May 2025 – Present) |
| Projects | `src/components/Projects.tsx` + `ProjectCard.tsx` | `src/data/projects.ts` | 🟡 All 3 real; project-2's image slots and project-3's video slots still pending |
| Beyond the Work | `src/components/BeyondTheWork.tsx` | `src/data/beyondTheWork.ts` | ✅ Real (text + all photos) |
| Skills | `src/components/Skills.tsx` | `src/data/skills.ts` | ⏳ Placeholder |
| Contact | `src/components/Contact.tsx` | inline in the component | ⏳ Placeholder |

Beyond the Work covers two extracurriculars — Varsity Badminton (4 photos, `src/assets/images/varsity-badminton/`) and Co-Founder/Co-President of the Western Cue Club (8 photos, `src/assets/images/cue-club/`) — each with real write-up copy (`ExtracurricularEntry.description`, an array of paragraphs) and its own `CircularGallery` (see Architecture above). `ExtracurricularPhoto.image` is typed as optional (a dashed placeholder card used to render in its place before real photos existed), but the current `CircularGallery`-based rendering has no placeholder fallback — every photo needs a real `image` now that both entries are fully populated. Add a fallback again if a future entry ships without photos yet.

`ProjectCard.tsx`'s expanded panel supports the same optional-media pattern for `Project.videos` (`ProjectVideo.src` for local files, or `ProjectVideo.vimeo` for a `VimeoEmbed` — see Architecture above), `Project.links` (`ProjectLink.url`), and `Project.images` (`ProjectImage.src`): a dashed placeholder (video/image grid slot, or disabled link pill) renders until a real value is set, so reserving a slot now and filling it in later needs no layout changes. A `Project` can also optionally set `highlight` (a short callout paragraph styled distinctly — indigo left border + tinted background — rendered first, above the regular description) and `descriptionHeading` (a subheading, e.g. "How it works", rendered between the highlight and the regular `description` paragraphs); both are additive and only render when present. `project-1` (Starship Solutions AR Activations) is fully real: all 3 links and all 6 Vimeo-hosted AR activation clips (Prize Drop, Solar System, Smash Burger, Cyber Halo, Pop Launch, Rocket Intro). `project-2` (EVE Voice AI & Call Routing System) has real text/tags/link (MeetEve, medtechwristbands.com/eve); its 2 image slots ("Metrics dashboard", "Busiest hours chart") are intentionally placeholders — real dashboard screenshots were pulled after a confidentiality check (internal call-volume/routing metrics from the employer's system), pending explicit sign-off before republishing. No `videos` for this one (not requested). `project-3` (MedTech Multi-Agent Chatbot System) has real text/tags, a `highlight` ("why it matters") callout, and a "How it works" `descriptionHeading`; its "Live Routing Test" video slot is real (YouTube-hosted, with a `heading` above it), "Jessica's Flow Walkthrough" is still a reserved placeholder. No `links`/`images`.

Shared content types are in `src/types/content.ts` (`TimelineEntry`, `Project`, `ProjectVideo`, `ProjectLink`, `ProjectImage`, `SkillGroup`, `ExtracurricularPhoto`, `ExtracurricularEntry`).

## Assets

Images live in `src/assets/images/` (subfolders per topic are fine, e.g. `cue-club/`) and are imported directly into the file that uses them — either a component (e.g. `import heroPortrait from '../assets/images/hero-portrait.png'` in `Hero.tsx`) or a data file (e.g. `beyondTheWork.ts` imports each Cue Club photo and assigns it to that entry's `image` field) — so Vite bundles and hashes them. Keep new images in that folder with descriptive lowercase-kebab-case filenames (e.g. `hero-portrait.png`, not `IMG_1234.PNG`).

Raw camera files (`.CR3`, `.CR2`, `.NEF`, `.ARW`) are gitignored — they can't render on the web and are too large to track. Convert to JPG first. Before committing any photo sourced from a camera/phone at full resolution, resize it for web (e.g. `npx sharp-cli -i in.jpg -o outDir --autoOrient -q 82 --mozjpeg resize 1200 --fit inside --withoutEnlargement`) — this took the 8 Cue Club photos from ~18MB to ~1.1MB total with no visible quality loss at display size.

## Content status

Real content has been filled in for **Hero, About, Timeline, Beyond the Work, and all 3 Projects cards** (see the table above; project-2's images and project-3's videos are still reserved placeholders). **Skills and Contact still hold placeholder text** (generic skill lists, a placeholder email) — these are next up. Content continues to be filled in **section by section**: for sections backed by a `src/data/*.ts` file, replace the placeholder array entries there; for Hero/About/Contact, edit the copy directly in the component.
