"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact" },
  { href: "https://hulupeep.github.io/TabStax-Help/", label: "Help", external: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-icon.png"
              alt="TabStax"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-heading font-bold text-charcoal text-lg">TabStax</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-warm-gray hover:text-charcoal transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-warm-gray hover:text-charcoal transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://dash.tabstax.app/attention"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber text-white font-semibold text-sm hover:bg-terracotta transition-colors shadow-sm"
            >
              Start Now
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-charcoal/5">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-warm-gray hover:text-charcoal hover:bg-charcoal/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-warm-gray hover:text-charcoal hover:bg-charcoal/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="https://dash.tabstax.app/attention"
                className="mx-4 mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-amber text-white font-semibold text-sm hover:bg-terracotta transition-colors"
              >
                Start Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
