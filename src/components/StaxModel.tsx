export function StaxModel() {
  const parts = [
    {
      label: "Tabs",
      description: "The environment &mdash; the exact links and tools for this project.",
      accent: "border-amber",
    },
    {
      label: "Next Actions",
      description: "The next concrete step &mdash; so you never stare wondering where to start.",
      accent: "border-terracotta",
    },
    {
      label: "Plan / Start Here",
      description: "The brief, context, or notes that tell you what this workspace is for.",
      accent: "border-pink-glow",
    },
  ];

  return (
    <section id="stax-model" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal text-center">
          A Stax is a live workspace, not a folder.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {parts.map((part) => (
            <div
              key={part.label}
              className={`bg-cream-dark rounded-2xl p-8 border-l-4 ${part.accent} shadow-sm`}
            >
              <h3 className="font-heading font-bold text-xl text-charcoal">
                {part.label}
              </h3>
              <p
                className="mt-3 text-warm-gray leading-relaxed"
                dangerouslySetInnerHTML={{ __html: part.description }}
              />
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-charcoal font-heading font-bold">
          One click back into the same mental room.
        </p>
      </div>
    </section>
  );
}
