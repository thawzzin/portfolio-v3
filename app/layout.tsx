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
  title: "Thaw Zin — Full-stack Developer",
  description:
    "Full-stack developer based in Thailand building clear, dependable digital products from interface to data layer.",
  openGraph: {
    title: "Thaw Zin — Full-stack Developer",
    description:
      "Selected product work, experience, and capabilities from full-stack developer Thaw Zin.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thaw Zin — Full-stack Developer",
    description:
      "Full-stack developer building dependable products from interface to data layer.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="m-0 bg-[var(--background)] font-sans text-base leading-6 text-[var(--foreground)]">{children}</body>
    </html>
  );
}
