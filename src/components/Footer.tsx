import Link from "next/link";

const footerLinks = [
  { href: "/#product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  {
    href: "https://hulupeep.github.io/TabStax-Help/",
    label: "Docs",
    external: true,
  },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="hs border-t border-line bg-card text-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-ink">
            <img
              src="/logo-icon.png"
              alt="HeyStax"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-base font-semibold">HeyStax</span>
          </Link>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:flex-wrap sm:items-center"
          >
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-2 transition-colors duration-150 hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ink-2 transition-colors duration-150 hover:text-ink"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="flex flex-col gap-1.5 text-[13px] leading-[18px] md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:hello@heystax.ai"
            className="transition-colors duration-150 hover:text-ink"
          >
            hello@heystax.ai
          </a>
          <p>Flout Ltd (Flout Labs), Ireland. Company no. 617498. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
