// components/Loader/Loader.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

const Loader = ({ isDarkMode, show }) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const springBounce = {
    repeat: Infinity,
    repeatType: "reverse",
    type: "spring",
    stiffness: 150,
    damping: 5,
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`loader-wrapper ${isDarkMode ? "dark" : "light"}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="pulse-circle"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={springBounce}
          />
          <motion.div
            className="pulse-circle delay"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ ...springBounce, delay: 0.4 }}
          />

          <div className="loader-text-wrapper">
            <motion.svg
              className="spinner"
              viewBox="0 0 50 50"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#00ffff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="90"
                strokeDashoffset="60"
              />
            </motion.svg>

            <motion.div
              className="loader-text"
              initial={{ y: 0, opacity: 0.4 }}
              animate={{ y: -4, opacity: 1 }}
              transition={{
                ...springBounce,
                delay: 0.2,
              }}
            >
              Cargando{dots}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
