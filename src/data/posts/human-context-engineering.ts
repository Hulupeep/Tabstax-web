import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "human-context-engineering",
  title:
    "Human Context Engineering: The Discipline AI Builders Are Building Without Naming",
  seoTitle: "Human Context Engineering for AI Builders",
  seoDescription:
    "You engineer context windows for your AI. You should be engineering them for yourself too. Here's the discipline AI builders are discovering.",
  date: "2026-03-01",
  author: "Colm Byrne",
  kicker: "CLI & Terminal",
  keywords: [
    "human context engineering AI builder productivity",
    "AI developer workflow optimization",
    "context engineering for humans",
    "LLM productivity patterns",
    "developer context management",
    "AI builder tools workflow",
  ],
  excerpt:
    "You spend hours crafting the perfect system prompt for your AI. Your own working context gets zero engineering. That asymmetry is costing you more than you think.",
  faq: [
    {
      q: "What is human context engineering?",
      a: "It is the practice of deliberately designing your own working environment — the tabs, tasks, project state, and reference materials — so that you can resume work with minimal reconstruction cost. It applies the same principles that make LLM context windows effective (relevance, recency, structure) to your own cognitive environment.",
    },
    {
      q: "How is this different from just being organised?",
      a: "Organisation is about storing things so you can find them. Context engineering is about loading things so you can think with them. The difference is between a filing cabinet and a workbench. A filing cabinet stores information. A workbench presents the information you need for the task at hand.",
    },
    {
      q: "Do I need special tools for human context engineering?",
      a: "You need tools that preserve and restore working state, not just save files. A browser that can reopen a specific set of tabs, a task tracker that shows what is next for a specific project, and ideally a way to share that state with collaborators and AI assistants. HeyStax was built specifically for this — it saves project state (tabs plus next actions) and restores it across sessions and devices.",
    },
  ],
  content:
    "Human context engineering is a discipline that AI builder productivity communities are developing in real time, though most of them have not named it yet. The pattern is unmistakable: developers who spend hours crafting system prompts, engineering tool descriptions, and optimising memory strategies for their AI assistants give zero deliberate thought to their own working context.\n\n" +
    "\"I optimise my Claude prompts but I never thought about optimising my own context.\" That observation, from an agentic engineering community, captures the asymmetry perfectly. The AI gets a carefully curated context window. The human gets whatever tabs happen to be open and whatever they can remember from last Thursday.\n\n" +
    "## A Day Without Context Engineering\n\n" +
    "Here is what a Monday morning looks like for an AI builder named Dev. He sits down, opens his laptop, and stares at a browser with forty-seven tabs from three different projects. He cannot remember which project he was working on Friday afternoon. He opens Claude and types: \"I'm working on a payments integration with Stripe. Here's what I've done so far...\" and spends five minutes re-explaining a project that Claude helped him build last week.\n\n" +
    "Then his co-founder messages: \"Where are we on the auth refactor?\" Dev opens Slack, scrolls through messages, opens the GitHub repo, checks the PR, and fifteen minutes later can give a coherent answer. The answer existed — in his head, on Friday — but it did not survive the weekend.\n\n" +
    "Dev is not disorganised. He is an excellent engineer. He has a meticulously crafted `CLAUDE.md` file that gives his AI perfect context. He has system prompts that specify coding style, architecture constraints, and project history. He engineers context for machines with genuine skill. He just never thought to do the same for himself.\n\n" +
    "## The Irony of Prompt Engineering\n\n" +
    "The practices that make LLM interactions effective are well understood. You provide relevant context. You specify the task clearly. You include examples. You structure the information so the model can process it efficiently. You remove noise. You keep the context window focused on what matters for the current task.\n\n" +
    "Every one of these practices applies to human cognition. Relevant context reduces reconstruction time. Clear task specification reduces ambiguity. Structured information is processed faster than unstructured information. Noise increases cognitive load.\n\n" +
    "The irony is that the people who understand this best — AI builders — apply it exclusively to their tools. Their own [context window](/blog/context-window-for-humans) is an afterthought. Tabs accumulate without curation. Tasks live in memory or scattered across apps. Project state is reconstructed from artifacts every Monday morning rather than preserved and restored.\n\n" +
    "## What the Old Approach Does Well\n\n" +
    "Notion, Linear, and Confluence are genuinely thoughtful products. They are not bad. They are designed for a different topology — teams that work in sprints, with stable scope, where the coordination overhead is justified by the complexity of the work. For those teams, the investment in documentation and process pays off. The issue is not quality. It is fit. A Formula 1 car is an extraordinary machine, but it is not what you want for a dirt road.\n\n" +
    "## The Context Engineering Framework\n\n" +
    "If you were engineering a context window for yourself the way you engineer one for Claude, you would ask three questions.\n\n" +
    "**What do I need to see to resume this project?** Not everything about the project. Just enough to start working. The relevant tabs. The pending tasks. The last decision that was made. This is the equivalent of a system prompt: the minimum viable context.\n\n" +
    "**How do I preserve state between sessions?** When you close your laptop on Friday, the context in your head begins to decay. By Monday, it is substantially degraded. The question is whether you have a mechanism to restore it or whether you have to reconstruct it from scratch. Reconstruction is expensive. Restoration is cheap.\n\n" +
    "**How do I share context without transferring it?** The most expensive form of knowledge transfer is synchronous explanation: stopping your work to bring someone else up to speed. The cheapest form is shared state: someone opens the project and the context is already there.\n\n" +
    "## Decision Criteria: Are You Engineering Your Own Context?\n\n" +
    "**When you return to a project after three days, how long until you are productive?** If the answer is \"fifteen minutes of tab archaeology and Slack scrolling,\" your context is not engineered. It is accidental.\n\n" +
    "**Can your AI assistant see your current project state?** If you re-explain your project to Claude every session, you are acting as a context bridge between sessions. That is a job for a tool, not a human. The [LLM that knows what you're working on](/blog/llm-that-knows-what-youre-working-on) is the one with access to your live project state.\n\n" +
    "**Can a collaborator see what you are working on without asking?** If the answer requires a Slack message or a meeting, the context is stored in your head. Heads do not scale.\n\n" +
    "**Do you curate your working environment or let it accumulate?** The difference between a context window and a junk drawer is curation. One is designed. The other just happened.\n\n" +
    "## What If There Was a Way to Engineer Your Own Context Window?\n\n" +
    "What if there was a way to save your working state — the tabs, the tasks, the assignments — and restore it with a click or a command? What if the same state was visible to your collaborators and your AI assistant?\n\n" +
    "That is what `hey which` does. It shows you where you are: which project is active, what tasks are pending. `hey ls` shows the full state. `hey done 1` updates it. `hey -x 'auth is flaky'` adds a note that appears in the CLI, the browser extension, and on your phone. The same data, in every surface, always current.\n\n" +
    "The discipline is not about the tool. It is about the practice. Engineer your context the way you [engineer your AI's context](/blog/ai-builders-dont-use-project-management). Save your working state deliberately. Curate your project environment. Make restoration cheap and reconstruction unnecessary.\n\n" +
    "## The Asymmetry We Need to Close\n\n" +
    "There is something revealing about the fact that a generation of builders has independently arrived at the practice of engineering context for machines while neglecting to do the same for themselves. The asymmetry is not laziness. It is visibility. When you give Claude a bad system prompt, the degraded output is obvious and immediate. When you give yourself a bad working context — scattered tabs, no next actions, no clear project boundaries — the degraded output is invisible. You just feel slightly foggy, slightly unfocused, slightly less productive than you should be. The cost is real but diffuse, spread across every task, every day, every context switch.\n\n" +
    "The builders who close this asymmetry — who apply the same deliberate engineering to their own context that they apply to their AI's context — report a qualitative shift. Not just faster work, but clearer thinking. When the working environment is curated rather than accumulated, the cognitive overhead drops. Decisions get easier because the relevant information is present and the irrelevant information is not. Focus improves because the tabs on screen belong to one project, not five.\n\n" +
    "This is not a tooling problem dressed up as a philosophy. It is a recognition that human cognition, like machine cognition, operates within a context window. The quality of what comes out depends on the quality of what goes in. Engineer the input, and the output takes care of itself.\n\n" +
    "You would not give your AI a blank context window. Stop giving yourself one. The [tabs are not the problem](/blog/tabs-are-not-the-problem). The problem is that you never thought to design your own working context with the same care you bring to your system prompts.",
};
