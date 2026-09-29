import { PageHeader, PageShell } from '../components/PageShell'

// Served from public/ rather than imported, so the file keeps a stable,
// unhashed URL that can be linked to or shared directly.
const RESUME_URL = '/edward-yan-resume.pdf'

export function ResumePage() {
  return (
    <PageShell wide>
      <div className="mx-auto max-w-4xl px-6">
        <PageHeader title="Resume" />

        <div className="flex flex-wrap gap-3">
          <a
            href={RESUME_URL}
            download
            className="rounded-full bg-espresso-900 px-6 py-3 text-sm font-medium text-oat-50 transition-colors hover:bg-espresso-700 dark:bg-honey-400 dark:text-espresso-950 dark:hover:bg-honey-500"
          >
            Download PDF
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-espresso-900/20 px-6 py-3 text-sm font-medium text-espresso-900 transition-colors hover:border-honey-500 dark:border-oat-100/20 dark:text-oat-100 dark:hover:border-honey-400"
          >
            Open in a new tab
          </a>
        </div>

        {/* Mobile browsers (Android Chrome especially) can't render a PDF
            inline, so <object> falls back to its children there instead of
            showing an empty box. */}
        <object
          data={`${RESUME_URL}#view=FitH`}
          type="application/pdf"
          aria-label="Edward Yan's resume"
          className="mt-8 aspect-[8.5/11] w-full rounded-xl border border-espresso-900/10 bg-paper-raised dark:border-oat-100/10 dark:bg-espresso-900/50"
        >
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-bark-600 dark:text-bark-400">
            <p>Your browser can't show the PDF here.</p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-honey-600 underline decoration-honey-500/40 underline-offset-4 dark:text-honey-400"
            >
              Open the resume
            </a>
          </div>
        </object>
      </div>
    </PageShell>
  )
}
