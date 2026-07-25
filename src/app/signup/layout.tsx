import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — Jevxo Services",
  description: "Create your free Jevxo Services account and start booking verified home service experts in Bangladesh. Fast sign-up with OTP verification.",
  keywords: ["jevxo signup", "create account jevxo", "register home services", "new user Bangladesh"],
  alternates: { canonical: "https://jevxo.com/signup" },
  openGraph: {
    title: "Sign Up — Jevxo Services",
    description: "Create your free Jevxo Services account and book verified home service experts.",
    url: "https://jevxo.com/signup",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
