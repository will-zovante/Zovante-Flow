import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zovante Flow – Focused Landing Pages for UK Businesses",
  description: "Zovante Flow designs clean landing pages to help UK solar, construction, and luxury real-estate businesses turn visitors into leads.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
