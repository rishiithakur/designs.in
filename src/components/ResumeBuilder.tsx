"use client";

import { useState } from "react";
import { Sparkles, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { sendBookingEmail } from "@/lib/emailjs";

export default function ResumeBuilder() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      jobTitle: formData.get("jobTitle"),
      experience: formData.get("experience"),
      skills: formData.get("skills"),
      service: "Resume Builder Priority Access"
    };

    const result = await sendBookingEmail(data);
    
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      // Redirect to thank-you page after a short delay
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1500);
    } else {
      setStatus("error");
    }
    
    setTimeout(() => {
      if(status !== "success") setStatus("idle");
    }, 4000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_60%)] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/10 mb-6 shadow-[0_4px_24px_rgba(251,191,36,0.15)]">
              <Sparkles className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-xs font-bold text-[#fbbf24] tracking-widest uppercase">Premium Service</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Stop Applying. <br />
              <span className="text-gradient">Start Getting Recruited.</span>
            </h2>
            
            <p className="text-[#8bb8d4] text-lg mb-8 leading-relaxed">
              Your resume is the most important financial document you own. 
              We transform standard CVs into high-impact, ATS-optimized executive briefs that 
              command attention and higher salary offers.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "ATS-Optimized Formatting (100% Parse Rate)",
                "Executive-Level Copywriting & Impact Metrics",
                "Custom High-End Visual Design (PDF & Figma)",
                "LinkedIn Profile Optimization Guide included"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4ade80] shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 text-sm font-semibold text-[#8bb8d4] uppercase tracking-widest">
              <span>Investment: $199</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span>48h Turnaround</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#38bdf8]/20 to-[#fbbf24]/20 rounded-3xl blur-2xl transform -rotate-3" />
            <div className="w-full bg-[#0a1628]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#38bdf8]/20 shadow-[0_24px_64px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#38bdf8]/10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0284c7] to-[#0ea5e9] flex items-center justify-center shadow-[0_8px_24px_rgba(56,189,248,0.4)] relative z-10">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">Apply for Optimization</h3>
                  <p className="text-sm text-[#8bb8d4]">Limited to 5 clients per week.</p>
                </div>
              </div>

              {status === "success" ? (
                <div className="py-12 text-center relative z-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Application Received!</h4>
                  <p className="text-[#8bb8d4]">I'll review your details and be in touch within 12 hours with the next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#8bb8d4] uppercase tracking-wider">Full Name</label>
                      <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[#3d6080]" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#8bb8d4] uppercase tracking-wider">Email</label>
                      <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[#3d6080]" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#8bb8d4] uppercase tracking-wider">Target Job Title</label>
                      <input required name="jobTitle" type="text" className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[#3d6080]" placeholder="e.g. Senior Product Manager" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#8bb8d4] uppercase tracking-wider">Experience</label>
                      <select required name="experience" title="Experience Level" className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all appearance-none">
                        <option value="">Select Level...</option>
                        <option value="0-2">0-2 Years (Entry)</option>
                        <option value="3-5">3-5 Years (Mid)</option>
                        <option value="6-10">6-10 Years (Senior)</option>
                        <option value="10+">10+ Years (Executive)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#8bb8d4] uppercase tracking-wider">Core Skills (Comma separated)</label>
                    <input required name="skills" type="text" className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[#3d6080]" placeholder="React, Node.js, Leadership..." />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[#060d18] font-bold text-[15px] shadow-[0_8px_32px_rgba(56,189,248,0.3)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.5)] transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                    ) : (
                      "Request Optimization"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
