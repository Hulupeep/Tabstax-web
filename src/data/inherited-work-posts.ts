import type { BlogPost } from "./blog-posts";

export const inheritedWorkPosts: BlogPost[] = [{
  slug: "test-the-job-you-inherit",
  title: "Test the Job You Inherit",
  seoTitle: "Test the Job You Inherit: Better AI Agent Evaluation",
  seoDescription: "GDPx tests agents inside working environments. Its useful lesson for small teams is to evaluate inherited context, changed state and handoffs together.",
  date: "2026-11-03",
  author: "Colm Byrne",
  kicker: "Human + AI Teams",
  excerpt: "A clean prompt tests whether an agent can produce an answer. A cold handoff tests whether it can pick up your work. Those are different promises.",
  keywords: ["AI agent evaluation", "GDPx benchmark", "human AI teams", "agent handoffs", "persistent context", "agent reliability"],
  faq: [
    { q: "Does GDPx's 12% score mean agents fail at 88% of everyday work?", a: "No. The score combines different grading methods across selected difficult domains, with equal weighting across domains and partners. It is not a population estimate for ordinary work." },
    { q: "How can a small team test an agent handoff?", a: "Choose one real journey, prepare a fixed starting state and explicit acceptance criteria, and give a fresh worker access to the approved records. Check the final persisted state and evidence, including duplicate actions and human corrections." },
    { q: "Does HeyStax already provide complete agent execution auditing?", a: "No. Shared work and record audit tools are live foundations. The 2 November ledger says claim rules are in production but the owner and two-agent browser journey remains unverified. Reading claim events through MCP or a dashboard and expiring claim leases remain planned." },
  ],
  content: `Imagine opening a colleague's half-finished workbook on Monday morning.

There are three versions of the figures. One note says the customer approved the change. A later email says to wait. The final sheet looks tidy, but a formula still points at last month's data.

You were asked to finish the job. Nobody asked you to produce a convincing spreadsheet-shaped answer.

That imagined handoff captures a gap in how we often test AI agents. A clean prompt gives the worker a question and the context needed to answer it. Real work often begins halfway through someone else's thinking, inside a system that already has history.

If we want people and agents to share responsibility, we should test the job they inherit.

## A Benchmark With an Environment

[SemiAnalysis launched GDPx on 2 November 2026](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities). It evaluates agents across selected specialist fields, using working environments rather than only a prompt and reference document. Models use their native harness where available, otherwise OpenCode. Most tasks allow up to eight hours, with some shorter limits.

The [public leaderboard](https://gdpx.semianalysis.com/) lists 206 tasks, 14 partners and 11 domains. At the time of checking, the highest overall score was 12%. That number combines binary and continuous grading and averages three attempts, with equal weighting across domains and partners within them. It is not an estimate of how often agents can do ordinary work.

The selection reflects SemiAnalysis's thesis about economically important frontier capabilities. It is neither a representative sample of every occupation nor a neutral definition of meaningful work. Harness differences also mean the comparison is between deployed agent systems, not isolated model intelligence.

The part worth borrowing is the evaluation shape. Put the worker somewhere that requires investigation. Give it a result to achieve. Inspect what actually happened.

## The Inherited State Is Part of the Task

One [public GDPx task](https://gdpx.semianalysis.com/rollouts/rl-experiment-audit) asks an agent to investigate a stalled reinforcement-learning run. It provides preserved traces, historical code and evaluation records. The deliverable must distinguish demonstrated defects from hypotheses, document repairs and validation, and retain remaining uncertainty. The task has a five-hour limit.

You do not need a frontier research lab to borrow that structure.

A small team can ask a fresh worker to resume an interrupted customer import. A community organiser can hand over an event whose venue is confirmed but insurance is unresolved. A construction team can ask someone to reconcile a revised drawing with the last accepted site decision.

These examples are proposed evaluation scenarios, not results from GDPx. Their common feature is that the final answer depends on discovering the current state before acting.

The workbook, the approval, the unresolved question and the permission boundary belong in the test. If they are removed to make the prompt cleaner, the test may become easier while becoming less useful.

## Evidence Should Survive the Chat

A polished completion message is one output. The changed system is another.

For an import story, a completion message might say that all rows were processed. The acceptance evidence should show the persisted rows, exclusions and errors. For an invitation, it should establish whether the invitation exists and who received access. For a document repair, it should show which source justified the change and whether the revised file opens correctly.

Some evidence will be machine-checkable. Some will require a person with domain knowledge. The choice should follow the claim being made.

This is my product-design interpretation, not a demonstrated effect of GDPx: a useful handoff evaluation should let a second worker reconstruct why the first worker called the job complete. The evidence needs to be inspectable after the conversation is gone.

There is a counterargument. Building rich environments takes time. They can become stale, and a sophisticated grader can still reward the wrong thing. For a narrow deterministic operation, a small unit test may be exactly right. A realistic environment earns its cost when the product promise includes navigating context, choosing tools or changing shared state.

## Give Other Tools Credit for Execution

[AgentGrid's current changelog](https://agentgrid.sh/docs/changelog) describes useful steps in this direction. Its 31 October release lets agents receive a new turn with the exit code and saved output of a background job. Its 1 November release extends automatic continuation after known usage-limit resets across harnesses. These features help execution survive waiting and interruption.

[Puffle documents recurring work](https://puffle.ai/docs/automations) as standing instructions plus a schedule, event or webhook, with results in run history. That is a clear structure for repeated delegation.

Those are official product descriptions, not independent reliability measurements. Neither a saved transcript nor a successful process exit automatically proves that the intended outcome happened. They are useful inputs to a fuller acceptance check.

HeyStax should fit alongside such execution tools. Its live foundations hold shared Stax, goals, next actions, people, records and record audit tools. Its ledger was updated on 2 November: claim rules are in production, while the owner and two-agent browser journey still needs verification. Claim events are recorded, but reading them through MCP or a dashboard remains planned. Expiring claim leases are also planned.

That boundary matters. Durable responsibility needs a readable history and a way to recover abandoned work. These are concrete requirements to verify, not benefits to assume because an action has an agent's name beside it.

## One Small Cold-Handoff Test

Choose one customer-visible journey in a safe test environment. Write a story with an observable outcome and acceptance criteria before running the agent.

For example: a coordinator must finish an interrupted data import, preserve a valid prior record, reject an invalid row and explain the result. Pin the starting data and keep the verifier separate from the implementation worker.

Run the journey once from a clean start and once from a deliberately interrupted state. In the second run, replace the worker. Give the replacement approved shared records, without privately briefing it through the old chat.

Check the actual persisted result. Count repeated effects, human corrections and time to verified completion. Keep the starting snapshot, story version, commit, final state and verification receipt together.

The test is small, but it asks a useful question: does this system preserve enough state for responsibility to transfer?

For a scientist, the result may be a reproducible analysis ready for the next experiment. For a founder, a customer journey that works. For a volunteer group, a booking completed under the right authority. The outcome varies. The obligation to show what happened remains.

## Sources and Limits

Checked on 3 November 2026. GDPx's launch article is dated 2 November; its leaderboard is a changing snapshot. Its authors report their own evaluation, and the selected tasks do not establish general workplace success rates. This article does not independently reproduce their runs or validate their graders. AgentGrid release claims are dated 31 October and 1 November; Puffle documentation is undated. HeyStax wording follows its shipped ledger dated 2 November. The proposed handoff test is an experiment to run, not evidence of a capability already demonstrated.`,
}];
