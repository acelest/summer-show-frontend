// pages/index.js

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Layout from "@/components/Layout";
export default function Home() {
  return (
    <div className="bg-black ">
      <Header />
      <div>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
