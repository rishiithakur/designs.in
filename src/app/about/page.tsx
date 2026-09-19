"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";
import { GlowCard } from "@/components/ui/spotlight-card";
import Link from "next/link";
import { Award, BookOpen, GraduationCap, Globe, Cpu, Database, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import GradientBarsBackground from "@/components/ui/gradient-bars-background";
import CertificateSection from "@/components/CertificateSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <GradientBarsBackground
        numBars={15}
        gradientFrom="rgba(56, 189, 248, 0.1)"
        className="pt-40 pb-24 px-8"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase text-[var(--text)]">
                Rishabh <span className="text-gradient">Thakur</span>
              </h1>
              <p className="text-[var(--text2)] text-xl leading-relaxed mb-8">
                I am Rishabh Thakur, a{" "}
                <span className="text-[var(--text)] font-bold">
                  GIS & Data Solutions Specialist
                </span>
                {" "}with nearly four years of experience across GIS, geospatial
                data, remote sensing, Google Earth Engine, ArcGIS Pro, data
                processing, dashboards, project systems and technical
                implementation on World Bank-funded and government-funded water
                and infrastructure programs. Founder of{" "}
                <span className="text-[var(--acc)] font-bold">Rishii Designs</span>
                {" "}— a digital solutions and web design studio.
              </p>
              <p className="text-[var(--text2)] text-lg leading-relaxed mb-8">
                I work across requirement analysis, GIS workflows, data
                processing, Python automation, AI-assisted development, API
                integration, testing, documentation and technical implementation —
                turning complex project requirements into practical, working solutions.
                Currently working at{" "}
                <span className="text-[var(--acc)] font-bold">
                  SHINE Soft Pvt. Ltd.
                </span>
                {" "}on{" "}
                <span className="text-[var(--acc)] font-bold">World Bank DRIP-II</span>
                {" "}and{" "}
                <span className="text-[var(--acc)] font-bold">National Hydrology Project</span>
                {" "}initiatives.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--acc-dim)] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[var(--acc)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[var(--text)]">
                      GIS & Geospatial Solutions
                    </h3>
                    <p className="text-[var(--text2)]">
                      ArcGIS Pro, spatial analysis, LULC classification, raster workflows
                      and geospatial data processing for institutional programs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[var(--text)]">
                      Remote Sensing & Google Earth Engine
                    </h3>
                    <p className="text-[var(--text2)]">
                      GEE-based ET analysis, LULC classification, water body delineation,
                      irrigation benchmarking and water budgeting workflows.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#818cf8]/20 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-[#818cf8]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[var(--text)]">
                      Python, Data & AI Automation
                    </h3>
                    <p className="text-[var(--text2)]">
                      Python/Jupyter, PostgreSQL, Excel data processing, AI-assisted
                      development, API integration and workflow automation.
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-[var(--acc)] font-bold hover:underline"
                  >
                    Work With Rishabh <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <ShineBorder
                color={["#38bdf8", "#818cf8", "#c084fc"]}
                borderRadius={40}
                borderWidth={4}
                className="!bg-transparent p-0"
              >
                <div className="aspect-square rounded-[40px] overflow-hidden bg-[var(--bg-card)]">
                  <img
                    src="/selfie.jpg"
                    alt="Rishabh Thakur, founder and web designer at Rishii Designs"
                    className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-700 hover:scale-105"
                  />
                </div>
              </ShineBorder>

              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--acc-border)] rounded-full flex flex-col items-center justify-center text-center p-4 transform -rotate-12 group hover:rotate-0 transition-transform duration-500">
                <p className="text-2xl font-black text-[var(--text)]">GIS</p>
                <p className="text-[10px] uppercase tracking-widest text-[var(--acc)]">
                  Analyst
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </GradientBarsBackground>

      {/* Education & Certifications */}
      <section className="py-24 bg-[var(--bg2)] border-y border-[var(--acc-border)]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black mb-16 text-center text-[var(--text)]">
            Education & <span className="text-gradient">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-[var(--acc)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text)]">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-[var(--text2)]">IGNOU, India</p>
                <p className="text-sm text-[var(--text3)]">
                  Currently Pursuing — 2025-Present
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-[#818cf8]/10 border border-[#818cf8]/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-[#818cf8]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text)]">
                  BA — Journalism & Mass Communication
                </h3>
                <p className="text-[var(--text2)]">HPU Shimla, India</p>
                <p className="text-sm text-[var(--text3)]">Graduated 2021</p>
              </div>
            </div>
          </div>

          <CertificateSection />
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black mb-16 text-[var(--text)]">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <div className="border-l-4 border-[var(--acc)] pl-8 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-[var(--acc)]" />
                <span className="text-sm font-bold uppercase tracking-widest text-[var(--acc)]">
                  Oct 2022 — Present
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
                IT Solutions Specialist & GIS Analyst
              </h3>
              <p className="text-[var(--text2)] flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4" /> SHINE Soft Pvt. Ltd. — Hamirpur,
                HP
              </p>
              <ul className="space-y-2 text-[var(--text2)]">
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Supported integration of the World Bank
                  procurement portal STEP with the project MIS under DRIP-II.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Supported system deployment, hosting and
                  end-to-end testing of the integrated MIS.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Reviewed System Requirement Specifications
                  and solution architecture.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Contributed to enhancement of the MIS and
                  DHARMA portal.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Worked on Rapid Risk Assessment Tool and
                  STEP data integration within the project MIS.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Supported development of a Grievance
                  Redressal Mechanism (GRM).
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Worked on Google Earth Engine-based tools
                  for irrigation benchmarking, water budgeting and water body delineation.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Processed and validated project datasets
                  using Excel, Python/Jupyter Notebook and PostgreSQL.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Used ArcGIS Pro for mapping, raster generation,
                  LULC analysis and spatial visualization.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Used Google Earth Engine for ET, LULC
                  classification and TBP analysis.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Developed and tested AI-assisted Python and
                  API-based automation workflows.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--acc)]">•</span> Built dashboards and Esri-based web
                  applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-[var(--bg2)] border-y border-[var(--acc-border)]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black mb-12 text-[var(--text)]">
              Requirement to Delivery. Technical to Practical.
            </h2>
            <div className="grid gap-12">
              <div className="border-l-4 border-[var(--acc)] pl-8">
                <h3 className="text-2xl font-bold mb-4 italic text-[var(--text)]">
                  &quot;Good technical work starts with understanding
                  the requirement and ends with a solution
                  that actually works in the field.&quot;
                </h3>
                <p className="text-[var(--text2)] text-lg">
                  My work on World Bank and government programs has shaped
                  my understanding of reliability, documentation and delivering
                  solutions that non-technical stakeholders can actually use.
                </p>
              </div>
              <div className="border-l-4 border-[#818cf8] pl-8">
                <h3 className="text-2xl font-bold mb-4 text-[var(--text)]">
                  Data & Systems First
                </h3>
                <p className="text-[var(--text2)] text-lg">
                  Whether it is a GIS workflow, a dashboard, a Python automation
                  script or an MIS portal — I prioritize clean implementation,
                  accurate data processing and solutions that can be maintained
                  and extended over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-8 text-[var(--text)]">
            Connect with <span className="text-gradient">Rishabh Thakur</span>
          </h2>
          <p className="text-[var(--text2)] text-xl max-w-2xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions. Feel free to reach out
            on any of my professional platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/rishii-thakur"
              target="_blank"
              rel="me nofollow noopener"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:bg-[var(--acc)] hover:text-[var(--bg)] transition-all group"
            >
              <FaLinkedin className="w-6 h-6 text-[var(--acc)] group-hover:text-[var(--bg)]" />
              <span className="font-bold">Rishii Designs on LinkedIn</span>
            </a>
            <a
              href="https://github.com/rishiithakur"
              target="_blank"
              rel="me nofollow noopener"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:bg-[var(--acc)] hover:text-[var(--bg)] transition-all group"
            >
              <FaGithub className="w-6 h-6 text-[var(--acc)] group-hover:text-[var(--bg)]" />
              <span className="font-bold">View GitHub Projects by Rishabh Thakur</span>
            </a>
            <a
              href="https://www.instagram.com/rishiidesigns.ai"
              target="_blank"
              rel="me nofollow noopener"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:bg-[var(--acc)] hover:text-[var(--bg)] transition-all group"
            >
              <FaInstagram className="w-6 h-6 text-[var(--acc)] group-hover:text-[var(--bg)]" />
              <span className="font-bold">Instagram (Brand)</span>
            </a>
            <a
              href="https://www.instagram.com/i.rishii.thakur"
              target="_blank"
              rel="me nofollow noopener"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:bg-[var(--acc)] hover:text-[var(--bg)] transition-all group"
            >
              <FaInstagram className="w-6 h-6 text-[var(--acc)] group-hover:text-[var(--bg)]" />
              <span className="font-bold">Instagram (Personal)</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
