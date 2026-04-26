import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, Logo Design & AI Solutions | Rishii Designs",
  description: "Explore web design, logo design, UI/UX, AI solutions, and chatbot development services by Rishii Designs — available remotely for global clients.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const services = [
    { name: "Web Design", type: "Web Design" },
    { name: "Logo Design", type: "Logo Design" },
    { name: "AI Solutions", type: "AI Solutions" },
    { name: "UI/UX Design", type: "UI/UX Design" },
  ];

  const serviceSchemas = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": s.type,
    "provider": {
      "@type": "Organization",
      "name": "Rishii Designs"
    },
    "areaServed": "Worldwide",
    "url": `https://rishiidesigns.in/services`
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      {children}
    </>
  );
}
