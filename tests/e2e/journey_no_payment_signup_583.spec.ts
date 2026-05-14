import { expect, test } from "@playwright/test";

test.describe("homepage rebuild signup handoff (#583)", () => {
  test("hero and nav match the rebuilt homepage contract", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("HeyStax — Hire agents that already know your job.");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      "Multiple projects, work and home. Your AI remembers none of them. HeyStax holds all of them."
    );

    await expect(page.getByText("For you, your team, and your agents.")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Hire agents that already know your job." })
    ).toBeVisible();

    const desktopNav = page.locator("header nav").first();
    await expect(desktopNav.getByRole("link", { name: "Product" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Sign in" })).toBeVisible();
    await expect(desktopNav.getByRole("link")).toHaveCount(3);

    const startNow = page.locator("#hero a", { hasText: "Start Now" });
    await expect(startNow).toHaveCount(1);
    await expect(startNow).toHaveAttribute(
      "href",
      "https://dash.heystax.ai/onboarding?source=homepage"
    );
  });

  test("homepage removes old pricing and restores the hero video", async ({ page }) => {
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

  test("proof mock renders Done and Next rows", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Done while you slept. Decisions when you arrive."))
      .toBeVisible();
    await expect(page.getByText("@scribe drafted reply to solicitor")).toBeVisible();
    await expect(page.getByText("@notify sent Sprint 7 update to John")).toBeVisible();
    await expect(page.getByText("Lock SKU naming decision")).toBeVisible();
    await expect(page.getByText("Approve scribe's draft to solicitor")).toBeVisible();
    await expect(page.getByText("Yours")).toBeVisible();
  });

  test("technical and close sections match the spec", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText('hey "draft update to @rob on Claim Alert sprint"'))
      .toBeVisible();
    await expect(
      page.getByText("Start in Claude. Finish in ChatGPT. Same stax. Same information.")
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Start with the work." }))
      .toBeVisible();
    await expect(page.getByText("Bring one project, one goal, and the people around it."))
      .toBeVisible();
    await expect(page.locator("section").last().getByRole("link", { name: "Start Now" })).toHaveAttribute(
      "href",
      "https://dash.heystax.ai/onboarding?source=homepage"
    );
  });

  test("mobile layout stacks and keeps CTA buttons full width", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/");

    const startNow = page.locator("#hero a", { hasText: "Start Now" });
    const box = await startNow.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.width).toBeGreaterThan(300);

    await expect(page.getByText("Typed work graph")).toBeVisible();
    await expect(page.getByText("Cross-surface motion")).toBeVisible();
    await expect(page.getByText("Agents as peers")).toBeVisible();
  });
});
