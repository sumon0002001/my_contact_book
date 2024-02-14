import React from "react";
import Link from "next/link";
import { FaPlusCircle, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex gap-6 justify-between items-center cursor-pointer">
      <Link className="flex items-center gap-1" href={"/"}>
        <FaHome /> <span>Home</span>
      </Link>
      <Link className="flex items-center gap-1" href={"/create"}>
        <FaPlusCircle /> <span>Create</span>
      </Link>
    </nav>
  );
};

export default Navbar;
