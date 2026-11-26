import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "follow-the-data",
  title: "Follow the Data Before You Trust the Review",
  seoTitle: "Follow the Data: How to Verify an AI Privacy Review",
  seoDescription: "A privacy-focused AI review can catch more defects and raise more alarms. Ask for the data path, then test whether sensitive information reaches the wrong destination.",
  date: "2026-11-17",
  author: "HeyStax Editorial",
  kicker: "Working with AI",
  excerpt: "The export looks right. The error log tells a different story. Give an AI reviewer a specific privacy question, then check where the data actually went.",
  keywords: ["AI code review", "privacy testing", "data flow", "agent verification", "audit evidence"],
  faq: [
    { q: "What makes an AI privacy finding actionable?", a: "Name the data, the route it takes, the destination that should not receive it, and a safe way to reproduce the behavior with synthetic data." },
    { q: "Does a focused AI review prove that a feature protects personal data?", a: "No. It can surface candidate problems. Verify the relevant behavior independently and record exactly which route and circumstances were checked." },
  ],
  content: `The export looks right. You open the spreadsheet and see the three columns you asked for. The agent has run its tests. Another agent has reviewed the change and found nothing to block. Then you look at the log from a failed export and find the full input row, including fields that were never meant to leave the application.

This is an invented example, but it points to a question any small team can ask of a real change: **where can this data end up when the normal path fails?** A generic code review may be looking for a broken export. A privacy review is looking for what travelled along the way. Those are different jobs, even when they read the same pull request.

## Point the reviewer at the thing you want to protect

[PrivacyPR, a preprint submitted on 13 November 2026](https://arxiv.org/abs/2611.18293), gives that distinction some evidence. Hua Yang and colleagues assembled a dataset from merged GitHub pull requests. For the benchmark, they reversed accepted privacy fixes so the change under review reintroduced the known defect. The evaluation used 100 such cases and 100 controls. Two coding agents found 42–51% of the known defects when asked for a generic review and 88–91% when explicitly asked to review privacy. The focused reviewers also flagged privacy issues on 11–15% of the control PRs.

Some of those flags may point to real problems: the controls were selected as non-fixes, which does not make them certified clean. There is a harder check in the [full paper](https://arxiv.org/html/2611.18293v1). When the authors presented the original fixes in the forward direction, the agents still claimed to see the original defect in 13–21% of cases under the privacy prompt. That is a reason to check the claimed path before changing code or blocking a release.

The figures describe a selected set of relatively small changes, two agent harnesses on the same underlying model, and model judges scoring the reviews. They are not a production detection rate or a compliance audit. The result is practical anyway: a cheap generic review is a poor substitute for deciding which kind of mistake matters, and a specific review can produce work that someone still needs to resolve.

## Separate the finding from the proof

Ask the reviewer to identify the source, the route, the destination and the rule it thinks the change breaks. A note saying “possible personal data leak” is hard to act on. A note saying “the export error handler attaches the input row to a remote log event when the file writer throws” gives a builder a line of enquiry. It also gives the builder a way to disagree: perhaps the log collector drops that field before storing it, or the route is unreachable under the production configuration. Either answer should point to evidence.

There is a place for the broader review. A specialist looking at logs might miss a permissions regression that a general reviewer would notice. Running an expensive specialist pass on every typo is a poor deal, too. Choose the trigger: changes that introduce an external destination, expand access, change retention, or start collecting a new class of data deserve the extra pass. A small team can start with one trigger and see how many confirmed findings it gets for the attention it spends.

[OpenAI’s 16 November healthcare computer-use report](https://openai.com/index/advancing-computer-use-for-healthcare-teams/) illustrates an adjacent point. Its synthetic MRI authorisation demo spans a clinical record and an insurance portal; in a separate evaluation, reviewers assessed actions alongside the notes, orders and messages produced. The vendor’s results cannot verify the data handling of another team’s integration. The useful design idea is to inspect the steps as well as the deliverable whenever a workflow crosses systems.

## Give the reviewer a small job

[AgentGrid](https://agentgrid.sh/docs/changelog) documents read-only modes for supported coding workers. That gives a team a way to split inspection from editing. [Puffle](https://puffle.ai/docs/plugins/permissions) lets teams block or require approval for connected tools, and distinguishes personal from workspace connections. That helps set a boundary before an automation runs. Neither documented control, on its own, tells you whether your application writes a field to a remote log.

HeyStax gives people and agents a shared place to put the requirement and the result. Its [shipped ledger](https://github.com/Hulupeep/TabStax-Help/blob/main/docs/shipped-ledger.md) records a narrow production test: an independently fetched page returned success and closed a checked card; a missing page reopened one. A separate data-path check is a proposed workflow, not a claim that HeyStax can already inspect every destination. Put the verdict and a link to redacted proof on the card; keep sensitive material in the system that is meant to hold it.

## Run a two-case test before making it a gate

Take one export story. Put a unique synthetic value in a field the export and its diagnostics must never carry. Prepare two otherwise comparable changes: one keeps that value out, the other deliberately records it on the failure path in a local test collector. Keep the expected answers away from the reviewer. Ask a generic reviewer and a privacy-focused reviewer to inspect each change, then run the same success and failure cases against both. Check the exported file and the collector for the marker. Also check that the collector saw the expected error event: an empty capture is weak proof if logging never worked.

Keep the story, diffs, review findings and independent destination checks together. Record whether the reviewer caught the seeded mistake and whether it accused the clean change of the same thing. Two cases are a smoke test, not an estimate of how well the reviewer will perform. They can still tell you whether your team knows what it means when a privacy review passes.`,
};
