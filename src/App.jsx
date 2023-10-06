import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app container max-w-7xl mx-auto min-h-screen relative">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
