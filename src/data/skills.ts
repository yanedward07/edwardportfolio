import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'outbound',
    category: 'Outbound & GTM',
    items: ['Instantly', 'GoHighLevel', 'ZeroBounce', 'Clay'],
  },
  {
    id: 'crm',
    category: 'CRM & Automation',
    items: ['Zoho CRM', 'Workflow automation', 'Lead routing', 'Nurture sequences'],
  },
  {
    id: 'ai',
    category: 'AI Systems',
    items: ['Voice AI', 'Chat agents', 'Prompt design', 'Knowledge bases', 'Human handoff'],
  },
  {
    id: 'data',
    category: 'Data & Targeting',
    items: ['List building', 'Enrichment', 'Segmentation', 'ICP targeting', 'Email verification'],
  },
  {
    id: 'campaigns',
    category: 'Campaigns',
    items: ['Customer reactivation', 'Cold outbound', 'Product launches', 'Offer testing'],
  },
  {
    id: 'technical',
    category: 'Technical Familiarity',
    items: ['APIs', 'Supabase', 'Basic SQL'],
  },
]
