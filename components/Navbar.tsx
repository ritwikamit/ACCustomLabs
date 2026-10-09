"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Home", targetId: "hero" },
  { href: "/#selected-works", label: "Work", targetId: "selected-works" },
  { href: "/#journal", label: "Journal", targetId: "journal" },
  { href: "/#explorations", label: "Explorations", targetId: "explorations" },
  { href: "/#stats", label: "Stats", targetId: "stats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      if (pathname === "/") {
        const ids = ["hero", "selected-works", "journal", "explorations", "stats", "contact"];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
        setActiveSection(targetId);
      }
    }
    setMobileOpen(false);
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-3 py-2 transition-all duration-300 ${
          scrolled ? "shadow-md shadow-black/20 border-white/20 bg-surface/95" : ""
        }`}
      >
        {/* 1. Official Logo (Kept as before) */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center pr-2 pl-1 py-0.5 focus-visible:outline-none"
          aria-label="AC Custom Labs Homepage"
        >
          <div className="relative h-7 w-28 sm:h-8 sm:w-36 transition-transform duration-200 group-hover:scale-[1.03]">
            <Image
              src="/brand/logo.png"
              alt="AC Custom Labs Logo"
              fill
              priority
              sizes="144px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5 hidden md:block" />

        {/* 3. Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === "/" && activeSection === link.targetId;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                  isActive
                    ? "text-text-primary bg-stroke/60 font-semibold"
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5" />

        {/* 5. Glass AI Enquire Tab */}
        <Link
          href="/enquire"
          className="group relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white bg-[#0a0e12]/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/60 hover:border-[#e0231c]/60 transition-all duration-300 hover:scale-105"
        >
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#e0231c] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e0231c]" />
          </span>
          <span>Enquire</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#e0231c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-1 p-1.5 rounded-full text-muted hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl bg-surface border border-stroke p-4 shadow-2xl flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.targetId)}
              className="text-sm px-4 py-2.5 rounded-xl text-text-primary hover:bg-stroke/40"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
