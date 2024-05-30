import { ButtonCTA } from "./ButtonCTA";
import image from "/src/assets/image.jpg"


export default function BannerP() {
  return (
    
    <div className="h-full  sm:flex sm:h-auto">
  <div className="flex-1 justify-center  p-6   bg-[#FDE502] flex flex-col">
    <h1 className="text-[#0b0a09] font-bold  text-5xl">
      ¿Listo para llevar su proyecto al siguiente nivel?
    </h1>
    <h2 className="text-[#0b0a09] py-4">
      ¡Contáctenos hoy mismo para conocer más sobre nuestros servicios de alquiler de maquinaria y cómo podemos ayudarle a alcanzar sus objetivos!
    </h2>
    <div className=" ">
      <ButtonCTA></ButtonCTA>
    </div>
  </div>
  <div className="flex-1 flex">
    <img className="object-cover " src={image} alt="" />
  </div>
</div>

    
  )
}

