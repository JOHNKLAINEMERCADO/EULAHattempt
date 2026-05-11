"use client";

import { Leaf } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-eulah-muted bg-eulah-light px-4 py-1.5 text-xs font-medium text-eulah-dark">
          <Leaf className="h-3.5 w-3.5" />
          About EULAH
        </div>
      </div>

      <h1 className="text-center text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        Enhanced User
        <br />
        <span className="text-eulah">License Agreement</span>
        <br />
        Handling
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-text-secondary">
        Empowering users with AI-assisted legal document analysis to identify
        hidden risks and protect digital rights in an age where nobody reads
        the fine print.
      </p>
    </div>
  );
}
