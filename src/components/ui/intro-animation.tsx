"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Faster exit
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[var(--bg)] flex items-center justify-center overflow-hidden"
        >
          {/* Central Logo/Text Animation */}
          <div className="relative perspective-1000">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: 20, y: 40, filter: "blur(40px)" }}
              animate={{ 
                scale: [0.9, 1, 1.05], 
                opacity: [0, 1, 1],
                rotateX: [20, 0, 0],
                y: [40, 0, 0],
                filter: ["blur(40px)", "blur(0px)", "blur(0px)"]
              }}
              transition={{ 
                duration: 3, 
                times: [0, 0.4, 1],
                ease: "easeOut" 
              }}
              className="flex flex-col items-center"
            >
              <div className="text-7xl md:text-9xl font-black tracking-tighter text-[var(--text)] drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                RISHII
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-xl md:text-2xl font-bold tracking-[0.4em] text-[#38bdf8] uppercase mt-2 ml-4"
              >
                DESIGNS
              </motion.div>
            </motion.div>

            {/* Glowing lines like cinematic streaks */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "140%", opacity: [0, 1, 0] }}
              transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent shadow-[0_0_40px_#38bdf8]"
            />
            
            {/* Particle burst at the end */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 6, opacity: [0, 0.8, 0] }}
              transition={{ delay: 2.2, duration: 1.2, ease: "circOut" }}
              className="absolute inset-0 rounded-full bg-gradient-radial from-[#38bdf8]/40 to-transparent blur-3xl"
            />
          </div>

          {/* Background scanlines/noise for texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-white/[0.05] brightness-100" />
          
          {/* Subtle light pulse */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-radial from-[#38bdf8]/5 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
