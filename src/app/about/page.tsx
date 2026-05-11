"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import AnalysisFeatures from "@/components/about/AnalysisFeatures";
import BenefitsSection from "@/components/about/BenefitsSection";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col items-center px-6 py-10">
        <AboutHero />
        <MissionSection />
        <AnalysisFeatures />
        <BenefitsSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
