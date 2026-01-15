import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import QueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CatalogX - Your Ultimate Item Catalog",
  description: "Discover, Explore, and Share Items Seamlessly with CatalogX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <section className="sticky top-0 z-50 ">
            <Navbar></Navbar>
          </section>
          <section className="min-h-screen max-w-7xl mx-auto px-4">
            {children}
          </section>
          <section>
            <Footer></Footer>
          </section>
        </QueryProvider>
      </body>
    </html>
  );
}
