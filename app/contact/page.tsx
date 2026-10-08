import type { Metadata } from "next";
import ProjectEnquiryForm from "@/components/ProjectEnquiryForm";
import { siteConfig } from "@/data/site";
import { Mail, MessageSquare, MapPin, CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project | Project Enquiry",
  description:
    "Tell us about your project requirements. Request a custom quote for websites, web applications, mobile apps, or SEO solutions.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
          <span>[ DIRECT PROJECT INTAKE ]</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
          Let’s build something remarkable.
        </h1>
        <p className="text-lg text-[#A1A1AA] leading-relaxed">
          Submit your project brief below. We review every submission directly and respond
          with clear scope suggestions, estimated timelines, and transparent milestone pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form Column */}
        <div className="lg:col-span-8">
          <ProjectEnquiryForm />
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Direct channels */}
          <div className="bg-[#0B0B0D] border border-white/[0.08] rounded-2xl p-6 sm:p-7 space-y-6">
            <h2 className="text-base font-bold text-white font-[family-name:var(--font-display)]">
              Direct Contact
            </h2>
            <div className="space-y-4 text-sm text-[#A1A1AA]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF1738] shrink-0 group-hover:bg-[#FF1738] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#71717A] block">Email Us</span>
                  <span className="text-white font-medium">{siteConfig.contact.email}</span>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#10B981] shrink-0 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#71717A] block">WhatsApp</span>
                  <span className="text-white font-medium">Message our studio</span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-2 border-t border-white/[0.05]">
                <MapPin className="w-4 h-4 text-[#FF1738] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="text-white block font-medium">Location</span>
                  <span>{siteConfig.contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-[#0B0B0D] border border-white/[0.08] rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="text-sm font-bold text-white font-[family-name:var(--font-display)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF1738]" />
              <span>What happens next?</span>
            </h3>
            <ul className="space-y-3 text-xs text-[#A1A1AA] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>We review your requirements and assess technical scope.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>We outline clear milestones, budget tiers, and delivery dates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>Zero sales pressure or obligation to proceed.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
