import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#1e1e1e]">
        <Navbar />
        <div className="container mx-auto px-12 py-4 mt-32">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
