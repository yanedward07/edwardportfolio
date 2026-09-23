import { BeyondTheWork } from '../components/BeyondTheWork'
import { Nav } from '../components/Nav'
import { AuroraBackground } from '../components/ui/aurora-background'

export function BeyondTheWorkPage() {
  return (
    <div className="isolate min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <AuroraBackground aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />
      <Nav />
      <main>
        <BeyondTheWork />
      </main>
    </div>
  )
}
