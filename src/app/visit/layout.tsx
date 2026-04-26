import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Us | Rishii Designs",
  description: "Visit Rishii Designs online or connect with us for premium web and logo design services worldwide.",
  alternates: {
    canonical: "/visit",
  },
};

export default function VisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
