"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShieldCheck, Award } from "lucide-react";

interface CertificateCardProps {
  name: string;
  issuer: string;
  imageUrl: string;
  className?: string;
}

export function CertificateCard({
  name,
  issuer,
  imageUrl,
  className,
}: CertificateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPct = (x / rect.width - 0.5) * 15; // 15deg max tilt
    const yPct = (y / rect.height - 0.5) * -15;
    
    setRotation({ x: yPct, y: xPct });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full max-w-[500px] aspect-[1.4/1] transition-transform duration-200 ease-out preserve-3d group cursor-default",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#38bdf8]/20 to-[#818cf8]/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main Card */}
      <div className="relative h-full w-full bg-[#0a0a0a] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl flex flex-col translate-z-10">
        
        {/* Certificate Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src={imageUrl} 
                alt="Certificate Design" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Top Bar */}
            <div className="flex justify-between items-start mb-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group-hover:border-[#fbbf24]/30 transition-all flex items-center justify-center min-w-[120px]"
                >
                    <span className="text-xl font-black italic tracking-tighter bg-gradient-to-br from-[#fef3c7] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent uppercase">
                        {issuer}
                    </span>
                </motion.div>
                <motion.div 
                    animate={{ 
                        boxShadow: ["0 0 0px rgba(56,189,248,0)", "0 0 15px rgba(56,189,248,0.3)", "0 0 0px rgba(56,189,248,0)"] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 px-4 py-1.5 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full backdrop-blur-md relative overflow-hidden group/verified"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/verified:animate-shine transition-all" />
                    <ShieldCheck className="w-3 h-3 text-[#38bdf8] animate-pulse" />
                    <span className="text-[10px] font-black text-[#38bdf8] uppercase tracking-widest relative z-10">Verified</span>
                </motion.div>
            </div>

            {/* Certificate Details */}
            <div className="translate-z-20">
                <p className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-[0.4em] mb-2">Certificate of Achievement</p>
                <h3 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#38bdf8] transition-all">
                    {name}
                </h3>
                
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest">Recipient</span>
                        <span className="text-xs font-bold text-white/80">Rishabh Thakur</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest">Issuer</span>
                        <span className="text-xs font-bold text-white/80">{issuer}</span>
                    </div>
                    <div className="ml-auto">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                            <Award className="w-5 h-5 text-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-4 right-8 pointer-events-none opacity-[0.03] select-none">
            <p className="text-5xl font-black italic tracking-tighter">SECURE</p>
        </div>
      </div>
    </div>
  );
}
