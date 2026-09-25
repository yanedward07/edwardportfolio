import { PageHeader, PageShell } from '../components/PageShell'

const EMAIL = 'yanedward07@gmail.com'
const CALENDLY_URL = 'https://calendly.com/yanedward07/30min'
const GITHUB_URL = 'https://github.com/yanedward07'

export function ContactPage() {
  return (
    <PageShell>
      <PageHeader title="Let's Chat" />

      <p className="max-w-[62ch] text-lg leading-relaxed text-bark-600 dark:text-bark-400">
        I'm open to startup and full-time roles, and happy to talk through anything on
        this site: how a system was built, what broke along the way, or whether
        something similar would work for your team. Grab a 30-minute slot on my
        calendar, or send me an email if that's easier.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-espresso-900 px-6 py-3 text-sm font-medium text-oat-50 transition-colors hover:bg-espresso-700 dark:bg-honey-400 dark:text-espresso-950 dark:hover:bg-honey-500"
        >
          Book a 30-minute call
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full border border-espresso-900/20 px-6 py-3 text-sm font-medium text-espresso-900 transition-colors hover:border-honey-500 dark:border-oat-100/20 dark:text-oat-100 dark:hover:border-honey-400"
        >
          {EMAIL}
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-espresso-900/20 px-6 py-3 text-sm font-medium text-espresso-900 transition-colors hover:border-honey-500 dark:border-oat-100/20 dark:text-oat-100 dark:hover:border-honey-400"
        >
          GitHub
        </a>
      </div>
    </PageShell>
  )
}
