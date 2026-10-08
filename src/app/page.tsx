import { DASH_ONBOARDING_URL } from "@/lib/routes";
import { VideoSection } from "@/components/VideoSection";
import { KickoffScene } from "@/components/KickoffScene";

// Example data for the product illustrations. Names are placeholders, not people.


type GoalState = "open" | "done" | "late";

type LiveRow = {
  stax: string;
  goal: string;
  goalState: GoalState;
  next: string;
  now: { handle: string; elapsed: string } | null;
  doneToday: number;
};

const liveRows: LiveRow[] = [
  {
    stax: "HeyStax",
    goal: "New homepage live",
    goalState: "open",
    next: "Publish the hero",
    now: { handle: "@colm", elapsed: "41 min" },
    doneToday: 3,
  },
  {
    stax: "TimeBreeze",
    goal: "Pilot site on the roster",
    goalState: "open",
    next: "Confirm the shift import",
    now: { handle: "@priya", elapsed: "12 min" },
    doneToday: 1,
  },
  {
    stax: "Hubduck",
    goal: "Three schools onboarded",
    goalState: "late",
    next: "Call St Brigid's back",
    now: null,
    doneToday: 0,
  },
  {
    stax: "Cave Airbnb",
    goal: "October fully booked",
    goalState: "done",
    next: "Reply to the Saturday guest",
    now: { handle: "@ana", elapsed: "5 min" },
    doneToday: 2,
  },
  {
    stax: "Household",
    goal: "Car through the NCT",
    goalState: "open",
    next: "Book the test",
    now: null,
    doneToday: 0,
  },
  {
    stax: "Obrayo",
    goal: "Portugal pilot scoped",
    goalState: "open",
    next: "Confirm scope with the partner",
    now: { handle: "@liam", elapsed: "1 h 05" },
    doneToday: 1,
  },
];

const goalColor: Record<GoalState, string> = {
  open: "bg-accent",
  done: "bg-success",
  late: "bg-late",
};

const surfaces = [
  {
    name: "Claude",
    body: "Ask about any stax. Add a next action in a sentence.",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    name: "ChatGPT",
    body: "Same stax, same list. Nothing to re-explain.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    name: "Browser",
    body: "TabStax opens the tabs a stax needs and closes the rest.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    name: "Web and phone",
    body: "The Live board, goals, people, dates and records.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
];

const mono = "font-geist-mono tnum";

function Diamond({ state = "open", size = 12 }: { state?: GoalState; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`block flex-none rotate-45 rounded-[3px] ${goalColor[state]}`}
      style={{ width: size, height: size }}
    />
  );
}

function Dot({ size = 12 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="block flex-none rounded-full bg-accent"
      style={{ width: size, height: size }}
    />
  );
}

function RecordSquare() {
  return (
    <span
      aria-hidden="true"
      className="block h-2.5 w-2.5 flex-none rounded-[3px] border-[1.5px] border-ink-3"
    />
  );
}

function Checkbox({ checked = false, accent = false }: { checked?: boolean; accent?: boolean }) {
  if (checked) {
    return (
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[5px] bg-accent text-white"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 block h-[18px] w-[18px] flex-none rounded-[5px] border-[1.5px] bg-card ${
        accent ? "border-accent" : "border-line-control"
      }`}
    />
  );
}

function Chip({
  tone,
  children,
  isMono = false,
}: {
  tone: "success" | "accent" | "neutral" | "late" | "white";
  children: React.ReactNode;
  isMono?: boolean;
}) {
  const tones = {
    success: "bg-success-soft text-success-ink",
    accent: "bg-accent-soft text-accent-strong",
    neutral: "bg-neutral-soft text-ink-3",
    late: "bg-late-soft text-late-ink",
    white: "bg-card text-accent-strong",
  };
  return (
    <span
      className={`inline-flex h-[22px] items-center whitespace-nowrap rounded-full px-2 text-xs font-semibold ${tones[tone]} ${
        isMono ? mono : ""
      }`}
    >
      {children}
    </span>
  );
}

function Proof({ children }: { children: React.ReactNode }) {
  return <span className={`${mono} text-xs leading-4 text-subtle`}>{children}</span>;
}

function StartEmpty() {
  return (
    <span className="inline-flex h-7 items-center rounded-lg border border-dashed border-line-empty bg-sunken px-2.5 text-[13px] italic leading-[18px] text-muted">
      + Start
    </span>
  );
}

function SectionIntro({
  number,
  title,
  body,
}: {
  number?: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
      {number ? <p className={`${mono} text-[13px] leading-[18px] text-muted`}>{number}</p> : null}
      <h2 className="text-[26px] font-semibold leading-8 tracking-[-0.01em] text-ink md:text-[32px] md:leading-10">
        {title}
      </h2>
      <p className="text-base leading-6 text-ink-2 md:text-[17px] md:leading-[26px]">{body}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="hs bg-page text-ink">
      {/* Hero, with the video as its visual */}
      <section id="hero" className="px-4 pb-14 pt-12 sm:px-6 md:pb-24 md:pt-[72px] lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-7">
          <p className="text-[15px] leading-[22px] text-muted md:text-[17px] md:leading-[26px]">
            For people who run on momentum and lose it on every switch.
          </p>
          <h1 className="max-w-[980px] text-[34px] font-semibold leading-10 tracking-[-0.02em] text-ink md:text-[58px] md:leading-[1.12]">
            <span className="block">Kick off with a team in a minute.</span>
            <span className="block">Run a dozen projects.</span>
            <span className="block">Pick up where you or they left off.</span>
          </h1>
          <div className="mobile-full-cta flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href={DASH_ONBOARDING_URL}
              className="mobile-full-cta inline-flex h-12 items-center justify-center rounded-[10px] bg-ink px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-ink-2 md:h-11"
            >
              Start now
            </a>
            <a
              href="#video"
              className="mobile-full-cta inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-line-control bg-card px-4.5 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-sunken md:h-11"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
              Watch the video
            </a>
          </div>
          <p className="text-[13px] leading-[18px] text-muted">
            Works inside Claude, ChatGPT, your terminal and your browser. Same stax everywhere.
          </p>

          <VideoSection />
        </div>
      </section>

      {/* 01 Kick off */}
      <section id="product" className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
          <SectionIntro
            number="01"
            title="Kick off with a team in a minute."
            body="Say the goal, the date and who is in. HeyStax makes the stax, emails each person their first next action, and from there the list fills itself: people add what they see, tick off what they finish, and the goal moves."
          />
          <KickoffScene />
        </div>
      </section>

      {/* 02 Run a dozen: the Live board */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
          <SectionIntro
            number="02"
            title="Run a dozen projects."
            body="Every project shows its goal, the next action under it, and what is being worked on right now, by whom. See what is moving without asking anyone."
          />

          {/* Desktop: the board as a table */}
          <div className="hidden overflow-hidden rounded-[14px] border border-line bg-card md:block">
            <div className="flex items-center justify-between gap-2 border-b border-line px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <Dot />
                <span className="text-[15px] font-semibold leading-[22px]">Live</span>
              </div>
              <span className={`${mono} text-[13px] leading-[18px] text-muted`}>
                Thu 8 Oct · 14:32 · 6 stax · 3 moving
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse">
                <thead>
                  <tr className="border-b border-divider text-left text-xs leading-4 text-muted">
                    <th className="px-5 py-2.5 font-normal">Stax</th>
                    <th className="py-2.5 pr-4 font-normal">Goal</th>
                    <th className="py-2.5 pr-4 font-normal">Next</th>
                    <th className="py-2.5 pr-4 font-normal">Now</th>
                    <th className="px-5 py-2.5 text-right font-normal">Done today</th>
                  </tr>
                </thead>
                <tbody>
                  {liveRows.map((row, i) => (
                    <tr
                      key={row.stax}
                      className={i < liveRows.length - 1 ? "border-b border-divider" : ""}
                    >
                      <td className="px-5 py-3.5 text-[15px] font-semibold leading-[22px]">
                        {row.stax}
                      </td>
                      <td className="py-3.5 pr-4">
                        <div className="flex items-center gap-2.5">
                          <Diamond state={row.goalState} />
                          <span className="text-sm leading-[21px]">{row.goal}</span>
                        </div>
                      </td>
                      <td className="py-3.5 pr-4 text-sm leading-[21px]">{row.next}</td>
                      <td className="py-3.5 pr-4">
                        {row.now ? (
                          <div className="flex items-center gap-2.5">
                            <Dot />
                            <span className={`${mono} text-[13px] leading-[18px] text-ink-3`}>
                              {row.now.handle} · {row.now.elapsed}
                            </span>
                          </div>
                        ) : (
                          <StartEmpty />
                        )}
                      </td>
                      <td
                        className={`${mono} px-5 py-3.5 text-right text-[13px] leading-[18px] ${
                          row.doneToday === 0 ? "text-subtle" : ""
                        }`}
                      >
                        {row.doneToday}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center gap-5 border-t border-line bg-sunken px-5 py-3 text-xs leading-4 text-muted">
              <span className="inline-flex items-center gap-2">
                <Diamond size={10} /> Goal
              </span>
              <span className="inline-flex items-center gap-2">
                <Diamond state="done" size={10} /> Goal done
              </span>
              <span className="inline-flex items-center gap-2">
                <Diamond state="late" size={10} /> Goal late
              </span>
              <span className="inline-flex items-center gap-2">
                <Dot size={10} /> Working now
              </span>
            </div>
          </div>

          {/* Phone: one card per stax */}
          <div className="flex flex-col gap-2.5 md:hidden">
            <div className="flex items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-2.5">
                <Dot />
                <span className="text-[15px] font-semibold leading-[22px]">Live</span>
              </div>
              <span className={`${mono} text-xs leading-4 text-muted`}>
                Thu 8 Oct · 14:32 · 3 moving
              </span>
            </div>
            {liveRows.map((row) => (
              <div
                key={row.stax}
                className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-card px-4 py-3.5"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-base font-semibold leading-[22px]">{row.stax}</span>
                  <span
                    className={`${mono} text-xs leading-4 ${
                      row.doneToday === 0 ? "text-subtle" : "text-muted"
                    }`}
                  >
                    {row.doneToday} done today
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Diamond state={row.goalState} />
                  <span className="text-sm leading-[21px]">{row.goal}</span>
                  {row.goalState === "late" ? (
                    <span className="ml-auto">
                      <Chip tone="late">late</Chip>
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-3 flex-none text-center text-xs leading-4 text-muted">›</span>
                  <span className="text-sm leading-[21px] text-ink-2">{row.next}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {row.now ? (
                    <>
                      <Dot />
                      <span className={`${mono} text-[13px] leading-[18px] text-ink-3`}>
                        {row.now.handle} · {row.now.elapsed}
                      </span>
                    </>
                  ) : (
                    <StartEmpty />
                  )}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-1 pt-1 text-xs leading-4 text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Diamond size={10} /> Goal
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-xs">›</span> Next
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Dot size={10} /> Working now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Pick up */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:flex-row-reverse md:items-center md:gap-14">
          <div className="md:flex-1 md:basis-80">
            <SectionIntro
              number="03"
              title="Pick up where you or they left off."
              body="Come back after a week away. The stax shows what got done, who did it, and what is next. No reconstruction. No catch-up call."
            />
          </div>
          <div className="md:flex-1 md:basis-[440px]">
            <div className="flex flex-col gap-4 rounded-[14px] border border-line bg-card p-4 md:p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                <div className="text-lg font-semibold tracking-[-0.01em] md:text-xl">
                  Cave Airbnb
                </div>
                <span className={`${mono} text-xs leading-4 text-muted md:text-[13px] md:leading-[18px]`}>
                  you were last here 6 days ago
                </span>
              </div>
              <div className="text-sm leading-[21px] text-ink-2">
                Since then: 2 done, 1 new, 1 due soon.
              </div>
              <div className="flex flex-col">
                <div className="flex items-start gap-3 border-b border-divider py-3">
                  <Checkbox checked />
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-[15px] leading-[22px] text-subtle line-through">
                      Reply to the solicitor about the boundary
                    </span>
                    <Proof>done · @ana · 2 Oct 09:14</Proof>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-divider py-3">
                  <Checkbox checked />
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-[15px] leading-[22px] text-subtle line-through">
                      Update the October listing photos
                    </span>
                    <Proof>done · @colm · 3 Oct 16:40</Proof>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-divider py-3">
                  <Checkbox />
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-[15px] leading-[22px]">
                      Answer the guest asking about a cot
                    </span>
                    <Proof>added · @ana · 6 Oct 18:02</Proof>
                  </div>
                  <Chip tone="neutral">new</Chip>
                </div>
                <div className="mt-2 flex items-start gap-3 rounded-[10px] bg-accent-soft p-3">
                  <Checkbox accent />
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-[15px] font-semibold leading-[22px] text-accent-strong">
                      Confirm the Saturday check-in time
                    </span>
                    <span className={`${mono} text-xs leading-4 text-accent-strong`}>
                      next · yours
                    </span>
                  </div>
                  <Chip tone="white" isMono>
                    in 2 days
                  </Chip>
                </div>
              </div>
              <div className="flex sm:justify-end">
                <a
                  href="https://dash.heystax.ai/attention"
                  className="inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-ink px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ink-2 sm:h-10 sm:w-auto"
                >
                  Pick up here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money */}
      <section className="border-y border-line bg-card px-4 py-14 sm:px-6 md:py-20 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
          <SectionIntro
            title="Invoices come from the work, not from memory."
            body="Every finished next action is a record: who did it, when, and the hours against it. Timesheets and invoices are built from those records, so nobody rebuilds a week on a Friday afternoon."
          />
          <div className="flex flex-col items-stretch gap-2 md:flex-row md:gap-4">
            <div className="flex flex-1 flex-col gap-2.5 rounded-[14px] border border-line bg-sunken p-4">
              <div className="text-xs leading-4 text-muted">Next action</div>
              <div className="flex items-start gap-2.5">
                <Checkbox checked />
                <span className="text-[15px] leading-[22px]">Confirm the shift import</span>
              </div>
              <Proof>done · @priya · 7 Oct 11:20</Proof>
            </div>
            <FlowArrow />
            <div className="flex flex-1 flex-col gap-2.5 rounded-[14px] border border-line bg-sunken p-4">
              <div className="text-xs leading-4 text-muted">Record</div>
              <div className="flex items-center gap-2.5">
                <RecordSquare />
                <span className="text-[15px] leading-[22px]">Timesheet, week of 5 Oct</span>
              </div>
              <span className={`${mono} text-[13px] leading-[18px] text-ink-3`}>
                6.5 h · @priya · 1 next action
              </span>
            </div>
            <FlowArrow />
            <div className="flex flex-1 flex-col gap-2.5 rounded-[14px] border border-line bg-sunken p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs leading-4 text-muted">Invoice</div>
                <Chip tone="success">approved</Chip>
              </div>
              <span className="text-[15px] leading-[22px]">Invoice 0042 · TimeBreeze</span>
              <span className={`${mono} text-[13px] leading-[18px] text-ink-3`}>
                6.5 h · Confirm the shift import
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="/pricing"
              className="text-[15px] font-medium leading-[22px] text-accent transition-colors duration-150 hover:text-accent-strong"
            >
              See pricing
            </a>
            <span className="text-[13px] leading-[18px] text-muted">
              Timesheets and invoices are on the paid plan.
            </span>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
          <SectionIntro
            title="Same stax, every surface."
            body="Start in Claude. Finish in ChatGPT. Tick it off from the terminal. The stax is one record, so every surface shows the same next action."
          />
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
            <pre
              className={`${mono} flex-1 overflow-x-auto rounded-[14px] bg-ink p-4 text-xs leading-5 text-white md:p-5 md:text-[13px] md:leading-[22px]`}
            >
              <span className="mb-3 block font-geist text-xs leading-4 text-accent-track">
                Terminal
              </span>
              <code>{`$ hey "kit list for @bob on Lifesaving course"
$ hey ls
  1  Book the pool for the six Saturdays   @mary
  2  Send the kit list to the trainees     @bob
  3  Confirm the examiner                   @joe
$ hey done 2
  done · @bob · 8 Oct 14:36`}</code>
            </pre>
            <div className="grid flex-1 grid-cols-2 gap-2.5 md:gap-4">
              {surfaces.map((surface) => (
                <div
                  key={surface.name}
                  className="flex flex-col gap-2 rounded-[14px] border border-line bg-card p-3.5 md:p-4"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="text-ink-3"
                  >
                    {surface.icon}
                  </svg>
                  <div className="text-[15px] font-semibold leading-[22px]">{surface.name}</div>
                  <div className="text-[13px] leading-[18px] text-muted">{surface.body}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13px] leading-[18px] text-muted">
            Works with any client that speaks MCP.
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-4 rounded-[14px] border border-line bg-card p-5 md:flex-row md:items-center md:justify-between md:gap-6 md:p-12">
          <div className="flex max-w-[560px] flex-col gap-2.5">
            <h2 className="text-2xl font-semibold leading-[30px] tracking-[-0.01em] text-ink md:text-[28px] md:leading-9">
              Start with the work.
            </h2>
            <p className="text-base leading-6 text-ink-2">
              Bring one project, one goal, and the people around it. Everyone has a next action
              before you close the tab.
            </p>
          </div>
          <div className="mobile-full-cta flex sm:w-auto">
            <a
              href={DASH_ONBOARDING_URL}
              className="mobile-full-cta inline-flex h-12 items-center justify-center rounded-[10px] bg-ink px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-ink-2 md:h-11"
            >
              Start now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex flex-none items-center justify-center text-ink-3 md:px-1" aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-90 md:rotate-0"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  );
}
