import type { BlogPost } from "../blog-types";

// Copied unchanged from the old blog-posts.ts. This object has every field twice:
// the "teams-can-start-working-in-60-seconds" fields come first and are overridden
// by the "ai-builders-dont-use-project-management" fields below, which are the ones
// that render. The first set never shipped as a page.
export const post: BlogPost = {
  slug: "teams-can-start-working-in-60-seconds",
  title: "Teams Can Start Working in 60 Seconds",
  seoTitle: "Teams Can Start Working in 60 Seconds | HeyStax",
  seoDescription: "Add users. Assign next actions. Ship. No boards, no workflows, no setup. How HeyStax eliminates the setup tax that kills momentum.",
  date: "2026-03-26",
  author: "Colm Byrne",
  kicker: "Team Productivity",
  keywords: [
    "team onboarding productivity",
    "fast team setup",
    "next actions vs tasks",
    "project management setup time",
    "assign tasks quickly",
    "heystax teams",
  ],
  excerpt:
    "Every project management tool charges a setup tax before you can do real work. HeyStax skips all of that. Create a stax. Add a person. Type their first action. They're working.",
  faq: [
    {
      q: "How is a next action different from a task?",
      a: "A task is abstract: 'Launch marketing campaign.' A next action is concrete: 'Write the first three email subject lines.' Your brain can start a concrete step. It cannot start an abstraction. Next actions are two to three times more likely to be acted on than vague goals.",
    },
    {
      q: "How does @handle assignment work?",
      a: "Type @handle in the action text itself: 'Review the DNS config @rob'. Press enter. Rob sees it in his column. The @handle is stripped from the stored text. No dropdowns, no modals, no assign-to screen.",
    },
    {
      q: "Does this work across devices?",
      a: "Yes. The same stax, actions, and assignments are visible in the browser extension, the web dashboard, the CLI, and through MCP for AI assistants. Whether Sarah checks from her phone or her laptop, the next action is there.",
    },
    {
      q: "What's the science behind next actions?",
      a: "Working memory holds roughly four items (Cowan, 2001). Context-switching costs 23 minutes to recover (Mark et al., 2008). Concrete implementation intentions are 2-3x more likely to be acted on (Gollwitzer, 1999). Externalising intentions frees cognitive load (Allen, 2001).",
    },
  ],
  content:
    "Every project management tool charges a setup tax before you can do real work.\n\n" +
    "Jira wants you to create a project, configure a board, add sprints, import a backlog, assign roles. Forty-five minutes later, you have a beautifully structured workspace and you have not shipped anything. Notion needs a workspace, a template, customised properties, linked databases. Linear needs a team, cycles, imported issues, labels. Each tool promises to make work visible, and each one asks you to stop working first so it can get organised.\n\n" +
    "The setup tax kills momentum. And momentum is the thing you needed the tool to preserve.\n\n" +
    "Here is what getting started looks like in HeyStax:\n\n" +
    "Step 1: Create a stax — \"Q2 Launch #product\"\n" +
    "Step 2: Add a collaborator — @sarah\n" +
    "Step 3: Assign their first action — \"Review the landing page copy @sarah\"\n\n" +
    "Sarah now has a concrete next action. She opens HeyStax, sees it, and starts working. No onboarding deck. No \"where do I find my tasks?\" No project board walkthrough. No columns to learn, no workflows to memorise.\n\n" +
    "Time from zero to working: 60 seconds.\n\n" +
    "That is not a simplification. It is a different model. The unit of work in HeyStax is not the project, the sprint, or the ticket. It is the next action. And the next action is always concrete enough to start.\n\n" +
    "A task is abstract: \"Launch marketing campaign.\"\n\n" +
    "A next action is concrete: \"Write the first three email subject lines.\"\n\n" +
    "Your brain can start a concrete step. It cannot start an abstraction. That is not laziness or poor discipline. It is how working memory operates. You can hold roughly four items at a time (Cowan, 2001), and vague items take up more space than specific ones because your mind has to keep re-parsing what the item actually means.\n\n" +
    "When you assign a next action to @sarah, you are not giving her a task. You are giving her a starting point. The one concrete step that lets her enter flow without thinking about what to do first.\n\n" +
    "Implementation intentions, the kind of specific \"I will do X at time Y\" framing that next actions create, are two to three times more likely to be acted on than vague goals (Gollwitzer, 1999). And externalising those intentions into a system frees the cognitive load entirely (Allen, 2001). The action exists outside your head, attached to the right project, visible to the right person. Your working memory is clear for the actual work.\n\n" +
    "This matters more than it sounds. Context-switching costs an average of 23 minutes to recover from (Mark et al., 2008). A next action that is specific enough to start without reconstruction eliminates most of that recovery cost. You open the stax, read the action, and you are already moving.\n\n" +
    "Delegation in most tools requires a modal, a dropdown, a search, a confirmation. Three screens to say \"Rob should do this.\"\n\n" +
    "In HeyStax, delegation is inline:\n\n" +
    "\"Review the DNS config @rob\"\n" +
    "\"Write the intro paragraph @sarah\"\n" +
    "\"Test the checkout flow @dom\"\n\n" +
    "Type it. Press enter. They see it. Done.\n\n" +
    "The @handle is part of the action text itself. There is no separate \"assign to\" step. The assignment and the instruction are the same sentence. This matters because the moment you separate the instruction from the assignment, you create overhead. Someone has to read the task title, then check who it is assigned to, then figure out whether the title is actually specific enough to start. When the handle is inline, the action reads as a complete sentence directed at a specific person. There is nothing left to parse.\n\n" +
    "The @handle pattern works across every surface where HeyStax lives. The browser extension, the dashboard swim lanes and list views, the CLI with `hey add \"Review PR @sarah\"`, and through MCP where AI assistants add actions with @handle via API. Same stax, same actions, same assignments everywhere.\n\n" +
    "The reason this works is not convenience. It is cognitive architecture.\n\n" +
    "Working memory holds roughly four items (Cowan, 2001). Fill those slots with ambiguity, and you have no capacity left for the work itself. A concrete next action occupies one slot cleanly. A vague task occupies multiple slots because your brain keeps re-evaluating what it means.\n\n" +
    "Context-switching costs 23 minutes of recovery time on average (Mark et al., 2008). A next action that is specific enough to start without reconstruction, attached to the tabs and context you need, compresses that recovery to seconds.\n\n" +
    "Concrete implementation intentions are two to three times more likely to be acted on than abstract goals (Gollwitzer, 1999). \"Write the first three email subject lines\" gets done. \"Work on the marketing campaign\" sits there.\n\n" +
    "Externalising intentions into a trusted system frees cognitive load for execution (Allen, 2001). The next action is not in your head. It is in the stax, visible to the team, waiting for the person whose handle is on it.\n\n" +
    "HeyStax is not a project management tool. It is a momentum preservation system. And @handle assignment is how that momentum transfers from one person to another without anyone stopping to set up a workflow first.\n\n" +
    "Create a stax. Add your team. Assign their first action.",
  slug: "ai-builders-dont-use-project-management",
  title:
    "AI Builders Don't Use Project Management Tools. Here's What They Use Instead.",
  seoTitle: "AI Builders Skip PM Tools — What They Use Instead",
  seoDescription:
    "AI builders ship in hours, not sprints. Traditional project management tools can't keep up. Here's the workflow pattern emerging in agentic engineering teams.",
  date: "2026-03-01",
  author: "Colm Byrne",
  kicker: "CLI & Terminal",
  keywords: [
    "project management tool AI builders",
    "AI developer workflow",
    "agentic engineering productivity",
    "developer project management",
    "AI builder tools",
    "terminal workflow AI",
  ],
  excerpt:
    "The new generation of AI builders ships in hours, not sprints. Their project management tool is a terminal and a Claude window. The question is whether that's reckless or rational.",
  faq: [
    {
      q: "Why don't AI builders use traditional project management tools?",
      a: "The cycle time is too short. When you can go from idea to working code in an afternoon with an LLM, the overhead of creating a ticket, estimating it, assigning it, and moving it across a board takes longer than the work itself. AI builders need tools that match their speed, not tools that slow them down to match a process designed for two-week sprints.",
    },
    {
      q: "Is skipping project management sustainable for teams?",
      a: "Only if you replace the visibility that PM tools provide. The problem is not the skipping — it's the gap it leaves. If nobody can see what anyone else is working on, coordination breaks down. The solution is lightweight, always-on visibility rather than heavyweight, after-the-fact reporting.",
    },
    {
      q: "Can HeyStax replace a full project management tool?",
      a: "For teams that ship fast and work in short cycles, yes. HeyStax provides project context (tabs and next actions), team visibility (who is working on what), and coordination (task assignment) without the overhead of boards, sprints, and estimation ceremonies. For teams with regulatory requirements or fixed-scope contracts, a traditional PM tool may still be appropriate.",
    },
    {
      q: "How does the HeyStax CLI fit into an AI development workflow?",
      a: "The CLI lives where AI builders already work — the terminal. You create a project with hey -s, add tasks with hey, assign them with @handle syntax, and mark them done with hey done. Because HeyStax has an MCP server, your AI assistant can read your project context directly, eliminating the need to re-explain what you're working on every session.",
    },
  ],
  content:
    "A project management tool for AI builders is becoming a contradiction in terms. Not because project management is unnecessary — coordination still matters — but because the tools built for it assume a cadence that no longer exists. Two-week sprints. Story points. Backlog grooming. These rhythms were designed for a world where shipping took weeks and the bottleneck was developer hours. That world is receding fast.\n\n" +
    "\"I just open a terminal and a Claude window. That's my PM tool.\" That quote, from an agentic engineers Discord, keeps surfacing in different forms across the communities where AI-native builders gather. It is not bravado. It is a description of how work actually happens when an LLM can generate a working prototype in an afternoon.\n\n" +
    "## The Day in the Life Nobody Talks About\n\n" +
    "Here is what a Tuesday looks like for an AI builder named Rin. She wakes up, opens her laptop, and starts a conversation with Claude about a payments integration she has been thinking about since yesterday. By 9:30, she has a working Stripe webhook handler. By 10:15, she has tests. By 11:00, it is deployed to staging and she is showing it to her co-founder.\n\n" +
    "At no point did she open Jira. At no point did she create a ticket, estimate it, assign it to herself, move it from To Do to In Progress, or update a status field. She did not do these things because they would have taken longer than the work itself. The [overhead of tracking work](/blog/jira-ticket-before-first-line-of-code) exceeded the work being tracked.\n\n" +
    "This is not laziness. Rin is disciplined. She keeps meticulous notes. She communicates clearly with her co-founder. But she does these things in the tools where the work happens — the terminal, the browser, the LLM conversation — not in a separate system designed for a different era.\n\n" +
    "The pattern is consistent across the AI builder community. Context lives in the LLM conversation. The working state lives in the terminal and the browser. The project board, if it exists at all, is a lagging indicator that someone updates reluctantly at the end of the week.\n\n" +
    "## What the Old Approach Does Well\n\n" +
    "Linear and Notion have genuinely improved the project management user experience. Linear in particular is fast and opinionated in a way that respects developers. Its keyboard shortcuts work. Its interface does not lag. It made project management less painful, which is a real achievement. For teams with stable scope, predictable cycles, and enough people that visibility requires a dedicated surface, these tools earn their place.\n\n" +
    "## Why the Mismatch Exists\n\n" +
    "The mismatch is not about quality. It is about topology. Traditional PM tools assume work flows through a pipeline: ideation, specification, estimation, assignment, execution, review, deployment. Each stage has its own ceremony and its own artifact. The tool's job is to track movement through the pipeline.\n\n" +
    "AI builders do not work in pipelines. They work in loops. Idea, prototype, test, deploy, learn, adjust — and the whole loop might take two hours. By the time you have created a Jira ticket for the work, the work is done. The ticket becomes a historical record, not a coordination tool. And historical records that cost time to create but serve no operational purpose get abandoned.\n\n" +
    "The deeper issue is that context decays. The moment when Rin knows exactly what the payments integration should do — the requirements, the edge cases, the API quirks she discovered while reading the Stripe docs — that moment is when the work should happen. Not after she has translated that understanding into a ticket format that someone else might read.\n\n" +
    "## Decision Criteria: Is Your PM Tool Helping or Performing?\n\n" +
    "Before adding another tool to your workflow, ask these questions honestly.\n\n" +
    "**Does the tool make work visible, or does it make reporting visible?** If the primary consumer of your PM tool is a weekly status meeting, the tool is serving the meeting, not the work.\n\n" +
    "**Does the tool match your cycle time?** If you can ship a feature in four hours, a tool designed for two-week sprints is adding drag, not structure.\n\n" +
    "**Does the tool live where the work happens?** If you have to leave your working environment to update the tool, the update will always lag reality. And lagging data is worse than no data, because it creates false confidence.\n\n" +
    "**Can your AI assistant see the tool's data?** If your LLM cannot access your project state, you are maintaining two context windows — one for the machine and one for yourself. That is double the work for half the coherence.\n\n" +
    "## What If There Was a Way to Track Work Without Leaving Work?\n\n" +
    "What if there was a way to create a project, assign collaborators, and start tracking tasks without opening a browser? What if the same data was visible in the terminal, the browser extension, and on a dashboard — and your AI assistant could read it too?\n\n" +
    "That is what `hey -s 'MCP server for payments'` does. It creates a project context — a Stax — in the terminal. Then `hey 'design tool schema' @me` adds a task and assigns it. The Stax appears in the [HeyStax browser extension](/blog/tabs-are-not-the-problem) with the same tasks, and Claude can read the project state via MCP.\n\n" +
    "The workflow matches the speed. Create the project when the idea is fresh. Add tasks as you think of them. Mark them done as you finish them. The tracking happens inside the work, not alongside it.\n\n" +
    "For teams where the work moves faster than the board, that distinction is the difference between a tool that helps and a tool that performs. The [context window you build for yourself](/blog/context-window-for-humans) should be as carefully engineered as the one you build for your AI.\n\n" +
    "## The Emerging Pattern: Context-First, Not Process-First\n\n" +
    "What distinguishes the AI builder workflow from traditional development is not speed alone. It is the relationship between context and process. In traditional development, the process preserves context: the ticket describes the work, the board shows progress, the sprint review captures learnings. The process is the context infrastructure.\n\n" +
    "For AI builders, the context infrastructure is the working environment itself. The terminal session is the context. The LLM conversation is the context. The browser tabs are the context. Layering a separate process on top of this — one that requires translating working context into ticket context — is not just overhead. It is a lossy compression algorithm applied to something that should not be compressed.\n\n" +
    "The builders who are most productive have found ways to preserve context without translating it. They work in the terminal and their tasks live in the terminal. They work in the browser and their project state lives in the browser. The AI sees the same data they see. There is one context, visible in multiple surfaces, maintained as a side effect of working rather than as a separate activity.\n\n" +
    "This is not anti-process. It is a different topology of process — one where the process is embedded in the work rather than wrapped around it. The distinction matters because it changes what tools are useful. Tools that add a layer of abstraction between work and tracking become friction. Tools that make tracking an intrinsic property of working become invisible in the best possible way.\n\n" +
    "The right tool is not the one with the best roadmap view. It is the one that gets out of the way fastest.",
};
