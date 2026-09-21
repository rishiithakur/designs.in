"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard, type ServiceCardProps } from "./ui/service-card";

const topServices: ServiceCardProps[] = [
  {
    planName: "GIS & Geospatial Solutions",
    description: "GIS mapping, spatial analysis, raster workflows and geospatial data processing.",
    price: "Custom Quote",
    icon: <Globe className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#0ea5e9]/20",
    highlight: "PRIMARY",
    features: [
      "ArcGIS Pro mapping & LULC analysis",
      "Geospatial data processing & validation",
      "Google Earth Engine tools",
      "Institutional GIS workflows",
    ],
  },
  {
    planName: "Data Processing & Automation",
    description: "Python, PostgreSQL, Excel data processing, validation and workflow automation.",
    price: "Custom Quote",
    icon: <Layers className="w-6 h-6" />,
    iconBgClass: "from-[#c084fc]/20 to-[#a855f7]/20",
    highlight: "AI CERTIFIED",
    features: [
      "Python / Jupyter data pipelines",
      "PostgreSQL & SQL processing",
      "AI-assisted automation scripts",
      "API integration & workflows",
    ],
  },
  {
    planName: "Web & Dashboard Solutions",
    description: "Modern websites, dashboards, web applications and API-connected digital systems.",
    price: "Project-based",
    icon: <Monitor className="w-6 h-6" />,
    iconBgClass: "from-[#818cf8]/20 to-[#38bdf8]/20",
    features: [
      "React / Next.js web applications",
      "Esri-based dashboards & web apps",
      "MIS portal development",
      "Logo & brand design (Rishii Designs)",
    ],
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[var(--acc-dim)] relative border-y border-[var(--acc-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-6">
            GIS, Data &amp; <span className="text-gradient">Digital Solutions.</span>
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            From geospatial data processing and remote sensing to web applications and MIS portals — technical solutions across the full project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] text-[#060d18] font-bold text-lg hover:scale-105 transition-transform"
          >
            Explore all services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
