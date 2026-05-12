import { readFileSync } from "fs";
import { join } from "path";

const root = join(__dirname, "../../..");
const onboardingUrl = "https://dash.heystax.ai/onboarding?source=homepage";

function readSrc(relPath: string) {
  return readFileSync(join(root, "src", relPath), "utf-8");
}

describe("Contract: feature_no_payment_signup_583", () => {
  it("keeps the homepage start CTA on Dash onboarding", () => {
    const page = readSrc("app/page.tsx");

    expect(page).toContain("DASH_ONBOARDING_URL");
    expect(readSrc("lib/routes.ts")).toContain(onboardingUrl);
    expect(page).toContain("Start Now");
  });

  it("narrows the header to Product, Blog, and Sign in", () => {
    const header = readSrc("components/Header.tsx");

    expect(header).toContain('label: "Product"');
    expect(header).toContain('label: "Blog"');
    expect(header).toContain('label: "Sign in"');
    expect(header).not.toContain('label: "Individuals"');
    expect(header).not.toContain('label: "Teams"');
    expect(header).not.toContain('label: "Use Cases"');
    expect(header).not.toContain("Start Now");
  });

  it("removes homepage pricing and payment-first copy", () => {
    const page = readSrc("app/page.tsx");

    expect(page).not.toMatch(/\$\d+|€\d+|â‚¬\d+/);
    expect(page).not.toMatch(/\bFree\b/);
    expect(page).not.toContain("Free and Pro");
    expect(page).not.toContain("Pro tier");
    expect(page).not.toMatch(/card number|cvv|expiry|stripe checkout/i);
    expect(page).not.toContain("Simple pricing");
  });

  it("replaces the video with the Done and Next proof mock", () => {
    const page = readSrc("app/page.tsx");

    expect(page).not.toMatch(/iframe|youtube|youtube-nocookie/i);
    expect(page).toContain("Done while you slept. Decisions when you arrive.");
    expect(page).toContain("@scribe drafted reply to solicitor");
    expect(page).toContain("@notify sent Sprint 7 update to John");
    expect(page).toContain("Approve scribe's draft to solicitor");
    expect(page).toContain('tag: "Yours"');
  });

  it("keeps the technical section as unlabeled product detail", () => {
    const page = readSrc("app/page.tsx");

    expect(page).toContain('hey "draft update to @rob on Claim Alert sprint"');
    expect(page).toMatch(/HookTunnel logs every agent action in both\s+directions\./);
    expect(page).not.toContain(">Technical");
  });

  it("updates homepage metadata", () => {
    const layout = readSrc("app/layout.tsx");

    expect(layout).toContain("HeyStax — Hire agents that already know your job.");
    expect(layout).toContain(
      "Multiple projects, work and home. Your AI remembers none of them. HeyStax holds all of them."
    );
  });
});
