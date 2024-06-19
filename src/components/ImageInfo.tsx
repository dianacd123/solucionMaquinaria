import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link si estás usando react-router
import { ButtonCTA } from "./ButtonCTA";

interface ImageInfoProps {
  src: string;
  alt: string;
  info: string;
}

const ImageInfo: React.FC<ImageInfoProps> = ({ src, alt, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: showInfo ? '160px' : '20px', // Adjust the margin when info is shown
    width: '300px', // Fixed width for all images
  };

  const imageStyle: React.CSSProperties = {
    width: '300px', // Fixed width for all images
    height: '200px', // Fixed height for all images
    objectFit: 'cover', // Ensures the image covers the entire area without distortion
  };

  const infoStyle: React.CSSProperties = {
    marginTop: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    width: '300px',
    color: 'white',
    backgroundColor: '#333',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  };

  const linkButtonStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    backgroundColor: '#1E40AF', // bg-blue-500
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '10px',
    textAlign: 'center',
    transition: 'transform 0.5s',
  };


  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        style={imageStyle}
      />
      {showInfo && (
        <div style={infoStyle}>
          <p>{info}</p>
          <div style={buttonContainerStyle}>
            <ButtonCTA />
            <Link to="/ProductDetail">
              <button style={linkButtonStyle} className="transform transition duration-500 hover:scale-110">
                Ver detalles
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageInfo;
