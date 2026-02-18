import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-8">
          About TabStax
        </h1>

        <div className="font-body text-charcoal space-y-6 text-lg leading-relaxed">
          <p>
            Hi, I&apos;m{" "}
            <span className="font-semibold">Colm Byrne</span> — author of{" "}
            <a
              href="https://mybook.to/superpowered"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-terracotta underline underline-offset-2 transition-colors"
            >
              Superpowered: How Neurodivergents Win in the Age of AI
            </a>
            .
          </p>

          <p>
            I&apos;ve spent years as a product manager with companies from Apple
            to startups, and I kept running into the same problem: the tools we
            use don&apos;t match how our brains actually work. Too many tabs, too
            many contexts, too much reconstruction every time you switch tasks.
          </p>

          <p>
            So I built <span className="font-semibold">TabStax</span> — because
            I needed it. It&apos;s a re-entry engine for fragmented work. Drop a
            project, come back later, and pick up exactly where you left off.
            Zero reconstruction tax.
          </p>

          <div className="border-l-4 border-amber pl-6 py-2 my-8">
            <p className="font-heading text-xl font-bold text-charcoal">
              Built for how brains actually work.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-charcoal pt-4">
            The Company
          </h2>
          <p>
            TabStax is made by{" "}
            <span className="font-semibold">Flout Labs</span>, registered in
            Ireland. We believe productivity tools should adapt to people — not
            the other way around.
          </p>

          <h2 className="font-heading text-2xl font-bold text-charcoal pt-4">
            What&apos;s Next
          </h2>
          <ul className="space-y-3 text-warm-gray">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-amber shrink-0" />
              <span>
                <span className="text-charcoal font-medium">Teams</span> —
                shared stacks for collaborative workflows
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-amber shrink-0" />
              <span>
                <span className="text-charcoal font-medium">
                  Community Stax
                </span>{" "}
                — discover and share curated tab collections
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-amber shrink-0" />
              <span>
                <span className="text-charcoal font-medium">Live Stax</span> —
                real-time synced workspaces
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-amber shrink-0" />
              <span>
                <span className="text-charcoal font-medium">
                  MCP / AI Integration
                </span>{" "}
                — intelligent context management
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10">
          <a
            href="https://dash.tabstax.app/attention"
            className="inline-flex items-center px-8 py-4 rounded-full bg-amber text-white font-semibold text-lg hover:bg-terracotta transition-colors shadow-sm"
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
}
