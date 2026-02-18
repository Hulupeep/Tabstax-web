export function Pricing() {
  return (
    <section id="pricing" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center">
          Simple pricing
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading font-bold text-2xl text-charcoal">
              Free
            </h3>
            <p className="mt-1 text-warm-gray text-sm">No account needed</p>
            <p className="mt-6 font-heading font-bold text-4xl text-charcoal">
              &euro;0
            </p>
            <ul className="mt-8 space-y-3 text-charcoal">
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Unlimited local Stax
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Next actions per project
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Basic context switching
              </li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-cream border-2 border-amber rounded-2xl p-8 shadow-md relative">
            <span className="absolute -top-3 left-8 bg-amber text-white text-xs font-semibold px-3 py-1 rounded-full">
              7-day free trial
            </span>
            <h3 className="font-heading font-bold text-2xl text-charcoal">
              Pro
            </h3>
            <p className="mt-1 text-warm-gray text-sm">For power users</p>
            <p className="mt-6 font-heading font-bold text-4xl text-charcoal">
              &euro;3.99
              <span className="text-base font-normal text-warm-gray">
                /month
              </span>
            </p>
            <ul className="mt-8 space-y-3 text-charcoal">
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Everything in Free
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Cloud sync across devices
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Sharing and collaboration
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block w-2 h-2 rounded-full bg-amber shrink-0" />
                Attention Stax priority board
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="https://dash.tabstax.app/attention"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-amber text-white font-semibold hover:bg-terracotta transition-colors"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
