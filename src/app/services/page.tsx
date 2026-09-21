"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Globe,
  Cpu,
  Monitor,
  Layers,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ServiceCard, type ServiceCardProps } from "@/components/ui/service-card";
import { BeamsBackground } from "@/components/ui/beams-background";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

const allServices: ServiceCardProps[] = [
  {
    planName: "GIS & Geospatial Solutions",
    description: "GIS mapping, spatial analysis, raster workflows, remote sensing and geospatial data processing.",
    price: "Custom Quote",
    icon: <Globe className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#0ea5e9]/20",
    highlight: "PRIMARY",
    features: [
      "ArcGIS Pro mapping & raster generation",
      "LULC analysis & spatial visualization",
      "Geospatial data processing & validation",
      "Institutional & government GIS workflows",
    ],
  },
  {
    planName: "Remote Sensing & Google Earth Engine",
    description: "GEE-based analysis, LULC, ET, water body delineation, irrigation and water-management workflows.",
    price: "Custom Quote",
    icon: <Cpu className="w-6 h-6" />,
    iconBgClass: "from-[#818cf8]/20 to-[#6366f1]/20",
    highlight: "GEE CERTIFIED",
    features: [
      "Google Earth Engine scripts & tools",
      "ET analysis & LULC classification",
      "Water body delineation & TBP analysis",
      "Irrigation benchmarking & water budgeting",
    ],
  },
  {
    planName: "Data Processing & Automation",
    description: "Python, SQL, PostgreSQL, Excel-based data processing, validation and workflow automation.",
    price: "Custom Quote",
    icon: <Layers className="w-6 h-6" />,
    iconBgClass: "from-[#10b981]/20 to-[#34d399]/20",
    features: [
      "Python / Jupyter data pipelines",
      "PostgreSQL & SQL data processing",
      "Excel-based validation & reporting",
      "API integration & automation scripts",
    ],
  },
  {
    planName: "AI & Intelligent Applications",
    description: "AI-assisted application development, AI workflows, automation, API integration and technical prototypes.",
    price: "Custom Quote",
    icon: <Sparkles className="w-6 h-6" />,
    iconBgClass: "from-[#c084fc]/20 to-[#a855f7]/20",
    highlight: "GOOGLE AI CERTIFIED",
    features: [
      "AI-assisted Python development",
      "API-based automation workflows",
      "AI workflow design & prototyping",
      "Technical implementation & testing",
    ],
  },
  {
    planName: "Web & Dashboard Solutions",
    description: "Modern websites, dashboards, web applications, UI/UX implementation and API-connected systems.",
    price: "Project-based",
    icon: <Monitor className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#7dd3fc]/20",
    features: [
      "React / Next.js web applications",
      "Esri-based web apps & dashboards",
      "API-connected data dashboards",
      "Responsive UI/UX implementation",
    ],
  },
  {
    planName: "Digital / MIS Systems",
    description: "MIS workflows, project systems, data integration, dashboards and institutional digital solutions.",
    price: "Project-based",
    icon: <Layers className="w-6 h-6" />,
    iconBgClass: "from-[#f59e0b]/20 to-[#fbbf24]/20",
    features: [
      "MIS portal development & enhancement",
      "STEP & procurement data integration",
      "GRM & institutional portal systems",
      "System testing & documentation",
    ],
  },
  {
    planName: "Logo & Brand Design",
    description: "Professional logos for brands, startups & creators — via Rishii Designs studio.",
    price: "Request Estimate",
    icon: <Palette className="w-6 h-6" />,
    iconBgClass: "from-[#f472b6]/20 to-[#ec4899]/20",
    features: [
      "Custom logo concept design",
      "Multiple concepts & revisions",
      "AI-enhanced modern aesthetics",
      "Professional brand deliverables",
    ],
  },
  {
    planName: "Website Design",
    description: "Modern responsive websites, portfolios and landing pages — via Rishii Designs studio.",
    price: "Request Estimate",
    icon: <Monitor className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#818cf8]/20",
    features: [
      "Fully responsive, mobile-first design",
      "Custom animations & micro-interactions",
      "Fast performance & SEO ready",
      "Contact form & basic integrations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-[var(--text)]">
      <Navbar />

      <BeamsBackground className="pt-20">
        <section className="pt-20 pb-20 px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#38bdf8] font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              What I do best
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
            >
              GIS, DATA &amp; <span className="text-gradient">DIGITAL SOLUTIONS.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text2)] text-xl max-w-2xl mx-auto"
            >
              GIS &amp; geospatial solutions, remote sensing, data processing, AI automation, web applications and digital/MIS systems — available for institutional, government and private projects.
            </motion.p>
          </div>
        </section>

        <section className="py-12 px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[var(--acc)] font-bold hover:underline"
            >
              View work &amp; portfolio <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[var(--text3)] text-sm mt-4 max-w-lg mx-auto">
              Pricing for GIS, data and digital systems work is project-based and provided on request.
              Selected project information is presented at a high level due to project confidentiality.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-[var(--bg2)] border-y border-[var(--acc-border)]">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-widest text-[var(--text)]">
              My Work <span className="text-gradient">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirement",
                  desc: "Understanding project requirements, scope and expected outputs.",
                },
                {
                  step: "02",
                  title: "Analysis",
                  desc: "Reviewing specifications, data and solution architecture.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Building, processing and testing the solution end-to-end.",
                },
                {
                  step: "04",
                  title: "Delivery",
                  desc: "Documenting, deploying and handing over the working solution.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--acc-border)]"
                >
                  <span className="text-5xl font-black text-[#38bdf8]/20 absolute top-4 right-8">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-4 mt-8 text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text2)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BeamsBackground>

      <LampContainer className="min-h-[80vh] md:min-h-screen">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white via-[#bae6fd] to-[#38bdf8] py-4 bg-clip-text text-center text-5xl font-black tracking-tighter text-transparent md:text-8xl"
        >
          LET&apos;S WORK <br /> TOGETHER.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-lg shadow-[0_4px_30px_rgba(56,189,248,0.4)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(56,189,248,0.6)] transition-all"
          >
            Work With Me
          </Link>
        </motion.div>
      </LampContainer>

      <Footer />
    </main>
  );
}
