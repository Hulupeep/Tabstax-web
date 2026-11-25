import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "pocket-is-dead-vendor-risk",
  title: "Pocket Is Dead: Why Vendor Risk Is Now the Default Assumption",
  seoTitle: "Pocket Shut Down: Lessons for Read-It-Later Tool Users in 2026",
  seoDescription:
    "Pocket shut down on July 8, 2025. Here's what the timeline taught us about vendor risk with free tools — and how to export your data from whatever you're using now before it's too late.",
  date: "2026-02-13",
  author: "Colm Byrne",
  kicker: "Vendor Risk",
  excerpt:
    "Pocket shut down in July 2025. The lesson isn't to panic. The lesson is to treat every free tool you depend on as a possible sunset, and build your workflows accordingly.",
  keywords: [
    "pocket shut down",
    "pocket export data",
    "pocket alternatives after shutdown",
    "vendor risk software",
    "read it later alternatives",
    "pocket mozilla shutdown",
  ],
  faq: [
    {
      q: "When did Pocket shut down?",
      a: "Mozilla announced the discontinuation of Pocket in April 2025. The app was removed from app stores on May 22, 2025, and the service fully shut down on July 8, 2025. Users had a short window to export their data.",
    },
    {
      q: "How do I export my Pocket data?",
      a: "If you still have access to an existing Pocket account (via a browser-stored session), you can attempt to access the export tool at getpocket.com/export. However, as of July 8, 2025, Pocket is fully shut down and this may no longer be possible for most users.",
    },
    {
      q: "What are the best Pocket alternatives in 2026?",
      a: "Strong alternatives include Readwise Reader (paid, full-featured), Omnivore (free, open source, self-hostable), Instapaper (free tier, long-running), and Matter (good for newsletters). For context preservation rather than article archiving, HeyStax serves a different but related need.",
    },
    {
      q: "Why did Mozilla shut down Pocket?",
      a: "Mozilla cited a focus shift away from non-core products. Pocket had been free for years with a premium tier that likely didn't generate enough revenue to justify ongoing development and infrastructure costs. The shutdown is consistent with a pattern of free consumer products being discontinued when they don't achieve sustainable revenue.",
    },
    {
      q: "What is vendor risk for software tools?",
      a: "Vendor risk is the possibility that a tool you depend on will change its pricing, reduce its capabilities, or shut down entirely — and the disruption that causes to your workflow. With free tools especially, the risk is elevated because the product's existence depends on monetization paths that may not materialize.",
    },
    {
      q: "What is local-first software and why does it matter?",
      a: "Local-first software stores your data on your own device first, with cloud sync as an enhancement rather than a requirement. If the cloud service shuts down, your data persists locally. This makes local-first tools significantly more resilient to vendor risk compared to tools that only store data server-side.",
    },
  ],
  content:
    "## The Timeline\n\n" +
    "April 2025: Mozilla announces Pocket is being discontinued.\n\n" +
    "May 22, 2025: Pocket is removed from app stores. No new downloads. No new accounts.\n\n" +
    "July 8, 2025: \"Pocket shut down… July 8, 2025.\" The service goes dark. Years of saved articles, hundreds of thousands of bookmarks, reading histories stretching back to 2012 — inaccessible.\n\n" +
    "If you had an active Pocket account and didn't export your data during the roughly six-week window between announcement and shutdown, your bookmarks are gone.\n\n" +
    "This is not a hypothetical scenario about vendor risk. It's a documented case study that finished playing out less than a year ago. And the lesson it contains is not optional reading for anyone who builds their information workflow on free consumer tools.\n\n" +
    "## What Pocket Was, and Why People Trusted It\n\n" +
    "Pocket launched in 2007 as Read It Later, rebranded in 2012, and was acquired by Mozilla in 2017. For most of its existence, it was the most widely recommended read-it-later tool in the world. It was integrated directly into Firefox. It was free with a reasonable premium tier. It had broad platform support — iOS, Android, web, browser extensions for Chrome, Firefox, Safari, and Edge.\n\n" +
    "Mozilla's acquisition gave Pocket an air of institutional permanence that newer, venture-backed startups couldn't claim. Mozilla is the organization behind Firefox. They're a non-profit. They care about the open web. This felt like a guarantee.\n\n" +
    "It wasn't.\n\n" +
    "Mozilla's non-profit status doesn't change the economics of running a consumer product at scale. Pocket required ongoing engineering, infrastructure, customer support, and development. If the revenue — primarily from the premium tier and from content recommendations — doesn't cover those costs and justify the organizational investment, the product becomes a liability.\n\n" +
    "The announcement didn't reveal the internal economics. But the pattern is familiar: a free consumer product acquired by a larger organization, maintained without significant new development, and eventually shut down when it no longer fits the portfolio or the budget.\n\n" +
    "## What the Shutdown Taught Us About Free Tools\n\n" +
    "The Pocket shutdown isn't unique. Google Reader shut down in 2013, taking RSS reading workflows with it. Google+ shut down in 2019. Google Stadia, Allo, Inbox, Spaces, Google Play Music — the list of discontinued Google products is long enough to have its own Wikipedia article and its own satirical graveyard website.\n\n" +
    "The pattern is consistent enough that it should now be the default assumption: if a tool is free and operated by a company that has other priorities, it is a candidate for shutdown. Not certain to be shut down. But the risk is real and should be factored into workflow design.\n\n" +
    "This doesn't mean you should never use free tools. That would be absurd. It means you should use free tools with an awareness of their fragility, and build your workflows in ways that are resilient to their disappearance.\n\n" +
    "The principles are:\n\n" +
    "**Local-first where possible.** Tools that store your data on your device first — with cloud as an optional enhancement — survive vendor shutdowns better. Your data is on your machine. The cloud service disappearing doesn't mean your data disappears.\n\n" +
    "**Exportable data.** Before you invest months of workflow into a tool, verify that you can export your data in a useful format. A CSV or JSON export isn't exciting, but it's the difference between a migration and a data loss event when the service shuts down.\n\n" +
    "**Open source options for critical infrastructure.** If you're building a workflow that you'll use daily for years, open source tools that you can self-host are more resilient than proprietary services. Omnivore, for example, is open source and self-hostable. If the hosted version ever shuts down, the option to run it yourself exists.\n\n" +
    "**Paid products tend to survive longer.** Not always — many paid products have been shut down. But a product with paying customers has an economic incentive to continue operating, and the shutdown of a paid service typically comes with more notice and better migration support than a free one.\n\n" +
    "## What to Export Right Now (From Whatever You're Using)\n\n" +
    "The Pocket window was six weeks. If you weren't paying attention, or if you had notifications off, or if you were traveling — you might have missed it.\n\n" +
    "Here's a quick export guide for the most common read-later tools:\n\n" +
    "**Instapaper:** Settings > Export. Produces a CSV file with URLs, titles, and timestamps. Not rich, but preserves your data.\n\n" +
    "**Readwise Reader:** Settings > Export. Multiple format options including CSV, Markdown, and structured JSON. Better than most.\n\n" +
    "**Omnivore:** Settings > Export. JSON format with full article content and highlights. Comprehensive.\n\n" +
    "**Matter:** Account Settings > Export Data. CSV of your saves.\n\n" +
    "**Raindrop.io:** Settings > Backup & Import. Full export in Raindrop's native format or HTML bookmarks format.\n\n" +
    "The recommendation: export from every tool you use and store the export somewhere you control (local drive, not another cloud service). Do this now. Put it on a quarterly reminder. Treat it as routine maintenance.\n\n" +
    "## The Sustainability Question\n\n" +
    "Pocket's shutdown raises a question that users of free tools rarely ask directly: where does the money come from?\n\n" +
    "Free consumer products need revenue to survive. The models are: advertising, premium tiers, acquisition by a larger company, or venture capital (which is a time-delayed version of \"eventual revenue or shutdown\"). When none of these models produce enough to sustain the product, the product shuts down.\n\n" +
    "Pocket's premium tier existed but didn't become the primary revenue driver. Mozilla's acquisition extended the product's life, but Mozilla's organizational priorities shifted. The math didn't work long enough.\n\n" +
    "When you evaluate a free tool for your workflow, asking \"how does this make money?\" is not cynical. It's prudent. A convincing answer — paid tiers with meaningful conversion, organic growth, a business model that aligns with the product's continued operation — is a positive signal. No convincing answer is a risk factor.\n\n" +
    "## Local-First as a Risk Mitigation Strategy\n\n" +
    "The local-first software movement has been building momentum for years, partly in response to exactly this kind of vendor risk. The principle is straightforward: your data should live on your device first, and cloud services should enhance rather than enable your workflow.\n\n" +
    "This isn't a new idea. The UNIX principle of plain text files has survived decades of format changes and vendor shutdowns precisely because the data is stored in a format that any text editor can open. Obsidian's markdown-based notes are readable in any text editor. Omnivore's open source design means the data model isn't proprietary.\n\n" +
    "Applied to read-later workflows: if the articles you save are cached locally, on your device, in a standard format, then the service shutting down means you lose a feature (cloud sync, cross-device access) but not your data.\n\n" +
    "This is the right mental model. Design workflows where the worst-case scenario is losing a convenience, not losing years of saved information.\n\n" +
    "## The After-Pocket Landscape\n\n" +
    "Pocket's users scattered after the shutdown. Forum threads from mid-2025 show migration discussions pointing in several directions. Readwise Reader picked up users who wanted a premium, full-featured product. Omnivore picked up users who wanted open source and free. Raindrop.io picked up link collection users. Some people went back to plain browser bookmarks.\n\n" +
    "The fragmentation is itself a data point. Pocket succeeded in part because it was a reliable, widely-supported default. When it disappeared, there was no obvious replacement because the market had developed several strong alternatives, each optimized for different aspects of the use case.\n\n" +
    "If you're building a new read-later workflow post-Pocket, the right choice depends on what you're actually optimizing for: article volume, annotation quality, cross-device sync, price, or resilience to future shutdowns. No single tool is best on all dimensions. The decision is a set of tradeoffs.\n\n" +
    "## Try HeyStax\n\n" +
    "HeyStax is local-first by design — your saved Stax (named collections of tabs with next actions) are stored in your browser's local storage first, with cloud sync as an optional enhancement for paid users. If the cloud service ever changed, your data would still be on your device. That's the kind of resilience the Pocket shutdown should make you appreciate. Try it at [https://heystax.ai](https://heystax.ai).",
};
