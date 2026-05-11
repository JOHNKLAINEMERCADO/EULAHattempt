"use client";

import { Download, Globe, AlertTriangle, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install",
    description:
      "Add EULAH to your browser in one click — no configuration needed.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Browse Normally",
    description:
      "Extension detects legal docs automatically as you visit websites.",
  },
  {
    number: "03",
    icon: AlertTriangle,
    title: "Get Alerts",
    description:
      "Instant popup warnings for risky clauses before you agree.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Stay Protected",
    description:
      "Make informed decisions before agreeing to any terms.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            How the{" "}
            <span className="text-eulah">Extension</span> Works
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            Protection that works automatically as you browse
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center text-center">
                <span className="mb-4 text-5xl font-bold text-border">
                  {step.number}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-eulah">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
