import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rishabh Thakur — GIS & Data Solutions Specialist | Rishii Designs",
  description: "Rishabh Thakur is a GIS & Data Solutions Specialist with experience in geospatial data, remote sensing, Google Earth Engine, ArcGIS Pro, Python automation, AI-assisted development and digital systems on World Bank-funded programs. Founder of Rishii Designs.",
  keywords: ["Rishabh Thakur", "GIS analyst", "geospatial data specialist", "remote sensing", "Google Earth Engine", "ArcGIS Pro", "Python automation", "AI solutions", "Rishii Designs", "web design", "data processing", "MIS systems", "World Bank projects"],
  metadataBase: new URL("https://rishiidesigns.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Rishabh Thakur — GIS & Data Solutions Specialist | Rishii Designs",
    description: "GIS & Data Solutions Specialist with experience in geospatial data, remote sensing, Python automation and AI-assisted development on World Bank-funded programs. Founder of Rishii Designs.",
    url: "https://rishiidesigns.in",
    siteName: "Rishii Designs — Rishabh Thakur",
    images: [
      {
        url: "https://rishiidesigns.in/profile.png",
        width: 1200,
        height: 1200,
        alt: "Rishabh Thakur — Founder of Rishii Designs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rishii Designs",
  "url": "https://rishiidesigns.in",
  "logo": "https://rishiidesigns.in/logorishii.svg",
  "founder": {
    "@type": "Person",
    "name": "Rishabh Thakur",
    "image": "https://rishiidesigns.in/profile.png"
  },
  "areaServed": "Worldwide",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rishii-thakur",
    "https://github.com/rishiithakur",
    "https://www.instagram.com/rishiidesigns.ai",
    "https://www.instagram.com/i.rishii.thakur"
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rishabh Thakur",
  "jobTitle": "GIS & Data Solutions Specialist",
  "image": "https://rishiidesigns.in/profile.png",
  "worksFor": {
    "@type": "Organization",
    "name": "Rishii Designs"
  },
  "url": "https://rishiidesigns.in/about",
  "sameAs": [
    "https://www.linkedin.com/in/rishii-thakur",
    "https://github.com/rishiithakur"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://rishiidesigns.in",
  "name": "Rishii Designs",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rishiidesigns.in/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

import { ThemeProvider } from "@/components/providers";
import { SecurityGuard } from "@/components/SecurityGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SecurityGuard />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
