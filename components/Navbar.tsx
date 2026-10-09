"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-1.5 sm:py-2 transition-all duration-300 ${
          scrolled
            ? "shadow-lg shadow-black/40 border-white/15 bg-surface/95"
            : "shadow-md shadow-black/10"
        }`}
      >
        {/* 1. Logo: 9x9 (w-9 h-9) circle with accent gradient border */}
        <Link
          href="/"
          className="group relative flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-none"
          aria-label="AC Custom Labs Home"
        >
          <div className="absolute inset-0 rounded-full accent-gradient p-[1.5px] transition-transform duration-500 group-hover:rotate-180">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-text-primary text-[14px] font-bold tracking-tight">
                AC
              </span>
            </div>
          </div>
        </Link>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5 sm:mx-2 hidden sm:block" />

        {/* 3. Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs sm:text-sm font-medium rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                  isActive
                    ? "text-text-primary bg-stroke/60 font-semibold"
                    : "text-muted hover:text-text-primary hover:bg-stroke/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5 sm:mx-2" />

        {/* 5. "Say hi" / Contact Button */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center rounded-full text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary transition-all duration-300 hover:scale-105"
        >
          {/* Animated gradient border behind on hover */}
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
          <span className="relative z-10 inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 backdrop-blur-md">
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </nav>
    </header>
  );
}
