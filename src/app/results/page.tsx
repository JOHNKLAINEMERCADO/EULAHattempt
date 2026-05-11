"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAnalysis } from "@/components/AnalysisProvider";
import {
  ArrowLeft,
  Sparkles,
  AlertTriangle,
  Info,
  CheckCircle,
  AlertCircle,
  Scale,
} from "lucide-react";

const riskConfig = {
  HIGH: {
    border: "border-red-200 dark:border-red-600/40",
    bg: "bg-red-50 dark:bg-red-950/40",
    text: "text-red-700 dark:text-red-200",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/80 dark:text-red-100",
    iconBg: "bg-red-500/10 dark:bg-red-500/20",
    leftBorder: "border-l-red-400 dark:border-l-red-500",
    bannerBg: "bg-gradient-to-r from-red-50/80 to-red-100/50 dark:from-red-950/80 dark:via-red-950/60 dark:to-red-900/70",
    bannerBorder: "border-red-200 dark:border-red-700",
    bannerText: "text-red-700 dark:text-red-200",
  },
  MEDIUM: {
    border: "border-yellow-200 dark:border-yellow-600/40",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    text: "text-yellow-700 dark:text-yellow-200",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/80 dark:text-yellow-100",
    iconBg: "bg-yellow-500/10 dark:bg-yellow-500/20",
    leftBorder: "border-l-yellow-400 dark:border-l-yellow-500",
    bannerBg: "bg-gradient-to-r from-yellow-50/80 to-yellow-100/50 dark:from-yellow-950/80 dark:via-yellow-950/60 dark:to-yellow-900/70",
    bannerBorder: "border-yellow-200 dark:border-yellow-700",
    bannerText: "text-yellow-700 dark:text-yellow-200",
  },
  LOW: {
    border: "border-green-200 dark:border-green-600/40",
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-700 dark:text-green-200",
    badge: "bg-green-100 text-green-700 dark:bg-green-900/80 dark:text-green-100",
    iconBg: "bg-green-500/10 dark:bg-green-500/20",
    leftBorder: "border-l-green-400 dark:border-l-green-500",
    bannerBg: "bg-gradient-to-r from-green-50/80 to-green-100/50 dark:from-green-950/80 dark:via-green-950/60 dark:to-green-900/70",
    bannerBorder: "border-green-200 dark:border-green-700",
    bannerText: "text-green-700 dark:text-green-200",
  },
};

export default function ResultsPage() {
  const router = useRouter();
  const { result, originalText, clear } = useAnalysis();

  // Redirect if no result available
  useEffect(() => {
    if (!result) {
      router.replace("/analyzer");
    }
  }, [result, router]);

  if (!result) return null;

  const overall = riskConfig[result.overallRisk];

  const stats = [
    {
      label: "Total Risks",
      value: result.totalRisks,
      icon: AlertCircle,
      iconBg: "bg-[#E8F5D6] dark:bg-[#223516]",
      iconColor: "text-[#9BC53D] dark:text-[#cfe9ad]",
    },
    {
      label: "High Risk",
      value: result.highRisks,
      icon: AlertTriangle,
      iconBg: "bg-red-100 dark:bg-red-900/40",
      iconColor: "text-red-500 dark:text-red-300",
    },
    {
      label: "Medium Risk",
      value: result.mediumRisks,
      icon: Info,
      iconBg: "bg-yellow-100 dark:bg-yellow-900/40",
      iconColor: "text-yellow-500 dark:text-yellow-300",
    },
    {
      label: "Low Risk",
      value: result.lowRisks,
      icon: CheckCircle,
      iconBg: "bg-green-100 dark:bg-green-900/40",
      iconColor: "text-green-500 dark:text-green-300",
    },
  ];

  return (
    <div className="flex min-h-full flex-col bg-background text-text-primary dark:bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="mx-auto w-full max-w-3xl">
          {/* Back link */}
          <Link
            href="/analyzer"
            onClick={clear}
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-eulah transition-colors hover:text-eulah-dark"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Analyze Another Document
          </Link>

          {/* Analysis Complete badge */}
          <div className="mb-4 flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-eulah-muted bg-eulah-light/70 px-4 py-1.5 text-xs font-medium text-eulah-dark dark:border-[#3a4d25] dark:bg-[#16220b] dark:text-[#cfe9ad]">
              <Sparkles className="h-3.5 w-3.5 text-eulah" />
              Analysis Complete
            </div>
          </div>

          {/* Demo mode banner */}
          {result.isDemo && (
            <div className="mb-4 rounded-xl border border-yellow-200/80 bg-yellow-50/90 px-4 py-3 text-sm text-yellow-700 dark:border-yellow-700/40 dark:bg-yellow-950/20 dark:text-yellow-200">
              <p className="text-xs leading-relaxed">
                <span className="font-semibold">Demo Mode:</span> Running
                keyword-based analysis. Add a{" "}
                <code className="rounded bg-white px-1 py-0.5 font-mono text-[10px] text-[#1a1a1a] dark:bg-[#111] dark:text-[#d7d7d7]">
                  NEXT_PUBLIC_GEMINI_API_KEY
                </code>{" "}
                to your{" "}
                <code className="rounded bg-white px-1 py-0.5 font-mono text-[10px] text-[#1a1a1a] dark:bg-[#111] dark:text-[#d7d7d7]">
                  .env.local
                </code>{" "}
                file for full AI-powered analysis with Gemini.
              </p>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold font-serif tracking-tight text-text-primary">
            Risk{" "}
            <span className="text-eulah">Assessment</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-text-secondary">
            We found{" "}
            <span className="font-semibold font-serif text-text-primary">
              {result.totalRisks}
            </span>{" "}
            potentially risky clauses in your document
          </p>

          {/* Stats Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card-secondary p-5 dark:bg-card"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${stat.iconBg}`}
                  >
                    <Icon className={`h-4 w-4 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-serif text-text-primary">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-text-secondary">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall Risk Banner */}
          <div
            className={`mt-6 rounded-2xl border ${overall.bannerBorder} ${overall.bannerBg} p-5`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${overall.iconBg}`}
              >
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Overall Risk:{" "}
                  <span className={`${overall.bannerText}`}>
                    {result.overallRisk === "HIGH"
                      ? "High Risk"
                      : result.overallRisk === "MEDIUM"
                      ? "Medium Risk"
                      : "Low Risk"}
                  </span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                  {result.overallRiskMessage}
                </p>
              </div>
            </div>
          </div>

          {/* Detected Risky Clauses */}
          <section className="mt-10">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-eulah" />
              <h2 className="text-base font-bold font-serif text-text-primary">
                Detected Risky Clauses
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {result.clauses.map((clause) => {
                const cfg = riskConfig[clause.riskLevel];
                return (
                  <div
                    key={clause.id}
                    className={`rounded-2xl border ${cfg.border} ${cfg.bg} ${cfg.leftBorder} border-l-4 p-5`}
                  >
                    {/* Header */}
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${cfg.iconBg}`}
                      >
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-text-primary">
                        {clause.type}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase ${cfg.badge}`}
                      >
                        {clause.riskLevel}
                      </span>
                    </div>

                    {/* Clause text */}
                    <blockquote className="mb-3 rounded-xl border border-border bg-card px-4 py-3 text-xs italic leading-relaxed text-text-secondary dark:bg-card-secondary">
                      &ldquo;{clause.clauseText}&rdquo;
                    </blockquote>

                    {/* Explanation */}
                    <div>
                      <span className="text-xs font-bold text-text-primary">
                        Why this matters:{" "}
                      </span>
                      <span className="text-xs leading-relaxed text-text-secondary">
                        {clause.explanation}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Original Document */}
          <section className="mt-10">
            <h2 className="mb-4 text-base font-bold font-serif text-text-primary">
              Original Document
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 dark:bg-card-secondary">
              <div className="max-h-100 overflow-y-auto rounded-xl border border-border bg-card-secondary p-4 dark:bg-card">
                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-text-secondary">
                  {originalText}
                </pre>
              </div>
            </div>
          </section>

          {/* Legal Notice */}
          <section className="mt-6">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 dark:bg-card-secondary">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-eulah-light dark:bg-[#223516]">
                <Scale className="h-4 w-4 text-eulah" />
              </div>
              <div>
                <h3 className="text-xs font-bold font-serif text-text-primary">
                  Important Legal Notice
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-text-secondary">
                  This analysis is for informational purposes only and does not
                  constitute legal advice. The AI-assisted detection system may
                  not identify all potential risks. For legal matters, please
                  consult with a qualified attorney. EULAH is not liable for any
                  decisions made based on this analysis.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
