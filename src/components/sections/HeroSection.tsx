"use client";

import { Download, Globe, FileText } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F9FAF5] px-6 pt-10 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C5D9A6] bg-[#E8F5D6] px-4 py-1.5 text-xs font-medium text-[#5a7a2e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9BC53D]" />
              Browser Extension &bull; Works Everywhere
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
              Never Get{" "}
              <span className="text-[#9BC53D]">Blindsided</span>
              <br />
              By Legal Fine Print
            </h1>

            <p className="text-base leading-relaxed text-[#666]">
              Install EULAH and get instant alerts about risky clauses as you
              browse &mdash; right before you click &quot;I Agree.&quot;
            </p>

            <div className="flex flex-col gap-4">
              <button className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#9BC53D] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#8ab535] hover:shadow-md active:scale-[0.98]">
                <Download className="h-4 w-4" />
                Install Browser Extension
                <span className="ml-1 text-xs opacity-80">(FREE)</span>
              </button>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#d4dec6] bg-white px-3 py-1.5 text-xs text-[#666]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" x2="12" y1="8" y2="8"/><line x1="3.95" x2="8.54" y1="6.06" y2="10"/><line x1="4.58" x2="15.42" y1="16.94" y2="14.36"/></svg>
                  Chrome
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#d4dec6] bg-white px-3 py-1.5 text-xs text-[#666]">
                  <Globe className="h-3.5 w-3.5" />
                  Firefox
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#d4dec6] bg-white px-3 py-1.5 text-xs text-[#666]">
                  <Globe className="h-3.5 w-3.5" />
                  Edge
                </div>
              </div>

              <Link
                href="/analyzer"
                className="inline-flex w-fit items-center justify-center rounded-xl border-2 border-[#9BC53D] px-6 py-3 text-sm font-semibold text-[#9BC53D] transition-all hover:bg-[#9BC53D] hover:text-white active:scale-[0.98]"
              >
                <FileText className="mr-2 h-4 w-4" />
                Analyze a Document Now
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-lg lg:max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-[#E8EDDE] bg-white shadow-xl shadow-[#9BC53D]/10">
              <div className="flex items-center gap-2 border-b border-[#f0f0f0] bg-[#fafafa] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-[#E8EDDE] px-3 py-1 text-xs text-[#5a7a2e]">
                  <FileText className="h-3 w-3" />
                  Terms of Service
                  <span className="text-[#888]">Last updated: March 2026</span>
                </div>
                <span className="rounded-md bg-[#E8EDDE] px-2 py-1 text-[10px] text-[#5a7a2e]">
                  Processing...
                </span>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500">
                    <span className="text-[10px] font-bold text-white">!</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700">
                      Risk Detected
                    </p>
                    <p className="text-xs text-red-600">
                      Auto-Renewal Clause
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-[#f0f0f0]" />
                  <div className="h-3 w-11/12 rounded bg-red-100" />
                  <div className="h-3 w-10/12 rounded bg-red-100" />
                  <div className="h-3 w-full rounded bg-[#f0f0f0]" />
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-[#C5D9A6] bg-[#E8F5D6] p-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9BC53D]">
                    <span className="text-[10px] text-white">✓</span>
                  </div>
                  <p className="text-xs text-[#5a7a2e]">
                    Protected - 47 Clauses Analyzed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
