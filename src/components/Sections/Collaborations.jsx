import { motion } from "framer-motion";
import "./Collaborations.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Collaborations = () => {
  const collaborators = [
    {
      name: "Saüc Floristeria",
      img: "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1747453718/PortofolioMarcMateo/SaucMockup444_ugihj8.png",
      description: "Diseño visual y branding para floristería artesanal.",
      url: "https://saucfloristeria.com",
    },
    {
      name: "DevLink", 
      img: "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1747454116/PortofolioMarcMateo/DevLinkMockup444_imop50.png",
      description: "Plataforma para conectar desarrolladores con oportunidades.",
      url: "https://devlink.com",
    },
    {
      name: "Fem Cami",
      img: "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1747454116/PortofolioMarcMateo/FemCamiMockup444_vt1mcq.png",
      description: "Campaña comunitaria enfocada en la sostenibilidad.",
      url: "https://femcami.org",
    },
  ];

  return (
    <section id="collaborations" className="section collaborations">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="content"
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Colaboraciones
        </motion.h2>

        <div className="container">
          {collaborators.map((card, index) => (
            <motion.div
              key={index}
              className={`card card${index}`}
              style={{ backgroundImage: `url(${card.img})` }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="border">
                <h2 className="card-title">{card.name}</h2>
                <p className="card-description">{card.description}</p>
                <div className="icons">
                  <a href={card.url} target="_blank" rel="noopener noreferrer" title="Sitio web">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </a>
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Collaborations;
