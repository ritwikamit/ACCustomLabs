"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import HlsVideo from "@/components/ui/HlsVideo";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const roles = ["Creative", "Fullstack", "Founder", "Engineer"];

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

  // GSAP Entrance Timeline (power3.out)
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
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-bg px-4 sm:px-6 pt-24 pb-16 select-none"
    >
      {/* Background Video: HLS source, autoPlay muted loop playsInline, bg-black/20 overlay, h-48 bottom fade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HlsVideo src={HLS_URL} className="w-full h-full opacity-95" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center mt-6">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          COLLECTION &apos;26
        </p>

        {/* Name in Instrument Serif italic */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          AC Custom Labs
        </h1>

        {/* Role line */}
        <p className="blur-in text-base sm:text-lg md:text-xl text-muted mb-4 font-normal">
          <span>A </span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block text-xl sm:text-2xl md:text-3xl mx-1"
          >
            {roles[roleIndex]}
          </span>
          <span> based in India, building worldwide.</span>
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12 leading-relaxed">
          Designing digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex items-center justify-center gap-4 flex-wrap">
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

          {/* Button 2: Reach out... (Outlined) */}
          <Link
            href="/#contact"
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
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
