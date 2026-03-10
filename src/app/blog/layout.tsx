import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Managing multiple initiatives and working across teams in the AI era",
  description:
    "The HeyStax blog. Practical writing on managing multiple projects, team visibility, context switching, and building workflows for how modern teams actually operate with AI.",
  keywords: [
    "managing multiple projects",
    "team visibility",
    "context switching",
    "AI productivity workflows",
    "cross-team collaboration",
    "project context management",
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
