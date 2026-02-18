export function TheProblem() {
  const painPoints = [
    "Remember which tabs and tools mattered",
    "Recover where you left off",
    "Decide what to do next",
  ];

  return (
    <section id="the-problem" className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal">
          Every return to a project costs you momentum.
        </h2>

        <p className="mt-8 text-lg text-warm-gray leading-relaxed">
          When you come back to a project you have to:
        </p>

        <ul className="mt-6 space-y-4">
          {painPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
              <span className="text-lg text-charcoal">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-lg text-charcoal leading-relaxed">
          That &lsquo;reconstruction tax&rsquo; is why projects quietly stall.
          You don&rsquo;t need more discipline &mdash; you need a faster re-entry.
        </p>
      </div>
    </section>
  );
}
