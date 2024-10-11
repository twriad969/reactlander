import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Terabox Video Player, Embed, Download Terabox videos free",
  description:
    "Download and stream videos from TeraBox with our free and easy-to-use player. Enjoy fast downloads and seamless streaming of TeraBox cloud files on any device. No sign-up required!",
  openGraph: {
    title: "Terabox Video Player, Embed, Download Terabox videos free",
    description:
      "Quickly download and stream TeraBox files with our secure downloader and video player.",
    url: "https://terabox.icu",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terabox Video Player, Embed, Download Terabox videos free",
    description:
      "Easily download and stream TeraBox files for free. No sign-up required!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5413283777760841" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
