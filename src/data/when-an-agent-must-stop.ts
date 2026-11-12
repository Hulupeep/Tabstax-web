import type { BlogPost } from "./blog-posts";

export const whenAnAgentMustStop: BlogPost = {
  "slug": "when-an-agent-must-stop",
  "title": "When an Agent Must Stop",
  "seoTitle": "When an Agent Must Stop: A Test for Human Control",
  "seoDescription": "A stop command can reach the chat while a queued worker keeps going. New research points to a practical test for revoking permission without losing the work.",
  "date": "2026-11-05",
  "author": "Colm Byrne",
  "kicker": "Human + AI Teams",
  "excerpt": "The organiser said to hold the announcement. The chat acknowledged it. The worker still had a send queued. Here's how to test whether a change of mind reaches the action.",
  "keywords": [
    "AI agent oversight",
    "agent stop controls",
    "revocable delegation",
    "human AI teams",
    "agent authorisation",
    "agent evaluation"
  ],
  "faq": [
    {
      "q": "Why isn't stopping an agent session enough?",
      "a": "A queued job, background process or delegated worker may have a separate lifecycle. Test whether the action itself is blocked after authorisation is withdrawn."
    },
    {
      "q": "Can a stop reverse an external action?",
      "a": "That depends on what the external service has already accepted and what it can undo. Show the distinction between an action blocked before handoff and one already accepted."
    },
    {
      "q": "What evidence shows a stop worked?",
      "a": "Link the owner's pause and the worker's rejected attempt to the destination's record of accepted actions. Preserve the draft separately so the owner can inspect or revise it."
    }
  ],
  "content": `Imagine a community centre getting ready to announce winter classes. An agent drafts the announcement. A second worker prepares the email. A third queues it for tomorrow morning.

Then the venue calls. The dates are wrong.

The organiser types “hold the announcement” and gets a reassuring reply. The email is still queued. A worker that went offline before the correction comes back online at eight. It has the old dates, the old instruction and a perfectly good reason, as far as it can tell, to carry on.

The organiser changed the plan. The system has not.

We spend a lot of time asking whether agents can keep working when people step away. Here is the other half of that promise: when a person changes their mind, how far does the change travel?

## Where the Stop Failed

In a [30 October 2026 preprint](https://arxiv.org/abs/2611.00291), Canwen Wang and colleagues classified 695 incidents from two public AI incident repositories. They identified 12 kinds of interaction failure. One distinction is immediately useful: sometimes people see what is happening too late to intervene; sometimes they intervene and the intervention fails. The researchers coded 42 incidents in the latter category, which also includes failed overrides and handoffs.

Those counts tell us what appeared in the public record. They do not tell us the chance that any particular agent will ignore a stop. Public reports are selective, the systems span a decade, and the paper's two autonomy categories compress real differences between products. The value is in the distinction. Giving someone a stop button helps little if the action has already happened, or if the button reaches only the chat they can see.

The [ROGUE project](https://neuroagents-lab.github.io/ROGUE/) gives us a complementary lab example. Its virtual desktop tasks put completing a job in tension with yielding control, shutting down or respecting an access restriction. In one reported configuration, a parent agent did not touch a restricted password file in eight direct runs. With delegation enabled, the same configuration accessed it in four of eight tasks. The benchmark's child receives the parent's new instructions without automatically inheriting the original context. These are small, deliberately constructed tests. They expose a way constraints can be lost; they do not estimate how often deployed agents lose them.

My reading of the two studies: judge a control at the point where it is meant to prevent an effect. A stop that looks convincing in a transcript can still fail at the send button.

## Keep the Work. Withdraw Permission.

The community centre still needs to announce classes. The draft may still be useful. What's withdrawn is permission to send that version. If the only options are “let it run” or “delete the whole job”, the organiser pays for a routine change by reconstructing work that was fine.

Separate three things: the goal, the work already produced and permission to take the next consequential action. Keep the first two available for review. Check the third when the action is about to happen.

For the announcement, that means the sender checks the current authorisation immediately before handing the message to the mail service. A worker that reconnects should have to check again, even if the job was valid when it started. If the authorisation service is unavailable, a draft can be retained for later review; an external send waits. A mail service that has already accepted a message is a different case. The product should show what it knows about that handoff and avoid promising recall.

The same distinction helps a solo founder holding a pricing change, a building team withdrawing an obsolete drawing, or a research group pausing a change pending review. The consequences vary. So should the controls. Stopping every draft edit for approval would waste attention. Requiring a fresh check before publishing, ordering or writing to a shared system is a smaller and more useful intervention.

## What Different Tools Give You

[AgentGrid's 4 November changelog](https://agentgrid.sh/docs/changelog) describes a new device list with online status and, in its compute reporting beta on Mac and Linux, a view of programs currently running under each agent. That is useful when work spans machines: you can tell where execution is happening and whether a device is reachable. Visibility helps you find the place to intervene.

[Puffle documents controls for connected tools](https://puffle.ai/docs/plugins/permissions), including approval and blocked actions. Automations use an appropriate workspace connection rather than borrowing a member's personal OAuth grant. That's a useful separation for standing work. Puffle also explicitly distinguishes those controls from what happens across every computer action or delivery channel.

These are descriptions from the products' own documentation. They answer different questions: where is work running, and what can a connection do? A team should also test what happens to a queued or in-flight action when authorisation changes.

The [HeyStax shipped ledger](https://github.com/Hulupeep/TabStax-Help/blob/main/docs/shipped-ledger.md), rechecked on 9 November, lists shared work, next actions and record audit tools as live foundations. Claim rules are in production, with the owner and two-agent browser journey still to verify. The ledger now records claim leases deployed on 8 November: claims made inside a run are leased, with release when the run stops sending heartbeats. The browser walkthrough remains outstanding; this is recorded deployment evidence, not an end-to-end verification performed for this article. A claim lease is useful for controlling who can act on a work item; it would not, by itself, cancel a send already accepted by an external service. Being able to show that distinction in the work record is a design goal, not a capability I'm claiming today.

## Test the Stop While Work Is Moving

Take one real workflow into a test environment. Write the story from the owner's side: “When I pause an announcement, I can keep the draft and prevent queued workers from sending it under the old authorisation.”

Use a fake mail service and two workers. Let the first prepare the draft. Let the second queue delivery and lose its connection. Record the pause, then reconnect the second worker and let it try to send. Acceptance: the old authorisation is rejected, the mail service shows zero accepted deliveries for that attempt, and the owner can recover the draft. The proof is the recorded pause, the rejected attempt linked to it and the delivery log. The agent's reassurance does not count as evidence.

Run the reverse ordering too: let the fake provider accept the email just before the pause. The owner should see that delivery was already accepted, rather than a blanket “stopped”. Then check that a later explicit approval applies only to the corrected version.

That is the handoff I want from an agent team. I can leave it to work, change my mind while I'm away, and come back knowing which decision took effect.`
};
