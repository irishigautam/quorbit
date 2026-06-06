import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quorbit — Business Simplified",
  description:
    "A futuristic marketing agency that blends creativity, AI, automation, and strategic growth into one connected orbit.",
  icons: {
    icon: [
      { url: "/light-logo.png", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-midnight text-ice">
        {children}
      </body>
    </html>
  );
}

