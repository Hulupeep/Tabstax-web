import { readFileSync } from "fs";
import { join } from "path";

const root = join(__dirname, "../../..");
const onboardingUrl = "https://dash.heystax.ai/onboarding?source=homepage";

function readSrc(relPath: string) {
  return readFileSync(join(root, "src", relPath), "utf-8");
}

describe("Contract: feature_no_payment_signup_583", () => {
  it("routes primary homepage CTAs to Dash onboarding", () => {
    const files = [
      "components/Header.tsx",
      "components/Hero.tsx",
      "components/Pricing.tsx",
      "components/FinalCTA.tsx",
    ];

    files.forEach((file) => {
      expect(readSrc(file)).toContain("DASH_ONBOARDING_URL");
    });
    expect(readSrc("lib/routes.ts")).toContain(onboardingUrl);
  });

  it("does not route Start Now to the dashboard body", () => {
    const files = [
      "components/Header.tsx",
      "components/Hero.tsx",
      "components/Pricing.tsx",
      "components/FinalCTA.tsx",
    ];

    files.forEach((file) => {
      expect(readSrc(file)).not.toMatch(/https:\/\/dash\.heystax\.ai\/attention/);
    });
  });

  it("renders the #583 plan intent tiers", () => {
    const pricing = readSrc("components/Pricing.tsx");

    expect(pricing).toContain("Principal");
    expect(pricing).toContain("Team");
    expect(pricing).toContain("Enterprise");
    expect(pricing).toContain("Plan selection is intent, not checkout.");
  });

  it("removes legacy payment-first pricing copy", () => {
    const pricing = readSrc("components/Pricing.tsx");

    expect(pricing).not.toMatch(/\bFree\b/);
    expect(pricing).not.toMatch(/\bPro\b/);
    expect(pricing).not.toContain("€3.99");
    expect(pricing).not.toContain("7-day free trial");
  });

  it("does not collect payment on first start", () => {
    const pageCopy = [
      readSrc("components/Hero.tsx"),
      readSrc("components/Pricing.tsx"),
      readSrc("components/FinalCTA.tsx"),
    ].join("\n");

    expect(pageCopy).not.toMatch(/card number|cvv|expiry|stripe checkout/i);
    expect(pageCopy).toContain("No card.");
  });
});
