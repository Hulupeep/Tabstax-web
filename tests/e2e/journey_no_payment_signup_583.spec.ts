import { expect, test } from "@playwright/test";

const onboardingUrl = "https://dash.heystax.ai/beta?source=homepage";

test.describe("homepage signup handoff (#583, redesign Oct 2026)", () => {
  test("hero and nav match the homepage contract", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("HeyStax. Persisted intent.");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      "Set the mission and the goal once. People and bots keep working it until it is done. Nobody has to hold it in their head."
    );

    // #45: the hero leads with the structure; the customer factory is what it makes.
    await expect(
      page.locator("#hero").getByText("I don't want a software factory. I want a customer factory.")
    ).toBeVisible();
    await expect(
      page.locator("#hero").getByRole("heading", {
        level: 1,
        name: "The new organizational structure for people and AI working together.",
      })
    ).toBeVisible();
    await expect(page.locator("#hero").getByText("Closed beta. Paid, per product.")).toBeVisible();
    // Continuity copy is kept, below the fold.
    await expect(
      page.getByText("For people who run on momentum and lose it on every switch.")
    ).toBeVisible();

    const desktopNav = page.locator("header nav").first();
    await expect(desktopNav.getByRole("link", { name: "Product" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Sign in" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Register for beta" })).toHaveAttribute(
      "href",
      onboardingUrl
    );
    await expect(desktopNav.getByRole("link")).toHaveCount(5);

    const startNow = page.locator("#hero a", { hasText: "Register for beta" });
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

  test("customer factory and proof sections render (#45)", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "One twist a night.", exact: true })).toBeVisible();
    for (const step of ["Find the angle", "Build what it needs", "Write and follow up", "You check the first few"]) {
      await expect(page.locator("#factory").getByText(step, { exact: true })).toBeVisible();
    }
    await expect(
      page.getByRole("heading", { name: "What it has won so far is hope.", exact: true })
    ).toBeVisible();
    await expect(page.locator("#proof").getByText("Closing is still hard. That is next.")).toBeVisible();
    await expect(page.locator("#proof").getByText(/as of \d{1,2} \w{3} \d{4}/)).toBeVisible();
  });

  test("pricing page shows $49 per product and no trial (#45)", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.getByRole("heading", { name: "$49 a month, per product." })).toBeVisible();
    await expect(page.getByText("$19")).toHaveCount(0);
    await expect(page.getByText(/no card/i)).toHaveCount(0);
  });

  test("the three product sections render their illustrations", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Kick off with a team in a minute.", exact: true })
    ).toBeVisible();
    // Section 01 is an animated scene: it plays once scrolled into view and
    // ends with the team working the list. Scroll to it and wait for the end.
    await page.locator("#product").scrollIntoViewIfNeeded();
    await expect(page.getByText("Lifesaving course", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("First next action: Book the pool for the six Saturdays")).toBeVisible({
      timeout: 20000,
    });
    await expect(page.getByText("done · @bob · 15:02")).toBeVisible({ timeout: 20000 });
    await expect(page.getByRole("button", { name: "Replay" })).toBeVisible({ timeout: 20000 });
    await expect(page.getByText("on track")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Run a dozen projects.", exact: true })).toBeVisible();
    await expect(page.getByText("Thu 8 Oct · 14:32 · 7 stax · 4 moving")).toBeVisible();
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
      page.locator("main section").last().getByRole("link", { name: "Register for beta" })
    ).toHaveAttribute("href", onboardingUrl);
  });

  test("mobile layout stacks, keeps the CTA full width and shows the Live board as cards", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/");

    const startNow = page.locator("#hero a", { hasText: "Register for beta" });
    const box = await startNow.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.width).toBeGreaterThan(300);

    await expect(page.getByText("Thu 8 Oct · 14:32 · 4 moving")).toBeVisible();
    await expect(page.getByText("3 done today")).toBeVisible();
    await expect(page.locator("table")).toBeHidden();

    const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(pageWidth).toBeLessThanOrEqual(390);
  });
});
