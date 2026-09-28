import type { AccentKey } from '../lib/accents'

export interface TimelineEntry {
  id: string
  date: string
  title: string
  subtitle: string
  description: string
}

export interface ProjectVideo {
  id: string
  /** Short label shown below the video/placeholder. */
  caption: string
  /** Optional prominent title shown above the video (for a featured/showcase clip). */
  heading?: string
  /** Local video file (e.g. mp4) — renders a native <video> tag when set. */
  src?: string
  /** Vimeo-hosted clip — renders a VimeoEmbed when set. Takes priority over `src`. */
  vimeo?: {
    videoId: string
    /** Privacy hash from the share link. Omit for videos with no hash (fully public). */
    hash?: string
    /** CSS aspect-ratio value, e.g. "240 / 412" for a portrait clip. Defaults to 16 / 9. */
    aspectRatio?: string
  }
  /** YouTube-hosted clip — renders a YouTubeEmbed when set. Takes priority over `vimeo`/`src`. */
  youtube?: {
    videoId: string
    /** CSS aspect-ratio value. Defaults to 16 / 9. */
    aspectRatio?: string
  }
}

export interface ProjectLink {
  id: string
  label: string
  /** When set, renders as a real link instead of a disabled placeholder. */
  url?: string
}

export interface ProjectImage {
  id: string
  /** When set, renders the real image instead of the placeholder slot. */
  src?: string
  alt: string
  /** Short label rendered below the image/placeholder (e.g. "Metrics dashboard"). */
  caption?: string
  /** Optional paragraph under the caption, for reading the numbers in a screenshot. */
  summary?: string
}

/** One labelled part of a case study's "How it works" breakdown. */
export interface ProjectStep {
  label: string
  text: string
  /** Optional bullet list under the text, e.g. one line per campaign. */
  points?: string[]
}

/**
 * A project is written up as a case study: Problem, What I built, How it
 * works, Outcome, What I learned, then the long-form technical detail. Every
 * section is optional so a project only shows the headings it actually has.
 */
export interface Project {
  id: string
  title: string
  summary: string
  /** Card colour on the projects grid (see src/lib/accents.ts). Defaults to honey. */
  accent?: AccentKey
  /** Rendered first, as the tinted "The problem" callout. */
  problem?: string
  built?: string
  howItWorks?: ProjectStep[]
  outcome?: string
  learned?: string
  /** Long-form detail under "Technical details", for readers who want to dig in. */
  details?: string[]
  tags: string[]
  images?: ProjectImage[]
  videos?: ProjectVideo[]
  links?: ProjectLink[]
}

export interface SkillGroup {
  id: string
  category: string
  items: string[]
}

export interface ExtracurricularPhoto {
  id: string
  caption: string
  /** When set, renders the real photo instead of the placeholder card. */
  image?: string
}

export interface ExtracurricularEntry {
  id: string
  title: string
  subtitle: string
  description: string[]
  photos: ExtracurricularPhoto[]
}
