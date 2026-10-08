import { processSteps } from "@/data/process";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#08080A] relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span>[ 04 / SYSTEMATIC METHODOLOGY ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            How we take your idea from concept to live deployment.
          </h2>
          <p className="text-base text-[#A1A1AA]">
            A clear, disciplined engineering workflow designed to eliminate guesswork,
            prevent scope drift, and ensure dependable delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#0B0B0D] border border-white/[0.06] rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between hover:border-[#FF1738]/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-bold text-[#FF1738]">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                    Phase {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-[#D4D4D8]">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.04] space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#71717A] block">
                  Phase Checkpoints
                </span>
                <ul className="space-y-1.5">
                  {step.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF1738] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
