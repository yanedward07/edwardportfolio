export interface TimelineEntry {
  id: string
  date: string
  title: string
  subtitle: string
  description: string
}

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  tags: string[]
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
