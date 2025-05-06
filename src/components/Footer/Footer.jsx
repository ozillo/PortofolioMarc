import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Marc Mateo. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="https://github.com/marcmateo" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/marc-mateo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:marcmateo@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
