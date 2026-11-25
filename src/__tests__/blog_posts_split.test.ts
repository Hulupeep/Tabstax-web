/**
 * Blog posts live one file per post in src/data/posts/<slug>.ts.
 * blog-posts.ts stays the single import point and must keep the original
 * 192 slugs in their original order (new posts are appended after them).
 */
import { describe, it, expect } from "@jest/globals";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { blogPosts } from "@/data/blog-posts";
import * as posts from "@/data/posts";

const POSTS_DIR = join(__dirname, "..", "data", "posts");
const baseline: string[] = JSON.parse(
  readFileSync(join(__dirname, "fixtures", "blog-slugs-baseline.json"), "utf8")
);

describe("blog posts split", () => {
  it("keeps the 192 baseline slugs, in the same order, at the start of blogPosts", () => {
    expect(baseline).toHaveLength(192);
    expect(blogPosts.slice(0, baseline.length).map((p) => p.slug)).toEqual(baseline);
  });

  it("has unique slugs", () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("index lists p001..pN with no gaps, one per post file", () => {
    const keys = Object.keys(posts);
    keys.forEach((k) => expect(k).toMatch(/^p\d{3,}$/));
    const nums = keys.map((k) => Number(k.slice(1))).sort((a, b) => a - b);
    expect(nums).toEqual(nums.map((_, i) => i + 1));

    const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
    expect(files).toHaveLength(blogPosts.length);
  });

  it("each file is named after its post's slug", () => {
    const files = new Set(readdirSync(POSTS_DIR).map((f) => f.replace(/\.ts$/, "")));
    for (const post of blogPosts) expect(files.has(post.slug)).toBe(true);
  });

  it("every post has the fields the blog pages render", () => {
    for (const p of blogPosts) {
      expect(p.title).toBeTruthy();
      expect(p.seoTitle).toBeTruthy();
      expect(p.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(p.kicker).toBeTruthy();
      expect(p.content.length).toBeGreaterThan(0);
    }
  });
});
