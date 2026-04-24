"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { CardCarousel } from "@/components/ui/card-carousel";
import { TubesBackground } from "@/components/ui/neon-flow";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { IntroAnimation } from "@/components/ui/intro-animation";
import { ShineBorder } from "@/components/ui/shine-border";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Globe, Cpu, Database, Layers, Palette, Shield, Award, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

const expertiseCards = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "World Bank Projects",
    desc: "DRIP-II, NHP, STEP Integration",
    color: "blue" as const,
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI & Automation",
    desc: "Chatbots, Python, Power BI",
    color: "purple" as const,
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "GIS & Spatial Data",
    desc: "ArcGIS Pro, Google Earth Engine",
    color: "green" as const,
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Full-Stack Dev",
    desc: "React, Next.js, MySQL, PostgreSQL",
    color: "blue" as const,
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Glassmorphism, Premium Editorial",
    color: "purple" as const,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Gov-Tech Systems",
    desc: "MIS, DHARMA, GRM Portals",
    color: "orange" as const,
  },
];

const cycleWords = [
  "premium digital experiences.",
  "futuristic AI-powered websites.",
  "brands that stand out.",
  "high-converting landing pages.",
  "modern UI/UX that feels alive.",
  "stunning visuals with AI.",
  "fast, responsive web solutions.",
  "your online identity.",
  "designs that sell.",
  "next-gen web experiences.",
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [galleryImages, setGalleryImages] = useState<{ src: string; alt: string; category?: string }[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("title, image_url, category")
          .order("id", { ascending: false })
          .limit(10);
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          const validItems = data
            .filter(item => item.image_url)
            .map(item => ({
              src: item.image_url,
              alt: item.title || "Project Highlights",
              category: item.category || "Rishii Designs"
            }));
          
          if (validItems.length > 0) {
            setGalleryImages(validItems);
          }
        }
      } catch (err) {
        console.error("Home gallery fetch error:", err);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      <IntroAnimation onComplete={() => setShowIntro(false)} />

      <main
        className={`min-h-screen bg-[var(--bg)] text-[var(--text)] transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />

        <TubesBackground className="min-h-screen !bg-transparent">
        <HeroGeometric
          badge="Rishii Designs — Elite Studio"
          title1="Architecture for"
          title2="Digital Excellence"
        >
          {/* AnimatedTextCycle */}
          <div className="max-w-4xl mx-auto text-center mb-8 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--text2)] relative">
              We build{" "}
              <AnimatedTextCycle
                words={cycleWords}
                interval={3000}
                className="text-[var(--text)] font-bold"
              />
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/gallery"
              className="px-8 py-4 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] text-[var(--text)] font-bold transition-all hover:bg-[var(--acc-glow)]"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[var(--acc)] text-white font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--acc-glow)]"
            >
              Start a Project
            </Link>
          </div>
        </HeroGeometric>

          <div className="relative z-10 bg-transparent">
            {/* Expertise GlowCards */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-6">
                  Core <span className="text-gradient">Expertise.</span>
                </h2>
                <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
                  From World Bank institutional systems to cutting-edge AI — here&apos;s what I bring to every project.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {expertiseCards.map((card, index) => (
                  <GlowCard
                    key={index}
                    glowColor={card.color}
                    customSize
                    className="!p-5 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--acc-dim)] flex items-center justify-center text-[var(--acc)] mb-3 relative z-10">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text)] mb-1 relative z-10">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[var(--text2)] relative z-10">
                      {card.desc}
                    </p>
                  </GlowCard>
                ))}
              </div>
            </section>

            {/* Philosophy/Stats Section */}
            <section className="py-32 px-8 bg-[var(--acc-dim)] backdrop-blur-sm border-y border-[var(--acc-border)]">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[var(--text)]">
                      Institutional Precision. <br />
                      <span className="text-gradient">Startup Speed.</span>
                    </h2>
                    <p className="text-[var(--text2)] text-xl mb-12 leading-relaxed">
                      At Rishii Designs, we believe that high-end design should
                      never come at the cost of technical performance. Our
                      methodology combines the rigorous standards of global
                      institutions with the agility of a boutique studio.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-5xl font-black text-[var(--acc)] mb-2">
                          99.9%
                        </h4>
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text)] opacity-40">
                          Performance Score
                        </p>
                      </div>
                      <div>
                        <h4 className="text-5xl font-black text-[#818cf8] mb-2">
                          50+
                        </h4>
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--text)] opacity-40">
                          Projects Delivered
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
                      <div className="aspect-video rounded-[40px] overflow-hidden bg-[var(--bg-card)] backdrop-blur-xl flex items-center justify-center p-12">
                        <div className="text-center">
                          <p className="text-[var(--text2)] italic text-2xl mb-8">
                            &quot;We don&apos;t just build websites; we
                            architect digital legacies for the most ambitious
                            brands in the world.&quot;
                          </p>
                          <p className="text-[var(--text)] font-bold uppercase tracking-widest">
                            — Rishabh Thakur
                          </p>
                        </div>
                      </div>
                    </ShineBorder>
                  </div>
                </div>
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
                      <img src="/logorishii.svg" className="h-6 opacity-30 grayscale invert" alt="Rishii Designs" />
                    </div>
                  </ShineBorder>
                </div>

                <div className="lg:w-2/3">
                  <Badge variant="outline" className="mb-6 rounded-full border-[#fbbf24]/30 text-[#fbbf24] px-4 py-1 font-bold tracking-[0.2em] uppercase text-[10px] bg-[#fbbf24]/10">
                    Premium Accreditation
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                    Empowered by <span className="text-[#fbbf24]">Google AI.</span>
                  </h2>
                  <p className="text-[#8bb8d4] text-xl mb-10 leading-relaxed max-w-2xl">
                    Our workflow is officially recognized and certified by Google. We integrate 
                    advanced generative AI strategies to accelerate your brand's growth and 
                    architect futuristic digital infrastructures.
                  </p>
                  <div className="flex gap-6">
                    <button 
                      disabled
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/30 font-bold cursor-not-allowed opacity-80"
                    >
                      <ShieldCheck className="w-4 h-4" /> Secured Digital Credential
                    </button>
                    <Link 
                      href="/about" 
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all"
                    >
                      View All Certs <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <CardCarousel
              title="Design Mastery"
              subtitle="Explore our most prestigious projects, where architectural precision meets digital innovation."
              images={galleryImages.length > 0 ? galleryImages : [
                {
                  src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
                  alt: "Elysian Residence",
                  category: "Architecture",
                },
                {
                  src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
                  alt: "Zenith Interior",
                  category: "Interior Design",
                },
                {
                  src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
                  alt: "Obsidian Heights",
                  category: "Commercial",
                },
                {
                  src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
                  alt: "Lumina Pavillion",
                  category: "Exhibition",
                },
                {
                  src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
                  alt: "Nova HQ",
                  category: "Modern Office",
                },
              ]}
            />
            <ServicesPreview />
            <CTASection />
          </div>
        </TubesBackground>

        <Footer />
      </main>
    </>
  );
}
