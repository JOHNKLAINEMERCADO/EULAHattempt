"use client";

import { AlertTriangle, Zap, FileText, Shield } from "lucide-react";

const riskCategories = [
  { icon: AlertTriangle, label: "Auto-renewals" },
  { icon: Zap, label: "Data sharing" },
  { icon: FileText, label: "Arbitration" },
  { icon: Shield, label: "Liability waivers" },
];

export default function RiskCategories() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {riskCategories.map((cat) => {
        const Icon = cat.icon;
        return (
          <div
            key={cat.label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-[#E8EDDE] bg-white p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F5D6]">
              <Icon className="h-5 w-5 text-[#9BC53D]" />
            </div>
            <span className="text-xs font-semibold text-[#1a1a1a]">
              {cat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
