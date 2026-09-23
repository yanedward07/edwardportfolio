import { PageHeader, PageShell } from '../components/PageShell'
import { timelineEntries } from '../data/timeline'

export function TimelinePage() {
  return (
    <PageShell>
      <PageHeader title="Timeline" />

      <ol className="relative border-l border-espresso-900/12 pl-8 dark:border-oat-100/12">
        {timelineEntries.map((entry) => (
          <li key={entry.id} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[calc(2rem+4.5px)] top-2 h-2.5 w-2.5 rounded-full bg-honey-500 ring-4 ring-paper dark:bg-honey-400 dark:ring-espresso-950" />
            <p className="font-display text-sm font-semibold text-honey-600 dark:text-honey-400">
              {entry.date}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-espresso-900 dark:text-oat-50">
              {entry.title}
            </h2>
            <p className="mt-1 text-sm text-bark-500">{entry.subtitle}</p>
            <p className="mt-4 max-w-[68ch] leading-relaxed text-bark-600 dark:text-bark-400">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>
    </PageShell>
  )
}
