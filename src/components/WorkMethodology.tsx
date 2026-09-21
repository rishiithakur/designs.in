"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

export const methodologySteps = [
  {
    number: "01",
    title: "Understand",
    desc: "Understand project requirements, real-world context and the core technical problem to be solved.",
    color: "blue" as const,
  },
  {
    number: "02",
    title: "Analyse",
    desc: "Analyse available data, workflows, system architectures and technical feasibility.",
    color: "purple" as const,
  },
  {
    number: "03",
    title: "Build",
    desc: "Develop the required GIS workflow, data pipeline, automation script, dashboard or web application.",
    color: "green" as const,
  },
  {
    number: "04",
    title: "Test & Refine",
    desc: "Validate, perform end-to-end testing, verify outputs against criteria and optimize performance.",
    color: "orange" as const,
  },
  {
    number: "05",
    title: "Deliver",
    desc: "Provide structured technical documentation, manuals, deployment support and clean handover.",
    color: "blue" as const,
  },
];

export default function WorkMethodology({ className = "" }: { className?: string }) {
  return (
    <section className={`py-24 bg-[var(--acc-dim)]/50 border-y border-[var(--acc-border)] relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--acc)] font-medium text-xs mb-2.5 block tracking-wide">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight leading-[1.15]">
            Work <span className="text-gradient">Methodology.</span>
          </h2>
          <p className="text-[var(--text2)] text-base md:text-lg max-w-2xl mx-auto font-normal leading-[1.6]">
            A structured, engineering-first approach from requirement analysis to operational delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {methodologySteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <GlowCard
                glowColor={item.color}
                customSize
                className="!p-6 flex flex-col justify-between h-full rounded-3xl border border-[var(--acc-border)] bg-[var(--bg-card)]/80 backdrop-blur-xl hover:border-[var(--acc)]/40 transition-all group"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center font-mono font-bold text-sm text-[var(--acc)] group-hover:scale-110 transition-transform">
                      {item.number}
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--text2)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Phase
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--text)] group-hover:text-[var(--acc)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text2)] leading-[1.6] font-normal">
                    {item.desc}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
