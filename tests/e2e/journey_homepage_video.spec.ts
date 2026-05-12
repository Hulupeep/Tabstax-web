/**
 * The homepage rebuild explicitly removes the YouTube embed.
 *
 * Run with: npm run test:e2e tests/e2e/journey_homepage_video.spec.ts
 */

import { expect, test } from "@playwright/test";

test.describe("homepage media removal", () => {
  test("homepage does not render the old YouTube embed", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("iframe")).toHaveCount(0);
    await expect(page.getByText("Done while you slept. Decisions when you arrive."))
      .toBeVisible();
  });
});
