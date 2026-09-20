import type { Metadata } from "next";
import { Archivo_Black, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thaw Zin — Frontend Developer",
  description:
    "Frontend developer based in Thailand building clear, dependable digital products with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Thaw Zin — Frontend Developer",
    description:
      "Selected product work, experience, and capabilities from frontend developer Thaw Zin.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thaw Zin — Frontend Developer",
    description:
      "Frontend developer building clear interfaces for complicated products.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
