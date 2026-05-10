"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAnalysis } from "@/components/AnalysisProvider";
import { analyzeDocument } from "@/lib/gemini";
import {
  Sparkles,
  Upload,
  Zap,
  AlertTriangle,
  FileText,
  Shield,
  Check,
  Loader2,
} from "lucide-react";

const riskCategories = [
  { icon: AlertTriangle, label: "Auto-renewals" },
  { icon: Zap, label: "Data sharing" },
  { icon: FileText, label: "Arbitration" },
  { icon: Shield, label: "Liability waivers" },
];

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

export default function AnalyzerPage() {
  const router = useRouter();
  const { setResult, setIsAnalyzing, isAnalyzing, setError, error } =
    useAnalysis();
  const [text, setText] = useState("");

  const loadSample = useCallback(() => {
    setText(
      `Terms of Service\n\nLast Updated: March 2026\n\n1. Acceptance of Terms\nBy using our services, you agree to be bound by these terms.\n\n2. Subscription and Billing\nYour subscription will automatically renew at the end of each billing period unless you cancel at least 24 hours before renewal. We may change subscription fees upon notice.\n\n3. Data Collection\nWe collect personal data including browsing history, device information, and location data. We may share aggregated data with third-party partners for advertising purposes.\n\n4. Limitation of Liability\nWe are not liable for any indirect, incidental, or consequential damages arising from your use of our services.\n\n5. Dispute Resolution\nAny disputes shall be resolved through binding arbitration in our jurisdiction. You waive your right to a jury trial.\n\n6. Changes to Terms\nWe reserve the right to modify these terms at any time without prior notice. Continued use constitutes acceptance.`
    );
  }, []);

  const handleAnalyze = useCallback(async () => {
    console.log("[Analyzer] handleAnalyze called, text length:", text.length);
    if (!text.trim()) {
      setError("Please paste or upload a legal document to analyze.");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      console.log("[Analyzer] Calling analyzeDocument...");
      const result = await analyzeDocument(text);
      console.log("[Analyzer] Got result:", result);
      setResult(result, text);
      router.push("/results");
    } catch (err) {
      console.error("[Analyzer] Error:", err);
      const message =
        err instanceof Error ? err.message : "Analysis failed. Please try again.";
      setError(message);
    } finally {
      setIsAnalyzing(false);
    }
  }, [text, setResult, setIsAnalyzing, setError, router]);

  return (
    <div className="flex min-h-full flex-col bg-[#F9FAF5]">
      <Navbar />
      <main className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="mx-auto w-full max-w-3xl">
          {/* Page badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5D9A6] bg-[#E8F5D6] px-4 py-1.5 text-xs font-medium text-[#5a7a2e]">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Assisted Analysis
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Document{" "}
            <span className="text-[#9BC53D]">Analyzer</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-[#666]">
            Paste your legal document or upload a file. Our AI will expose
            hidden risks in seconds.
          </p>

          {/* Document Input Card */}
          <div className="mt-8 rounded-2xl border border-[#E8EDDE] bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#1a1a1a]">
                Legal Document Text
              </h2>
              <div className="flex items-center gap-4 text-xs text-[#9BC53D]">
                <button
                  onClick={loadSample}
                  disabled={isAnalyzing}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#7a9c2e] disabled:opacity-50"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Load Sample
                </button>
                <button
                  disabled={isAnalyzing}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#7a9c2e] disabled:opacity-50"
                >
                  <Upload className="h-3.5 w-3.5" />
                  Upload File
                </button>
              </div>
            </div>

            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isAnalyzing}
                placeholder={`Paste your Terms of Service, Privacy Policy, EULA, or any legal document here...\n\nWe'll analyze it and highlight potential risks like:\n• Automatic subscription renewals\n• Data collection and sharing\n• Forced arbitration clauses\n• Liability waivers\n• Unilateral term changes\n• And much more...`}
                className="min-h-[280px] w-full resize-none rounded-xl border border-[#E8EDDE] bg-[#FAFBF7] p-4 text-sm leading-relaxed text-[#333] placeholder:text-[#999] focus:border-[#9BC53D] focus:outline-none focus:ring-1 focus:ring-[#9BC53D] disabled:opacity-60"
              />
              <span className="absolute bottom-3 right-3 rounded-full border border-[#E8EDDE] bg-white px-2.5 py-1 text-[10px] text-[#888]">
                {text.length} characters
              </span>
            </div>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !text.trim()}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C5D9A6] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#9BC53D] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4" />
                  Analyze Document
                </>
              )}
            </button>
          </div>

          {/* Risk Category Cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
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

          {/* What We Detect */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#E8EDDE] bg-white p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9BC53D]">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#1a1a1a]">
                What We Detect
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                <ul className="space-y-2">
                  {detectionsLeft.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#666]"
                    >
                      <Check className="h-3 w-3 shrink-0 text-[#9BC53D]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {detectionsRight.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#666]"
                    >
                      <Check className="h-3 w-3 shrink-0 text-[#9BC53D]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
