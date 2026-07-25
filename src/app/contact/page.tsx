import { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact Us — Jevxo Services Support Center",
  description: "Get in touch with Jevxo Services. Reach our 24/7 support at 01813-333373 or email info@jevxo.com for booking help, refunds, or general enquiries.",
  keywords: ["contact jevxo", "jevxo phone number", "jevxo email", "jevxo office address", "home service customer support Bangladesh"],
  alternates: { canonical: "https://jevxo.com/contact" },
  openGraph: {
    title: "Contact Us — Jevxo Services Support Center",
    description: "Get in touch with Jevxo Services. 24/7 support for booking and service queries.",
    url: "https://jevxo.com/contact",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services" }],
  },
  twitter: { card: "summary_large_image", title: "Contact Us — Jevxo Services Support Center", description: "Reach Jevxo Services support 24/7 for booking, refunds, and enquiries.", images: ["/og-image.jpg"] },
};

export default function Page() {
  return <ContactClientPage />;
}