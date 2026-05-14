/**
 * Verifies the homepage product video is embedded below the hero H2.
 *
 * Run with: npm run test:e2e tests/e2e/journey_homepage_video.spec.ts
 */

import { expect, test } from "@playwright/test";

test.describe("homepage product video", () => {
  test("hero renders the privacy-preserving product video embed", async ({ page }) => {
    await page.goto("/");

    const iframe = page.locator("#hero iframe");
    await expect(iframe).toHaveCount(1);
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/jcc-PsCdbM8"
    );
    await expect(iframe).toHaveAttribute("title", "HeyStax product demo");
  });
});
