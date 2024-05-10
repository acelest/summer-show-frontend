import Banner from "@/components/Banner";
import Candidate from "@/components/CandidatePhotos";
import Category from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1 className=" text-blue-50">Welcome to My Next.js App!</h1>
        <p>This is the homepage of my Next.js application.</p>
        <Banner />
        <Category />
        <Candidate />
      </div>
      <Footer />
    </div>
  );
}
