import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "tabs-are-not-the-problem",
  title: "Tabs Are Not the Problem. Re-entry Is.",
  seoTitle: "Tab Manager? No. Context Recovery Tool. Yes.",
  seoDescription:
    "Tabs get blamed for the chaos, but they are just evidence. The real cost is re-entry — reconstructing what you were doing after every interruption.",
  date: "2026-03-01",
  author: "Colm Byrne",
  kicker: "CLI & Terminal",
  keywords: [
    "tab manager re-entry context recovery",
    "browser tab management",
    "context switching cost",
    "tab overload solution",
    "project context browser",
    "developer tab management",
  ],
  excerpt:
    "You didn't have a tab problem. You had a re-entry problem. The tabs were just evidence of every project you couldn't safely put down.",
  faq: [
    {
      q: "How is HeyStax different from Chrome tab groups?",
      a: "Chrome tab groups organise tabs visually within a single session. When you close them, they are gone (unless you have the tab group save feature enabled, which saves URLs but not project context). HeyStax saves the full project state — tabs, next actions, and assignments — and restores it across sessions, devices, and team members. The difference is between organising what you have open now and preserving a project you can put down and pick up later.",
    },
    {
      q: "What about tab suspender extensions?",
      a: "Tab suspenders reduce memory usage by unloading inactive tabs, which solves a performance problem. They do not solve the context problem — you still have forty tabs open, they just use less RAM. HeyStax solves a different problem: letting you close the tabs entirely because the project context is saved and will be intact when you return.",
    },
    {
      q: "Does saving tabs as a Stax really help with re-entry?",
      a: "Yes, because re-entry is not about finding the right URL. It is about reconstructing the working state. A Stax saves the specific combination of tabs you had open for a specific project, plus the next actions you had queued. When you reopen it, you are not just opening tabs — you are resuming a context. The tabs are the context's footprint in the browser.",
    },
  ],
  content:
    "The tab manager conversation is one that every productivity community has had, and it always goes the same way. Someone posts about having too many tabs. Someone suggests a tab manager. Someone else suggests bookmarks. A third person suggests just closing everything. None of these suggestions solve the actual problem, because the actual problem is not tabs. The actual problem is re-entry, and context recovery is what makes re-entry possible.\n\n" +
    "\"I had 47 tabs open and I still couldn't find where I left off.\" That sentence, from a productivity forum, reveals the real issue. The tabs were not the problem. The tabs were the evidence. Evidence of projects started but not finished. Evidence of research partially completed. Evidence of contexts that could not be safely put down because putting them down meant losing them.\n\n" +
    "## The Re-entry Tax\n\n" +
    "Here is what re-entry actually costs. A designer named Mika is working on three projects. Each project has its own set of tabs: the Figma file, the requirements doc, the reference designs, the client feedback thread, the component library. Three projects, seven tabs each, twenty-one tabs minimum.\n\n" +
    "On Monday morning, Mika opens her laptop and looks at twenty-one tabs. She knows, in theory, which project she should work on. But the tabs are not grouped by project. They are grouped by the order in which she opened them, which is a function of how her attention moved last Friday, not how it should move today.\n\n" +
    "She spends twelve minutes sorting through the tabs. Not twelve minutes doing productive work — twelve minutes figuring out what the productive work is. Which tabs belong to which project? Which project was she in the middle of? Where did she leave off? What was the next thing she was going to do?\n\n" +
    "That twelve minutes is the re-entry tax. It is not about finding a URL. It is about reconstructing a mental model. The tabs are the inputs to that reconstruction, but the reconstruction itself — the cognitive work of rebuilding context — is the expensive part.\n\n" +
    "Now imagine Mika does this three times a day, every time she switches between projects. That is thirty-six minutes daily — three hours a week — spent not on work, but on figuring out where the work is.\n\n" +
    "## Why Tab Managers Miss the Point\n\n" +
    "Most tab managers address the symptom: too many tabs. They offer to suspend inactive tabs, group tabs by domain, or archive tabs that have not been visited recently. These are reasonable solutions to a real problem — browser performance degrades with too many tabs, and the visual clutter is genuinely distracting.\n\n" +
    "But they do not solve the re-entry problem. A tab manager that groups your tabs by project makes it easier to find a tab. It does not make it easier to remember what you were doing with those tabs. It does not tell you which tab you were actively working in. It does not remind you what you were about to do next.\n\n" +
    "The re-entry problem is not \"which tabs do I need?\" It is \"what was I doing, and what should I do next?\" Tabs are necessary context, but they are not sufficient context. The sufficient context includes the tabs plus the next action plus the awareness of where you left off.\n\n" +
    "## What Chrome and Safari Do Well\n\n" +
    "Chrome and Safari's tab grouping features provide visual organisation without data-loss risk. You can colour-code groups, collapse them, and name them. For people who work in a single browser session and do not close tabs between sessions, this is a genuine improvement over ungrouped tabs. The risk is low — you are organising what you already have open — and the benefit is real.\n\n" +
    "## Decision Criteria: Is Your Tab Problem Actually a Context Problem?\n\n" +
    "**When you return to a project, do you know what to do next?** If the answer is \"I have to look around for a few minutes,\" the problem is not the tabs. The problem is the absence of a next action.\n\n" +
    "**Can you close all tabs for a project without anxiety?** If closing feels like loss, it is because the context is stored in the browser, not in a tool. The browser is volatile storage. It was not designed to be a project management surface.\n\n" +
    "**How many of your open tabs are for projects you are not actively working on?** If more than half your tabs belong to inactive projects, those tabs are insurance policies against context loss. A tool that saves project context reliably makes those insurance policies unnecessary.\n\n" +
    "**Do your tabs have associated next actions?** If the tabs tell you where a project lives but not what the project needs, the tabs are a map without a compass.\n\n" +
    "## What If There Was a Way to Put Projects Down Safely?\n\n" +
    "What if there was a way to save a project's full context — the tabs and the next actions — and know that it would be exactly intact when you came back? What if \"closing a project\" was not losing it but parking it?\n\n" +
    "That is what `hey which` does: it tells you which project is active. `hey ls` shows you the tasks. When you open a Stax in the browser extension, the tabs open — exactly the ones you had, in the positions you had them. The next actions are visible. The [re-entry cost drops to near zero](/blog/jira-ticket-before-first-line-of-code) because there is nothing to reconstruct.\n\n" +
    "Mika's twelve-minute Monday morning becomes a thirty-second one. Open the extension. Click the project. The tabs open. The next action is visible. She is working, not remembering.\n\n" +
    "## The Cost Nobody Counts\n\n" +
    "There is a cost to the tab problem that nobody tracks because it does not appear in any productivity metric. It is the cost of low-grade anxiety. Twenty-seven tabs create a background hum of unfinished business. Each tab is a reminder of something you were going to do, something you were going to read, something you were going to follow up on. The tabs are not just taking up memory in your browser. They are taking up memory in your mind.\n\n" +
    "When you can safely put a project down — save its tabs, save its next actions, close the window, and know that everything will be intact when you return — the anxiety resolves. The project is not gone. It is parked. The distinction between \"closed and lost\" and \"closed and saved\" is the distinction between anxiety and calm. It sounds small. It is not small. It compounds across every project, every day, every context switch.\n\n" +
    "The developers who report the biggest improvement from using project context tools do not talk about productivity metrics. They talk about the feeling of closing a window without worrying. They talk about opening their laptop on Monday morning and knowing exactly where they left off. They talk about the absence of the low-grade hum. Those qualitative improvements — feeling focused, feeling organised, feeling calm — are the foundation on which quantitative productivity gains are built.\n\n" +
    "The problem was never too many tabs. It was too little context. When the context is saved — tabs, actions, project state — the tabs become what they should have been all along: a set of resources for the work, not a fragile record of the work's existence. The [context window you build for yourself](/blog/human-context-engineering) should include not just what you are working on, but what you should do next. That is the difference between a tab manager and a context recovery tool.",
};
