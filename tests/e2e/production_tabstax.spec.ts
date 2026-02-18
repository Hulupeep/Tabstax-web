/**
 * Production tests for https://tabstax.app
 * Tests all pages, content, CTAs, SEO, accessibility basics, and branding.
 *
 * Run with: npx playwright test --config playwright.production.config.ts
 */

import { test, expect } from "@playwright/test";

// ─── Homepage ─────────────────────────────────────────────

test.describe("Homepage", () => {
  test("loads with 200 status", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
  });

  test("has correct title", async ({ page }) => {
    await page.goto("/");
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  test("hero headline is visible", async ({ page }) => {
    await page.goto("/");
    const heading = page.locator("h1").first();
    await expect(heading).toBeVisible();
    const text = await heading.textContent();
    expect(text).toBeTruthy();
  });

  test("Start Now CTA links to dash.tabstax.app/attention", async ({ page }) => {
    await page.goto("/");
    const ctaLinks = page.locator('a[href*="dash.tabstax.app/attention"]');
    const count = await ctaLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("no forbidden branding terms", async ({ page }) => {
    await page.goto("/");
    const body = await page.locator("body").textContent();
    expect(body).not.toContain("Attention Blocks");
    expect(body).not.toContain("Tally.so");
  });

  test("pricing section shows Free and Pro", async ({ page }) => {
    await page.goto("/");
    const body = await page.locator("body").textContent();
    expect(body).toContain("Free");
    expect(body).toContain("Pro");
  });

  test("footer contains Flout Labs", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    const footerText = await footer.textContent();
    expect(footerText).toContain("Flout Labs");
  });

  test("navigation links are present", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href="/about"]').first()).toBeVisible();
    await expect(page.locator('a[href="/blog"]').first()).toBeVisible();
    await expect(page.locator('a[href="/use-cases"]').first()).toBeVisible();
    await expect(page.locator('a[href="/contact"]').first()).toBeVisible();
  });
});

// ─── About Page ───────────────────────────────────────────

test.describe("About page", () => {
  test("loads with 200 status", async ({ page }) => {
    const response = await page.goto("/about");
    expect(response?.status()).toBe(200);
  });

  test("contains Colm Byrne", async ({ page }) => {
    await page.goto("/about");
    const body = await page.locator("body").textContent();
    expect(body).toContain("Colm Byrne");
  });

  test("contains Flout Labs", async ({ page }) => {
    await page.goto("/about");
    const body = await page.locator("body").textContent();
    expect(body).toContain("Flout Labs");
  });

  test("contains Superpowered book reference", async ({ page }) => {
    await page.goto("/about");
    const body = await page.locator("body").textContent();
    expect(body).toContain("Superpowered");
  });
});

// ─── Blog Page ────────────────────────────────────────────

test.describe("Blog page", () => {
  test("loads with 200 status", async ({ page }) => {
    const response = await page.goto("/blog");
    expect(response?.status()).toBe(200);
  });

  test("has blog post titles visible", async ({ page }) => {
    await page.goto("/blog");
    const headings = page.locator("h2, h3");
    const count = await headings.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});

// ─── Contact Page ─────────────────────────────────────────

test.describe("Contact page", () => {
  test("loads with 200 status", async ({ page }) => {
    const response = await page.goto("/contact");
    expect(response?.status()).toBe(200);
  });

  test("shows email address", async ({ page }) => {
    await page.goto("/contact");
    const body = await page.locator("body").textContent();
    expect(body).toContain("tabstax@floutlabs.com");
  });

  test("no Tally.so form embed", async ({ page }) => {
    await page.goto("/contact");
    const tally = page.locator('iframe[src*="tally.so"]');
    expect(await tally.count()).toBe(0);
  });
});

// ─── Use Cases Index ──────────────────────────────────────

test.describe("Use Cases index", () => {
  test("loads with 200 status", async ({ page }) => {
    const response = await page.goto("/use-cases");
    expect(response?.status()).toBe(200);
  });

  test("has use case cards linking to individual pages", async ({ page }) => {
    await page.goto("/use-cases");
    const ucLinks = page.locator('a[href^="/use-cases/"]');
    const count = await ucLinks.count();
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test("has Work and Life section headings", async ({ page }) => {
    await page.goto("/use-cases");
    const body = await page.locator("body").textContent();
    expect(body).toContain("Work");
    expect(body).toContain("Life");
  });
});

// ─── Use Case Detail Pages (sample) ──────────────────────

const SAMPLE_SLUGS = [
  "consultant-three-clients",
  "neurodivergent-builder",
  "nd-parent-school-chaos",
  "night-nurse-secretly-writing-novel",
];

for (const slug of SAMPLE_SLUGS) {
  test.describe(`Use case: ${slug}`, () => {
    test("loads with 200 status", async ({ page }) => {
      const response = await page.goto(`/use-cases/${slug}`);
      expect(response?.status()).toBe(200);
    });

    test("has h1 title", async ({ page }) => {
      await page.goto(`/use-cases/${slug}`);
      const h1 = page.locator("h1");
      await expect(h1).toBeVisible();
    });

    test("has Stax Pattern section", async ({ page }) => {
      await page.goto(`/use-cases/${slug}`);
      const body = await page.locator("body").textContent();
      expect(body).toContain("Stax Pattern");
    });

    test("has Start Now CTA", async ({ page }) => {
      await page.goto(`/use-cases/${slug}`);
      const cta = page.locator('a[href*="dash.tabstax.app/attention"]');
      expect(await cta.count()).toBeGreaterThanOrEqual(1);
    });

    test("has back link to /use-cases", async ({ page }) => {
      await page.goto(`/use-cases/${slug}`);
      const backLink = page.locator('a[href="/use-cases"]');
      expect(await backLink.count()).toBeGreaterThanOrEqual(1);
    });
  });
}

// ─── SEO Basics ───────────────────────────────────────────

test.describe("SEO basics", () => {
  test("homepage has meta description", async ({ page }) => {
    await page.goto("/");
    const metaDesc = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(metaDesc).toBeTruthy();
    expect(metaDesc!.length).toBeGreaterThan(20);
  });

  test("homepage has og:title", async ({ page }) => {
    await page.goto("/");
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute("content");
    expect(ogTitle).toBeTruthy();
  });

  test("favicon is accessible", async ({ page, request }) => {
    const response = await request.get("/favicon.png");
    expect(response.status()).toBe(200);
  });

  test("sitemap.xml is accessible", async ({ page, request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
  });
});

// ─── Accessibility Basics ─────────────────────────────────

test.describe("Accessibility basics", () => {
  test("html has lang attribute", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("en");
  });

  test("all images have alt text", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `Image ${i} missing alt text`).toBeTruthy();
    }
  });

  test("page has exactly one h1", async ({ page }) => {
    await page.goto("/");
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);
  });
});

// ─── Performance Basics ───────────────────────────────────

test.describe("Performance basics", () => {
  test("homepage loads in under 5 seconds", async ({ page }) => {
    const start = Date.now();
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(5000);
  });

  test("no broken console errors on homepage", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await page.waitForTimeout(2000);
    expect(errors.length, `Console errors: ${errors.join(", ")}`).toBe(0);
  });
});

// ─── 404 Handling ─────────────────────────────────────────

test.describe("404 handling", () => {
  test("non-existent page returns 404", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist-12345");
    expect(response?.status()).toBe(404);
  });

  test("non-existent use case returns 404", async ({ page }) => {
    const response = await page.goto("/use-cases/fake-nonexistent-slug");
    expect(response?.status()).toBe(404);
  });
});
