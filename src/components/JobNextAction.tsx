export function JobNextAction() {
  return (
    <section id="job-next-action" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-amber uppercase tracking-wide">
          Job to be done
        </p>
        <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-charcoal">
          &ldquo;I don&rsquo;t know where to start&rdquo;
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Problem */}
          <div>
            <h3 className="font-heading font-bold text-xl text-terracotta">
              The problem
            </h3>
            <p className="mt-4 text-lg text-warm-gray leading-relaxed">
              Open a project from last week. No clear entry point. You stare at
              dozens of tabs, trying to remember what mattered.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-heading font-bold text-xl text-amber">
              The solution
            </h3>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              Attach a concrete next action. Collapse decision fatigue. Make
              re-entry automatic. Turn memory into execution.
            </p>
            <blockquote className="mt-8 border-l-4 border-amber pl-6 text-xl font-heading font-bold text-charcoal italic">
              &ldquo;You don&rsquo;t think. You act.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
