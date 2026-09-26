import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tresbonsalon.com"),
  title: {
    default: "TRÈS BON Unisex Salon | Style Beyond Gender | Bengaluru",
    template: "%s | TRÈS BON Unisex Salon Bengaluru",
  },
  description:
    "TRÈS BON Unisex Salon in BTM 2nd Stage, Bengaluru. Experience luxury haircutting, bespoke balayage, restorative hair spa, facial therapies, and precision beard grooming crafted around your individuality.",
  keywords: [
    "Unisex Salon Bangalore",
    "BTM Layout salon",
    "TRÈS BON Salon",
    "Haircut BTM 2nd stage",
    "Balayage Bengaluru",
    "Hair spa Bangalore",
    "Beard grooming salon",
    "Bridal makeup Bengaluru",
    "Gender inclusive salon Bengaluru",
  ],
  authors: [{ name: "Kamala - Creative Director" }],
  creator: "TRÈS BON Unisex Salon",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tresbonsalon.com",
    title: "TRÈS BON Unisex Salon | Style Beyond Gender",
    description:
      "Premium hair, beauty and grooming experiences crafted around your individuality in BTM 2nd Stage, Bengaluru.",
    siteName: "TRÈS BON Unisex Salon",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TRÈS BON Unisex Salon interior BTM 2nd Stage Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRÈS BON Unisex Salon | Style Beyond Gender",
    description: "Premium hair, beauty and grooming experiences in Bengaluru.",
    images: ["https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://tresbonsalon.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "LocalBusiness"],
    "name": siteConfig.name,
    "image": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "url": "https://tresbonsalon.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.area,
      "addressRegion": "Karnataka",
      "postalCode": siteConfig.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9167,
      "longitude": 77.6084
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": siteConfig.founder.name,
      "jobTitle": siteConfig.founder.role
    }
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#111111] font-sans selection:bg-[#B59A72] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
