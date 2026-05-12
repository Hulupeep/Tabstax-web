import { DASH_ONBOARDING_URL } from "@/lib/routes";

export default function PricingPage() {
  return (
    <section className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-5xl font-black leading-tight text-charcoal md:text-6xl">
          Pricing is moving into the starting flow.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-gray">
          Start with the work. Choose the right shape when HeyStax knows what you
          are setting up.
        </p>
        <a
          href={DASH_ONBOARDING_URL}
          className="mobile-full-cta mt-10 inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-terracotta"
        >
          Start Now
        </a>
      </div>
    </section>
  );
}
