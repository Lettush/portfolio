import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="transition ease delay-50 block py-2 pl-3 pr-4 text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-[#bef5b6]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
