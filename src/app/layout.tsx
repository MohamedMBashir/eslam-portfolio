import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eslam | Architecture Portfolio",
  description: "Architecture student portfolio showcasing creative projects and design work",
  icons: {
    icon: '/window-logo.png',
    apple: '/window-logo.png',
  },
  openGraph: {
    title: "Eslam | Architecture Portfolio",
    description: "Architecture student portfolio showcasing creative projects and design work",
    images: [
      {
        url: '/cover_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eslam Architecture Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eslam | Architecture Portfolio",
    description: "Architecture student portfolio showcasing creative projects and design work",
    images: ['/cover_image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ClientLayout>
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
