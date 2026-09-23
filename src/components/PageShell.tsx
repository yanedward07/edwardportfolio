import { motion } from 'framer-motion'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Nav } from './Nav'
import { AuroraBackground } from './ui/aurora-background'

interface PageShellProps {
  children: ReactNode
  /** Home opts out of the shared max-width wrapper so it can run full-bleed. */
  wide?: boolean
}

/**
 * Shared chrome for every route: warm page background, the aurora wash, the
 * centred nav, and a single fade-in when a new page mounts. Route changes also
 * reset the scroll position — without this, navigating from the bottom of one
 * page lands halfway down the next.
 */
export function PageShell({ children, wide = false }: PageShellProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="isolate min-h-screen bg-paper text-espresso-900 dark:bg-espresso-950 dark:text-oat-100">
      {/* Dark mode only: the light theme reads cleaner as flat warm paper. */}
      <AuroraBackground
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 hidden dark:block"
      />
      <Nav />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="pt-28 pb-28"
      >
        {wide ? children : <div className="mx-auto max-w-3xl px-6">{children}</div>}
      </motion.main>
    </div>
  )
}

interface PageHeaderProps {
  title: string
  lede?: string
}

/** Page title treatment shared across routes: display serif + a honey rule. */
export function PageHeader({ title, lede }: PageHeaderProps) {
  return (
    <header className="mb-14">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-espresso-900 sm:text-5xl dark:text-oat-50">
        {title}
      </h1>
      <div className="mt-5 h-px w-24 bg-honey-500 dark:bg-honey-400" />
      {lede && (
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bark-600 dark:text-bark-400">
          {lede}
        </p>
      )}
    </header>
  )
}
