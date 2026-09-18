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
    title: 'EVE Voice AI & Call Routing System',
    summary:
      'Built a call-intent routing system that automatically classifies every inbound call into one of four pipelines and moves contacts accordingly, no manual sorting required.',
    description: [
      "EVE is MedTech Wristbands' AI voice receptionist, handling inbound calls 24/7, including off-hours, weekends, and holidays. She answers FAQs, takes bookings, and captures new orders, and can hand off to a live rep when needed.",
      'When a call comes in, EVE classifies it into one of four types: complaint, existing order status, new order, or general inquiry, then a workflow automatically routes the contact into the matching pipeline. Complaints get flagged for an immediate customer service callback or live transfer if requested. Existing order calls are cross-referenced against Zoho to identify the rep responsible for that sales order, so the right person gets the callback with full context. New orders arrive with every field already collected, so a rep only needs one confirmation call before it goes to production, replacing what used to be back and forth emails and calls.',
      'I also built the consent capture system for outbound reorder reminders and promotions. Around 800 contacts have opted in, with their number, consent date, and a recording of their verbal confirmation all stored for compliance.',
      'Day to day, I use Claude connected directly to GoHighLevel through MCP to query pipeline activity conversationally, for example asking how many callers requested order status today, rather than manually digging through dashboards.',
    ],
    images: [
      {
        id: 'project-2-image-1',
        alt: 'EVE agent metrics dashboard',
        caption: 'Metrics dashboard',
      },
      {
        id: 'project-2-image-2',
        alt: 'Chart showing EVE conversation volume by hour of day',
        caption: 'Busiest hours chart',
      },
    ],
    tags: [
      'GoHighLevel',
      'Workflow Automation',
      'Zoho CRM',
      'Voice AI',
      'MCP / AI Tool Integration',
    ],
    links: [
      {
        id: 'project-2-link-1',
        label: 'MeetEve Link',
        url: 'https://medtechwristbands.com/eve/',
      },
    ],
  },
  {
    id: 'project-3',
    title: 'MedTech Multi-Agent Chatbot System',
    summary:
      'Built a three-agent chatbot system where EVE triages every conversation and routes it to the right specialist: Jessica for stock order checkout, or Luna for custom orders.',
    description: [
      "This system runs on the website's chat widget, built independently from the voice AI receptionist covered in the previous project, though the two happen to share the same name. Here, EVE plays the same triage role over chat: answering product, pricing, and shipping questions directly from the knowledge base, and identifying whether a customer wants a stock order or a custom order before handing off to the right specialist.",
      'Jessica handles stock order checkout through a flow-based system: a series of connected nodes, each requiring a specific field (size, color, quantity, contact and shipping details) before advancing, so no order reaches a rep with missing information.',
      "Luna guides customers through custom orders, either walking them through our Design Your Own form or collecting their details directly if they'd rather have a rep follow up. She also knows the full range of material, sizing, and service-level options so she can answer questions accurately as customers work through the process.",
      "When a customer gives an answer that doesn't match what a field expects, both Jessica and voice EVE respond the same way: ask again, this time listing the valid options directly, rather than repeating an open-ended question. If the customer still can't give a matching answer, the system doesn't keep looping, it moves on and flags that field for a rep to confirm. This ties into a broader safety net across the whole process: every order, regardless of how cleanly it was captured, gets a final human confirmation before it goes to production, so an unclear capture can never silently become a wrong order.",
    ],
    videos: [
      { id: 'project-3-video-1', caption: "Jessica's Flow Walkthrough" },
      {
        id: 'project-3-video-2',
        heading: 'Multi-Agent Chatbot in Action: EVE, Jessica, and Luna',
        caption:
          'A full live conversation showing EVE triaging the request, handing off to Jessica for a stock order, then to Luna for a custom design, end to end, exactly as a real customer would experience it.',
        youtube: { videoId: 'I19i90SXWs8' },
      },
    ],
    tags: [
      'GoHighLevel',
      'Conversation AI',
      'Prompt Engineering',
      'Multi-Agent Systems',
      'Workflow Automation',
    ],
  },
]
