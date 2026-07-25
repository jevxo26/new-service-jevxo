import type { Metadata } from "next";
import HomeShiftingClientPage from "./HomeShiftingClientPage";

export const metadata: Metadata = {
  title: "Home Shifting & Relocation Service — Jevxo Services",
  description: "Professional home shifting and relocation service in Bangladesh. Get a custom quote for packing, moving, and settling your home with Jevxo Services's trusted team.",
  keywords: [
    "home shifting Bangladesh", "house moving service Dhaka", "relocation service Bangladesh",
    "professional movers Bangladesh", "jevxo shifting", "furniture moving Dhaka",
    "packing and moving Bangladesh", "home relocation service",
  ],
  alternates: { canonical: "https://jevxo.com/home-shifting" },
  openGraph: {
    title: "Home Shifting & Relocation Service — Jevxo Services",
    description: "Professional home shifting and relocation service with trusted movers in Bangladesh.",
    url: "https://jevxo.com/home-shifting",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services Home Shifting Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Shifting & Relocation Service — Jevxo Services",
    description: "Professional home shifting with trusted movers across Bangladesh.",
    images: ["/og-image.jpg"],
  },
};

export default function HomeShiftingPage() {
  return <HomeShiftingClientPage />;
}