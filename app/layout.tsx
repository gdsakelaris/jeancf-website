import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jean Cares Fund - Making a Difference Through Compassionate Giving",
  description: "Support Jean Cares Fund's mission to help those in need through secure, tax-deductible donations. Your generosity makes a real difference in our community.",
  keywords: ["donation", "charity", "nonprofit", "Jean Cares Fund", "support", "giving"],
  icons: {
    icon: "/logo_square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
