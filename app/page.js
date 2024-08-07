import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#1e1e1e]">
        <Navbar />
        <div className="container mx-auto px-12 py-4 mt-32">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
