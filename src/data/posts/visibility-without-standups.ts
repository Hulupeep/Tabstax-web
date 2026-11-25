import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "visibility-without-standups",
  title: "Visibility Without Standups: What Async Teams Actually Need",
  seoTitle: "Async Team Visibility Without Daily Standups",
  seoDescription:
    "Standups exist because work is invisible. Fix the visibility, and the meeting becomes optional. Here's what async teams actually need.",
  date: "2026-03-01",
  author: "Colm Byrne",
  kicker: "CLI & Terminal",
  keywords: [
    "async team visibility no standups",
    "remote team coordination",
    "async standup alternative",
    "team visibility tools",
    "developer standup alternative",
    "async engineering team",
  ],
  excerpt:
    "Your team does standups to find out what people are working on. If the work was already visible, the standup would be a social call — pleasant but optional.",
  faq: [
    {
      q: "Are you saying standups are bad?",
      a: "No. Standups have genuine social value — they create rhythm, surface blockers that people would not proactively share, and build team cohesion. What we are saying is that the information-gathering function of standups — finding out what everyone is working on — should not require a meeting. If the work is visible, the standup can focus on what meetings are actually good at: nuanced discussion and relationship building.",
    },
    {
      q: "How does async visibility work for remote teams?",
      a: "Each team member works in their Stax with their tasks visible. The dashboard shows all active Stax with colour-coded ownership — you can see who is working on what without asking. When someone marks a task done, the update is visible everywhere. The hey ls --team command shows all team activity from the terminal.",
    },
    {
      q: "What about blockers — how do those surface without standups?",
      a: "Blockers are the genuine use case for synchronous communication. HeyStax surfaces task status, but if someone is stuck and does not say so, no tool can fix that. The argument is not that standups should disappear entirely, but that they should focus on the things only a meeting can do — like drawing out blockers — rather than things a dashboard can do.",
    },
  ],
  content:
    "Async team visibility without daily standups is not a radical proposition. It is the logical consequence of making work visible. Standups exist for a specific reason: to compensate for invisible work. If the work was visible — if everyone could see what everyone else was doing without asking — the information-gathering function of the standup would be redundant. The standup would still have social value. But the fifteen minutes spent going around the room saying \"yesterday I worked on X, today I'm working on Y\" would be unnecessary.\n\n" +
    "\"We do standups to find out what people are working on. We should already know.\" That observation, from an async-first engineering team, captures the problem precisely. The standup is a patch for a visibility problem. It is a daily meeting that exists because the tools the team uses do not make work visible enough to make the meeting unnecessary.\n\n" +
    "## A Day in an Invisible Team\n\n" +
    "Here is what a Monday morning looks like on a team where work is invisible. Aisha is the tech lead. She manages five engineers across two time zones. She arrives at her desk and does not know what happened over the weekend. She does not know if the staging deploy went out. She does not know if the bug fix from Friday was merged. She does not know what her team is planning to work on today.\n\n" +
    "To find out, she has two options. She can read Slack, scrolling through channels and threads to piece together a picture from fragments. This takes twenty minutes and the picture is incomplete. Or she can wait for the standup at 10am, where each person will spend two minutes summarising their work. This takes fifteen minutes of meeting time, plus the waiting.\n\n" +
    "Neither option is good. Both require Aisha to actively seek information that should be passively available. The work happened. The results exist. But the results are locked inside the tools where the work happened — git commits, Slack messages, Jira transitions — and Aisha has to cross-reference multiple sources to build a coherent picture.\n\n" +
    "Now multiply this across every tech lead, every manager, every team member who needs to know what someone else is doing. The coordination cost is enormous, and most of it is spent not on coordinating but on discovering what there is to coordinate.\n\n" +
    "## The Real Purpose of Standups\n\n" +
    "Standups serve three functions. The first is information sharing: what did you do, what are you doing, what are you blocked by. The second is social: creating rhythm and presence in a team that might otherwise feel atomised. The third is escalation: surfacing problems that someone is reluctant to bring up proactively.\n\n" +
    "Of these three, only the first — information sharing — can be fully replaced by tooling. The social and escalation functions require human interaction. A dashboard cannot draw out the engineer who is stuck but embarrassed to say so. A status page cannot create the sense of shared purpose that a well-run standup provides.\n\n" +
    "The problem is that the first function dominates most standups. The fifteen minutes are spent primarily on \"here is what I did / here is what I'm doing,\" leaving little time for the social and escalation functions that actually require a meeting. If the information-sharing function was handled by tooling, the standup could be shorter, less frequent, and focused on the things only a meeting can do.\n\n" +
    "## What Standups Do Well\n\n" +
    "Standups have genuine social value. They create rhythm and cadence in a team. They provide a predictable point of contact, especially for remote teams where casual hallway conversations do not exist. They surface blockers that people would not proactively share — sometimes the act of saying \"I'm stuck\" to a group is the push someone needs to ask for help. For teams where interpersonal trust is still developing, the daily touchpoint has real value.\n\n" +
    "## Decision Criteria: Is Your Standup Earning Its Time?\n\n" +
    "**What percentage of standup time is spent on information that could be visible without a meeting?** If more than half the meeting is \"yesterday I did X, today I'm doing Y,\" the meeting is compensating for invisible work.\n\n" +
    "**Do team members report the same information in multiple places?** If someone updates Jira, then reports the same update in standup, then posts it in Slack, the work is visible — but only through redundant effort. One source of truth, visible everywhere, eliminates the duplication.\n\n" +
    "**How often does the standup surface something genuinely surprising?** If the standups are predictable — everyone reports roughly what was expected — the meeting is confirming what is already known, not discovering what is unknown.\n\n" +
    "**Would the team function well with standups twice a week instead of daily?** If yes, the daily cadence is habit, not necessity. The information need can be met by visibility tooling, with the meeting reserved for the functions that require human interaction.\n\n" +
    "## What If There Was a Way to Make Work Visible Without a Meeting?\n\n" +
    "What if there was a way for Aisha to see what her team did over the weekend without reading Slack or waiting for a meeting? What if the work left a visible trace, automatically, as a side effect of being done?\n\n" +
    "That is what `hey ls stax` provides: a view of all active projects. `hey ls --team` shows what the team is working on — tasks, assignments, completion status. The dashboard shows the same information visually, with colour-coded ownership. When an engineer marks a task done with `hey done 1`, the update is visible everywhere — in the CLI, in the [browser extension](/blog/tabs-are-not-the-problem), on the dashboard. No separate reporting step. No Slack update. No standup item.\n\n" +
    "Aisha's Monday morning changes. She opens the dashboard. The staging deploy is marked done. The bug fix shows as completed Friday at 4pm. Two new tasks were created over the weekend by a teammate in a different time zone. She knows the state of every project without asking anyone anything.\n\n" +
    "The standup, when it happens, is different now. Nobody reports what they did — that is visible. Instead, they talk about what is hard. What is uncertain. Where they need help. The meeting shifts from information sharing to problem solving. It gets shorter. It gets better. And eventually, it might get optional.\n\n" +
    "## The Meeting That Evolves\n\n" +
    "The teams that have adopted always-on visibility do not universally drop standups. What they do is transform them. The standup evolves from a reporting ceremony into a problem-solving session. When everyone can see what everyone else is doing, the meeting no longer needs to establish the baseline. It can start from the baseline and go deeper.\n\n" +
    "The evolved standup sounds different. Instead of \"yesterday I worked on the auth refactor,\" the conversation becomes \"I'm stuck on the token refresh edge case — has anyone seen this pattern before?\" Instead of \"today I'm going to work on the API docs,\" the conversation becomes \"I noticed the payment tests are flaky, should we prioritise that before the release?\" The information content per minute of meeting time increases dramatically because the low-value information — who did what — is already known.\n\n" +
    "Some teams move to standups twice a week instead of daily. Some move to standups only when someone flags a blocker. Some keep the daily cadence but reduce the meeting to five minutes. The right cadence depends on the team. What does not depend on the team is the principle: meetings should provide value that tools cannot. Information sharing is something tools can do. Problem solving, emotional support, and creative brainstorming are things meetings do well. The standup earns its time when it focuses on its strengths.\n\n" +
    "Standups are a patch for a visibility problem. Fix the visibility, and you fix the meeting. The information that [fills a timesheet](/blog/timesheets-that-fill-themselves) is the same information that makes standups redundant — [timestamps and task completions](/blog/human-context-engineering), captured at the point of work, visible to everyone who needs to know.",
};
