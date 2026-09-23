import { Link } from 'react-router-dom'
import { PageHeader, PageShell } from '../components/PageShell'
import { projects } from '../data/projects'
import { accentStyles } from '../lib/accents'

export function ProjectsPage() {
  return (
    <PageShell wide>
      <div className="mx-auto max-w-5xl px-6">
        <PageHeader
          title="Projects"
          lede="Four systems I designed and shipped. Open one for the full write-up, the walkthrough videos, and the links."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const accent = accentStyles[project.accent ?? 'honey']
            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`group flex flex-col rounded-3xl border p-7 transition-colors ${accent.card}`}
              >
                <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-espresso-900 dark:text-oat-50">
                  {project.title}
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-bark-600 dark:text-bark-400">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs ${accent.chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`mt-6 text-sm font-medium underline decoration-transparent underline-offset-4 transition group-hover:decoration-current ${accent.label}`}
                >
                  Open the write-up
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
