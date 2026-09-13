import { motion } from 'framer-motion'
import { extracurricularPhotos } from '../data/beyondTheWork'
import { Section } from './Section'

export function BeyondTheWork() {
  return (
    <Section id="beyond-the-work">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white"
      >
        Beyond the Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 max-w-2xl leading-relaxed text-slate-400"
      >
        Placeholder paragraph about life outside of work — currently competing on the
        varsity badminton team and serving as cofounder and co-president of the Western
        Cue Club. Real stories and reflections go here later.
      </motion.p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {extracurricularPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-slate-500 transition-colors group-hover:border-white/30 group-hover:text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="1.5" />
                <path d="m21 15-5-5-11 11" />
              </svg>
              <span className="text-xs">Photo placeholder</span>
            </div>
            <p className="mt-2 text-center text-sm text-slate-400">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
