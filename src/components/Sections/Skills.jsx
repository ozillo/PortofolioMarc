import { motion } from "framer-motion";

const Skills = () => (
  <section id="skills" className="section skills">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="content"
    >
      <h2 className="section-title">Habilidades</h2>
      <ul className="skills-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Tailwind CSS</li>
        <li>Figma</li>
        <li>Git & GitHub</li>
      </ul>
    </motion.div>
  </section>
);

export default Skills;
