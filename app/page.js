import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#1e1e1e]">
        <Navbar />
        <div className="container mx-auto px-12 py-4 mt-32">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
