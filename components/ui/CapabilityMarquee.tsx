export default function CapabilityMarquee() {
  const capabilities = [
    "Custom Web Development",
    "UI/UX Design Systems",
    "Full-Stack TypeScript",
    "Technical SEO & AEO",
    "Vercel Cloud Deployment",
    "API & Database Design",
    "Zero-Template Architecture",
    "Production Security Hardening",
    "Ongoing Retainers & Support",
  ];

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden border-y border-white/[0.06] bg-[#08080A]/80 backdrop-blur-sm py-4 select-none group"
    >
      <div className="flex w-max animate-marquee space-x-8 group-hover:[animation-play-state:paused] motion-reduce:[animation:none] motion-reduce:flex-wrap motion-reduce:justify-center">
        {/* First track */}
        <div className="flex items-center space-x-8 text-xs font-mono tracking-widest uppercase text-zinc-400">
          {capabilities.map((cap) => (
            <div key={`cap-1-${cap}`} className="flex items-center space-x-8">
              <span className="text-zinc-300 font-medium">{cap}</span>
              <span className="text-[#FF1738] text-sm">✦</span>
            </div>
          ))}
        </div>

        {/* Duplicated track for continuous infinite looping */}
        <div className="flex items-center space-x-8 text-xs font-mono tracking-widest uppercase text-zinc-400">
          {capabilities.map((cap) => (
            <div key={`cap-2-${cap}`} className="flex items-center space-x-8">
              <span className="text-zinc-300 font-medium">{cap}</span>
              <span className="text-[#FF1738] text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
