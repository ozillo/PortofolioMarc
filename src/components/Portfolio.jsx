import { useState, useEffect } from "react";
import "./Portfolio.css";
import Navbar from "./Navbar";
import { Presentation, About, Skills, Collaborations } from "./Sections";
import ParticlesComponent from "./ParticlesComponent/ParticlesComponent";
import Loader from "./Loader/Loader"; 

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

  if (loading) return <Loader />;

  return (
    <div className={`portfolio-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <ParticlesComponent isDarkMode={isDarkMode} />

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
