"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  function togglePost(slug: string) {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          Blog
        </h1>
        <p className="font-body text-lg text-warm-gray mb-12">
          Thoughts on focus, flow, and building tools for how brains actually
          work.
        </p>

        <div className="space-y-8">
          {sortedPosts.map((post) => {
            const isExpanded = expandedSlug === post.slug;

            return (
              <article
                key={post.slug}
                className="border-b border-charcoal/10 pb-8 last:border-b-0"
              >
                <button
                  onClick={() => togglePost(post.slug)}
                  className="w-full text-left group"
                >
                  <p className="text-sm font-semibold text-amber uppercase tracking-wide mb-1">
                    {post.kicker}
                  </p>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal group-hover:text-terracotta transition-colors mb-2">
                    {post.title}
                  </h2>
                  <time className="text-sm text-warm-gray">
                    {formatDate(post.date)}
                  </time>
                </button>

                {!isExpanded && (
                  <p className="font-body text-warm-gray mt-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                {isExpanded && (
                  <div className="font-body text-charcoal mt-6 space-y-4 leading-relaxed">
                    {post.content.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => togglePost(post.slug)}
                  className="mt-4 text-sm font-semibold text-amber hover:text-terracotta transition-colors"
                >
                  {isExpanded ? "Collapse" : "Read more"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
