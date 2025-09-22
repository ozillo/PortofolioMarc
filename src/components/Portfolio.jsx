import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./Portfolio.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Presentation, Skills } from "./Sections";
import AnimatedLoader from "./AnimatedLoader/AnimatedLoader";
import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";
import AboutTypewriter from "./AboutTypewriter/AboutTypewriter";

// Icons
import { Flower, Share2, Heart } from "lucide-react";

const NAV_OFFSET = 80; // alto aprox del navbar. Ajusta si hace falta.
const SECTION_IDS = ["presentation", "about", "skills", "collaborations"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  // ===== Lenis =====
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

  // Loader timings
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

  // ===== Scroll a sección (con Lenis + offset) =====
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const lenis = lenisRef.current;
    // offset negativo para compensar navbar y que el título no quede tapado
    const offset = -NAV_OFFSET;

    if (lenis) {
      lenis.scrollTo(el, {
        offset,
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        lock: false,
      });
    } else {
      const y = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    // actualizamos estado y cerramos menú móvil
    setActiveSection(id);
    setIsMenuOpen(false);

    // hash en URL (opcional, útil para compartir)
    history.replaceState(null, "", `#${id}`);
  };

  // ===== Active section con IntersectionObserver =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${NAV_OFFSET + 10}px 0px -40% 0px`,
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ===== Si entran con #hash, posiciona al montar =====
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (SECTION_IDS.includes(hash)) {
      setTimeout(() => scrollToSection(hash), 0);
    }
  }, []); // solo una vez

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

      {/* ====== PRESENTATION ====== */}
      <section id="presentation" className="section" aria-label="Inicio" tabIndex={-1}>
        <Presentation isDarkMode={isDarkMode} />
      </section>

      {/* ====== ABOUT ====== */}
      <section id="about" className="section" aria-label="Sobre mí" tabIndex={-1}>
        <AboutTypewriter lenis={lenisInstance} />
      </section>

      {/* ====== SKILLS ====== */}
      <section id="skills" className="section" aria-label="Habilidades" tabIndex={-1}>
        <Skills />
      </section>

      {/* ====== COLLABORATIONS ====== */}
      <section id="collaborations" className="section" aria-label="Colaboraciones" tabIndex={-1}>
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
      </section>

      <Footer />
    </div>
  );
}
