import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { MobileCtaBar } from "../components/layout/mobile-cta-bar";
import { siteConfig } from "../content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "FullArch Dental Lab – Premium titanyum implant üst yapı çözümleri",
    template: "%s | FullArch Dental Lab"
  },
  description:
    "Diş laboratuvarları için mikron düzeyi hassasiyet hedefli, CAD/CAM uyumlu, CE / ISO / FDA sertifikalı titanyum implant üst yapı çözümleri.",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg"
  },
  openGraph: {
    type: "website",
    siteName: "FullArch Dental Lab",
    title:
      "FullArch Dental Lab – Premium titanyum implant üst yapı çözümleri",
    description:
      "Diş laboratuvarları için mikron düzeyi hassasiyet hedefli, CAD/CAM uyumlu, CE / ISO / FDA sertifikalı titanyum implant üst yapı çözümleri.",
    url: siteConfig.url,
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 1200,
        alt: "FullArch Dental Lab Logo"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address
    }
  };

  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Analytics / GA4 / Pixel placeholder */}
        {/* GA4 / Meta Pixel kodlarını buraya ekleyebilirsiniz */}
        <div className="page-shell">
          <Header />
          <main className="page-main">{children}</main>
          <Footer />
          <MobileCtaBar />
        </div>
      </body>
    </html>
  );
}


