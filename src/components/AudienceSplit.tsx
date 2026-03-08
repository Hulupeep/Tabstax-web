export function AudienceSplit() {
  return (
    <section id="audience-split" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal text-center">
          Built for fragmented minds.
          <br />
          <span className="text-amber">Powerful for fast-moving teams.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Individuals */}
          <div className="bg-cream-dark rounded-2xl p-8 border-l-4 border-amber shadow-sm">
            <h3 className="font-heading font-bold text-xl text-charcoal">
              For individuals
            </h3>
            <ul className="mt-6 space-y-3 text-warm-gray">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Multiple projects without mental overload
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Always know where to resume
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Faster re-entry after any interruption
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Continuity across AI, terminal, browser, and web
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Your brain doesn&rsquo;t carry all the state
              </li>
            </ul>
          </div>

          {/* Teams */}
          <div className="bg-cream-dark rounded-2xl p-8 border-l-4 border-terracotta shadow-sm">
            <h3 className="font-heading font-bold text-xl text-charcoal">
              For teams and families
            </h3>
            <ul className="mt-6 space-y-3 text-warm-gray">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-terracotta shrink-0" />
                Visible next steps for everyone
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-terracotta shrink-0" />
                Shared context without meetings
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-terracotta shrink-0" />
                Fast kickoff &mdash; no ceremony
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-terracotta shrink-0" />
                Handoffs without overhead
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-terracotta shrink-0" />
                Real-time movement visible to all
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
