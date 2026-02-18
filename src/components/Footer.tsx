import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-bold text-cream mb-3">
              TabStax
            </p>
            <p className="text-sm leading-relaxed max-w-md">
              Pick up where your mind left off.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream mb-4">Product</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://dash.tabstax.app/attention"
                  className="hover:text-cream transition-colors"
                >
                  Open Attention Stax
                </a>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-cream transition-colors"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-cream transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://hulupeep.github.io/TabStax-Help/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-cream transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cream transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:tabstax@floutlabs.com"
                  className="hover:text-cream transition-colors"
                >
                  tabstax@floutlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} Flout Labs, Ireland. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
