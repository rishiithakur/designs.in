"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { sendBookingEmail } from "@/lib/emailjs";

export default function BookProduct() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      productInterest: formData.get("productInterest"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    const result = await sendBookingEmail(data);
    
    if (result.success) {
      router.push("/thank-you");
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="book" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-card p-10 md:p-16 rounded-[40px] text-center border border-[var(--acc-border)] relative overflow-hidden bg-[var(--bg-card)]">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(56,189,248,0.15),transparent_60%)] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-4 tracking-tight relative z-10">
            Let's Build Something <span className="text-gradient">Extraordinary.</span>
          </h2>
          <p className="text-[var(--text2)] text-lg max-w-xl mx-auto mb-12 relative z-10">
            Ready to elevate your digital presence? Fill out the form below and I'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="text-left space-y-6 relative z-10 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text2)] uppercase tracking-wider">Name</label>
                <input required name="name" type="text" className="w-full px-5 py-4 rounded-xl bg-[var(--bg2)] border border-[var(--acc-border)] text-[var(--text)] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[var(--text2)] opacity-80" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text2)] uppercase tracking-wider">Email</label>
                <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl bg-[var(--bg2)] border border-[var(--acc-border)] text-[var(--text)] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[var(--text2)] opacity-80" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text2)] uppercase tracking-wider">Product Interest</label>
                <select required name="productInterest" title="Product Interest" className="w-full px-5 py-4 rounded-xl bg-[var(--bg2)] border border-[var(--acc-border)] text-[var(--text)] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all appearance-none">
                  <option value="">Select an option...</option>
                  <option value="Startup App">Startup / Business App ($60 / ₹4,999+)</option>
                  <option value="Portfolio">Premium Portfolio ($35 / ₹2,999+)</option>
                  <option value="Restoration">AI Photo Restoration ($6 / ₹499)</option>
                  <option value="Logo">Brand Identity ($6 / ₹499+)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text2)] uppercase tracking-wider">Target Date (Optional)</label>
                <input name="date" type="date" title="Target Date" placeholder="Select a date" className="w-full px-5 py-4 rounded-xl bg-[var(--bg2)] border border-[var(--acc-border)] text-[var(--text2)] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[var(--text2)] uppercase tracking-wider">Project Details</label>
              <textarea required name="message" rows={4} className="w-full px-5 py-4 rounded-xl bg-[var(--bg2)] border border-[var(--acc-border)] text-[var(--text)] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all placeholder:text-[var(--text2)] opacity-80 resize-none" placeholder="Tell me about your vision..." />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                Failed to send message. Please try again or email directly.
              </div>
            )}

            <button
              disabled={status === "loading"}
              type="submit"
              className="w-full py-5 rounded-xl bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] text-[var(--bg)] font-bold text-[16px] shadow-[0_8px_32px_rgba(56,189,248,0.3)] hover:shadow-[0_16px_48px_rgba(56,189,248,0.5)] transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
            >
              {status === "loading" ? (
                <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</>
              ) : (
                <>Submit Request <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
