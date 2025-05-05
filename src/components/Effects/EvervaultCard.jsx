import React, { useRef } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import "./EvervaultCard.css";

export const EvervaultCard = ({ children }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <div
      ref={ref}
      className="evervault-card"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="evervault-overlay"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      <div className="evervault-content">{children}</div>
    </div>
  );
};
