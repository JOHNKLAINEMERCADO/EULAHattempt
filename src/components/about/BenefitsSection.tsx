"use client";

import { Sparkles, Users, Eye, BookOpen, Code } from "lucide-react";

const benefits = [
  { icon: Users, title: "General Users", desc: "Browse safely knowing what you're agreeing to" },
  { icon: Eye, title: "Privacy Advocates", desc: "Identify data collection and sharing practices" },
  { icon: BookOpen, title: "Researchers", desc: "Analyze legal patterns for academic study" },
  { icon: Code, title: "Developers", desc: "Review third-party service agreements" },
];

export default function BenefitsSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-6">
      <div className="mb-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-eulah-light">
            <Sparkles className="h-4 w-4 text-eulah" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">Who Benefits?</h2>
        </div>
        <p className="text-sm text-text-secondary">
          Built for everyone who values transparency and digital rights
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-eulah-light">
                <Icon className="h-5 w-5 text-eulah" />
              </div>
              <p className="text-sm font-semibold text-text-primary">{b.title}</p>
              <p className="text-[11px] leading-relaxed text-text-muted">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
