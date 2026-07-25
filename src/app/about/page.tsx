import { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";

export const metadata: Metadata = {
  title: "About Us — Jevxo Services",
  description: "Learn about Jevxo Services, Bangladesh's most reliable ecosystem for on-demand home services. We connect premium homes with vetted professionals since 2022.",
  keywords: ["about jevxo", "home services company Bangladesh", "verified experts Bangladesh", "home care services", "jevxo story"],
  alternates: { canonical: "https://jevxo.com/about" },
  openGraph: {
    title: "About Us — Jevxo Services",
    description: "Bangladesh's most reliable ecosystem for on-demand home services.",
    url: "https://jevxo.com/about",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services" }],
  },
  twitter: { card: "summary_large_image", title: "About Us — Jevxo Services", description: "Learn about Jevxo Services — Bangladesh's trusted home services platform.", images: ["/og-image.jpg"] },
};

export default function Page() {
  return <AboutClientPage />;
}