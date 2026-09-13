import { About } from './components/About'
import { BeyondTheWork } from './components/BeyondTheWork'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
