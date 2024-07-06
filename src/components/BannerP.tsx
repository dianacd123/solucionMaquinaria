import { ButtonCTA } from "./ButtonCTA";
import image from "/src/assets/image.jpg";

export default function BannerP() {
  return (
    <div className="  sm:flex md:h-[550px]">
      <div className="flex item flex-1  flex-col   justify-center bg-[#FDE502] p-10">
        <h1 className="text-5xl font-bold text-[#0b0a09] sm:text-6xl">
          ¡Maquinaria para tus proyectos!
        </h1>
        <h2 className="text-lg  py-6 sm:py-8 text-[#0b0a09]">
          Explore nuetros servicios de{" "}
          <strong> venta y renta de maquinaria </strong>y descubra cómo podemos
          ayudarle a alcanzar sus objetivos
        </h2>
        <div className=" ">
          <ButtonCTA></ButtonCTA>
        </div>
      </div>
      <div className="flex flex-1">
        <img className="object-cover " src={image} alt="" />
      </div>
    </div>
  );
}
