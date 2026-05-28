import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operon Group — Venture & Operational Infrastructure",
  description:
    "Operon Group is a venture and operational infrastructure company that scales execution and revenue.",
  openGraph: {
    title: "Operon Group",
    description: "A venture and operational infrastructure company that scales execution and revenue.",
    url: "https://theoperongroup.com",
    siteName: "Operon Group",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
