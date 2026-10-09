"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // On root homepage, the authored landing page renders its own canvas-integrated footer
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="relative bg-[#05070a] border-t border-white/[0.08] text-[#dfe7e0] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="AC Custom Labs Home">
              <div className="relative h-9 w-36">
                <Image
                  src="/brand/logo.png"
                  alt="AC Custom Labs"
                  fill
                  sizes="150px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-[#aab4ad] leading-relaxed max-w-xs font-light">
              Independent digital product agency developing custom software,
              high-performance web platforms, and mobile apps for ambitious
              businesses worldwide.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#78837c] mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-xs font-light text-[#aab4ad]">
              <li>
                <Link href="/#pathways" className="hover:text-[#dfe7e0] transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/#pathways" className="hover:text-[#dfe7e0] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/#pathways" className="hover:text-[#dfe7e0] transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/#gate" className="hover:text-[#dfe7e0] transition-colors">
                  Selected Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Work Column */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#78837c] mb-4">
              Verified Work
            </h4>
            <ul className="space-y-3 text-xs font-light text-[#aab4ad]">
              <li>
                <a href="https://vikingsgym.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  Vikings Gym
                </a>
              </li>
              <li>
                <a href="https://bbcpro.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  BBC Pro Gym
                </a>
              </li>
              <li>
                <a href="https://reallooks.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  Real Looks Salon
                </a>
              </li>
              <li>
                <a href="https://marsremedies.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  Mars Remedies
                </a>
              </li>
              <li>
                <a href="https://bbrealestate.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  BB Real Estate
                </a>
              </li>
            </ul>
          </div>

          {/* Enquire Direct Column */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#78837c] mb-4">
              Enquire Direct
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a
                  href="https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff5a3c] hover:underline font-medium"
                >
                  WhatsApp: +91 9113445763
                </a>
              </li>
              <li>
                <a
                  href="tel:+919113445763"
                  className="text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
                >
                  Phone: +91 9113445763
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@accustomlabs.com"
                  className="text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
                >
                  contact@accustomlabs.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ritwikamit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon Base Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] tracking-[0.16em] uppercase text-[#78837c]">
          <span>© 2026 AC Custom Labs. All rights reserved.</span>
          <span>Full-Stack Software, Web & Mobile Engineering Agency</span>
          <span>Available for Client Engagements</span>
        </div>
      </div>
    </footer>
  );
}
