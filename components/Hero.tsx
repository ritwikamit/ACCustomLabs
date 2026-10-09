"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import HlsVideo from "@/components/ui/HlsVideo";
import RetroGrid from "@/components/ui/RetroGrid";
import Magnet from "@/components/ui/Magnet";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";

const roles = [
  "Digital Product Studio",
  "Full-Stack Engineering Team",
  "Custom Web & App Lab",
  "Modern Creative Studio",
];

const HLS_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Role cycling every 2000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-bg px-4 sm:px-6 pt-28 pb-16 select-none"
    >
      {/* Background 1: HLS Streaming Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HlsVideo src={HLS_URL} className="opacity-60" />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
      </div>

      {/* Background 2: 21st.dev Perspective 3D Grid */}
      <RetroGrid angle={62} className="opacity-25" />

      {/* Top red glow atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 red-horizon-glow pointer-events-none" />

      {/* Bottom fade into background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/70 to-transparent pointer-events-none" />

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center mt-4">
        {/* Eyebrow */}
        <div className="blur-in inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-1.5 rounded-full border border-stroke bg-surface/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738] animate-pulse" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-mono">
            STUDIO COLLECTION &apos;26 • FREELANCER-LED LAB
          </span>
        </div>

        {/* Name / Studio Title in Instrument Serif italic */}
        <h1 className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          AC Custom Labs
        </h1>

        {/* Role line cycling */}
        <div className="blur-in text-base sm:text-lg md:text-xl text-text-primary/90 mb-4 font-normal">
          <span>A </span>
          <span
            key={roleIndex}
            className="font-display italic text-[#89AACC] animate-role-fade-in inline-block text-xl sm:text-2xl md:text-3xl mx-1"
          >
            {roles[roleIndex]}
          </span>
          <span> based in India, building worldwide.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm sm:text-base text-muted max-w-xl mb-10 leading-relaxed font-normal">
          We engineer high-performance web applications, mobile platforms, and automated digital systems by focusing on the unique nuances that bring products to life.
        </p>

        {/* CTA Buttons with Magnetic Spring Interaction */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Button 1: See Works (Solid) */}
          <Magnet strength={12}>
            <Link
              href="#selected-works"
              className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-8 py-4 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105"
            >
              <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
              <span className="inline-flex items-center gap-2">
                <span>See Works</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </span>
            </Link>
          </Magnet>

          {/* Button 2: Reach out (Outlined) */}
          <Magnet strength={12}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-8 py-4 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
            >
              <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
              <span className="inline-flex items-center gap-2">
                <span>Reach out...</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Magnet>
        </div>

        {/* Verified Live Client Strip */}
        <div className="blur-in pt-6 border-t border-stroke/40 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-muted">
          <span className="uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-text-primary">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active live deployments:</span>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { name: "Vikings Gym & Spa", href: "https://vikingsgym.in" },
              { name: "BBC Pro Gym", href: "https://bbcpro.vercel.app" },
              { name: "Real Looks Salon", href: "https://reallooks.vercel.app" },
              { name: "Mars Remedies", href: "https://marsremedies.co.in" },
              { name: "BB Real Estate", href: "https://bbrealestate.vercel.app" },
            ].map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full border border-stroke bg-surface/60 hover:bg-surface hover:border-stroke/80 text-muted hover:text-text-primary transition-colors"
              >
                {client.name} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium font-mono">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
