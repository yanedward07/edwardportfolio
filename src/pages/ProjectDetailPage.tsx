import { Link, Navigate, useParams } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { VimeoEmbed } from '../components/ui/vimeo-embed'
import { YouTubeEmbed } from '../components/ui/youtube-embed'
import { projects } from '../data/projects'
import { accentStyles } from '../lib/accents'

export function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = projects.find((candidate) => candidate.id === projectId)

  // An unknown id is a bad link, not a page worth rendering — send it back to
  // the grid rather than showing an empty detail view.
  if (!project) return <Navigate to="/projects" replace />

  const accent = accentStyles[project.accent ?? 'honey']

  return (
    <PageShell>
      <Link
        to="/projects"
        className="text-sm text-bark-600 transition-colors hover:text-espresso-900 dark:text-bark-400 dark:hover:text-oat-100"
      >
        ← All projects
      </Link>

      <h1 className="mt-8 font-display text-4xl font-semibold leading-tight tracking-tight text-espresso-900 sm:text-5xl dark:text-oat-50">
        {project.title}
      </h1>
      <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-bark-600 dark:text-bark-400">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className={`rounded-full px-3 py-1 text-xs ${accent.chip}`}>
            {tag}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {project.links.map((link) =>
            link.url ? (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-espresso-900/15 px-4 py-2 text-sm text-espresso-900 transition-colors hover:border-honey-500 dark:border-oat-100/15 dark:text-oat-100 dark:hover:border-honey-400"
              >
                <LinkIcon />
                {link.label}
              </a>
            ) : (
              <span
                key={link.id}
                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-espresso-900/12 px-4 py-2 text-sm text-bark-500 dark:border-oat-100/12"
              >
                <LinkIcon />
                {link.label}
              </span>
            ),
          )}
        </div>
      )}

      {project.highlight && (
        <p className="mt-12 rounded-r-xl border-l-2 border-honey-500 bg-honey-500/8 py-5 pl-6 pr-5 leading-relaxed text-espresso-800 dark:border-honey-400 dark:bg-honey-400/8 dark:text-oat-200">
          {project.highlight}
        </p>
      )}

      {project.descriptionHeading && (
        <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-espresso-900 dark:text-oat-50">
          {project.descriptionHeading}
        </h2>
      )}

      <div className="mt-6 space-y-5 leading-[1.75] text-bark-600 dark:text-bark-400">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {project.images.map((image) => (
            <figure key={image.id}>
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-xl border border-espresso-900/10 object-cover dark:border-oat-100/10"
                />
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-espresso-900/15 bg-oat-100/50 text-bark-500 dark:border-oat-100/15 dark:bg-espresso-900/40">
                  <ImageIcon />
                  <span className="text-xs">Image placeholder</span>
                </div>
              )}
              {image.caption && (
                <figcaption className="mt-2 text-center text-xs text-bark-500">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {project.videos && project.videos.length > 0 && (
        <div className="mt-12 grid grid-cols-2 items-start gap-5 sm:grid-cols-3">
          {project.videos.map((video) => (
            // A clip with its own heading is the showcase one — it gets the
            // full width instead of a slot in the thumbnail grid.
            <figure
              key={video.id}
              className={video.heading ? 'col-span-2 sm:col-span-3' : undefined}
            >
              {video.heading && (
                <h3 className="mb-3 font-display text-xl font-semibold text-espresso-900 dark:text-oat-50">
                  {video.heading}
                </h3>
              )}
              {video.youtube ? (
                <YouTubeEmbed
                  videoId={video.youtube.videoId}
                  aspectRatio={video.youtube.aspectRatio}
                  title={video.caption}
                />
              ) : video.vimeo ? (
                <VimeoEmbed
                  videoId={video.vimeo.videoId}
                  hash={video.vimeo.hash}
                  aspectRatio={video.vimeo.aspectRatio}
                  title={video.caption}
                />
              ) : video.src ? (
                <video
                  src={video.src}
                  controls
                  className="aspect-video w-full rounded-xl bg-black object-cover"
                />
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-espresso-900/15 bg-oat-100/50 text-bark-500 dark:border-oat-100/15 dark:bg-espresso-900/40">
                  <PlayIcon />
                  <span className="text-[10px]">Video placeholder</span>
                </div>
              )}
              <figcaption
                className={`mt-2 text-xs leading-relaxed text-bark-500 ${
                  video.heading ? 'text-left' : 'text-center'
                }`}
              >
                {video.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="mt-16 border-t border-espresso-900/10 pt-8 dark:border-oat-100/10">
        <Link
          to="/projects"
          className="text-sm text-bark-600 transition-colors hover:text-espresso-900 dark:text-bark-400 dark:hover:text-oat-100"
        >
          ← All projects
        </Link>
      </div>
    </PageShell>
  )
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.5" />
      <path d="m21 15-5-5-11 11" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
