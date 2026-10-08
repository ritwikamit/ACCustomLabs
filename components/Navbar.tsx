"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link clicks directly

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-[#050505]/40 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1738] rounded-md py-1"
          aria-label="AC Custom Labs Homepage"
        >
          <div className="relative h-10 w-44 sm:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/brand/logo.png"
              alt="AC Custom Labs Logo"
              fill
              priority
              sizes="(max-width: 640px) 176px, 208px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with Liquid Glass Pill (Prompt 5 Reference) */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5 liquid-glass rounded-full px-3 py-1.5 shadow-inner"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-150 ${
                  isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#FF1738]/20 hover:shadow-[#FF1738]/35 border border-[#FF1738]/30"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/[0.06] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1738]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-white/[0.08] bg-[#0B0B0D] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#FF1738]/10 text-[#FF1738] border border-[#FF1738]/20"
                      : "text-[#F7F7F7] hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
