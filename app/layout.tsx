import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
