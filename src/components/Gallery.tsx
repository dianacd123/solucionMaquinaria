import React from 'react';
import ImageInfo from './ImageInfo';
import img1 from '../assets/B420FNB.png';
import img2 from '../assets/B320NB.png';
import img3 from '../assets/B416FNB.png';
import img4 from '../assets/B320EP.png';

const galleryStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const Gallery: React.FC = () => {
  return (
    <div id="Maquinaria" className="bg-[#0B0A09] p-20">
      <div className="flex justify-center mb-8">
        <h1 className="text-[#FDE502] font-bold text-5xl">MAQUINARIA DISPONIBLE</h1>
      </div>
      <div style={galleryStyle}>
        <ImageInfo
          src={img1}
          alt="Retroexcavadora caterpillar 420F"
          info="Retroexcavadora caterpillar 420F"
        />
        <ImageInfo
          src={img2}
          alt="Excavadora caterpillar 320"
          info="Excavadora caterpillar 320"
        />
        <ImageInfo
          src={img3}
          alt="Retroexcavadora caterpillar 416F"
          info="Retroexcavadora caterpillar 416F"
        />
        <ImageInfo
          src={img4}
          alt="Excavadora caterpillar 320E"
          info="Excavadora caterpillar 320E"
        />
      </div>
    </div>
  );
};

export default Gallery;
