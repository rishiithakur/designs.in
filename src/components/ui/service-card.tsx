"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  planName: string;
  description: string;
  price: string;
  originalPrice?: string;
  inrPrice?: string;
  features: string[];
  icon: React.ReactNode;
  iconBgClass: string;
  highlight?: string;
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--bg)]"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function ServiceCard({
  planName,
  description,
  price,
  originalPrice,
  inrPrice,
  features,
  icon,
  iconBgClass,
  highlight,
}: ServiceCardProps) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "var(--bg-card)",
    backgroundImage:
      "radial-gradient(at 88% 40%, var(--bg) 0px, transparent 85%)," +
      " radial-gradient(at 49% 30%, var(--bg) 0px, transparent 85%)," +
      " radial-gradient(at 14% 26%, var(--bg) 0px, transparent 85%)," +
      " radial-gradient(at 0% 64%, rgba(56, 189, 248, 0.05) 0px, transparent 85%)," +
      " radial-gradient(at 41% 94%, rgba(129, 140, 248, 0.05) 0px, transparent 85%)," +
      " radial-gradient(at 100% 99%, rgba(192, 132, 252, 0.05) 0px, transparent 85%)",
    boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.02) inset",
  };

  const borderContainerStyle: React.CSSProperties = {
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: -1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% + 2px)",
    height: "calc(100% + 2px)",
    backgroundImage:
      "linear-gradient(0deg, rgba(255,255,255,0.05) -50%, rgba(255,255,255,0.1) 100%)",
    borderRadius: "1rem",
  };

  const rotatingBorderStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 200,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
    transformOrigin: "left",
    width: "200%",
    height: "10rem",
    backgroundImage:
      "linear-gradient(0deg, transparent 0%, rgba(56, 189, 248, 0.6) 40%, rgba(56, 189, 248, 0.6) 60%, transparent 100%)",
    animation: "card-rotate 8s linear infinite",
  };

  return (
    <div
      className="relative hover:bg-white/[0.02] transition-all duration-300 group rounded-2xl p-10 flex flex-col w-full h-full overflow-hidden border border-[var(--acc-border)]"
      style={cardStyle}
    >
      {highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[40] w-full flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#38bdf8] blur-[15px] opacity-10" />
            <span className="relative flex items-center justify-center gap-3 bg-[#38bdf8] text-[#060d18] text-[10px] font-black tracking-[0.25em] px-8 py-2.5 rounded-b-xl shadow-2xl uppercase border-x border-b border-white/20 min-w-[140px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#060d18] animate-pulse" />
              {highlight}
              <span className="w-1.5 h-1.5 rounded-full bg-[#060d18] animate-pulse" />
            </span>
          </div>
        </div>
      )}

      <div className="flex-grow relative z-10">
        <div style={borderContainerStyle}>
          <div style={rotatingBorderStyle}></div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div
            className={`h-14 w-14 rounded-2xl border border-[var(--acc-border)] bg-gradient-to-br ${iconBgClass} flex items-center justify-center text-[var(--text)]`}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--text)]">
              {planName}
            </h3>
            <p className="text-base text-[var(--text2)] mt-1.5 leading-snug">
              {description}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-1">
          <div className="flex items-center gap-3 min-h-[24px]">
            {originalPrice ? (
              <span className="text-sm font-bold text-[var(--text3)] line-through opacity-50">
                {originalPrice}
              </span>
            ) : null}
            <span className="text-sm font-black text-[var(--lemon-glow)] bg-[var(--lemon-glow)]/10 px-2 py-0.5 rounded border border-[var(--lemon-glow)]/20 animate-pulse">
              40% OFF
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tight text-[var(--lemon-glow)] drop-shadow-[0_0_15px_rgba(190,242,100,0.3)]">
              {price}
            </span>
            {inrPrice && (
              <span className="text-sm font-bold text-[var(--lemon-glow)]/70 tracking-tighter">
                {inrPrice}
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-4 text-base text-[var(--text2)] mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="flex items-center justify-center min-w-[24px] w-[24px] h-[24px] bg-[#38bdf8] rounded-full mt-0.5">
                <CheckIcon />
              </div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto relative z-10">
        <Link
          href="/contact"
          className="w-full h-12 rounded-xl flex items-center justify-center gap-2 bg-[var(--acc-dim)] border border-[var(--acc-border)] text-[var(--text)] font-bold hover:bg-[#38bdf8] hover:text-[#060d18] hover:border-[#38bdf8] transition-all group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
