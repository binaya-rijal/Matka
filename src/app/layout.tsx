import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NotificationProvider } from "@/context/NotificationContext";
import { CartProvider } from "@/context/CartContext";

// Main font - Poppins for body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Secondary font - Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal Matka Tea - Premium Nepali CTC Tea by Panchamukhi Chiya Udhyog",
  description: "Experience the authentic taste of premium Nepali CTC tea from Panchamukhi Chiya Udhyog. Royal Matka Tea offers rich flavor, deep color, and aromatic experience for over 25 years.",
  keywords: ["Royal Matka Tea", "Panchamukhi Chiya Udhyog", "Nepali Tea", "CTC Tea", "Premium Tea", "Nepal", "Damak", "Jhapa", "Traditional Tea"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased text-gray-800`}
      >
        <NotificationProvider>
          <CartProvider>
            <Header />
            <main className="overflow-hidden">{children}</main>
            <Footer />
          </CartProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
