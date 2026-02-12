import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Andrax Exports Pvt Ltd | Gardening Plants & Trees Exporter",
    template: "%s | Andrax Exports Pvt Ltd",
  },
  description:
    "Andrax Exports Pvt Ltd is a trusted exporter of gardening plants and trees, supplying premium quality, export-certified plants worldwide.",
  keywords: [
    "Andrax Exports",
    "plant exporter",
    "tree exporter",
    "gardening plants export",
    "nursery plant export",
    "bulk plant supplier",
    "international plant exporter",
  ],
  authors: [{ name: "Andrax Exports" }],
  creator: "Andrax Exports",
  publisher: "Andrax Exports",

  metadataBase: new URL("https://andraxexportspvtltd.com"),

  openGraph: {
    title: "Andrax Exports | Global Plant & Tree Exporters",
    description:
      "Exporting premium gardening plants and trees worldwide with certified quality and secure packaging.",
    url: "https://andraxexportspvtltd.com",
    siteName: "Andrax Exports",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrax Exports - Gardening Plants Exporter",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Andrax Exports | Gardening Plants & Trees Export",
    description:
      "Trusted exporter of gardening plants and trees serving global markets.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <div className="relative z-10 bg-off-white mb-100 shadow-b">
            <Navbar />
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
