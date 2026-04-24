"use client";

import Link from "next/link";
import { Globe, Camera, Briefcase, Mail, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[var(--bg-footer)] border-t border-[var(--acc-border)] overflow-hidden pt-24 pb-12">
      {/* Background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--acc-dim),transparent_65%)] blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,var(--acc-dim),transparent_65%)] blur-[50px] pointer-events-none" />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--acc)] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 group inline-flex">
              <img 
                src="/logorishii.svg" 
                alt="Rishii Designs Logo" 
                className="h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform" 
              />
            </Link>
            
            <div className="flex items-center gap-4 mb-8 p-3 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:border-[#38bdf8]/30 transition-all group/avatar">
              <Avatar className="h-12 w-12 border-2 border-[#38bdf8]/20 group-hover/avatar:border-[#38bdf8]/50 transition-all">
                <AvatarImage src="/selfie.jpg" alt="Rishabh Thakur" className="object-cover" />
                <AvatarFallback className="bg-[var(--bg2)] text-[#38bdf8]">RT</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[var(--text)] font-bold text-sm">Rishabh Thakur</p>
                <p className="text-[#38bdf8] text-[10px] uppercase tracking-widest font-medium">Founder & Architect</p>
              </div>
            </div>

            <p className="text-[var(--text2)] text-sm leading-relaxed mb-8 max-w-xs">
              Architecting digital experiences that feel like they belong in 2026. 
              Specializing in institutional-grade development and premium editorial design.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: "#" },
                { icon: Camera, href: "#" },
                { icon: Briefcase, href: "#" },
              ].map((Social, i) => (
                <a key={i} href={Social.href} aria-label={Social.icon.displayName || 'Social link'} className="w-10 h-10 rounded-xl border border-[var(--acc-border)] bg-[var(--acc-dim)] flex items-center justify-center hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] text-[var(--text)] transition-all hover:-translate-y-1">
                  <Social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text)] opacity-40 tracking-widest uppercase mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#38bdf8] after:to-transparent">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[var(--text2)] hover:text-[var(--text)] hover:pl-2 text-sm font-medium transition-all inline-flex items-center group">
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2 text-[#38bdf8]">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text)] opacity-40 tracking-widest uppercase mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-[#38bdf8] after:to-transparent">
              Information
            </h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Client Portal'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[var(--text2)] hover:text-[var(--text)] text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Col */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-xs font-bold text-green-400 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available Now
            </div>
            <p className="text-[var(--text2)] text-sm mb-6">
              Currently accepting new projects for Q3 2026. Let's build something extraordinary.
            </p>
            <a href="mailto:Rishu9882876884@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--acc-dim)] border border-[var(--acc-border)] hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 text-[var(--text)] text-sm font-bold transition-all group">
              <Mail className="w-4 h-4 text-[#38bdf8]" />
              Rishu9882876884@gmail.com
              <ArrowUpRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--acc-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--text2)]">
            © {new Date().getFullYear()} <strong className="text-[var(--text)]">Rishii Designs</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-[#38bdf8]/50 tracking-widest uppercase border border-[#38bdf8]/20 bg-[#38bdf8]/5 px-3 py-1 rounded-full">
              Built in India 🇮🇳
            </span>
            <button onClick={scrollToTop} className="text-[var(--text2)] hover:text-[var(--text)] text-sm font-medium transition-colors">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
