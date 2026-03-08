export function WorksEverywhere() {
  return (
    <section id="works-everywhere" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal text-center">
          HeyStax works everywhere you do
        </h2>
        <p className="mt-4 text-center text-lg text-amber font-heading font-bold">
          Next Actions at the center.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: AI / LLM */}
          <div className="bg-cream border border-amber/20 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber uppercase tracking-wide">
              AI Chat &amp; Code
            </p>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              Next actions everywhere
            </h3>
            <p className="mt-1 text-lg font-heading font-bold text-charcoal/70">
              Chat. Code. Share.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              All your Stax work right inside Claude chat, Claude Code, and the Hey CLI.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-warm-gray">Ask:</p>
              <div className="space-y-1.5">
                <code className="block bg-charcoal/5 rounded-lg px-3 py-2 text-sm text-charcoal font-mono">
                  &ldquo;What&rsquo;s my next action?&rdquo;
                </code>
                <code className="block bg-charcoal/5 rounded-lg px-3 py-2 text-sm text-charcoal font-mono">
                  &ldquo;Set the next actions.&rdquo;
                </code>
                <code className="block bg-charcoal/5 rounded-lg px-3 py-2 text-sm text-charcoal font-mono">
                  &ldquo;What&rsquo;s the team working on right now?&rdquo;
                </code>
              </div>
            </div>
            <a
              href="https://hulupeep.github.io/TabStax-Help/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Connect your LLM&nbsp;&rarr;
            </a>
          </div>

          {/* Card 2: Dashboard */}
          <div className="bg-cream border border-amber/20 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber uppercase tracking-wide">
              Web Dashboard
            </p>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              Plan in real time. Stay focused.
            </h3>
            <p className="mt-4 text-warm-gray leading-relaxed">
              See the shape of your week in five seconds.
              Drag Stax into Must / Should / Good / Meh, then switch
              from planning into execution instead of constantly reprioritizing.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Must", color: "bg-terracotta text-white" },
                { label: "Should", color: "bg-amber text-white" },
                { label: "Good", color: "bg-warm-gray text-white" },
                { label: "Meh", color: "bg-cream-dark text-charcoal" },
              ].map((lane) => (
                <div
                  key={lane.label}
                  className={`${lane.color} rounded-xl px-5 py-4 text-center font-semibold text-sm flex-1 shadow-sm`}
                >
                  {lane.label}
                </div>
              ))}
            </div>
            <a
              href="https://dash.heystax.ai/attention"
              className="mt-6 inline-flex items-center text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              HeyStax Dashboard&nbsp;&rarr;
            </a>
          </div>

          {/* Card 3: Extension */}
          <div className="bg-cream border border-amber/20 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber uppercase tracking-wide">
              Browser Extension
            </p>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              Tabs + Stax = TabStax
            </h3>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Your Stax workspace includes browser tabs. Switch execution spaces
              between projects instantly by opening the exact tabs for each project.
            </p>
            <p className="mt-3 text-warm-gray leading-relaxed">
              A family vacation Stax with travel planning sites. A client Stax with
              GitHub, Jira, ChatGPT, Vercel, Railway and the exact next actions.
            </p>
            <p className="mt-4 text-charcoal font-semibold">
              Switch context in seconds.
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

          {/* Card 4: Teams */}
          <div className="bg-cream border border-amber/20 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber uppercase tracking-wide">
              Team Coordination
            </p>
            <h3 className="mt-2 font-heading font-bold text-2xl text-charcoal">
              See your team moving together
            </h3>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Stand-ups don&rsquo;t work as well with AI. We move too fast for
              once-a-day updates. Add a team to any Stax and watch everyone move
              together during the day as they add next actions.
            </p>
            <p className="mt-3 text-warm-gray leading-relaxed">
              Lightweight and simple across Claude Code, terminal, web, and AI chat.
              Handoffs without meetings. Everyone&rsquo;s next action visible.
            </p>
            <p className="mt-4 text-charcoal font-semibold">
              GitHub and Jira track the work being done. HeyStax shows it moving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
