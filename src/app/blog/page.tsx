import { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Blog — Home Care Tips & Guides | Jevxo Services",
  description: "Read expert home care tips, maintenance guides, AC repair advice, and the latest insights from Jevxo Services — Bangladesh's most trusted home services platform.",
  keywords: ["jevxo blog", "home care tips Bangladesh", "AC repair guide", "cleaning tips", "home maintenance Bangladesh", "plumbing tips"],
  alternates: { canonical: "https://jevxo.com/blog" },
  openGraph: {
    title: "Blog — Home Care Tips & Guides | Jevxo Services",
    description: "Expert home care tips, maintenance guides, and trusted insights from Jevxo Services.",
    url: "https://jevxo.com/blog",
    siteName: "Jevxo Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jevxo Services" }],
  },
  twitter: { card: "summary_large_image", title: "Blog — Home Care Tips & Guides | Jevxo Services", description: "Home care tips & guides from Bangladesh's top home services platform.", images: ["/og-image.jpg"] },
};

export default function Page() {
  return <BlogClientPage />;
}
