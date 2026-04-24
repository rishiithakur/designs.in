"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Wand2, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { ServiceCard, type ServiceCardProps } from "./ui/service-card";

const topServices: ServiceCardProps[] = [
  {
    planName: "Website Design (Premium)",
    description: "High-end futuristic websites with AI-style UI",
    price: "$60",
    originalPrice: "$100",
    inrPrice: "₹4,999",
    icon: <Sparkles className="w-6 h-6" />,
    iconBgClass: "from-[#c084fc]/20 to-[#a855f7]/20",
    highlight: "PREMIUM",
    features: [
      "Advanced UI/UX with glassmorphism",
      "Custom animations & micro-interactions",
      "AI-style futuristic design",
      "Custom sections & premium layouts",
    ],
  },
  {
    planName: "Logo Design",
    description: "Premium logos for brands, startups & creators",
    price: "$6",
    originalPrice: "$10",
    inrPrice: "₹499",
    icon: <Palette className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#0ea5e9]/20",
    highlight: "MOST POPULAR",
    features: [
      "Basic: $6 (₹499) → 2 logo concepts",
      "Standard: $12 (₹999) → 5 concepts + revisions",
      "Premium: $25 (₹1,999) → full brand-style logo",
      "AI-enhanced modern concepts",
    ],
  },
  {
    planName: "AI Content + Design Combo",
    description: "AI-generated visuals + UI design for branding",
    price: "$12",
    originalPrice: "$20",
    inrPrice: "₹999",
    icon: <Wand2 className="w-6 h-6" />,
    iconBgClass: "from-[#c084fc]/20 to-[#38bdf8]/20",
    features: [
      "AI-generated brand visuals",
      "Complete UI design package",
      "Social media kit included",
      "Full branding consistency",
    ],
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[var(--acc-dim)] relative border-y border-[var(--acc-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-6">
            Our Top <span className="text-gradient">Services.</span>
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Premium quality at budget-friendly prices. Explore our most popular offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] text-[#060d18] font-bold text-lg hover:scale-105 transition-transform"
          >
            View All Services & Pricing
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
