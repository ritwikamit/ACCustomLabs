import Link from "next/link";
import { Dumbbell, Scissors, Stethoscope, Utensils, Building2, GraduationCap, Briefcase, UserCheck } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Dumbbell,
      name: "Gyms & Fitness Centers",
      examples: "Membership portals, timetable showcases, WhatsApp leads, tour booking",
      provenIn: "Vikings Gym & Spa, BBC Pro Gym",
    },
    {
      icon: Scissors,
      name: "Salons & Luxury Grooming",
      examples: "Service menus, pricing tiers, online appointment scheduling, bridal catalogs",
      provenIn: "Real Looks Unisex Salon",
    },
    {
      icon: Stethoscope,
      name: "Healthcare & Pharmaceuticals",
      examples: "Formulation catalogs, doctor profiles, clinic appointment workflows, compliance",
      provenIn: "Mars Remedies",
    },
    {
      icon: Building2,
      name: "Real Estate & Developers",
      examples: "Plot layout showcases, verified land documents, direct agent consultation",
      provenIn: "BB Real Estate",
    },
    {
      icon: Utensils,
      name: "Restaurants & Hospitality",
      examples: "Digital QR menus, table reservations, location map signals, event inquiry",
      provenIn: "Hospitality & Local Dining",
    },
    {
      icon: GraduationCap,
      name: "Education & Academies",
      examples: "Course catalogs, student lead generation, admission inquiries, faculty portfolios",
      provenIn: "Coaching & Training Centers",
    },
    {
      icon: Briefcase,
      name: "Professional Services",
      examples: "Consulting portals, legal/financial advisors, B2B inquiry qualification",
      provenIn: "Independent Practices",
    },
    {
      icon: UserCheck,
      name: "Personal Brands & Founders",
      examples: "Executive portfolios, speaking inquiry pages, newsletter signups, bio flagships",
      provenIn: "Creators & Entrepreneurs",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span>[ 05 / INDUSTRIES & CLIENT TYPES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            Tailored digital solutions across industries.
          </h2>
          <p className="text-base text-[#A1A1AA]">
            Whether you operate a premier local establishment or a scaling enterprise,
            we build bespoke digital flagships that respect your industry context.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-[#0B0B0D] border border-white/[0.06] hover:border-white/[0.14] rounded-2xl p-6 space-y-4 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-[family-name:var(--font-display)]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.examples}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] text-[11px] font-mono text-[#71717A]">
                  <span className="text-[#FF1738]/80 block mb-0.5">Verified Experience:</span>
                  <span>{item.provenIn}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white">Don’t see your exact business category?</h4>
            <p className="text-xs text-[#A1A1AA]">
              Our engineering foundation is completely custom. We build around your unique workflow needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-xs font-semibold bg-[#FF1738] hover:bg-[#FF3350] text-white px-5 py-2.5 rounded-full transition-colors"
          >
            Discuss Your Custom Requirements →
          </Link>
        </div>
      </div>
    </section>
  );
}
