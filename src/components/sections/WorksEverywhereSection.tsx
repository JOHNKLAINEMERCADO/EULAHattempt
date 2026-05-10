"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  "Real-time scanning as you browse",
  "Instant popup alerts for high-risk clauses",
  "Works on any website with legal documents",
  "Zero impact on browsing speed",
];

export default function WorksEverywhereSection() {
  return (
    <section className="w-full bg-[#F9FAF5] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
              Works{" "}
              <span className="text-[#9BC53D]">Everywhere</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#666]">
              EULAH automatically scans every Terms of Service, Privacy Policy,
              and EULA you encounter online. No need to copy-paste or leave the
              page.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-[#4a4a4a]"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#9BC53D]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-[#E8EDDE] bg-white shadow-lg">
              <div className="flex items-center gap-2 border-b border-[#f0f0f0] bg-[#fafafa] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-2 rounded bg-[#E8EDDE] px-2 py-0.5 text-[10px] text-[#5a7a2e]">
                  example.com/terms-of-service
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                  <div className="flex items-center gap-2">
                    <TriangleAlertIcon />
                    <span className="text-xs font-semibold text-red-700">
                      WARNING
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-red-600">
                    Auto-Renewal Detected
                  </p>
                  <p className="text-[11px] text-red-500">
                    Subscription auto-renews without explicit consent (Section 4.2)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="h-2.5 w-full rounded bg-[#f0f0f0]" />
                  <div className="h-2.5 w-10/12 rounded bg-[#f0f0f0]" />
                  <div className="h-2.5 w-11/12 rounded bg-red-100" />
                  <div className="h-2.5 w-9/12 rounded bg-[#f0f0f0]" />
                  <div className="h-2.5 w-full rounded bg-[#f0f0f0]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TriangleAlertIcon() {
  return (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
      <span className="text-[10px] font-bold text-white">!</span>
    </div>
  );
}
