import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata: Metadata = {
  title: "FixMia — Mobile Electronics Repair in Miami",
  description: "We pick up, fix up, drop off. Mobile electronics repair serving Downtown Miami, Miami Beach, Hialeah, Coral Gables, Doral, and South Miami.",
  keywords: "electronics repair Miami, phone repair Miami, laptop repair Miami, mobile repair pickup Miami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
