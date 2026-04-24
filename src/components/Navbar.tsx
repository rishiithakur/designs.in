"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import CinematicThemeSwitcher from "./ui/cinematic-theme-switcher";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(20);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  React.useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 mx-auto w-full border-b border-transparent md:transition-all md:ease-out",
        {
          "bg-[var(--bg-nav)] backdrop-blur-xl border-[var(--acc-border)] shadow-[0_8px_48px_rgba(0,0,0,0.3)] md:top-4 md:max-w-6xl md:rounded-full md:border":
            scrolled && !open,
          "bg-[var(--bg)]": open,
          "bg-transparent": !scrolled && !open,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-[76px] w-full items-center justify-between px-6 md:transition-all md:ease-out max-w-7xl mx-auto",
          {
            "md:px-6 h-16 md:h-14": scrolled,
          }
        )}
      >
        <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setOpen(false)}>
          <img
            src="/logorishii.svg"
            alt="Rishii Designs Logo"
            className={cn(
              "h-10 md:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform",
              { "md:h-8": scrolled }
            )}
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link, i) => (
            <Link
              key={i}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-sm font-bold text-[var(--text2)] hover:text-[var(--text)] hover:bg-white/5 transition-colors"
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <CinematicThemeSwitcher />
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-sm shadow-[0_4px_20px_rgba(56,189,248,0.3)] hover:scale-105 hover:shadow-[0_8px_32px_rgba(56,189,248,0.5)] transition-all ml-2"
          >
            <Sparkles className="w-4 h-4" />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex lg:hidden items-center gap-2 z-50">
          <CinematicThemeSwitcher />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="text-[var(--text)] hover:bg-white/10 ml-2"
          >
            <MenuToggleIcon open={open} className="size-6" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[76px] right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden bg-[var(--bg)]/98 backdrop-blur-3xl lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=open]:fade-in-0 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 data-[slot=closed]:fade-out-0 ease-out",
            "flex h-full w-full flex-col justify-between p-6 pt-10"
          )}
        >
          <div className="grid gap-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                className="text-3xl font-black text-[var(--text)] hover:text-[var(--acc)] tracking-tight py-2 transition-colors border-b border-white/5"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 pb-12">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex justify-center items-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-lg shadow-[0_4px_20px_rgba(56,189,248,0.3)] active:scale-95 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Book Your Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
