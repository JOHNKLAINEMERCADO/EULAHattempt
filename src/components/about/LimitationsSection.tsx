"use client";

import { AlertTriangle, CircleAlert } from "lucide-react";

const limitations = [
  "Not a substitute for professional legal advice",
  "Cannot guarantee 100% detection of all risks",
  "Accuracy depends on AI training and algorithms",
  "Intended to assist, not replace legal consultation",
  "New clause patterns may not be recognized",
];

export default function LimitationsSection() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-eulah" />
        <h3 className="text-sm font-bold font-serif text-text-primary">Important Limitations</h3>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {limitations.map((limit) => (
          <div
            key={limit}
            className="flex items-center gap-2 rounded-xl border border-border bg-card-secondary px-3 py-2.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-eulah" />
            <span className="text-[11px] text-text-secondary">{limit}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-eulah-light p-3 dark:bg-[#15240d]">
        <p className="flex items-start gap-2 text-[11px] leading-relaxed text-eulah-dark dark:text-[#cfe9ad]">
          <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            <span className="font-semibold">Legal Disclaimer:</span> For
            important legal matters, always consult a qualified attorney. EULAH
            is a tool to assist understanding, not replace professional legal
            advice.
          </span>
        </p>
      </div>
    </div>
  );
}
