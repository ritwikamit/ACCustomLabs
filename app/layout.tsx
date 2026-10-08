import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AC Custom Labs | Digital Products, Web & App Development Studio",
    template: "%s | AC Custom Labs",
  },
  description: siteConfig.description,
  keywords: [
    "AC Custom Labs",
    "digital product studio",
    "web development company",
    "custom software development",
    "app development company",
    "Next.js development",
    "full-stack engineering",
    "UI UX design studio",
    "technical SEO services",
    "local business website",
    "Aurangabad Bihar digital development",
    "independent development studio",
  ],
  authors: [{ name: "AC Custom Labs", url: siteConfig.url }],
  creator: "AC Custom Labs",
  publisher: "AC Custom Labs",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "AC Custom Labs | Digital Products, Web & App Development Studio",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "AC Custom Labs Logo - Digital Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Custom Labs | Digital Products, Web & App Development Studio",
    description: siteConfig.description,
    images: ["/brand/logo.png"],
    creator: "@accustomlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/brand/logo.png`,
          caption: "AC Custom Labs Logo",
        },
        description: siteConfig.description,
        sameAs: [
          siteConfig.socials[0].href,
          siteConfig.socials[1].href,
          siteConfig.socials[2].href,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contact.email,
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/brand/logo.png`,
        description:
          "Independent digital product and engineering studio delivering custom websites, web applications, mobile apps, and SEO solutions.",
        priceRange: "₹₹₹",
        currenciesAccepted: "INR, USD",
        paymentAccepted: "Bank Transfer, UPI, Online Invoice",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Engineering & Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Websites & Web Apps Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Software & Mobile Applications",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX Design & Prototyping",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Technical SEO, AEO & GEO Optimization",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#F7F7F7] antialiased selection:bg-[#FF1738]/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
