import React, {useState} from "react";
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
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className={`
          min-h-screen 
          transition-colors 
          duration-500 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
          }`}
         >
  
      <Navbar 
        theme={theme} 
        setTheme={setTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection} 
      />
      <Hero/>
      <About />
      <Skills />
      <Projects theme={theme} />
      <Contact />
      <Footer/>
    </div>
  );
}
export default App;