import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Projects - Ken Wuttisasiwat | Lead Software Engineer Engineer",
  description:
    "Explore the comprehensive portfolio of Ken Wuttisasiwat featuring full-stack applications, AI/ML projects, mobile apps, and more built with modern technologies.",
  keywords:
    "Ken Wuttisasiwat projects, full-stack projects, TypeScript projects, React applications, Node.js backend, software engineering portfolio",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
