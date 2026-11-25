// Single import point for blog posts. Each post lives in src/data/posts/<slug>.ts;
// src/data/posts/index.ts lists them, one line per post, in order (p001 first).
import type { BlogPost } from "./blog-types";
import * as posts from "./posts";

export type { BlogPost } from "./blog-types";

export const blogPosts: BlogPost[] = Object.entries(posts as Record<string, BlogPost>)
  .sort(([a], [b]) => Number(a.slice(1)) - Number(b.slice(1)))
  .map(([, post]) => post);
