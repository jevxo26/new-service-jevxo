import { Metadata } from "next";
import HelpClientPage from "./HelpClientPage";

export const metadata: Metadata = {
  title: "Help Center — Jevxo Services",
  description: "Find answers to your questions, learn how to manage bookings, understand warranties, and contact Jevxo Services customer support in Bangladesh.",
  keywords: ["jevxo help center", "customer support Bangladesh", "home services FAQ", "AC repair warranty", "booking help", "refund policy jevxo"],
  alternates: { canonical: "https://jevxo.com/help" },
  openGraph: {
    title: "Help Center — Jevxo Services",
    description: "Find answers and contact Jevxo Services support for all your home service queries.",
    url: "https://jevxo.com/help",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services" }],
  },
  twitter: { card: "summary_large_image", title: "Help Center — Jevxo Services", description: "Jevxo Services Help Center — FAQs, booking help, warranty & refund info.", images: ["/og-image.jpg"] },
};

export default function Page() {
  return <HelpClientPage />;
}
