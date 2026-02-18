import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-6">
          Get in Touch
        </h1>

        <p className="font-body text-lg text-warm-gray leading-relaxed mb-10">
          Have feedback? Want to collaborate? Or just want to say hi?
        </p>

        <a
          href="mailto:tabstax@floutlabs.com"
          className="inline-block font-heading text-2xl sm:text-3xl font-bold text-amber hover:text-terracotta underline underline-offset-4 transition-colors"
        >
          tabstax@floutlabs.com
        </a>

        <p className="font-body text-warm-gray mt-8 text-lg">&ndash; Colm</p>

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
