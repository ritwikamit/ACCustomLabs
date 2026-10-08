import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
  angle?: number;
}

export default function RetroGrid({
  className,
  angle = 65,
}: RetroGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-40 [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* 3D Grid Plane */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))] origin-top">
        <div
          className={cn(
            "animate-grid-flow",
            "[background-repeat:repeat] [background-size:50px_50px]",
            "[height:300vh] [inset:0%_0px] [margin-left:-50%] [width:200vw]",
            "[background-image:linear-gradient(to_right,rgba(255,23,56,0.12)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Atmospheric radial gradient mask - fades smoothly into #050505 background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-90" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#050505]/60 to-[#050505]" />
    </div>
  );
}
