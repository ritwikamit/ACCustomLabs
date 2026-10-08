import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SelectedWork />
      <ServicesSection />
      <WhyUs />
      <ProcessSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
