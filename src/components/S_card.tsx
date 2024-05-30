import React, { useState } from 'react';

const Card = ({ title, imageSrc, description1, description2, description3, description4, description5 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h3 className="mb-2 text-gray-500 dark:text-gray-400 text-center">{title}</h3>
        {isHovered && <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">{description1}</p>}
        {isHovered && <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">{description2}</p>}
        {isHovered && <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">{description3}</p>}
        {isHovered && <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">{description4}</p>}
        {isHovered && <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">{description5}</p>}
      </div>
    </div>
  );
};

export default Card;