import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-h",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-b",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-lux",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rishii Designs – Web Design, Logo & AI Services Worldwide",
  description: "Rishii Designs by Rishabh Thakur offers AI-powered web design, logo creation, branding, and full-stack development for clients worldwide. Based in India, working globally.",
  keywords: ["Rishii Designs", "web design services", "logo design services", "AI web design", "freelance web designer", "UI UX design", "branding services", "full-stack developer", "chatbot development", "AI automation"],
  metadataBase: new URL("https://rishiidesigns.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rishii Designs – Web Design, Logo & AI Services Worldwide",
    description: "Rishii Designs by Rishabh Thakur offers AI-powered web design, logo creation, branding, and full-stack development for clients worldwide.",
    url: "https://rishiidesigns.in",
    siteName: "Rishii Designs",
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
    "name": "Rishabh Thakur"
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
  "jobTitle": "Freelance Web Designer & AI Developer",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
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
