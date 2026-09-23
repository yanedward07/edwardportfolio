/**
 * Named warm accents shared by the home cards and the project cards. Tailwind
 * can't build class names at runtime, so each accent stores complete class
 * strings rather than a colour fragment.
 */
export type AccentKey = 'honey' | 'felt' | 'wine' | 'bark'

interface AccentStyle {
  /** Card surface: tinted fill + border. */
  card: string
  /** Small label / eyebrow text colour. */
  label: string
  /** Pill used for tags on that card. */
  chip: string
}

export const accentStyles: Record<AccentKey, AccentStyle> = {
  honey: {
    card: 'border-honey-500/30 bg-honey-500/8 hover:border-honey-500/70 dark:border-honey-400/25 dark:bg-honey-400/8 dark:hover:border-honey-400/60',
    label: 'text-honey-600 dark:text-honey-400',
    chip: 'bg-honey-500/15 text-honey-600 dark:text-honey-400',
  },
  felt: {
    card: 'border-felt-500/30 bg-felt-500/8 hover:border-felt-500/70 dark:border-felt-400/25 dark:bg-felt-400/8 dark:hover:border-felt-400/60',
    label: 'text-felt-700 dark:text-felt-400',
    chip: 'bg-felt-500/15 text-felt-700 dark:text-felt-400',
  },
  wine: {
    card: 'border-wine-600/30 bg-wine-600/8 hover:border-wine-600/70 dark:border-wine-400/25 dark:bg-wine-400/8 dark:hover:border-wine-400/60',
    label: 'text-wine-600 dark:text-wine-400',
    chip: 'bg-wine-600/15 text-wine-600 dark:text-wine-400',
  },
  bark: {
    card: 'border-bark-500/30 bg-bark-500/8 hover:border-bark-500/70 dark:border-bark-400/25 dark:bg-bark-400/8 dark:hover:border-bark-400/60',
    label: 'text-bark-600 dark:text-bark-400',
    chip: 'bg-bark-500/15 text-bark-600 dark:text-bark-400',
  },
}
