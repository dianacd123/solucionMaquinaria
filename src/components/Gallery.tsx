import React from "react";
import ImageInfo from "./ImageInfo";
import img1 from "../assets/B420FNB.png";
import img2 from "../assets/B320NB.png";
import img3 from "../assets/B416FNB.png";
import img4 from "../assets/B320EP.png";

const Gallery: React.FC = () => {
  return (
    <div id="Maquinaria" className="bg-[#0B0A09] p-20">
      <div className="mb-8 flex justify-center">
        <h1 className="text-5xl font-bold text-[#FDE502]">
          MAQUINARIA DISPONIBLE
        </h1>
      </div>
      <div className="flex flex-wrap justify-around gap-20">
        <ImageInfo
          src={img1}
          alt="Retroexcavadora caterpillar 420F"
          info="Retroexcavadora caterpillar 420F"
          link="/productDetail1" // Usar rutas absolutas para navegación
        />
        <ImageInfo
          src={img2}
          alt="Excavadora caterpillar 320"
          info="Excavadora caterpillar 320"
          link="/productDetail2" // Usar rutas absolutas para navegación
        />
        <ImageInfo
          src={img3}
          alt="Retroexcavadora caterpillar 416F"
          info="Retroexcavadora caterpillar 416F"
          link="/productDetail3" // Usar rutas absolutas para navegación
        />
        <ImageInfo
          src={img4}
          alt="Excavadora caterpillar 320E"
          info="Excavadora caterpillar 320E"
          link="/productDetail4" // Usar rutas absolutas para navegación
        />
      </div>
    </div>
  );
};

export default Gallery;
