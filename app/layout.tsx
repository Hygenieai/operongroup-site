import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operon Group — Information. Decisions. Execution.",
  description:
    "Operon Group turns fragmented information into informed decisions and coordinated execution across commercial real estate, technology, and business operations.",
  openGraph: {
    title: "Operon Group",
    description:
      "Informed decisions and coordinated execution across commercial real estate, technology, and business operations.",
    url: "https://theoperongroup.com",
    siteName: "Operon Group",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
