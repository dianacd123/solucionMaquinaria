import React from 'react';
import { Link } from 'react-router-dom';

const MCard: React.FC = () => {
  const cards = [
    {
      title: "Retroexcavadora caterpillar 420F",
      image: "../src/assets/B420FNB.png",
      description: "Retroexcavadora con un peso de 8.50 toneladas, cuchara de 2.34 m de ancho y 1.00 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.50 m."
    },
    {
      title: "Excavadora caterpillar 320",
      image: "../src/assets/B320NB.png",
      description: "Excavadora caterpillar con un peso de 20-23 toneladas, cuchara de 1.00 m de ancho y 1.00-1.20 m³ de capacidad. Tracción en orugas y longitud de transporte de 9.70 m."
    },
    {
      title: "Retroexcavadora caterpillar 416F",
      image: "../src/assets/B416FNB.png",
      description: "Retroexcavadora con un peso de 7.21 toneladas, cuchara de 2.26 m de ancho y 0.76 m³ de capacidad. Tracción en todas las ruedas y longitud de transporte de 7.08 m."
    },
    {
      title: "Excavadora caterpillar 320E",
      image: "../src/assets/B320EP.png",
      description: "Excavadora con un peso de 22.5 toneladas, cuchara de 1.00 m de ancho y 1.19 m³ de capacidad. Tracción en orugas y longitud de transporte de 9.54 m."
    }
  ];

  return (
    <div className="flex flex-wrap justify-around p-4 md:p-2"> 
      {cards.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-[#0B0A09] border-2 border-[#FDE502] m-2 md:m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          style={{ minWidth: '280px', maxWidth: '300px' }}
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
          <div className="px-6 pb-5">
            <Link to="/ProductDetail">
            <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 transform transition duration-500 hover:scale-110">
              Ver detalles
            </button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MCard;

