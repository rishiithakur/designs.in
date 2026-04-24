"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

// Helper for random colors
const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({ 
  children, 
  className,
  enableClickInteraction = true 
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = () => {
      if (!canvasRef.current) return;

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
      script.type = "module";
      script.async = true;
      
      script.onload = () => {
        if (!mounted || !canvasRef.current) return;
        
        try {
          // @ts-ignore
          const TubesCursor = window.TubesCursor;
          if (!TubesCursor) {
             console.error("TubesCursor not found on window");
             return;
          }

          const app = TubesCursor(canvasRef.current, {
            tubes: {
              colors: ["#f967fb", "#53bc28", "#6958d5"],
              lights: {
                intensity: 200,
                colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
              }
            }
          });

          tubesRef.current = app;
          setIsLoaded(true);

          cleanup = () => {
            if (app && typeof app.destroy === 'function') {
              app.destroy();
            }
          };
        } catch (err) {
          console.error("Error initializing TubesCursor:", err);
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    const scriptCleanup = initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
      if (scriptCleanup) scriptCleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    
    tubesRef.current.tubes.setColors(colors);
    tubesRef.current.tubes.setLightsColors(lightsColors);
  };

  return (
    <div 
      className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-background", className)}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
