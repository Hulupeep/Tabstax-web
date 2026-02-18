/**
 * Journey tests: J-HOMEPAGE-VIDEO (CRITICAL)
 * Verifies the YouTube product video is correctly embedded on the homepage.
 *
 * Run with: npm run test:e2e tests/e2e/journey_homepage_video.spec.ts
 */

import { test, expect } from "@playwright/test";

test.describe("J-HOMEPAGE-VIDEO: homepage product video embed", () => {
  test("video iframe is present on the homepage", async ({ page }) => {
    await page.goto("/");
    const iframe = page.locator("iframe").first();
    await expect(iframe).toBeVisible();
  });

  test("iframe uses youtube-nocookie.com embed URL", async ({ page }) => {
    await page.goto("/");
    const iframeSrc = await page.locator("iframe").first().getAttribute("src");
    expect(iframeSrc).toContain("youtube-nocookie.com/embed/jcc-PsCdbM8");
  });

  test("iframe does NOT use youtube.com (privacy check)", async ({ page }) => {
    await page.goto("/");
    const iframeSrc = await page.locator("iframe").first().getAttribute("src");
    expect(iframeSrc).not.toContain("//www.youtube.com/embed");
  });

  test("iframe has a title attribute for accessibility", async ({ page }) => {
    await page.goto("/");
    const iframeTitle = await page.locator("iframe").first().getAttribute("title");
    expect(iframeTitle).toBeTruthy();
    expect(iframeTitle!.length).toBeGreaterThan(0);
  });

  test("video section is visible and not zero-height", async ({ page }) => {
    await page.goto("/");
    const iframe = page.locator("iframe").first();
    const box = await iframe.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.width).toBeGreaterThan(200);
    expect(box!.height).toBeGreaterThan(100);
  });
});
