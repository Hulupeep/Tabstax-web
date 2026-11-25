import type { BlogPost } from "../blog-types";

export const post: BlogPost = {
  slug: "browser-extension-security-how-to-choose",
  title: "The Security Reality of Browser Extensions (How to Choose Safely)",
  seoTitle: "Browser Extension Security: How to Choose Extensions Safely",
  seoDescription: "The Great Suspender malware incident showed extensions can be weaponised after purchase. Here's how to evaluate browser extension security and privacy before you install.",
  date: "2025-03-13",
  author: "Colm Byrne",
  kicker: "Security & Privacy",
  excerpt: "The Great Suspender incident — a trusted extension sold to a buyer who injected malware — is a template for a recurring attack. Here's the practical checklist for evaluating any extension before you install.",
  keywords: ["browser extension security privacy how to choose", "browser extension malware risk", "safe chrome extensions evaluation", "great suspender incident security", "chrome extension permissions explained"],
  faq: [
    { q: "What happened in the Great Suspender malware incident?", a: "The Great Suspender was a popular Chrome extension sold to an anonymous buyer who injected malware — code that tracked browsing behaviour and injected scripts into pages. Google disabled the extension across all installs in early 2021." },
    { q: "Which Chrome extension permissions should I be most worried about?", a: "The highest-risk permissions are broad host access, cookies, clipboardRead, and webRequestBlocking. Any combination of these from an unverified publisher warrants scrutiny." },
    { q: "Does open source make a browser extension safe?", a: "No. Open source means the code is publicly available, not audited. The useful open source check is verifying that the installed version matches the public source code." },
    { q: "How often should I audit my installed extensions?", a: "At minimum annually, and whenever you notice unexpected browser behaviour. Remove any extension you have not actively used in the past six months." },
    { q: "Can an extension be malicious after I have safely used it for years?", a: "Yes, as the Great Suspender demonstrated. Extensions auto-update silently. An extension you trusted last year could have been updated with malicious code this year — which is why publisher identity and maintenance signals matter beyond the initial install review." },
  ],
  content: `Browser extension security privacy how to choose is a question that became urgently real after the Great Suspender incident. The Great Suspender was a widely trusted Chrome extension with over two million users that automatically suspended inactive tabs. In early 2021, it emerged that the original developer had sold the extension to an unknown buyer, who had quietly injected malware into it.

This incident is a template for a category of attack that continues to recur. Understanding the security reality of browser extensions is not paranoia — it is basic due diligence.

## Why Browser Extensions Are a Different Risk Category

A browser extension with broad permissions can read the full content of every webpage you visit, including forms you fill out. It can see your passwords as you type them. It can read cookies, which means it can access sessions for services you are logged into. Some permissions allow an extension to modify network requests, injecting content into pages or redirecting you without your knowledge.

## The Permissions That Actually Matter

**High-risk permissions:**
- \`tabs\`: Access to URLs, titles, and metadata of all open tabs. Required for tab managers — but also enables browsing history tracking.
- \`<all_urls>\` or broad host permissions: Access to the content of all websites you visit. A significant red flag from an unknown publisher.
- \`webRequest\` / \`webRequestBlocking\`: The ability to intercept and modify network requests.
- \`cookies\`: Direct access to browser cookies. A malicious extension with this permission could steal session tokens.
- \`clipboardRead\`: Access to your clipboard contents, which can include passwords.

**Permissions that sound scary but are usually fine:** \`storage\`, \`notifications\`, \`contextMenus\`, \`alarms\`.

## How to Evaluate Extension Publishers

**Corporate entity vs. solo developer**: A company with paying customers, a privacy policy, and a public track record has more accountability surface area than an anonymous developer.

**Update cadence**: An extension not updated in over a year may be abandoned — and is an acquisition target for bad actors.

**Open source does not mean safe**: Open source means the source code is publicly available, not that anyone has audited it. The useful check is verifying whether the installed version matches the public source code.

## A Practical Checklist for Evaluating Any New Extension

**Publisher check**: Is there a public website? A privacy policy? A verifiable developer identity?

**Permission check**: Does it request \`<all_urls>\`, \`cookies\`, \`clipboardRead\`, or \`webRequestBlocking\`? Do these permissions make sense for what the extension claims to do?

**Maintenance check**: When was it last updated? Are there recent reviews?

**Longevity check**: Is there a business model that gives the developer a financial reason to maintain this?

The last point — remove unused extensions — is underrated. Every installed extension is a running process in your browser with whatever permissions it was originally granted. Periodic extension audits are good security hygiene.

For tab management tools specifically, see [how to evaluate privacy claims from tab tools](/blog/evaluate-privacy-claims-tab-tools) and [Manifest V3 and why extensions disappear](/blog/manifest-v3-why-tab-tools-disappear) for context.`,
};
