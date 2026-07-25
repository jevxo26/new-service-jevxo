import { Metadata } from "next";
import PrivacyClientPage from "./PrivacyClientPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Jevxo Services",
  description: "Read the Privacy Policy of Jevxo Services to understand how we collect, use, protect, and manage your personal data on Bangladesh's top home services platform.",
  keywords: ["privacy policy jevxo", "data protection Bangladesh", "jevxo user privacy", "personal data policy"],
  alternates: { canonical: "https://jevxo.com/privacy" },
  openGraph: {
    title: "Privacy Policy — Jevxo Services",
    description: "Read our Privacy Policy to learn how we protect your personal information.",
    url: "https://jevxo.com/privacy",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services" }],
  },
  twitter: { card: "summary_large_image", title: "Privacy Policy — Jevxo Services", description: "Jevxo Services Privacy Policy — how we collect, use, and protect your data.", images: ["/og-image.jpg"] },
};

export default function Page() {
  return <PrivacyClientPage />;
}
