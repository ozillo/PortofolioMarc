// components/Sections/Presentation.jsx
import React from "react";
import "./Presentation.css";

const Presentation = () => {
  const line1 = "Hola, soy";
  const name1 = "Marc";
  const name2 = "Mateo";
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
          <h1 className="bounce-group">
            <div className="bounce-line title">
              {line1.split("").map((char, index) => (
                <span
                  key={index}
                  className={`bounce-letter${char === " " ? " space" : ""}`}
                  style={{ "--index": index }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            <div className="bounce-line title name-line">
              {name1.split("").map((char, index) => (
                <span
                  key={index}
                  className={`bounce-letter${char === " " ? " space" : ""}`}
                  style={{ "--index": index + line1.length }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            <div className="bounce-line title name-line">
              {name2.split("").map((char, index) => (
                <span
                  key={index}
                  className={`bounce-letter${char === " " ? " space" : ""}`}
                  style={{ "--index": index + line1.length + name1.length }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </h1>

          <p className="bounce-line subtitle">
            {subtitle.split("").map((char, index) => (
              <span
                key={index}
                className={`bounce-letter${char === " " ? " space" : ""}`}
                style={{ "--index": index }}
              >
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
