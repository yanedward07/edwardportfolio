import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroPortrait from '../assets/images/hero-portrait.jpg'
import { IntroSplash } from '../components/IntroSplash'
import { PageShell } from '../components/PageShell'
import { accentStyles, type AccentKey } from '../lib/accents'

interface Pastime {
  id: string
  sport: string
  line: string
  accent: AccentKey
}

// Short, personal notes — the counterweight to the work pages. Keep them to a
// sentence each; the long-form writing lives on /about.
const PASTIMES: Pastime[] = [
  {
    id: 'racket',
    sport: 'Racket sports',
    line: "Played badminton since I was young. Two years on Western's varsity team, competing nationally against other universities. I'll still take a game off anyone who asks.",
    accent: 'honey',
  },
  {
    id: 'billiards',
    sport: 'Billiards',
    line: 'Co-founded the Western Cue Club out of late-night residence games and grew it to 130 members in under two years.',
    accent: 'felt',
  },
  {
    id: 'golf',
    sport: 'Golf',
    line: 'The newest one, and the most humbling. Currently trading distance for a swing that stays on the fairway.',
    accent: 'wine',
  },
]

/**
 * The landing-page name. Set on two lines at poster scale so it reads as a
 * mark rather than a heading, and revealed letter by letter on load: the one
 * piece of unprompted motion on the page. The letters are aria-hidden and the
 * heading carries the real name, so a screen reader hears it once, normally.
 */
function HeroName() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.h1
      aria-label="Edward Yan"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.045, delayChildren: 0.1 },
        },
      }}
      className="hero-name mt-4 font-display text-7xl font-bold leading-[0.82] tracking-[-0.035em] text-espresso-900 sm:text-8xl dark:text-oat-50"
    >
      {['Edward', 'Yan'].map((word) => (
        <span key={word} aria-hidden="true" className="block">
          {[...word].map((letter, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block"
              variants={{
                hidden: reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: '0.3em', rotate: -6 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  )
}

export function HomePage() {
  return (
    <PageShell wide>
      <IntroSplash />

      <div className="mx-auto max-w-5xl px-6">
        <section className="flex flex-col items-start gap-12 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16">
          <motion.img
            src={heroPortrait}
            alt="Portrait of Edward Yan"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="aspect-square w-56 shrink-0 self-center rounded-full object-cover shadow-xl shadow-espresso-900/10 ring-1 ring-espresso-900/10 sm:w-72 lg:w-80 dark:ring-oat-100/10"
          />

          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-honey-600 dark:text-honey-400"
            >
              AI Automation &amp; Growth Engineering
            </motion.p>
            <HeroName />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-7 max-w-[58ch] space-y-4 text-lg leading-relaxed text-bark-600 dark:text-bark-400"
            >
              <p>
                I love building things that make people's lives easier. Chat and voice
                agents, workflow automation, outbound systems, anything that takes the
                repetitive half of a job off someone's plate.
              </p>
              <p>
                If a person is doing it fifty times a week, I'd rather build something
                that does it for them.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="rounded-full bg-espresso-900 px-6 py-3 text-sm font-medium text-oat-50 transition-colors hover:bg-espresso-700 dark:bg-honey-400 dark:text-espresso-950 dark:hover:bg-honey-500"
              >
                See the projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-espresso-900/20 px-6 py-3 text-sm font-medium text-espresso-900 transition-colors hover:border-honey-500 dark:border-oat-100/20 dark:text-oat-100 dark:hover:border-honey-400"
              >
                Let's chat
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-espresso-900/10 bg-paper-raised p-8 sm:p-10 dark:border-oat-100/10 dark:bg-espresso-900/50">
          <h2 className="font-display text-2xl font-semibold text-espresso-900 dark:text-oat-50">
            Looking for my next team
          </h2>
          <p className="mt-4 max-w-[64ch] leading-relaxed text-bark-600 dark:text-bark-400">
            I'm open to startup roles and full-time work where I can keep shipping AI
            products end to end. The kind of place where the person who designs the
            system is also the one who gets it live.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="text-sm font-medium text-honey-600 underline decoration-honey-500/40 underline-offset-4 transition-colors hover:decoration-honey-500 dark:text-honey-400"
            >
              Read the longer version
            </Link>
            <span className="text-bark-400" aria-hidden="true">
              /
            </span>
            <Link
              to="/timeline"
              className="text-sm font-medium text-honey-600 underline decoration-honey-500/40 underline-offset-4 transition-colors hover:decoration-honey-500 dark:text-honey-400"
            >
              See how I got here
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-espresso-900 dark:text-oat-50">
            Away from the screen
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {PASTIMES.map((pastime) => {
              const accent = accentStyles[pastime.accent]
              return (
                <div
                  key={pastime.id}
                  className={`rounded-2xl border p-6 transition-colors ${accent.card}`}
                >
                  <h3 className={`font-display text-xl font-semibold ${accent.label}`}>
                    {pastime.sport}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark-600 dark:text-bark-400">
                    {pastime.line}
                  </p>
                </div>
              )
            })}
          </div>
          <Link
            to="/beyond-the-work"
            className="mt-6 inline-block text-sm font-medium text-honey-600 underline decoration-honey-500/40 underline-offset-4 transition-colors hover:decoration-honey-500 dark:text-honey-400"
          >
            Photos and the full story
          </Link>
        </section>
      </div>
    </PageShell>
  )
}
