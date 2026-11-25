/**
 * Journey: J-BLOG-POSTS
 * Every blog slug renders its page from the static export, and /blog lists posts.
 * Guards the one-file-per-post split of src/data/blog-posts.ts.
 *
 * Run with: npm run build && npx playwright test tests/e2e/journey_blog_posts.spec.ts
 */
import { test, expect } from "@playwright/test";
import { blogPosts } from "../../src/data/blog-posts";

test.describe("J-BLOG-POSTS: every blog slug renders", () => {
  test("/blog lists the newest posts", async ({ page }) => {
    const res = await page.goto("/blog");
    expect(res?.status()).toBe(200);
    const newest = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
    await expect(page.getByRole("link", { name: newest.title }).first()).toBeVisible();
  });

  for (const post of blogPosts) {
    test(`/blog/${post.slug} renders its title`, async ({ request }) => {
      const res = await request.get(`/blog/${post.slug}`);
      expect(res.status()).toBe(200);
      const html = await res.text();
      const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      expect(h1, `no <h1> on /blog/${post.slug}`).not.toBeNull();
      const decoded = h1![1]
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
      expect(decoded).toBe(post.title);
    });
  }
});
