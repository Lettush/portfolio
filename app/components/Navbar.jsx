import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import "../styles/Navbar.css";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="glow fixed top-0 left-0 right-0 z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-3">
        <Link href={"/"}>
          <Image
            src={"/images/JaredLogoFinal.png"}
            alt="Avatar"
            className="bg-[#ffffff2d] p-1"
            width={100}
            height={100}
          />
        </Link>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-14 mr-5">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
