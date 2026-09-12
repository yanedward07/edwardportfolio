import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold text-white">Projects</h2>
      <div className="mt-10 space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={activeId === project.id}
            onToggle={() =>
              setActiveId((current) => (current === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </Section>
  )
}
