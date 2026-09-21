"use client";

import { Globe, Cpu, Database, Layers, Monitor, ShieldCheck } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

export interface CapabilityItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  color: "blue" | "purple" | "green" | "orange";
}

export const capabilitiesData: CapabilityItem[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "GIS & Geospatial",
    desc: "ArcGIS Pro mapping, spatial analysis, raster workflows and land-use classification.",
    tag: "Core Focus",
    color: "blue",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Remote Sensing & GEE",
    desc: "Google Earth Engine tools, ET estimation, water body delineation and irrigation analytics.",
    tag: "Remote Sensing",
    color: "green",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Python & Data",
    desc: "Automated data pipelines, PostgreSQL/SQL processing, and Jupyter technical analysis.",
    tag: "Data Engineering",
    color: "purple",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "AI & Automation",
    desc: "AI-assisted technical development, workflow automation, and custom API integration.",
    tag: "AI Workflows",
    color: "blue",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Dashboards & MIS",
    desc: "Institutional MIS platforms, DRIP-II, DHARMA, STEP, and interactive decision dashboards.",
    tag: "Systems & MIS",
    color: "orange",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Web & Digital Systems",
    desc: "Modern web applications, institutional digital tools, and technical UI/UX systems.",
    tag: "Digital Solutions",
    color: "purple",
  },
];

export default function CapabilitiesSection({ className = "" }: { className?: string }) {
  return (
    <section className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      <div className="text-center mb-14">
        <span className="text-[var(--acc)] font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
          What I Work With
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-4 tracking-tight">
          Capabilities &amp; <span className="text-gradient">Technical Focus.</span>
        </h2>
        <p className="text-[var(--text2)] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Focused technical skill areas across GIS, remote sensing, data processing, automation, and institutional systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilitiesData.map((item, index) => (
          <GlowCard
            key={index}
            glowColor={item.color}
            customSize
            className="!p-6 flex flex-col justify-between rounded-3xl border border-[var(--acc-border)] bg-[var(--bg-card)]/80 backdrop-blur-xl hover:border-[var(--acc)]/40 transition-all group"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center text-[var(--acc)] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--text2)]">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] mb-2 group-hover:text-[var(--acc)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text2)] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
