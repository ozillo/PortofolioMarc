// src/components/Loader.jsx
import { motion } from "framer-motion";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="loader"
      />
    </div>
  );
};

export default Loader;
