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
    highlight:
      "Before this system, every order started with manual back-and-forth, a rep collecting size, color, quantity, shipping, and contact details over email or phone before any real conversation about pricing or timeline could happen. Now, EVE, Jessica, and Luna capture all of that upfront, 24/7, including nights, weekends, and holidays, so a customer's full order is already sitting in the CRM before a rep is even involved. For a B2B company where large custom orders often still need a human to quote and confirm, this changes what a rep's day actually looks like, less time chasing basic information, more time on the parts of the sale that actually need a person: pricing negotiation, relationship building, and closing.",
    descriptionHeading: 'How it works',
    description: [
      "This system runs on the website's chat widget, built independently from the voice AI receptionist covered in the previous project, though the two happen to share the same name. EVE plays the same triage role over chat: answering product, pricing, and shipping questions directly from the knowledge base, then identifying whether a customer wants a stock order or a custom order before handing off to the right specialist.",
      "Jessica handles stock orders through GoHighLevel's flow-based builder, the most advanced of its three chatbot builder tiers. Every step is a fully configured node: an objective telling the AI exactly what to ask, a direct mapping to a CRM field so the answer saves automatically, and business rules the AI can't skip, like requiring a field to be asked even if it looks already known. If a customer gives an answer that doesn't fit, the flow doesn't just repeat the question, it lists the valid options directly, and if it still doesn't land, it moves on and flags that field for a rep instead of looping. If a customer corrects something at the final summary, Jessica routes back to the exact field that changed rather than restarting the order.",
      "Luna guides customers through custom orders, and routes them differently depending on material. For Tyvek, Plastic, Vinyl, or Silicone, she can send the customer directly to a self-serve Design Studio page to design and check out on their own. For materials without a Design Studio page (Fabric, Lanyard, Credentials, Cloth, Cashless/RFID), she routes to our existing Design Your Own form. And for anyone who'd rather skip either tool, she collects material, size, quantity, and logo directly in chat for a rep to follow up on. She knows the full range of materials, sizing, and service-level options so she can answer accurately mid-process, regardless of which path a customer takes.",
      'Every order, regardless of how cleanly it was captured, still gets a final human confirmation before production, so an unclear capture can never silently become a wrong order.',
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
  {
    id: 'project-4',
    title: 'Cold Outbound & Growth Infrastructure',
    summary:
      "Built MedTech's entire outbound infrastructure from the ground up, deliverability, database sourcing, and automated nudge workflows, to turn cold and recaptured contacts into tracked, closable pipeline.",
    highlight:
      'Before this, reorder outreach and new customer acquisition meant sales reps manually emailing contacts one by one, with no reliable way to track who actually engaged. Now, every in-house campaign runs through tracked links and automated workflows that surface real buying intent, so reps spend their time closing warm leads instead of guessing who to follow up with. The same infrastructure also let MedTech move fast on time-sensitive opportunities, launching a fully targeted campaign into a new market within a live demand window, rather than missing it while building a list from scratch.',
    descriptionHeading: 'How it works',
    description: [
      'I built HTML campaigns in GoHighLevel targeting three in-house segments, active, recapture, and retention databases, with promotions, discount offers, and new product announcements. Every CTA carries a trigger link, so when someone engages, they automatically enter a workflow that nudges them with follow-up emails and moves them through the pipeline without a rep needing to track it manually.',
      'On the acquisition side, I ran go-to-market campaigns tied to real-world demand. When FIFA created a wave of interest in customizable team gear, I procured a database of sports bars and related venues and launched a Soccermania wristband campaign into it. I did the same for a glow-in-the-dark UV wristband line, sourcing a database of nightclubs, bars, and night-event venues and building use-case-specific campaigns for that industry.',
      "I also built and ran a separate B2G motion under our Rizbands brand, targeting Canadian municipalities, clerks' offices, recreation departments, and facilities teams, with positioning built around their actual objections: locked-in multi-year pricing to remove budget-cycle risk, explicit acceptance of purchase orders and Net-30 terms, and self-service portal codes per municipality so reordering doesn't require re-quoting.",
      "For deliverability, I set up a secondary sending domain, purchased and warmed up a rotation of inboxes through Instantly to build sender reputation, and used Instantly's inbox rotation to distribute recapture emails across our sales reps' addresses, automating what used to be manual, one-by-one reorder outreach. Cold and GTM campaigns deliberately skip link tracking and rich formatting, since both are common spam-filter triggers, engagement tracking lives on the warmer, in-house side instead, where deliverability risk is lower. For new external contacts sourced through Instantly's SuperSearch and purchased databases, I ran every list through ZeroBounce before sending to keep bounce rates low and protect domain reputation.",
      'This infrastructure has sent thousands of outreach emails across recapture, cold, and GTM campaigns, generating hundreds of engaged replies and over 400 tracked opportunities.',
      'I track engagement and campaign performance throughout, adjusting targeting and messaging based on what the metrics actually show.',
    ],
    tags: [
      'Instantly',
      'Deliverability',
      'GoHighLevel',
      'Workflow Automation',
      'Cold Outbound',
      'GTM Strategy',
    ],
  },
]
