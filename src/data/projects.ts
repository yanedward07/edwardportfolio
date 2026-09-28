import eveVoiceAiMetrics from '../assets/images/eve-metrics/eve-voice-ai-metrics.png'
import type { Project } from '../types/content'

// Order is the story: generate demand, handle inbound demand, automate
// qualification, then the broader building work.
export const projects: Project[] = [
  {
    id: 'project-4',
    accent: 'honey',
    title: 'Outbound & Customer Reactivation System',
    summary:
      'Built and operated the outbound and customer reactivation system that sourced prospects, verified contact data, automated follow-up, detected buying intent, and handed high-intent customers back to sales.',
    problem:
      'MedTech had years of historical customer accounts but only five current sales reps. Reorder outreach meant manually working through large customer lists while also trying to prospect into new markets. I built a system that automated the repetitive part of that process and surfaced customers once they showed real buying intent.',
    built:
      'One outbound system running three motions on shared sending infrastructure: reactivating historical customers, acquiring new ones, and launching campaigns for new products and markets. Automation handles the sourcing, verification, sending, and follow-up. A rep steps in once a customer shows intent.',
    howItWorks: [
      {
        label:
          'Customer reactivation',
        text:
          "Active, recapture, and retention lists are verified, then worked through automated sequences sent across a rotation of warmed inboxes on the sales reps' own addresses. Every call to action carries a trigger link, so a customer who engages enters a follow-up workflow and moves through the pipeline on their own. Once they show reorder intent, they are handed back to the rep who owns the relationship.",
      },
      {
        label:
          'New customer acquisition',
        text:
          "New contacts come from Instantly's SuperSearch and purchased databases, segmented by industry (fairs and festivals, theme parks, sports, food and beverage, K-12 schools, and hospitals) and verified through ZeroBounce before anything is sent. Cold campaigns go out from a secondary sending domain with plain formatting and no link tracking, since both are common spam-filter triggers.",
      },
      {
        label:
          'Campaigns and product launches',
        text:
          'Targeted campaigns tied to real demand, each with its own sourced list and positioning:',
        points: [
          'Soccermania: when the World Cup created a wave of interest in customizable team gear, I sourced a database of sports bars and related venues and launched a Soccermania wristband campaign into it within the demand window.',
          'UV glow: the same approach for a first-to-market glow-in-the-dark UV line, targeting nightclubs, bars, and night-event venues with use-case-specific campaigns.',
          'Custom Designer: A/B tested campaigns promoting the online customization tool for custom orders. The first version had no offer and the second added 10% off; the 10% off version drew higher engagement and results.',
          "Canadian municipalities: a separate B2G motion under the Rizbands brand, aimed at clerks' offices, recreation departments, and facilities teams.",
        ],
      },
    ],
    outcome:
      'Across recapture, cold, and launch campaigns the system sent thousands of emails and drew hundreds of engaged replies. The recapture campaigns surfaced roughly 400 positive reorder-intent opportunities, each handed to the rep who owns the account rather than found by hand.',
    learned:
      "Automation works best on the repetitive part of prospecting: sourcing, verifying, sending, and following up. The rep's time is worth the most once a customer has shown genuine buying intent, so that is where the handoff belongs.",
    details: [
      "For deliverability, I set up a secondary sending domain, purchased and warmed up a rotation of inboxes through Instantly to build sender reputation, and used Instantly's inbox rotation to distribute recapture emails across our sales reps' addresses, automating what used to be manual, one-by-one reorder outreach. Cold and GTM campaigns deliberately skip link tracking and rich formatting, since both are common spam-filter triggers, engagement tracking lives on the warmer, in-house side instead, where deliverability risk is lower. For new external contacts sourced through Instantly's SuperSearch and purchased databases, I ran every list through ZeroBounce before sending to keep bounce rates low and protect domain reputation.",
      "For the Rizbands municipal motion, the positioning was built around their actual objections: locked-in multi-year pricing to remove budget-cycle risk, explicit acceptance of purchase orders and Net-30 terms, and self-service portal codes per municipality so reordering doesn't require re-quoting.",
      'I track engagement and campaign performance throughout, adjusting targeting and messaging based on what the metrics actually show.',
    ],
    tags: [
      'Instantly',
      'GoHighLevel',
      'ZeroBounce',
      'Customer Reactivation',
      'Cold Outbound',
      'Workflow Automation',
      'A/B Testing',
      'GTM Strategy',
    ],
  },
  {
    id: 'project-2',
    accent: 'felt',
    title: 'EVE Voice AI & Inbound Routing',
    summary:
      'An AI voice receptionist that answers every inbound call 24/7, works out why someone is calling, collects what the team needs, and routes the request to the right workflow or rep.',
    problem:
      'Inbound calls come in well outside business hours, and the ones that did get answered still had to be sorted by hand before anyone could act on them: a complaint, an order status check, a new order, or a general question all landed in the same place.',
    built:
      "EVE is MedTech Wristbands' AI voice receptionist, handling inbound calls 24/7, including off-hours, weekends, and holidays. She answers FAQs, takes bookings, and captures new orders. Every call is classified into one of four types, and a workflow routes the contact into the matching pipeline.",
    howItWorks: [
      {
        label:
          'Complaint',
        text:
          'Flagged for an immediate customer service callback, or a live transfer if the caller asks for one.',
      },
      {
        label:
          'Existing order',
        text:
          'Cross-referenced against Zoho to find the rep responsible for that sales order, so the right person calls back with full context.',
      },
      {
        label:
          'New order',
        text:
          'Arrives with every field already collected, so a rep needs one confirmation call before it goes to production, replacing the old back and forth over email and phone.',
      },
      {
        label:
          'General inquiry',
        text:
          'Answered on the call where EVE can, and routed into its own pipeline for follow-up where she cannot.',
      },
      {
        label:
          'Human handoff',
        text:
          'EVE does the repetitive intake: identifying intent, collecting details, and moving the contact through the workflow. Customer service and sales come in for judgment and relationships, with the context already gathered.',
      },
    ],
    outcome:
      'Over three months EVE handled 531 conversations and reached 270 contacts, answering in 4.78 seconds on average, with real inbound orders coming through the new-order path.',
    learned:
      "AI earns its place by taking intake and routing work off the team and preparing a clean handoff, not by trying to replace a salesperson's judgment.",
    details: [
      'I also built the consent capture system for outbound reorder reminders and promotions. Around 600 contacts have opted in, with their number, consent date, and a recording of their verbal confirmation all stored for compliance.',
      'Day to day, I use Claude connected directly to GoHighLevel through MCP to query pipeline activity conversationally, for example asking how many callers requested order status today, rather than manually digging through dashboards.',
    ],
    images: [
      {
        id: 'project-2-image-1',
        src: eveVoiceAiMetrics,
        alt: "EVE voice AI dashboard showing 531 conversations handled, 270 contacts reached, a 4.78 second average response time, and a bar chart of conversation volume by hour of day",
        caption: 'EVE voice AI, last 3 months',
        summary:
          'The volume chart is the part that matters: the heaviest hours run from late afternoon into the evening and trail past midnight, well outside the hours anyone is staffing the phones. Those are the calls that used to hit voicemail.',
      },
    ],
    tags: [
      'Voice AI',
      'GoHighLevel',
      'Zoho CRM',
      'Workflow Automation',
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
    accent: 'wine',
    title: 'Multi-Agent Website Intake & Order Qualification',
    summary:
      'A three-agent website chat system where EVE triages every conversation and hands it to the right specialist: Jessica for stock orders, or Luna for custom orders.',
    problem:
      "Before this system, every order started with manual back-and-forth, a rep collecting size, color, quantity, shipping, and contact details over email or phone before any real conversation about pricing or timeline could happen. Now, EVE, Jessica, and Luna capture all of that upfront, 24/7, including nights, weekends, and holidays, so a customer's full order is already sitting in the CRM before a rep is even involved. For a B2B company where large custom orders often still need a human to quote and confirm, this changes what a rep's day actually looks like, less time chasing basic information, more time on the parts of the sale that actually need a person: pricing negotiation, relationship building, and closing.",
    built:
      "A chat system on the website widget across MedTech's Canadian and US brands, where three agents split the work of answering questions and qualifying orders, and a person still confirms every order before it goes to production.",
    howItWorks: [
      {
        label:
          'EVE: Triage',
        text:
          'Answers product, pricing, and shipping questions from the knowledge base, then works out whether the customer wants a stock order or a custom order and hands off to the right specialist.',
      },
      {
        label:
          'Jessica: Stock orders',
        text:
          'Collects structured order information and saves each answer straight to a CRM field. Handles corrections by going back to the exact field that changed, and flags unclear fields for a rep instead of looping.',
      },
      {
        label:
          'Luna: Custom orders',
        text:
          'Guides customers based on material and routes them to the right path: a self-serve Design Studio page, the Design Your Own form, or details collected in chat for a rep to follow up on.',
      },
      {
        label:
          'Human confirmation',
        text:
          'Every order still gets checked by a person before production, so an unclear capture can never silently become a wrong order.',
      },
    ],
    outcome:
      "Real customers use it for intake and ordering across MedTech's Canadian and US sites, so orders reach the CRM with the details already collected before a rep gets involved.",
    learned:
      "When automation is collecting information that goes straight into production, structure matters: defined fields, rules the AI can't skip, and a human check at the end.",
    details: [
      "This system runs on the website's chat widget, built independently from the voice AI receptionist covered in the previous project, though the two happen to share the same name. EVE plays the same triage role over chat: answering product, pricing, and shipping questions directly from the knowledge base, then identifying whether a customer wants a stock order or a custom order before handing off to the right specialist.",
      "Jessica handles stock orders through GoHighLevel's flow-based builder, the most advanced of its three chatbot builder tiers. Every step is a fully configured node: an objective telling the AI exactly what to ask, a direct mapping to a CRM field so the answer saves automatically, and business rules the AI can't skip, like requiring a field to be asked even if it looks already known. If a customer gives an answer that doesn't fit, the flow doesn't just repeat the question, it lists the valid options directly, and if it still doesn't land, it moves on and flags that field for a rep instead of looping. If a customer corrects something at the final summary, Jessica routes back to the exact field that changed rather than restarting the order.",
      "Luna guides customers through custom orders, and routes them differently depending on material. For Tyvek, Plastic, Vinyl, or Silicone, she can send the customer directly to a self-serve Design Studio page to design and check out on their own. For materials without a Design Studio page (Fabric, Lanyard, Credentials, Cloth, Cashless/RFID), she routes to our existing Design Your Own form. And for anyone who'd rather skip either tool, she collects material, size, quantity, and logo directly in chat for a rep to follow up on. She knows the full range of materials, sizing, and service-level options so she can answer accurately mid-process, regardless of which path a customer takes.",
    ],
    videos: [
      {
        id: 'project-3-video-1',
        heading: "Jessica's Flow Walkthrough",
        caption:
          'A look inside the stock-order flow node by node: the objective set at each step, the CRM field the answer writes to, and the rules that stop it skipping a field or looping on a bad answer.',
        youtube: { videoId: 'KhZ2H9LrHWE' },
      },
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
      'Multi-Agent Systems',
      'Prompt Engineering',
      'Workflow Automation',
    ],
  },
  {
    id: 'project-1',
    accent: 'bark',
    title: 'Starship Solutions AR Activations',
    summary:
      "Built Starship Solutions' website and led creation of 6 live AR wristband experiences, recognized by 8th Wall's official blog.",
    built:
      "Six live WebAR wristband activations in 8th Wall for Starship Solutions, MedTech Wristbands' internal AR, VR, and AI venture. It was unfamiliar technology and I had little prior coding background, so I learned it by building: AI-assisted development for the animation logic, then repeated field tests at live events until the activations held up reliably outdoors.",
    outcome:
      "Six live activations across food and beverage, events, sponsorships, and brand intros, and an official feature on 8th Wall's blog about its AI-powered Asset Lab tool.",
    learned:
      "Something that works in a controlled setting won't necessarily hold up at a live event. Fast iteration and testing in the field are what made these reliable.",
    details: [
      "Starship Solutions is MedTech Wristbands' internal AR/VR/AI venture. I built the company's website in Webflow, then led the pivot to augmented reality, creating 6 live WebAR experiences in 8th Wall for wristband activations across food & beverage, events, sponsorships, and brand-intro use cases (customer scans a QR code, the camera recognizes the physical wristband as a trigger, and the AR effect plays directly on their phone).",
      'Working from a template with little prior coding background, I used AI-assisted development to write and adapt the animation logic, then continuously prompt-engineered and field-tested to refine it. Image target tracking required careful attention to marker color contrast and outdoor lighting. I ran repeated tests at live events to make sure activations held up reliably outdoors, not just in a controlled setting.',
    ],
    tags: [
      '8th Wall',
      'Webflow',
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
    id: 'project-5',
    accent: 'felt',
    title: 'FlexTask Student Task Marketplace',
    summary:
      'Built a two-sided marketplace for campus task work end to end, with identity verification and Postgres row-level security enforcing every access rule, then shelved it when the cold start turned out to be harder than the engineering.',
    built:
      'FlexTask let someone post a local task, snow shoveling, pet sitting, help moving furniture, with a budget, a time window, a location and a headcount, and let verified students apply to it. The poster reviewed each applicant against their profile, completed-task count and past reviews, accepted one, and the two carried on in an in-app conversation with realtime messaging and unread counts. Behind that sat an admin console: platform metrics, a queue for reviewing identity documents, account suspension, task moderation and an append-only audit log of every admin action.',
    outcome:
      'It never launched. The product worked: someone could post a task, a verified student could apply, and the two of them could message each other through it. What I could not solve was the cold start. A two-sided marketplace is only useful once both sides are already on it, and on a single campus I had no way to bring posters in for an empty pool of taskers, or taskers in for an empty pool of tasks.',
    learned:
      'This is the one I learned the most from. I had treated distribution as something to work out once the product was finished, and that was the wrong order. It is the reason I now start with how something reaches people rather than only whether I can build it.',
    details: [
      "There is no backend server in it. The browser talks to Postgres directly through Supabase, which makes row-level security the only thing standing between a user and someone else's data, so that is where every access rule lives, across 33 migrations and 83 policies. Participation is gated on verification: a new account can look around but cannot act until an admin approves a government ID or a student ID, which promotes it to poster, tasker or both. Uploading a document and approving one are deliberately separate permissions, so a user can submit their own pending application but only an admin can move it to approved.",
      'The hardest part was recursion inside those policies. A policy on the user profiles table that queried the same table to check whether the caller was an admin would re-enter the table it was guarding and stall the planner. The fix was moving those checks into SECURITY DEFINER functions that run outside row-level security, so a policy never re-enters the table it protects. Several migrations in the repo are named after that fight.',
      'I came back to the codebase a year later and brought it up to standard: fixed the bugs that had accumulated, got the type checker and linter passing clean, and wrote the missing migration for a table that had only ever existed in the Supabase dashboard, so the project can now rebuild its own database from the repo.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Row-Level Security',
      'Authentication',
      'Tailwind CSS',
      'Vite',
    ],
    links: [
      {
        id: 'project-5-link-1',
        label: 'GitHub repo',
        url: 'https://github.com/yanedward07/flextask',
      },
    ],
  },
]
