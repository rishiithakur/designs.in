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
  title: "Rishii Designs | Premium Web Design & AI Studio",
  description: "Premium web design, logo design & AI editing by Rishii Designs. Built by Rishii Thakur — bringing luxury and futuristic web experiences to life.",
  keywords: ["web design", "premium websites", "startup landing pages", "portfolio design", "logo design", "UI/UX", "AI image editing"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
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
