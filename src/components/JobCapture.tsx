export function JobCapture() {
  const surfaces = [
    {
      name: "Extension",
      href: "https://chromewebstore.google.com/detail/mjplcglfdelgdcoalbgechkeophncjmf",
    },
    {
      name: "Web App",
      href: "https://dash.tabstax.app",
    },
    {
      name: "CLI",
      href: "https://www.npmjs.com/package/tabstax-cli",
    },
    {
      name: "MCP",
      href: "https://hulupeep.github.io/TabStax-Help/topics/mcp-section",
    },
  ];

  return (
    <section id="job-capture" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-amber uppercase tracking-wide">
          Job to be done
        </p>
        <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-charcoal">
          &ldquo;I didn&rsquo;t log it because it was inconvenient&rdquo;
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-heading font-bold text-xl text-terracotta">
              The problem
            </h3>
            <p className="mt-4 text-lg text-warm-gray leading-relaxed">
              If capture is hard, memory leaks. Every tool that makes you switch
              context to log a thought is a tool you won&rsquo;t use.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl text-amber">
              Surface ubiquity
            </h3>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              TabStax follows you, not the other way around.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {surfaces.map((surface) => (
                <a
                  key={surface.name}
                  href={surface.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cream border border-amber/20 rounded-xl p-5 text-center shadow-sm hover:border-amber/50 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-charcoal">{surface.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
