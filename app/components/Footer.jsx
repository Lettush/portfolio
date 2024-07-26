import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="glow footer bg-[#1e1e1e] px-12 py-6">
      <div className="flex flex-row justify-between items-center">
        <p className="font-medium">&copy; 2024, All rights reserved.</p>

        <Image
          src={"/images/JaredLogoFinal.png"}
          alt="Avatar"
          className="bg-[#ffffff2d] p-1"
          width={80}
          height={80}
        />
      </div>
    </footer>
  );
};

export default Footer;
