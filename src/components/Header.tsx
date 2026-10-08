"use client";

import Link from "next/link";
import { useState } from "react";
import { DASH_ONBOARDING_URL } from "@/lib/routes";

const navLinks = [
  { href: "/#product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "https://dash.heystax.ai/attention", label: "Sign in", external: true },
];

const linkClass =
  "inline-flex h-11 items-center rounded-[10px] px-3.5 text-sm font-medium text-ink-2 transition-colors duration-150 hover:bg-sunken hover:text-ink";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="hs sticky top-0 z-50 border-b border-line bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-3 py-2.5 md:min-h-[76px]">
          <Link href="/" className="flex items-center gap-2.5 text-ink">
            <img
              src="/logo-icon.png"
              alt="HeyStax"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-[-0.01em] md:text-xl">
              HeyStax
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              )
            )}
            <a
              href={DASH_ONBOARDING_URL}
              className="ml-2 inline-flex h-11 items-center rounded-[10px] bg-ink px-4.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ink-2"
            >
              Start now
            </a>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <a
              href={DASH_ONBOARDING_URL}
              className="inline-flex h-10 items-center rounded-[10px] bg-ink px-3.5 text-sm font-semibold text-white"
            >
              Start now
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-ink-3"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 7h18M3 12h18M3 17h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-line pb-3 md:hidden">
            <nav aria-label="Main, mobile" className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={linkClass}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
