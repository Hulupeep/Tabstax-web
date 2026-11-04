import { readFileSync } from "fs";
import { join } from "path";

const root = join(__dirname, "../../..");
const betaUrl = "https://dash.heystax.ai/beta?source=homepage";

function readSrc(relPath: string) {
  return readFileSync(join(root, "src", relPath), "utf-8");
}

describe("Contract: feature_no_payment_signup_583", () => {
  it("sends the homepage start CTA to the beta register page (signup is invite only)", () => {
    const page = readSrc("app/page.tsx");

    expect(page).toContain("DASH_BETA_URL");
    expect(readSrc("lib/routes.ts")).toContain(betaUrl);
    expect(page).toContain("Register for beta");
    expect(page).not.toMatch(/Start now/i);
  });

  it("keeps the header to Product, Pricing, Blog, Sign in and one Register for beta", () => {
    const header = readSrc("components/Header.tsx");

    expect(header).toContain('label: "Product"');
    expect(header).toContain('label: "Pricing"');
    expect(header).toContain('label: "Blog"');
    expect(header).toContain('label: "Sign in"');
    expect(header).toContain("DASH_BETA_URL");
    expect(header).toContain("Register for beta");
    expect(header).not.toContain('label: "Individuals"');
    expect(header).not.toContain('label: "Teams"');
    expect(header).not.toContain('label: "Use Cases"');
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

  it("renders the hero line, the product video and the three product sections", () => {
    const page = readSrc("app/page.tsx");
    const video = readSrc("components/VideoSection.tsx");

    expect(page).toContain("For people who run on momentum and lose it on every switch.");
    expect(page).toContain("Kick off with a team in a minute.");
    expect(page).toContain("Run a dozen projects.");
    expect(page).toContain("Pick up where you or they left off.");
    expect(page).toContain("VideoSection");
    expect(video).toContain("https://www.youtube-nocookie.com/embed/AkPAv3vquck");
    expect(video).toContain('title="HeyStax product demo"');
    expect(page).toContain("Invoices come from the work, not from memory.");
  });

  it("keeps retired vocabulary off the homepage", () => {
    const page = readSrc("app/page.tsx");

    // The HeyStax design system retires these words from public surfaces.
    expect(page).not.toMatch(/\bagents?\b/i);
    expect(page).not.toMatch(/\bplatform\b/i);
    expect(page).not.toMatch(/\bautomat(e|ed|ion)\b/i);
  });

  it("updates homepage metadata", () => {
    const layout = readSrc("app/layout.tsx");

    expect(layout).toContain("HeyStax. Pick up where you or your team left off.");
    expect(layout).toContain(
      "Kick off with a team in a minute. Run a dozen projects. Pick up where you or they left off."
    );
  });
});
