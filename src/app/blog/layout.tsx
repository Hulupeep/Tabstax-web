import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Thoughts on focus, flow, and fragmented work",
  description:
    "The TabStax blog. Thinking on context switching, neurodivergent productivity, deep work, and building tools for how brains actually work.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
