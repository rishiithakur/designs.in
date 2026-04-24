import React from "react";
import { motion } from "framer-motion";
import { CertificateCard } from "./ui/certificate-card";

interface Certificate {
  name: string;
  issuer: string;
  logo: string;
}

const certificates: Certificate[] = [
  { 
    name: "Microsoft Office Specialist", 
    issuer: "Microsoft",
  },
  { 
    name: "AI for Content Creation", 
    issuer: "Coursera",
  },
  { 
    name: "Google AI Essentials", 
    issuer: "Google",
  },
  { 
    name: "AI Writing & Communication", 
    issuer: "Coursera",
  },
  { 
    name: "AI for Data Analytics", 
    issuer: "Coursera",
  },
  { 
    name: "Google AI: Research & Insights", 
    issuer: "Google",
  },
  { 
    name: "AI & Brainstorming", 
    issuer: "Coursera",
  },
];

export default function CertificateSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <CertificateCard
            name={cert.name}
            issuer={cert.issuer}
            imageUrl="/assets/cert_bg.png"
            className="w-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
