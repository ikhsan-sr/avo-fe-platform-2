import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

// const sansation = Sansation({
//   subsets: ["latin"],
//   variable: "--font-sansation",
//   weight: ["400", "700"],
//   adjustFontFallback: false,
//   display: "swap",
// });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../../public/fonts/satoshi/Satoshi-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "../../public/fonts/satoshi/Satoshi-VariableItalic.woff2", style: "italic", weight: "100 900" },
    { path: "../../public/fonts/satoshi/Satoshi-Bold.woff2", style: "normal", weight: "700" },
    { path: "../../public/fonts/satoshi/Satoshi-BoldItalic.woff2", style: "italic", weight: "700" },
  ],
});

const sansation = localFont({
  variable: "--font-sansation",
  display: "swap",
  src: [
    { path: "../../public/fonts/sansation/Sansation-Regular.woff2", style: "normal", weight: "100 900" },
  ],
});

export const metadata: Metadata = {
  title: "AVO Digital Authority Firm",
  description: "AVO Digital Authority Firm",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  icons: {
    icon: "/ico.webp",
    shortcut: "/ico.webp",
    apple: "/ico.webp",
  },
  openGraph: {
    siteName: "AVO",
    type: "website",
    images: [{ url: "/ico.webp", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${satoshi.variable} ${sansation.variable} antialiased font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
