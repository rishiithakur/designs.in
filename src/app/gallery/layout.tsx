import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Logo Portfolio | Rishii Designs",
  description: "Browse the web design and logo design portfolio of Rishii Designs — real client work from an India-based studio serving global brands.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
