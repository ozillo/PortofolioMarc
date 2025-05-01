import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section about">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="content"
    >
      <h2 className="section-title">Sobre mí</h2>
      <p>
        Soy un desarrollador frontend con experiencia en React, diseño responsivo y
        animaciones modernas. Me encanta aprender y colaborar en proyectos creativos.
      </p>
    </motion.div>
  </section>
);

export default About;
