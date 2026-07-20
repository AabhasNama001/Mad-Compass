import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Header } from "@/components/sections/header";
import { PageTransition } from "@/components/sections/page-transition";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mad Compass | Tailored Holidays, Curated With Care",
  description: "Mad Compass creates personalised domestic and overseas holidays with a warm, specialist-led planning experience.",
  metadataBase: new URL("https://madcompass.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mad Compass | Tailored Holidays, Curated With Care",
    description: "Mad Compass creates personalised domestic and overseas holidays with a warm, specialist-led planning experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Mad Compass",
    url: "https://madcompass.com",
    telephone: "+919711193458",
    email: "hello@madcompass.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "India",
    },
    description:
      "Mad Compass creates personalised domestic and overseas holidays with a warm, specialist-led planning experience.",
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-[#111111]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
