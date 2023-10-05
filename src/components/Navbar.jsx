import React from "react";
import SidePanel from "./SidePanel";

function Navbar() {
  return (
    <nav className="navbar flex justify-between align-middle px-8 py-5 text-white absolute top-0 max-w-7xl w-full">
      <div className="nav__left flex flex-col text-center">
        <a
          href="/"
          className="text-4xl font-bold border-b-2 border-red-600 py-1"
        >
          Vamsi Krishna&nbsp;
        </a>
        <p className="text-lg py-1">Aspiring Software Engineer</p>
      </div>
      <div className="nav__right flex justify-between items-center gap-4 text-2xl">
        <a
          href="#home"
          className="py-1 transition duration-300 hover:text-red-400 hover:border-b-2"
        >
          Home
        </a>
        <a
          href="#skills"
          className="py-1 transition duration-300 hover:text-red-400 hover:border-b-2"
        >
          Skill-set
        </a>
        <a
          href="#projects"
          className="py-1 transition duration-300 hover:text-red-400 hover:border-b-2"
        >
          Projects
        </a>
      </div>
      <SidePanel />
    </nav>
  );
}

export default Navbar;
