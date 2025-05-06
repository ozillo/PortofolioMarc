import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import "./TextGenerateEffect.css";

export const TextGenerateEffect = ({ words, className = "" }) => {
  const [scope, animate] = useAnimate();
  const letters = words.split("");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)" },
      {
        delay: stagger(0.03),
        duration: 0.4,
      }
    );
  }, [animate]);

  return (
    <motion.div
      ref={scope}
      className={`text-generate-wrapper ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className={`text-generate-letter${char === " " ? " space" : ""}`}
          style={{ filter: "blur(10px)" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
