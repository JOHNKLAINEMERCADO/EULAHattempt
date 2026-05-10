import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WorksEverywhereSection from "@/components/sections/WorksEverywhereSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#F9FAF5]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WorksEverywhereSection />
      </main>
      <Footer />
    </div>
  );
}
