// import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christie 7s",
  description: "Follow all Christie 7s scores updates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DCBQ00WVWH"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DCBQ00WVWH');
          `}
        </Script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-5xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
