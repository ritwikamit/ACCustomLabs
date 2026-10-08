import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Terms and conditions governing projects and services provided by AC Custom Labs.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3 border-b border-white/[0.08] pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
          Terms of Engagement
        </h1>
        <p className="text-sm text-[#A1A1AA]">Last updated: October 2026</p>
      </div>

      <div className="space-y-8 text-sm text-[#D4D4D8] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            1. Scope of Work
          </h2>
          <p>
            All custom design, software engineering, website development, and SEO engagements are governed by mutually confirmed written project milestones, deliverables, and timelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            2. Intellectual Property & Ownership
          </h2>
          <p>
            Upon full settlement of agreed project milestone invoices, the client receives full ownership of the custom code, design assets, and content created specifically for their project. Open-source libraries and frameworks remain subject to their respective MIT/Apache licenses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            3. Milestone Payments & Retainers
          </h2>
          <p>
            Projects typically operate on structured phased milestones (e.g., discovery/design deposit, development milestone, and pre-deployment balance). Ongoing maintenance agreements operate on monthly or quarterly retainers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            4. Third-Party Services
          </h2>
          <p>
            Clients are responsible for their direct third-party hosting, domain registrar, and external API subscriptions (e.g., Vercel, Cloudflare, payment gateways, Google Workspace), which we assist in configuring securely.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            5. Inquiries
          </h2>
          <p>
            For any contractual or engagement inquiries, please reach out directly to <span className="text-[#FF1738]">contact@accustomlabs.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
