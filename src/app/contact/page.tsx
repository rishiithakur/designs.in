"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import React, { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formsubmit.co/ajax/Rishu9882876884@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <HeroGeometric
        badge="Contact Us"
        title1="Let's Build"
        title2="Something Amazing"
        description="Hire Rishii Designs for your next project. Whether it's high-end web design services, custom logo design, or innovative AI solutions, our India-based studio is available remotely for global clients worldwide. Reach out to a freelance web designer today."
      >
        <div className="max-w-7xl mx-auto mt-12 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 uppercase text-[var(--text)]">
                Get in <span className="text-[var(--acc)]">Touch.</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center text-[var(--acc)] group-hover:bg-[var(--acc)] group-hover:text-[var(--bg)] transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text3)] mb-1">
                      Email
                    </p>
                    <p className="text-lg font-bold text-[var(--text)]">
                      Rishu9882876884@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center text-[var(--acc)] group-hover:bg-[var(--acc)] group-hover:text-[var(--bg)] transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text3)] mb-1">
                      WhatsApp / Call
                    </p>
                    <p className="text-lg font-bold text-[var(--text)]">
                      +91 9882876884
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--acc-dim)] border border-[var(--acc-border)] flex items-center justify-center text-[var(--acc)] group-hover:bg-[var(--acc)] group-hover:text-[var(--bg)] transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text3)] mb-1">
                      Location
                    </p>
                    <p className="text-lg font-bold text-[var(--text)]">
                      Hamirpur, Himachal Pradesh
                    </p>
                    <p className="text-sm text-[var(--text2)]">
                      Available Remotely / Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <ShineBorder
                color={["#38bdf8", "#818cf8", "#c084fc"]}
                borderRadius={32}
                borderWidth={1}
                className="!bg-[var(--acc-dim)] backdrop-blur-xl p-0"
              >
                {isSubmitted ? (
                  <div className="p-8 md:p-12 text-center py-20 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 border border-green-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-[var(--text2)] max-w-sm">
                      Thank you for reaching out. We have received your message and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-sm font-bold text-[#38bdf8] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    className="p-8 md:p-12 space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text3)]">
                          Full Name
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          className="w-full bg-[var(--bg)] border border-[var(--acc-border)] rounded-xl px-4 py-4 focus:border-[var(--acc)] outline-none transition-colors text-[var(--text)]"
                          placeholder="Rishabh Thakur"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text3)]">
                          Email
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          className="w-full bg-[var(--bg)] border border-[var(--acc-border)] rounded-xl px-4 py-4 focus:border-[var(--acc)] outline-none transition-colors text-[var(--text)]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text3)]">
                          Project Type
                        </label>
                        <select
                          name="project_type"
                          title="Select Project Type"
                          className="w-full bg-[var(--bg)] border border-[var(--acc-border)] rounded-xl px-4 py-4 focus:border-[var(--acc)] outline-none transition-colors text-[var(--text)] appearance-none"
                        >
                          <option>Premium Web Design</option>
                          <option>AI Photo/Video Editing</option>
                          <option>Branding & Identity</option>
                          <option>Digital Strategy</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text3)]">
                          Estimated Budget
                        </label>
                        <input
                          name="budget"
                          type="text"
                          className="w-full bg-[var(--bg)] border border-[var(--acc-border)] rounded-xl px-4 py-4 focus:border-[var(--acc)] outline-none transition-colors text-[var(--text)]"
                          placeholder="e.g. ₹50k - ₹1L"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text3)]">
                        Message
                      </label>
                      <textarea
                        required
                        name="message"
                        className="w-full bg-[var(--bg)] border border-[var(--acc-border)] rounded-xl px-4 py-4 focus:border-[var(--acc)] outline-none transition-colors min-h-[120px] text-[var(--text)]"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-xl bg-[var(--acc)] text-white font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_var(--acc-glow)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </ShineBorder>
            </motion.div>
          </div>
        </div>
      </HeroGeometric>

      <Footer />
    </main>
  );
}
