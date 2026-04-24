"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string; category?: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  title?: string
  subtitle?: string
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  title = "Curated Gallery",
  subtitle = "A glimpse into our high-performance architectural design and editorial excellence."
}) => {

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:items-center text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-[#38bdf8]/30 text-[#38bdf8] px-4 py-1 font-bold tracking-[0.2em] uppercase text-[10px] bg-[#38bdf8]/10"
          >
            <SparklesIcon className="w-3 h-3 mr-2 fill-[#38bdf8]" />
            Project Spotlight
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black text-[var(--text)] tracking-tighter mb-6 leading-[1.1]">
            {title}
          </h2>
          <p className="text-[var(--text2)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative group/carousel">
          {showNavigation && (
            <>
              <div className="nav-btn nav-prev custom-prev">
                <ChevronLeft className="w-6 h-6" />
              </div>
              <div className="nav-btn nav-next custom-next">
                <ChevronRight className="w-6 h-6" />
              </div>
            </>
          )}

          <Swiper
            key={images.length}
            spaceBetween={30}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={images.length > 3}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={showPagination ? { clickable: true } : false}
            navigation={
              showNavigation
                ? {
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }
                : undefined
            }
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="card-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[var(--acc-border)] group/slide shadow-2xl">
                  <Image
                    src={image.src}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/slide:scale-110"
                    alt={image.alt}
                    sizes="(max-width: 768px) 260px, 320px"
                  />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/slide:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover/slide:translate-y-0 transition-transform duration-500">
                    {image.category && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-2 block">
                            {image.category}
                        </span>
                    )}
                    <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                      {image.alt}
                    </h4>
                    <div className="w-8 h-[2px] bg-[#38bdf8] transform origin-left scale-x-0 group-hover/slide:scale-x-100 transition-transform duration-500 delay-100" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
