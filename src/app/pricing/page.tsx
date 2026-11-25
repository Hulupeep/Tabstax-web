import { DASH_BETA_URL } from "@/lib/routes";

export default function PricingPage() {
  return (
    <section className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-5xl font-black leading-tight text-charcoal md:text-6xl">
          $49 a month, per product.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-gray">
          HeyStax is in closed beta. It is paid from day one. Each product gets its
          own roles, its own launches and a new angle every night. You pay per
          product, not per bot.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-warm-gray">
          Timesheets and invoices are included. Teams with several products or
          their own data boundary: write to us at tabstax@floutlabs.com.
        </p>
        <a
          href={DASH_BETA_URL}
          className="mobile-full-cta mt-10 inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-terracotta"
        >
          Register for beta
        </a>
      </div>
    </section>
  );
}
