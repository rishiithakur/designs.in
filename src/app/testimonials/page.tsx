'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NeuralNoise } from "@/components/ui/neural-noise";
import { motion } from "framer-motion";
import { Globe, Cpu, Database, Layers, Monitor, Map } from "lucide-react";

const selectedWork = [
  {
    icon: <Layers className="w-6 h-6" />,
    category: "World Bank DRIP-II",
    title: "DHARMA Tool Enhancement & STEP Integration",
    description:
      "Supported integration of the World Bank procurement portal STEP with the project MIS under DRIP-II. Contributed to DHARMA portal enhancement, system deployment, hosting and end-to-end testing.",
    tags: ["MIS", "STEP Integration", "System Testing"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    category: "DRIP-II",
    title: "Rapid Risk Assessment Tool & GRM",
    description:
      "Worked on Rapid Risk Assessment Tool and STEP data integration within the project MIS. Supported development of a Grievance Redressal Mechanism (GRM) for the DRIP-II program.",
    tags: ["Risk Assessment", "GRM", "Data Integration"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    category: "National Hydrology Project (NHP)",
    title: "Google Earth Engine Water Management Tools",
    description:
      "Developed GEE-based tools for irrigation benchmarking, water budgeting and water body delineation. Used Google Earth Engine for ET, LULC classification and TBP analysis under the NHP program.",
    tags: ["Google Earth Engine", "Water Budgeting", "ET Analysis"],
  },
  {
    icon: <Map className="w-6 h-6" />,
    category: "GIS & Remote Sensing",
    title: "ArcGIS Pro Mapping & LULC Analysis",
    description:
      "Used ArcGIS Pro for mapping, raster generation, LULC analysis and spatial visualization on government water and infrastructure projects. Processed and validated datasets using Python, Jupyter Notebook and PostgreSQL.",
    tags: ["ArcGIS Pro", "LULC", "Spatial Analysis"],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    category: "AI & Automation",
    title: "AI-Assisted Python & API Automation Workflows",
    description:
      "Developed and tested AI-assisted Python and API-based automation workflows for data processing and institutional project requirements. Google AI Essentials certified.",
    tags: ["Python", "API Integration", "AI Workflows"],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    category: "Web & Dashboard Solutions",
    title: "Dashboards, MIS Portals & Rishii Designs",
    description:
      "Built dashboards and Esri-based web applications for institutional programs. Also runs Rishii Designs studio — delivering web design, logo design and digital solutions for clients.",
    tags: ["Dashboards", "Esri Web Apps", "Rishii Designs"],
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col">
      <Navbar />

      <div className="flex-grow relative pt-32 pb-20 overflow-hidden">
        {/* Background Neural Noise */}
        <NeuralNoise color={[0.22, 0.74, 0.97]} opacity={0.6} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              SELECTED <span className="text-gradient">WORK.</span>
            </h1>
            <p className="text-[#8bb8d4] text-xl max-w-2xl mx-auto">
              A high-level overview of key work areas across GIS, remote sensing, data processing, AI automation and digital systems.
            </p>
            <p className="text-[#8bb8d4]/50 text-sm mt-4 max-w-xl mx-auto italic">
              Selected project information is presented at a high level due to project confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--acc-border)] hover:border-[var(--acc)]/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center text-[var(--acc)]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--acc)]">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[var(--text)] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[var(--text2)] text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] text-[var(--acc)] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
