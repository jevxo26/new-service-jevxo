import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import "./globals.css";
import { LayoutWrapper } from "@/components/home/LayoutWrapper";
import ToasterProvider from "@/components/ToasterProvider";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "latin-ext", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jevxo.com"),
  title: {
    default: "services-jevxo-producat — Expert Care for Your Premium Home",
    template: "%s | services-jevxo-producat",
  },
  description:
    "Book trusted home services in Bangladesh — AC repair, cleaning, plumbing, electrical, and more. Verified experts, instant booking, guaranteed quality.",
  keywords: [
    "services-jevxo-producat", "home services Bangladesh", "AC repair", "home cleaning",
    "plumbing Bangladesh", "electrical repair", "professional home care",
    "verified home experts", "book home services online",
  ],
  authors: [{ name: "services-jevxo-producat", url: "https://jevxo.com" }],
  creator: "services-jevxo-producat",
  publisher: "services-jevxo-producat",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jevxo.com",
    siteName: "services-jevxo-producat",
    title: "services-jevxo-producat — Expert Care for Your Premium Home",
    description: "Book trusted home services in Bangladesh with verified experts.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "services-jevxo-producat — Professional Home Services" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jevxo",
    creator: "@jevxo",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} antialiased`}>
      <body className={`min-h-screen flex flex-col bg-slate-50 ${baiJamjuree.className} antialiased`}>
        <StoreProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </StoreProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
