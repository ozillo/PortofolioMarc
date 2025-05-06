import { useState, useEffect } from "react";
import "./Portfolio.css";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import { Presentation, About, Skills, Collaborations } from "./Sections";
import Loader from "./Loader/Loader";
import FloatingParticles from "./Effects/FloatingParticles";
import SectionDivider from "./Effects/SectionDivider";





export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const fadeOutTimer = setTimeout(() => setShowLoader(false), 800); // duración del fade
      return () => clearTimeout(fadeOutTimer);
    }
  }, [loading]);

  if (showLoader) return <Loader isDarkMode={isDarkMode} show={showLoader} />;

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
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Collaborations />
      <Footer/>

    </div>
  );
}
