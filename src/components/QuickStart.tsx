export function QuickStart() {
  return (
    <section id="quick-start" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal text-center">
          Quick Start
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-cream rounded-2xl p-6 border border-amber/20 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-white font-bold text-sm">
              1
            </span>
            <h3 className="mt-4 font-heading font-bold text-lg text-charcoal">
              Install the TabStax extension
            </h3>
            <p className="mt-3 text-warm-gray text-sm leading-relaxed">
              Save the browser side of each Stax. Your exact tabs, ready to reopen.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/mjplcglfdelgdcoalbgechkeophncjmf?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Add to Chrome&nbsp;&rarr;
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-cream rounded-2xl p-6 border border-amber/20 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-white font-bold text-sm">
              2
            </span>
            <h3 className="mt-4 font-heading font-bold text-lg text-charcoal">
              Connect your LLM
            </h3>
            <p className="mt-3 text-warm-gray text-sm leading-relaxed">
              Use HeyStax inside Claude or any AI chat via MCP.
            </p>
            <div className="mt-3 space-y-1">
              <code className="block bg-charcoal/5 rounded px-2 py-1 text-xs font-mono text-charcoal">
                &ldquo;What&rsquo;s my next action?&rdquo;
              </code>
              <code className="block bg-charcoal/5 rounded px-2 py-1 text-xs font-mono text-charcoal">
                &ldquo;What is the team doing?&rdquo;
              </code>
              <code className="block bg-charcoal/5 rounded px-2 py-1 text-xs font-mono text-charcoal">
                &ldquo;Add next action&rdquo;
              </code>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-cream rounded-2xl p-6 border border-amber/20 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-white font-bold text-sm">
              3
            </span>
            <h3 className="mt-4 font-heading font-bold text-lg text-charcoal">
              Use the Hey CLI
            </h3>
            <p className="mt-3 text-warm-gray text-sm leading-relaxed">
              Work from the terminal. Capture next actions without leaving your flow.
            </p>
            <div className="mt-3 space-y-1">
              <code className="block bg-charcoal/5 rounded px-2 py-1 text-xs font-mono text-charcoal">
                hey &ldquo;fix login bug&rdquo;
              </code>
              <code className="block bg-charcoal/5 rounded px-2 py-1 text-xs font-mono text-charcoal">
                hey ls
              </code>
              <code className="block bg-charcoal/5 rounded px-2 py-1 text-xs font-mono text-charcoal">
                hey done 1
              </code>
            </div>
            <a
              href="/hey"
              className="mt-4 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Install Hey CLI&nbsp;&rarr;
            </a>
          </div>

          {/* Step 4 */}
          <div className="bg-cream rounded-2xl p-6 border border-amber/20 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-white font-bold text-sm">
              4
            </span>
            <h3 className="mt-4 font-heading font-bold text-lg text-charcoal">
              Use the dashboard
            </h3>
            <p className="mt-3 text-warm-gray text-sm leading-relaxed">
              Plan your week and see all Stax and next actions together in one view.
            </p>
            <a
              href="https://dash.heystax.ai/attention"
              className="mt-4 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Open Dashboard&nbsp;&rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
