"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark(!isDark);
    // Visual flair: we keep it dark luxury but run a flash animation
    const flash = document.createElement("div");
    flash.className = "fixed inset-0 bg-white pointer-events-none z-[9999] opacity-0 transition-opacity duration-500";
    document.body.appendChild(flash);
    
    requestAnimationFrame(() => {
      flash.classList.add("opacity-10");
      setTimeout(() => {
        flash.classList.remove("opacity-10");
        setTimeout(() => flash.remove(), 500);
      }, 100);
    });
  };

  return (
    <button
      onClick={toggle}
      className="relative flex items-center justify-between w-14 h-7 bg-[#0a1628] rounded-full p-1 border border-[#38bdf8]/30 shadow-inner overflow-hidden cursor-pointer"
    >
      <div className="flex items-center justify-center w-full h-full relative z-0">
        <Sun className="w-3 h-3 text-[#fbbf24] absolute left-1.5" />
        <Moon className="w-3 h-3 text-[#8bb8d4] absolute right-1.5" />
      </div>
      <motion.div
        className="absolute w-5 h-5 bg-gradient-to-br from-[#bae6fd] to-[#38bdf8] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)] z-10"
        animate={{ left: isDark ? "calc(100% - 24px)" : "4px" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
