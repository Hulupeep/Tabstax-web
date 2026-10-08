"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Section 01 on the homepage. A prompt goes in on the left; on the right the
// stax, the three onboarding emails, and the next-action list fill in, then
// the team starts adding and finishing work. Plays once when scrolled into
// view, replays on request, and jumps to the end state when the viewer
// prefers reduced motion.

const PROMPT =
  "Spin up a stax for the lifesaving course. Goal: run the course for 12 trainees by 30 Nov. Team: Mary, Bob and Joe, invite them by email. Give each a first next action.";

const TYPE_MS = 22;

// Milestones in ms from the start of a run. The scene state is the index of
// the last milestone reached.
const MILESTONES = [
  0, // 0  typing begins
  PROMPT.length * TYPE_MS + 300, // 1  sent, thinking
  PROMPT.length * TYPE_MS + 1100, // 2  reply
  PROMPT.length * TYPE_MS + 1400, // 3  stax card
  PROMPT.length * TYPE_MS + 2200, // 4  email to Mary
  PROMPT.length * TYPE_MS + 2600, // 5  email to Bob
  PROMPT.length * TYPE_MS + 3000, // 6  email to Joe
  PROMPT.length * TYPE_MS + 3800, // 7  seeded next actions
  PROMPT.length * TYPE_MS + 5000, // 8  Mary adds one
  PROMPT.length * TYPE_MS + 5500, // 9  Bob adds one
  PROMPT.length * TYPE_MS + 6000, // 10 Joe adds one
  PROMPT.length * TYPE_MS + 7000, // 11 Bob working, Mary done
  PROMPT.length * TYPE_MS + 7900, // 12 Mary working, Joe done
  PROMPT.length * TYPE_MS + 8800, // 13 Joe working, Bob done
  PROMPT.length * TYPE_MS + 9600, // 14 goal on track, replay
];

const END = MILESTONES.length - 1;

const team = [
  { name: "Mary", initials: "MK", handle: "@mary", first: "Book the pool for the six Saturdays" },
  { name: "Bob", initials: "BO", handle: "@bob", first: "Send the kit list to the trainees" },
  { name: "Joe", initials: "JD", handle: "@joe", first: "Confirm the examiner for the last day" },
];

type Row = {
  text: string;
  handle: string;
  appearsAt: number;
  addedBy?: string;
  workingAt?: number;
  doneAt?: number;
  doneStamp?: string;
};

const rows: Row[] = [
  { text: team[0].first, handle: "@mary", appearsAt: 7, doneAt: 11, doneStamp: "done · @mary · 14:36" },
  { text: team[1].first, handle: "@bob", appearsAt: 7, workingAt: 11, doneAt: 13, doneStamp: "done · @bob · 15:02" },
  { text: team[2].first, handle: "@joe", appearsAt: 7, doneAt: 12, doneStamp: "done · @joe · 14:51" },
  { text: "Confirm lifeguard cover for each session", handle: "@mary", appearsAt: 8, addedBy: "added · @mary", workingAt: 12 },
  { text: "Order whistles and tow floats", handle: "@bob", appearsAt: 9, addedBy: "added · @bob" },
  { text: "Draft the assessment sheet", handle: "@joe", appearsAt: 10, addedBy: "added · @joe", workingAt: 13 },
];

const mono = "font-geist-mono tnum";

function reveal(on: boolean, extra = "") {
  return `transition-all duration-500 ease-out ${
    on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
  } ${extra}`;
}

function Tick() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function KickoffScene() {
  const [stage, setStage] = useState(0);
  const [typed, setTyped] = useState(0);
  const [running, setRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const clear = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    clear();
    setTyped(PROMPT.length);
    setStage(END);
    setRunning(false);
    setHasRun(true);
  }, [clear]);

  const play = useCallback(() => {
    clear();
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finish();
      return;
    }
    setRunning(true);
    setHasRun(true);
    setTyped(0);
    setStage(0);
    for (let i = 1; i <= PROMPT.length; i += 1) {
      timers.current.push(window.setTimeout(() => setTyped(i), i * TYPE_MS));
    }
    MILESTONES.forEach((at, index) => {
      if (index === 0) return;
      timers.current.push(
        window.setTimeout(() => {
          setStage(index);
          if (index === END) setRunning(false);
        }, at)
      );
    });
  }, [clear, finish]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || hasRun) return;
    if (typeof IntersectionObserver === "undefined") {
      finish();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          play();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [finish, hasRun, play]);

  useEffect(() => clear, [clear]);

  const sent = stage >= 1;
  const replied = stage >= 2;
  const doneCount = rows.filter((row) => row.doneAt !== undefined && stage >= row.doneAt).length;
  const movingCount = rows.filter(
    (row) =>
      row.workingAt !== undefined &&
      stage >= row.workingAt &&
      !(row.doneAt !== undefined && stage >= row.doneAt)
  ).length;
  const openCount = rows.filter((row) => stage >= row.appearsAt).length;

  return (
    <div ref={rootRef} className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
      {/* The prompt */}
      <div className="flex flex-col gap-3 rounded-[14px] border border-line bg-card p-4 md:w-[400px] md:flex-none md:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-semibold leading-[18px]">In Claude</span>
          <span className={`${mono} text-xs leading-4 text-muted`}>HeyStax connected</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="self-end rounded-[12px] rounded-br-[4px] bg-accent-soft px-3.5 py-2.5 text-[15px] leading-[22px] text-ink md:max-w-[92%]">
            <span aria-live="off">{PROMPT.slice(0, typed)}</span>
            {!sent && running ? (
              <span aria-hidden="true" className="ml-0.5 inline-block h-[18px] w-[2px] translate-y-[3px] bg-accent" />
            ) : null}
            <span className="sr-only">{PROMPT}</span>
          </div>
          <div className={reveal(sent && !replied, "self-start px-1")} aria-hidden={!(sent && !replied)}>
            <span className={`${mono} text-xs leading-4 text-muted`}>working</span>
          </div>
          <div
            className={reveal(
              replied,
              "self-start rounded-[12px] rounded-bl-[4px] border border-line bg-sunken px-3.5 py-2.5 text-[15px] leading-[22px] text-ink-2 md:max-w-[92%]"
            )}
            aria-hidden={!replied}
          >
            Done. Stax <strong className="font-semibold text-ink">Lifesaving course</strong> is up with the goal
            and the 30 Nov date. Mary, Bob and Joe have their invites and one next action each.
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-divider pt-3">
          <span className="text-xs leading-4 text-muted">Or say it in the app, or in ChatGPT.</span>
          <button
            type="button"
            onClick={play}
            disabled={running}
            className={`inline-flex h-9 items-center gap-1.5 rounded-[10px] border border-line-control bg-card px-3 text-[13px] font-medium text-ink transition-opacity duration-300 hover:bg-sunken disabled:cursor-default ${
              stage === END ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={stage !== END}
            tabIndex={stage === END ? 0 : -1}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Replay
          </button>
        </div>
      </div>

      {/* What comes out */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {/* The stax */}
        <div className={reveal(stage >= 3, "relative pb-2")} aria-hidden={stage < 3}>
          <div className="relative z-[2] flex flex-col gap-3 rounded-[14px] border border-line bg-card p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="text-lg font-semibold tracking-[-0.01em]">Lifesaving course</div>
              <span
                className={`inline-flex h-[22px] items-center whitespace-nowrap rounded-full px-2 text-xs font-semibold transition-colors duration-500 ${
                  stage >= END ? "bg-success-soft text-success-ink" : "bg-neutral-soft text-ink-3"
                }`}
              >
                {stage >= END ? "on track" : "new"}
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-[10px] border border-line p-3">
              <span
                aria-hidden="true"
                className={`block h-3 w-3 flex-none rotate-45 rounded-[3px] transition-colors duration-500 ${
                  stage >= END ? "bg-success" : "bg-accent"
                }`}
              />
              <span className="flex-1 text-[15px] leading-[22px]">Run the course for 12 trainees</span>
              <span className={`${mono} inline-flex h-[22px] items-center whitespace-nowrap rounded-full bg-accent-soft px-2 text-xs font-semibold text-accent-strong`}>
                30 Nov · in 53 days
              </span>
            </div>
            <div className={`${mono} text-[13px] leading-[18px] text-subtle`}>
              1 goal · 3 people · {openCount} next actions · {doneCount} done · {movingCount} moving
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-1 bottom-1 z-[1] h-2 rounded-b-[14px] border border-t-0 border-line bg-card"
          />
        </div>

        {/* The emails */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {team.map((person, i) => {
            const on = stage >= 4 + i;
            return (
              <div
                key={person.name}
                className={reveal(on, "flex flex-col gap-1.5 rounded-[10px] border border-line bg-card p-3")}
                aria-hidden={!on}
              >
                <div className="flex items-center gap-2 text-xs leading-4 text-muted">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                  <span>To {person.name}</span>
                </div>
                <div className="text-[13px] font-semibold leading-[18px]">You are on Lifesaving course</div>
                <div className="text-xs leading-4 text-ink-2">First next action: {person.first}</div>
              </div>
            );
          })}
        </div>

        {/* The list filling up */}
        <div className={reveal(stage >= 7, "flex flex-col rounded-[14px] border border-line bg-card px-4 pb-2 pt-3")} aria-hidden={stage < 7}>
          <div className="border-b border-divider pb-2 text-xs leading-4 text-muted">Next actions</div>
          {rows.map((row, i) => {
            const on = stage >= row.appearsAt;
            const working = row.workingAt !== undefined && stage >= row.workingAt;
            const done = row.doneAt !== undefined && stage >= row.doneAt;
            return (
              <div
                key={row.text}
                className={`flex items-start gap-3 py-2.5 ${i < rows.length - 1 ? "border-b border-divider" : ""} ${
                  on ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
                aria-hidden={!on}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[5px] border-[1.5px] transition-colors duration-300 ${
                    done ? "border-accent bg-accent text-white" : "border-line-control bg-card"
                  }`}
                >
                  {done ? <Tick /> : null}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span
                    className={`text-[15px] leading-[22px] transition-colors duration-300 ${
                      done ? "text-subtle line-through" : "text-ink"
                    }`}
                  >
                    {row.text}
                  </span>
                  <span className={`${mono} text-xs leading-4 ${done ? "text-subtle" : "text-muted"}`}>
                    {done ? row.doneStamp : row.addedBy ?? `from the kickoff · ${row.handle}`}
                  </span>
                </div>
                <span className="flex flex-none items-center gap-2">
                  {working && !done ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-accent" />
                      <span className={`${mono} text-xs leading-4 text-ink-3`}>now</span>
                    </span>
                  ) : null}
                  <span className={`${mono} text-[13px] leading-[18px] text-ink-3`}>{row.handle}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
