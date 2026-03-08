export function MotionLayer() {
  return (
    <section id="motion-layer" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal">
          Start with the work, not the workflow.
        </h2>

        <div className="mt-8 space-y-4 text-lg text-warm-gray leading-relaxed">
          <p>
            HeyStax is where the work becomes live.
          </p>
          <p>
            Tickets can still exist for governance, acceptance, testing, and reporting.
            But HeyStax is the shared motion layer where people actually move:
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Decide", "Act", "Test", "Continue"].map((step) => (
            <span
              key={step}
              className="rounded-full bg-amber/10 px-5 py-2 text-sm font-semibold text-amber"
            >
              {step}
            </span>
          ))}
        </div>

        <p className="mt-10 text-lg text-charcoal leading-relaxed">
          Governance can come later or alongside. HeyStax is the faster starting
          point and the living layer underneath.
        </p>
      </div>
    </section>
  );
}
