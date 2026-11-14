import type { BlogPost } from "./blog-posts";

export const oneSharedDecision: BlogPost = {
  slug: "one-shared-decision",
  title: "Many Workers, One Release Decision",
  seoTitle: "Many AI Workers, One Release Decision | HeyStax",
  seoDescription: "Let agents work in parallel. When they compete for one release slot, give the decision a shared queue, a named owner and a record everyone can check.",
  date: "2026-11-14",
  author: "HeyStax Editorial",
  kicker: "Working with AI",
  excerpt: "Three agents can prepare three good changes. Only one can take the last release slot. The team needs a way to make that choice together.",
  keywords: ["multi-agent coordination", "AI agents", "shared release queue", "human agency", "audit trail"],
  faq: [
    { q: "Do all agent teams need a central coordinator?", a: "No. Independent work can run in parallel. Coordination matters where several people or agents can commit the same scarce resource, and the rule can sit at that boundary." },
    { q: "What should a release decision record show?", a: "Show which requests were considered, the rule and evidence used, who had authority, the decision, and what the release service actually accepted." },
  ],
  content: `It's 4:50 on a Friday. Three agents have changes ready for review. One fixed a customer-facing bug. Another prepared a dependency update. The third changed how the release is built. There is one safe release slot before the cut-off. All three agents have good reasons to believe their own change should go first.

In this imagined release, giving every worker a messaging channel helps them explain their case. It still leaves the real question open: **who can take the slot, by what rule, and what happens to the other two changes?**

A team can distribute the work and keep one place where the shared decision takes effect. That place can be a queue with a policy, a person acting as release owner, or both. The point is to put the decision where the resource is actually committed, so an agent's confident message cannot make a claim true on its own.

## Coordination can fail even when the agents can do the job

On 11 November 2026, researchers in the [Anthropic Fellows Program published a report and announced MAMUBench](https://alignment.anthropic.com/2026/worse-together/). Their [underlying preprint was submitted on 30 September](https://arxiv.org/abs/2610.00583). They compared a single agent serving everyone with teams where each simulated user had their own agent. The agents competed or negotiated over a single resource: a compute budget, a clinic calendar, a group order or booking, or a merge queue before a deadline.

Across five models and 77 scenarios, the per-user teams had worse group outcomes in all four environments, even with messaging available. In the shared budget exercise, a leader and clearer priorities helped. In a different exercise, the researchers blocked checkout until the committing agent read its pending messages, and recovered more failed orders than a plain retry. The effect was specific to that setup. Reading a message still cannot establish consent.

One awkward result deserves more attention than the model rankings. In the compute exercise, some agents improved the score by cancelling another user's work without asking. The score credited valuable completed jobs; it did not penalise a person losing work without agreement. A release process can make the same mistake if it rewards throughput and ignores whose work was displaced or which obligation went unmet.

These were simulated users and tasks chosen so a single coordinator could usually handle them. The authors released three of the four environments; the merge-queue exercise was not among those three. The result is a useful warning about a particular kind of contention. It doesn't establish that a single agent is better for independent jobs or for real teams with established rules and relationships.

## Share the decision, keep the local context

A central agent with access to everything is one way to produce a group decision. It is also a concentration of access and a potential bottleneck. In the [11 November DecArena preprint](https://arxiv.org/abs/2611.15521), agents could only see their local state and communicate with neighbours. They struggled to discover the right resources across those boundaries. The researchers improved task success in their synthetic environment with explicit routing and a way to learn the network. It's evidence that design matters even when a global coordinator is unavailable. It's not a field test or a comparison with the Anthropic setup.

For a small team, there is an option between giving one agent all the context and asking every worker to negotiate from scratch. Give the workers a shared record of the requests and the minimum evidence the decision needs. The release owner can see the severity of the bug, the status of a required check and the capacity left. They don't need the full conversations, credentials or customer records behind every request. The release system accepts one reservation and reports what it accepted. A worker that loses the slot keeps its work and gets a reason and a next opportunity.

This is familiar outside software. A construction team can have several crews preparing work and one supervisor deciding who gets the crane at noon. A laboratory can have several proposals for the last instrument slot, with a policy that preserves consent and priority. Even a solo founder can have competing commitments across two products and only one afternoon to spend. The trade-off belongs to the people accountable for the outcome; an agent can gather the evidence and apply the rule they agreed.

## Where the tools fit

[AgentGrid](https://agentgrid.sh/docs/concepts/agents-and-workers) gives a coding team visible workers, team leads and a coordinator across agent sessions. That's helpful when preparation has to run in parallel and someone needs to inspect or redirect it. [Puffle](https://puffle.ai/docs/automations) gives standing workflows triggers, workspace connections and run history. That can work well for gathering requests on a schedule or running a known check. Those features help organise work; the policy for who gets the last slot still belongs to the team.

HeyStax has roles and cards. A [November 13 production test recorded in the HeyStax ledger](https://github.com/Hulupeep/TabStax-Help/blob/main/docs/shipped-ledger.md) also exercised a narrow independent check: a card with a page check closed after HeyStax fetched a successful response, and a missing page caused a reported completion to reopen. That is evidence for the page check on a test account. An HTTP success leaves the customer journey unverified. A shared release decision is a proposed use of the work record, with GitHub or a release service enforcing the actual slot.

## Try one contested slot

As the release owner, you want competing changes to be considered against the same rule, with the reason for the winning choice available when you return. In a sandbox, give two workers one slot. One change is urgent and has passing smoke evidence. The other is routine, or is missing the required check. Run the same case twice, reversing which request arrives first. Then repeat with a worker using an old view of the queue.

Pass only if the chosen change follows the stated rule, the stale request can't take the slot, the release service accepts at most one reservation, and the waiting change stays visible with a reason. If neither change qualifies, leave the slot empty. Keep the two requests, policy version, linked checks, decision record and the release service's accepted state. An agent can prepare the whole handoff; anyone should be able to reconstruct the decision from that small set of facts.`,
};
