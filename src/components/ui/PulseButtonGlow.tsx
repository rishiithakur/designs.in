"use client";

import React from "react";
import { motion } from "framer-motion";

export function PulseButtonGlow() {
  return (
    <div className="absolute -inset-4 pointer-events-none z-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border border-[#38bdf8] blur-sm"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute inset-0 rounded-full border border-[#bae6fd] blur-md"
      />
    </div>
  );
}
