"use client";

import { Check, Zap, FileText, Shield, AlertTriangle, Eye, BookOpen } from "lucide-react";

const whatWeDetect = [
  { icon: Zap, title: "Auto-Renewals", desc: "Hidden subscription charges and automatic billing clauses" },
  { icon: FileText, title: "Data Sharing", desc: "Personal information shared with third parties" },
  { icon: Shield, title: "Arbitration", desc: "Rights to use in-court for job class actions" },
  { icon: AlertTriangle, title: "Liability Waivers", desc: "Company disclaimers for damages and losses" },
  { icon: Eye, title: "Term Changes", desc: "Unilateral modifications without notice" },
  { icon: BookOpen, title: "Content Rights", desc: "Ownership transfers and perpetual licenses" },
];

export default function DetectSection() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Check className="h-4 w-4 text-eulah" />
        <h3 className="text-sm font-bold text-text-primary">What We Detect</h3>
      </div>
      <div className="space-y-3">
        {whatWeDetect.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-border bg-card-secondary p-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-eulah-light">
                <Icon className="h-4 w-4 text-eulah" />
              </div>
              <div>
                <p className="text-xs font-semibold text-text-primary">{item.title}</p>
                <p className="text-[11px] text-text-muted">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
