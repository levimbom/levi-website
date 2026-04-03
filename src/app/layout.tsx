import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Levi Bom — RevOps & GTM Specialist",
  description:
    "I help B2B companies design, implement and optimize their revenue operations — from HubSpot setup to AI-powered outbound. Based in Amsterdam.",
  metadataBase: new URL("https://levibom.com"),
  openGraph: {
    title: "Levi Bom — RevOps & GTM Specialist",
    description:
      "I help B2B companies design, implement and optimize their revenue operations — from HubSpot setup to AI-powered outbound.",
    url: "https://levibom.com",
    siteName: "Levi Bom",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
