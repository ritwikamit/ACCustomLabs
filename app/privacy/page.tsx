import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AC Custom Labs visitors and prospective clients.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3 border-b border-white/[0.08] pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#A1A1AA]">Last updated: October 2026</p>
      </div>

      <div className="space-y-8 text-sm text-[#D4D4D8] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            1. Information We Collect
          </h2>
          <p>
            When you submit a project enquiry on our website, we collect the contact details you voluntarily provide: your name, business name, email address, phone number, and project details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information exclusively to evaluate your project scope, prepare technical proposals, communicate with you regarding your enquiry, and coordinate digital product delivery. We never sell, rent, or trade your contact information with third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            3. Data Security & Storage
          </h2>
          <p>
            We apply industry-standard security measures to safeguard your submissions against unauthorized access, loss, or alteration. All web communications are transmitted securely over HTTPS/TLS encryption.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            4. Cookies & Analytics
          </h2>
          <p>
            Our website uses minimal, privacy-conscious analytics to understand aggregate traffic trends and improve user experience. We do not use intrusive cross-site advertising trackers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to request the deletion of your enquiry data, please contact us directly at <span className="text-[#FF1738]">accustomlabs@gmail.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
