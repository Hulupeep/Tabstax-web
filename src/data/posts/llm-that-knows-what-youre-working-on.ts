import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "llm-that-knows-what-youre-working-on",
  title: "The LLM That Actually Knows What You're Working On",
  seoTitle: "Claude MCP Project Context for AI Assistants",
  seoDescription:
    "You re-explain your project to Claude every session. An MCP server that gives your AI live access to your working state changes everything.",
  date: "2026-03-01",
  author: "Colm Byrne",
  kicker: "CLI & Terminal",
  keywords: [
    "Claude MCP project context AI assistant",
    "LLM project context",
    "AI assistant productivity",
    "Claude memory project state",
    "MCP server developer tools",
    "AI coding assistant context",
  ],
  excerpt:
    "Your AI assistant is stateless between sessions. You are the one carrying the context burden — re-explaining your project every time you start a new conversation. There is a better architecture.",
  faq: [
    {
      q: "What is an MCP server and how does it help my AI assistant?",
      a: "MCP (Model Context Protocol) is a standard that lets AI assistants connect to external data sources. A HeyStax MCP server gives Claude direct access to your project state — which project is active, what tabs are open, what tasks are pending, who is assigned to what. Instead of you explaining this every session, the AI can read it directly.",
    },
    {
      q: "Does this mean Claude can see all my browser tabs?",
      a: "Only the tabs saved in your Stax — the project contexts you have deliberately created. It does not have access to your general browsing. The data it sees is the data you have curated as part of your project context.",
    },
    {
      q: "How is this different from Claude's built-in Projects feature?",
      a: "Claude's Projects feature stores documents and instructions that persist across conversations. It is useful for single-project context. HeyStax MCP provides live working state — what you are actually doing right now, what tasks are pending, who is working on what. Projects are static context. MCP provides dynamic context.",
    },
  ],
  content:
    "Claude MCP project context is the missing layer between your AI assistant and your actual work. The problem is simple to state: every time you start a new conversation with Claude, you start from zero. The AI does not know what project you are working on, what you did yesterday, what is next, or who else is involved. You are the context bridge, and you pay the toll every session.\n\n" +
    "\"I have to re-explain my project to Claude every single session. It's exhausting.\" That frustration, posted on r/ClaudeAI, has hundreds of upvotes because it describes a universal experience. The AI assistant is powerful but amnesiac. Every session begins with the user performing the cognitive equivalent of loading a context window by hand: pasting code, explaining architecture, recounting history, specifying constraints.\n\n" +
    "## The Failure Mode: You Are the Context Window\n\n" +
    "Here is what this costs in practice. A developer named Ravi is building a payments integration. On Monday, he had a productive session with Claude. They designed the schema, wrote the webhook handler, and planned the error recovery flow. The conversation was excellent. The AI understood the constraints, suggested good patterns, and caught two edge cases Ravi had missed.\n\n" +
    "On Tuesday, Ravi starts a new conversation. Claude does not know about Monday. Ravi spends eight minutes re-explaining: the project context, the architecture decisions, the constraints, the current state. He pastes code. He re-explains the schema. He mentions the edge cases they discussed yesterday.\n\n" +
    "By the time Claude is up to speed, Ravi has lost the sharp focus he had when he sat down. The re-explanation is not just time. It is a context switch from \"doing the work\" to \"describing the work.\" Those are different cognitive modes, and the transition between them has a cost that the eight minutes do not fully capture.\n\n" +
    "This happens every session. Five times a week, eight minutes each, that is forty minutes a week — a full workday per month — spent loading context into an AI that could, in principle, load it itself.\n\n" +
    "The deeper failure mode is degradation. On Monday, Ravi's explanation is vivid and complete. By Thursday, he is summarising. By the following Monday, he is approximating. The context he provides to Claude gets less accurate over time because his own memory of the details is decaying. The AI's responses degrade accordingly. Not because the AI is worse, but because the input is worse.\n\n" +
    "## Why Statelessness Is the Wrong Default\n\n" +
    "LLMs are stateless between sessions by design. This is a reasonable default for general-purpose conversations where the user could be anyone asking anything. But for development work, where the same person returns to the same project day after day, statelessness is a significant friction cost.\n\n" +
    "The problem is not that the AI cannot remember. The problem is that the AI has no mechanism to access the user's current working state. Even with Claude's Projects feature — which is a genuine improvement — the context is static. It is a set of documents that the user uploads and maintains. When the project state changes, the user must update the documents. The maintenance cost scales with the pace of change.\n\n" +
    "What is needed is not memory but access. The AI does not need to remember what you did yesterday. It needs to see what is true right now: which project is active, what tasks are pending, what tabs are open, who is assigned to what. Live state, not historical documents.\n\n" +
    "## What the Old Approach Does Well\n\n" +
    "Claude's Projects and persistent memory features are genuine improvements for single-project users. If you work on one project and can maintain a set of reference documents, Projects provides useful persistent context. Custom instructions shape the AI's responses in ways that compound across sessions. These features move in the right direction — they just do not go far enough for multi-project developers whose working state changes daily.\n\n" +
    "## Decision Criteria: Is Your AI Actually Helping or Just Fast?\n\n" +
    "**How many minutes do you spend loading context per session?** Track it for a week. If the total exceeds thirty minutes, you are spending a meaningful fraction of your AI-assisted time on setup rather than work.\n\n" +
    "**Does your AI know which project you are working on right now?** If you have to tell it, you are the routing layer. Routing is a job for machines.\n\n" +
    "**Can your AI see your current tasks and their status?** If the AI cannot see what is pending, it cannot prioritise its suggestions. It is guessing at relevance.\n\n" +
    "**When you switch projects, does your AI switch with you?** If switching projects requires re-explaining the new context, the AI is session-scoped, not project-scoped. Project-scoped assistance is dramatically more useful.\n\n" +
    "## What If There Was a Way to Give Your AI Live Project Access?\n\n" +
    "What if there was a way to connect your AI assistant to your actual working state — not a document about your state, but the state itself? What if switching projects in your terminal automatically changed what the AI could see?\n\n" +
    "That is what the HeyStax MCP server provides. When Claude connects via MCP, it can read your active Stax: the project name, the open tabs, the pending tasks, the team assignments. When you run `hey -s 'Payments v2'` in the terminal, the MCP server reflects that change. Claude's next response is grounded in the project you are actually working on, not the project you described last Tuesday.\n\n" +
    "The workflow becomes: open terminal, select project, start talking to Claude. No preamble. No re-explanation. The AI already knows what you are working on because it can see the same state you can see. The conversation starts at the work, not at the setup.\n\n" +
    "For teams, this compounds. When multiple people are working in the same Stax, each person's AI assistant sees the same shared state. The tasks, the assignments, the [context that would normally require a standup](/blog/visibility-without-standups) to share. The AI does not just know what you are working on. It knows what your team is working on.\n\n" +
    "The [human context engineering](/blog/human-context-engineering) discipline that AI builders are developing applies here directly. You would not give your AI a blank system prompt. You should not give it a blank project context either. The MCP server is the mechanism by which your carefully curated project state becomes available to the tool that needs it most.\n\n" +
    "## The Compound Returns of Live Context\n\n" +
    "The benefits of giving your AI live project access compound in ways that are hard to predict before you experience them. The first benefit is obvious: no more re-explanation. But the second benefit is subtler. When the AI knows what you are working on, its suggestions become relevant by default. It does not suggest patterns that are inappropriate for your architecture because it can see your architecture. It does not recommend libraries you have already rejected because it can see what you are actually using.\n\n" +
    "The third benefit is the one nobody expects: the AI becomes a better collaborator when it can see the team's state, not just yours. When multiple people share a Stax, the AI can see the full picture — who is working on what, which tasks are blocked, where the dependencies are. A question like \"what should I work on next?\" gets a useful answer because the AI has enough context to reason about priorities, not just capabilities.\n\n" +
    "This is the difference between a tool and a teammate. A tool does what you tell it. A teammate understands the situation and acts accordingly. The context is what makes the difference. The more context, the more useful the collaboration. The [human context engineering](/blog/human-context-engineering) discipline is ultimately about recognising that context is not overhead — it is the mechanism by which both humans and machines do their best work.\n\n" +
    "An AI assistant that cannot see what you are working on is just a very fast search engine. An AI assistant with live project access is a collaborator. The difference is not the model. It is the context.",
};
