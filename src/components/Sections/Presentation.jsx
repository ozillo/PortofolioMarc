import { motion } from "framer-motion";

const Presentation = () => (
  <section id="presentation" className="section presentation">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="title">Hola, soy Marc Mateo</h1>
      <p className="subtitle">
        Frontend Developer apasionado por crear experiencias web increíbles.
      </p>
      <img
        src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1724336926/Captura_de_pantalla_2024-08-22_a_las_16.28.09_novftw.png"
        alt="Foto de presentación"
        className="profile-img"
      />
    </motion.div>
  </section>
);

export default Presentation;
