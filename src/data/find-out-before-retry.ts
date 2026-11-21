import type { BlogPost } from "./blog-posts";

export const findOutBeforeRetry: BlogPost = {
  slug: "find-out-before-you-retry",
  title: "Find Out Before You Retry",
  seoTitle: "Agent Recovery: Find Out Before You Retry | HeyStax",
  seoDescription: "A lost reply can hide a completed action. New fault-injection research shows why agent teams need a way to recover the outcome before trying again.",
  date: "2026-11-20",
  author: "Colm Byrne",
  kicker: "Agentic Engineering",
  excerpt: "The worker stopped. The outside world may already have changed. Reliable handover starts by resolving that uncertainty, with evidence the next worker can check.",
  keywords: ["agent recovery", "idempotency", "agent tool reliability", "human AI teams", "auditable workflows"],
  faq: [],
  content: `Imagine a community organiser asking an agent to reserve one room for Thursday. The booking request goes out. Then the connection drops.

The organiser sees an error. The venue may see a booking. A replacement agent sees an unfinished card and offers to try again.

That is the dangerous moment. A fresh attempt could reserve a second room. Marking the card done could conceal a booking that never happened. The next useful move is to establish what the venue recorded.

For teams of people and agents, this creates a practical requirement: **an interrupted action needs an outcome check before it becomes fresh work.** Keeping the mission alive includes preserving uncertainty about what has already happened.

## What the new study actually tests

Song Xu’s [Idempotency Is Not Recovery](https://arxiv.org/abs/2611.23353), submitted on 17 November 2026, tests one runtime under injected faults. It replays 96 captured model responses from 24 constructed cases against a controlled target.

In 200 known crash-and-replay pairs, the full configuration produced no repeated effects; simpler baselines produced 117. Removing reconciliation left all 100 known post-effect crash outcomes ambiguous, despite no duplicates.

The costs matter. Full-runtime throughput was roughly one-seventh of the fail-open baseline. Evidence-write faults left 75 of 100 trials per platform unresolved.

These are author-reported measurements from one single-host implementation, using reused inputs and a controlled SQLite target. Windows and Linux runs are consistency checks, not independent replications. The preprint is not peer reviewed; code and full records are not publicly deposited. It does not establish production failure rates or general exactly-once guarantees.

Its useful distinction is narrower: preventing another effect and discovering the first effect’s outcome are separate jobs.

## Give the intention a stable identity

This problem predates agents. Malcolm Featonby’s [Amazon Builders’ Library explanation](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) describes caller-provided request identities and why identical parameters can represent different intentions. Two identical server requests might be an accidental repeat or a deliberate request for two servers.

The same question applies to the room. “Reserve the same room again” could mean recover Thursday’s interrupted booking. It could also mean make a second booking for another group. A new worker should not decide that from wording alone.

[Stripe’s current API documentation](https://docs.stripe.com/api/idempotent_requests) makes the contract concrete. API v1 retries with the same idempotency key return the saved result after execution starts, including a saved error. Keys may be pruned after at least 24 hours; reuse after pruning creates a new request. API v2 has different recovery semantics. Check the actual endpoint and version.

My design recommendation is to attach a stable operation reference to the authorised intention and carry it through worker replacement. Record the destination, requested change and relevant scope beside it. If the intention changes, treat that as a new decision rather than quietly recycling an old reference.

This reference is useful only when the receiving system honours it, or offers another reliable way to identify the resulting action. A label in your own task store cannot impose that contract on somebody else’s service.

## Show uncertainty where the next decision happens

Consider a card that says “Booking attempted. Confirmation lost.” It needs an owner and a next move: check the venue using the operation reference, then attach the result.

The visible outcome should distinguish a confirmed booking, a confirmed rejection, and an unresolved attempt. An unavailable lookup belongs in that third state. It should carry a check-again time or a route to a person who can resolve it.

For an individual founder, the benefit is fewer decisions made from incomplete history. For a construction coordinator, it could prevent a repeated materials order. For a research team, it could preserve uncertainty about whether an instrument run was started. These are proposed applications, not results measured by the paper.

A responsible recovery policy also needs a deadline. Holding an uncertain room booking forever can cost the event its venue. Decide in advance who can accept that risk, cancel, or choose an alternative. Record the tradeoff when they do.

## Give other tools credit for the part they solve

[AgentGrid’s 19 November release](https://agentgrid.sh/docs/changelog) adds an experimental, off-by-default read-only Team view for coordinator exchanges, alongside a shared approvals inbox. It also reports clearer worker-failure output and stopping a CLI worker’s whole process tree. These are valuable ways to expose coordination and control running work. The Team view’s experimental status was checked on 21 November.

[Puffle’s run-history documentation](https://puffle.ai/docs/automations/run-history) distinguishes an automation definition from each saved run. It directs people to the trigger, status, result and recorded error, and says a failed direct run is terminal. That separation makes investigation easier.

These are documented product behaviours, not independently tested here. Neither page, by itself, establishes what an external service did after a lost reply. When choosing a tool, ask to see that particular recovery journey as well as the transcript and approvals.

## A small test worth running

Start in a disposable ticketing sandbox. Write the story: “As the person accountable for this request, I can replace an interrupted worker without creating a second ticket or losing track of the first.”

Set the acceptance criteria before running it. One authorised intention must produce at most one ticket. A replacement worker must inherit the operation reference and uncertainty. Completion requires a target-side ticket reference that another reader can verify.

Run three cases. First, interrupt before dispatch to the ticketing service. Second, let the sandbox create it but drop the confirmation. Third, create it, drop the confirmation and make the lookup unavailable during recovery.

In the first case, a safe continuation may create the ticket after establishing the earlier attempt did not. An empty search alone cannot establish that: the target must support a reliable correlation and consistency contract, including handling late requests. In the second, recovery should find the existing ticket and avoid another creation. In the third, the card should remain unresolved with an owner and a bounded recovery step.

Keep the intended operation, interruption point, target’s actual records, worker reports and final disposition together. Count duplicate tickets, missing tickets and unresolved outcomes separately. Repeat with a replacement worker that has no access to the original chat.

Include an uninterrupted control so a broken sandbox cannot earn a false pass by refusing every action. This is a proposed experiment, not a test we have run.

## What this means for HeyStax

HeyStax’s [shipped ledger, checked 20 November](https://github.com/Hulupeep/TabStax-Help/blob/main/docs/shipped-ledger.md) records action state, waiting information and done conditions in production. It also records a production test where a page-presence check closed a card on success and reopened one on a missing page.

That is a useful foundation for keeping responsibility and evidence together. It does not demonstrate recovery of arbitrary external effects after an interruption. That journey still needs its own proof.

The next useful slice is small: keep one uncertain operation attached to its original intention, hand it to a fresh worker, and show how its outcome was established. The person returning tomorrow should be able to see what happened, what remains unknown, and who owes the next move.

Sources checked 20 November 2026: the 17 November research preprint, Amazon’s engineering analysis, Stripe’s current API reference, AgentGrid’s dated release notes, Puffle’s current documentation and HeyStax’s shipped ledger. The proposed workflow and experiment are our interpretation.`,
};
