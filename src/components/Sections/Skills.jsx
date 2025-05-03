import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => (
  <section id="skills" className="section skills">
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="content"
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, rotateY: 30, z: -100 }}
        whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Habilidades
      </motion.h2>

      <motion.ul
        className="skills-list"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "Figma", "Git & GitHub"].map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 20, z: -50 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </section>
);

export default Skills;
