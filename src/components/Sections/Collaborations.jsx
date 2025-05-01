import { motion } from "framer-motion";

const Collaborations = () => (
  <section id="collaborations" className="section collaborations">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="content"
    >
      <h2 className="section-title">Colaboraciones</h2>
      <p>
        Aquí puedes mostrar proyectos en los que has trabajado con otros desarrolladores o
        diseñadores. Puedes incluir enlaces, imágenes o descripciones breves de cada
        colaboración.
      </p>
    </motion.div>
  </section>
);

export default Collaborations;
