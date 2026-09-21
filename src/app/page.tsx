"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { CardCarousel } from "@/components/ui/card-carousel";
import { TubesBackground } from "@/components/ui/neon-flow";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { IntroAnimation } from "@/components/ui/intro-animation";
import { ShineBorder } from "@/components/ui/shine-border";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Award, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

const cycleWords = [
  "geospatial data & GIS.",
  "remote sensing & GEE workflows.",
  "Python & data processing pipelines.",
  "institutional MIS platforms.",
  "AI-assisted automation.",
  "dashboards & digital systems.",
  "requirement to practical delivery.",
  "spatial analytics that solve problems."
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [galleryImages, setGalleryImages] = useState<{ src: string; alt: string; category?: string }[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("title, image_url")
          .order("created_at", { ascending: false })
          .limit(10);

        if (error) {
          console.error("Supabase error:", error);
          return;
        }

        if (data) {
          const validItems = (data as any[])
            .filter((item: any) => item.image_url)
            .map((item: any) => ({
              src: item.image_url,
              alt: item.title || "Selected Work",
              category: "Rishii Designs"
            }));
          
          if (validItems.length > 0) {
            setGalleryImages(validItems);
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <IntroAnimation onComplete={() => setShowIntro(false)} />

      <main
        className={`min-h-screen bg-transparent text-[var(--text)] transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}
      >
        <TubesBackground className="fixed inset-0 z-0 !bg-transparent opacity-80 pointer-events-none" />
        <Navbar />

        {/* Hero Section */}
        <HeroGeometric
          badge="Rishii Designs"
          title1="Rishabh Thakur"
          title2="GIS & Data Solutions Specialist"
          description="I work across geospatial data, remote sensing, Python, AI, automation, dashboards and digital systems to turn technical requirements into practical solutions."
        >
          <div className="max-w-4xl mx-auto text-center mb-6 px-4">
            <p className="text-[var(--acc)] font-medium mb-4 tracking-[0.06em] text-xs sm:text-[13px]">
              Geospatial Data • Remote Sensing • Python • Data • AI • Automation • Digital Systems
            </p>
            <h2 className="text-base sm:text-lg md:text-xl font-normal text-[var(--text2)] relative">
              Specialized in{" "}
              <AnimatedTextCycle
                words={cycleWords}
                interval={3000}
                className="text-[var(--text)] font-semibold"
              />
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] text-[var(--text)] font-semibold text-sm md:text-base transition-all hover:bg-[var(--acc-glow)] hover:border-[var(--acc)]"
            >
              Explore My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[var(--acc)] text-white font-semibold text-sm md:text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--acc-glow)]"
            >
              Contact Me
            </Link>
          </div>
        </HeroGeometric>

        <div className="relative z-10 bg-transparent">
          {/* Capabilities Section */}
          <CapabilitiesSection />

          {/* Technical Philosophy & Experience Section */}
          <section className="py-28 px-8 bg-[var(--acc-dim)] backdrop-blur-sm border-y border-[var(--acc-border)]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <span className="text-[var(--acc)] font-medium uppercase tracking-[0.12em] text-[11px] mb-3 block">
                    Institutional &amp; Technical Foundation
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.12] tracking-tight text-[var(--text)]">
                    Requirement to Delivery. <br />
                    <span className="text-gradient">Technical to Practical.</span>
                  </h2>
                  <p className="text-base sm:text-lg text-[var(--text2)] mb-10 leading-[1.65] font-normal">
                    Nearly 4 years of experience across GIS, geospatial data, remote sensing,
                    Google Earth Engine, ArcGIS Pro, Python automation, dashboards and digital systems
                    supporting World Bank-funded and government water infrastructure initiatives.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-4xl sm:text-5xl font-bold text-[var(--acc)] mb-1 tracking-tight">
                        4+
                      </h4>
                      <p className="text-xs tracking-[0.06em] font-medium text-[var(--text)] opacity-70">
                        Years Experience
                      </p>
                    </div>
                    <div>
                      <h4 className="text-4xl sm:text-5xl font-bold text-[#818cf8] mb-1 tracking-tight">
                        WB
                      </h4>
                      <p className="text-xs tracking-[0.06em] font-medium text-[var(--text)] opacity-70">
                        World Bank Programs (DRIP-II / NHP)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--acc)]/20 blur-[100px] rounded-full" />
                  <ShineBorder
                    color="#38bdf8"
                    borderRadius={40}
                    className="!bg-transparent border-none"
                  >
                    <div className="aspect-video rounded-[40px] overflow-hidden bg-[var(--bg-card)] backdrop-blur-xl flex items-center justify-center p-10 md:p-12">
                      <div className="text-center">
                        <div className="flex flex-col items-center mb-6">
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="relative mb-4"
                          >
                            <div className="w-20 h-20 rounded-full border-2 border-[var(--acc)] p-1 bg-[var(--bg)] overflow-hidden">
                              <img 
                                src="/profile.png" 
                                alt="Rishabh Thakur — GIS & Data Solutions Specialist" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[var(--acc)] text-white p-1 rounded-full border-2 border-[var(--bg)]">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                          </motion.div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-[var(--acc-dim)] border border-[var(--acc-border)] rounded-full mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--acc)] animate-pulse" />
                            <span className="text-xs font-medium text-[var(--acc)]">Verified Specialist</span>
                          </div>
                        </div>
                        <p className="text-[var(--text2)] italic text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed font-normal">
                          &quot;Good technical work starts with understanding
                          the requirement and ends with a solution
                          that actually works in the field.&quot;
                        </p>
                        <p className="text-[var(--text)] font-semibold text-xs sm:text-sm tracking-wide">
                          &mdash; Rishabh Thakur, GIS &amp; Data Solutions Specialist
                        </p>
                      </div>
                    </div>
                  </ShineBorder>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Philosophy Section */}
          <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <GlowCard 
                glowColor="purple" 
                className="lg:col-span-2 !p-8 md:!p-12 flex flex-col justify-center border border-[var(--acc-border)]/60 bg-[var(--bg-card)]/90 backdrop-blur-xl"
              >
                <div className="relative z-10 text-left">
                  <div className="font-serif text-lg sm:text-xl md:text-2xl text-[var(--text)]/90 leading-[1.75] md:leading-[1.85] tracking-[0.015em] space-y-5 font-light">
                    <p>
                      With <span className="text-[#fde68a] font-normal tracking-wide">Sita-Ram</span> in my soul,<br />
                      I walk the path of <span className="font-medium text-white tracking-widest uppercase text-[0.82em] border-b border-[#38bdf8]/30 pb-0.5">truth</span> without fear.
                    </p>

                    <p className="text-[var(--text2)]">
                      I turn <span className="font-medium text-white tracking-wider uppercase text-[0.80em]">discipline</span> into strength,<br />
                      knowledge into power,<br />
                      vision into <span className="font-medium text-white tracking-wider uppercase text-[0.80em]">creation</span>,<br />
                      and creation into{" "}
                      <span className="font-semibold tracking-wider uppercase text-[0.92em] bg-gradient-to-r from-[#fef08a] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(251,191,36,0.35)]">
                        wealth
                      </span>.
                    </p>

                    <p className="text-[var(--text2)] text-base sm:text-lg md:text-xl italic font-normal text-[var(--text2)]/85">
                      I seek not wealth alone, but the freedom, influence and identity it can build.
                    </p>

                    <p className="text-[var(--text)]/90 pt-1">
                      I will build with courage, earn with integrity,<br />
                      rise through <span className="font-medium text-white tracking-wider uppercase text-[0.80em]">discipline</span>, and leave behind a name<br />
                      that{" "}
                      <span className="font-semibold tracking-wide bg-gradient-to-r from-white via-[#fde68a] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(251,191,36,0.25)]">
                        outlives the work that created it
                      </span>.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard 
                glowColor="orange" 
                className="!p-8 md:!p-10 flex flex-col items-center justify-center text-center border border-amber-500/20 bg-[var(--bg-card)]/90 backdrop-blur-xl group"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-40 h-28 sm:w-44 sm:h-32 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/15 blur-2xl rounded-full" />
                    <img
                      src="/logo-emblem.png"
                      alt="Rishii Designs Divine Emblem — Sita Ram & Hanuman"
                      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_24px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-[var(--text)] text-xl sm:text-2xl font-bold tracking-wide mb-2">
                    Jai Shree Ram
                  </h3>
                  <p className="text-[var(--text3)] text-xs tracking-wide font-medium">
                    Rooted in values.<br />Focused on excellence.
                  </p>
                </div>
              </GlowCard>
            </div>
            
            <div className="mt-12 text-center relative z-10">
              <p className="text-[var(--text2)] text-base sm:text-lg opacity-70 max-w-2xl mx-auto italic font-normal">
                &quot;At Rishii Designs, we believe in clarity, purpose, and building solutions that truly solve problems.&quot;
              </p>
            </div>
          </section>

          {/* Certificate Spotlight */}
          <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-[40px] p-8 md:p-16 border border-[#38bdf8]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#38bdf8]/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="lg:w-1/3 relative">
                <ShineBorder
                  color={["#38bdf8", "#fbbf24", "#ef4444"]}
                  borderRadius={32}
                  borderWidth={3}
                  className="!bg-transparent"
                >
                  <div className="aspect-[4/5] rounded-[32px] bg-[#020617] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <Award className="w-16 h-16 text-[#fbbf24] mb-6 relative z-10 animate-bounce" />
                    <h4 className="text-2xl font-bold text-white mb-1.5 relative z-10 tracking-tight">Google AI</h4>
                    <p className="text-xs font-medium text-[#fbbf24] tracking-wide mb-8 relative z-10">Essentials Certified</p>
                    <div className="w-full h-[1px] bg-white/10 mb-8" />
                    <img src="/logo.png" className="h-12 w-auto object-contain opacity-90 drop-shadow-md" alt="Rishii Designs Certification" />
                  </div>
                </ShineBorder>
              </div>

              <div className="lg:w-2/3">
                <Badge variant="outline" className="mb-4 rounded-full border-[#fbbf24]/30 text-[#fbbf24] px-3.5 py-1 font-medium tracking-wide text-xs bg-[#fbbf24]/10">
                  Google Certified
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
                  Google AI Certified — <span className="text-[#fbbf24]">Rishabh Thakur.</span>
                </h2>
                <p className="text-[#8bb8d4] text-base sm:text-lg mb-8 leading-[1.6] max-w-2xl font-normal">
                  Google AI Essentials certified. I integrate AI-assisted workflows,
                  automation and API-based solutions into GIS data pipelines,
                  dashboards and web applications for institutional and technical projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/30 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" /> Verified Google AI Credential
                  </span>
                  <Link 
                    href="/about" 
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 text-white border border-white/10 font-semibold hover:bg-white/10 transition-all text-sm"
                  >
                    About Rishabh Thakur <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Work Carousel */}
          {(() => {
            const displayImages = galleryImages.length > 0 ? galleryImages : [
              {
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
                alt: "GIS dashboard and spatial analytics workflow — Rishii Designs",
                category: "Dashboards & MIS",
              },
              {
                src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
                alt: "Google Earth Engine remote sensing workflow — Rishii Designs",
                category: "GIS & Remote Sensing",
              },
              {
                src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
                alt: "Python data processing and automation pipeline — Rishii Designs",
                category: "Python & Data",
              },
              {
                src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
                alt: "MIS portal and institutional digital system — Rishii Designs",
                category: "MIS Systems",
              },
              {
                src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
                alt: "AI-assisted automation and digital application — Rishii Designs",
                category: "AI & Automation",
              },
            ];
            return (
              <CardCarousel
                key={`carousel-${displayImages.length}-${galleryImages.length}`}
                title="Selected Work Highlights"
                subtitle="A high-level view across GIS, remote sensing, Python data processing, dashboards and digital systems."
                images={displayImages}
              />
            );
          })()}

          {/* How I Work / Methodology & CTA */}
          <CTASection />
        </div>

        <Footer />
      </main>
    </>
  );
}
