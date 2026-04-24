"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

import { AwardBadge } from "./ui/award-badge";
import AnimatedTextCycle from "./ui/animated-text-cycle";
import { PulseBeams } from "./ui/PulseBeams";

import { TubesBackground } from "./ui/neon-flow";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scatter animation setup
      gsap.set(".scatter-item", {
        x: () => Math.random() * 400 - 200,
        y: () => Math.random() * 400 - 200,
        rotation: () => Math.random() * 90 - 45,
        opacity: 0,
        scale: 0.5,
      });

      // Initial reveal
      gsap.to(".scatter-item", {
        x: 0, y: 0, rotation: 0, opacity: 1, scale: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2
      });

      // Scroll morphing
      gsap.to(".scatter-container", {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
        },
        scale: 0.8,
        y: 150,
        opacity: 0,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen overflow-hidden bg-[#060d18]">
      {/* Neon Flow (Tubes) Background */}
      <TubesBackground className="absolute inset-0" enableClickInteraction={true} />

      {/* Main Content (Scatter Morph) */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center max-w-7xl mx-auto px-6 z-10 scatter-container">
        
        <div className="scatter-item flex items-center gap-4 mb-8">
          <AwardBadge type="product-of-the-day" place={1} />
          <AwardBadge type="product-of-the-week" place={2} />
        </div>

        <h1 className="scatter-item text-6xl md:text-8xl font-black text-white text-center leading-[1.1] mb-6 font-['Space_Grotesk'] tracking-tight flex flex-col items-center">
          <span>Design That Feels</span>
          <AnimatedTextCycle words={["Futuristic.", "Unstoppable.", "Premium.", "Alive."]} />
        </h1>

        <p className="scatter-item text-lg md:text-xl text-[#8bb8d4] mb-12 text-center max-w-2xl leading-relaxed">
          Transforming visions into high-end, production-ready digital realities. 
          Expect nothing less than excellence.
        </p>

        <div className="scatter-item flex flex-wrap items-center justify-center gap-6">
          <div className="relative">
            <PulseBeams />
            <Link
              href="#book"
              className="relative overflow-hidden flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-[15px] shadow-[0_8px_32px_rgba(56,189,248,0.4)] hover:scale-105 transition-transform z-10"
            >
              <span className="relative z-10 flex items-center gap-2">Book Your Project <ArrowRight className="w-5 h-5" /></span>
            </Link>
          </div>
          <Link
            href="#gallery"
            className="relative overflow-hidden flex items-center gap-2 px-10 py-5 rounded-full border border-[#38bdf8]/30 text-[#bae6fd] bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/60 font-bold text-[15px] transition-all"
          >
            <span className="relative z-10">View Gallery</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
