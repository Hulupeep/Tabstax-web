import Link from "next/link";

export const COMPANY = {
  legalName: "Flout Ltd",
  tradingName: "Flout Labs",
  registrationNumber: "617498",
  address: "Cave, Clarinbridge, Co. Galway, Ireland",
  adminEmail: "admin@floutlabs.com",
  privacyEmail: "privacy@floutlabs.com",
};

export function LegalPage({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          {title}
        </h1>
        <p className="font-body text-sm text-warm-gray mb-10">
          Last updated: {lastUpdated}
        </p>
        <div className="font-body text-lg leading-relaxed text-charcoal mb-10 space-y-4">
          {intro}
        </div>
        <div className="font-body text-charcoal space-y-10 leading-relaxed">
          {children}
        </div>
        <div className="mt-16 pt-8 border-t border-charcoal/10 font-body text-sm text-warm-gray space-y-1">
          <p>
            {COMPANY.legalName} (trading as {COMPANY.tradingName}), a private
            company limited by shares registered in Ireland, company number{" "}
            {COMPANY.registrationNumber}.
          </p>
          <p>Registered office: {COMPANY.address}.</p>
          <p>
            See also our{" "}
            <Link href="/privacy" className="text-amber hover:text-terracotta underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-amber hover:text-terracotta underline underline-offset-2">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function LegalSection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="font-heading text-2xl font-bold text-charcoal">{heading}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function MailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-amber hover:text-terracotta underline underline-offset-2"
    >
      {email}
    </a>
  );
}
