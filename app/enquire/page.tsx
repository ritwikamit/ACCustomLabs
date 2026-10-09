"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Phone, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { LandingPageFrame } from "@/src/shaders/landing-pages/LandingPageFrame";
import Lenis from "lenis";

const SERVICES = [
  "Custom Software",
  "Web Platform / Next.js",
  "Mobile App (iOS/Android)",
  "Full-Stack Product",
] as const;

const TIMELINES = ["Immediate (1-2 wks)", "2-4 Weeks", "1-2 Months", "Flexible"] as const;

const BUDGETS = ["Under ₹1L", "₹1L - ₹3L", "₹3L - ₹6L", "Enterprise / Custom"] as const;

export default function EnquirePage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState<string>(SERVICES[0]);
  const [timeline, setTimeline] = useState<string>(TIMELINES[1]);
  const [budget, setBudget] = useState<string>(BUDGETS[1]);
  const [details, setDetails] = useState("");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `*AC Custom Labs — Project Enquiry*
• *Name:* ${name.trim()}
• *Company / Brand:* ${company.trim() || "Independent / Startup"}
• *Service Needed:* ${service}
• *Target Timeline:* ${timeline}
• *Estimated Budget:* ${budget}
• *Project Details:*
${details.trim() || "I would like to discuss scoping, architecture, and timeline for this build."}`;

    const waUrl = `https://wa.me/919113445763?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-[#05070a] text-[#dfe7e0] overflow-x-hidden">
      {/* 3D Atmospheric Kyoto WebGL Canvas Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <LandingPageFrame
          sourceUrl="/landing-pages/kage.html?shot=4"
          title="3D Atmospheric Background"
          backgroundCanvasSelector="#gl"
          backgroundVisualSelector="#vignette, #grain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
        {/* Navigation & Back Link */}
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9aa5a0] hover:text-[#dfe7e0] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to 3D World</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#9aa5a0] hover:text-[#dfe7e0] transition-colors"
          >
            <span>View Verified Work</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e0231c]" />
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0231c]/10 border border-[#e0231c]/25 text-[#e0231c] text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] animate-pulse" />
            <span>DIRECT INTAKE & SCOPING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#dfe7e0]">
            Start your project with AC Custom Labs.
          </h1>
          <p className="text-sm sm:text-base text-[#9aa5a0] leading-relaxed">
            Fill in your project requirements below. Your details will be formatted into a structured brief and forwarded directly to lead engineering on WhatsApp.
          </p>
        </div>

        {/* Glass Form Container */}
        <form
          onSubmit={handleSendToWhatsApp}
          className="relative rounded-3xl bg-[#0a0e12]/80 backdrop-blur-xl border border-white/[0.09] shadow-2xl shadow-black/80 p-6 sm:p-10 space-y-8 overflow-hidden"
        >
          {/* Subtle top ember beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#e0231c] to-transparent opacity-70" />

          {/* Client & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#9aa5a0] block">
                Your Name <span className="text-[#e0231c]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Carter"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#e0231c]/60 focus:bg-white/[0.05] text-[#dfe7e0] placeholder-[#78837c] text-sm outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#9aa5a0] block">
                Company / Brand Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Corp / Stealth Startup"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#e0231c]/60 focus:bg-white/[0.05] text-[#dfe7e0] placeholder-[#78837c] text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Service Needed */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-[#9aa5a0] block">
              Service Needed
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setService(s)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all ${
                    service === s
                      ? "bg-[#e0231c]/15 border-[#e0231c] text-[#dfe7e0] shadow-md shadow-[#e0231c]/20"
                      : "bg-white/[0.02] border-white/[0.06] text-[#9aa5a0] hover:text-[#dfe7e0] hover:border-white/[0.14]"
                  }`}
                >
                  <span>{s}</span>
                  {service === s && <CheckCircle2 className="w-4 h-4 text-[#e0231c]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline & Budget Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#9aa5a0] block">
                Target Timeline
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`text-xs px-3.5 py-2 rounded-lg border transition-all ${
                      timeline === t
                        ? "bg-[#e0231c] text-white border-[#e0231c]"
                        : "bg-white/[0.02] text-[#9aa5a0] border-white/[0.06] hover:border-white/[0.14]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#9aa5a0] block">
                Estimated Budget Tier
              </label>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`text-xs px-3.5 py-2 rounded-lg border transition-all ${
                      budget === b
                        ? "bg-[#e0231c] text-white border-[#e0231c]"
                        : "bg-white/[0.02] text-[#9aa5a0] border-white/[0.06] hover:border-white/[0.14]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#9aa5a0] block">
              Project Overview / Key Requirements
            </label>
            <textarea
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us about the key features, reference products, user flow, or problems to solve..."
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#e0231c]/60 focus:bg-white/[0.05] text-[#dfe7e0] placeholder-[#78837c] text-sm outline-none transition-all resize-y"
            />
          </div>

          {/* Glass AI Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 shadow-xl shadow-[#e0231c]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Specular glass background layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#e0231c] via-[#ff3b2f] to-[#e0231c] opacity-95 transition-opacity" />
              <span className="absolute -inset-[1px] rounded-full border border-white/30 pointer-events-none" />
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

              {/* Pulsing Ember Orb */}
              <span className="relative z-10 flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>

              <span className="relative z-10 tracking-wide uppercase font-mono text-xs sm:text-sm">
                Send Enquiry on WhatsApp
              </span>
              <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <span className="text-xs font-mono text-[#78837c]">
              Targeting: +91 9113445763
            </span>
          </div>
        </form>

        {/* Quick Fallback Contact Bar */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9aa5a0]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#e0231c]" />
            <span>Need an instant technical chat without filling the form?</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20would%20like%20to%20chat%20directly%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#dfe7e0] border border-white/[0.08] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct WhatsApp</span>
            </a>
            <a
              href="tel:+919113445763"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#dfe7e0] border border-white/[0.08] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e0231c]" />
              <span>+91 9113445763</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
