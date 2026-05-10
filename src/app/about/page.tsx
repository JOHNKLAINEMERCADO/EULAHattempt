"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Leaf,
  ArrowRight,
  Check,
  AlertTriangle,
  FileText,
  Shield,
  Zap,
  Users,
  Eye,
  BookOpen,
  Code,
  CircleAlert,
} from "lucide-react";

const whatWeDetect = [
  {
    icon: Zap,
    title: "Auto-Renewals",
    desc: "Hidden subscription charges and automatic billing clauses",
  },
  {
    icon: FileText,
    title: "Data Sharing",
    desc: "Personal information shared with third parties",
  },
  {
    icon: Shield,
    title: "Arbitration",
    desc: "Rights to use in-court for job class actions",
  },
  {
    icon: AlertTriangle,
    title: "Liability Waivers",
    desc: "Company disclaimers for damages and losses",
  },
  {
    icon: Eye,
    title: "Term Changes",
    desc: "Unilateral modifications without notice",
  },
  {
    icon: BookOpen,
    title: "Content Rights",
    desc: "Ownership transfers and perpetual licenses",
  },
];

const limitations = [
  "Not a substitute for professional legal advice",
  "Cannot guarantee 100% detection of all risks",
  "Accuracy depends on AI training and algorithms",
  "Intended to assist, not replace legal consultation",
  "New clause patterns may not be recognized",
];

const benefits = [
  {
    icon: Users,
    title: "General Users",
    desc: "Browse safely knowing what you're agreeing to",
  },
  {
    icon: Eye,
    title: "Privacy Advocates",
    desc: "Identify data collection and sharing practices",
  },
  {
    icon: BookOpen,
    title: "Researchers",
    desc: "Analyze legal patterns for academic study",
  },
  {
    icon: Code,
    title: "Developers",
    desc: "Review third-party service agreements",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#F9FAF5]">
      <Navbar />
      <main className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="mx-auto w-full max-w-3xl">
          {/* Page badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5D9A6] bg-[#E8F5D6] px-4 py-1.5 text-xs font-medium text-[#5a7a2e]">
              <Leaf className="h-3.5 w-3.5" />
              About EULAH
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Enhanced User
            <br />
            <span className="text-[#9BC53D]">License Agreement</span>
            <br />
            Handling
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-[#666]">
            Empowering users with AI-assisted legal document analysis to identify
            hidden risks and protect digital rights in an age where nobody reads
            the fine print.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mx-auto mt-14 w-full max-w-4xl px-6">
          <div className="flex flex-col items-start gap-10 lg:flex-row">
            {/* Left: Mission text */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9BC53D]">
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-[#1a1a1a]">
                  Our Mission
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-[#666]">
                <span className="font-bold text-[#1a1a1a]">
                  93% of users
                </span>{" "}
                accept Terms and Conditions without reading them. These
                documents are intentionally complex, lengthy, and filled with
                legal jargon designed to hide unfavorable terms.
              </p>

              <p className="text-sm leading-relaxed text-[#666]">
                EULAH was created to level the playing field. Using{" "}
                <span className="font-semibold text-[#9BC53D]">
                  state-of-the-art AI and Natural Language Processing
                </span>
                , we automatically analyze legal documents and expose risky
                clauses that could compromise your rights, privacy, and wallet.
              </p>

              <p className="text-sm leading-relaxed text-[#666]">
                Our goal is simple: make{" "}
                <span className="font-semibold text-[#9BC53D]">
                  legal agreements transparent
                </span>{" "}
                so you can make informed decisions about the services you use.
              </p>

              <Link
                href="/analyzer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-[#9BC53D] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#8ab535] active:scale-[0.98]"
              >
                Try It Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: Stats card */}
            <div className="w-full rounded-2xl border border-[#E8EDDE] bg-white p-6 shadow-sm sm:w-72">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-2xl font-bold text-[#9BC53D]">
                    99.8%
                  </span>
                  <p className="mt-1 text-[10px] text-[#888]">Accuracy Rate</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#9BC53D]">
                    &lt;2s
                  </span>
                  <p className="mt-1 text-[10px] text-[#888]">
                    Analysis Time
                  </p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#9BC53D]">
                    47+
                  </span>
                  <p className="mt-1 text-[10px] text-[#888]">Risk Types</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#9BC53D]">
                    100K+
                  </span>
                  <p className="mt-1 text-[10px] text-[#888]">
                    Docs Scanned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Assisted Analysis Section */}
        <section className="mx-auto mt-16 w-full max-w-4xl px-6">
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5D6]">
                <Sparkles className="h-4 w-4 text-[#9BC53D]" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a1a]">
                AI-Assisted Analysis
              </h2>
            </div>
            <p className="text-sm text-[#666]">
              Advanced Natural Language Processing that understands context,
              intent, and legal implications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* What We Detect */}
            <div className="rounded-2xl border border-[#E8EDDE] bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Check className="h-4 w-4 text-[#9BC53D]" />
                <h3 className="text-sm font-bold text-[#1a1a1a]">
                  What We Detect
                </h3>
              </div>
              <div className="space-y-3">
                {whatWeDetect.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-[#E8EDDE] bg-[#FAFBF7] p-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F5D6]">
                        <Icon className="h-4 w-4 text-[#9BC53D]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#1a1a1a]">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#888]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Important Limitations */}
            <div className="flex flex-col rounded-2xl border border-[#E8EDDE] bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[#9BC53D]" />
                <h3 className="text-sm font-bold text-[#1a1a1a]">
                  Important Limitations
                </h3>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                {limitations.map((limit) => (
                  <div
                    key={limit}
                    className="flex items-center gap-2 rounded-xl border border-[#E8EDDE] bg-[#FAFBF7] px-3 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9BC53D]" />
                    <span className="text-[11px] text-[#666]">{limit}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer box */}
              <div className="mt-4 rounded-xl bg-[#E8F5D6] p-3">
                <p className="flex items-start gap-2 text-[11px] leading-relaxed text-[#5a7a2e]">
                  <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>
                    <span className="font-semibold">Legal Disclaimer:</span>{" "}
                    For important legal matters, always consult a qualified
                    attorney. EULAH is a tool to assist understanding, not
                    replace professional legal advice.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits Section */}
        <section className="mx-auto mt-16 w-full max-w-4xl px-6">
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5D6]">
                <Sparkles className="h-4 w-4 text-[#9BC53D]" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a1a]">
                Who Benefits?
              </h2>
            </div>
            <p className="text-sm text-[#666]">
              Built for everyone who values transparency and digital rights
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex flex-col gap-3 rounded-2xl border border-[#E8EDDE] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F5D6]">
                    <Icon className="h-5 w-5 text-[#9BC53D]" />
                  </div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">
                    {b.title}
                  </p>
                  <p className="text-[11px] leading-relaxed text-[#888]">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto mt-16 w-full max-w-3xl px-6 pb-10">
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#E8EDDE]/50 px-6 py-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5D9A6] bg-[#E8F5D6] px-4 py-1.5 text-xs font-medium text-[#5a7a2e]">
              <ArrowRight className="h-3.5 w-3.5" />
              Join the Movement
            </div>

            <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
              Ready to
              <br />
              <span className="text-[#9BC53D]">Take Control?</span>
            </h2>

            <p className="max-w-sm text-sm text-[#666]">
              Start analyzing legal documents today and never get blindsided
              again.
            </p>

            <Link
              href="/analyzer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#9BC53D] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#9BC53D]/20 transition-all hover:bg-[#8ab535] active:scale-[0.98]"
            >
              Analyze Your First Document
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="text-[10px] text-[#888]">
              100% Free • No Registration • Instant Results
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
