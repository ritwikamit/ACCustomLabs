"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const BUSINESS_TYPES = [
  "Local Business",
  "Startup",
  "Influencer / Personal Brand",
  "Real Estate",
  "Healthcare",
  "Fitness",
  "Salon / Beauty",
  "Restaurant",
  "Education",
  "Professional Service",
  "Other",
];

export const SERVICE_OPTIONS = [
  "Website",
  "Web App",
  "Mobile App",
  "UI/UX Design",
  "Backend & API",
  "Database",
  "SEO / AEO / GEO",
  "AI & Automation",
  "Maintenance & Care",
  "Domain & Hosting",
  "Other",
];

export const BUDGET_RANGES = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1 Lakh",
  "₹1 – ₹3 Lakh",
  "₹3 – ₹5 Lakh",
  "₹5 Lakh+",
  "Not Sure",
];

export const TIMELINES = [
  "ASAP",
  "1–2 weeks",
  "2–4 weeks",
  "1–2 months",
  "2+ months",
  "Not sure",
];

export default function ProjectEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    businessType: "Local Business",
    selectedServices: ["Website"] as string[],
    budget: "₹25,000 – ₹50,000",
    timeline: "2–4 weeks",
    message: "",
    websiteUrl: "", // Honeypot field for bot protection
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      if (exists) {
        // Keep at least one selected or allow empty
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out your Name, Email, Phone/WhatsApp, and Project Message.");
      return;
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit project brief.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while submitting. Please try again or reach out to contact@accustomlabs.com directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#0B0B0D] border border-white/[0.1] rounded-2xl p-8 sm:p-12 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
            Project Brief Received
          </h3>
          <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-medium">{formData.name}</span>.
            We have received your requirements and will review them thoroughly before reaching out.
          </p>
        </div>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                brand: "",
                email: "",
                phone: "",
                businessType: "Local Business",
                selectedServices: ["Website"],
                budget: "₹25,000 – ₹50,000",
                timeline: "2–4 weeks",
                message: "",
                websiteUrl: "",
              });
            }}
            className="text-xs font-semibold text-[#FF1738] hover:text-[#FF3350] underline"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0B0B0D] border border-white/[0.08] rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl shadow-black/80"
    >
      {/* Honeypot field (hidden from real users, caught by spam bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Leave this blank</label>
        <input
          type="text"
          id="websiteUrl"
          name="websiteUrl"
          tabIndex={-1}
          autoComplete="off"
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
        />
      </div>

      {/* Row 1: Name and Business/Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-mono uppercase text-[#D4D4D8] block">
            Your Name <span className="text-[#FF1738]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="brand" className="text-xs font-mono uppercase text-[#D4D4D8] block">
            Business / Brand Name
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            maxLength={100}
            placeholder="e.g. Sharma Clinic / Apex Studio"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email and Phone/WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-mono uppercase text-[#D4D4D8] block">
            Email Address <span className="text-[#FF1738]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={120}
            placeholder="e.g. rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-mono uppercase text-[#D4D4D8] block">
            Phone / WhatsApp <span className="text-[#FF1738]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Business Type */}
      <div className="space-y-2">
        <label htmlFor="businessType" className="text-xs font-mono uppercase text-[#D4D4D8] block">
          Business Category
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
        >
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type} className="bg-[#111114] text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Services Needed Pills */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase text-[#D4D4D8] block">
          Services Needed (Select all that apply)
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = formData.selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`text-xs px-3.5 py-2 rounded-lg font-medium transition-colors border ${
                  isSelected
                    ? "bg-[#FF1738] text-white border-[#FF1738]"
                    : "bg-[#111114] text-[#A1A1AA] hover:text-white border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 5: Budget and Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="budget" className="text-xs font-mono uppercase text-[#D4D4D8] block">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range} className="bg-[#111114] text-white">
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="timeline" className="text-xs font-mono uppercase text-[#D4D4D8] block">
            Target Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
          >
            {TIMELINES.map((time) => (
              <option key={time} value={time} className="bg-[#111114] text-white">
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Project Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-mono uppercase text-[#D4D4D8] block">
          Project Details / Goals <span className="text-[#FF1738]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder="Tell us what you are aiming to build, key features required, any existing links, or problems you need solved..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#111114] border border-white/[0.08] focus:border-[#FF1738] rounded-xl px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Error alert */}
      {status === "error" && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-[#FF1738]/10 border border-[#FF1738]/30 text-xs text-[#FF8596]">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#FF1738]" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] active:scale-[0.99] disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#FF1738]/20 border border-[#FF1738]/40"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Project Brief...</span>
            </>
          ) : (
            <>
              <span>Send Project Brief</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-center text-[11px] text-[#71717A] mt-3">
          Zero obligation. We will review your brief and reply with honest technical recommendations.
        </p>
      </div>
    </form>
  );
}
