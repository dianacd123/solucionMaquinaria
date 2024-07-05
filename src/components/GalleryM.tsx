import { ButtonCTA } from "./ButtonCTA";
import m1 from "/src/assets/Maquinaria1.jpg";
import m2 from "/src/assets/maqui2.jpg";
import m3 from "/src/assets/maqui3.jpg";
import m4 from "/src/assets/maqui4.jpg";
import m5 from "/src/assets/maqui5.jpg";

export default function GalleryM() {
  return (
    <div id="Maquinaria" className="bg-[#0B0A09] p-20">
      <div className="mb-8 flex justify-center">
        <h1 className="text-5xl font-bold text-[#FDE502]">
          MAQUINARIA DISPONIBLE
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m4} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m1} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m3} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m4} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={m2} alt="" />
          </div>
        </div>
      </div>
      <div className="m-8 flex justify-center">
        <ButtonCTA></ButtonCTA>
      </div>
    </div>
  );
}
