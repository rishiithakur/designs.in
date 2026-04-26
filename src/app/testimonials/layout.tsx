import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Rishii Designs",
  description: "Read what our clients say about Rishii Designs. Premium web design and AI solutions reviews from global startups and brands.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
