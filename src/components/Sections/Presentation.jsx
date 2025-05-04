import React from "react";
import "./Presentation.css";

const Presentation = () => {
  const line1 = "Hola, soy";
  const name = "Marc Mateo";
  const subtitle = "Frontend Developer";

  return (
    <section id="presentation" className="section presentation">
      <div className="presentation-content">
        <img
          className="profile-img"
          src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1724336926/Captura_de_pantalla_2024-08-22_a_las_16.28.09_novftw.png"
          alt="Foto de perfil"
        />

        <div className="text-block">
          <h1 className="presentation-title">
            <div className="line">
              {line1.split("").map((char, index) => (
                <span key={index} className="letter" style={{ "--i": index }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            <div className="line name-line">
              {name.split("").map((char, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ "--i": index + line1.length }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </h1>

          <p className="presentation-subtitle">
            {subtitle.split("").map((char, index) => (
              <span key={index} className="letter" style={{ "--i": index }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
