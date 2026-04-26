import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rishabh Thakur – Founder of Rishii Designs",
  description: "Rishabh Thakur is the founder of Rishii Designs — an India-based freelance web designer and AI developer delivering modern websites and digital solutions worldwide.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
