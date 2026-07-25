import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Booking — Jevxo Services",
  description: "Track the real-time status of your home service booking on Jevxo Services. Know when your expert is on the way and stay updated at every step.",
  keywords: ["track booking jevxo", "booking status", "service tracking Bangladesh", "live booking update"],
  alternates: { canonical: "https://jevxo.com/track" },
  openGraph: {
    title: "Track Your Booking — Jevxo Services",
    description: "Track the real-time status of your home service booking on Jevxo Services.",
    url: "https://jevxo.com/track",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
