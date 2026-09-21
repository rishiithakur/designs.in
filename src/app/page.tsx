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
            <p className="text-[var(--acc)] font-bold mb-4 tracking-wider uppercase text-xs sm:text-sm">
              Geospatial Data • Remote Sensing • Python • Data • AI • Automation • Digital Systems
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-[var(--text2)] relative">
              Specialized in{" "}
              <AnimatedTextCycle
                words={cycleWords}
                interval={3000}
                className="text-[var(--text)] font-bold"
              />
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] text-[var(--text)] font-bold transition-all hover:bg-[var(--acc-glow)] hover:border-[var(--acc)]"
            >
              Explore My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[var(--acc)] text-white font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--acc-glow)]"
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
                  <span className="text-[var(--acc)] font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
                    Institutional &amp; Technical Foundation
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[var(--text)]">
                    Requirement to Delivery. <br />
                    <span className="text-gradient">Technical to Practical.</span>
                  </h2>
                  <p className="text-[var(--text2)] text-xl mb-12 leading-relaxed">
                    Nearly 4 years of experience across GIS, geospatial data, remote sensing,
                    Google Earth Engine, ArcGIS Pro, Python automation, dashboards and digital systems
                    supporting World Bank-funded and government water infrastructure initiatives.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-5xl font-black text-[var(--acc)] mb-2">
                        4+
                      </h4>
                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text)] opacity-60">
                        Years Experience
                      </p>
                    </div>
                    <div>
                      <h4 className="text-5xl font-black text-[#818cf8] mb-2">
                        WB
                      </h4>
                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text)] opacity-60">
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
                            <span className="text-[10px] font-bold text-[var(--acc)] uppercase tracking-widest">Verified Specialist</span>
                          </div>
                        </div>
                        <p className="text-[var(--text2)] italic text-xl md:text-2xl mb-6 leading-relaxed">
                          &quot;Good technical work starts with understanding
                          the requirement and ends with a solution
                          that actually works in the field.&quot;
                        </p>
                        <p className="text-[var(--text)] font-bold uppercase tracking-widest text-sm">
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
                className="lg:col-span-2 !p-10 flex flex-col justify-center"
              >
                <div className="relative z-10 text-center lg:text-left">
                  <p className="text-[var(--text)] text-2xl md:text-3xl font-black mb-6 leading-relaxed font-serif">
                    कृष्णाय वासुदेवाय हरये परमात्मने।<br className="hidden md:block" />
                    प्रणतः क्लेशनाशाय गोविन्दाय नमो नमः॥
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--text2)] leading-relaxed">
                    <p className="italic border-l-2 border-[var(--acc)] pl-4">
                      &quot;Salutations to Lord Krishna, the supreme soul, who removes the suffering of those who surrender. I bow again and again.&quot;
                    </p>
                    <p className="border-l-2 border-[var(--acc)] pl-4 font-hindi">
                      &quot;वसुदेव के पुत्र भगवान श्री कृष्ण को प्रणाम है, जो शरण लेने वालों के सभी दुखों का नाश करते हैं। ऐसे गोविन्द को बार-बार नमन।&quot;
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard 
                glowColor="orange" 
                className="!p-10 flex flex-col items-center justify-center text-center"
              >
                <div className="relative z-10">
                  <h3 className="text-[var(--text)] text-3xl font-black tracking-widest uppercase mb-4">
                    Jai Shree Ram
                  </h3>
                  <p className="text-[var(--text3)] text-xs uppercase tracking-[0.3em] font-bold">
                    Rooted in values.<br />Focused on excellence.
                  </p>
                </div>
              </GlowCard>
            </div>
            
            <div className="mt-12 text-center relative z-10">
              <p className="text-[var(--text2)] text-lg opacity-60 max-w-2xl mx-auto italic">
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
                    <h4 className="text-2xl font-black text-white mb-2 relative z-10 uppercase tracking-tighter">Google AI</h4>
                    <p className="text-[10px] font-bold text-[#fbbf24] tracking-[0.3em] uppercase mb-8 relative z-10">Essentials Certified</p>
                    <div className="w-full h-[1px] bg-white/10 mb-8" />
                    <img src="/logo.png" className="h-10 w-auto opacity-70" alt="Rishii Designs Certification" />
                  </div>
                </ShineBorder>
              </div>

              <div className="lg:w-2/3">
                <Badge variant="outline" className="mb-6 rounded-full border-[#fbbf24]/30 text-[#fbbf24] px-4 py-1 font-bold tracking-[0.2em] uppercase text-[10px] bg-[#fbbf24]/10">
                  Google Certified
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                  Google AI Certified — <span className="text-[#fbbf24]">Rishabh Thakur.</span>
                </h2>
                <p className="text-[#8bb8d4] text-xl mb-10 leading-relaxed max-w-2xl">
                  Google AI Essentials certified. I integrate AI-assisted workflows,
                  automation and API-based solutions into GIS data pipelines,
                  dashboards and web applications for institutional and technical projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/30 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" /> Verified Google AI Credential
                  </span>
                  <Link 
                    href="/about" 
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all text-sm"
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
