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
        <h1 className=" text-blue-50">Welcome to My Next.js App!</h1>
        <p>This is the homepage of my Next.js application.</p>
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
