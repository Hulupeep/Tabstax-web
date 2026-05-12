import Link from "next/link";

const footerLinks = [
  { href: "/#product", label: "Product" },
  { href: "/blog", label: "Blog" },
  {
    href: "https://hulupeep.github.io/TabStax-Help/",
    label: "Docs",
    external: true,
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "mailto:hello@heystax.ai", label: "hello@heystax.ai", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream text-warm-gray">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 text-center text-sm sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <Link href="/" className="font-heading text-xl font-bold text-charcoal">
          HeyStax
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-charcoal"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <p>Flout Labs, Ireland. All rights reserved.</p>
      </div>
    </footer>
  );
}
