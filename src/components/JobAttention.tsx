export function JobAttention() {
  const lanes = [
    { label: "Must", color: "bg-terracotta", textColor: "text-white" },
    { label: "Should", color: "bg-amber", textColor: "text-white" },
    { label: "Good", color: "bg-warm-gray", textColor: "text-white" },
    { label: "Meh", color: "bg-cream-dark", textColor: "text-charcoal" },
  ];

  return (
    <section id="job-attention" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-amber uppercase tracking-wide">
          Job to be done
        </p>
        <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-charcoal">
          &ldquo;Everything feels equally important&rdquo;
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-heading font-bold text-xl text-terracotta">
              The problem
            </h3>
            <p className="mt-4 text-lg text-warm-gray leading-relaxed">
              15 projects, all screaming. Paralysis. You can&rsquo;t decide what
              deserves your energy, so nothing gets it.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl text-amber">
              Attention Stax
            </h3>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              This layer manages attention allocation, not tasks. Drag projects
              into priority lanes and prevent silent project decay.
            </p>

            <div className="mt-8 flex gap-3">
              {lanes.map((lane) => (
                <div
                  key={lane.label}
                  className={`${lane.color} ${lane.textColor} rounded-xl px-5 py-4 text-center font-semibold text-sm flex-1 shadow-sm`}
                >
                  {lane.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
