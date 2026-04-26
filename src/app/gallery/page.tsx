"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArgentLoopSlider } from "@/components/ui/argent-loop-infinite-slider";
import { motion } from "framer-motion";

import { TubesBackground } from "@/components/ui/neon-flow";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <TubesBackground className="fixed inset-0 z-0 opacity-40" />
      <Navbar />
      
      <div className="relative pt-32 pb-12 px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-4"
        >
          DESIGN <span className="text-gradient">PORTFOLIO.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#8bb8d4] text-xl max-w-2xl mx-auto"
        >
          Browse the web design and logo design portfolio of Rishii Designs — showcasing real client work for global brands and startups worldwide.
        </motion.p>
      </div>

      <div className="h-[80vh] w-full relative">
        <ArgentLoopSlider />
      </div>

      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Web Design & Logo Solutions</h2>
            <p className="text-[#8bb8d4] leading-relaxed mb-6">
              Our portfolio represents the pinnacle of freelance web design and branding services. At Rishii Designs, we architect digital legacies that blend architectural precision with futuristic AI solutions. Each project in our web design portfolio is built to convert and scale for global clients.
            </p>
            <div className="flex gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-black text-[#38bdf8]">50+</p>
                    <p className="text-xs uppercase tracking-widest text-[#8bb8d4]">Global Projects</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-black text-[#818cf8]">India</p>
                    <p className="text-xs uppercase tracking-widest text-[#8bb8d4]">Based Origin</p>
                </div>
            </div>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Rishii Designs Studio - Web Design & AI Solutions Worldwide" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] to-transparent opacity-60" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
