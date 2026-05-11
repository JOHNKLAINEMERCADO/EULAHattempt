"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-nav-bg px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/EULAH-Logo.png"
                alt="EULAH Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold text-text-primary font-serif">EULAH</span>
            </Link>
            <p className="text-xs leading-relaxed text-text-muted">
              Enhanced User License Agreement Handling &mdash; Empowering users
              with AI-assisted legal document analysis to identify hidden risks
              and protect digital rights.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-eulah-muted text-eulah transition-colors hover:bg-eulah hover:text-white dark:border-[#3d4d25] dark:text-[#cfe9ad] dark:hover:bg-[#3d4d25]"
              >
                <Star className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-eulah-muted text-eulah transition-colors hover:bg-eulah hover:text-white dark:border-[#3d4d25] dark:text-[#cfe9ad] dark:hover:bg-[#3d4d25]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-eulah-muted text-eulah transition-colors hover:bg-eulah hover:text-white dark:border-[#3d4d25] dark:text-[#cfe9ad] dark:hover:bg-[#3d4d25]"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-text-primary">Product</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-secondary">
              <li>
                <Link href="/" className="transition-colors hover:text-eulah">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/analyzer" className="transition-colors hover:text-eulah">
                  Analyzer
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-eulah">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="transition-colors hover:text-eulah">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-text-primary">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-secondary">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-eulah">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-eulah">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition-colors hover:text-eulah">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 rounded-lg border border-eulah-muted bg-eulah-light px-3 py-2 text-xs text-eulah-dark dark:border-[#3d4d25] dark:bg-[#15240d] dark:text-[#cfe9ad]">
              <TriangleAlertIcon />
              Not legal advice
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <p>&copy; 2026 EULAH Inc. All rights reserved.</p>
          <p>Advanced AI-Assisted Analysis &amp; NLP Technology</p>
        </div>
      </div>
    </footer>
  );
}

function TriangleAlertIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-eulah"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
