import { motion } from 'framer-motion'
import heroPortrait from '../assets/images/hero-portrait.png'
import { Section } from './Section'
import { SiriWave } from './ui/siri-wave'

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6 lg:justify-start">
          <SiriWave
            variant="wave"
            size={640}
            renderScale={0.7}
            className="rounded-none"
            style={{
              maskImage: 'radial-gradient(circle, black 35%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 70%)',
            }}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-slate-950/50" aria-hidden="true" />
      <Section
        id="hero"
        className="relative z-10 flex min-h-screen flex-col justify-center pt-20"
      >
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16">
          <motion.img
            src={heroPortrait}
            alt="Portrait of Edward Yan"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-4/5 w-56 shrink-0 rounded-3xl object-cover object-[50%_80%] shadow-2xl ring-1 ring-white/10 sm:w-64 lg:w-72"
          />
          <div className="max-w-xl text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.3em] text-indigo-400"
            >
              AI Automation & Growth Engineering
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-5xl font-bold text-white sm:text-6xl"
            >
              Edward Yan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate-400"
            >
              I build AI-powered automation systems that turn manual, repetitive business
              processes into scalable pipelines. My work spans AI-driven sales agents to
              interactive marketing experiences that drive real customer engagement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex justify-center gap-4 lg:justify-start"
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
          </div>
        </div>
      </Section>
    </div>
  )
}
