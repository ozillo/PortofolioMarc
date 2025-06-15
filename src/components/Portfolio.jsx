// src/components/Portfolio.jsx
import { useState, useEffect } from "react";
import "./Portfolio.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Presentation, About, Skills, Collaborations } from "./Sections";
import LoaderHamster from "./LoaderHamster/LoaderHamster";
import AnimatedLoader from "./AnimatedLoader/AnimatedLoader";
import SectionDivider from "./Effects/SectionDivider";
import ScrambledText from "./ScrambledText/ScrambledText";
import ScrollVelocity from './Sections/ScrollVelocity';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const velocity = 100; // ✅ Añadido para ScrollVelocity

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const fadeOutTimer = setTimeout(() => setShowLoader(false), 1000);
      return () => clearTimeout(fadeOutTimer);
    }
  }, [loading]);

  if (showLoader) return <AnimatedLoader />;

  return (
    <div className={`portfolio-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Presentation isDarkMode={isDarkMode} />
     
      <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Soy un desarrollador frontend con experiencia en React, diseño responsivo y animaciones modernas. Me encanta aprender y colaborar en proyectos creativos
      </ScrambledText>

      <div className="scroll-divider">
      {/* <ScrollVelocity
      texts={['React Javascript GSAP CSS Tailwind Node.js Git Github', 'Figma Framer Wix Photoshop Illustrator After Effects']}
      velocity={velocity}
      className="custom-scroll-text"
      /> */}
      </div>
      <Skills />
      <Collaborations />
      <Footer />
    </div>
  );
}
