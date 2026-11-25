import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "neurodivergent-brains-and-the-power-of-structured-flexibility",
  title: "Neurodivergent Brains and the Power of Structured Flexibility",
  seoTitle: "Neurodivergent Productivity: Why Most Tools Fail",
  seoDescription:
    "Most productivity tools were built for linear work. Here's why they fail neurodivergent workers, and what structured flexibility looks like in practice.",
  date: "2024-12-15",
  author: "Colm Byrne",
  kicker: "Neurodiversity",
  keywords: [
    "neurodivergent productivity tools",
    "ADHD browser tab management",
    "ADHD context switching",
    "structured flexibility productivity",
    "working memory ADHD productivity",
  ],
  excerpt:
    "Most productivity advice was written for brains that work the way productivity advice assumes brains work. If that's not your brain, here's a different framing.",
  faq: [
    {
      q: "Is HeyStax designed specifically for ADHD?",
      a: "No — it's designed for anyone who has the problem it solves. That problem (high context reconstruction cost when re-entering projects) affects many neurodivergent people acutely, but it affects most knowledge workers to some degree. We didn't build an ADHD tool; we built a re-entry tool that happens to be especially useful for high-switching-cost brains.",
    },
    {
      q: "How does saving context help with task switching?",
      a: "When you save a Stax before switching tasks, the context reconstruction work on re-entry is largely done. The tabs are there, the next action is there. You don't have to spend the first 15 minutes of a session rebuilding where you were — which is exactly the period when many people give up and do something easier instead.",
    },
    {
      q: "Does HeyStax require an account?",
      a: "No. HeyStax works completely locally by default — no account, no sign-in, no cloud required. Your Stax are stored in your browser. Cloud sync and cross-device access are available on Pro, but you can use the core feature entirely offline.",
    },
    {
      q: "What if I lose interest in a project partway through?",
      a: "HeyStax won't fix that, and we're not going to pretend otherwise. If the issue is motivation or interest, that's a different problem. What HeyStax removes is the friction of re-entry for projects you do want to return to. Whether you return is still up to you.",
    },
    {
      q: "How do I get started with HeyStax?",
      a: "Install the extension. Save the tabs for one project you want to come back to. Name the Stax specifically. Close it. Come back and reopen it. No account needed. See if the re-entry cost is lower than it would have been otherwise.",
    },
  ],
  content: `Most neurodivergent people have tried at least three productivity systems. Not because they're disorganised — because none of those systems were built for how their brains actually work.

Linear. One thing at a time. Smooth transitions. Deep focus that stays deep when you sit down to it. That's the implicit model embedded in most productivity advice, most tool design, most "here's how to be more effective" frameworks. And it's wrong for a significant number of people — not as an edge case, but as a fundamental mismatch.

If your attention moves around, if task transitions cost more than they're supposed to, if "just close the other tabs and focus" has never once actually helped — then most productivity advice is at best useless and at worst demoralising. You try the system, it doesn't stick the way it should, and at some point the message you receive is that the problem is you.

It isn't. The system wasn't designed with your experience in mind.

## What Structured Flexibility Actually Means

"Structured flexibility" comes from education research, but the idea maps directly to how knowledge work tools should behave. It describes a system with a clear scaffold — you know where things are, you know how to get back to something — that accommodates non-linear movement within that scaffold.

For a lot of people, this distinction matters more than most productivity advice acknowledges. A rigid system fails because it assumes you'll follow the sequence. A system with no structure at all fails because there's nothing to return to when your attention moves. Structured flexibility is the third option: **a reliable home base you can depart from and come back to without the whole thing falling apart.**

In browser terms: your tabs are where your work actually lives. The question is whether they can hold a coherent project state that survives your attention going elsewhere and coming back.

## The Working Memory Piece

[Russell Barkley's work on ADHD](https://www.russellbarkley.org/) frames the core challenge not as an attention problem but as a working memory and executive function problem. The difficulty isn't that people with ADHD can't focus — many can hyperfocus intensely. The difficulty is in the on-demand retrieval and management of information across time: holding what you need to hold, when you need to hold it, in service of a goal that exists in the future.

Context reconstruction — figuring out where you were when you last worked on something — is exactly this kind of demand. It requires holding the current state of a project in mind, cross-referencing it with what you were doing when you last touched it, and building back up to the level of engagement you had before you left.

For people with working memory challenges, this is a higher cost than average. It's not impossible — it just takes more time and more energy, and sometimes by the time the reconstruction is done, the available focus has been used up.

Tools that externalise that context — that hold it somewhere reliable so you don't have to hold it internally — offload that specific working memory demand. That's what HeyStax is doing.

## The Transition Cost That Doesn't Get Talked About

One thing that's consistently under-discussed in productivity writing is transition cost — the energy required to switch between tasks, not just the time.

For many people, this cost is disproportionately high. It's not that you can't switch; you switch all the time, sometimes too easily in the wrong direction. It's that switching deliberately, from one project to another, requires a kind of mental reset that takes real energy.

And then, when you come back, you have to do it again in reverse.

The context reconstruction part — figuring out where you were, rebuilding the mental model of the work — is where a lot of that energy goes. If the tool you're working with gives you a clean record of what state you were in when you left, some of that reconstruction is removed. You don't have to remember which tab had the relevant thing; it's saved. You don't have to remember what you were about to do; the next action is right there.

This is why **"close your other tabs and focus" is advice that sounds sensible and is functionally useless for a lot of people.** You're not keeping those tabs open because you lack discipline. You're keeping them open because they're how you're holding the project in mind. Closing them loses the context, and losing the context costs more than keeping the tabs.

The better solution isn't to close everything. It's to give yourself permission to close it because the context is saved somewhere reliable.

## What a Structured Re-entry Looks Like

Here's a concrete version.

You've been working on a research piece for a few days. You have seven tabs open: the draft, three source articles you've been cross-referencing, a search results page you haven't fully processed, your notes doc, and a reference you need to come back to. You're mid-thought.

Something else needs your attention. You save the Stax — call it "research piece, chapter 2." You add a next action: "Finish the paragraph about the third source, then decide whether to include the reference." You close the window.

Tomorrow — or three days later — you reopen it. All seven tabs load. The next action is there. You don't have to rebuild where you were. You don't have to remember what "chapter 2" meant last Tuesday. You're back in the work almost immediately.

For someone whose re-entry cost is typically high, this difference is material. The fifteen minutes of reconstruction that often precede actual work — and that sometimes use up all the available focus before any work happens — is largely removed.

## What Doesn't Work (And Why)

Bookmark managers are often recommended for this problem. They're not the right tool.

Bookmarks save URLs. When you return to a bookmark, you're starting from the beginning of whatever is at that address — not from where you were when you saved it. There's no record of which combination of tabs you had open, what you were reading, or what you were about to do.

Project management tools and notes apps — Notion, Linear, Obsidian — are genuinely useful for capturing thinking. But they live outside the browser. When you're mid-project, the work is in the tabs: the document you're editing, the research you're referencing, the ticket you're implementing. Those tools capture thoughts about the project. They don't capture the project state.

Tab groups (Chrome, Edge, Firefox) are closer. You can visually cluster related tabs. But they close with the window, don't sync across devices, and have no concept of "what was I doing with these." They organise. They don't restore.

## The No-Account Starting Point

One thing worth mentioning: HeyStax works without an account by default. Your Stax are stored locally in your browser — no sign-up, no cloud required, no new service to commit to.

For people who have been through enough productivity app cycles to be wary of new commitments, this matters. You can try the core thing — save a project context, close it, come back to it — before you've decided anything about the tool.

[Cloud sync and sharing](/pricing) are available on Pro, for when you want Stax to follow you across devices. But the re-entry mechanism works entirely locally, entirely for free, with no account.

## What This Isn't

This isn't a tool designed specifically for any neurotype. It's a tool that solves a problem that some people experience more acutely than others — but it's a problem most knowledge workers experience to some degree.

We're not going to tell you it will fix your focus or manage your attention. It won't. What it does is reduce the reconstruction cost of coming back to something — a specific, solvable problem, separate from focus or motivation.

If the reason you're not working on a project is that you've genuinely lost interest in it, HeyStax won't fix that. Nothing will, and it would be dishonest to suggest otherwise.

But if the reason is that every time you try to come back, you spend the first fifteen minutes rebuilding context and run out of energy before you actually start — that's what it's built for.

[Save your first Stax](/) and see what the re-entry costs.`,
};
