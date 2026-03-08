export function FastKickoff() {
  const steps = [
    "Have the call.",
    "Create the Stax.",
    "Invite collaborators.",
    "Add the first next actions.",
    "Connect MCP or CLI.",
    "Move.",
  ];

  return (
    <section id="fast-kickoff" className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal">
          Start moving before the process takes over.
        </h2>

        <p className="mt-8 text-lg text-warm-gray leading-relaxed">
          A small team should not need to spin up Jira, Linear, workflows, statuses,
          and ceremony just to begin.
        </p>

        <ol className="mt-8 space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/10 text-xs font-bold text-amber">
                {i + 1}
              </span>
              <span className="text-lg text-charcoal">{step}</span>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-lg text-charcoal leading-relaxed">
          Now everyone sees the same context, the same next steps,
          the same motion in real time.
        </p>

        <p className="mt-6 text-xl font-heading font-bold text-amber">
          Kickoff without overhead. Motion without sludge.
        </p>
      </div>
    </section>
  );
}
