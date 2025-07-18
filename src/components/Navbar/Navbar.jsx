// components/Navbar.jsx
import { useEffect, useState } from "react";
import { Home, User, Settings, Users, Sun, Moon } from "lucide-react";
import HamburgerButton from "../HamburgerButton";

export default function Navbar({
  activeSection,
  scrollToSection,
  toggleTheme,
  isDarkMode,
  isMenuOpen,
  toggleMenu,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-desktop">
        <ul className="nav-list">
          <li>
            <button
              className={`nav-button ${
                activeSection === "presentation" ? "active" : ""
              }`}
              onClick={() => scrollToSection("presentation")}
            >
              <Home size={18} /> Inicio
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              <User size={18} /> Sobre mí
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => scrollToSection("skills")}
            >
              <Settings size={18} /> Habilidades
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${
                activeSection === "collaborations" ? "active" : ""
              }`}
              onClick={() => scrollToSection("collaborations")}
            >
              <Users size={18} /> Colaboraciones
            </button>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-mobile">
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        {isMenuOpen && (
          <div className="mobile-menu">
            <button
              className={`nav-button-mobile ${
                activeSection === "presentation" ? "active" : ""
              }`}
              onClick={() => scrollToSection("presentation")}
            >
              <Home size={18} /> Inicio
            </button>
            <button
              className={`nav-button-mobile ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              <User size={18} /> Sobre mí
            </button>
            <button
              className={`nav-button-mobile ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => scrollToSection("skills")}
            >
              <Settings size={18} /> Habilidades
            </button>
            <button
              className={`nav-button-mobile ${
                activeSection === "collaborations" ? "active" : ""
              }`}
              onClick={() => scrollToSection("collaborations")}
            >
              <Users size={18} /> Colaboraciones
            </button>
            <button onClick={toggleTheme} className="theme-toggle-mobile">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
