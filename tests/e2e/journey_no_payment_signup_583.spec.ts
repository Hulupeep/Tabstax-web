import { expect, test } from "@playwright/test";

const onboardingUrl = "https://dash.heystax.ai/onboarding?source=homepage";

test.describe("homepage signup handoff (#583, redesign Oct 2026)", () => {
  test("hero and nav match the homepage contract", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("HeyStax. Pick up where you or your team left off.");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      "Kick off with a team in a minute. Run a dozen projects. Pick up where you or they left off. For people who run on momentum and lose it on every switch."
    );

    await expect(
      page.getByText("For people who run on momentum and lose it on every switch.")
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Kick off with a team in a minute. Run a dozen projects. Pick up where you or they left off.",
      })
    ).toBeVisible();

    const desktopNav = page.locator("header nav").first();
    await expect(desktopNav.getByRole("link", { name: "Product" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Sign in" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Start now" })).toHaveAttribute(
      "href",
      onboardingUrl
    );
    await expect(desktopNav.getByRole("link")).toHaveCount(5);

    const startNow = page.locator("#hero a", { hasText: "Start now" });
    await expect(startNow).toHaveCount(1);
    await expect(startNow).toHaveAttribute("href", onboardingUrl);
  });

  test("homepage has no pricing and keeps the hero video", async ({ page }) => {
    await page.goto("/");

    const heroVideo = page.locator("#hero iframe");
    await expect(heroVideo).toHaveCount(1);
    await expect(heroVideo).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/AkPAv3vquck"
    );
    await expect(page.getByText("Simple pricing")).toHaveCount(0);
    await expect(page.getByText("$19")).toHaveCount(0);
    await expect(page.getByText("€3.99")).toHaveCount(0);
    await expect(page.getByText("7-day free trial")).toHaveCount(0);
  });

  test("the three product sections render their illustrations", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Kick off with a team in a minute.", exact: true })
    ).toBeVisible();
    await expect(page.getByText("Lifesaving course", { exact: true })).toBeVisible();
    await expect(page.getByText("Book the pool for the six Saturdays").first()).toBeVisible();

    await expect(page.getByRole("heading", { name: "Run a dozen projects.", exact: true })).toBeVisible();
    await expect(page.getByText("Thu 8 Oct · 14:32 · 6 stax · 3 moving")).toBeVisible();
    await expect(page.getByText("Call St Brigid's back").first()).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Pick up where you or they left off.", exact: true })
    ).toBeVisible();
    await expect(page.getByText("you were last here 6 days ago", { exact: true })).toBeVisible();
    await expect(page.getByText("done · @ana · 2 Oct 09:14", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Pick up here" })).toHaveAttribute(
      "href",
      "https://dash.heystax.ai/attention"
    );
  });

  test("money, surfaces and close sections match the spec", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Invoices come from the work, not from memory." })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "See pricing" })).toHaveAttribute(
      "href",
      "/pricing"
    );
    await expect(page.getByText('$ hey "kit list for @bob on Lifesaving course"')).toBeVisible();
    await expect(page.getByRole("heading", { name: "Same stax, every surface." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Start with the work." })).toBeVisible();
    await expect(
      page.getByText("Bring one project, one goal, and the people around it.")
    ).toBeVisible();
    await expect(
      page.locator("main section").last().getByRole("link", { name: "Start now" })
    ).toHaveAttribute("href", onboardingUrl);
  });

  test("mobile layout stacks, keeps the CTA full width and shows the Live board as cards", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/");

    const startNow = page.locator("#hero a", { hasText: "Start now" });
    const box = await startNow.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.width).toBeGreaterThan(300);

    await expect(page.getByText("Thu 8 Oct · 14:32 · 3 moving")).toBeVisible();
    await expect(page.getByText("3 done today")).toBeVisible();
    await expect(page.locator("table")).toBeHidden();

    const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(pageWidth).toBeLessThanOrEqual(390);
  });
});
