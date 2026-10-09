"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // On the root landing page, kage.html renders its own authored header
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12 bg-[#05070a]/75 backdrop-blur-md border-b border-white/[0.07] transition-all">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3.5 group">
        <div className="relative h-9 w-28 sm:w-36">
          <Image
            src="/brand/logo.png"
            alt="AC Custom Labs"
            fill
            sizes="150px"
            className="object-contain object-left transition-opacity group-hover:opacity-90"
            priority
          />
        </div>
        <div className="hidden sm:flex flex-col pl-3 border-l border-white/[0.12] leading-tight">
          <b className="text-[11px] font-medium tracking-[0.2em] text-[#dfe7e0] uppercase">
            AC Custom Labs
          </b>
          <span className="text-[8px] font-light tracking-[0.26em] text-[#78837c] uppercase">
            Digital Product Studio
          </span>
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10">
        <Link
          href="/"
          className="group relative text-[11px] font-medium tracking-[0.2em] uppercase text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
        >
          <span>Index</span>
          <span className="ml-1 text-[9px] text-[#78837c]">00</span>
        </Link>

        <Link
          href="/work"
          className={`group relative text-[11px] font-medium tracking-[0.2em] uppercase transition-colors ${
            pathname === "/work"
              ? "text-[#dfe7e0] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[#e0231c]"
              : "text-[#aab4ad] hover:text-[#dfe7e0]"
          }`}
        >
          <span>Work</span>
          <span className="ml-1 text-[9px] text-[#78837c]">01</span>
        </Link>

        <Link
          href="/#pathways"
          className="group relative text-[11px] font-medium tracking-[0.2em] uppercase text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
        >
          <span>Capabilities</span>
          <span className="ml-1 text-[9px] text-[#78837c]">02</span>
        </Link>

        <Link
          href="/#lessons"
          className="group relative text-[11px] font-medium tracking-[0.2em] uppercase text-[#aab4ad] hover:text-[#dfe7e0] transition-colors"
        >
          <span>Disciplines</span>
          <span className="ml-1 text-[9px] text-[#78837c]">03</span>
        </Link>

        {/* Glass AI Enquire Button */}
        <Link href="/enquire" className="nav-enquire">
          <span className="orb" aria-hidden="true" />
          <span>Enquire</span>
          <svg viewBox="0 0 14 14" fill="none" width="11" height="11">
            <path
              d="M3 11 11 3M5 3h6v6"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
        </Link>
      </nav>

      {/* Mobile Right Controls */}
      <div className="flex md:hidden items-center gap-3">
        <Link href="/enquire" className="nav-enquire scale-90">
          <span className="orb" aria-hidden="true" />
          <span>Enquire</span>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[#dfe7e0] hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#05070a]/95 backdrop-blur-2xl border-b border-white/[0.1] px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-xs font-mono uppercase tracking-[0.2em] text-[#aab4ad] hover:text-[#dfe7e0] py-2 border-b border-white/[0.05]"
          >
            Index // 00
          </Link>
          <Link
            href="/work"
            onClick={() => setMobileOpen(false)}
            className="text-xs font-mono uppercase tracking-[0.2em] text-[#dfe7e0] py-2 border-b border-white/[0.05]"
          >
            Work // 01
          </Link>
          <Link
            href="/#pathways"
            onClick={() => setMobileOpen(false)}
            className="text-xs font-mono uppercase tracking-[0.2em] text-[#aab4ad] hover:text-[#dfe7e0] py-2 border-b border-white/[0.05]"
          >
            Capabilities // 02
          </Link>
          <Link
            href="/#lessons"
            onClick={() => setMobileOpen(false)}
            className="text-xs font-mono uppercase tracking-[0.2em] text-[#aab4ad] hover:text-[#dfe7e0] py-2 border-b border-white/[0.05]"
          >
            Disciplines // 03
          </Link>
          <Link
            href="/enquire"
            onClick={() => setMobileOpen(false)}
            className="cta mt-2 justify-center"
          >
            <i />
            <span>Project Enquiry</span>
          </Link>
        </div>
      )}
    </header>
  );
}
