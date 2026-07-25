import type { Metadata } from "next";
import RegisterClientPage from "./RegisterClientPage";

export const metadata: Metadata = {
  title: "Register as Vendor or Agent — Jevxo Services",
  description: "Join Jevxo Services as a service provider or agent. Register to offer professional home services to thousands of customers across Bangladesh.",
  keywords: [
    "jevxo vendor registration", "home service provider register",
    "agent sign up Bangladesh", "join jevxo", "become a service provider",
    "jevxo partner registration",
  ],
  alternates: { canonical: "https://jevxo.com/register" },
  openGraph: {
    title: "Register as Vendor or Agent — Jevxo Services",
    description: "Join Jevxo Services as a service provider and reach thousands of customers across Bangladesh.",
    url: "https://jevxo.com/register",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Register on Jevxo Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Register as Vendor or Agent — Jevxo Services",
    description: "Join Jevxo Services as a service provider and reach thousands of customers.",
    images: ["/og-image.jpg"],
  },
};

export default function RegisterPage() {
  return <RegisterClientPage />;
}
