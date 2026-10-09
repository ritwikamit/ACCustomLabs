"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import CapabilityMarquee from "@/components/ui/CapabilityMarquee";
import SelectedWork from "@/components/SelectedWork";
import JournalSection from "@/components/JournalSection";
import ExplorationsSection from "@/components/ExplorationsSection";
import StatsSection from "@/components/StatsSection";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-bg text-text-primary selection:bg-[#FF1738]/30 selection:text-white overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Hero />
      <CapabilityMarquee />
      <SelectedWork />
      <JournalSection />
      <ExplorationsSection />
      <StatsSection />
      <ContactFooter />
    </div>
  );
}
