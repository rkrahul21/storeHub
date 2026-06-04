import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/hooks/useCart";
import { Header } from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FakeStore - E-commerce App",
  description: "Browse and shop products from FakeStore API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#FAF7F2] dark:bg-[#14120E] text-[#1A1A1A] dark:text-[#FAF7F2] transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
