export function FinalCTA() {
  return (
    <section id="final-cta" className="bg-charcoal py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-cream">
          Pick up where your mind left off.
        </h2>

        <p className="mt-6 text-lg text-cream/70">
          One click back into the work.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://dash.heystax.ai/attention"
            className="inline-flex items-center px-10 py-5 rounded-full bg-amber text-white font-semibold text-lg hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl"
          >
            Start Now
          </a>
          <a
            href="https://hulupeep.github.io/TabStax-Help/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 rounded-full border-2 border-cream/30 text-cream font-semibold text-lg hover:border-cream/50 transition-colors"
          >
            Connect your LLM
          </a>
        </div>
      </div>
    </section>
  );
}
