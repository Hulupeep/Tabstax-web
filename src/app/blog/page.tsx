"use client";

import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
          {sortedPosts.map((post) => (
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
                <time className="text-sm text-warm-gray">
                  {formatDate(post.date)}
                </time>
                <p className="font-body text-warm-gray mt-4 leading-relaxed">
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
      </div>
    </section>
  );
}
