"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // If on homepage, the Section 7 ContactFooter handles the footer experience
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle top red glow horizon line echoing logo curve */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#FF1738] to-transparent opacity-80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-[#FF1738]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Studio Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block" aria-label="AC Custom Labs Home">
              <div className="relative h-11 w-52">
                <Image
                  src="/brand/logo.png"
                  alt="AC Custom Labs Logo"
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
              An independent, freelancer-led digital product studio with a working team.
              We design, build, deploy, and scale websites, web apps, mobile applications,
              and SEO systems engineered specifically around your business.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#A1A1AA] bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-[#FF1738] shrink-0" />
              <span>Full lifecycle ownership: Strategy → Design → Code → Cloud Deployment.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              <li>
                <Link href="/services#websites-web-apps" className="hover:text-white transition-colors">
                  Websites & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services#apps-software" className="hover:text-white transition-colors">
                  Apps & Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux-design" className="hover:text-white transition-colors">
                  UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services#seo-aeo-geo" className="hover:text-white transition-colors">
                  Technical SEO, AEO & GEO
                </Link>
              </li>
              <li>
                <Link href="/services#deployment-infrastructure" className="hover:text-white transition-colors">
                  Vercel Cloud Deployment
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Enquiries */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Direct Intake</h3>
            <div className="space-y-3 text-sm text-[#A1A1AA]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#FF1738] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF1738]" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#FF1738] transition-colors font-medium"
              >
                <ArrowUpRight className="w-4 h-4 text-[#FF1738]" />
                <span>WhatsApp: +91 9113445763</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF1738] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {currentYear} AC Custom Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <span>Custom Engineering. Zero Templates.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
