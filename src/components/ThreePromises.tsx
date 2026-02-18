export function ThreePromises() {
  const promises = [
    {
      title: "Zero Reconstruction Tax",
      description: "Drop and resume work without penalty.",
      accent: "border-amber",
    },
    {
      title: "Instant Re-entry",
      description: "Come back and know exactly what to do.",
      accent: "border-terracotta",
    },
    {
      title: "Calm Control Over Many Projects",
      description: "Nothing slips, you're not overwhelmed.",
      accent: "border-pink-glow",
    },
  ];

  return (
    <section id="three-promises" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className={`bg-cream rounded-2xl p-8 border-l-4 ${promise.accent} shadow-sm`}
            >
              <h3 className="font-heading font-bold text-xl text-charcoal">
                {promise.title}
              </h3>
              <p className="mt-3 text-warm-gray leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
