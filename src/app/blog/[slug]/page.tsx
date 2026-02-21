import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { readingTime } from "@/lib/reading-time";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.tabstax.app/blog/${post.slug}`,
    },
  };
}

function renderInline(text: string): React.ReactNode {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const isExternal = linkMatch[2].startsWith("http");
          return (
            <a
              key={j}
              href={linkMatch[2]}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-amber underline hover:text-terracotta transition-colors"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.kicker === post.kicker)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const mins = readingTime(post.content);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle,
    description: post.seoDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.tabstax.app/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "TabStax",
      url: "https://www.tabstax.app",
    },
    keywords: post.keywords.join(", "),
    articleSection: post.kicker,
  };

  return (
    <section className="bg-cream min-h-screen">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm font-semibold text-amber hover:text-terracotta transition-colors mb-10 inline-block"
        >
          ← All posts
        </Link>

        {/* Header */}
        <p className="text-sm font-semibold text-amber uppercase tracking-wide mb-2">
          {post.kicker}
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-warm-gray mb-10">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.author}</span>
          <span aria-hidden>·</span>
          <span>{mins} min read</span>
        </div>

        {/* Body */}
        <div className="font-body text-charcoal space-y-5 leading-relaxed">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-heading text-2xl font-bold text-charcoal mt-10 mb-2"
                >
                  {block.slice(3)}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="font-heading text-xl font-semibold text-charcoal mt-8 mb-1"
                >
                  {block.slice(4)}
                </h3>
              );
            }
            return <p key={i}>{renderInline(block)}</p>;
          })}
        </div>

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <div className="mt-16 border-t border-charcoal/10 pt-10">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {post.faq.map((item, i) => (
                <div key={i}>
                  <p className="font-semibold text-charcoal mb-1">{item.q}</p>
                  <p className="text-warm-gray leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-charcoal/10 pt-10">
            <h2 className="font-heading text-xl font-bold text-charcoal mb-6">
              More in {post.kicker}
            </h2>
            <div className="space-y-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block"
                >
                  <p className="font-semibold text-charcoal group-hover:text-terracotta transition-colors leading-snug">
                    {related.title}
                  </p>
                  <p className="text-sm text-warm-gray mt-1">
                    {new Date(related.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    · {readingTime(related.content)} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div className="mt-16 border-t border-charcoal/10 pt-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="text-sm font-semibold text-amber hover:text-terracotta transition-colors"
          >
            ← Back to all posts
          </Link>
          <Link
            href={`/blog?category=${encodeURIComponent(post.kicker)}`}
            className="text-sm font-semibold text-amber hover:text-terracotta transition-colors"
          >
            More: {post.kicker} →
          </Link>
        </div>
      </div>
    </section>
  );
}
