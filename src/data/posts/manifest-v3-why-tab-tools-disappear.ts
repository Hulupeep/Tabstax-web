import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "manifest-v3-why-tab-tools-disappear",
  title: "Manifest V3 and Why Your Favourite Tab Tools Keep Disappearing",
  seoTitle: "Manifest V3: Why Browser Extensions Keep Disappearing",
  seoDescription: "Manifest V3 is Google's Chrome extension overhaul that forced rewrites and caused several popular tab managers to vanish. Here's what actually changed and what it means for your workflow.",
  date: "2025-03-15",
  author: "Colm Byrne",
  kicker: "Browser Ecosystem",
  excerpt: "Manifest V3 is Google's rewrite of the Chrome extension platform. It forced architectural rewrites, killed several popular tab managers, and tells you something important about which tools to trust.",
  keywords: ["manifest v3 chrome extension changes impact", "manifest v3 tab manager impact", "mv3 extension migration", "chrome extension api changes", "why chrome extensions disappear"],
  faq: [
    { q: "What is Manifest V3 in plain language?", a: "Manifest V3 is Google's rewrite of the rules governing Chrome extensions. It changed how background code runs, how network requests are modified, and how extension code must be packaged. Extensions that did not update stopped working." },
    { q: "Why did Google make these changes?", a: "Google's stated reasons were security and performance: reducing the attack surface for malicious extensions, improving browser performance, and preventing remotely-loaded malicious code. Critics argued the changes also weakened ad blockers in ways that benefited Google's advertising business." },
    { q: "Which types of extensions were most affected by MV3?", a: "Ad blockers and privacy tools were most publicly affected. Tab managers and session managers were also heavily affected because many relied on persistent background pages for state management." },
    { q: "Is Manifest V2 support completely gone?", a: "By mid-2025, Google had disabled MV2 extensions for most users in stable Chrome builds. Enterprise users had longer grace periods. New extensions must use MV3." },
    { q: "How do I know if an extension I use has been updated for MV3?", a: "Check the Chrome Web Store listing for a recent update date. With Developer Mode enabled, inspect the extension's manifest.json for manifest_version: 3. Check the developer's GitHub for migration announcements." },
    { q: "Will Firefox also switch to Manifest V3?", a: "Firefox has adopted MV3 but maintained some MV2 APIs including a form of webRequestBlocking. Firefox's approach is more compatible with existing MV2 extensions than Chrome's strict implementation." },
  ],
  content: `The manifest v3 chrome extension changes impact question is one that most users encounter indirectly — through an extension they depended on suddenly not working, or a Chrome Web Store listing that has gone stale. Manifest V3 (MV3) is Google's overhaul of the Chrome extension platform, and it has been one of the most disruptive events in the browser tooling ecosystem in the past decade.

## What Manifest V3 Actually Is

Browser extensions are built against a specification — the "manifest" — that defines what APIs they can use and what they are allowed to do. MV3 is the new version. Google began requiring new extensions to use MV3 in January 2022 and announced a phased removal of MV2 extension support.

### What Actually Changed in MV3

**1. Service workers replaced background pages.** MV2 extensions could run persistent background pages — effectively a hidden webpage that ran continuously. MV3 replaced these with service workers, which start when needed and are terminated when idle. Extensions with complex background logic required substantial rewriting.

**2. \`webRequestBlocking\` was replaced by \`declarativeNetRequest\`.** In MV2, extensions could intercept any network request and modify or block it programmatically. MV3 replaced this with a declarative model where extensions submit rules and the browser enforces them. This reduced flexibility and was controversial — the [EFF argued publicly](https://www.eff.org/deeplinks/2021/12/googles-manifest-v3-still-hurts-privacy-security-innovation) that it weakened ad blockers and privacy tools.

**3. Content Security Policy restrictions tightened.** MV3 requires that extension code be bundled with the extension rather than loaded remotely, making it harder for an extension to silently inject new malicious code after a store review.

## Why Extensions Disappeared

**Developer abandonment**: The largest single category. A solo developer with a free extension and no revenue model received a notice that their extension would stop working unless they rewrote it for MV3. Many chose not to do it.

**Incompatible API dependence**: Some extensions relied specifically on \`webRequestBlocking\` or persistent background pages in ways that could not be cleanly translated to MV3 without losing core functionality.

**The tab manager category specifically**: Many tab managers used persistent background pages to maintain state about open tabs, sync state, and session information. The shift to service workers required rethinking how state was managed.

## How to Check If an Extension Is MV3-Ready

- Check the manifest version: with Developer Mode enabled in Chrome, look for \`"manifest_version": 3\` in the extension's manifest.json
- Check the Chrome Web Store listing update date — nothing updated in over a year is a warning sign
- Check the developer's GitHub or release notes for recent MV3 migration commits

## What This Means for Workflow Resilience

The extensions that made it through the MV3 transition had one key differentiator: someone had a financial reason to do the work. Prefer extensions that have longevity signals: paid tiers that create revenue, corporate backing, or active open-source communities with multiple contributors.

See [browser extension security and how to choose](/blog/browser-extension-security-how-to-choose) for how to evaluate any extension's trustworthiness and longevity signals before installing.`,
};
