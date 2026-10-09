"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LandingPageFrame } from "@/src/shaders/landing-pages/LandingPageFrame";
import Lenis from "lenis";

const SERVICES = [
  "Custom Software",
  "Web Application (Next.js)",
  "Mobile App (iOS/Android)",
  "Interactive 3D / WebGL",
] as const;

const TIMELINES = [
  "Immediate (< 2 wks)",
  "1 Month",
  "2-3 Months",
  "Flexible",
] as const;

const BUDGETS = [
  "Under ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹6L",
  "Custom / Enterprise",
] as const;

export default function EnquirePage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>(SERVICES[1]);
  const [timeline, setTimeline] = useState<string>(TIMELINES[1]);
  const [budget, setBudget] = useState<string>(BUDGETS[1]);
  const [details, setDetails] = useState("");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.25,
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
• *Contact:* ${phone.trim() || "Not provided"} ${email.trim() ? `(${email.trim()})` : ""}
• *Service Needed:* ${service}
• *Target Timeline:* ${timeline}
• *Estimated Budget:* ${budget}
• *Project Details:*
${details.trim() || "I would like to discuss scoping, architecture, and timeline for this build."}`;

    const waUrl = `https://wa.me/919113445763?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-[#05070a] text-[#dfe7e0] font-sans overflow-x-hidden pt-28 pb-24">
      {/* 3D Kyoto Temple Atmospheric WebGL Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
        <LandingPageFrame
          sourceUrl="/landing-pages/kage.html?shot=4"
          title="3D Atmospheric Background"
          backgroundCanvasSelector="#gl"
          backgroundVisualSelector="#vignette, #grain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header Section */}
        <div className="space-y-6 max-w-2xl">
          <div className="sec-head">
            <span className="k">
              <b>04</b> // Project Initiation
            </span>
            <span className="jp text-xs tracking-[0.3em] text-[#78837c]">問合せ // 04</span>
            <i className="rule" />
          </div>

          <h1 className="display text-3xl sm:text-5xl lg:text-6xl text-[#dfe7e0]">
            Have a project in mind? Let&apos;s build it.
          </h1>

          <p className="text-sm sm:text-base text-[#aab4ad] font-light leading-relaxed">
            Connect directly with our lead developer on WhatsApp for project scoping, quotes, and delivery timelines. Fill out your details below to generate an instant technical brief.
          </p>
        </div>

        {/* Kyoto Architectural Intake Form Plate */}
        <form
          onSubmit={handleSendToWhatsApp}
          className="relative bg-[#0a0e12]/80 backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.18] rounded-2xl p-6 sm:p-12 space-y-10 shadow-2xl shadow-black/80 transition-all"
        >
          {/* Section 01: Client Details */}
          <div className="space-y-4">
            <div className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#78837c] pb-2 border-b border-white/[0.06]">
              01 // Client Information
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-[#05070a]/80 border border-white/[0.09] focus:border-[#e0231c] focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#dfe7e0] placeholder-[#78837c] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp / Stealth"
                  className="w-full bg-[#05070a]/80 border border-white/[0.09] focus:border-[#e0231c] focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#dfe7e0] placeholder-[#78837c] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91..."
                  className="w-full bg-[#05070a]/80 border border-white/[0.09] focus:border-[#e0231c] focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#dfe7e0] placeholder-[#78837c] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-[#05070a]/80 border border-white/[0.09] focus:border-[#e0231c] focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#dfe7e0] placeholder-[#78837c] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 02: Classification */}
          <div className="space-y-6">
            <div className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#78837c] pb-2 border-b border-white/[0.06]">
              02 // Project Classification
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                Primary Discipline Needed
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    className={`text-[10px] font-medium tracking-[0.14em] uppercase px-3.5 py-2 rounded-full transition-all border ${
                      service === s
                        ? "bg-[#dfe7e0] text-[#05070a] border-[#dfe7e0]"
                        : "bg-white/[0.02] text-[#aab4ad] hover:text-[#dfe7e0] border-white/[0.08]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                Target Timeline
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`text-[10px] font-medium tracking-[0.14em] uppercase px-3.5 py-2 rounded-full transition-all border ${
                      timeline === t
                        ? "bg-[#dfe7e0] text-[#05070a] border-[#dfe7e0]"
                        : "bg-white/[0.02] text-[#aab4ad] hover:text-[#dfe7e0] border-white/[0.08]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#aab4ad] block">
                Estimated Budget Bracket
              </label>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`text-[10px] font-medium tracking-[0.14em] uppercase px-3.5 py-2 rounded-full transition-all border ${
                      budget === b
                        ? "bg-[#dfe7e0] text-[#05070a] border-[#dfe7e0]"
                        : "bg-white/[0.02] text-[#aab4ad] hover:text-[#dfe7e0] border-white/[0.08]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 03: Brief Scope */}
          <div className="space-y-2">
            <div className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#78837c] pb-2 border-b border-white/[0.06]">
              03 // Project Scope & Objectives
            </div>
            <textarea
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Outline what you want to build, existing references, technical preferences, or specific goals..."
              className="w-full bg-[#05070a]/80 border border-white/[0.09] focus:border-[#e0231c] focus:outline-none rounded-lg p-3.5 text-xs text-[#dfe7e0] placeholder-[#78837c] transition-colors leading-relaxed"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.07]">
            {/* Glass AI Submit CTA Button */}
            <button
              type="submit"
              className="nav-enquire py-3 px-6 text-xs text-[#dfe7e0] cursor-pointer"
            >
              <span className="orb" aria-hidden="true" />
              <span>Send Enquiry to WhatsApp (+91 9113445763)</span>
              <svg viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11 11 3M5 3h6v6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </button>

            <span className="text-[10px] tracking-[0.16em] uppercase text-[#78837c]">
              Direct Technical Scoping • No Middlemen
            </span>
          </div>
        </form>

        {/* Direct Channels Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/[0.08]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#78837c] block mb-1">
              Direct WhatsApp
            </span>
            <a
              href="https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="arrowlink text-xs text-[#ff5a3c]"
            >
              <span>+91 9113445763</span>
              <span className="ar">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#78837c] block mb-1">
              Direct Phone Call
            </span>
            <a href="tel:+919113445763" className="arrowlink text-xs">
              <span>+91 9113445763</span>
              <span className="ar">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#78837c] block mb-1">
              Email Scoping
            </span>
            <a href="mailto:contact@accustomlabs.com" className="arrowlink text-xs">
              <span>contact@accustomlabs.com</span>
              <span className="ar">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
