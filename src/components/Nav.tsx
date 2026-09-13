import type { MouseEvent } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'projects', label: 'Projects' },
  { id: 'beyond-the-work', label: 'Beyond the Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id))

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(event) => handleClick(event, 'hero')}
          className="text-sm font-semibold tracking-wide text-white"
        >
          Edward Yan
        </a>
        <ul className="flex gap-6 text-sm">
          {NAV_ITEMS.filter((item) => item.id !== 'hero').map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleClick(event, item.id)}
                className={
                  activeId === item.id
                    ? 'text-white'
                    : 'text-slate-400 transition-colors hover:text-white'
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
