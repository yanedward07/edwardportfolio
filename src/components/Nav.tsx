import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/projects', label: 'Projects' },
  { to: '/beyond-the-work', label: 'Beyond the Work' },
  { to: '/contact', label: 'Contact' },
]

/**
 * Top bar with the links centred in the viewport. The brand and the theme
 * toggle are absolutely positioned at the edges so the link row stays
 * optically centred regardless of how wide either of them gets.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-espresso-900/8 bg-paper/85 backdrop-blur-md dark:border-oat-100/10 dark:bg-espresso-950/85">
      <div className="mx-auto max-w-6xl px-6 py-4 lg:py-5">
        {/* On narrow screens the brand and the toggle get their own row so the
            link row underneath can stay centred (and scroll) without them
            overlapping it. */}
        <div className="flex items-center justify-between lg:hidden">
          <Link
            to="/"
            className="font-display text-base font-semibold tracking-tight text-espresso-900 dark:text-oat-100"
          >
            Edward Yan
          </Link>
          <ThemeToggle />
        </div>

        <div className="relative mt-3 flex items-center justify-center lg:mt-0">
          <Link
            to="/"
            className="absolute left-0 hidden font-display text-base font-semibold tracking-tight text-espresso-900 lg:block dark:text-oat-100"
          >
            Edward Yan
          </Link>

          <nav aria-label="Primary" className="max-w-full overflow-x-auto">
            <ul className="flex items-center gap-1 sm:gap-2 md:gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [
                        'block whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors sm:px-4',
                        isActive
                          ? 'bg-honey-500/15 text-espresso-900 dark:bg-honey-400/15 dark:text-oat-50'
                          : 'text-bark-600 hover:text-espresso-900 dark:text-bark-400 dark:hover:text-oat-100',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute right-0 hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-espresso-900/15 text-bark-600 transition-colors hover:border-honey-500 hover:text-espresso-900 dark:border-oat-100/15 dark:text-bark-400 dark:hover:border-honey-400 dark:hover:text-oat-100"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
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
