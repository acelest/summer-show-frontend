import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App,",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
