"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  X,
  Eye,
  Settings,
  Clock,
  FileText,
  AlertTriangle,
  Download,
  ExternalLink,
  Info,
} from "lucide-react";

interface Risk {
  id: string;
  title: string;
  description: string;
  section: string;
  line: string;
  severity: "critical" | "high" | "medium" | "low";
}

const risks: Risk[] = [
  {
    id: "1",
    title: "AUTO-RENEWAL",
    description:
      "Your subscription will automatically renew at $99.99/month unless cancelled 30 days prior to renewal date.",
    section: "Section 4.2",
    line: "Line 142",
    severity: "critical",
  },
  {
    id: "2",
    title: "DATA SHARING",
    description:
      "We may share your personal information with third-party partners for marketing purposes.",
    section: "Section 7.1",
    line: "Line 203",
    severity: "high",
  },
  {
    id: "3",
    title: "ARBITRATION CLAUSE",
    description:
      "Any disputes must be resolved through binding arbitration rather than in court.",
    section: "Section 12.3",
    line: "Line 358",
    severity: "medium",
  },
  {
    id: "4",
    title: "CONTENT RIGHTS",
    description:
      "By uploading content, you grant us a perpetual, worldwide...",
    section: "Section 8.1",
    line: "Line 245",
    severity: "high",
  },
];

const severityConfig = {
  critical: {
    border: "border-red-200",
    bg: "bg-red-50/50",
    accent: "bg-red-400",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    badge: "bg-red-50 text-red-600",
  },
  high: {
    border: "border-orange-200",
    bg: "bg-orange-50/50",
    accent: "bg-orange-400",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    badge: "bg-orange-50 text-orange-600",
  },
  medium: {
    border: "border-yellow-200",
    bg: "bg-yellow-50/50",
    accent: "bg-yellow-400",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    badge: "bg-yellow-50 text-yellow-700",
  },
  low: {
    border: "border-green-200",
    bg: "bg-green-50/50",
    accent: "bg-green-400",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    badge: "bg-green-50 text-green-600",
  },
};

export default function ExtensionPopup({
  onClose,
}: {
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"risks" | "summary">("risks");
  const [expanded, setExpanded] = useState<string[]>(["1", "2"]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const safetyScore = 35;
  const tabUnderlineLeft = activeTab === "risks" ? 0 : 50;

  return (
    <div
      className="absolute right-0 top-14 z-50 w-95 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:border-border dark:bg-card dark:text-text-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-card-secondary px-5 py-3.5 dark:border-border dark:bg-card-secondary">
        <div className="flex items-center gap-2.5">
          <Image
            src="/EULAH-Logo.png"
            alt="EULAH"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <span className="text-sm font-bold text-text-primary">EULAH</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-7 w-7 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-border hover:text-text-primary dark:text-text-secondary dark:hover:bg-border">
            <Eye className="h-3.5 w-3.5" />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-border hover:text-text-primary dark:text-text-secondary dark:hover:bg-border">
            <Settings className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-border hover:text-text-primary dark:text-text-secondary dark:hover:bg-border"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Document Info */}
      <div className="flex items-center gap-2 border-b border-border px-5 py-2.5 text-xs text-text-secondary dark:border-border dark:text-text-secondary">
        <FileText className="h-3.5 w-3.5 text-eulah" />
        <span className="text-text-primary">Terms of Service</span>
        <span className="text-text-muted">|</span>
        <Clock className="h-3 w-3 text-text-muted" />
        <span className="text-text-secondary">~8 min read</span>
      </div>

      {/* Safety Score */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-text-primary">
            Safety Score
          </span>
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
            <span className="text-lg font-bold font-serif text-red-400">{safetyScore}</span>
          </div>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border dark:bg-neutral-800">
          <div
            className="h-full rounded-full bg-red-400 transition-all duration-500"
            style={{ width: `${safetyScore}%` }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="relative flex border-b border-border dark:border-border">
        <button
          onClick={() => setActiveTab("risks")}
          className={`flex-1 pb-3 pt-2 text-sm font-semibold transition-colors ${
            activeTab === "risks" ? "text-eulah" : "text-text-secondary"
          }`}
        >
          Risks (4)
        </button>
        <button
          onClick={() => setActiveTab("summary")}
          className={`flex-1 pb-3 pt-2 text-sm font-semibold transition-colors ${
            activeTab === "summary" ? "text-eulah" : "text-text-secondary"
          }`}
        >
          Summary
        </button>
        <div
          className="absolute bottom-0 h-[2.5px] w-1/2 rounded-full bg-eulah transition-all duration-300 ease-out"
          style={{ left: `${tabUnderlineLeft}%` }}
        />
      </div>

      {/* Tab Content */}
      <div className="max-h-100 overflow-y-auto">
        {activeTab === "risks" && (
          <div className="p-4">
            {/* All Risks Dropdown */}
            <button className="mb-3 flex w-full items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-eulah hover:bg-card-secondary dark:border-border dark:bg-card dark:text-text-primary">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-eulah-light dark:bg-eulah-muted">
                  <AlertTriangle className="h-2.5 w-2.5 text-eulah" />
                </span>
                All Risks (4)
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-text-secondary" />
            </button>

            {/* Risk Cards */}
            <div className="flex flex-col gap-3">
              {risks.map((risk) => {
                const cfg = severityConfig[risk.severity];
                const isOpen = expanded.includes(risk.id);
                return (
                  <div
                    key={risk.id}
                    className={`rounded-xl border ${cfg.border} ${cfg.bg} p-4 dark:border-neutral-700 dark:bg-neutral-950/50`}
                  >
                    <button
                      onClick={() => toggleExpand(risk.id)}
                      className="flex w-full items-start justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${cfg.iconBg} dark:bg-neutral-800`}
                        >
                          <AlertTriangle
                            className={`h-3 w-3 ${cfg.iconColor}`}
                          />
                        </div>
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wide ${cfg.iconColor}`}
                        >
                          {risk.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary" />
                      ) : (
                        <ChevronDown className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="mt-2.5 pl-8">
                        <p className="text-[11px] leading-relaxed text-text-secondary">
                          {risk.description}
                        </p>
                        <p className="mt-1.5 text-[10px] text-text-secondary">
                          {risk.section} &bull; {risk.line}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "summary" && (
          <div className="p-4">
            {/* Stats Row */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-red-200 bg-red-50/50 p-3 dark:border-red-900 dark:bg-red-900/30">
                <p className="text-lg font-bold font-serif text-red-500">1</p>
                <p className="text-[11px] font-semibold text-red-600">
                  Critical Issues
                </p>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-3 dark:border-orange-900 dark:bg-orange-900/30">
                <p className="text-lg font-bold font-serif text-orange-500">2</p>
                <p className="text-[11px] font-semibold text-orange-600">
                  High Risks
                </p>
              </div>
            </div>

            {/* Key Issues Found */}
            <div className="mb-4 rounded-xl border border-border bg-card-secondary p-4 dark:border-border dark:bg-card-secondary">
              <h4 className="mb-2.5 text-xs font-bold text-text-primary">
                Key Issues Found
              </h4>
              <ul className="space-y-2">
                {[
                  "Automatic renewal with 30-day notice requirement",
                  "Third-party data sharing for marketing",
                  "Perpetual content license granted to platform",
                  "Mandatory arbitration for all disputes",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[11px] text-text-secondary"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-eulah" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendation */}
            <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-900/30">
              <div className="mb-2 flex items-center gap-1.5">
                <Info className="h-3 w-3 text-red-500" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-red-500">
                  Recommendation
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-text-secondary">
                This agreement contains multiple high-risk clauses. Review
                carefully before accepting, especially auto-renewal and data
                sharing terms.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-3 border-t border-border bg-card-secondary px-5 py-3.5 dark:border-border dark:bg-card-secondary">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-text-primary transition-colors hover:bg-card-secondary dark:border-border dark:bg-card dark:text-text-primary dark:hover:bg-card-secondary">
          <Download className="h-3.5 w-3.5" />
          Export
        </button>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-eulah px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-eulah-dark">
          <ExternalLink className="h-3.5 w-3.5" />
          Full Report
        </button>
      </div>
    </div>
  );
}
