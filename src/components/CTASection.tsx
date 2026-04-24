"use client";

import { useEffect, useId, useRef, useState, JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ShineBorder, Timeline } from "@/components/ui/shine-border";

const tiles = [
  {
    icon: (
      <div className="relative h-[120px] w-[200px] md:h-[200px] md:w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
          alt="Portfolio 1"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <div className="relative h-[120px] w-[200px] md:h-[200px] md:w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
          alt="Portfolio 2"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <div className="relative h-[120px] w-[200px] md:h-[200px] md:w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
          alt="Portfolio 3"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <div className="relative h-[120px] w-[200px] md:h-[200px] md:w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
          alt="Portfolio 4"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <div className="relative h-[120px] w-[200px] md:h-[200px] md:w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
          alt="Portfolio 5"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <div className="relative h-[120px] w-[200px] md:h-[200px] md:w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
          alt="Portfolio 6"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    ),
    bg: <div className=""></div>,
  },
];

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const Card = (card: { icon: JSX.Element; bg: JSX.Element }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative h-full w-full cursor-pointer rounded-md border object-cover p-1 md:rounded-2xl md:p-2"
      )}
    >
      {card.icon}
    </motion.div>
  );
};

export function CallToActionSection() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRandomTiles1(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta-marquee" className="relative py-20 overflow-hidden">
      <div className="flex flex-col gap-6">
        <Marquee
          direction="right"
          speed={50}
          className="[--duration:70s]"
        >
          <div className="gap-4 flex pr-4">
            {randomTiles1.map((tile, idx) => (
              <Card key={`top-${idx}`} {...tile} />
            ))}
          </div>
        </Marquee>
        <Marquee
          speed={50}
          className="[--duration:70s]"
        >
          <div className="gap-4 flex pr-4">
            {randomTiles1.map((tile, idx) => (
              <Card key={`bottom-${idx}`} {...tile} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default function CTASection() {
  return (
    <section id="how-it-works" className="relative p-6 max-w-7xl mx-auto my-32">
      <ShineBorder
        borderWidth={3}
        className="border bg-[var(--bg-card)] shadow-2xl backdrop-blur-md p-8 md:p-16 border-[var(--acc-border)]"
        color={["#38bdf8", "#818cf8", "#c084fc"]}
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="mb-12 text-4xl md:text-5xl font-black text-[var(--text)] text-center">How it <span className="text-gradient">Works?</span></h2>
          <div className="w-full flex justify-center mb-16">
            <Timeline />
          </div>
          <div className="z-10 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold md:text-5xl text-[var(--text)] tracking-tight">
              Design anything you <span className="text-gradient">need</span>
            </h1>
            <p className="mt-4 text-[var(--text2)] text-lg max-w-md">
              Elite design solutions delivered with precision. No friction, just results.
            </p>
            <div className="mb-8 mt-10 flex flex-col md:flex-row gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "default",
                  }),
                  "group rounded-full px-8 py-6 text-lg font-bold bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[var(--bg)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all"
                )}
              >
                Get Started
                <ChevronRight className="ml-2 size-5 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group rounded-full px-8 py-6 text-lg font-bold border-[var(--acc-border)] text-[var(--text)] hover:bg-[var(--acc-dim)] transition-all"
                )}
              >
                View Services
                <ChevronRight className="ml-2 size-5 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 rounded-3xl bg-[var(--bg)] opacity-50 blur-xl" />
      </ShineBorder>
    </section>
  );
}
