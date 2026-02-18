import Link from "next/link";

const useCases = [
  { persona: "Freelance Designer", title: "Juggling 6 client projects without losing context" },
  { persona: "Startup Founder", title: "Switching between product, fundraising, and hiring" },
  { persona: "PhD Researcher", title: "Managing thesis chapters, papers, and lab notes" },
  { persona: "Software Developer", title: "Keeping PRs, docs, and debugging sessions organized" },
  { persona: "Content Creator", title: "Tracking scripts, edits, uploads, and analytics" },
  { persona: "Project Manager", title: "Monitoring multiple team workstreams without tab chaos" },
  { persona: "Student", title: "Separating coursework, research, and side projects" },
  { persona: "Marketing Manager", title: "Coordinating campaigns, analytics, and creative assets" },
];

export function UseCaseTeaser() {
  return (
    <section id="use-cases-teaser" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center">
          See how people use TabStax
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.persona}
              className="bg-cream-dark border border-amber/10 rounded-xl p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-amber">{uc.persona}</p>
              <p className="mt-2 text-charcoal leading-snug">{uc.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/use-cases"
            className="text-amber font-semibold hover:text-terracotta transition-colors"
          >
            See all 73 use cases&nbsp;&rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
