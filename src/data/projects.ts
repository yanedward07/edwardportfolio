import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Starship Solutions AR Activations',
    summary:
      "Built Starship Solutions' website and led creation of 6 live AR wristband experiences, recognized by 8th Wall's official blog.",
    description: [
      "Starship Solutions is MedTech Wristbands' internal AR/VR/AI venture. I built the company's website in Webflow, then led the pivot to augmented reality, creating 6 live WebAR experiences in 8th Wall for wristband activations across food & beverage, events, sponsorships, and brand-intro use cases (customer scans a QR code, the camera recognizes the physical wristband as a trigger, and the AR effect plays directly on their phone).",
      'Working from a template with little prior coding background, I used AI-assisted development to write and adapt the animation logic, then continuously prompt-engineered and field-tested to refine it. Image target tracking required careful attention to marker color contrast and outdoor lighting. I ran repeated tests at live events to make sure activations held up reliably outdoors, not just in a controlled setting.',
      "This work was recognized directly by 8th Wall, featured in the platform's official blog post on their AI-powered Asset Lab tool.",
    ],
    tags: [
      'Webflow',
      '8th Wall',
      'HTML',
      'JavaScript',
      'A-Frame',
      'Image Target Tracking',
      'Prompt Engineering',
    ],
    videos: [
      {
        id: 'project-1-video-1',
        caption: 'Prize Drop',
        vimeo: { videoId: '1114292602', aspectRatio: '100 / 171.67' },
      },
      {
        id: 'project-1-video-2',
        caption: 'Solar System',
        vimeo: { videoId: '1115216100', hash: '4d84f6d81e', aspectRatio: '592 / 1014' },
      },
      {
        id: 'project-1-video-3',
        caption: 'Smash Burger',
        vimeo: { videoId: '1114951472', aspectRatio: '100 / 169.44' },
      },
      {
        id: 'project-1-video-4',
        caption: 'Cyber Halo',
        vimeo: { videoId: '1114256956', hash: '915448f80b', aspectRatio: '100 / 170.21' },
      },
      {
        id: 'project-1-video-5',
        caption: 'Pop Launch',
        vimeo: { videoId: '1114951444', aspectRatio: '100 / 169.81' },
      },
      {
        id: 'project-1-video-6',
        caption: 'Rocket Intro',
        vimeo: { videoId: '1115213830', aspectRatio: '100 / 170.21' },
      },
    ],
    links: [
      {
        id: 'project-1-link-1',
        label: 'Starship Solutions site',
        url: 'https://www.starshipsolutions.ca/',
      },
      {
        id: 'project-1-link-2',
        label: 'AR gallery',
        url: 'https://www.starshipsolutions.ca/gallery',
      },
      {
        id: 'project-1-link-3',
        label: '8th Wall blog post',
        url: 'https://info.nianticspatial.com/blog/show-us-your-assets-how-creators-are-building-with-8th-walls-asset-lab',
      },
    ],
  },
  {
    id: 'project-2',
    title: 'Placeholder Project Two',
    summary: 'One-line placeholder summary of what this project does.',
    description: [
      'Longer placeholder description covering the technical approach, stack, and notable challenges solved. Replace with real project detail later.',
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'project-3',
    title: 'Placeholder Project Three',
    summary: 'One-line placeholder summary of what this project does.',
    description: [
      'Longer placeholder description covering the technical approach, stack, and notable challenges solved. Replace with real project detail later.',
    ],
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
  },
]
