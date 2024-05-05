import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Summer Show 2k24",
  description: "coming soon...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
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
      <Footer />
    </html>
  );
}
