import { About } from './components/About'
import { BeyondTheWork } from './components/BeyondTheWork'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { IntroSplash } from './components/IntroSplash'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { AuroraBackground } from './components/ui/aurora-background'

function App() {
  return (
    <div className="isolate min-h-screen bg-slate-950 text-white">
      <IntroSplash />
      <AuroraBackground aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <BeyondTheWork />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
