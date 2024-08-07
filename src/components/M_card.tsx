import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

import B420FNB from "../assets/B420FNB.png";
import B320NB from "../assets/B320NB.png";
import B416FNB from "../assets/B416FNB.png";
import B320EP from "../assets/B320EP.png";

const MCard: React.FC = () => {
  const cards = [
    {
      title: "Retroexcavadora caterpillar 420F",
      image: B420FNB,
      description:
        "Retroexcavadora con un peso de 8.50 toneladas, cuchara de 2.34 m de ancho y 1.00 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.50 m.",
      linkdetail: "/retroexcavadora-caterpillar-420f-2024",
    },
    {
      title: "Excavadora caterpillar 320",
      image: B320NB,
      description:
        "Excavadora caterpillar con un peso de 20-23 toneladas, cuchara de 1.00 m de ancho y 1.00-1.20 m³ de capacidad. Tracción en orugas y longitud de transporte de 9.70 m.",
      linkdetail: "/excavadora-caterpillar-320-2024",
    },
    {
      title: "Retroexcavadora caterpillar 416F",
      image: B416FNB,
      description:
        "Retroexcavadora con un peso de 7.21 toneladas, cuchara de 2.26 m de ancho y 0.76 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.08 m.",
      linkdetail: "/retroexcavadora-caterpillar-416f-2024",
    },
    {
      title: "Excavadora caterpillar 320E",
      image: B320EP,
      description:
        "Excavadora con un peso de 22.5 toneladas, cuchara de 1.00 m de ancho y 1.19 m³ de capacidad. Tracción en orugas y longitud de transporte de 9.54 m.",
      linkdetail: "/excavadora-caterpillar-320e-2024",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" ">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="m-2 flex h-full transform flex-col items-center justify-between overflow-hidden rounded border-2 border-[#FDE502] bg-[#0B0A09] shadow-lg transition duration-500 hover:shadow-2xl md:m-4"
            style={{ minWidth: "280px", maxWidth: "300px", width: "100%" }}
          >
            <div className="px-6 py-6">
              <div className="mb-2 text-xl font-bold text-[#FFFFFF]">
                {card.title}
              </div>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-48 w-full object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="px-6 py-4">
              <p className="text-base text-[#FFFFFF]">{card.description}</p>
            </div>
            <div className="w-full px-6 pb-5">
              <Link to={card.linkdetail || "#"} className="w-full">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-2 block w-full transform rounded bg-blue-700 px-4 py-2 font-bold text-white transition duration-500 hover:scale-110 hover:bg-sky-900"
                >
                  VER DETALLES
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default MCard;
