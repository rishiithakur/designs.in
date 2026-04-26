"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { AwardBadge } from "./award-badge";
import AnimatedTextCycle from "./animated-text-cycle";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 80;  
const IMG_HEIGHT = 110; 

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#0a1628] [backface-visibility:hidden]"
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#0c1830] flex flex-col items-center justify-center p-4 border border-[#38bdf8]/30 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                >
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-widest mb-1">Rishii</p>
                        <p className="text-xs font-medium text-white">Elite Design</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const MAX_SCROLL = 3000; 

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero() {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchSupabaseImages();
    }, []);

    const fetchSupabaseImages = async () => {
        try {
            const { data, error } = await supabase
                .from("gallery")
                .select("image_url")
                .limit(20);
            
            if (error) throw error;
            if (data) {
                setImages(data.map(item => item.image_url).filter(Boolean));
            }
        } catch (err) {
            console.error("Supabase error:", err);
            // Fallback images if Supabase fails
            setImages([
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
                "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
            ]);
        } finally {
            setLoading(false);
        }
    };

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };
        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });
        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };
        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 800], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
    const scrollRotate = useTransform(virtualScroll, [800, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return Array.from({ length: 20 }).map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubMorph = smoothMorph.on("change", setMorphValue);
        const unsubRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubParallax = smoothMouseX.on("change", setParallaxValue);
        return () => { unsubMorph(); unsubRotate(); unsubParallax(); };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#060d18]">
                <Loader2 className="w-10 h-10 text-[#38bdf8] animate-spin" />
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-[#060d18] overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Luxury in Every <br/>
                        <span className="text-gradient">
                            <AnimatedTextCycle 
                                words={["Pixel.", "Concept.", "Interface.", "Experience.", "Interaction."]} 
                                interval={2500}
                            />
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.4em] text-[#38bdf8] uppercase"
                    >
                        SCROLL TO EXPLORE ARCHIVE
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[12%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                        Elite Digital <br/>
                        <span className="text-gradient">
                            <AnimatedTextCycle 
                                words={["Architect.", "Visionary.", "Strategist.", "Innovator.", "Creator."]} 
                                interval={3000}
                            />
                        </span>
                    </h2>
                    <p className="text-[#8bb8d4] text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
                        Crafting high-end, production-ready digital experiences for the world's most ambitious brands.
                    </p>

                    {/* Award Badges */}
                    <div className="pointer-events-auto flex flex-wrap justify-center gap-4 mb-10 scale-75 md:scale-90">
                        <AwardBadge type="golden-kitty" link="#" />
                        <AwardBadge type="product-of-the-day" place={1} link="#" />
                        <AwardBadge type="product-of-the-month" place={2} link="#" />
                    </div>

                    <Link
                        href="#gallery"
                        className="pointer-events-auto flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] text-[#060d18] font-bold shadow-[0_8px_32px_rgba(56,189,248,0.4)] hover:scale-105 transition-transform"
                    >
                        View Full Archive <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {images.map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i] || scatterPositions[0];
                        } else if (introPhase === "line") {
                            const lineSpacing = 90; 
                            const lineTotalWidth = images.length * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);
                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / images.length) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;
                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (images.length - 1);
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8; 
                            const boundedRotation = -scrollProgress * maxRotation;
                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={images.length}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
