import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  { id: 'languages', category: 'Languages', items: ['TypeScript', 'Python', 'Go'] },
  { id: 'frontend', category: 'Frontend', items: ['React', 'Tailwind CSS', 'Framer Motion'] },
  { id: 'backend', category: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST / GraphQL'] },
  { id: 'tools', category: 'Tools', items: ['Git', 'Docker', 'CI/CD'] },
]
