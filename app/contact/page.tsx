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
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-[#05070a] transition-colors">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.95L2 22l5.22-1.28A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.82 14.15c-.24.68-1.21 1.24-1.95 1.34-.51.07-1.18.1-3.41-.83-2.86-1.19-4.7-4.12-4.84-4.31-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.36c.26-.28.58-.35.78-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.44.29.15.46.13.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.26.1 1.68.79 1.97.94.29.15.48.22.56.34.07.12.07.7-.17 1.38z"/></svg>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#71717A] block">WhatsApp</span>
                  <span className="text-white font-medium">+91 9113445763</span>
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
