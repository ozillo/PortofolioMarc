import { useEffect, useMemo, useRef, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  UsersRoundIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import HamburgerButton from "../HamburgerButton";
import "./Navbar.css";

const LINKS = [
  { id: "presentation", label: "Inicio", Icon: HomeIcon, aria: "Ir a Inicio" },
  { id: "about", label: "Sobre mí", Icon: UserIcon, aria: "Ir a Sobre mí" },
  { id: "skills", label: "Habilidades", Icon: SettingsIcon, aria: "Ir a Habilidades" },
  { id: "collaborations", label: "Colaboraciones", Icon: UsersRoundIcon, aria: "Ir a Colaboraciones" },
];

export default function Navbar({
  activeSection,
  scrollToSection,
  toggleTheme,
  isDarkMode,
  isMenuOpen,
  toggleMenu,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const lastY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      const diff = y - lastY.current;
      if (Math.abs(diff) > 6) {
        setScrollDir(diff > 0 ? "down" : "up");
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navMotion = useMemo(
    () =>
      shouldReduceMotion
        ? { initial: false, animate: { opacity: 1 } }
        : { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    [shouldReduceMotion]
  );

  return (
    <motion.nav
      role="navigation"
      aria-label="Principal"
      {...navMotion}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={["navbar", scrolled ? "scrolled" : "", scrollDir === "down" ? "nav-hide" : "nav-show"].join(" ")}
    >
      {/* Desktop Pill Nav */}
      <div className="nav-desktop">
        <div className="pill-bar" role="menubar" aria-label="Secciones">
          {LINKS.map(({ id, label, Icon, aria }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                role="menuitem"
                className={["pill-item", isActive ? "is-active" : ""].join(" ")}
                onClick={() => scrollToSection(id)}
                aria-label={aria}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="pill-bg"
                    transition={{ type: "spring", stiffness: 500, damping: 40, mass: 1 }}
                    aria-hidden="true"
                  />
                )}
                <Icon size={18} />
                <span>{label}</span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="pill-item theme-pill"
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            <span>{isDarkMode ? "" : ""}</span>
          </button>
        </div>
      </div>

      {/* Mobile (reutiliza tu menú móvil actual) */}
      <div className="nav-mobile">
        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        />
        {isMenuOpen && (
          <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú móvil">
            {[
              { id: "presentation", label: "Inicio", Icon: HomeIcon },
              { id: "about", label: "Sobre mí", Icon: UserIcon },
              { id: "skills", label: "Habilidades", Icon: SettingsIcon },
              { id: "collaborations", label: "Colaboraciones", Icon: UsersRoundIcon },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                className={`nav-button-mobile ${activeSection === id ? "active" : ""}`}
                onClick={() => {
                  scrollToSection(id);
                  toggleMenu();
                }}
              >
                <Icon size={18} /> {label}
              </button>
            ))}

            <button type="button" onClick={toggleTheme} className="theme-toggle-mobile" aria-label="Cambiar tema">
              {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
