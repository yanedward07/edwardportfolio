import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { IntroSplash } from '../components/IntroSplash'
import { Nav } from '../components/Nav'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Timeline } from '../components/Timeline'
import { AuroraBackground } from '../components/ui/aurora-background'

export function HomePage() {
  const location = useLocation()

  // Supports cross-page anchor links (e.g. navigating here from
  // /beyond-the-work with a `#about` hash) as well as normal same-page
  // hash links on first load.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  return (
    <div className="isolate min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <IntroSplash />
      <AuroraBackground aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
