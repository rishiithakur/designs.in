'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { RiTwitterXLine } from 'react-icons/ri';
import { motion, Variants } from 'framer-motion';

type Mode = 'light' | 'dark';

export interface Testimonial {
  image?: string;
  name?: string;
  jobtitle?: string;
  text?: string;
  audio?: string;
  social?: string;
}

interface ComponentProps {
  mode: Mode;
  testimonials: Testimonial[];
}

const WaveVariants = (): Variants[] => {
  const waveVariants: Variants[] = [];
  for (let i = 0; i < 30; i++) {
    waveVariants.push({
      initial: {
        scaleY: 1.5,
        transition: {
          duration: 0.5,
        },
      },
      animate: {
        scaleY: [1, Math.random() * 1.2 + 1, 1],
        transition: {
          duration: Math.random() * 0.5 + 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 0.5,
        },
      },
    });
  }
  return waveVariants;
};

const waveVariantsList = WaveVariants();

export const VoiceTestimonial: React.FC<ComponentProps> = ({ mode, testimonials }) => {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);
  const audioElements = useRef<(HTMLAudioElement | null)[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const elements: (HTMLAudioElement | null)[] = [];
    testimonials.forEach((testimonial) => {
      if (testimonial.audio) {
        const audio = new Audio(testimonial.audio.startsWith('http') ? testimonial.audio : `/audio/${testimonial.audio}`);
        audio.addEventListener('ended', () => setCurrentPlayingIndex(null));
        elements.push(audio);
      } else {
        elements.push(null);
      }
    });
    audioElements.current = elements;

    return () => {
      elements.forEach((audio) => {
        if (audio) {
          audio.pause();
        }
      });
    };
  }, [testimonials]);

  const handlePlay = (index: number) => {
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      stopAudio(currentPlayingIndex);
    }

    const audio = audioElements.current[index];
    if (audio) {
      audio.play().catch((error) => console.error('Audio playback error:', error));
      setCurrentPlayingIndex(index);
    }
  };

  const stopAudio = (index: number) => {
    const audio = audioElements.current[index];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setCurrentPlayingIndex(null);
    }
  };

  const handlePause = (index: number) => {
    stopAudio(index);
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const openInNewTab = (url: string) => {
    if (!url) return;
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    }
  };

  const shouldShowLoadMore = testimonials.length > 6;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-12">
          <h2 className="text-center text-4xl md:text-5xl font-black text-[var(--text)] tracking-tight">
            Hear From Our <span className="text-gradient">Partners.</span>
          </h2>
          <p className="text-center text-[var(--text2)] text-lg max-w-2xl mx-auto">
            Authentic feedback from our global community of startups, founders, and creative directors.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className={`flex justify-center items-center gap-6 flex-wrap overflow-hidden ${showAll ? 'max-h-full' : 'max-h-[850px]'} relative transition-all duration-700`}>
          {!showAll && shouldShowLoadMore && <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--bg)] to-transparent z-10 pointer-events-none"></div>}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] border border-[var(--acc-border)] w-85 min-h-[320px] rounded-3xl p-8 relative hover:border-[#38bdf8]/50 transition-all group shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div onClick={() => openInNewTab(testimonial.social || '')} className="absolute top-8 right-8 z-10">
                <RiTwitterXLine
                  className={`${mode === 'dark' ? 'text-[#38bdf8]' : 'text-slate-800'} cursor-pointer opacity-50 group-hover:opacity-100 transition-opacity`}
                  size={20}
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full border-2 border-[#38bdf8]/30 bg-[#38bdf8]/10 flex items-center justify-center">
                    {testimonial.image ? (
                        <Image
                        src={testimonial.image}
                        alt={testimonial.name || 'User'}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            // Fallback to initials if image fails
                            const target = e.target as HTMLElement;
                            target.style.display = 'none';
                        }}
                        />
                    ) : null}
                    <span className="text-[#38bdf8] font-black text-xl select-none">
                        {testimonial.name?.charAt(0)}
                    </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--text)] font-bold text-lg">{testimonial.name}</span>
                  <span className="text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
                    {testimonial.jobtitle}
                  </span>
                </div>
              </div>
              <div className="mt-6 mb-8">
                <p className="text-[var(--text2)] text-base leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
              
              <div className="bg-[var(--bg2)] w-full h-16 rounded-2xl flex justify-between items-center px-4 relative border border-[var(--acc-border)]">
                {currentPlayingIndex !== index ? (
                  <button 
                    onClick={() => handlePlay(index)}
                    aria-label="Play audio testimonial"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#38bdf8] text-[var(--bg)] hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <button 
                    onClick={() => handlePause(index)}
                    aria-label="Pause audio testimonial"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#38bdf8] text-[var(--bg)] hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zM17.25 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
                <div className="flex items-center gap-[2px] pr-2">
                  {waveVariantsList.map((variant, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#38bdf8]"
                      style={{
                        width: '3px',
                        height: `12px`,
                        borderRadius: '2px',
                        opacity: 0.4
                      }}
                      variants={variant}
                      initial="initial"
                      animate={currentPlayingIndex === index ? 'animate' : 'initial'}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {shouldShowLoadMore && !showAll && (
          <div className="flex justify-center mt-12 relative z-20">
            <button
              className="px-8 py-3 bg-gradient-to-r from-[#bae6fd] to-[#38bdf8] text-[var(--bg)] font-bold rounded-full hover:scale-105 shadow-[0_8px_32px_rgba(56,189,248,0.3)] transition-all"
              onClick={handleLoadMore}>
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
