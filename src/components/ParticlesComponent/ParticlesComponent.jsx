import React from 'react';
import Particles from 'react-tsparticles';  // Importar Particles desde react-tsparticles

const ParticlesComponent = ({ isDarkMode }) => {
  const particlesOptions = {
    background: {
      color: {
        value: isDarkMode ? "#111" : "#fff", // Ajustar el color de fondo según el modo
      },
    },
    fullScreen: {
      enable: false, // Deshabilitar fullscreen para control total del área
    },
    particles: {
      number: {
        value: 50,  // Número de partículas
      },
      size: {
        value: 3,  // Tamaño de las partículas
      },
      move: {
        enable: true,
        speed: 1,  // Velocidad de las partículas
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}  // Pasamos las opciones
      className="particles"
    />
  );
};

export default ParticlesComponent;
