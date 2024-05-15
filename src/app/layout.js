import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: "The Summer Show",
  description: "A Last Dance, code by Aubin Djou",
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
