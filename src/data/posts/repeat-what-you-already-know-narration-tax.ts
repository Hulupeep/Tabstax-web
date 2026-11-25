import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "repeat-what-you-already-know-narration-tax",
  title: "Why Do I Have to Repeat What You Already Know",
  seoTitle: "The Narration Tax: Why You Re-Explain Work to Teammates",
  seoDescription:
    "The narration tax is the energy spent converting private work into shared understanding after the fact. What changes when team visibility happens at the point of production.",
  date: "2026-03-10",
  author: "Colm Byrne",
  kicker: "Team Visibility",
  keywords: [
    "team visibility work context sharing",
    "narration tax teamwork",
    "async team communication",
    "ambient visibility engineering",
    "developer context sharing",
  ],
  excerpt:
    "You fixed the auth issue at 2pm. By 4pm you've explained what you did three times. Not because anyone doubted the fix. Because no one saw it happen.",
  faq: [
    {
      q: "What is the narration tax?",
      a: "The energy spent converting private work knowledge into shared team understanding after the fact. It's different from the reconstruction tax (re-entering your own project). The narration tax is what you pay to bring others current on work they couldn't see.",
    },
    {
      q: "Why do I keep re-explaining my work to teammates?",
      a: "Because work happens somewhere the team can't see. Everyone knows what they did. Nobody knows what anyone else did. The re-explanation bridges that gap, but it costs both people time and energy.",
    },
    {
      q: "What is ambient visibility on a team?",
      a: "When work is visible as it happens, without anyone sending a message or scheduling a meeting. A breadcrumb trail that exists because the tools leave traces, not because someone stopped to write a status update.",
    },
    {
      q: "How does hey -x reduce the narration tax?",
      a: "A hey -x breadcrumb is dropped at each decision point as you work, in the terminal. The context exists before anyone asks for it. The question dissolves because the answer is already in the trail.",
    },
    {
      q: "Is ambient visibility the same as surveillance?",
      a: "No. Surveillance is imposed observation. Ambient visibility is a byproduct of working in tools that leave traces. The person doing the work decides what to log. The team reads when relevant.",
    },
  ],
  content:
    "You fixed the auth issue at 2pm. By 4pm you've explained what you did three times. Not because anyone doubted the fix. Because no one saw it happen.\n\n" +
    "The third time, you notice something. A slight heaviness behind the eyes. Not frustration exactly. More like the feeling of reading aloud from a page someone could have read themselves. You already hold the knowledge. They already trust you. The reconstruction is pure overhead.\n\n" +
    "I've come to think of this as the narration tax. The energy spent converting private work into shared understanding, after the fact. It is different from the reconstruction tax, which is the cost of returning to your own interrupted project. The narration tax is what you pay to bring other people current on work that already happened, in a place they couldn't see. Team visibility and work context sharing should not require this much effort.\n\n" +
    "Every person on a team knows what they did today. Almost nobody knows what anyone else did. This asymmetry is so normal we've stopped noticing it. But it drives an enormous amount of low-grade friction. Standup meetings exist partly to close this gap. So do Slack threads, status updates, the tap on the shoulder. All of them are synchronous. All of them require the person who did the work to also perform the work, again, in words, for an audience.\n\n" +
    "The alternative isn't surveillance. It's ambient visibility. The difference between a colleague reading your breadcrumb trail and you recounting the same sequence out loud. Deployed to staging. Found an edge case on mobile auth. Rolled back. Fixed. PR up. Five lines. One person writes them as they go. Everyone else absorbs them when relevant. Same information. One approach costs one person two minutes. The other costs two people thirty.\n\n" +
    "The system should know what we both already know.\n\n" +
    "What changes this is not better meetings or more disciplined standups. It's making the work visible as it happens, so the narration never needs to occur. A `hey -x` breadcrumb dropped at each decision point means the context exists before anyone asks for it. The question dissolves because the answer is already there, quietly, in the trail.\n\n" +
    "I noticed something after a few weeks of working this way. The catch-up conversations didn't stop entirely. But they changed shape. Instead of \"what happened with the auth thing,\" the question became \"I saw you rolled back on mobile, was that the same issue from last week.\" The conversation started further along. The tax was gone.\n\n" +
    "The most expensive knowledge in a team is the knowledge that already exists in someone's head and nowhere else. Not because it's hard to share. Because sharing it costs exactly the kind of energy you needed for the next thing.",
};
