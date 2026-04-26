'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VoiceTestimonial, Testimonial } from "@/components/ui/voice-testimonial";
import { TubesBackground } from "@/components/ui/neon-flow";

const testimonials: Testimonial[] = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop',
    name: 'Aarav Mehta',
    jobtitle: 'Founder, TechBharat',
    text: 'The AI integration in our landing page is flawless. Rishii delivered a product that not only looks premium but performs at the highest level. Truly a game-changer for Indian startups.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    social: 'https://twitter.com/aaravmehta',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1780&auto=format&fit=crop',
    name: 'Sarah Jenkins',
    jobtitle: 'Creative Director, Bloom',
    text: 'Rishii\'s attention to luxury aesthetics is unmatched. The glassmorphism and subtle animations create an editorial feel that our high-end clients absolutely love.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    social: 'https://twitter.com/sarahjenkins',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1780&auto=format&fit=crop',
    name: 'Priya Sharma',
    jobtitle: 'CEO, LuxeDesign',
    text: 'Our rebranding journey with Rishii was phenomenal. He understood our vision for a minimalist yet authoritative presence and executed it with perfection.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    social: 'https://twitter.com/priyasharma',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1780&auto=format&fit=crop',
    name: 'Michael Chen',
    jobtitle: 'VP Marketing, Nova',
    text: 'Our conversion rate doubled within a month of the redesign. The intuitive UI and lightning-fast performance are a testament to Rishii\'s architectural approach to web design.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    social: 'https://twitter.com/michaelchen',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1780&auto=format&fit=crop',
    name: 'Ananya Iyer',
    jobtitle: 'Startup Founder, Aura',
    text: 'The 3D elements and custom illustrations added a whole new dimension to our product. Rishii doesn\'t just build websites; he crafts digital experiences that stick.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    social: 'https://twitter.com/ananyaiyer',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1780&auto=format&fit=crop',
    name: 'David Miller',
    jobtitle: 'Tech Lead, Nexus',
    text: 'As a developer, I appreciate the clean, modular code Rishii delivers. It\'s rare to find someone who balances high-end design with such technical rigor. Absolute professional.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    social: 'https://twitter.com/davidmiller',
  },
  {
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1780&auto=format&fit=crop',
    name: 'Rajesh Khanna',
    jobtitle: 'Founder, RK Ventures',
    text: 'He delivered exactly what was promised, and on time. The communication throughout the project was excellent. If you want a world-class website, Rishii is the one.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    social: 'https://twitter.com/rajeshkhanna',
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1780&auto=format&fit=crop',
    name: 'Elena Rossi',
    jobtitle: 'Creative Lead, Moda',
    text: 'The elegance of the design paired with futuristic technology is exactly what our brand needed. Rishii has a unique gift for visual storytelling through web interfaces.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    social: 'https://twitter.com/elenarossi',
  },
  {
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1780&auto=format&fit=crop',
    name: 'Siddharth Gupta',
    jobtitle: 'Digital Strategist',
    text: 'Rishii understands the psychology of design. Every element on the page serves a purpose, guiding the user toward conversion without being intrusive. Simply brilliant.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    social: 'https://twitter.com/sidgupta',
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1780&auto=format&fit=crop',
    name: 'James Wilson',
    jobtitle: 'E-commerce Expert',
    text: 'Fastest turnaround I\'ve ever experienced with zero compromise on quality. The site is blazing fast and looks like it costs ten times more than it did.',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    social: 'https://twitter.com/jameswilson',
  },
];

import { NeuralNoise } from "@/components/ui/neural-noise";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col">
      <Navbar />
      
      <div className="flex-grow relative pt-32 pb-20 overflow-hidden">
        {/* Background Neural Noise */}
        <NeuralNoise color={[0.22, 0.74, 0.97]} opacity={0.6} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              CLIENT <span className="text-gradient">VOICES.</span>
            </h1>
            <p className="text-[#8bb8d4] text-xl max-w-2xl mx-auto">
              Read what our global clients say about Rishii Designs. Premium web design and AI solutions reviews from visionaries and founders we've partnered with worldwide.
            </p>
          </div>
          <VoiceTestimonial mode="dark" testimonials={testimonials.map(t => ({ ...t, image: undefined }))} />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
