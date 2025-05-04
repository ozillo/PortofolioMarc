import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const paragraph =
    "Soy un desarrollador frontend con experiencia en React, diseño responsivo y animaciones modernas. Me encanta aprender y colaborar en proyectos creativos.";

  const paragraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      },
      { threshold: 0.4 }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section about">
      <div className="about-content">
        <p className="about-text fade-target" ref={paragraphRef}>
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default About;
