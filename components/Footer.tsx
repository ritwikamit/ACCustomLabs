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
                <a href="https://cl8.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-medium">
                  CL8 Terminal AI ↗
                </a>
              </li>
              <li>
                <a href="https://vikingsgym.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  Vikings Gym ↗
                </a>
              </li>
              <li>
                <a href="https://marsremedies.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfe7e0] transition-colors">
                  Mars Remedies ↗
                </a>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#dfe7e0] transition-colors">
                  All Works Archive (/work) →
                </Link>
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
                  className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1.5"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366"><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.95L2 22l5.22-1.28A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.82 14.15c-.24.68-1.21 1.24-1.95 1.34-.51.07-1.18.1-3.41-.83-2.86-1.19-4.7-4.12-4.84-4.31-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.36c.26-.28.58-.35.78-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.44.29.15.46.13.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.26.1 1.68.79 1.97.94.29.15.48.22.56.34.07.12.07.7-.17 1.38z"/></svg>
                  <span>WhatsApp: +91 9113445763</span>
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
                  href="mailto:accustomlabs@gmail.com"
                  className="text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
                >
                  accustomlabs@gmail.com
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
          <span>Designed and Developed by Team · AC Custom Labs</span>
          <span>Full-Stack Software, Web &amp; Mobile Engineering Agency</span>
          <span>Available for Client Engagements</span>
        </div>
      </div>
    </footer>
  );
}
