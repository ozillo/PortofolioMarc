import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Portfolio.css";
import Navbar from "./Navbar/Navbar";
import { animate } from "animejs"; // (si lo estás usando luego)

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
      links: {
        enable: true,
        color: isDarkMode ? "#8888ff" : "#333333",
      },
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

      {/* Sections */}
      <section id="presentation" className="section presentation">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="title">Hola, soy Marc Mateo</h1>
          <p className="subtitle">
            Frontend Developer apasionado por crear experiencias web increíbles.
          </p>
          <img
            src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1724336926/Captura_de_pantalla_2024-08-22_a_las_16.28.09_novftw.png"
            alt="Foto de presentación"
            className="profile-img"
          />
        </motion.div>
      </section>

      <section id="about" className="section about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="content"
        >
          <h2 className="section-title">Sobre mí</h2>
          <p>
            Soy un desarrollador frontend con experiencia en React, diseño responsivo y
            animaciones modernas. Me encanta aprender y colaborar en proyectos creativos.
          </p>
        </motion.div>
      </section>

      <section id="skills" className="section skills">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="content"
        >
          <h2 className="section-title">Habilidades</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>Figma</li>
            <li>Git & GitHub</li>
          </ul>
        </motion.div>
      </section>

      <section id="collaborations" className="section collaborations">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="content"
        >
          <h2 className="section-title">Colaboraciones</h2>
          <p>
            Aquí puedes mostrar proyectos en los que has trabajado con otros desarrolladores o
            diseñadores. Puedes incluir enlaces, imágenes o descripciones breves de cada
            colaboración.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
