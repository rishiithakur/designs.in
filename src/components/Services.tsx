"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Gift, Rocket, Palette, Sparkles, UserCircle, Camera } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "startup",
    title: "Startup / Business App",
    desc: "Modern SaaS-style web application. Fully responsive, fast-loading, with premium design that builds trust and converts visitors.",
    price: "$60",
    originalPrice: "$100",
    inrPrice: "₹4,999",
    icon: Rocket,
    popular: true,
  },
  {
    id: "portfolio",
    title: "Premium Portfolio",
    desc: "Your personal brand online — clean, modern, fully responsive. Built to impress clients, employers & collaborators.",
    price: "$35",
    originalPrice: "$60",
    inrPrice: "₹2,999",
    icon: UserCircle,
  },
  {
    id: "restoration",
    title: "AI Photo Restoration",
    desc: "Give us your oldest photo and we'll make it look like it was clicked today. We also change backgrounds & enhance quality.",
    price: "$6",
    originalPrice: "$10",
    inrPrice: "₹499",
    icon: Camera,
    popular: true,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-card-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/5 mb-6 shadow-[0_4px_24px_rgba(56,189,248,0.15)]">
            <span className="text-xs font-bold text-[#bae6fd] tracking-widest uppercase">Expertise & Offerings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-6 tracking-tight">
            Digital Excellence, <span className="text-gradient">Delivered.</span>
          </h2>
          <p className="text-[var(--text2)] max-w-2xl mx-auto text-lg">
            I don't just design interfaces; I build fully functional, production-ready systems.
            You get the complete package.
          </p>
        </div>

        {/* Quality Guarantee Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-6 md:p-8 rounded-3xl border border-[var(--acc-border)] bg-[var(--bg-card)] flex flex-col md:flex-row items-center gap-6 shadow-[0_16px_40px_rgba(0,0,0,0.3)] transform transition-transform hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-[#38bdf8]/10 flex items-center justify-center shrink-0">
            <Code2 className="w-8 h-8 text-[#38bdf8]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text)] mb-2 flex items-center gap-2">
              Full Working Code Only <Sparkles className="w-4 h-4 text-[#fbbf24]" />
            </h3>
            <p className="text-[var(--text2)] text-sm md:text-base leading-relaxed">
              Unlike traditional design agencies that only hand over Figma files, I deliver 
              <strong> 100% production-ready, highly-optimized code</strong>. 
              Deploy instantly to Vercel, Netlify, or your preferred hosting. No translation needed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <ShineBorder
              key={svc.id}
              color={["#38bdf8", "#818cf8", "#c084fc"]}
              borderRadius={24}
              borderWidth={2}
              duration={10}
              className="svc-card-anim !bg-transparent p-0"
            >
              <div className="bg-[var(--bg-card)] w-full h-full p-8 flex flex-col relative overflow-hidden group cursor-pointer rounded-[24px]">
                {svc.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] text-[var(--bg)] text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase z-10">
                    Most Popular
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <svc.icon className="w-7 h-7 text-[#38bdf8]" />
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text)] mb-3 relative z-10">{svc.title}</h3>
                <p className="text-sm text-[var(--text2)] mb-8 flex-grow leading-relaxed relative z-10">
                  {svc.desc}
                </p>
                
                <div className="pt-6 border-t border-[#38bdf8]/10 flex flex-col relative z-10 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[var(--text3)] line-through opacity-50">{svc.originalPrice}</span>
                    <span className="text-[10px] font-black text-[var(--lemon-glow)] bg-[var(--lemon-glow)]/10 px-1.5 py-0.5 rounded border border-[var(--lemon-glow)]/20 animate-pulse">40% OFF</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[var(--lemon-glow)] drop-shadow-[0_0_10px_rgba(190,242,100,0.3)]">{svc.price}</span>
                    <span className="text-xs font-bold text-[var(--lemon-glow)]/70">{svc.inrPrice}</span>
                  </div>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
