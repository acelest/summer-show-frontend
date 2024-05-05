import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Summer Show 2k24",
  description: "coming soon...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Metadonnées, feuilles de style, scripts, etc. */}</head>
      <body className={inter.className}>
        <Header />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        {/* Vos autres éléments de contenu */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
