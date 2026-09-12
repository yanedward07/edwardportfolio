import { motion } from 'framer-motion'
import { timelineEntries } from '../data/timeline'
import { Section } from './Section'

export function Timeline() {
  return (
    <Section id="timeline">
      <h2 className="text-3xl font-bold text-white">Timeline</h2>
      <ol className="mt-10 space-y-10 border-l border-white/10 pl-8">
        {timelineEntries.map((entry, index) => (
          <motion.li
            key={entry.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-400" />
            <p className="text-sm uppercase tracking-wide text-indigo-400">{entry.date}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{entry.title}</h3>
            <p className="text-sm text-slate-500">{entry.subtitle}</p>
            <p className="mt-2 text-slate-400">{entry.description}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
