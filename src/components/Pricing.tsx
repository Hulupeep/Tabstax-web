import { DASH_ONBOARDING_URL } from "@/lib/routes";

const plans = [
  {
    name: "Principal",
    eyebrow: "ONE PRINCIPAL",
    price: "$19",
    priceNote: "per month",
    note: "One workspace owner. 30-day trial. No card.",
    headline: "Tuesday morning. You open the stax. The work moved, and the record is yours.",
    body: [
      "Claude sorted the renewal thread.",
      "ChatGPT shaped the client reply.",
      "The car insurance date landed beside the policy record.",
      "Start in Claude. Finish in ChatGPT. Same stax. Same information.",
    ],
  },
  {
    name: "Team",
    eyebrow: "PEOPLE AND AI HIRED INTO ONE WORK GRAPH",
    price: "$29",
    priceNote: "per user per month",
    note: "Three-user minimum.",
    headline: "The morning opens on decisions, not status.",
    body: [
      "Contractors left proof overnight.",
      "AI labour checked the record against the stax.",
      "Next actions moved where the evidence was clear.",
      "The meeting becomes judgement, not recaps.",
    ],
  },
  {
    name: "Enterprise",
    eyebrow: "YOUR OWN DATA BOUNDARY",
    price: "Custom",
    priceNote: "annual contract",
    note: "For governed work at scale.",
    headline: "Governance sits in the register. Work-memory sits in its own boundary.",
    body: [
      "Dedicated sharded data boundary.",
      "Governance controls named early.",
      "Implementation support close to the work.",
      "Role-aware access across people, dates, records, and project context.",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-sm font-bold uppercase tracking-[0.18em] text-amber">
            Plans
          </p>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-5xl text-charcoal">
            Choose the starting shape.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-warm-gray">
            Plan selection is intent, not checkout. Pick the shape, create the
            account, enter HeyStax without payment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex min-h-[540px] flex-col rounded-2xl border border-charcoal/10 bg-cream-dark p-6 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber">
                {plan.eyebrow}
              </p>
              <h3 className="mt-4 font-heading text-4xl font-bold text-charcoal">
                {plan.name}
              </h3>
              <p className="mt-5 min-h-24 text-2xl font-bold leading-tight text-charcoal">
                {plan.headline}
              </p>

              <div className="mt-6 border-y border-charcoal/10 py-5">
                <p className="font-heading text-4xl font-bold text-charcoal">
                  {plan.price}
                  <span className="ml-2 font-body text-sm font-normal text-warm-gray">
                    {plan.priceNote}
                  </span>
                </p>
                <p className="mt-2 text-sm text-warm-gray">{plan.note}</p>
              </div>

              <div className="mt-5 space-y-2 text-sm leading-6 text-charcoal">
                {plan.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <a
                href={DASH_ONBOARDING_URL}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta"
              >
                Start Now
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-6 text-warm-gray">
          Goal Verdict arrives inside Principal and Team on 29 June 2026. It is a
          usage meter, not another plan. Spend it when HeyStax reads the stax,
          weighs the next action, checks the record, and returns what needs
          judgement now.
        </p>
      </div>
    </section>
  );
}
