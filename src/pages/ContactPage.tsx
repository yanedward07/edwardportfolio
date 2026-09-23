import { PageHeader, PageShell } from '../components/PageShell'

export function ContactPage() {
  return (
    <PageShell>
      <PageHeader title="Contact" />

      <p className="max-w-[62ch] text-lg leading-relaxed text-bark-600 dark:text-bark-400">
        Placeholder contact copy — swap in real details later.
      </p>

      <a
        href="mailto:you@example.com"
        className="mt-8 inline-block rounded-full bg-espresso-900 px-6 py-3 text-sm font-medium text-oat-50 transition-colors hover:bg-espresso-700 dark:bg-honey-400 dark:text-espresso-950 dark:hover:bg-honey-500"
      >
        you@example.com
      </a>
    </PageShell>
  )
}
