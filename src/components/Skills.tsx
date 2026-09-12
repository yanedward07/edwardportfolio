import { skillGroups } from '../data/skills'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold text-white">Skills</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
