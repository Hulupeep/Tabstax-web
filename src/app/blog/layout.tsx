import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tab management, ADHD productivity, deep work, and browser habits",
  description:
    "The TabStax blog. Evidence-first writing on context switching, neurodivergent productivity, browser tool risks, re-entry workflows, and building systems for how knowledge workers actually operate.",
  keywords: [
    "tab management blog",
    "ADHD productivity",
    "context switching",
    "browser productivity",
    "deep work",
    "neurodivergent productivity",
    "knowledge worker tools",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
