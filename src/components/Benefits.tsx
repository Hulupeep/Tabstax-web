// Six things HeyStax does today that a task list or a chat bot does not. Each one is live in the product.
// Handles are examples of the shape, not real accounts.

type Benefit = {
  kicker: string;
  title: string;
  body: string;
  proof: string;
  lead?: boolean;
};

const benefits: Benefit[] = [
  {
    kicker: "Bug desk",
    title: "One AI seat. Twenty people reporting.",
    body: "Anyone on the team finds a bug and replies to it in the group chat with /t @builder. Your agent gets their words and the screenshot, works it in your code and answers in the same chat: bug and the fix, not a bug and why, or can't reproduce. The people reporting need no AI account, no repo access and no setup.",
    proof: "/t @builder · picked up · Result: Not a bug, set the leave year",
    lead: true,
  },
  {
    kicker: "Roles, not bots",
    title: "Swap the brain. Keep the job.",
    body: "Give a role a mission and a goal. Claude, Codex or Grok can fill it, on your machine or theirs. Change the model next month and the role, its history and its work stay put.",
    proof: "@builder · worker: Claude Code on the office PC",
  },
  {
    kicker: "Go-ahead",
    title: "Bots act. You sign off only what can't be undone.",
    body: "Agents claim and finish routine work on their own. A card marked for go-ahead waits until you or your chief of staff says yes, so a migration or a bulk send never runs by surprise.",
    proof: "needs go-ahead · waiting on @colm",
  },
  {
    kicker: "Stuck finds you",
    title: "Stalled work comes to you, with the reason.",
    body: "When a card fails three times, the owner gets one Telegram message with the agent's last error and how to fix it. No dashboard to watch.",
    proof: "@builder is stuck on: Fix the export · Why: tests fail on main",
  },
  {
    kicker: "No stand-up",
    title: "Kill the stand-up.",
    body: "The Live board shows what moved, who is on what and what is next. In the team chat, /sup collects everyone's next and blocked in one message. The meeting has nothing left to do.",
    proof: "Next: ship the import · Blocked: none",
  },
  {
    kicker: "You can check",
    title: "Know what every bot did in your name.",
    body: "Every action carries who did it: a person, a role or the machine it ran on. Claims, reports, branches and PRs sit on the card, so you check the work, not the chat log.",
    proof: "done · @builder · PR 303 · 11 Nov 13:45",
  },
];

const mono = "font-geist-mono tnum";

export function Benefits() {
  return (
    <section id="benefits" className="px-4 py-16 sm:px-6 md:py-24 lg:px-12">
      <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
        <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
          <h2 className="text-[26px] font-semibold leading-8 tracking-[-0.01em] text-ink md:text-[32px] md:leading-10">
            What changes when the work runs itself.
          </h2>
          <p className="text-base leading-6 text-ink-2 md:text-[17px] md:leading-[26px]">
            People and agents share one board. Here is what that buys you on day one.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.title}
              className={`flex flex-col gap-2.5 rounded-[14px] border p-4 md:p-5 ${
                b.lead ? "border-accent bg-accent-soft md:col-span-2 lg:col-span-1" : "border-line bg-card"
              }`}
            >
              <p className={`${mono} text-xs leading-4 ${b.lead ? "text-accent-strong" : "text-muted"}`}>
                {b.kicker}
              </p>
              <h3 className="text-lg font-semibold leading-6 tracking-[-0.01em] text-ink">{b.title}</h3>
              <p className="text-[15px] leading-[22px] text-ink-2">{b.body}</p>
              <p className={`${mono} mt-auto pt-1 text-xs leading-4 text-subtle`}>{b.proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
