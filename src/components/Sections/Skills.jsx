import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiNodedotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiMysql,
  SiWordpress,
  SiFramer,
  SiWix,
} from "react-icons/si";
import "./Skills.css";

const skills = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMysql />, name: "SQL" },
  { icon: <SiWordpress />, name: "WordPress" },
  { icon: <SiWix />, name: "Wix Studio" },
  { icon: <SiFramer />, name: "Framer" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiGithub />, name: "Git & GitHub" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiAdobeillustrator />, name: "Illustrator" },
  { icon: <SiAdobeaftereffects />, name: "After Effects" },
];

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
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 20, z: -50 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            title={skill.name}
          >
            {skill.icon}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </section>
);

export default Skills;
