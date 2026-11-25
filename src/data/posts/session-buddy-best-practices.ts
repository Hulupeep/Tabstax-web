import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "session-buddy-best-practices",
  title: "Session Buddy Best Practices: Collections You Can Find Again",
  seoTitle: "Session Buddy Best Practices: Collections You Can Find",
  seoDescription: "Master session buddy tips organisation collections — naming, tagging, auto-save settings, export for backup, and when Session Buddy's model reaches its ceiling.",
  date: "2025-02-21",
  author: "Colm Byrne",
  kicker: "Tool Guides",
  excerpt: "Session Buddy rewards discipline around naming and tagging. The conventions below make the difference between a collection library you can navigate and a pile of saved sessions.",
  keywords: ["session buddy tips organisation collections", "session buddy naming conventions", "session buddy auto-save settings", "session buddy export backup", "session buddy alternatives"],
  faq: [
    { q: "What does Session Buddy's auto-save actually save?", a: "Auto-save periodically creates a snapshot of your current open windows and tabs. It does NOT save your manually-created named collections. Those must be explicitly saved. Auto-save snapshots are found under the 'Auto Saved' category and are overwritten on a rolling basis." },
    { q: "How do I back up my Session Buddy collections?", a: "Use the 'Backup' option in Session Buddy's settings to export all your data as a JSON file. Store this file somewhere outside Chrome — a cloud folder, email, or external drive. Session Buddy's data lives in extension storage and won't survive a Chrome reinstall without a backup." },
    { q: "Can Session Buddy sync across devices?", a: "Session Buddy does not offer built-in cloud sync. Some users use Chrome Sync to carry extension storage across devices, but this is unreliable and not officially supported by Session Buddy. If cross-device sync matters, you'll need a different tool." },
    { q: "How should I use Session Buddy's tags?", a: "Tags in Session Buddy are applied at the collection level, not the individual tab level. Keep a short list of tags (5–10 max) covering your main work domains — project names, clients, life areas. Avoid one-off tags that you'll never search for again." },
    { q: "What's the biggest mistake people make with Session Buddy?", a: "Relying on auto-save as their primary organization system. Auto-saved snapshots are unnamed, timestamped, and overwritten. They're useful for recovery, not for deliberate workspace management. Manual naming and saving is the foundation of a usable collection library." },
  ],
  content: `Session Buddy is one of the more capable session managers available for Chrome. Following solid session buddy tips organisation collections habits from the start makes a real difference — the gap between a well-organised Session Buddy setup and a chaotic one is almost entirely about naming and maintenance discipline.

## A Naming Convention That Scales

**Format**: \`[Domain] — [Project/Topic] — [Stage]\`

Examples:
- \`Work — Q2 Planning — Research\`
- \`Work — Client Acme — Proposal draft\`
- \`Personal — House purchase — Mortgage docs\`

The domain prefix makes scanning fast. The project name gives context. Make naming a prerequisite to saving — don't save a collection and plan to rename it later.

## Tagging for Retrieval, Not Just Organisation

Keep your tag list short. A working taxonomy for most people:

- **By domain**: \`work\`, \`personal\`, \`learning\`, \`finance\`, \`health\`
- **By client or major project**: \`acme\`, \`redesign2026\`
- **By status** (optional): \`active\`, \`archive\`, \`reference\`

Session Buddy's search covers collection names, URLs, and page titles within collections. This is genuinely powerful — you can search for a domain name and find every collection that contains a tab from that domain.

## Auto-Save Settings: What They Do and Don't Do

Auto-save is a background snapshot system. It does NOT save your manually-created collections. Those are separate. Auto-save only captures your live browser state. Use it for recovery scenarios, not primary navigation.

## Export: Your Real Backup Strategy

Session Buddy stores its data in Chrome's extension storage. It doesn't survive a Chrome reinstall without explicit backup. Use the backup feature (Settings > Backup/Restore) to export all collection data as a JSON file. A backup cadence that works: export every two weeks, keep the last three backup files, store them in cloud storage.

## The Natural Ceiling of Session Buddy's Model

Session Buddy saves tabs, not context. There's no way to attach notes about what you were in the middle of. No collaboration or sharing. No cross-device sync. Search covers names and URLs but not note content.

For [how Session Buddy compares to alternatives](/blog/tabstax-vs-session-buddy), and for a broader look at where different tools fit, see [the use cases page](/use-cases).`,
};
