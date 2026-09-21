"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WorkMethodology from "@/components/WorkMethodology";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { ArrowRight, Code, Database, Globe, Cpu, Layers, ShieldCheck, Terminal } from "lucide-react";

const techStack = [
  { name: "ArcGIS Pro", category: "GIS & Spatial" },
  { name: "Google Earth Engine", category: "Remote Sensing" },
  { name: "QGIS", category: "Spatial Analysis" },
  { name: "Python", category: "Automation & Data" },
  { name: "PostgreSQL / PostGIS", category: "Database" },
  { name: "SQL & MySQL", category: "Data Management" },
  { name: "Jupyter Notebooks", category: "Analysis & Pipelines" },
  { name: "Power BI", category: "Dashboards" },
  { name: "Esri Web Apps", category: "Spatial Portals" },
  { name: "Next.js & React", category: "Digital Applications" },
  { name: "REST APIs", category: "Integration" },
  { name: "AI Automation", category: "Workflow Acceleration" },
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
              className="text-[#38bdf8] font-bold uppercase tracking-[0.3em] text-xs mb-3 block"
            >
              Technical Core
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase"
            >
              Capabilities &amp; <span className="text-gradient">Focus.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text2)] text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Nearly 4 years of practical expertise across GIS workflows, remote sensing, automated data pipelines, dashboards and institutional digital systems.
            </motion.p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <CapabilitiesSection />

        {/* Tools & Technologies */}
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[var(--acc)] font-bold uppercase tracking-[0.3em] text-xs mb-2 block">
              Stack &amp; Environment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight">
              Tools &amp; Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--acc-border)] hover:border-[#38bdf8]/40 transition-all text-center group"
              >
                <p className="font-bold text-sm text-[var(--text)] group-hover:text-[var(--acc)] transition-colors mb-1">
                  {tech.name}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-[var(--text2)] opacity-70">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How I Work Methodology */}
        <WorkMethodology />

        <div className="text-center py-16 px-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:border-[#38bdf8]/40 text-[var(--text)] font-bold text-sm transition-all hover:scale-105"
          >
            Explore Selected Projects <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
          </Link>
        </div>
      </BeamsBackground>

      {/* Portfolio CTA */}
      <LampContainer className="min-h-[70vh]">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white via-[#bae6fd] to-[#38bdf8] py-4 bg-clip-text text-center text-4xl font-black tracking-tighter text-transparent md:text-7xl uppercase"
        >
          Have a Project or <br /> Technical Problem?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#8bb8d4] text-base md:text-lg max-w-xl text-center mx-auto mt-4 px-4 font-light"
        >
          Open to technical discussions, specialized GIS &amp; data problem solving, and institutional digital collaboration.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-base shadow-[0_4px_30px_rgba(56,189,248,0.4)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(56,189,248,0.6)] transition-all inline-flex items-center gap-2"
          >
            Discuss a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </LampContainer>

      <Footer />
    </main>
  );
}
