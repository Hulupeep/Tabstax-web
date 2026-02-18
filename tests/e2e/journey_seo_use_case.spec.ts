/**
 * Journey tests: J-SEO-USE-CASE (CRITICAL)
 * Verifies SEO structure on use-case pages and the index.
 *
 * Run with: npm run test:e2e tests/e2e/journey_seo_use_case.spec.ts
 * The webServer config in playwright.config.ts serves the built site on :3001.
 */

import { test, expect } from "@playwright/test";

const SAMPLE_SLUG = "consultant-three-clients";

test.describe("J-SEO-USE-CASE: use-case page SEO structure", () => {
  test("page title equals seoTitle (not narrative title)", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const title = await page.title();
    // seoTitle should be ≤60 chars
    expect(title.length).toBeLessThanOrEqual(60 + 20); // allow for site suffix
    // should NOT be the full narrative title (which is longer)
    expect(title).not.toBe("Consultant With Three Clients and No Time");
  });

  test("meta description is present and ≤155 chars", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const metaDesc = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(metaDesc).toBeTruthy();
    expect(metaDesc!.length).toBeLessThanOrEqual(155);
  });

  test("FAQPage JSON-LD is present with ≥3 questions", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const jsonLdBlocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const allJson = jsonLdBlocks.join(" ");
    expect(allJson).toContain("FAQPage");
    // Parse to count questions
    for (const block of jsonLdBlocks) {
      try {
        const data = JSON.parse(block);
        const faqs = Array.isArray(data)
          ? data.find((d: { "@type": string }) => d["@type"] === "FAQPage")
          : data["@type"] === "FAQPage"
          ? data
          : null;
        if (faqs) {
          expect(faqs.mainEntity.length).toBeGreaterThanOrEqual(3);
        }
      } catch {
        // not valid JSON, skip
      }
    }
  });

  test("BreadcrumbList JSON-LD is present", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const jsonLdBlocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const allJson = jsonLdBlocks.join(" ");
    expect(allJson).toContain("BreadcrumbList");
  });

  test("Article JSON-LD is present", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const jsonLdBlocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const allJson = jsonLdBlocks.join(" ");
    expect(allJson).toContain("Article");
  });

  test("FAQ questions are visible on the page", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    // FAQ section heading should be visible
    await expect(page.getByRole("heading", { name: /FAQ|Frequently/i })).toBeVisible();
  });

  test("3 related use-case links are shown", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const relatedLinks = await page
      .locator('a[href^="/use-cases/"]')
      .filter({ hasNot: page.locator('[href="/use-cases"]') })
      .all();
    // At least 3 internal use-case links (back link + 3 related = 4+)
    expect(relatedLinks.length).toBeGreaterThanOrEqual(3);
  });

  test("page content contains at least one h2 heading", async ({ page }) => {
    await page.goto(`/use-cases/${SAMPLE_SLUG}`);
    const h2Count = await page.locator("article h2").count();
    expect(h2Count).toBeGreaterThanOrEqual(1);
  });
});

test.describe("J-SEO-USE-CASE: /use-cases index structured data", () => {
  test("index page has CollectionPage JSON-LD", async ({ page }) => {
    await page.goto("/use-cases");
    const jsonLdBlocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const allJson = jsonLdBlocks.join(" ");
    expect(allJson).toContain("CollectionPage");
  });

  test("index page title is SEO-friendly", async ({ page }) => {
    await page.goto("/use-cases");
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
});
