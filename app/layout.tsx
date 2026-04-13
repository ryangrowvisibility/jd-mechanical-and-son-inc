import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD Mechanical and Son Inc | Bakersfield HVAC Contractor",
  description: "Family-owned HVAC contractor in Bakersfield, CA. Juan De La Torre and son — responsible, professional, BBB A+ rated, CSLB #1018705. AC repair, heating, HVAC installation.",
  openGraph: {
    title: "JD Mechanical and Son Inc | Bakersfield Family HVAC",
    description: "Juan De La Torre and son — responsible HVAC work, BBB A+ rated, CSLB licensed. Serving Bakersfield since day one.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "JD Mechanical and Son Inc",
  description: "Family-owned HVAC contractor in Bakersfield, CA. Specializing in AC repair, heating repair, HVAC installation, and commercial HVAC. CSLB #1018705, BBB A+ rated.",
  telephone: "(661) 412-8222",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4312 Wible Rd",
    addressLocality: "Bakersfield",
    addressRegion: "CA",
    postalCode: "93313",
    addressCountry: "US",
  },
  url: "https://jdmechanicalandsone.com",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "8",
    bestRating: "5",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
  ],
  hasMap: "https://www.google.com/maps/search/?api=1&query=JD%20Mechanical%20%26%20Son%20Inc.&query_place_id=ChIJ0S9BfcBq6oAR0nuWutXQl88",
  areaServed: "Bakersfield, CA",
  founder: {
    "@type": "Person",
    name: "Juan De La Torre",
    jobTitle: "President & Owner",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Mulish:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ backgroundColor: 'oklch(0.98 0.005 210)', minHeight: '100dvh' }}>
        {children}
      </body>
    </html>
  );
}
