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
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  { 
    name: "AI for Content Creation", 
    issuer: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg",
  },
  { 
    name: "Google AI Essentials", 
    issuer: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  { 
    name: "AI Writing & Communication", 
    issuer: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg",
  },
  { 
    name: "AI for Data Analytics", 
    issuer: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg",
  },
  { 
    name: "Google AI: Research & Insights", 
    issuer: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  { 
    name: "AI & Brainstorming", 
    issuer: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg",
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
            logo={cert.logo}
            imageUrl="/assets/cert_bg.png"
            className="w-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
