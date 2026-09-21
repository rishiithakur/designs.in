"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WorkMethodology from "@/components/WorkMethodology";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Layers, 
  MapPin, 
  Code2, 
  Database, 
  Server, 
  Terminal, 
  BarChart3, 
  AppWindow, 
  Monitor, 
  Webhook, 
  Sparkles 
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

interface TechItem {
  icon: React.ReactNode;
  name: string;
  category: string;
  desc: string;
  color: "blue" | "purple" | "green" | "orange";
}

const techStack: TechItem[] = [
  { 
    icon: <Globe className="w-5 h-5" />,
    name: "ArcGIS Pro", 
    category: "GIS & Spatial",
    desc: "Spatial modeling, cartography, geoprocessing and raster classification.",
    color: "blue"
  },
  { 
    icon: <Layers className="w-5 h-5" />,
    name: "Google Earth Engine", 
    category: "Remote Sensing",
    desc: "Satellite analytics, ET estimation, water persistence & cloud workflows.",
    color: "green"
  },
  { 
    icon: <MapPin className="w-5 h-5" />,
    name: "QGIS", 
    category: "Spatial Analysis",
    desc: "Open-source geospatial workflows, vector processing and custom plugins.",
    color: "purple"
  },
  { 
    icon: <Code2 className="w-5 h-5" />,
    name: "Python", 
    category: "Automation & Data",
    desc: "Automated data ETL, GeoPandas, NumPy and spatial pipeline scripts.",
    color: "blue"
  },
  { 
    icon: <Database className="w-5 h-5" />,
    name: "PostgreSQL / PostGIS", 
    category: "Spatial Database",
    desc: "Spatial SQL queries, geometry indexing and relational datasets.",
    color: "purple"
  },
  { 
    icon: <Server className="w-5 h-5" />,
    name: "SQL & MySQL", 
    category: "Data Management",
    desc: "Structured query pipelines and institutional database schemas.",
    color: "blue"
  },
  { 
    icon: <Terminal className="w-5 h-5" />,
    name: "Jupyter Notebooks", 
    category: "Analysis & Pipelines",
    desc: "Interactive analysis, reproducible data notebooks and technical reporting.",
    color: "orange"
  },
  { 
    icon: <BarChart3 className="w-5 h-5" />,
    name: "Power BI", 
    category: "Dashboards",
    desc: "Telemetry monitoring, business intelligence metrics and executive visual reports.",
    color: "orange"
  },
  { 
    icon: <AppWindow className="w-5 h-5" />,
    name: "Esri Web Apps", 
    category: "Spatial Portals",
    desc: "Experience Builder, Web AppBuilder and stakeholder interactive portals.",
    color: "blue"
  },
  { 
    icon: <Monitor className="w-5 h-5" />,
    name: "Next.js & React", 
    category: "Digital Systems",
    desc: "High-performance web applications, modern UI and responsive dashboards.",
    color: "purple"
  },
  { 
    icon: <Webhook className="w-5 h-5" />,
    name: "REST APIs", 
    category: "Integration",
    desc: "Multi-system synchronization, endpoint connectors and webhooks.",
    color: "green"
  },
  { 
    icon: <Sparkles className="w-5 h-5" />,
    name: "AI Automation", 
    category: "Workflow Automation",
    desc: "AI-assisted scripting, prompt engineering and rapid technical prototyping.",
    color: "blue"
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen text-[var(--text)] bg-[var(--bg)]">
      <Navbar />

      <BeamsBackground className="pt-20">
        <section className="pt-20 pb-12 px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#38bdf8] font-medium text-xs mb-3 block tracking-wide"
            >
              Technical Core
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] mb-6 leading-[1.08]"
            >
              Capabilities &amp; <span className="text-gradient">Focus.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text2)] text-base md:text-lg max-w-3xl mx-auto font-normal leading-[1.65]"
            >
              Nearly 4 years of practical expertise across GIS workflows, remote sensing, automated data pipelines, dashboards and institutional digital systems.
            </motion.p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <CapabilitiesSection />

        {/* Tools & Technologies */}
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-[var(--acc)] font-medium text-xs mb-2 block tracking-wide">
              Stack &amp; Environment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight leading-[1.15]">
              Tools &amp; Technologies
            </h2>
            <p className="text-[var(--text2)] text-sm sm:text-base max-w-xl mx-auto mt-3 font-normal leading-[1.6]">
              Core software platforms, analytical libraries, databases and development frameworks utilized in production workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {techStack.map((tech, index) => (
              <GlowCard
                key={index}
                glowColor={tech.color}
                customSize
                className="!p-5 flex flex-col justify-between rounded-3xl border border-[var(--acc-border)] bg-[var(--bg-card)]/80 backdrop-blur-xl hover:border-[var(--acc)]/40 transition-all group"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center text-[var(--acc)] group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--text2)]">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--acc)] transition-colors leading-snug">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-[var(--text2)] leading-[1.6] font-normal">
                    {tech.desc}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* How I Work Methodology */}
        <WorkMethodology />

        <div className="text-center py-16 px-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:border-[#38bdf8]/40 text-[var(--text)] font-semibold text-sm transition-all hover:scale-105"
          >
            Explore Selected Projects <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
          </Link>
        </div>
      </BeamsBackground>

      {/* Portfolio CTA */}
      <LampContainer className="min-h-[550px] sm:min-h-[650px] pt-12 pb-6">
        <motion.h2
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-white via-[#bae6fd] to-[#38bdf8] py-2 bg-clip-text text-center text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent leading-[1.15]"
        >
          Have a Project or <br /> Technical Problem?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-[#8bb8d4] text-base md:text-lg max-w-xl text-center mx-auto mt-4 px-4 font-normal leading-[1.6]"
        >
          Open to technical discussions, specialized GIS &amp; data problem solving, and institutional digital collaboration.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-semibold text-base shadow-[0_4px_30px_rgba(56,189,248,0.4)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(56,189,248,0.6)] transition-all inline-flex items-center gap-2"
          >
            Discuss a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </LampContainer>

      <Footer />
    </main>
  );
}
