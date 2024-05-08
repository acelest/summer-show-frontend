import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: "The Summer Show",
  description: "A Last Dance",
};

const RootLayout = ({ children }) => (
  <html lang="fr">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
        rel="stylesheet"
      />
      
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/png"
        sizes="32x32"
      />
      
    </head>
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
