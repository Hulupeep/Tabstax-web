import { Metadata } from "next";
import Link from "next/link";
import { useCases, workCategories, lifeCategories } from "@/data/use-cases";

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

const personaColors: Record<string, string> = {
  work: "bg-amber/10 text-amber",
  life: "bg-pink-glow/10 text-pink-glow",
};

function CategorySection({
  category,
  section,
}: {
  category: string;
  section: "work" | "life";
}) {
  const cases = useCases.filter((uc) => uc.category === category);
  if (cases.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="font-heading text-xl font-bold text-charcoal mb-6">
        {category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((uc) => (
          <Link
            key={uc.id}
            href={`/use-cases/${uc.slug}`}
            className="group block bg-cream-dark rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-amber-light"
          >
            <span
              className={`inline-block text-xs font-semibold font-body px-2.5 py-1 rounded-full mb-3 ${personaColors[section]}`}
            >
              {uc.persona}
            </span>
            <h4 className="font-heading text-lg font-bold text-charcoal mb-2 group-hover:text-amber transition-colors">
              {uc.title}
            </h4>
            <p className="text-warm-gray text-sm leading-relaxed font-body">
              {uc.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

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
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
          73 Ways People Use TabStax
        </h1>
        <p className="text-warm-gray text-lg max-w-2xl mx-auto font-body">
          Real scenarios. Real chaos. Real relief. From enterprise sales reps
          to grieving families — this is what zero reconstruction tax looks
          like.
        </p>
      </section>

      {/* Work Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            Work
          </h2>
          <span className="text-sm font-body text-warm-gray bg-cream-dark px-3 py-1 rounded-full">
            {workCategories.length} categories
          </span>
        </div>
        {workCategories.map((cat) => (
          <CategorySection key={cat} category={cat} section="work" />
        ))}
      </section>

      {/* Life Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-heading text-3xl font-bold text-charcoal">
            Life
          </h2>
          <span className="text-sm font-body text-warm-gray bg-cream-dark px-3 py-1 rounded-full">
            {lifeCategories.length} categories
          </span>
        </div>
        {lifeCategories.map((cat) => (
          <CategorySection key={cat} category={cat} section="life" />
        ))}
      </section>

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
