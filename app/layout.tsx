import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syaharani Nurulita — Portfolio",
  description:
    "Final-year IT student dengan trifecta IT governance, game programming, dan full-stack web development. Ex-IT Intern @ Kemenlu RI, MSIB Batch 7 Graduate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
