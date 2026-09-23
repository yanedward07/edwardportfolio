import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  showRadialGradient?: boolean
}

/**
 * A soft, slowly-animating aurora wash built from layered CSS gradients
 * (no canvas/WebGL). Sized to fill its parent — wrap it in a positioned
 * container (e.g. `absolute inset-0`) to use as a section background.
 *
 * Ported from a light/dark-aware shadcn-style component. `--aurora-stripes`
 * (see index.css) is white in light mode and black in dark mode; the
 * `invert dark:invert-0` filter here is what makes the same markup read
 * correctly against both a light and a dark page background.
 */
export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      <div
        className={cn(
          `pointer-events-none absolute -inset-2.5 [background-image:var(--aurora-stripes),var(--aurora-colors)] bg-position-[50%_50%,50%_50%] bg-size-[300%,200%] opacity-50 blur-[10px] invert will-change-transform after:absolute after:inset-0 after:animate-aurora after:bg-fixed after:[background-image:var(--aurora-stripes),var(--aurora-colors)] after:bg-size-[200%,100%] after:mix-blend-difference after:content-[''] dark:opacity-100 dark:invert-0`,
          showRadialGradient &&
            "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
        )}
      />
      {children}
    </div>
  )
}
