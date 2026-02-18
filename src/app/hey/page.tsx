import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hey! — TabStax CLI",
  description:
    "Capture next actions from your terminal without breaking flow. hey is the TabStax CLI — one command to keep your projects hot.",
};

export default function HeyPage() {
  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber/10 text-xs font-semibold text-amber uppercase tracking-wide mb-4">
            CLI — Available Now
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-6">
            Hey!
          </h1>
          <p className="font-body text-xl text-warm-gray leading-relaxed">
            You&rsquo;re mid-flow — coding, debugging, talking to Claude — and a
            thought surfaces. <strong className="text-charcoal">Hey!</strong>{" "}
            captures it in one command. No app to open. No context switch. Done.
          </p>
        </div>

        {/* Install */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
            Installation
          </h2>
          <pre className="bg-charcoal text-amber rounded-xl p-6 text-sm font-mono overflow-x-auto">
            <code>npm install -g tabstax-cli</code>
          </pre>
          <p className="mt-4 font-body text-warm-gray">
            Then log in with your TabStax account:
          </p>
          <pre className="mt-3 bg-charcoal text-amber rounded-xl p-6 text-sm font-mono overflow-x-auto">
            <code>hey login</code>
          </pre>
          <p className="mt-4 font-body text-warm-gray text-sm">
            Don&rsquo;t have an account?{" "}
            <a
              href="https://dash.tabstax.app/attention"
              className="text-amber hover:text-terracotta underline underline-offset-2 transition-colors"
            >
              Create one free at TabStax
            </a>{" "}
            — your actions sync instantly between the CLI, the extension, and the
            dashboard.
          </p>
        </div>

        {/* Quick start */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
            Quick Start
          </h2>
          <pre className="bg-charcoal text-amber rounded-xl p-6 text-sm font-mono overflow-x-auto leading-relaxed">
            <code>{`# Set your default project
hey use "My Project"

# Add a next action
hey "Build the login page"

# Add a breadcrumb (something you did)
hey -x "Fixed the auth bug"

# See your actions
hey ls

# Complete an action
hey done 1`}</code>
          </pre>
        </div>

        {/* The pitch */}
        <div className="mb-12 border-l-4 border-amber pl-6 py-2">
          <p className="font-heading text-xl font-bold text-charcoal mb-2">
            You&rsquo;re always somewhere.
          </p>
          <p className="font-body text-warm-gray leading-relaxed">
            Hey! doesn&rsquo;t dump thoughts into a generic inbox. You&rsquo;re
            always <em>in</em> a project. Capture where your head already is —
            and the thought lands in the right place.
          </p>
        </div>

        {/* LLM context */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
            Your AI Gets Your Context
          </h2>
          <p className="font-body text-warm-gray leading-relaxed mb-4">
            When your AI assistant can run Hey! commands, it sees what you see:
          </p>
          <pre className="bg-charcoal text-amber rounded-xl p-6 text-sm font-mono overflow-x-auto leading-relaxed">
            <code>{`You: "What should I focus on today?"

Claude: *runs hey ls stax*

You have two Must-priority projects:
- API Migration (3 pending actions)
- Client Demo (needs prep before Thursday)

Want me to show the actions for API Migration?`}</code>
          </pre>
        </div>

        {/* Command reference */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
            Command Reference
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-3">
                Capture
              </h3>
              <div className="overflow-x-auto rounded-xl border border-charcoal/10">
                <table className="w-full text-sm font-mono">
                  <tbody>
                    {[
                      ['hey "message"', "Add a next action"],
                      ['hey -x "message"', "Add a breadcrumb (past)"],
                      ['hey -p "project" "msg"', "Add to a specific project"],
                    ].map(([cmd, desc]) => (
                      <tr key={cmd} className="border-b border-charcoal/5 last:border-0">
                        <td className="px-4 py-3 text-amber bg-charcoal/5 whitespace-nowrap">
                          {cmd}
                        </td>
                        <td className="px-4 py-3 text-warm-gray font-body">
                          {desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-3">
                View
              </h3>
              <div className="overflow-x-auto rounded-xl border border-charcoal/10">
                <table className="w-full text-sm font-mono">
                  <tbody>
                    {[
                      ["hey ls", "Show actions for current project"],
                      ["hey ls stax", "List all your stax with priorities"],
                      ["hey ls --all", "Expanded view with actions per stax"],
                      ["hey which", "Show current context"],
                    ].map(([cmd, desc]) => (
                      <tr key={cmd} className="border-b border-charcoal/5 last:border-0">
                        <td className="px-4 py-3 text-amber bg-charcoal/5 whitespace-nowrap">
                          {cmd}
                        </td>
                        <td className="px-4 py-3 text-warm-gray font-body">
                          {desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-3">
                Manage
              </h3>
              <div className="overflow-x-auto rounded-xl border border-charcoal/10">
                <table className="w-full text-sm font-mono">
                  <tbody>
                    {[
                      ["hey done", "Complete action #1"],
                      ["hey done 3", "Complete action #3"],
                      ["hey rm 2", "Remove action #2"],
                      ["hey mv 3 1", "Move action #3 to position #1"],
                      ['hey use "project"', "Switch project context"],
                    ].map(([cmd, desc]) => (
                      <tr key={cmd} className="border-b border-charcoal/5 last:border-0">
                        <td className="px-4 py-3 text-amber bg-charcoal/5 whitespace-nowrap">
                          {cmd}
                        </td>
                        <td className="px-4 py-3 text-warm-gray font-body">
                          {desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* npm link */}
        <div className="mb-12 bg-cream-dark rounded-2xl p-8 border border-amber/20">
          <p className="font-body text-warm-gray text-sm mb-2">npm package</p>
          <a
            href="https://www.npmjs.com/package/tabstax-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-amber hover:text-terracotta transition-colors underline underline-offset-2"
          >
            npmjs.com/package/tabstax-cli
          </a>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-charcoal/10">
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
