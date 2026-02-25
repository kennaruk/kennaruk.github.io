"use client";

import { portfolioData } from "@/data/portfolio-data";
import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { Navigation } from "../components/navigation";

const RESUME_EMBED_URL = `https://docs.google.com/document/d/${portfolioData.personalInfo.resumeGoogleDocId}/preview`;

const RESUME_DOWNLOAD_URL = `https://docs.google.com/document/d/${portfolioData.personalInfo.resumeGoogleDocId}/export?format=pdf`;

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background — matches root page exactly */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-1/4 top-3/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute bottom-1/4 left-1/2 h-96 w-96 animate-pulse rounded-full bg-gray-500 mix-blend-multiply blur-xl filter" />
        </div>
      </div>

      <Navigation
        title={
          <span className="flex items-center gap-1.5 text-sm text-gray-400">
            <FileText className="h-4 w-4 text-blue-400" />
            Resume
          </span>
        }
      />

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen flex-col px-4 pb-10 pt-24">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6">
          {/* PDF viewer card — matches card style from root page */}
          <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-md">
            {/* Card header bar */}
            <div className="flex items-center justify-between border-b border-gray-700 bg-gray-900/80 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 text-xs text-gray-400">
                  {portfolioData.personalInfo.name} — Resume.pdf
                </span>
              </div>

              <a
                href={portfolioData.personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <span>PDF</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* iframe */}
            <div className="relative" style={{ height: "calc(100vh - 130px)" }}>
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900/80">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-700 border-t-blue-400" />
                  <p className="text-sm text-gray-400">Loading resume…</p>
                </div>
              )}
              <iframe
                src={RESUME_EMBED_URL}
                className="h-full w-full border-0"
                title={`${portfolioData.personalInfo.name} Resume`}
                onLoad={() => setIsLoading(false)}
                allow="autoplay"
              />
            </div>
          </div>

          {/* Footer hint */}
          <p className="text-center text-sm text-gray-500">
            Having trouble viewing?{" "}
            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline-offset-2 transition-colors hover:text-cyan-400 hover:underline"
            >
              Download the PDF directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
