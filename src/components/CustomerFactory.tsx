// The customer factory: what the HeyStax structure produces.
// Proof numbers are copied from launch review (dash.heystax.ai/launches) for one
// product, Hubduck, on the date shown. Update the numbers and the date together.

const steps = [
  {
    n: "01",
    title: "Find the angle",
    body: "A rule changes in Alaska. A fire season starts in Victoria. That is a reason for someone to care tonight.",
  },
  {
    n: "02",
    title: "Build what it needs",
    body: "A page, a small feature, a list of the people it is for.",
  },
  {
    n: "03",
    title: "Write and follow up",
    body: "First email, then the follow-up. Replies come back to the stax, not to a pile in your inbox.",
  },
  {
    n: "04",
    title: "You check the first few",
    body: "Approve the first sends of a new launch. Then let it run, with send caps and a stop rule.",
  },
];

const proofAsOf = "25 Nov 2026";
const proof = [
  { value: "20", label: "angles opened" },
  { value: "7", label: "launches sent" },
  { value: "208", label: "emails out" },
  { value: "5", label: "replies, 4 of them not now" },
  { value: "0", label: "paid, so far" },
];

const mono = "font-geist-mono tnum";

export function CustomerFactory() {
  return (
    <>
      <section id="factory" className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
          <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
            <h2 className="text-[26px] font-semibold leading-8 tracking-[-0.01em] text-ink md:text-[32px] md:leading-10">
              One twist a night.
            </h2>
            <p className="text-base leading-6 text-ink-2 md:text-[17px] md:leading-[26px]">
              Every product has more faces than you have tried. A new rule. A new buyer. A gap
              nobody sold into. Each night the roles make one twist, look at what came back, and
              twist again. Sooner or later a row lines up.
            </p>
          </div>
          <ol className="grid gap-2.5 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.n}
                className="flex flex-col gap-2 rounded-[14px] border border-line bg-card p-4 md:p-5"
              >
                <span className={`${mono} text-[13px] leading-[18px] text-muted`}>{step.n}</span>
                <span className="text-[17px] font-semibold leading-6 text-ink">{step.title}</span>
                <span className="text-sm leading-[21px] text-ink-2">{step.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="proof"
        className="border-y border-line bg-card px-4 py-14 sm:px-6 md:py-20 lg:px-12"
      >
        <div className="mx-auto flex max-w-[1040px] flex-col gap-6 md:gap-8">
          <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
            <h2 className="text-[26px] font-semibold leading-8 tracking-[-0.01em] text-ink md:text-[32px] md:leading-10">
              What it has won so far is hope.
            </h2>
            <p className="text-base leading-6 text-ink-2 md:text-[17px] md:leading-[26px]">
              We run the factory on our own product first. Hubduck, staff policy sign-off for
              schools, camps and crews. These are the real numbers from launch review.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {proof.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-[14px] border border-line bg-sunken p-4"
              >
                <dd className={`${mono} text-[28px] font-semibold leading-9 text-ink`}>
                  {item.value}
                </dd>
                <dt className="order-last text-[13px] leading-[18px] text-muted">{item.label}</dt>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-1">
            <p className="text-base leading-6 text-ink">Closing is still hard. That is next.</p>
            <p className={`${mono} text-xs leading-4 text-subtle`}>
              Hubduck launch review · as of {proofAsOf}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
