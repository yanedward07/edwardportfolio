import { PageHeader, PageShell } from '../components/PageShell'
import { skillGroups } from '../data/skills'

export function AboutPage() {
  return (
    <PageShell>
      <PageHeader title="About" />

      <div className="space-y-6 text-lg leading-[1.75] text-bark-600 dark:text-bark-400">
        <p>
          I'm Edward Yan, currently studying a double degree in Civil Engineering and AI
          Systems Engineering at Western University in Canada. Along the way, I saw how fast AI and
          automation were reshaping how real businesses operate, and I wanted to be building
          with it, not just reading about it.
        </p>
        <p>
          That pull led me to Starship Solutions, an internal AR, VR, and AI venture at
          MedTech Wristbands, where I built the company's website on Webflow and led the
          creation of six live AR experiences using 8th Wall with little prior coding
          background. My AR work was recognized directly by the platform itself, featured in
          8th Wall's official blog.
        </p>
        <p>
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
        <p>
          Alongside that, I built the company's entire cold outbound infrastructure from
          the ground up, secondary sending domains, warmed-up inbox rotations through
          Instantly, ZeroBounce verification for new lists, and tracked-link workflows that
          automatically nudge engaged leads through the pipeline, automating roughly 90% of
          what sales reps used to do by hand. I ran growth campaigns tied to real demand,
          from a Soccermania wristband line during the World Cup to glow-in-the-dark UV
          wristbands targeted at nightlife venues, sourcing the databases, building the
          outreach, and adjusting based on what the engagement data showed.
        </p>
        <p>
          I've picked up most of this through hands-on execution and AI-assisted development
          rather than formal training. I'm looking to bring that same builder-and-seller
          approach to a team's go-to-market engine, wherever that opportunity takes shape.
        </p>
      </div>

      <section className="mt-20 border-t border-espresso-900/10 pt-14 dark:border-oat-100/10">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso-900 dark:text-oat-50">
          Skills
        </h2>
        <div className="mt-10 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.id} className="sm:flex sm:gap-8">
              <h3 className="w-36 shrink-0 font-display text-lg font-semibold text-honey-600 dark:text-honey-400">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2 sm:mt-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-espresso-900/12 px-3 py-1 text-sm text-bark-600 dark:border-oat-100/12 dark:text-bark-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
