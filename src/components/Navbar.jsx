import React from "react";
import SidePanel from "./SidePanel";

function Navbar() {
  return (
    <nav className="navbar flex flex-col justify-between align-middle px-8 py-5 text-white absolute top-0 max-w-7xl w-full lg:flex-row">
      <div className="nav__left flex flex-col text-center">
        <a
          href="/"
          className="text-4xl font-bold border-b-2 border-red-600 py-1"
        >
          Vamsi Krishna&nbsp;
        </a>
        <p className="text-lg py-1">Aspiring Software Engineer</p>
      </div>
      <SidePanel />
    </nav>
  );
}

export default Navbar;
