import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/content";

const barlow = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: "Premium Auto Detailing in Glendora, CA | 1 Ultra Shine Detail",
  description:
    "30+ years of premium auto detailing in Glendora, CA. Interior refresh, full detail, paint correction, pet hair removal & more. Hand-finished. Satisfaction guaranteed. Call (626) 963-2600.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "1 Ultra Shine Detail",
    title: "1 Ultra Shine Detail — Premium Auto Detailing in Glendora, CA",
    description:
      "30+ years of hand-finished auto detailing on Route 66, Glendora. Interior, exterior, paint correction & more. Satisfaction guaranteed.",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "1 Ultra Shine Detail — Premium Auto Detailing in Glendora, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Ultra Shine Detail — Premium Auto Detailing in Glendora, CA",
    description:
      "30+ years of hand-finished auto detailing on Route 66, Glendora. Interior, exterior, paint correction & more.",
    images: ["/hero-poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  alternateName: BUSINESS.legalName,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "525 E Route 66",
    addressLocality: "Glendora",
    addressRegion: "CA",
    postalCode: "91740",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(BUSINESS.rating),
    reviewCount: String(BUSINESS.reviewCount),
  },
  foundingDate: String(BUSINESS.founded),
  description:
    "Premium auto detailing in Glendora, CA. Interior refresh, full detail, paint correction, pet hair removal, bug wash. Hand-finished, eco-friendly, satisfaction guaranteed since 1995.",
  priceRange: "$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
