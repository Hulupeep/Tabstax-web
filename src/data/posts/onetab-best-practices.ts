import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "onetab-best-practices",
  title: "OneTab Best Practices: How Not to Lose Your Lists",
  seoTitle: "OneTab Best Practices: How Not to Lose Your Lists",
  seoDescription: "Learn onetab best practices tips organization — naming conventions, the star feature, when to export, and honest limits of OneTab's flat-list model.",
  date: "2025-02-18",
  author: "Colm Byrne",
  kicker: "Tool Guides",
  excerpt: "OneTab works best when you name every group immediately, use the star feature intentionally, and export anything you'd be upset to lose. Here's the full routine.",
  keywords: ["onetab best practices tips organization", "onetab naming conventions", "onetab star lock feature", "onetab export tabs", "onetab alternatives"],
  faq: [
    { q: "Does OneTab back up my lists automatically?", a: "No. OneTab stores everything in Chrome's extension storage. If you uninstall the extension, reinstall Chrome without a backup, or clear extension data, your lists are gone. Export to a text file regularly as a manual backup." },
    { q: "What does the star (lock) feature in OneTab actually do?", a: "Starring a tab group in OneTab locks it so it won't be deleted when you click 'Delete All' or restore the whole group. It's the closest thing OneTab has to pinning important lists — use it for anything you plan to keep longer than a few days." },
    { q: "Can I search inside OneTab?", a: "OneTab has no built-in search. You can use your browser's Ctrl+F / Cmd+F on the OneTab page to find text, but this only works while the page is open. If you need real search across saved sessions, Session Buddy or a more structured tool is a better fit." },
    { q: "How do I rename a OneTab list?", a: "Click the pencil/edit icon next to the group title. If you never named it, it defaults to a timestamp. Renaming is the single most impactful habit you can build with OneTab — do it every time you send tabs." },
    { q: "When should I stop using OneTab and switch to something else?", a: "When you have more than 10–15 groups and can't find what you're looking for, when you need cross-device sync, when you want to attach next actions to a group of tabs, or when you've lost data and rebuilt the same list twice." },
  ],
  content: `OneTab is one of the most-installed browser extensions ever made. It does one thing: collapse all your open tabs into a list, clearing your browser and giving you a clean slate. If you follow onetab best practices tips organization from the start, it stays useful for months. If you don't, it becomes a graveyard of unnamed timestamp-lists you're afraid to delete.

## The First and Most Important Habit: Name Every Group

The moment you click "Send all tabs to OneTab," stop. Before you close that tab or switch windows, go to the OneTab page and rename the group you just created.

A group named "Client proposal — Q2 research" is findable six weeks later. A group named "March 14, 2026 at 9:42 AM" is not.

### Naming Conventions That Actually Work

- **Project + phase**: "Redesign project — wireframes review"
- **Topic + date (when the date matters)**: "Tax docs 2025 — final filing"
- **Action prefix**: "Read — AI papers" or "Review — vendor contracts"
- Keep names under 50 characters

## Using the Star (Lock) Feature Correctly

Starring a group protects it from deletion and marks it as something you've deliberately decided to keep. Think of OneTab as having two tiers:

- **Working lists (unstarred)**: Groups from today or this week. Ephemeral by design.
- **Reference lists (starred)**: Research collections, reading queues, project archives. Star these immediately.

Review your starred groups monthly. Delete or export anything that no longer needs to exist.

## When to Export vs Keep in OneTab

OneTab stores data in Chrome's extension storage — not backed up by Chrome sync, not accessible from other browsers. Use the "Export/Import URLs" feature for any group you want to keep for more than a month. Export to a notes app or text file. A reasonable cadence: export your starred groups once a month.

## The Honest Limits of OneTab's Model

**No search** with more than 15–20 groups. **No cross-device access**. **No context layer** — it saves URLs, not intent. **No collaboration**. **No sync resilience**.

The natural signals it's time for something else: you've scrolled past 20 groups looking for something and given up, or you've rebuilt the same research list twice because you couldn't find the original.

For a direct comparison, see [HeyStax vs OneTab](/blog/tabstax-vs-onetab). The [use cases page](/use-cases) shows how different workflow types map to different tool choices.`,
};
