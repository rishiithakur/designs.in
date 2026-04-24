"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function InfiniteSlider({ items }: { items: { id: number; url: string; title: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    
    // Calculate total width of one set of items
    const track = trackRef.current;
    
    // GSAP infinite scroll
    const animation = gsap.to(track, {
      xPercent: -50, // scroll half way (since we duplicated the array)
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    // Pause on hover
    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-10 relative" ref={containerRef}>
      {/* Gradient fades for the edges */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      
      <div ref={trackRef} className="flex gap-6 w-max">
        {duplicatedItems.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="w-[280px] h-[180px] md:w-[400px] md:h-[250px] shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer border border-[var(--acc-border)] hover:border-[#38bdf8]/50 transition-colors"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[var(--text)] font-bold">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
