"use client";

import { blogPosts } from "@/data/blog-posts";
import { readingTime } from "@/lib/reading-time";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";

// Curated top 10 by SEO conversion value — high-intent, high-traffic queries
const POPULAR_SLUGS = [
  "onetab-problems-data-loss",
  "pocket-shutdown-what-happened",
  "great-suspender-malware-what-happened",
  "tab-manager-will-delete-everything",
  "tab-tools-adhd-tab-hoarding",
  "ai-making-us-more-distracted-disorganized",
  "autosave-is-theater",
  "notion-sluggish-at-scale",
  "tab-session-manager-autosave-problems",
  "journalists-tab-reentry-problem",
];

function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "All";
  const currentPage = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const POSTS_PER_PAGE = 15;

  // Build category counts
  const categoryCounts = blogPosts.reduce<Record<string, number>>((acc, post) => {
    acc[post.kicker] = (acc[post.kicker] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryCounts).sort(
    ([a, countA], [b, countB]) => countB - countA || a.localeCompare(b)
  );

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPosts =
    selectedCategory === "All"
      ? sortedPosts
      : sortedPosts.filter((p) => p.kicker === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  // Resolve popular posts (preserve curated order, skip any missing slugs)
  const popularPosts = POPULAR_SLUGS
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  function navigate(category: string, page: number) {
    const params = new URLSearchParams();
    if (category !== "All") params.set("category", category);
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function getPageNumbers(): (number | "…")[] {
    const pages: (number | "…")[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - safePage) <= 2) {
        if (pages.length > 0 && typeof pages[pages.length - 1] === "number") {
          const prev = pages[pages.length - 1] as number;
          if (i - prev > 1) pages.push("…");
        }
        pages.push(i);
      }
    }
    return pages;
  }

  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          Blog
        </h1>
        <p className="font-body text-lg text-warm-gray mb-12">
          Evidence-first writing on context switching, ADHD productivity, browser tool risks, and re-entry workflows.{" "}
          <span className="text-charcoal font-semibold">{blogPosts.length} posts</span>{" "}
          across {sortedCategories.length} topics.
        </p>

        {/* Most Popular */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
            Most popular
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-charcoal/10 rounded-xl p-5 hover:border-terracotta/40 hover:shadow-sm transition-all bg-white"
              >
                <p className="text-xs font-semibold text-amber uppercase tracking-wide mb-2">
                  {post.kicker}
                </p>
                <h3 className="font-heading text-base font-bold text-charcoal group-hover:text-terracotta transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-xs text-warm-gray">
                  {readingTime(post.content)} min read
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Category filter bar */}
        <div className="mb-3">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
            All posts
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => navigate("All", 1)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === "All"
                  ? "bg-charcoal text-cream"
                  : "bg-charcoal/10 text-warm-gray hover:bg-charcoal/20 hover:text-charcoal"
              }`}
            >
              All{" "}
              <span className={`text-xs ${selectedCategory === "All" ? "opacity-70" : "opacity-50"}`}>
                {blogPosts.length}
              </span>
            </button>

            {sortedCategories.map(([cat, count]) => (
              <button
                key={cat}
                onClick={() => navigate(cat, 1)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-charcoal text-cream"
                    : "bg-charcoal/10 text-warm-gray hover:bg-charcoal/20 hover:text-charcoal"
                }`}
              >
                {cat}{" "}
                <span className={`text-xs ${selectedCategory === cat ? "opacity-70" : "opacity-50"}`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-sm text-warm-gray mb-8">
          {selectedCategory === "All"
            ? `Showing ${paginatedPosts.length} of ${filteredPosts.length} posts`
            : `${filteredPosts.length} post${filteredPosts.length !== 1 ? "s" : ""} in "${selectedCategory}"`}
          {totalPages > 1 && ` — page ${safePage} of ${totalPages}`}
        </p>

        {/* Post list */}
        <div className="space-y-8">
          {paginatedPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-charcoal/10 pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="text-sm font-semibold text-amber uppercase tracking-wide mb-1">
                  {post.kicker}
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal group-hover:text-terracotta transition-colors mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-warm-gray mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{readingTime(post.content)} min read</span>
                </div>
                <p className="font-body text-warm-gray leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-amber hover:text-terracotta transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-12 flex items-center justify-center gap-1"
          >
            <button
              onClick={() => navigate(selectedCategory, safePage - 1)}
              disabled={safePage === 1}
              className="px-3 py-2 text-sm font-semibold text-warm-gray hover:text-charcoal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>

            {getPageNumbers().map((p, i) =>
              p === "…" ? (
                <span key={`ellipsis-${i}`} className="px-2 text-warm-gray select-none">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => navigate(selectedCategory, p as number)}
                  aria-current={safePage === p ? "page" : undefined}
                  className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                    safePage === p
                      ? "bg-charcoal text-cream"
                      : "text-warm-gray hover:text-charcoal hover:bg-charcoal/10"
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => navigate(selectedCategory, safePage + 1)}
              disabled={safePage === totalPages}
              className="px-3 py-2 text-sm font-semibold text-warm-gray hover:text-charcoal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <section className="bg-cream min-h-screen">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Blog
            </h1>
            <p className="text-warm-gray">Loading posts…</p>
          </div>
        </section>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
