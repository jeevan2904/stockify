import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { RootProvider } from "@/providers/RootProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stockify",
  description:
    "Full Stack Next.js application involving 3 systems - POS, Online-Store & Inventory Management System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
