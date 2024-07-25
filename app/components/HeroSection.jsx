"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dcd11a] to-[#71f131]">
              This is
            </span>
            <br />
            <TypeAnimation
              sequence={["Jared.", 1000, "My portfolio.", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Innovative Full Stack Developer, API expert, educator, and music
            creator.
          </p>
          <div>
            <button className="transition ease delay-50 px-6 py-3 rounded-full mr-4 bg-gradient-to-tr text-white from-[#ada95f] to-[#25891b] hover:from-[#fcf350] hover:to-[#42fc32] hover:text-black w-full sm:w-fit">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full mr-4 bg-gradient-to-tr from-[#dcd11a] to-[#71f131] hover:bg-slate-800 text-white mt-3 w-full sm:w-fit">
              <span className="transition ease delay-50 block bg-[#232323] hover:bg-[#253716] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#2f2f2f] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={"/images/avatar.png"}
              alt="Avatar"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
