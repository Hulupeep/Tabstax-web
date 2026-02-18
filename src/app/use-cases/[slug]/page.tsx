import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCases, workCategories } from "@/data/use-cases";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = useCases.find((uc) => uc.slug === slug);
  if (!useCase) return {};

  return {
    title: useCase.seoTitle,
    description: useCase.metaDescription,
    keywords: useCase.keywords,
    openGraph: {
      title: useCase.seoTitle,
      description: useCase.metaDescription,
    },
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = useCases.find((uc) => uc.slug === slug);
  if (!useCase) notFound();

  const isWork = workCategories.includes(useCase.category as typeof workCategories[number]);
  const sectionLabel = isWork ? "Work" : "Life";
  const badgeColor = isWork
    ? "bg-amber/10 text-amber"
    : "bg-pink-glow/10 text-pink-glow";
  const categoryColor = isWork
    ? "bg-amber-light/30 text-charcoal"
    : "bg-pink-glow/10 text-charcoal";

  const paragraphs = useCase.content.split("\n\n");
  const midpoint = Math.ceil(paragraphs.length / 2);
  const problemParagraphs = paragraphs.slice(0, midpoint);
  const solutionParagraphs = paragraphs.slice(midpoint);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tabstax.com" },
        { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://tabstax.com/use-cases" },
        { "@type": "ListItem", position: 3, name: useCase.seoTitle, item: `https://tabstax.com/use-cases/${slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: useCase.seoTitle,
      description: useCase.metaDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: useCase.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        {/* Back link */}
        <Link
          href="/use-cases"
          className="inline-flex items-center text-warm-gray hover:text-amber transition-colors text-sm font-body mb-8"
        >
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Use Cases
        </Link>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span
            className={`text-xs font-semibold font-body px-2.5 py-1 rounded-full ${badgeColor}`}
          >
            {useCase.persona}
          </span>
          <span
            className={`text-xs font-body px-2.5 py-1 rounded-full ${categoryColor}`}
          >
            {sectionLabel} &middot; {useCase.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">
          {useCase.title}
        </h1>

        {/* Summary */}
        <p className="text-warm-gray text-lg leading-relaxed font-body mb-10 border-l-4 border-amber-light pl-4">
          {useCase.summary}
        </p>

        {/* Content */}
        <div className="space-y-5">
          <h2 className="font-heading text-2xl font-bold text-charcoal">The problem</h2>
          {problemParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-charcoal text-base leading-relaxed font-body"
            >
              {p}
            </p>
          ))}
          {solutionParagraphs.length > 0 && (
            <>
              <h2 className="font-heading text-2xl font-bold text-charcoal pt-4">How TabStax helps</h2>
              {solutionParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-charcoal text-base leading-relaxed font-body"
                >
                  {p}
                </p>
              ))}
            </>
          )}
        </div>

        {/* Stax Pattern Box */}
        <div className="mt-12 bg-charcoal rounded-2xl p-6">
          <p className="text-amber-light text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Stax Pattern
          </p>
          <p className="text-cream font-heading text-lg leading-relaxed">
            {useCase.staxPattern}
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {useCase.faq.map((item, i) => (
              <div key={i} className="border-l-4 border-amber pl-4">
                <p className="font-semibold text-charcoal">{item.q}</p>
                <p className="mt-1 text-warm-gray text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related use cases */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Related Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {useCase.relatedSlugs.map((relSlug) => {
              const related = useCases.find((u) => u.slug === relSlug);
              if (!related) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/use-cases/${relSlug}`}
                  className="block bg-cream-dark rounded-xl p-4 border border-amber/20 hover:border-amber/50 transition-colors"
                >
                  <p className="text-xs font-semibold text-amber mb-1">{related.persona}</p>
                  <p className="font-heading font-bold text-charcoal text-sm leading-tight">{related.title}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://dash.tabstax.app/attention"
            className="inline-block bg-amber text-cream font-body font-semibold px-8 py-4 rounded-full text-lg hover:bg-terracotta transition-colors"
          >
            Start Now
          </a>
          <p className="text-warm-gray text-sm mt-3 font-body">
            Build your first Stax in under a minute.
          </p>
        </div>
      </article>
    </div>
  );
}
