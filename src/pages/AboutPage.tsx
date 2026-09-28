import { PageHeader, PageShell } from '../components/PageShell'
import { skillGroups } from '../data/skills'

export function AboutPage() {
  return (
    <PageShell>
      <PageHeader title="About" />

      <div className="space-y-6 text-lg leading-[1.75] text-bark-600 dark:text-bark-400">
        <p>
          I'm Edward Yan, an engineering student at Western University who ended
          up becoming much more interested in the problem that happens after
          something gets built: how do you actually get it into customers' hands?
        </p>
        <p>
          I started at Starship Solutions, MedTech Wristbands' internal AR, VR,
          and AI venture, where I built the company's Webflow site and led six
          live WebAR activations using 8th Wall. One of those projects was later
          featured by 8th Wall on its official blog.
        </p>
        <p>
          When 8th Wall was discontinued, I moved into MedTech Wristbands' core
          business and started building systems around its sales process.
        </p>
        <p>
          On the outbound side, I built and operated customer reactivation and
          cold outreach systems using Instantly, GoHighLevel, ZeroBounce, CRM
          workflows, and multiple sending inboxes. Historical customers could be
          contacted automatically, followed up with, and surfaced to their account
          rep once they showed real reorder intent. I also ran targeted campaigns
          for new products and markets, from World Cup wristbands for
          sports-related buyers to current outreach targeting Canadian municipalities.
        </p>
        <p>
          On the inbound side, I built AI systems for both phone and web. EVE
          handles inbound calls 24/7, identifies why someone is calling, collects
          information, and routes the request into the right workflow or sales
          rep. On the website, EVE, Jessica, and Luna handle FAQs, stock orders,
          and custom-order qualification across MedTech's Canadian and US brands.
        </p>
        <p>
          What I've become interested in is the system connecting all of this
          together: finding the right customer, reaching them with the right
          message, recognizing intent, moving that information through the CRM,
          and bringing a salesperson in when human judgment or relationships
          matter.
        </p>
        <p>
          That's why I now think of my work as GTM engineering. I use automation,
          AI, data, and sales tooling to build the infrastructure around how a
          company gets and handles customers.
        </p>
        <p>
          I'm looking to bring that builder-and-operator approach to an
          early-stage US startup, where I can work close to the founders, understand the
          GTM bottleneck, and help build the system around it.
        </p>
      </div>

      <section className="mt-20 border-t border-espresso-900/10 pt-14 dark:border-oat-100/10">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso-900 dark:text-oat-50">
          Skills
        </h2>
        <div className="mt-10 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.id} className="sm:flex sm:gap-8">
              <h3 className="w-48 shrink-0 font-display text-lg font-semibold text-honey-600 dark:text-honey-400">
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
