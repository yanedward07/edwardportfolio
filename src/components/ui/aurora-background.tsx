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
 * Ported from a light/dark-aware shadcn-style component; this site is
 * permanently dark, so the light-mode branch and `dark:` variants were
 * dropped rather than wiring up Tailwind's dark-mode config for one effect.
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
          `pointer-events-none absolute -inset-2.5 [background-image:var(--aurora-stripes),var(--aurora-colors)] bg-position-[50%_50%,50%_50%] bg-size-[300%,200%] blur-[10px] will-change-transform after:absolute after:inset-0 after:animate-aurora after:bg-fixed after:[background-image:var(--aurora-stripes),var(--aurora-colors)] after:bg-size-[200%,100%] after:mix-blend-difference after:content-['']`,
          showRadialGradient &&
            "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
        )}
      />
      {children}
    </div>
  )
}
