"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { X, ExternalLink, ImageIcon, Loader2 } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  category?: string;
}

import { InfiniteSlider } from "./ui/InfiniteSlider";
import { Marquee } from "./ui/marquee";
import { ShineBorder } from "./ui/shine-border";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "startup", label: "Startups" },
  { id: "portfolio", label: "Portfolios" },
  { id: "surprise", label: "Experiences" },
];

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data, error } = await supabase
        .from("gallery")
        .select("id, title, image_url, category")
        .order("id", { ascending: false });

      if (error) throw error;
      
      setItems(data || []);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = filter === "all" 
    ? items 
    : items.filter(item => item.category === filter);

  // Formatting items for the Marquee
  const sliderItems = items.filter(i => i.image_url);

  return (
    <section id="gallery" className="py-32 relative">
      
      {/* Premium Marquee Gallery (Team Style) */}
      {!loading && sliderItems.length > 0 && (
        <div className="mb-20 relative w-full overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[var(--bg)] to-transparent" />

          <Marquee className="[--gap:1.5rem] [--duration:50s]" pauseOnHover>
            {sliderItems.map((item) => (
              <div
                key={item.id}
                className="group flex w-72 shrink-0 flex-col cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <ShineBorder
                  color={["#38bdf8", "#818cf8", "#c084fc"]}
                  borderRadius={16}
                  borderWidth={2}
                  duration={8}
                  className="!bg-transparent p-0"
                >
                  <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-[var(--bg-card)]">
                    <Image
                      alt={item.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                      fill
                      src={item.image_url}
                    />
                    <div className="absolute bottom-0 w-full bg-[var(--bg-card)]/80 backdrop-blur-md p-4 border-t border-[#38bdf8]/20">
                      <h3 className="font-bold text-[var(--text)] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#38bdf8] text-xs font-bold uppercase tracking-widest mt-1">
                        Elite Project
                      </p>
                    </div>
                  </div>
                </ShineBorder>
              </div>
            ))}
          </Marquee>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-4 tracking-tight">
              Selected <span className="text-gradient">Works.</span>
            </h2>
            <p className="text-[var(--text2)] text-lg max-w-md">
              A glimpse into the premium digital experiences I've crafted for forward-thinking brands.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] text-[var(--bg)] shadow-[0_4px_20px_rgba(56,189,248,0.3)]"
                    : "border border-[var(--acc-border)] text-[var(--text2)] hover:border-[#38bdf8]/70 hover:text-[var(--text)] bg-[var(--bg-card)]/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-10 h-10 text-[#38bdf8] animate-spin" />
            <p className="text-[var(--text2)] font-semibold tracking-widest uppercase text-sm">Loading Masterpieces</p>
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer relative aspect-[4/3] rounded-3xl overflow-hidden"
                >
                  <ShineBorder
                    color={["#38bdf8", "#818cf8", "#c084fc"]}
                    borderRadius={24}
                    borderWidth={2}
                    duration={12}
                    className="!bg-transparent p-0"
                  >
                    <div className="w-full h-full relative overflow-hidden bg-[var(--bg-card)]">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text2)] bg-[var(--bg-card)]">
                          <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-[var(--bg)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-2 block">Premium Experience</span>
                          <h3 className="text-xl font-bold text-[var(--text)] flex items-center justify-between">
                            {item.title}
                            <ExternalLink className="w-5 h-5 text-[var(--text)]/50" />
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ShineBorder>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#020810]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#38bdf8] text-white flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.image_url ? (
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title}
                  className="w-auto h-auto max-w-full max-h-[80vh] rounded-xl border border-[#38bdf8]/30 shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(56,189,248,0.1)_inset]"
                />
              ) : (
                <div className="w-full max-w-2xl aspect-[16/9] rounded-xl border border-[#38bdf8]/30 bg-[var(--bg-card)] flex items-center justify-center shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                  <ImageIcon className="w-20 h-20 text-[var(--text2)]/50" />
                </div>
              )}
              
              <div className="mt-8 text-center">
                <span className="text-sm font-bold text-[#38bdf8] uppercase tracking-widest">Rishii Elite Design</span>
                <h3 className="text-3xl font-black text-[var(--text)] mt-2 font-['Space_Grotesk']">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
