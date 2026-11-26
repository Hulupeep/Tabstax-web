import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "skills-must-pass-the-journey",
  title: "The Skill Improved. Can You Still Finish the Job?",
  seoTitle: "Agent Skills Must Pass the Whole Journey",
  seoDescription: "Accessibility skills can improve an agent's output while functionality regresses. Test the whole journey, and keep proof of both outcomes.",
  date: "2026-11-25",
  author: "Colm Byrne",
  kicker: "Agentic Engineering",
  excerpt: "A better accessibility score can arrive alongside a broken feature. Evaluate an agent skill by the job people can still finish, not just the metric it improves.",
  keywords: ["agent skills evaluation", "accessibility regression testing", "human AI teams", "journey acceptance criteria"],
  faq: [{q: "Does loading an accessibility skill prove a website is accessible?", a: "No. Loading instructions records an intervention. Evidence must come from testing the resulting interface, including human evaluation where automated checks are insufficient."}, {q: "What should a skill experiment preserve?", a: "Preserve the starting code, story, acceptance criteria, environment and skill version. Record each output commit, functional and accessibility results, failures and reviewer time. Repeat runs to expose variability."}],
  content: `Imagine a volunteer signing up for a Saturday repair session. The new website looks clearer. Its contrast report has improved. But after choosing a time, the volunteer cannot complete the booking.

This is a hypothetical example, not a customer incident. It captures a problem that agent teams need to make visible: an intervention can improve the property it targets while making the overall job harder to finish.

An agent skill is a method offered to a worker. Accepting that method should depend on the resulting work. The useful question is whether people can complete the journey with the required safeguards intact.

## What the new study found

In a [preprint submitted on 22 November 2026](https://arxiv.org/abs/2611.29822), Syed Fatiul Huq and colleagues evaluated 90 generated websites across three projects. Every baseline site had detected accessibility violations, although 80 received perfect functional scores under the study's checks.

They reran 24 matched configurations with each of two accessibility skills. Average accessibility scores improved, but no resulting site was free of violations. With the general skill, mean functional correctness fell by 19.01 points. That is a score difference within this experiment, not a production failure rate.

The limits matter: three projects, selected intervention packages, automated measures and three blind testers evaluating six sites. Matching configurations does not eliminate generation variability. This is preliminary evidence, not a verdict on every skill or model. The authors link a replication package; we could not retrieve it during this editorial check and have not independently reproduced the results.

## Keep two promises visible

Our interpretation is that teams need to evaluate the intended improvement and the original promise together. If a skill improves a form's labels, the form must still save the right information. If a security intervention narrows access, the intended person must still be able to do their authorised work.

A single score hides that relationship. An average can rise while a critical journey breaks. A release decision needs to retain the individual results, including the failure that blocks someone from finishing.

This does not mean every old behaviour deserves preservation. Sometimes a useful change deliberately removes an unsafe shortcut. Record that as a changed requirement, with an accountable decision, before grading the output. Otherwise the team cannot distinguish an intentional tradeoff from an accidental regression.

Accessibility also cannot be reduced to a scanner. [W3C's evaluation guidance](https://www.w3.org/WAI/test-evaluate/tools/selecting/) explains that tools cannot automatically check every accessibility aspect and can produce misleading results. Human judgement remains necessary. A clean automated report is evidence about the checks performed, not a certificate that everyone can use the product.

## Better tools make this easier to test

Other products are doing useful work around the problem. [Claude Ship, announced on 23 November](https://claude.com/resources/articles/introducing-claude-ship), separates code review, repair and policy-based approval. Its documentation says PR Steward is designed not to approve or merge, while GitHub rules determine what can merge. That separation gives teams places to attach their own acceptance evidence.

Anthropic reports improved internal throughput and fewer reverted PRs, but does not isolate the product's causal contribution. Those figures do not establish that a particular accessibility change preserves a particular booking journey.

[AgentGrid's 23 November release notes](https://agentgrid.sh/docs/changelog) describe restart recovery and respecting the selected account during quota waits. [Puffle's memory documentation](https://puffle.ai/docs/memory) describes editable notes with version history and reasons for changes. Continuity and inspectable memory both help people understand how work developed. Neither document, by itself, measures the effect of a skill on a finished journey. We have not tested either product for this purpose.

The opportunity is to connect these useful capabilities to a small, repeatable decision: keep this method, change it, or stop using it for this job.

## A small experiment you can actually finish

Start with one existing journey in a sandbox. Use synthetic records. A suitable story is: as a volunteer using a keyboard, I can choose an available session, confirm my booking and find its confirmation after reloading.

Freeze the starting commit, the story and its acceptance criteria. Keep the model, available tools and execution budget constant. Run three builds without the proposed accessibility skill and three with a pinned version. Randomise the order. Six runs are a screening exercise, not enough to establish a general effect.

Write the criteria before the runs. The chosen session must be saved correctly. An unavailable session must be refused. Retrying must not create a second booking. Keyboard navigation must reach every control in a sensible order, with visible focus. Controls must have meaningful names. Confirmation must remain understandable after reload.

At each relevant state, run the same functional assertions and accessibility checks. Inspect the keyboard journey yourself and arrange an appropriate assistive-technology review before making wider accessibility claims. Include the error and confirmation states. Checking only the opening screen leaves much of the job unexamined.

Keep one evidence bundle per run: starting and output commits, skill version, environment, test results, accessibility findings, journey recording and reviewer notes. Record time spent resolving failures as well as execution time. A method that saves generation time but creates an hour of repair has transferred work rather than removed it.

Make the decision per run before comparing averages. Reject a candidate with a newly broken critical criterion. Where accessibility improves and the functional checks hold, inspect the remaining barriers and decide whether another bounded iteration is worthwhile. Preserve unsuccessful runs too. They are part of the comparison.

The definition of done for this experiment is a reviewable keep, revise or reject decision supported by those bundles. Merely recording that the skill was loaded does not meet it.

## What this means for HeyStax

HeyStax already holds actions with state and done conditions. Its current [shipped ledger](https://hulupeep.github.io/TabStax-Help/docs/shipped-ledger) distinguishes observed capability from work still awaiting verification. That is the right discipline to bring to skill evaluation.

The proposed next step is to connect a skill version to the work attempted and the checks actually passed. This is a design recommendation, not a claim that automatic skill comparisons are shipped. A receipt should make it possible to inspect a failure as readily as a success.

For a founder, that can protect the customer journey. For a community group, it can protect someone's ability to take part. The shared standard is concrete: the improvement earns its place when the people relying on the result can still finish the job.

Sources checked 25 November 2026. The accessibility paper is a preprint; product descriptions come from official documentation. The proposed experiment has not been run.`
};
