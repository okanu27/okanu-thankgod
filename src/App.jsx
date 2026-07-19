import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import navLinks from "./data/navLinks";

function App() {
  return (
    <div className="h-screen text-black">
  
      <Navbar/>
      <Footer/>
      <h1 className="text-3xl font-bold">
    Hello Developers!
  </h1>
    </div>
  );
}
export default App;