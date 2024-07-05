import React, { useState } from "react";

// Definición de la interfaz para los props
interface CardProps {
  title: string;
  imageSrc: string;
  description1: string;
}

// Componente funcional en TypeScript
const Card: React.FC<CardProps> = ({ title, imageSrc, description1 }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h3 className="m-4 text-center text-xl text-[#FDE502]  dark:text-gray-400">
          {title}
        </h3>
        {isHovered && (
          <p className="mb-2 text-left text-gray-300 dark:text-gray-400">
            {description1}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
