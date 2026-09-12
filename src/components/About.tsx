import { Section } from './Section'

export function About() {
  return (
    <Section id="about">
      <h2 className="text-3xl font-bold text-white">About</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
        I'm Edward Yan, currently studying a double degree in Civil Engineering and AI
        Systems Engineering at Western University. Along the way, I saw how fast AI and
        automation were reshaping how real businesses operate, and I wanted to be building
        with it, not just reading about it.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
        That pull led me to Starship Solutions, an internal AR, VR, and AI venture at
        MedTech Wristbands, where I built the company's website on Webflow and led the
        creation of six live AR experiences using 8th Wall with little prior coding
        background. My AR work was recognized directly by the platform itself, featured in
        8th Wall's official blog.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
        When the underlying AR tool I was using got discontinued, I moved into MedTech
        Wristbands' core operations. There, I built a full AI customer intake system. On
        the chat side, EVE acts as the receptionist, handling FAQs, customer service, and
        bookings, then hands off to one of two specialized agents: Jessica, a flow-based
        bot for straightforward stock wristband orders, or Luna, who guides customers
        through custom designs and can even interpret uploaded images to help guide the
        process. On the phone side, a voice version of EVE handles everything from
        reception to order intake to transferring calls to the right department. We're now
        collecting consent to build a large enough customer database to launch outbound AI
        calling for reorder reminders and promotions.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
        Alongside that, I built the company's cold outbound infrastructure, including
        domain setup and bulk email systems, automating roughly 90% of what sales reps
        used to do by hand. I also ran growth-style campaigns using customer behavior and
        seasonal timing to guide outreach, matching product positioning to what different
        industries actually needed. When FIFA created a wave of demand around customizable
        team gear, I helped build a Soccermania wristband line to meet it.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
        I've picked up most of this through hands-on execution and AI-assisted development
        rather than formal training. I'm looking to keep building inside a team working on
        real AI products, wherever that opportunity takes shape.
      </p>
    </Section>
  )
}
