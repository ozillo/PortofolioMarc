import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./Portfolio.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Presentation, Skills } from "./Sections";
import AnimatedLoader from "./AnimatedLoader/AnimatedLoader";
import ScrambledText from "./ScrambledText/ScrambledText";
import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";
import AboutTypewriter from "./AboutTypewriter/AboutTypewriter"; // Nuevo

// Icons
import { Flower, Share2, Heart } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      gestureOrientation: "vertical",
      normalizeWheel: true,
    });
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setShowLoader(false), 1000);
      return () => clearTimeout(t);
    }
  }, [loading]);

  const toggleTheme = () => setIsDarkMode((v) => !v);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(el, {
        offset: 0,
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        lock: false,
      });
    } else {
      el.scrollIntoView();
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

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

      {/* Sección About con efecto typewriter */}
      <AboutTypewriter lenis={lenisInstance} />

      {/* <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Soy un desarrollador frontend con experiencia en React, diseño responsivo y animaciones modernas. Me encanta aprender y colaborar en proyectos creativos
      </ScrambledText> */}

      <Skills />

      {/* ScrollStack con iconos y color adaptativo por tema */}
      <ScrollStack
        lenis={lenisInstance}
        itemDistance={100}
        itemScale={0.03}
        itemStackDistance={0.18}
        stackPosition="25%"
        scaleEndPosition="10%"
        baseScale={0.9}
        rotationAmount={0}
        blurAmount={0}
        onStackComplete={() => console.log("Stack completo en viewport")}
      >
        <ScrollStackItem itemClassName="variant-2">
          <div className="card-head">
            <div className="card-icon"><Flower size={24} /></div>
            <h2>Saüc Floristeria</h2>
          </div>
          <p>Diseño visual, branding y desarrollo web para floristería local.</p>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="variant-4">
          <div className="card-head">
            <div className="card-icon"><Share2 size={24} /></div>
            <h2>Devlink</h2>
          </div>
          <p>Plataforma de networking y showcase para desarrolladores.</p>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="variant-1">
          <div className="card-head">
            <div className="card-icon"><Heart size={24} /></div>
            <h2>Fem Camí</h2>
          </div>
          <p>Proyecto solidario con página web interactiva y responsive.</p>
        </ScrollStackItem>
      </ScrollStack>

      <Footer />
    </div>
  );
}
