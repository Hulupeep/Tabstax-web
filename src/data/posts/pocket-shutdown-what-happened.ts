import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "pocket-shutdown-what-happened",
  title: "Pocket Is Gone: What Happened, What to Export, and What It Means for Your Workflow",
  seoTitle: "Pocket Shut Down: What Happened, How to Export, and What Comes Next",
  seoDescription: "Pocket shut down on July 8, 2025. Here's the full account of what happened, how to export your saved articles before the deadline, and what the shutdown reveals about read-it-later tools.",
  date: "2026-01-24",
  author: "Colm Byrne",
  kicker: "Vendor Risk",
  excerpt: "Pocket removed from app stores in May 2025, full shutdown July 8, 2025. Here's what actually happened, how to export your data, and what the backlog graveyard problem means for your workflow.",
  keywords: [
    "pocket shut down what happened",
    "pocket export data alternatives",
    "pocket alternative 2025",
    "pocket shutdown july 2025",
    "pocket read it later replacement",
  ],
  faq: [
    {
      q: "When did Pocket officially shut down?",
      a: "Pocket was removed from app stores on May 22, 2025, and the service fully shut down on July 8, 2025. Mozilla announced the closure citing a strategic decision to focus resources elsewhere.",
    },
    {
      q: "Can I still export my Pocket data after the shutdown?",
      a: "Mozilla provided an export window before July 8, 2025. If you missed that window, the data is no longer accessible through Pocket's servers. This is why local-first tools are worth considering.",
    },
    {
      q: "What is the 'backlog graveyard' problem?",
      a: "The backlog graveyard describes the pattern where saved articles accumulate faster than they are read. Users feel guilt about the growing queue rather than using the tool. Research on 'bookmark hoarding' behavior documents this well.",
    },
    {
      q: "What does 'local-first' mean for a browser extension?",
      a: "Local-first means your data lives on your own machine first, and cloud sync is an optional layer on top. If the cloud service shuts down, your data remains intact and accessible.",
    },
    {
      q: "How is HeyStax different from Pocket?",
      a: "Pocket was designed to capture articles for later reading. HeyStax is designed to save your active browser context — the specific combination of tabs you had open for a project — so you can return to the same work state without reconstructing it from memory.",
    },
  ],
  content:
    "## Pocket shut down\u2026 July 8, 2025.\n\n" +
    "That sentence lands differently depending on how long you used it. For some people, Pocket was a light habit: clip an article on the bus, maybe read it later, forget about it. For others, it was infrastructure. Years of saved links. Curated reading queues. A system they had built their information diet around. When Mozilla pulled the plug, those two groups had very different experiences of the same event.\n\n" +
    "This post covers what happened, what you can do if you still have data stuck in Pocket's ecosystem, and what the shutdown reveals about a deeper problem that no read-it-later tool has actually solved.\n\n" +
    "## What Pocket Was\n\n" +
    "Pocket started as Read It Later in 2007, rebranded in 2012, and was acquired by Mozilla in 2017. At its peak it had tens of millions of users and was one of the dominant tools in the \"save for later\" category. The premise was simple and genuinely useful: you see something interesting while you're busy, you hit the Pocket button, and the article is waiting for you when you have time.\n\n" +
    "The browser extension, the mobile apps, and the clean reading view all worked together. If you paid for Pocket Premium, you got permanent library storage, full-text search, and an unlimited archive. It was a real product with real users and a clear value proposition.\n\n" +
    "Mozilla acquired it to complement Firefox, but the strategic fit never fully materialized. Firefox's market share continued to erode, and Pocket's growth stalled as competitors fragmented the space. By 2025, the decision was made.\n\n" +
    "## What Pocket Does Well\n\n" +
    "Before going any further, fairness requires acknowledging that Pocket did a lot of things right. The reading view was clean and well-engineered. The tag system, while basic, gave users a way to organize saves. The cross-platform sync between desktop and mobile was reliable for most users most of the time. The browser extension had a single-click save that felt frictionless in a way that many competitors never matched.\n\n" +
    "For people who genuinely had a reading practice and returned to their saves regularly, Pocket worked. The tool's failure wasn't that it was bad software. The failure was structural: Mozilla shut it down, and years of user data went with it.\n\n" +
    "## The Shutdown Timeline\n\n" +
    "Here is what happened, in sequence:\n\n" +
    "Mozilla announced the closure of Pocket with a transition period. The Pocket app was removed from Apple's App Store and Google Play on May 22, 2025. Users who had the app installed could continue using it, but new downloads were blocked. The full service shutdown, including the web app and API, occurred on July 8, 2025. Mozilla directed users to export their data before that date and recommended Kobo's e-reader ecosystem as an alternative reading environment.\n\n" +
    "The export process was not seamless. Users had to log in, navigate to account settings, request a data export, wait for an email, and download a CSV or HTML file. For users with thousands of saves, that file was a flat list of URLs with titles and timestamps. The organized tags, the reading progress markers, the highlighted passages from Premium subscribers: that structured data was either exportable in limited form or lost entirely depending on when you acted.\n\n" +
    "## A Practical Export Checklist (While You Still Can)\n\n" +
    "If you are reading this before July 8, 2025 or if you are using another tool and want to protect yourself from a similar situation in the future, here is what you should do:\n\n" +
    "First, log in and request a full data export immediately. Do not wait. Every read-it-later service with a centralized backend can shut down. Treat your data export as a first-class task, not an afterthought.\n\n" +
    "Second, export in every available format. Pocket offered both HTML and CSV exports. Download both. The HTML version preserves some structure that the CSV loses.\n\n" +
    "Third, sort by \"unread\" before you export. The saves you never read are the ones most likely to be in that export with no context about why you saved them. At least tag them or add notes while the service is still running.\n\n" +
    "Fourth, check if any of your saves are actually important reference documents versus interesting-at-the-time articles. The former need to be moved somewhere permanent. The latter probably belong in a trash bin.\n\n" +
    "Fifth, verify that the export actually contains what you expect. Open it, count the rows, spot-check a few URLs. Data exports from shutting-down services are not always complete.\n\n" +
    "## The Backlog Graveyard Problem\n\n" +
    "Here is the harder conversation. Most Pocket users who are honest with themselves will admit that their Pocket queue was not really a reading list. It was a graveyard.\n\n" +
    "This is not a character flaw. It is a documented behavioral pattern that researchers studying bookmarking and \"save for later\" behavior have observed repeatedly. The act of saving an article provides a small psychological reward similar to the reward of completing a task. The brain registers \"I've dealt with that\" even though the actual reading has not happened. The article disappears from view, which reduces the anxiety it created, and the queue grows.\n\n" +
    "Pocket's design reinforced this. Every save was equally weighted. A genuinely important research paper you needed to read for work sat alongside a mildly interesting tweet thread you saved on a Monday morning. There was no structural difference between them. The queue was flat.\n\n" +
    "The result was that most users' Pocket accounts contained thousands of saves and a dimly felt sense of failure about never getting through them. When the shutdown was announced, many users reported opening their archives and finding saves from 2013 that they had completely forgotten about.\n\n" +
    "This is the JTBD failure underneath the vendor risk. Pocket's job was \"help me capture and return to content that matters to me.\" It reliably accomplished the capture half. The return half was broken by the design, not just by the shutdown.\n\n" +
    "## Why Vendor Risk Is a Real Cost\n\n" +
    "Mozilla is not an irresponsible actor. They gave users a reasonable transition window, provided export tools, and made a clear announcement. By the standards of product shutdowns, this was handled about as well as these things can be.\n\n" +
    "And yet users still lost data. People who did not check their email during the transition window, people who had used Premium and had structured data that did not export cleanly, people who had built integrations with Pocket's API for their own workflows: all of them absorbed costs that were not their fault.\n\n" +
    "When you build your workflow on a cloud-dependent tool, you are accepting a background risk that does not show up in the product experience until the day it matters. Pocket's shutdown made that risk visible in a way that no marketing copy ever does.\n\n" +
    "The responsible framing for any tool in this category is: what happens to my data if this service shuts down tomorrow? Can I export it? Is the export actually usable, or is it a flat list of URLs that requires a week of manual work to reconstruct my system?\n\n" +
    "## A Different Way to Think About Context\n\n" +
    "Read-it-later tools solve one version of the \"I need to return to this\" problem. But there is another version of that problem that is at least as common and considerably less addressed: returning to a work context.\n\n" +
    "When you are deep in a project, your browser is not just a collection of URLs. It is the physical manifestation of where you are in the work. The tab with the API documentation you have been cross-referencing. The tab with the spreadsheet you are building from. The three research tabs you have been triangulating between. The issue tracker tab showing what you committed to deliver. Together, those tabs are not just links. They are your working memory made visible.\n\n" +
    "When you close the browser, that context is gone. When you return to the project, you spend the first fifteen minutes reconstructing it from scratch. That reconstruction is not just inefficient. It is psychologically expensive in a way that breaks momentum.\n\n" +
    "That is the problem HeyStax was built to address. Instead of saving articles to read later, you save the entire tab context of a project as a named Stax, attach the next concrete action you plan to take, and when you return, you restore the whole context with a single click. The browser opens exactly where you were. The next action is right there.\n\n" +
    "The tool works in local-first mode with no account required. Your Stax data lives in your browser's local storage. If HeyStax as a service ever changed, your data does not go with it in the same way that Pocket's library did.\n\n" +
    "## What Pocket's Shutdown Actually Teaches Us\n\n" +
    "The useful lesson from Pocket's closure is not \"don't use cloud tools.\" Cloud tools are often worth their tradeoffs. The lesson is more specific: understand what your workflow actually depends on, and make sure you have an exit path that does not require the vendor to be cooperative.\n\n" +
    "For read-it-later tools, that means regular exports and a reading practice that actually works. For browser context tools, that means local storage and explicit save operations that you control.\n\n" +
    "The graveyard problem is worth sitting with. If you saved thousands of articles to Pocket and read maybe ten percent of them, the tool was not really helping you. It was helping you defer decisions. The closure forced a reckoning that the tool itself never would have.\n\n" +
    "That reckoning is useful. What did you actually save? Why? What did you actually read? Why those things and not the others? The answers tell you more about how you actually work than any productivity system ever will.\n\n" +
    "## Try HeyStax\n\n" +
    "If you are rebuilding your workflow after Pocket's closure and thinking more carefully about what you actually need from a browser tool, [HeyStax](https://heystax.ai) is worth a look. It is a different tool solving a related but distinct problem: not saving articles, but saving your project context so you can return to it without the reconstruction tax. Local-first, explicit saves, next action attached at save time. No backlog graveyard. Give it a try at [heystax.ai](https://heystax.ai).",
};
