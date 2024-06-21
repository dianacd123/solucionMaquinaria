import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importa las imágenes
import B420FNB from '../assets/B420FNB.png';
import B320NB from '../assets/B320NB.png';
import B416FNB from '../assets/B416FNB.png';
import B320EP from '../assets/B320EP.png';

const MCard: React.FC = () => {
  const cards = [
    {
      title: "Retroexcavadora caterpillar 420F",
      image: B420FNB,
      description: "Retroexcavadora con un peso de 8.50 toneladas, cuchara de 2.34 m de ancho y 1.00 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.50 m.",
      linkdetail: "./ProductDetail1"
    },
    {
      title: "Excavadora caterpillar 320",
      image: B320NB,
      description: "Excavadora caterpillar con un peso de 20-23 toneladas, cuchara de 1.00 m de ancho y 1.00-1.20 m³ de capacidad. Tracción en orugas y longitud de transporte de 9.70 m.",
      linkdetail: "./ProductDetail2"
    },
    {
      title: "Retroexcavadora caterpillar 416F",
      image: B416FNB,
      description: "Retroexcavadora con un peso de 7.21 toneladas, cuchara de 2.26 m de ancho y 0.76 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.08 m.",
      linkdetail: "./ProductDetail3"
    },
    {
      title: "Excavadora caterpillar 320E",
      image: B320EP,
      description: "Excavadora con un peso de 22.5 toneladas, cuchara de 1.00 m de ancho y 1.19 m³ de capacidad. Tracción en orugas y longitud de transporte de 9.54 m.",
      linkdetail: "./ProductDetail4"
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="py-5"> 
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
          <div
            key={index}
            className="flex flex-col items-center justify-between h-full rounded overflow-hidden shadow-lg bg-[#0B0A09] border-2 border-[#FDE502] m-2 md:m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ minWidth: '280px', maxWidth: '300px', width: '100%' }}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#FFFFFF]">{card.title}</div>
            </div>
            <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
            <div className="px-6 py-4">
              <p className="text-[#FFFFFF] text-base">
                {card.description}
              </p>
            </div>
            <div className="px-6 pb-5 w-full">
              <Link to={card.linkdetail || '#'} className="w-full">
                <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 transform transition duration-500 hover:scale-110">
                  Ver detalles
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MCard;
