"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="mx-auto mt-16 w-full max-w-3xl px-6 pb-10">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-border/50 px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-eulah-muted bg-eulah-light px-4 py-1.5 text-xs font-medium text-eulah-dark">
          <ArrowRight className="h-3.5 w-3.5" />
          Join the Movement
        </div>

        <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
          Ready to
          <br />
          <span className="text-eulah">Take Control?</span>
        </h2>

        <p className="max-w-sm text-sm text-text-secondary">
          Start analyzing legal documents today and never get blindsided again.
        </p>

        <Link
          href="/analyzer"
          className="inline-flex items-center gap-2 rounded-xl bg-eulah px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-eulah/20 transition-all hover:bg-eulah-dark active:scale-[0.98]"
        >
          Analyze Your First Document
          <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="text-[10px] text-text-muted">
          100% Free • No Registration • Instant Results
        </p>
      </div>
    </section>
  );
}
