"use client";

import { Sparkles } from "lucide-react";
import DetectSection from "./DetectSection";
import LimitationsSection from "./LimitationsSection";

export default function AnalysisFeatures() {
  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-6">
      <div className="mb-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-eulah-light">
            <Sparkles className="h-4 w-4 text-eulah" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">AI-Assisted Analysis</h2>
        </div>
        <p className="text-sm text-text-secondary">
          Advanced Natural Language Processing that understands context, intent,
          and legal implications
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DetectSection />
        <LimitationsSection />
      </div>
    </section>
  );
}
