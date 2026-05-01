"use client";

import * as React from "react";
import { supabase } from "@/lib/supabase";

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
}

const FALLBACK_DATA: ProjectData[] = [
  {
    title: "Premium Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    category: "Design",
    year: "2025",
    description: "Premium portfolio project",
  },
];

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export function ArgentLoopSlider() {
  const [projectData, setProjectData] = React.useState<ProjectData[]>(FALLBACK_DATA);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("id, title, image_url")
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setProjectData(
            data.map((item: { id: string; title: string; image_url: string }, i: number) => ({
              title: item.title || `Project ${i + 1}`,
              image: item.image_url,
              category: "Rishii Designs",
              year: new Date().getFullYear().toString(),
              description: "Premium portfolio project",
            }))
          );
        }
      } catch (err) {
        console.error("Supabase gallery error:", err);
      }
    };
    fetchImages();
  }, []);

  const getProjectData = (index: number) => {
    const i = ((Math.abs(index) % projectData.length) + projectData.length) % projectData.length;
    return projectData[i];
  };

  const getProjectNumber = (index: number) => {
    return (
      ((Math.abs(index) % projectData.length) + projectData.length) % projectData.length + 1
    )
      .toString()
      .padStart(2, "0");
  };

  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0,
    minimapHeight: 180, // Updated height
  });

  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const requestRef = React.useRef<number>(0);

  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number
  ) => {
    if (!img) return;
    
    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }
    
    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);
    
    if (Math.abs(current - target) > 0.01) {
        img.style.transform = `translateY(${current}px) scale(1.5)`;
        img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY =
      s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    if (s.projectHeight === 0) return;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: Date.now(),
      y: s.targetY,
      target: target,
    };
  };

  const updatePositions = () => {
    const s = state.current;
    if (s.projectHeight === 0) return;
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      updateParallax(img, s.currentY, index, s.projectHeight);
    });

    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      if (img) {
          updateParallax(img, minimapY, index, s.minimapHeight);
      }
    });

    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  const animate = () => {
    const s = state.current;
    const now = Date.now();

    if (s.projectHeight === 0) return;

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint =
        -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();
  };

  const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

  const animationLoop = () => {
     animate();
     
     const s = state.current;
     if (s.projectHeight > 0) {
       const currentIndex = Math.round(-s.targetY / s.projectHeight);
       const min = currentIndex - CONFIG.BUFFER_SIZE;
       const max = currentIndex + CONFIG.BUFFER_SIZE;

       if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
           renderedRange.current = { min, max };
           setVisibleRange({ min, max });
       }
     }

     requestRef.current = requestAnimationFrame(animationLoop);
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSizing = () => {
      state.current.projectHeight = container.offsetHeight;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const s = state.current;
      s.isSnapping = false;
      s.lastScrollTime = Date.now();
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      s.targetY -= delta;
    };

    const onTouchStart = (e: TouchEvent) => {
        const s = state.current;
        s.isDragging = true;
        s.isSnapping = false;
        s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
        s.lastScrollTime = Date.now();
    }

    const onTouchMove = (e: TouchEvent) => {
        const s = state.current;
        if (!s.isDragging) return;
        s.targetY =
            s.dragStart.scrollY +
            (e.touches[0].clientY - s.dragStart.y) * 1.5;
        s.lastScrollTime = Date.now();
    }

    const onTouchEnd = () => {
        state.current.isDragging = false;
    }

    updateSizing();
    
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", updateSizing);

    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", updateSizing);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div 
      ref={containerRef}
      className="parallax-container relative w-full h-full overflow-hidden bg-[#060d18] cursor-grab active:cursor-grabbing rounded-3xl border border-white/10 shadow-2xl"
    >
      <div className="project-list absolute inset-0 list-none p-0 m-0">
        {indices.map((i) => {
          const data = getProjectData(i);
          return (
            <div
              key={i}
              className="project absolute top-0 left-0 w-full h-full overflow-hidden"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img 
                src={data.image} 
                alt={data.title}
                className="absolute top-0 left-0 w-full h-full object-cover will-change-transform scale-[1.5]"
              />
            </div>
          );
        })}
      </div>

      <div className="minimap absolute right-6 top-1/2 -translate-y-1/2 z-50 w-64 h-[180px] pointer-events-none scale-75 md:scale-100 origin-right">
        <div className="minimap-wrapper relative w-full h-full flex gap-4">
          <div className="minimap-img-preview relative w-1/2 h-full overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
            {indices.map((i) => {
              const data = getProjectData(i);
              return (
                <div
                  key={i}
                  className="minimap-img-item absolute top-0 left-0 w-full h-full overflow-hidden"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <img 
                    src={data.image} 
                    alt={data.title}
                    className="absolute top-0 left-0 w-full h-full object-cover will-change-transform scale-[1.5]"
                  />
                </div>
              );
            })}
          </div>
          <div className="minimap-info-list relative w-1/2 h-full overflow-hidden">
            {indices.map((i) => {
              const data = getProjectData(i);
              const num = getProjectNumber(i);
              return (
                <div
                  key={i}
                  className="minimap-item-info absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white p-2"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  <div className="minimap-item-info-row flex justify-between items-end mb-2">
                    <p className="text-4xl font-black opacity-20 m-0">{num}</p>
                    <p className="text-sm font-bold m-0 tracking-tight">{data.title}</p>
                  </div>
                  <div className="minimap-item-info-row flex justify-between text-[10px] uppercase tracking-widest opacity-60 mb-1">
                    <p className="m-0">{data.category}</p>
                    <p className="m-0">{data.year}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p className="text-[9px] opacity-40 leading-relaxed m-0">{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none border-[20px] border-[#060d18] z-40 md:border-[40px]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#060d18] via-transparent to-[#060d18] z-30" />
    </div>
  );
}
