import { ButtonCTA } from "./ButtonCTA";
import image from "/src/assets/image.jpg"


export default function BannerP() {
  return (
    
    <div className="w-screen md:flex">
        <div className="flex-1 p-6 justify-center items-center bg-[#FDE502] ">
      <h1 className="text-[#0b0a09] font-bold text-5xl ">
        ¿Listo para llevar su proyecto al siguiente nivel?
      </h1>
      <h2 className="text-[#0b0a09] py-4">
        ¡Contáctenos hoy mismo para conocer más sobre nuestros servicios de alquiler de maquinaria y cómo podemos ayudarle a alcanzar sus objetivos!
      </h2>
      <ButtonCTA></ButtonCTA>
    </div>
      <div className="flex-1 flex justify-center items-center ">
        <img src={image} alt="" />
      </div>
    </div>
    
  )
}

