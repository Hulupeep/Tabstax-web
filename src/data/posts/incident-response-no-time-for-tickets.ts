import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "incident-response-no-time-for-tickets",
  title: "Incident Response Has No Time for Tickets",
  seoTitle: "Incident Response Coordination Without Tickets",
  seoDescription:
    "When the service is down, you need to coordinate three people in 60 seconds. Ticket systems were not built for this. Here's what works.",
  date: "2026-03-01",
  author: "Colm Byrne",
  kicker: "CLI & Terminal",
  keywords: [
    "incident response coordination CLI",
    "incident management developer tools",
    "on-call coordination terminal",
    "production outage response",
    "incident response workflow",
    "DevOps incident coordination",
  ],
  excerpt:
    "The person who knows what to do needs three other people doing three things in sixty seconds. The ticket system was not designed for this moment.",
  faq: [
    {
      q: "Can HeyStax actually be used during a production incident?",
      a: "Yes, and the key reason is speed. Creating a Stax and assigning tasks takes seconds from the terminal. During an incident, the person coordinating can create an incident Stax, assign specific tasks to specific people, and everyone can see what they need to do immediately. The CLI is faster than any GUI for this kind of rapid coordination.",
    },
    {
      q: "What about PagerDuty and incident management platforms?",
      a: "PagerDuty is excellent at alerting — getting the right people awake and aware. What it does not do well is the coordination that happens after everyone is online. Who is doing what right now? What is the current hypothesis? What has been tried? That real-time coordination is where lightweight tools like HeyStax fill the gap.",
    },
    {
      q: "How does this work for distributed teams across time zones?",
      a: "Better than Slack threads, because the state is structured. When someone in a different time zone opens the incident Stax, they see assigned tasks with owners, not a 200-message Slack thread they have to read from the top. The context is pre-organised by the person who was there when it started.",
    },
  ],
  content:
    "Incident response coordination through a CLI is not a pattern most teams have considered, because most teams have not examined how their actual incident response works versus how they think it works. The gap between the two is where minutes — and sometimes hours — are lost.\n\n" +
    "\"We were still arguing about who owned the Jira board while the service was down.\" That line, from an engineering post-mortem published on a team blog, is the kind of sentence that sounds absurd in retrospect but is entirely predictable in the moment. When the adrenaline hits and the service is down, every second spent on tooling overhead is a second not spent on resolution.\n\n" +
    "## The Incident Timeline Nobody Wants to Publish\n\n" +
    "Here is a timeline reconstructed from a real incident, details changed to protect the team.\n\n" +
    "**00:00** — Alert fires. PagerDuty wakes up Sam, the on-call engineer.\n\n" +
    "**00:02** — Sam checks dashboards. Database connection pool exhausted. Replica reads are returning errors.\n\n" +
    "**00:04** — Sam knows what to do. Needs three things to happen simultaneously: isolate replica reads to the primary, scale up the connection pool, and notify downstream services to implement circuit breakers.\n\n" +
    "**00:05** — Sam opens Slack. Types in #incidents. \"DB connection pool exhausted, need help.\" Three people respond. Two of them ask \"what do you need me to do?\"\n\n" +
    "**00:08** — Sam explains the plan in Slack. One person misses the message because they are reading the scrollback. Another person starts working on the wrong thing because the instructions were in a thread they had not opened.\n\n" +
    "**00:14** — Someone asks if they should create a Jira ticket. Someone else has already created one, but in the wrong project. A third person is trying to find the incident response runbook in Confluence.\n\n" +
    "**00:22** — Actual remediation begins. Sam has been coordinating for eighteen minutes. The fix takes four.\n\n" +
    "**00:26** — Service restored. Total incident duration: 26 minutes. Time spent on coordination overhead: 18 minutes. Time spent on actual remediation: 4 minutes. The ratio is 4.5 to 1.\n\n" +
    "This ratio is not unusual. Post-mortems consistently show that the coordination cost of incidents exceeds the remediation cost. The person who knows what to do is bottlenecked not by the problem but by the overhead of telling other people what to do.\n\n" +
    "## Why Incident Coordination Breaks Down\n\n" +
    "The fundamental issue is that incident response requires zero-friction coordination. The person who understands the problem needs to distribute tasks to three or four people in sixty seconds. Every tool they use to do this adds friction. Slack is fast but unstructured — tasks get lost in threads. Jira is structured but slow — nobody creates tickets during an outage. Runbooks are useful but static — they describe what to do in general, not what to do right now.\n\n" +
    "The result is that most incident coordination happens through the worst possible medium: synchronous conversation in a rapidly scrolling Slack channel where critical instructions are interspersed with status updates, questions, and well-meaning suggestions from people who are trying to help but do not have the full picture.\n\n" +
    "## What the Old Approach Does Well\n\n" +
    "Jira's incident templates and PagerDuty integrations work well for post-incident review. The structured data — timeline, root cause, action items — is valuable for learning and prevention. The problem is not the tools. The problem is the moment. These tools are designed for reflection, not for action. They are excellent at documenting what happened after the fact. They are terrible at coordinating what should happen right now.\n\n" +
    "## Decision Criteria: Is Your Incident Response Actually Fast?\n\n" +
    "**How many minutes pass between \"someone knows what to do\" and \"everyone is doing it\"?** That gap is your coordination overhead. If it is more than two minutes, the tooling is the bottleneck.\n\n" +
    "**Can the incident commander assign tasks without leaving the terminal?** If they have to open a browser, navigate to a tool, and click through a form, they are context-switching during a crisis. Context switches during crises cost more than context switches during normal work.\n\n" +
    "**When a new person joins the incident, can they see what is happening without asking?** If the first thing someone does when they join an incident channel is ask \"what do you need me to do?\", the coordination state is not visible enough.\n\n" +
    "**Does the incident tool work the same way as the daily tool?** If your incident response requires a different tool with a different interface, you are asking people to learn a new tool during the highest-stress moment of their job. The [tool you use in a crisis](/blog/spinning-up-a-team-in-60-seconds) should be the same tool you use every day.\n\n" +
    "## What If There Was a Way to Coordinate in Sixty Seconds?\n\n" +
    "What if there was a way to create an incident context, assign tasks, and make the state visible to everyone — all from the terminal, in the time it takes to type three commands?\n\n" +
    "That is what this looks like: `hey -s 'DB outage prod'` creates the incident Stax. `hey -a @sam @dispatch` adds the responders. `hey 'isolate replica reads' @sam --now` assigns the first task with an urgency flag. Each person sees their assignment. The coordination state is visible without anyone asking \"what do you need me to do?\"\n\n" +
    "The commands take fifteen seconds to type. Compare that to eighteen minutes of Slack coordination. The difference is not just speed. It is structure. Slack is a stream. A Stax is a state. Streams scroll away. State persists until it is resolved.\n\n" +
    "After the incident, the same Stax serves as the incident record. What was assigned, to whom, when it was marked done. The [post-mortem writes itself](/blog/timesheets-that-fill-themselves) because the work was tracked at the moment it happened, not reconstructed afterward.\n\n" +
    "The tool you use in a crisis should be the same tool you use every day. That is not a design preference. It is a safety requirement. Muscle memory matters when the adrenaline hits. If `hey ls` is how you check tasks on a Tuesday morning, `hey ls` is how you check tasks during a production outage. Same command. Same interface. Same instinct.\n\n" +
    "## The Rehearsal That Happens Every Day\n\n" +
    "There is a concept in incident response called the \"peacetime rehearsal.\" The idea is that you practice incident response during normal operations so that the muscle memory is there when you need it. The problem with most rehearsals is that they use different tools than daily work. You run a tabletop exercise with a facilitator and a shared document. Then the real incident happens and you are in Slack, trying to coordinate in a tool that was not part of the rehearsal.\n\n" +
    "When the daily coordination tool and the incident coordination tool are the same tool, every day is a rehearsal. The engineer who uses `hey` to manage their daily tasks is already fluent in the interface when the incident hits. The assignment syntax is the same. The task visibility is the same. The status checking is the same. There is no cognitive load spent on the tool because the tool is familiar. All cognitive load goes to the problem.\n\n" +
    "This is why the best incident response teams are not the ones with the most sophisticated incident management platforms. They are the ones with the lowest friction between \"I know what needs to happen\" and \"everyone is doing it.\" The [speed of coordination](/blog/spinning-up-a-team-in-60-seconds) determines the speed of resolution. Everything else is secondary.\n\n" +
    "The teams that respond fastest are not the ones with the best runbooks. They are the ones where coordination costs nothing because the coordination tool is already in their hands.",
};
