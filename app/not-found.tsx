import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 tech-grid">
      <div className="max-w-md w-full bg-[#0B0B0D] border border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <span className="text-6xl font-mono font-bold text-[#FF1738]">404</span>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
            This page doesn’t exist.
          </h1>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            The link you followed may be outdated or the page has been relocated.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-md shadow-[#FF1738]/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
