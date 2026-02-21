import { Metadata } from "next";
import { UseCaseFilter } from "./use-case-filter";

export const metadata: Metadata = {
  title: "73 Ways People Use TabStax",
  description:
    "From consultants juggling clients to parents managing school chaos — discover how real people use TabStax to eliminate the reconstruction tax.",
  keywords: [
    "tab manager use cases",
    "browser workspace organiser",
    "context switching browser",
    "tab organiser productivity",
    "TabStax examples",
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "73 Ways People Use TabStax",
  description:
    "From consultants juggling clients to parents managing school chaos — discover how real people use TabStax to eliminate the reconstruction tax.",
  url: "https://tabstax.com/use-cases",
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
          73 Ways People Use TabStax
        </h1>
        <p className="text-warm-gray text-lg max-w-2xl mx-auto font-body">
          Real scenarios. Real chaos. Real relief. From enterprise sales reps
          to grieving families — this is what zero reconstruction tax looks
          like.
        </p>
      </section>

      {/* Filter + use case list (client) */}
      <UseCaseFilter />

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-cream mb-4">
            Ready to eliminate your reconstruction tax?
          </h2>
          <p className="text-warm-gray text-lg mb-8 font-body">
            Pick your first Stax. Drop into your world in seconds, not minutes.
          </p>
          <a
            href="https://dash.tabstax.app/attention"
            className="inline-block bg-amber text-cream font-body font-semibold px-8 py-4 rounded-full text-lg hover:bg-terracotta transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>
    </div>
  );
}
