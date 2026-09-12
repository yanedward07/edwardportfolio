import { Section } from './Section'

export function About() {
  return (
    <Section id="about">
      <h2 className="text-3xl font-bold text-white">About</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
        Placeholder about-section copy. A couple of paragraphs introducing background,
        interests, and what drives the work — swap in real bio content later.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
        Second placeholder paragraph for additional context, such as current focus areas or
        what to expect elsewhere on this site.
      </p>
    </Section>
  )
}
