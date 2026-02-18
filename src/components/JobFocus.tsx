export function JobFocus() {
  return (
    <section id="job-focus" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-amber uppercase tracking-wide">
          Job to be done
        </p>
        <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-charcoal">
          &ldquo;I keep getting pulled away&rdquo;
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-heading font-bold text-xl text-terracotta">
              The problem
            </h3>
            <p className="mt-4 text-lg text-warm-gray leading-relaxed">
              Stimulus overload &mdash; twenty things pulling at you. You start
              something, get interrupted, and never finish.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl text-amber">
              Focus Mode
            </h3>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              Play button on any next action. Full-screen single action.
              Count-up timer. Exit and log. Creates a &lsquo;work tunnel&rsquo;
              that blocks everything else out.
            </p>
            <blockquote className="mt-8 border-l-4 border-amber pl-6 text-xl font-heading font-bold text-charcoal italic">
              &ldquo;Once I start, I actually finish.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
