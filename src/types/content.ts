export interface TimelineEntry {
  id: string
  date: string
  title: string
  subtitle: string
  description: string
}

export interface ProjectVideo {
  id: string
  caption: string
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
}

export interface Project {
  id: string
  title: string
  summary: string
  description: string[]
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
