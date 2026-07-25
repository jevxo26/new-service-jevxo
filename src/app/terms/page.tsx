import { Metadata } from "next";
import TermsClientPage from "./TermsClientPage";

export const metadata: Metadata = {
  title: "Terms of Service — Jevxo Services",
  description: "Read the Terms of Service of Jevxo Services to understand our user agreement, booking policies, warranty terms, and liability limitations.",
  keywords: ["terms of service jevxo", "terms and conditions", "user agreement Bangladesh", "booking policy jevxo", "service warranty terms"],
  alternates: { canonical: "https://jevxo.com/terms" },
  openGraph: {
    title: "Terms of Service — Jevxo Services",
    description: "Read our Terms of Service to understand user policies and booking agreements.",
    url: "https://jevxo.com/terms",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services" }],
  },
  twitter: { card: "summary_large_image", title: "Terms of Service — Jevxo Services", description: "Jevxo Services Terms of Service — booking, warranty, and liability terms.", images: ["/og-image.jpg"] },
};

export default function Page() {
  return <TermsClientPage />;
}
