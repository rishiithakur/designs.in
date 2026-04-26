import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Rishii Designs – Remote Web Designer Available Worldwide",
  description: "Reach out to Rishii Designs to hire a freelance web designer for your next project. Remote services available worldwide.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
