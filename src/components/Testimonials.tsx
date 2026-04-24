"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote: "The attention to detail and 3D integration completely transformed our brand. Best investment we made this year.",
    name: "Alex Rivera",
    role: "CEO, StellarTech",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    quote: "Not just design, but fully functional, blazing fast code. Delivered exactly on time with zero bugs.",
    name: "Sarah Jenkins",
    role: "Founder, Bloom",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote: "A true architect. Our conversion rate doubled after the redesign. The glassmorphism effects are flawless.",
    name: "Michael Chen",
    role: "VP Marketing, Nova",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testi-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Don't Just Take <span className="text-gradient">My Word.</span>
          </h2>
          <p className="text-[#8bb8d4] text-lg max-w-xl mx-auto">
            What founders and industry leaders are saying about my work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ShineBorder
              key={i}
              color={["#38bdf8", "#818cf8", "#c084fc"]}
              borderRadius={32}
              borderWidth={2}
              duration={14}
              className="testi-card !bg-transparent p-0"
            >
              <div className="glass-card w-full h-full p-8 relative overflow-hidden group">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[#38bdf8]/10 group-hover:text-[#38bdf8]/20 transition-colors" />
                <p className="text-white text-lg leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-[#38bdf8]/10 pt-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#38bdf8]/30" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-[#38bdf8] text-xs font-semibold uppercase tracking-wider">{t.role}</p>
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
