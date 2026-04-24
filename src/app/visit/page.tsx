"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";

export default function VisitPage() {
  useEffect(() => {
    gsap.fromTo(
      ".visit-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
    );
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#020c1b] overflow-hidden p-6">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(56,189,248,0.1),transparent_70%)] blur-[80px] animate-pulse" />
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_70%)] blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        <div className="visit-anim w-24 h-24 mx-auto mb-10 rounded-3xl bg-gradient-to-br from-[#0284c7] via-[#38bdf8] to-[#bae6fd] flex items-center justify-center shadow-[0_20px_60px_rgba(56,189,248,0.4),0_0_0_16px_rgba(56,189,248,0.06)] relative before:absolute before:inset-[-4px] before:rounded-[36px] before:border before:border-[#38bdf8]/30 before:animate-[spin_4s_linear_infinite]">
          <span className="text-4xl font-black text-white font-['Space_Grotesk']">R</span>
        </div>

        <h3 className="visit-anim text-[#38bdf8] text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Welcome to the Future
        </h3>

        <h1 className="visit-anim text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          Enter The <br />
          <span className="bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-transparent bg-clip-text">
            Premium Experience
          </span>
        </h1>

        <p className="visit-anim text-[#8bb8d4] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          You are about to enter a digital space crafted with precision, passion, and cutting-edge performance.
        </p>

        <div className="visit-anim flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-lg shadow-[0_8px_32px_rgba(56,189,248,0.4)] hover:scale-105 hover:shadow-[0_16px_48px_rgba(56,189,248,0.6)] transition-all"
          >
            Enter Studio <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://twitter.com/rishiidesigns"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-10 py-5 rounded-full border border-[#38bdf8]/30 text-[#bae6fd] bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/60 font-bold text-lg transition-all"
          >
            <Sparkles className="w-5 h-5" /> Follow on X
          </a>
        </div>
      </div>
    </main>
  );
}
