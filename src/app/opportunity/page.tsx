import type { Metadata } from "next";
import OpportunityClientPage from "./OpportunityClientPage";

export const metadata: Metadata = {
  title: "Career Opportunities — Jevxo Services",
  description: "Join Jevxo Services as a vendor or agent. Grow your income by offering professional home services to verified customers across Bangladesh. Apply today.",
  keywords: [
    "jevxo career", "work with jevxo", "vendor opportunity Bangladesh",
    "home service agent", "jevxo jobs", "freelance home services Bangladesh",
    "become a vendor", "service provider opportunity",
  ],
  alternates: { canonical: "https://jevxo.com/opportunity" },
  openGraph: {
    title: "Career Opportunities — Jevxo Services",
    description: "Join Jevxo Services as a vendor or agent and grow your business in Bangladesh.",
    url: "https://jevxo.com/opportunity",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Join Jevxo Services as Vendor or Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunities — Jevxo Services",
    description: "Join Jevxo Services as a vendor or agent. Grow your business in Bangladesh.",
    images: ["/og-image.jpg"],
  },
};

export default function OpportunityPage() {
  return <OpportunityClientPage />;
}
