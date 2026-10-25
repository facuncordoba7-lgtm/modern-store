import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ModernStore | Minimalist Premium Goods",
  description: "Discover a curated collection of premium minimalist products designed for the modern lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="border-t border-slate-200 bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} MODERNSTORE. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
