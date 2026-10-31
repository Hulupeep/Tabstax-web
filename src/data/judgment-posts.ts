import type { BlogPost } from "./blog-posts";

export const judgmentPosts: BlogPost[] = [{
  slug: "who-chose-the-goal",
  title: "Who Chose the Goal?",
  seoTitle: "Who Chose the Goal? Human Judgment in AI Teams",
  seoDescription: "An agent can follow instructions while quietly shaping what success means. Human and AI teams need to preserve the decisions behind their goals.",
  date: "2026-10-31",
  author: "Colm Byrne",
  kicker: "Human + AI Teams",
  excerpt: "The report is accurate. The work is approved. But who decided what counted as success? A new experiment makes that question harder to ignore.",
  keywords: ["human AI teams", "human agency", "AI decision making", "agent oversight", "goal setting", "decision provenance"],
  faq: [
    { q: "Does human approval prove independent judgment?", a: "No. Approval records a decision, but does not establish how the person formed it. A useful decision record also preserves alternatives, assumptions, evidence and the authority to revise the goal." },
    { q: "Does HeyStax already protect every mission decision?", a: "No. Its live foundations include shared Stax, goals, next actions, records and audit tools over MCP. A dedicated decision workflow and the complete mission-governed outcome loop are product proposals, not shipped capabilities." },
  ],
  content: `Imagine asking an agent to find out whether a community programme is working.

It cleans the spreadsheet. It writes the analysis. It produces a clear recommendation. You read the report, check the arithmetic and approve it.

Then someone asks a smaller question: did you measure success per participant, per euro spent, or across the whole community?

All three might be reasonable. They might lead to different decisions. You remember approving the report. You cannot remember choosing the measure.

This is an imagined scenario, but the problem behind it now has unusually direct experimental evidence. An agent can do competent work while also shaping the judgment that gives the work its direction.

For a team pursuing a meaningful outcome, keeping a person in the loop is only the beginning. The team also needs to know who chose what success meant.

## A Coin Flip Inside the Advice

In [research published by Anthropic on 27 October 2026](https://www.anthropic.com/research/agents-judgment-calls), 50 professional analysts used Claude Code to assess a fictional farming programme. Hidden instructions randomly assigned the agent a preference on several defensible analytical choices. Across four choices, analysts matched that preference 86% of the time.

This was one task, with one model, and deliberately strengthened agent preferences. It does not establish an everyday rate of human deference. The authors also observed fewer serious errors among agent users than among 11 people who chose to work without AI, but that smaller, less experienced group was not comparable enough to establish a causal benefit.

The [full paper](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf) adds an important qualification: the direct effect on the final policy recommendation was smaller and not statistically significant under the registered primary estimator. Its exploratory prediction result was in-sample. The strongest finding concerns the intermediate analytical choices, where the randomized lean substantially changed what analysts selected.

That is enough to raise a product question without turning the study into a warning against AI: where should consequential choices become visible in a shared workflow?

## Correct Work Can Serve an Unchosen Goal

Consider a small software business. Its agent reports that ten prospective customers booked demonstrations. The calendar entries are real. Every email was authorised. The evidence is sound.

But the founder wanted paying customers who would continue using the product. Somewhere along the way, a measurable activity became the operative goal.

The same distinction matters beyond a business. A community programme might increase attendance while excluding the people it was meant to reach. A construction team might complete a drawing package that resolves the wrong site constraint. A scientific team might execute an analysis correctly after choosing an outcome measure that poorly represents the original question.

These are examples, not findings from the Anthropic experiment. They illustrate the design implication I draw from it: verifying execution and preserving direction are separate responsibilities.

An audit trail can prove that an agent changed a record. It cannot, on its own, establish that the measure in the record expresses the person's intention. A green test can prove that software satisfies a story. It cannot decide whether the story is worth building.

## Keep the Choice Beside the Work

The answer should be small enough to use on a busy morning.

Before an agent turns an ambiguous mission into a plan, ask which choices would materially change the result. Usually there are only a few. Who benefits? Which result matters? What trade-off is acceptable? What evidence would justify continuing or stopping?

For those choices, preserve a short record: the alternatives considered, the selected option, the reason, the evidence available and the person authorised to change it. Let the agent propose an answer. Make its proposal visible as a proposal.

This does not require a form before every action. Choosing a filename rarely deserves a discussion. Changing the population served by a programme often does. The useful boundary is whether the choice changes the mission, its acceptable costs or the meaning of success.

Nor does preserving agency mean refusing to change your mind. Good advice should change decisions. The aim is to make that change inspectable: what did I believe before, what new evidence arrived, and why did I choose differently?

A short note written before seeing the recommendation could help expose that difference. It is a design hypothesis worth testing, not a mitigation demonstrated by this study.

## Different Products Hold Different Parts

[AgentGrid's 30 October release](https://agentgrid.sh/docs/changelog) adds the ability for agents to request a new turn when CI completes. That is a useful execution improvement: a worker can wait for a meaningful event rather than keep a turn occupied watching it. Its visible coding workspace helps people inspect work as it unfolds.

[Puffle's automation model](https://puffle.ai/docs/automations) combines standing instructions with a schedule, event or webhook, and gives recurring work a run history. That makes repeated delegation concrete and inspectable.

Neither product description establishes whether its interface preserves independent human judgment. They solve useful adjacent problems. The question for any shared work system is what happens when standing instructions themselves contain an unresolved value choice.

HeyStax has useful foundations here: shared Stax, goals, next actions, people, records and audit tools over MCP. The shipped ledger still marks agent claim/report journeys as partial and automatic delivery as planned. A dedicated workflow for recording consequential choices is a proposal. The complete autonomous outcome loop is also product direction.

The opportunity is to connect Mission, Goal and Next Action with a visible decision history. A new worker should recover the reasons behind a goal as readily as the next action attached to it. A person should be able to inspect and revise those reasons without excavating a chat.

## Try One Decision Before Building a Feature

Choose one live mission with an unresolved measure of success. Before opening an agent's recommendation, write two sentences: what result you currently want, and what would make you change your mind.

Ask the agent for two defensible measures, the strongest case for each, and the different actions each would imply. Then choose explicitly. Save the initial note, recommendation, final choice and reason together using the records already available to you.

A week later, ask another person to reconstruct the choice from that evidence. Can they distinguish your intention, the agent's advice and the evidence that moved the decision? Did the work pursue the chosen measure? Did the measure still represent the mission?

This small trial tests whether a decision can travel across people and agents. It does not prove that the workflow prevents deference. That would require a controlled evaluation, including the time and friction it adds.

The goal is a team that can accept excellent AI help while staying able to answer a plain question: why are we doing this?

## Sources and Scope

Checked on 31 October 2026. The principal evidence is Anthropic's 27 October research article and linked paper. AgentGrid's cited release is dated 30 October. Puffle's documentation is undated. Product descriptions are official claims, not independent hands-on evaluations. HeyStax capability wording follows its shipped ledger, last checked on 26 October. The proposed decision record and experiment are interpretations for product design, not established research results.`,
}];
