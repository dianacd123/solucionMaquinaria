import { ButtonCTA } from "./ButtonCTA";
import image from "/src/assets/image.jpg"


export default function BannerP() {
  return (
    
    <div className="  sm:flex md:h-[550px]">
  <div className="flex-1 justify-center  p-10   bg-[#FDE502] flex flex-col">
    <h1 className="text-[#0b0a09] font-bold sm:text-6xl text-5xl">
    ¡Maquinaria para tus proyectos!
    </h1>
    <h2 className="text-[#0b0a09] text-lg py-8">
      
    <br></br>
      Explore nuetros servicios de <strong> venta y alquiler de maquinaria </strong>
       y descubra cómo podemos ayudarle a alcanzar sus objetivos 
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
