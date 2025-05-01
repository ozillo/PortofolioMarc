import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Portfolio.css";
import Navbar from "./Navbar";
import { Presentation, About, Skills, Collaborations } from "./Sections";
import { animate } from "animejs";


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: { value: isDarkMode ? "#111" : "#fff" } },
    particles: {
      color: {
        value: isDarkMode
          ? ["#ffffff", "#00ffff", "#ff00ff"]
          : ["#000000", "#333333", "#666666"],
      },
      links: { enable: true, color: isDarkMode ? "#8888ff" : "#333333" },
      move: { enable: true, speed: 1.2 },
      number: { value: 60 },
      size: { value: { min: 1, max: 3 } },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["presentation", "about", "skills", "collaborations"];
      for (let id of sections) {
        const el = document.getElementById(id);
        const rect = el?.getBoundingClientRect();
        if (rect?.top >= 0 && rect?.top < window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="loader"
        />
      </div>
    );
  }

  return (
    <div className={`portfolio-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles"
      />

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <Presentation />
      <About />
      <Skills />
      <Collaborations />
    </div>
  );
}
