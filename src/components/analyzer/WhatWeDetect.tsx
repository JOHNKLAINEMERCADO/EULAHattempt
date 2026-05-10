"use client";

import { Sparkles, Check } from "lucide-react";

const detectionsLeft = [
  "Automatic subscription renewals",
  "Data collection & sharing",
  "Unilateral term changes",
  "Content ownership transfers",
];

const detectionsRight = [
  "Forced arbitration clauses",
  "Liability waivers & disclaimers",
  "Account termination rights",
  "Privacy policy violations",
];

export default function WhatWeDetect() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#E8EDDE] bg-white p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9BC53D]">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-[#1a1a1a]">What We Detect</h3>
        <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          <ul className="space-y-2">
            {detectionsLeft.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-[#666]">
                <Check className="h-3 w-3 shrink-0 text-[#9BC53D]" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {detectionsRight.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-[#666]">
                <Check className="h-3 w-3 shrink-0 text-[#9BC53D]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
