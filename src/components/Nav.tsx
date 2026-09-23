import type { MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

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
  const { theme, toggleTheme } = useTheme()
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
      ? 'text-slate-900 dark:text-white'
      : 'text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(event) => handleAnchorClick(event, 'hero')}
          className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
        >
          Edward Yan
        </a>
        <div className="flex items-center gap-6">
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
                className={
                  !isHome
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }
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
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-slate-500 transition-colors hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}
