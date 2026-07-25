import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bookings — Jevxo Services",
  description: "View and manage all your home service bookings on Jevxo Services. Track status, view details, and manage upcoming or past service appointments.",
  keywords: ["my bookings jevxo", "track service booking", "manage home service", "booking history Bangladesh"],
  alternates: { canonical: "https://jevxo.com/bookings" },
  openGraph: {
    title: "My Bookings — Jevxo Services",
    description: "View and manage all your home service bookings on Jevxo Services.",
    url: "https://jevxo.com/bookings",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function BookingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
