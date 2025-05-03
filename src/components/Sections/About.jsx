// components/Sections/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  const title = "Sobre mí";
  const paragraph =
    "Soy un desarrollador frontend con experiencia en React, diseño responsivo y animaciones modernas. Me encanta aprender y colaborar en proyectos creativos.";

  return (
    <section id="about" className="section about">
      <div className="about-content">
        <h2 className="bounce-line section-title">
          {title.split("").map((char, index) => (
            <span
              key={index}
              className={`bounce-letter${char === " " ? " space" : ""}`}
              style={{ "--index": index }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p className="bounce-line about-text">
          {paragraph.split("").map((char, index) => (
            <span
              key={index}
              className={`bounce-letter${char === " " ? " space" : ""}`}
              style={{ "--index": index + title.length }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
