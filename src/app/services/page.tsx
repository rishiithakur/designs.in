"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Palette,
  Camera,
  Monitor,
  Sparkles,
  Rocket,
  Layers,
  Image,
  FileText,
  Globe,
  Wand2,
} from "lucide-react";
import { ServiceCard, type ServiceCardProps } from "@/components/ui/service-card";
import { BeamsBackground } from "@/components/ui/beams-background";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

const allServices: ServiceCardProps[] = [
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
      "Premium: $25 (₹1,999) → full brand-style logo + priority",
      "AI-enhanced modern concepts",
    ],
  },
  {
    planName: "AI Photo Restoration",
    description: "Give us your oldest photo and we'll make it look like it was clicked today. We also change backgrounds & enhance quality.",
    price: "$6",
    originalPrice: "$10",
    inrPrice: "₹499",
    icon: <Camera className="w-6 h-6" />,
    iconBgClass: "from-[#818cf8]/20 to-[#6366f1]/20",
    highlight: "VIRAL SERVICE",
    features: [
      "Restore old/blurry photos to 4K",
      "Background replacement & cleanup",
      "Face enhancement & realistic retouching",
      "Colorization of B&W memories",
    ],
  },
  {
    planName: "Website Design (Basic)",
    description: "Modern responsive websites with clean UI",
    price: "$35",
    originalPrice: "$60",
    inrPrice: "₹2,999",
    icon: <Monitor className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#7dd3fc]/20",
    features: [
      "3–5 pages, fully responsive",
      "Mobile-first design",
      "Basic animations & transitions",
      "Fast performance & SEO ready",
    ],
  },
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
    planName: "Landing Page Design",
    description: "High-converting pages for products & startups",
    price: "$25",
    originalPrice: "$45",
    inrPrice: "₹1,999",
    icon: <Rocket className="w-6 h-6" />,
    iconBgClass: "from-[#f59e0b]/20 to-[#fbbf24]/20",
    features: [
      "Conversion-optimized layout",
      "A/B testing ready structure",
      "Mobile responsive design",
      "CTA-focused user flow",
    ],
  },
  {
    planName: "UI/UX Design",
    description: "Clean modern design for apps & dashboards",
    price: "$25",
    originalPrice: "$45",
    inrPrice: "₹1,999",
    icon: <Layers className="w-6 h-6" />,
    iconBgClass: "from-[#818cf8]/20 to-[#a78bfa]/20",
    features: [
      "App & dashboard UI design",
      "User research & wireframing",
      "Interactive prototyping",
      "Design system creation",
    ],
  },
  {
    planName: "Social Media Design",
    description: "Posts, banners & branding for social platforms",
    price: "$6",
    originalPrice: "$10",
    inrPrice: "₹499",
    icon: <Image className="w-6 h-6" />,
    iconBgClass: "from-[#f472b6]/20 to-[#ec4899]/20",
    features: [
      "Instagram & Facebook posts",
      "YouTube thumbnails & banners",
      "Brand-consistent templates",
      "Bulk design packages available",
    ],
  },
  {
    planName: "Resume Builder",
    description: "Professional ATS-friendly resume creation",
    price: "$6",
    originalPrice: "$10",
    inrPrice: "₹499",
    icon: <FileText className="w-6 h-6" />,
    iconBgClass: "from-[#22c55e]/20 to-[#4ade80]/20",
    highlight: "NEW",
    features: [
      "Modern professional layout",
      "ATS-friendly formatting",
      "Content writing & optimization",
      "Multiple format exports",
    ],
  },
  {
    planName: "Portfolio Website",
    description: "Personal portfolio for developers & designers",
    price: "$35",
    originalPrice: "$60",
    inrPrice: "₹2,999",
    icon: <Globe className="w-6 h-6" />,
    iconBgClass: "from-[#38bdf8]/20 to-[#818cf8]/20",
    features: [
      "Showcase projects beautifully",
      "Custom animations & effects",
      "Contact form integration",
      "SEO optimized & fast loading",
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-[var(--text)]">
      <Navbar />

      <BeamsBackground className="pt-20">
        <section className="pt-20 pb-20 px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#38bdf8] font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              What we do best
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
            >
              WEB DESIGN, LOGO <span className="text-gradient">&amp; AI SOLUTIONS.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text2)] text-xl max-w-2xl mx-auto"
            >
              Explore web design, logo design, UI/UX, and AI solutions by Rishii Designs — available remotely for global clients worldwide.
            </motion.p>
          </div>
        </section>

        <section className="py-12 px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 text-[var(--acc)] font-bold hover:underline"
            >
              View web design portfolio <Globe className="w-4 h-4" />
            </Link>
            <p className="text-[var(--text3)] text-sm mt-4 max-w-lg mx-auto">
              All prices are approximate and may vary based on complexity.
              Remote web design services available for global clients.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-[var(--bg2)] border-y border-[var(--acc-border)]">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-widest text-[var(--text)]">
              Our Web Design <span className="text-gradient">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding your goals and worldwide audience.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Planning the architecture and global roadmap.",
                },
                {
                  step: "03",
                  title: "Design",
                  desc: "Crafting the visual experience for your brand.",
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "Executing and optimizing for global growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--acc-border)]"
                >
                  <span className="text-5xl font-black text-[#38bdf8]/20 absolute top-4 right-8">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-4 mt-8 text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text2)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BeamsBackground>

      <LampContainer className="min-h-[80vh] md:min-h-screen">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white via-[#bae6fd] to-[#38bdf8] py-4 bg-clip-text text-center text-5xl font-black tracking-tighter text-transparent md:text-8xl"
        >
          HIRE A FREELANCE <br /> WEB DESIGNER.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-lg shadow-[0_4px_30px_rgba(56,189,248,0.4)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(56,189,248,0.6)] transition-all"
          >
            Start Your Project
          </Link>
        </motion.div>
      </LampContainer>

      <Footer />
    </main>
  );
}
