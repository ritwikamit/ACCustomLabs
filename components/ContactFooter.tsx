"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import HlsVideo from "@/components/ui/HlsVideo";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const HLS_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const marqueeText = "BUILDING THE FUTURE • ";

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // GSAP Marquee: xPercent: -50, duration: 40, ease: "none", repeat: -1
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-20 md:pt-28 pb-10 md:pb-14 overflow-hidden border-t border-stroke/40">
      {/* Background Video flipped vertically with heavier dark overlay: bg-black/60 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HlsVideo src={HLS_URL} flipped className="w-full h-full opacity-90" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center mb-16">
        {/* GSAP Marquee Container (repeated 10x) */}
        <div className="w-full overflow-hidden whitespace-nowrap mb-12 sm:mb-16 py-3 border-y border-stroke/50 bg-surface/30 backdrop-blur-sm">
          <div ref={marqueeRef} className="inline-flex will-change-transform">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-mono tracking-[0.25em] text-muted uppercase px-4"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display italic text-text-primary mb-6 max-w-3xl leading-[1.05]">
          Have an ambitious project in mind? <br />
          <span className="text-[#89AACC]">Let&apos;s build it right.</span>
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-lg mb-10 leading-relaxed font-normal">
          Whether you need a full-scale web application, a local business digital flagship, or a custom internal platform, we are ready to build.
        </p>

        {/* CTA Email Button with gradient hover border ring */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="mailto:ritwikamit700@gmail.com"
            className="group relative inline-flex items-center rounded-full text-sm font-medium px-8 py-4 text-text-primary transition-all duration-300 hover:scale-105"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
            <span className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-surface px-6 py-2.5 border border-stroke">
              <Mail className="w-4 h-4 text-[#89AACC]" />
              <span className="font-mono text-xs sm:text-sm">ritwikamit700@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-7 py-3.5 bg-text-primary text-bg hover:bg-neutral-200 transition-all duration-200 hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke/50 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Availability indicator */}
        <div className="flex items-center gap-2.5 text-xs text-muted font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for projects in Q2 2026</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xs text-muted font-medium">
          {siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted font-mono">
          © {new Date().getFullYear()} AC Custom Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
