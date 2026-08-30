import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import OfferCart from "@/components/OfferCart/OfferCart";
import OfferProvider from "@/components/Offers/OfferProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Litoral Internet",
  description:
    "Internet fibra óptica em Imbituba. Planos de internet, streaming, telefonia e benefícios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <OfferProvider>
          <SmoothScroll />

          {children}

          <OfferCart />
        </OfferProvider>
      </body>
    </html>
  );
}