import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — Jevxo Services",
  description: "Sign in to your Jevxo Services account to manage bookings, track services, and access your dashboard. Secure OTP-based authentication.",
  keywords: ["jevxo login", "sign in jevxo", "home service account login", "OTP login Bangladesh"],
  alternates: { canonical: "https://jevxo.com/login" },
  openGraph: {
    title: "Login — Jevxo Services",
    description: "Sign in to your Jevxo Services account securely with OTP authentication.",
    url: "https://jevxo.com/login",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
