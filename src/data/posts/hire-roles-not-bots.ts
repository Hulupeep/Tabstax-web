import type { BlogPost } from "../blog-types";

// Evidence for every number and feature claim is listed in the PR that added this post.
// Stax numbers are from stax_get on the TabStax #project stax, read 26 Nov 2026.
export const post: BlogPost = {
  slug: "hire-roles-not-bots",
  title: "Hire Roles, Not Bots",
  seoTitle: "Hire Roles, Not Bots: Keep the Job When You Swap the AI",
  seoDescription:
    "Bots change every month. The job should not. In HeyStax you hire a role with a mission and a brief, and Claude Code, Codex or Grok works under it.",
  date: "2026-11-26",
  author: "Colm Byrne",
  kicker: "Roles, Not Bots",
  excerpt:
    "You will change AI tools again next month. If the job lives in a chat, it goes with the chat. Put the job in a role, and let the workers under it come and go.",
  keywords: [
    "hire roles not bots",
    "ai agent roles",
    "swap ai model",
    "claude code codex grok",
    "solo founder ai team",
    "heystax",
  ],
  faq: [
    {
      q: "What is a role in HeyStax?",
      a: "A named job on your stax, like @heystax-builder or @heystax-marketing. It has a brief: a mission, instructions and boundaries, kept with a revision number. Cards are assigned to the role, not to a particular bot.",
    },
    {
      q: "Which bots can fill a role?",
      a: "The homepage names Claude, Codex and Grok. The listener that runs a role's cards on your machine starts with --agent claude or --agent codex. Any MCP client can register as an agent and get its own token.",
    },
    {
      q: "What happens to the work when a worker goes away?",
      a: "The role, its brief and its cards stay on the stax. Cards assigned to a role with no worker wait there until a worker connects. On our own stax on 26 Nov, two roles had workers that went offline, and their cards were still on the stax, waiting.",
    },
    {
      q: "Can the old bot hand over to the new one?",
      a: "Not yet. A supervised handover, where the outgoing worker watches the new one until it proves itself, is planned and open as tabstax issue 1021. Today you connect a new worker to the role and it reads the brief and the cards.",
    },
  ],
  content: [
    "You have probably changed AI tools at least once this year. Maybe twice. A new model came out. Another one got cheaper. A friend swore by a third.",
    "Each time, something went missing. The chat where you explained your product. The list of what you had already tried. The rule you set about never emailing a customer twice in a week. All of it lived in a conversation, and the conversation stayed behind with the old tool.",
    "This post is about one idea: hire roles, not bots.",
    "## The job should outlive the tool",
    "When you hire a person, you do not hire them for a laptop. You hire them for a job. If they leave, the job is still there. Someone new sits down, reads the notes and picks up where the work stands.",
    "Most of us do the opposite with AI. We hire the bot. The job is whatever we typed into it this morning. When we swap the bot, the job has to be typed in again, from memory, by the one person who is already the bottleneck.",
    "HeyStax turns that round. The job is a role on your stax. The bot is a worker under that role. Workers can change. The role stays.",
    "## What a role holds",
    "A role has a name, like @heystax-builder or @heystax-marketing. It has a brief: a mission, instructions and the edges it must not cross. The brief is kept on the stax with a revision number, so a change is a new revision, not an edit nobody can see.",
    "Cards are assigned to the role. Not to Claude. Not to Codex. To the role.",
    "When a worker starts, it reads the brief from HeyStax, not from a chat. The brief this post was written under starts like this: \"This is your job, read from HeyStax; if a chat disagrees, HeyStax wins.\"",
    "That one line does a lot. It means you can close the chat, change the model or move to another machine, and the job is still written down in one place.",
    "## What a worker is",
    "A worker is the bot doing the job right now. The HeyStax homepage puts it plainly: \"Give a role a mission and a goal. Claude, Codex or Grok can fill it, on your machine or theirs. Change the model next month and the role, its history and its work stay put.\"",
    "In practice, you connect a worker to a role from the folder it should work in. The command names the stax and the role. Then a listener runs the role's cards on that machine, with Claude Code or with Codex. Any MCP client, Grok included, can register as an agent and use its own token.",
    "Since 24 Nov, an agent has to say what it is when it registers: its kind (brain, builder or scheduled), its platform and its purpose. So when you look at a role, you can see which worker is on it and what it runs on.",
    "And every write records the agent that made it. That has been true since agents became peers on the stax in October. You can check what was done in your name, and by which worker.",
    "## What it looks like on our own stax",
    "We run HeyStax on HeyStax. This is what the TabStax stax showed on 26 Nov 2026:",
    "**9** roles. **2** with a worker running: the builder and marketing. **7** not working yet. The builder role has logged **158** runs this month.",
    "Read the 7 plainly. Five of those roles have never had a worker connected. They have a name, a brief and a place for cards, and nobody doing the job yet. The other two had workers that went offline: one on 17 Nov, one in the early hours of 26 Nov.",
    "Here is the part that matters. Those offline roles did not take their work with them. Their cards are still on the stax, assigned to each role, waiting. The stax says so, and gives the one command to restart a worker or connect a new one. When one does, it reads the same brief and the same cards. Nothing has to be typed in again.",
    "That is the difference between hiring a role and hiring a bot. A bot that stops leaves you a blank chat. A role that loses its worker leaves you a queue.",
    "## What is not done yet",
    "Swapping a worker today means connecting a new one to the role. It picks up the brief and the cards. It does not get a handover from the old worker.",
    "A supervised handover is planned: the outgoing worker stays on the stax, the new one works a bounded trial, and the role only moves across once the new worker has shown it can do the job. The first case is a Grok bot handing over to Hermes. It is open as tabstax issue 1021, not built.",
    "Replacing the chief of staff's worker without losing what it knew is also open, as tabstax issue 1007. So is a person opening a terminal and attaching it as a worker under a role, issue 1116.",
    "We say this because the point of a role is that you can trust what it says about itself. A role that overstated its own readiness would be the wrong place to start.",
    "## How to start",
    "Pick one job you keep doing by hand. Writing the nightly update. Fixing small bugs. Following up on emails.",
    "Give it a role. Write its mission in one line. Write what it must never do. Assign it one card.",
    "Then connect whichever bot you have today. When something better comes out next month, connect that one instead. The role, its brief and its cards will be where you left them.",
    "You can see the roles idea on the [HeyStax homepage](/#benefits).",
    "Persisted intent.",
    "HeyStax. The platform for hope.",
  ].join("\n\n"),
};
