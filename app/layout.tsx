import type { Metadata } from "next";
import "./globals.css";
import siteData from "@/data/site-data.json";

const { brand, seo } = siteData;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.canonical
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: seo.locale,
    siteName: brand.name
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
