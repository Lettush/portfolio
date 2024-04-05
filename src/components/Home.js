import { useEffect } from "react";
import "../App.css";
import "./css/Cards.css";
import Hero from "../sections/Hero";
import Bio from "../sections/Bio";
import Navbar from "../sections/Navbar";

const Home = () => {
  useEffect(() => {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorOutline = document.getElementById("cursor-outline");

    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });

    document.getElementById("nav").onmousemove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <div className="cursor-dot" id="cursor-dot"></div>
      <div className="cursor-outline" id="cursor-outline"></div>

      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Bio />
      </main>
    </div>
  );
};

export default Home;
