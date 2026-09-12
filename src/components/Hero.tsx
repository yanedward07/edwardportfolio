import { motion } from 'framer-motion'
import { Section } from './Section'

export function Hero() {
  return (
    <Section id="hero" className="flex min-h-screen flex-col justify-center pt-20">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.3em] text-indigo-400"
      >
        Placeholder Tagline
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-5xl font-bold text-white sm:text-6xl"
      >
        Your Name
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-slate-400"
      >
        Placeholder role and description — e.g. "Software engineer building things for the
        web." Replace with real bio copy later.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
        >
          Contact
        </a>
      </motion.div>
    </Section>
  )
}
