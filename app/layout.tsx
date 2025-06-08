import Analytics from "@/components/analytics";
import { portfolioData } from "@/data/portfolio-data";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import type React from "react";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Ken Wuttisasiwat - Full-Stack Software Engineer | 6+ Years Experience",
  description:
    "Experienced full-stack software engineer with 6+ years of expertise in TypeScript, React, Node.js, and modern web technologies. Founder of Techgrity.",
  keywords:
    "Ken Wuttisasiwat, Full-Stack Developer, Software Engineer, TypeScript, React, Node.js, GraphQL, Thailand, Techgrity",
  authors: [{ name: portfolioData.personalInfo.name }],
  creator: portfolioData.personalInfo.name,
  openGraph: {
    title: "Ken Wuttisasiwat - Full-Stack Software Engineer",
    description:
      "Experienced full-stack software engineer with 6+ years of expertise in modern web technologies.",
    url: portfolioData.personalInfo.website,
    siteName: "Ken Wuttisasiwat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Wuttisasiwat - Full-Stack Software Engineer",
    description:
      "Experienced full-stack software engineer with 6+ years of expertise in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ken Wuttisasiwat",
              jobTitle: "Full-Stack Software Engineer",
              description:
                "Experienced full-stack software engineer with 6+ years of expertise in TypeScript, React, Node.js, and modern web technologies.",
              url: portfolioData.personalInfo.website,
              sameAs: [
                portfolioData.personalInfo.github,
                portfolioData.personalInfo.linkedin,
              ],
              worksFor: {
                "@type": "Organization",
                name: "California State University, Fullerton",
              },
              knowsAbout: [
                "TypeScript",
                "React",
                "Node.js",
                "GraphQL",
                "Full-Stack Development",
                "Software Engineering",
              ],
            }),
          }}
        />
      </head>

      <body
        style={{ overscrollBehaviorY: "none" }}
        className={`${geist.variable} ${inter.variable}`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
