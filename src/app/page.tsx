import { DASH_ONBOARDING_URL } from "@/lib/routes";

const doneRows = [
  {
    project: "Cave Airbnb",
    action: "@scribe drafted reply to solicitor",
    time: "9:14am",
  },
  {
    project: "Claim Alert",
    action: "@notify sent Sprint 7 update to John",
    time: "9:42am",
  },
];

const nextRows = [
  {
    priority: "Must",
    project: "HeyStax",
    action: "Lock SKU naming decision",
  },
  {
    priority: "Must",
    project: "Cave Airbnb",
    action: "Approve scribe's draft to solicitor",
    tag: "Yours",
  },
  {
    priority: "Must",
    project: "Obrayo",
    action: "Confirm Portugal pilot scope",
  },
  {
    priority: "Should",
    project: "Household",
    action: "Renew NCT for the Volvo",
  },
  {
    priority: "Should",
    project: "HeyStax",
    action: "Rewrite homepage hero copy",
  },
];

const capabilityCards = [
  {
    number: "01",
    title: "Typed work graph",
    body: "Every project is a Stax with goals, dates, people, and next actions. Humans and agents share the same data model.",
  },
  {
    number: "02",
    title: "Cross-surface motion",
    body: "Used inside Claude, your terminal, your browser, and the web. One graph, every surface.",
  },
  {
    number: "03",
    title: "Agents as peers",
    body: "@handle works the same for a person or an agent. Same audit log, same assignment, same room.",
  },
];

function PriorityPill({ priority }: { priority: string }) {
  const className =
    priority === "Must"
      ? "bg-red-100 text-red-800"
      : "bg-amber-light text-amber";

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}>
      {priority}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-cream py-24 md:py-32"
      >
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.13),transparent_66%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-warm-gray">
            For you, your team, and your agents.
          </p>
          <h1 className="mt-6 font-heading text-5xl font-black leading-tight text-charcoal md:text-7xl">
            Hire agents that already know your job.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-warm-gray md:text-xl">
            Multiple projects, work and home. Your AI remembers none of them.
            HeyStax: All of them.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-warm-gray">
            HeyStax is the knowledge graph you own. Agents are peers coordinating
            your next move with you and your team. They know your projects, your
            goals, your history. They email, follow up, and build. You always know
            the next right thing to do.
          </p>
          <p className="mt-6 text-sm text-warm-gray/70">
            Used inside Claude, your terminal, your browser, and the web.
          </p>
          <a
            href={DASH_ONBOARDING_URL}
            className="mobile-full-cta mt-10 inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-terracotta"
          >
            Start Now
          </a>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-6 text-center text-lg leading-relaxed text-warm-gray">
          <p>
            You have eight projects. You are paying attention to two.
            Reconstructing where the other six are is what status meetings are
            for. You hold them to compensate for not having a system that knows.
          </p>
          <p>
            HeyStax knows. Agents hold the shape of every project and keep it
            moving. You return to the decision. Not the search. Not the meeting.
          </p>
        </div>
      </section>

      <section
        id="product"
        className="bg-cream px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-center text-sm text-warm-gray">
            Done while you slept. Decisions when you arrive.
          </p>
          <div className="rounded-[2rem] border border-charcoal/10 bg-[#fff7df] p-4 shadow-xl shadow-charcoal/5 sm:p-6">
            <div className="rounded-[1.5rem] border border-charcoal/10 bg-cream p-4 sm:p-6">
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-warm-gray">
                Done
              </p>
              <div className="space-y-3">
                {doneRows.map((row) => (
                  <div
                    key={`${row.project}-${row.time}`}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl bg-white/70 px-3 py-3 text-sm"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m5 12 4 4L19 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="mr-2 text-warm-gray">{row.project}</span>
                      <span className="text-warm-gray/70 line-through">
                        {row.action}
                      </span>
                    </span>
                    <span className="text-xs text-warm-gray/70">{row.time}</span>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-charcoal/10" />

              <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-warm-gray">
                Next
              </p>
              <div className="space-y-3">
                {nextRows.map((row) => (
                  <div
                    key={`${row.project}-${row.action}`}
                    className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl bg-white/70 px-3 py-3 text-sm sm:grid-cols-[auto_7rem_1fr_auto]"
                  >
                    <PriorityPill priority={row.priority} />
                    <span className="text-warm-gray sm:order-none">{row.project}</span>
                    <span className="col-span-2 text-charcoal sm:col-span-1">
                      {row.action}
                    </span>
                    {row.tag ? (
                      <span className="justify-self-start rounded-full bg-blue-100 px-2.5 py-1 text-[0.68rem] font-semibold text-blue-800 sm:justify-self-end">
                        {row.tag}
                      </span>
                    ) : (
                      <span className="hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {capabilityCards.map((card) => (
            <article
              key={card.number}
              className="rounded-[1.5rem] border border-charcoal/10 bg-white/55 p-6 shadow-sm"
            >
              <p className="text-sm text-warm-gray">{card.number}</p>
              <h2 className="mt-8 font-heading text-3xl font-bold text-charcoal">
                {card.title}
              </h2>
              <p className="mt-4 leading-relaxed text-warm-gray">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-[#fff8e8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <pre className="overflow-x-auto rounded-[1.5rem] bg-charcoal p-6 text-sm leading-7 text-cream shadow-xl">
            <code>{`hey "draft update to @rob on Claim Alert sprint"
hey ls
hey done 2`}</code>
          </pre>
          <div className="space-y-5 text-lg leading-relaxed text-warm-gray">
            <p>
              Every action is typed and audited. @handle works the same for a
              person or an agent. HookTunnel logs every agent action in both
              directions. The schema: next actions, goals, dates, people,
              records. Structured fields, not memory blobs. Queryable by any
              connected agent.
            </p>
            <p>
              MCP-native. Works with Claude, ChatGPT, Cursor, Codex, and any
              client that speaks MCP.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-heading text-3xl font-bold text-charcoal">
          Start in Claude. Finish in ChatGPT. Same stax. Same information.
        </p>
      </section>

      <section className="border-t border-charcoal/10 bg-cream px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm tracking-[0.22em] text-warm-gray">
          GYST cohort one
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-heading text-5xl font-black leading-tight text-charcoal md:text-6xl">
          Ten operators. By application.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-warm-gray">
          Three months free Pro. Personal onboarding. Real work, in real time.
        </p>
        <a
          href={DASH_ONBOARDING_URL}
          className="mobile-full-cta mt-10 inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-terracotta"
        >
          Apply
        </a>
      </section>
    </>
  );
}
