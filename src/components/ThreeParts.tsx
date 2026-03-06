export function ThreeParts() {
  return (
    <section id="three-parts" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal text-center">
          Three Parts. One System.
          <br />
          <span className="text-amber">Next Actions at the Center.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Attention Stax */}
          <div className="bg-cream-dark border border-amber/20 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber uppercase tracking-wide">
              Web App
            </p>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              Attention Stax
            </h3>
            <p className="mt-4 text-warm-gray leading-relaxed">
              See the shape of your week in 5 seconds. Drag projects into
              Must/Should/Good/Meh, then switch into execution instead of
              re-prioritizing.
            </p>
            <a
              href="https://dash.tabstax.app/attention"
              className="mt-6 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Open Attention Stax&nbsp;&rarr;
            </a>
          </div>

          {/* Card 2: Hey! + MCP */}
          <div className="bg-cream-dark border border-amber/20 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold text-amber uppercase tracking-wide">
                Capture next actions everywhere
              </p>
            </div>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              Hey! + Claude
            </h3>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Use TabStax in Claude Code, Claude.ai, or in the terminal with the
              Hey CLI. Claude can see across all your Stax, help you figure out
              which project to work on next, and add next actions for you.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber/10 text-xs font-medium text-amber">
                MCP Live
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber/10 text-xs font-medium text-amber">
                CLI
              </span>
            </div>
            <a
              href="https://hulupeep.github.io/TabStax-Help/topics/mcp-section"
              className="mt-4 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Connect to Claude&nbsp;&rarr;
            </a>
          </div>

          {/* Card 3: Extension */}
          <div className="bg-cream-dark border border-amber/20 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber uppercase tracking-wide">
              Fast context switching
            </p>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              Extension
            </h3>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Switch projects like switching tabs. Save/open Stax (the actual
              working tabs) and see the attached Next Actions right beside the
              workspace &mdash; so &lsquo;what next?&rsquo; is always answered.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/mjplcglfdelgdcoalbgechkeophncjmf?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Add to Chrome&nbsp;&rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
