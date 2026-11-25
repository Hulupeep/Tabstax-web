import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "context-switching-is-costing-you-more-than-you-think",
  title: "Context-Switching Is Costing You More Than You Think",
  seoTitle: "Why Context Switching Costs More Than You Think at Work",
  seoDescription:
    "The 23-minute stat isn't the real cost. The real cost of context switching is re-entry — rebuilding where you were. Here's what actually fixes it.",
  date: "2025-01-02",
  author: "Colm Byrne",
  kicker: "Productivity",
  keywords: [
    "context switching cost",
    "context switching productivity",
    "cost of context switching",
    "context reconstruction",
    "browser tabs context switching",
  ],
  excerpt:
    "The 23-minute recovery stat gets quoted everywhere. But the real cost of context switching isn't the interruption — it's what happens when you try to come back.",
  faq: [
    {
      q: "How long does it take to save a Stax?",
      a: "About eight seconds. Name it, save it, close the window. The next time you open it, all the tabs load exactly as they were.",
    },
    {
      q: "What's the difference between a Stax and Chrome tab groups?",
      a: "Tab groups are visual organisation within a single browser session. They close with the window and don't sync across devices. A Stax is a saved project context — tabs plus Next Actions — that persists between sessions and is available on any device with the extension installed (on Pro).",
    },
    {
      q: "Does HeyStax work without an internet connection?",
      a: "Yes. The core feature — saving and reopening Stax — works entirely locally. No internet connection required. Cloud sync is a Pro feature for cross-device access, but it's not required for the basic re-entry mechanism.",
    },
    {
      q: "What happens to my Stax if I close the browser accidentally?",
      a: "Nothing. Your Stax are saved to persistent storage and aren't affected by browser closes, restarts, or crashes. They'll be there when you reopen the extension.",
    },
    {
      q: "Is HeyStax free?",
      a: "Yes — the core feature is free with no account required. You get local Stax, Next Actions, and unlimited re-entries. Pro adds cloud sync, cross-device access, and Stax sharing.",
    },
  ],
  content: `Here's the thing nobody tells you about context switching: the 23-minute recovery stat is the least of your problems.

Yes, [Gloria Mark's research at UC Irvine](https://www.ics.uci.edu/~gmark/) found it takes an average of 23 minutes and 15 seconds to return to a task after an interruption. That number gets quoted in every productivity article. What gets left out is the subtler cost — the one that doesn't show up in studies because it's harder to measure.

It's the cost of re-entry.

Not the interruption itself. Not the distraction. The moment, hours or days later, when you come back to a project you left mid-thought, and spend real time figuring out where you were. Which tab had the relevant document. What you'd decided and what you were still working out. What you were about to do next.

That reconstruction is expensive. Not just in minutes, but in the kind of energy that's hard to recover once it's spent. And it compounds: every time you leave a project and come back, you pay it again.

## Why "Just Minimise Interruptions" Doesn't Cut It

The standard advice is to batch your work and minimise context switches. This is genuinely useful advice. It is also, for a large number of people, largely impractical.

Modern knowledge work is structurally interrupted. You have meetings. Slack messages that need fast responses. A bug that surfaces while you're mid-design. A client question while you're heads-down in code. The idea that you can organise your day into clean, uninterrupted blocks is a fine goal and a difficult reality.

What makes this worse is that the tools we use don't help. **Browser tabs — the primary working surface for most knowledge workers — have no concept of project state.** You can have 60 tabs open, each representing something you were working on, and the browser has no opinion about which five belong together, or what you were doing when you had them open.

So when you come back, you start over. You reopen the same search. You find the document again. You reread the last thing you wrote. You remember, slowly, where your thinking was.

That's the context reconstruction tax. It's real, it's recurring, and most productivity advice treats it as a personal failing rather than a structural problem to be solved.

## The Stat That Gets Misquoted

Gloria Mark's 23-minute figure is worth examining more closely, not because it's wrong, but because it's usually applied to the wrong problem.

That research measured recovery time after external interruptions — someone walking up to you, an unexpected notification pulling you away mid-task. The finding was about how long it takes to return to the same level of focus you had before being pulled out.

That's a different problem from re-entry after a deliberate project switch.

When you finish one thing and move to another, you're not being interrupted — you're choosing to switch. And when you come back to the first project later, the challenge isn't focus recovery. It's context reconstruction. You don't need 23 minutes of quiet. You need to remember where you were. Those are different problems with different solutions.

## How Projects Actually Get Abandoned

Here's a pattern that's less discussed than the productivity research but probably more familiar: the project that doesn't get finished not because it was deprioritised or abandoned by decision, but because the re-entry cost was quietly too high every time you tried to return to it.

You leave it for a week. You come back, spend fifteen minutes getting oriented, feel the energy draining before you've done anything real, and quietly close it and do something easier instead. You tell yourself you'll come back when you have more time. You don't. The project sits there.

The cause isn't lack of interest or lack of time. It's that every attempted re-entry runs out of steam before it gets anywhere. The reconstruction tax is too high to pay repeatedly on something that isn't urgent.

This is why saved context matters beyond productivity. It's not just about recovering minutes. It's about keeping projects viable across time — making them cheap enough to re-enter that you actually do.

## What Bookmarks and Tab Groups Don't Fix

The most common attempted solutions are also the most mismatched to the actual problem.

Bookmarks save links. They're useful for reference material you want to find again. They are not useful for saving project state, because a link is not context. When you return to a bookmarked URL, you're starting from the beginning of whatever is at that address, not from where you were when you saved it.

Tab groups (Chrome's built-in feature, also in Edge and Firefox) are better. You can colour-code and label clusters of related tabs. But they close with the window, don't sync across devices, and have no concept of what you were doing with those tabs — just which ones were visually near each other.

Neither addresses the real problem, which isn't "where are the tabs" but "what was I doing when I had them open."

## The Two Things You Actually Need

When you come back to a project after being away, you need two things.

**The context** — the specific combination of tabs that represents the project in the state you left it. Not just the URLs. Which ones you actually had open, which one you were working in, which ones are active parts of the work right now.

**The next step** — what you were about to do. Not a high-level goal from a project management tool. The specific concrete thing: reply to this message, fix this function, finish this paragraph.

Most tools handle one or neither. Bookmarks handle neither. Tab groups handle context imperfectly. Todo apps handle the next step but live outside the browser, separated from the tabs the task relates to.

HeyStax saves both in one place. A Stax is the window configuration — the tabs — plus the Next Actions list attached to that project. When you reopen it, the tabs are there and so is the thing you were about to do. [See how it works →](/use-cases)

## The Background Hum You Stop Noticing

There's a subtler cost to accumulated open tabs worth naming: the low-grade anxiety of unresolved open things.

Most people have a mix. Active project tabs. Reference material that might be relevant. Tabs opened with good intentions that haven't been dealt with. Tabs representing projects that haven't been touched in weeks but feel wrong to close.

Each of those makes a small, persistent claim on attention. Not a loud one. Just a background signal that there's something unfinished here, something you might need. **Holding that in peripheral awareness has a cost, even when you're not actively thinking about any particular tab.**

Saving a Stax and closing it cleanly removes that signal. The project isn't gone — it's saved, intact, ready to reopen. But you no longer need to hold it in peripheral attention. That release is worth something, even if it's hard to measure.

## What This Doesn't Fix

HeyStax won't help if you're avoiding a project because you've genuinely lost interest in it. Nothing will. The context reconstruction tax is a problem for work you want to return to; if the deeper issue is that you don't want to go back to it, that's a different conversation.

It also won't fix interruptions themselves. What it reduces is the cost of re-entry after the interruption has already happened.

And it won't work for everyone. If your work doesn't live primarily in the browser, the browser-tab approach won't capture the full picture.

But if you're a knowledge worker whose work runs through the browser — and most of us are — and you've felt the specific exhaustion of spending twenty minutes figuring out where you were on something you left yesterday: this is what it's trying to fix.

[Save your first Stax](/). It takes about eight seconds. Come back to it tomorrow and see what the re-entry costs.`,
};
