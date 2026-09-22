import type { MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'projects', label: 'Projects' },
]

const AFTER_PROJECTS_ITEMS = [
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const BEYOND_THE_WORK_PATH = '/beyond-the-work'

export function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const allSectionIds = [...SECTION_ITEMS, ...AFTER_PROJECTS_ITEMS].map((item) => item.id)
  const activeId = useActiveSection(isHome ? allSectionIds : [])

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  const anchorLinkClass = (id: string) =>
    isHome && activeId === id
      ? 'text-white'
      : 'text-slate-400 transition-colors hover:text-white'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(event) => handleAnchorClick(event, 'hero')}
          className="text-sm font-semibold tracking-wide text-white"
        >
          Edward Yan
        </a>
        <ul className="flex gap-6 text-sm">
          {SECTION_ITEMS.filter((item) => item.id !== 'hero').map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleAnchorClick(event, item.id)}
                className={anchorLinkClass(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to={BEYOND_THE_WORK_PATH}
              className={!isHome ? 'text-white' : 'text-slate-400 transition-colors hover:text-white'}
            >
              Beyond the Work
            </Link>
          </li>
          {AFTER_PROJECTS_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleAnchorClick(event, item.id)}
                className={anchorLinkClass(item.id)}
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
