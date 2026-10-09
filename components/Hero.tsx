"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import HlsVideo from "@/components/ui/HlsVideo";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-bg px-4 sm:px-6 pt-24 pb-16 select-none"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HlsVideo src={HLS_URL} className="opacity-75" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/70 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center mt-6">
        {/* Eyebrow */}
        <div className="blur-in inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-1.5 rounded-full border border-stroke bg-surface/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            STUDIO COLLECTION &apos;26 • FREELANCER-LED LAB
          </span>
        </div>

        {/* Name / Studio Title */}
        <h1 className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          AC Custom Labs
        </h1>

        {/* Role line */}
        <div className="blur-in text-base sm:text-lg md:text-xl text-text-primary/90 mb-4 font-normal">
          <span>A </span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block font-normal text-xl sm:text-2xl md:text-3xl mx-1 text-[#89AACC]"
          >
            {roles[roleIndex]}
          </span>
          <span> based in India, building worldwide.</span>
        </div>

        {/* Description (Strictly no banned words) */}
        <p className="blur-in text-sm sm:text-base text-muted max-w-xl mb-10 leading-relaxed font-normal">
          We engineer high-performance web applications, mobile platforms, and automated digital systems by focusing on the unique nuances that bring products to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* Button 1: See Works (Solid) */}
          <Link
            href="#selected-works"
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
            <span className="inline-flex items-center gap-2">
              <span>See Works</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </span>
          </Link>

          {/* Button 2: Reach out (Outlined) */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
            <span className="inline-flex items-center gap-2">
              <span>Reach out...</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
