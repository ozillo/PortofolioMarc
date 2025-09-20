import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  UsersRoundIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import HamburgerButton from "../HamburgerButton";
import "./Navbar.css";

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
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      {/* Desktop */}
      <div className="nav-desktop">
        <ul className="nav-list">
          <li>
            <button
              className={`nav-button ${activeSection === "presentation" ? "active" : ""}`}
              onClick={() => scrollToSection("presentation")}
              aria-label="Ir a Inicio"
            >
              <HomeIcon size={18} /> Inicio
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${activeSection === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
              aria-label="Ir a Sobre mí"
            >
              <UserIcon size={18} /> Sobre mí
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${activeSection === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
              aria-label="Ir a Habilidades"
            >
              <SettingsIcon size={18} /> Habilidades
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${activeSection === "collaborations" ? "active" : ""}`}
              onClick={() => scrollToSection("collaborations")}
              aria-label="Ir a Colaboraciones"
            >
              <UsersRoundIcon size={18} /> Colaboraciones
            </button>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar tema">
              {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="nav-mobile">
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        {isMenuOpen && (
          <div className="mobile-menu">
            {[
              { id: "presentation", label: "Inicio", icon: <HomeIcon size={18} /> },
              { id: "about", label: "Sobre mí", icon: <UserIcon size={18} /> },
              { id: "skills", label: "Habilidades", icon: <SettingsIcon size={18} /> },
              { id: "collaborations", label: "Colaboraciones", icon: <UsersRoundIcon size={18} /> },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                className={`nav-button-mobile ${activeSection === id ? "active" : ""}`}
                onClick={() => {
                  scrollToSection(id);
                  toggleMenu() ;
                }}
              >
                {icon} {label}
              </button>
            ))}

            <button onClick={toggleTheme} className="theme-toggle-mobile" aria-label="Cambiar tema">
              {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
