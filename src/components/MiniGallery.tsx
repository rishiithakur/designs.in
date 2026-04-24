"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { ShineBorder } from "./ui/shine-border";

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
}

export default function MiniGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("id, title, image_url")
          .order("id", { ascending: false })
          .limit(3);

        if (error) throw error;
        setItems(data || []);
      } catch (error) {
        console.error("Error fetching mini gallery:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#060d18]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Featured <span className="text-gradient">Creations.</span>
            </h2>
            <p className="text-[#8bb8d4] text-lg max-w-xl">
              A curated selection of our most impactful digital experiences.
            </p>
          </div>
          <Link 
            href="/gallery" 
            className="group flex items-center gap-2 text-[#38bdf8] font-bold hover:text-white transition-colors"
          >
            Explore Full Gallery 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#38bdf8] animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ShineBorder
                  color={["#38bdf8", "#818cf8", "#c084fc"]}
                  borderRadius={24}
                  borderWidth={2}
                  className="!bg-transparent p-0 overflow-hidden"
                >
                  <div className="relative aspect-[4/5] group cursor-pointer">
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </ShineBorder>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
