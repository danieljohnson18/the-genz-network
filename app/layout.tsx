import type { Metadata } from "next";
import { Libre_Franklin, Oswald } from "next/font/google";
import "./globals.css";

// Condensed sans-serif for headings (similar to Meursault Condensed)
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

// Clean sans-serif for body (similar to Good Sans)
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "The Gen Z Network | A Successive Generation of Light",
  description:
    "Uniting young people around positivity, cultivating a generation focused on values, discipline, and resilience. Because I exist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${libreFranklin.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
