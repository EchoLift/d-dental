import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "D Dental Care - Sanathnagar | Dentist in Sanath Nagar, Hyderabad";
const description =
  "D Dental Care - Sanathnagar by Dr. Deepa offers gentle, painless dental treatments, root canal care, implants, crowns, bridges, in-house X-ray, and patient-first dental care in Hyderabad.";

export const metadata: Metadata = {
  title: siteTitle,
  description,
  keywords: [
    "Dentist in Sanath Nagar",
    "Dental clinic Hyderabad",
    "Root canal treatment Sanath Nagar",
    "Painless dental treatment Hyderabad",
    "Dental implants Hyderabad",
    "D Dental Care Sanathnagar",
    "Dr Deepa dentist",
    "D Dental Care Hyderabad",
  ],
  alternates: {
    canonical: "https://ddentalcare-sanathnagar.com"
  },
  openGraph: {
    title: siteTitle,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "D Dental Care - Sanathnagar"
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
