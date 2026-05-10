"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAnalysis } from "@/components/AnalysisProvider";
import { analyzeDocument } from "@/lib/gemini";
import { Sparkles, Upload, Zap, Loader2 } from "lucide-react";

const sampleText = `Terms of Service

Last Updated: March 2026

1. Acceptance of Terms
By using our services, you agree to be bound by these terms.

2. Subscription and Billing
Your subscription will automatically renew at the end of each billing period unless you cancel at least 24 hours before renewal. We may change subscription fees upon notice.

3. Data Collection
We collect personal data including browsing history, device information, and location data. We may share aggregated data with third-party partners for advertising purposes.

4. Limitation of Liability
We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.

5. Dispute Resolution
Any disputes shall be resolved through binding arbitration in our jurisdiction. You waive your right to a jury trial.

6. Changes to Terms
We reserve the right to modify these terms at any time without prior notice. Continued use constitutes acceptance.`;

export default function DocumentInput() {
  const router = useRouter();
  const { setResult, setIsAnalyzing, isAnalyzing, setError, error } =
    useAnalysis();
  const [text, setText] = useState("");

  const loadSample = useCallback(() => {
    setText(sampleText);
  }, []);

  const handleAnalyze = useCallback(async () => {
    if (!text.trim()) {
      setError("Please paste or upload a legal document to analyze.");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const result = await analyzeDocument(text);
      setResult(result, text);
      router.push("/results");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Analysis failed. Please try again.";
      setError(message);
    } finally {
      setIsAnalyzing(false);
    }
  }, [text, setResult, setIsAnalyzing, setError, router]);

  return (
    <div className="rounded-2xl border border-[#E8EDDE] bg-white p-6 shadow-sm">
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
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9BC53D] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#7a9c2e] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
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
  );
}
