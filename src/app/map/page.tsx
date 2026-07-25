import type { Metadata } from "next";
import MapClientPage from "./MapClientPage";

export const metadata: Metadata = {
  title: "Find Service Experts Near You — Jevxo Services Map",
  description: "Explore the interactive map to find verified home service professionals near your location in Bangladesh. View ratings, availability, and book instantly.",
  keywords: [
    "home service map Bangladesh", "find experts near me", "service professionals location",
    "AC repair near me", "cleaning service near me", "Jevxo Services map",
    "home service providers Dhaka", "nearby home experts",
  ],
  alternates: { canonical: "https://jevxo.com/map" },
  openGraph: {
    title: "Find Service Experts Near You — Jevxo Services Map",
    description: "Explore verified home service professionals near your location in Bangladesh.",
    url: "https://jevxo.com/map",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services Service Experts Map" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Service Experts Near You — Jevxo Services Map",
    description: "Find verified home service professionals near you in Bangladesh.",
    images: ["/og-image.jpg"],
  },
};

export default function MapPage() {
  return <MapClientPage />;
}
