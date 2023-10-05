import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import Home from "./components/Home";

function App() {
  return (
    <div className="app container max-w-7xl mx-auto min-h-screen relative">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
