// components/ParticlesComponent/ParticlesComponent.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = ({ isDarkMode }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: isDarkMode ? "#111111" : "#ffffff",
      },
    },
    fullScreen: {
      enable: false, // Usamos CSS para ubicarlo dentro del wrapper
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: isDarkMode ? "#ffffff" : "#000000",
      },
      size: {
        value: 2.5,
      },
      move: {
        enable: true,
        speed: 1,
      },
      opacity: {
        value: 0.3,
      },
      links: {
        enable: true,
        distance: 120,
        color: isDarkMode ? "#ffffff" : "#000000",
        opacity: 0.2,
        width: 1,
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="particles"
    />
  );
};

export default ParticlesComponent;
