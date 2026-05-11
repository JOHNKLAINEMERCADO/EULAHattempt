"use client";

import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="mx-auto mt-14 w-full max-w-4xl px-6">
      <div className="flex flex-col items-start gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-eulah">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-text-primary">Our Mission</h2>
          </div>

          <p className="text-sm leading-relaxed text-text-secondary">
            <span className="font-bold text-text-primary">93% of users</span>{" "}
            accept Terms and Conditions without reading them. These documents
            are intentionally complex, lengthy, and filled with legal jargon
            designed to hide unfavorable terms.
          </p>

          <p className="text-sm leading-relaxed text-text-secondary">
            EULAH was created to level the playing field. Using{" "}
            <span className="font-semibold text-eulah">
              state-of-the-art AI and Natural Language Processing
            </span>
            , we automatically analyze legal documents and expose risky clauses
            that could compromise your rights, privacy, and wallet.
          </p>

          <p className="text-sm leading-relaxed text-text-secondary">
            Our goal is simple: make{" "}
            <span className="font-semibold text-eulah">
              legal agreements transparent
            </span>{" "}
            so you can make informed decisions about the services you use.
          </p>

          <Link
            href="/analyzer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-eulah px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-eulah-dark active:scale-[0.98]"
          >
            Try It Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-72">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="text-2xl font-bold text-eulah font-serif">99.8%</span>
              <p className="mt-1 text-[10px] text-text-muted">Accuracy Rate</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-eulah font-serif">&lt;2s</span>
              <p className="mt-1 text-[10px] text-text-muted">Analysis Time</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-eulah font-serif">47+</span>
              <p className="mt-1 text-[10px] text-text-muted">Risk Types</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-eulah font-serif">100K+</span>
              <p className="mt-1 text-[10px] text-text-muted">Docs Scanned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
