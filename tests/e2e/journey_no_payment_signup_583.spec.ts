import { expect, test } from "@playwright/test";

test.describe("no-payment signup handoff (#583)", () => {
  test("homepage start path points to Dash onboarding", async ({ page }) => {
    await page.goto("/");

    const heroStart = page.locator("#hero a", { hasText: "Start Now" });
    await expect(heroStart).toHaveAttribute(
      "href",
      "https://dash.heystax.ai/onboarding?source=homepage"
    );

    await expect(page.getByRole("heading", { name: "You hire the AI. You keep the work." }))
      .toBeVisible();
    await expect(page.locator("#hero").getByText("Start in Claude. Finish in ChatGPT."))
      .toBeVisible();
  });

  test("pricing is plan intent, not checkout", async ({ page }) => {
    await page.goto("/#pricing");

    await expect(page.getByRole("heading", { name: "Choose the starting shape." }))
      .toBeVisible();
    const pricing = page.locator("#pricing");

    await expect(pricing.getByRole("heading", { name: "Principal", exact: true }))
      .toBeVisible();
    await expect(pricing.getByRole("heading", { name: "Team", exact: true })).toBeVisible();
    await expect(pricing.getByRole("heading", { name: "Enterprise", exact: true }))
      .toBeVisible();
    await expect(pricing.getByText("Plan selection is intent, not checkout.")).toBeVisible();
    await expect(page.getByText("€3.99")).toHaveCount(0);
    await expect(page.getByText("7-day free trial")).toHaveCount(0);

    const pricingStarts = page.locator("#pricing a", { hasText: "Start Now" });
    const count = await pricingStarts.count();
    expect(count).toBe(3);

    for (let index = 0; index < count; index += 1) {
      await expect(pricingStarts.nth(index)).toHaveAttribute(
        "href",
        "https://dash.heystax.ai/onboarding?source=homepage"
      );
    }
  });
});
