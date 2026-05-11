"use client";

import { FileText, AlertTriangle, CheckCircle, Zap, Eye, Lock } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Instant Detection",
    description:
      "AI automatically identifies legal documents and problematic clauses in milliseconds.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Analysis",
    description:
      "Advanced NLP detects auto-renewals, data sharing, arbitration, and liability waivers.",
  },
  {
    icon: CheckCircle,
    title: "Plain English",
    description:
      "Complex legal jargon translated into clear, actionable insights you can understand.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Real-time analysis that processes thousands of clauses without slowing you down.",
  },
  {
    icon: Eye,
    title: "Visual Highlights",
    description:
      "Risky sections illuminated directly in documents for instant comprehension.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Zero tracking. Your documents stay private. GDPR compliant architecture.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Superhuman{" "}
            <span className="text-eulah">Protection</span>
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            Enterprise-grade AI analyzing every clause, phrase, and loophole to
            keep you safe
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-eulah/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-eulah-light">
                  <Icon className="h-5 w-5 text-eulah" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
