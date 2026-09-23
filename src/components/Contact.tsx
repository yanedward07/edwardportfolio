import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        Placeholder contact copy — swap in real details later.
      </p>
      <a
        href="mailto:you@example.com"
        className="mt-6 inline-block rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
      >
        you@example.com
      </a>
    </Section>
  )
}
