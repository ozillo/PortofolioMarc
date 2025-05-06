import React, { useEffect, useRef, useState } from "react";
import "./StickyScrollReveal.css";

const content = [
  {
    title: "Saüc Floristeria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1701634348/PortofolioMarcMateo/macbookSauc_sngifv.png",
  },
  {
    title: "DevLink",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1701634090/PortofolioMarcMateo/macbookDevlink_fahuxv.png",
  },
  {
    title: "Fem Cami",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://res.cloudinary.com/dw9b8eqmc/image/upload/v1746285184/PortofolioMarcMateo/FemCamiportofolio_e6dlqv.png",
  },
];

const StickyScrollReveal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="sticky-scroll-section" id="sticky-scroll-reveal">
      <div className="sticky-scroll-wrapper">
        <div className="sticky-scroll-left">
          {content.map((item, index) => (
            <div
              className={`sticky-block ${
                index === activeIndex ? "active" : ""
              }`}
              key={index}
              data-index={index}
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="sticky-scroll-right">
          <img
            src={content[activeIndex].image}
            alt={content[activeIndex].title}
          />
        </div>
      </div>
    </section>
  );
};

export default StickyScrollReveal;
