import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../types/content'
import { VimeoEmbed } from './ui/vimeo-embed'
import { YouTubeEmbed } from './ui/youtube-embed'

interface ProjectCardProps {
  project: Project
  isOpen: boolean
  onToggle: () => void
}

export function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
  return (
    <motion.div layout className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{project.summary}</p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="shrink-0 text-2xl text-slate-400"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {project.description.map((paragraph, index) => (
              <p key={index} className="mt-4 leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}

            {project.images && project.images.length > 0 && (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.images.map((image) => (
                  <div key={image.id}>
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full rounded-lg border border-white/10 object-cover"
                      />
                    ) : (
                      <div className="flex aspect-video flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/15 bg-white/[0.03] text-slate-500">
                        <ImageIcon />
                        <span className="text-xs">Image placeholder</span>
                      </div>
                    )}
                    {image.caption && (
                      <p className="mt-1.5 text-center text-xs text-slate-500">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.map((link) =>
                  link.url ? (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <LinkIcon />
                      {link.label}
                    </a>
                  ) : (
                    <span
                      key={link.id}
                      className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/10 px-3 py-1.5 text-xs text-slate-600"
                    >
                      <LinkIcon />
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            )}

            {project.videos && project.videos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
                {project.videos.map((video) => (
                  <div key={video.id}>
                    {video.heading && (
                      <p className="mb-1.5 text-sm font-semibold text-white">{video.heading}</p>
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
                        className="aspect-video w-full rounded-lg bg-black object-cover"
                      />
                    ) : (
                      <div className="flex aspect-video flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/15 bg-white/[0.03] text-slate-500">
                        <PlayIcon />
                        <span className="text-[10px]">Video placeholder</span>
                      </div>
                    )}
                    <p className="mt-1.5 text-center text-xs text-slate-500">{video.caption}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
      className="h-3 w-3"
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
