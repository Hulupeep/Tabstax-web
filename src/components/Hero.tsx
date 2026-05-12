import { DASH_ONBOARDING_URL } from "@/lib/routes";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-cream-dark py-24 md:py-32"
    >
      {/* Organic blob shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber/10 animate-blob blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-glow/10 animate-blob blur-3xl [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-amber/5 animate-blob blur-2xl [animation-delay:4s]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-black text-5xl md:text-7xl text-charcoal leading-tight animate-fade-in">
          You hire the AI. You keep the work.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Work runs while you sleep, work-memory stays owned for life, and every
          stax is portable to any AI you hire.
        </p>

        <p className="mt-4 text-base text-warm-gray/80 max-w-2xl mx-auto animate-slide-up [animation-delay:0.1s]">
          Stax, next actions, records, dates, people, project context, MCP, and audit.
        </p>

        <p className="mt-3 text-sm text-warm-gray/60 animate-slide-up [animation-delay:0.15s]">
          Start in Claude. Finish in ChatGPT. Same stax. Same information.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:0.2s]">
          <a
            href={DASH_ONBOARDING_URL}
            className="inline-flex items-center px-8 py-4 rounded-full bg-amber text-white font-semibold text-lg hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl"
          >
            Start Now
          </a>
          <a
            href="#video"
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-charcoal/20 text-charcoal font-semibold text-lg hover:border-charcoal/40 transition-colors"
          >
            See HeyStax in Action
          </a>
        </div>
      </div>
    </section>
  );
}
