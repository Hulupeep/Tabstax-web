export function PainStrip() {
  return (
    <section id="pain-strip" className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal">
          Work doesn&rsquo;t break because you forgot.
          <br />
          It breaks because re-entry is expensive.
        </h2>

        <p className="mt-8 text-lg text-warm-gray leading-relaxed">
          Every time you return to a project, you pay a hidden tax:
        </p>

        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
            <span className="text-lg text-charcoal">Reopen the tabs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
            <span className="text-lg text-charcoal">Recover the context</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block w-2 h-2 rounded-full bg-amber shrink-0" />
            <span className="text-lg text-charcoal">Decide what to do first</span>
          </li>
        </ul>

        <p className="mt-10 text-xl font-heading font-bold text-amber">
          HeyStax removes all three.
        </p>
      </div>
    </section>
  );
}
