import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../types/content'

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
            <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>
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
