"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Heart } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      
      <HeroGeometric 
        badge="Success"
        title1="Message"
        title2="Received."
        description="Thank you for reaching out to Rishii Designs. We've received your inquiry and our team will get back to you within 24 hours."
      >
        <div className="flex flex-col items-center gap-8 mt-12 relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.5 
            }}
            className="w-24 h-24 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.3)]"
          >
            <CheckCircle2 className="w-12 h-12 text-green-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all font-bold group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/gallery"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#020617] font-bold shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
            >
              Browse Gallery
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold mt-12"
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Rishii
          </motion.p>
        </div>
      </HeroGeometric>

      <Footer />
    </main>
  );
}
