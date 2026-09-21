"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { TubesBackground } from "@/components/ui/neon-flow";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ArrowRight, Database, Globe, Cpu, Layers, ExternalLink, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: "GIS & Remote Sensing" | "MIS & Governance" | "Data & Python" | "AI & Web";
  program: string;
  role: string;
  period: string;
  summary: string;
  keyDeliverables: string[];
  technologies: string[];
  confidential?: boolean;
}

const projects: Project[] = [
  {
    id: "dharma-step",
    title: "DHARMA Tool Enhancement & STEP Integration",
    category: "MIS & Governance",
    program: "World Bank / CWC / DRIP-II",
    role: "GIS & IT Solutions Specialist",
    period: "May 2024 – Present",
    summary:
      "Evaluated and enhanced the DHARMA tool under DRIP-II. Supported integration of the Rapid Risk Assessment Tool and World Bank STEP procurement portal data into the project MIS for real-time tracking, compliance and transparency.",
    keyDeliverables: [
      "Integrated World Bank STEP procurement data into project MIS",
      "Enhanced DHARMA portal for evolving dam rehabilitation requirements",
      "Integrated Rapid Risk Assessment Tool into central workflow",
      "Contributed to compliance reporting across CWC and state stakeholders",
    ],
    technologies: ["MIS Portal", "World Bank STEP", "DHARMA", "Python", "PostgreSQL", "CWC Systems"],
    confidential: true,
  },
  {
    id: "drip-portal-upgrade",
    title: "DRIP-II MIS Portal Upgrade & System Deployment",
    category: "MIS & Governance",
    program: "World Bank / SHINE Soft",
    role: "IT Solutions Specialist",
    period: "2023 – Present",
    summary:
      "Reviewed System Requirement Specifications (SRS) and architecture documentation for the upgraded DRIP-II MIS portal. Supported system deployment, hosting supervision and end-to-end validation testing.",
    keyDeliverables: [
      "Supervised system deployment and cloud hosting validation",
      "Conducted end-to-end integration and functionality testing",
      "Reviewed SRS and solution architecture by CWC MIS team",
      "Multi-agency coordination across state and central water departments",
    ],
    technologies: ["Solution Architecture", "SRS Review", "System Deployment", "MIS Portals", "End-to-End Testing"],
    confidential: true,
  },
  {
    id: "nhp-gee-tools",
    title: "National Hydrology Project (NHP) — GEE Water Tools",
    category: "GIS & Remote Sensing",
    program: "National Hydrology Project / SHINE Soft",
    role: "GIS & Remote Sensing Analyst",
    period: "2023 – Present",
    summary:
      "Technical implementation and scaling of Google Earth Engine-based tools for water budgeting, irrigation benchmarking and water body delineation, developed in collaboration with international experts under NHP.",
    keyDeliverables: [
      "Scaled Google Earth Engine tools for water budgeting workflows",
      "Automated satellite water body delineation using multi-temporal indices",
      "Conducted Evapotranspiration (ET) and Total Basin Performance (TBP) analysis",
      "Supported technical training and workshops for state water agencies",
    ],
    technologies: ["Google Earth Engine", "Remote Sensing", "ET Analysis", "Water Budgeting", "ArcGIS Pro", "Python"],
    confidential: true,
  },
  {
    id: "irrigation-advisory",
    title: "Irrigation & Agricultural Performance Advisory Tools",
    category: "GIS & Remote Sensing",
    program: "World Bank-funded State Water Programs",
    role: "GIS Solutions Specialist",
    period: "2023 – 2024",
    summary:
      "Assisted in developing specialized analytical tools for irrigation and agricultural performance assessment, water persistence monitoring, and database transfer to participating state water agencies.",
    keyDeliverables: [
      "Monitored water persistence across canals, tanks and reservoirs",
      "Calculated agricultural and seasonal irrigation performance indicators",
      "Assisted transfer of database systems and analytics to local authorities",
      "Provided operational implementation assistance and technical guides",
    ],
    technologies: ["Spatial Analysis", "Irrigation Benchmarking", "Database Systems", "QGIS", "Excel Modeling"],
    confidential: true,
  },
  {
    id: "grm-system",
    title: "Grievance Redressal Mechanism (GRM) Platform",
    category: "MIS & Governance",
    program: "World Bank / DRIP-II",
    role: "Solutions Specialist",
    period: "2023 – 2024",
    summary:
      "Contributed to the workflow design, user requirement specifications, and digital deployment of a stakeholder Grievance Redressal Mechanism (GRM) supporting structured complaint tracking under DRIP-II.",
    keyDeliverables: [
      "Designed digital workflow for complaint logging, tracking and resolution",
      "Established compliance-focused multi-tier resolution timelines",
      "Integrated feedback loops for project stakeholders and field engineers",
      "Created structured documentation and user operating procedures",
    ],
    technologies: ["Digital Governance", "GRM Workflow", "Stakeholder MIS", "Technical Documentation"],
    confidential: true,
  },
  {
    id: "python-data-pipelines",
    title: "Python Data Processing & Validation Pipelines",
    category: "Data & Python",
    program: "Institutional Water & Infrastructure Datasets",
    role: "Data Solutions Specialist",
    period: "Ongoing",
    summary:
      "Automated extraction, cleaning, spatial joining, and validation of government project datasets using Python, Jupyter Notebooks, SQL and PostgreSQL. Integrated clean datasets directly into database workflows.",
    keyDeliverables: [
      "Wrote Python scripts for tabular and geospatial data extraction",
      "Engineered SQL queries and table schemas in PostgreSQL / PostGIS",
      "Automated repetitive data quality and validation checks",
      "Built export scripts producing structured reporting formats",
    ],
    technologies: ["Python", "Jupyter Notebook", "PostgreSQL", "SQL", "MySQL", "Pandas", "Excel"],
  },
  {
    id: "arcgis-spatial-workflows",
    title: "ArcGIS Pro Spatial Mapping & LULC Classification",
    category: "GIS & Remote Sensing",
    program: "Geospatial Data & Planning Workflows",
    role: "GIS Analyst",
    period: "Ongoing",
    summary:
      "High-precision GIS mapping, raster processing, land-use/land-cover (LULC) analysis, and spatial cartography using ArcGIS Pro and QGIS for technical reporting and project stakeholders.",
    keyDeliverables: [
      "Multi-temporal LULC classification and change detection",
      "Digital Elevation Model (DEM) and raster terrain modeling",
      "Cartographic layout preparation for technical reports",
      "Coordinate transformation and spatial database alignment",
    ],
    technologies: ["ArcGIS Pro", "QGIS", "Raster Analysis", "LULC", "Spatial Modeling", "Cartography"],
  },
  {
    id: "ai-automation-prototyping",
    title: "AI-Assisted Workflow Automation & App Prototyping",
    category: "AI & Web",
    program: "Technical Automation & Internal Systems",
    role: "AI & Automation Specialist",
    period: "2024 – Present",
    summary:
      "Leveraging Google AI certified techniques to build AI-assisted automation pipelines, internal API connectors, and conversational technical prototypes that eliminate manual bottlenecks in GIS and reporting workflows.",
    keyDeliverables: [
      "Designed AI-assisted code generation pipelines for Python & SQL scripts",
      "Built custom API integration connectors for internal workflows",
      "Developed conversational interface prototypes for data queries",
      "Accelerated documentation and user manual drafting",
    ],
    technologies: ["Google AI", "REST APIs", "Prompt Engineering", "Python Scripts", "Process Automation"],
  },
  {
    id: "rishiidesigns-portfolio",
    title: "Rishii Designs — Portfolio & Digital Work Identity",
    category: "AI & Web",
    program: "Independent Engineering Project",
    role: "Designer & Developer",
    period: "2026",
    summary:
      "Conceptualized, designed, and developed the official Rishii Designs portfolio studio. Engineered with Next.js, React, TailwindCSS, and Framer Motion with full responsive performance and dark glassmorphic styling.",
    keyDeliverables: [
      "Architected clean Next.js 15 App Router structure with TypeScript",
      "Designed custom dark-mode glassmorphic interface and micro-interactions",
      "Integrated Supabase data storage and responsive contact workflows",
      "100% type-checked, optimized production bundle and sub-second loading",
    ],
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Supabase"],
  },
];

const categories = ["All", "GIS & Remote Sensing", "MIS & Governance", "Data & Python", "AI & Web"] as const;

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <TubesBackground className="fixed inset-0 z-0 opacity-40 pointer-events-none" />
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 text-center z-10 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#38bdf8] font-medium text-xs mb-3 block tracking-wide"
        >
          Technical Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] mb-6 leading-[1.08]"
        >
          Selected <span className="text-gradient">Work.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[var(--text2)] text-base md:text-lg max-w-3xl mx-auto font-normal leading-[1.65] mb-8"
        >
          A curated selection of technical work across GIS, remote sensing, Google Earth Engine, Python data processing, dashboards, MIS platforms and digital systems.
        </motion.p>

        {/* Confidentiality Notice Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 p-4 px-6 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] text-xs md:text-sm text-[var(--text2)] max-w-2xl text-left font-normal"
        >
          <Lock className="w-5 h-5 text-[var(--acc)] shrink-0" />
          <span>
            <strong className="text-[var(--text)] font-semibold">Confidentiality Note:</strong>{" "}
            Selected project information is presented at a high level due to project confidentiality across institutional and government programs.
          </span>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--acc-border)] max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] shadow-md"
                  : "text-[var(--text2)] hover:text-[var(--text)] hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-3xl p-7 bg-[var(--bg-card)] border border-[var(--acc-border)] hover:border-[#38bdf8]/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--acc-dim)] text-[var(--acc)] border border-[var(--acc-border)]">
                      {project.category}
                    </span>
                    {project.confidential && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text2)] opacity-80">
                        <Lock className="w-3 h-3 text-[var(--acc)]" /> Institutional
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--acc)] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-[#38bdf8]">
                      {project.program}
                    </p>
                    <p className="text-xs text-[var(--text2)] opacity-75 font-normal">
                      {project.role} • {project.period}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--text2)] leading-[1.6] font-normal mb-6">
                    {project.summary}
                  </p>

                  <div className="mb-6 space-y-2 border-t border-white/5 pt-4">
                    <p className="text-xs font-medium text-[var(--text)] opacity-60">
                      Key Deliverables
                    </p>
                    {project.keyDeliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text2)] font-normal leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-[var(--text2)] border border-white/5 font-normal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-20 text-center p-12 rounded-3xl bg-[var(--acc-dim)] border border-[var(--acc-border)] max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3 leading-snug">
            Need specialized technical expertise?
          </h3>
          <p className="text-[var(--text2)] text-base max-w-xl mx-auto mb-6 font-normal leading-[1.6]">
            I am available for project consultations, technical workflows, GIS &amp; data analysis, and institutional digital systems.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-semibold text-sm shadow-[0_4px_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
          >
            Discuss a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
