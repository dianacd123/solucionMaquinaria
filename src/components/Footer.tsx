import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";

export function Component() {
  return (
    <Footer container className="bg-[#0b0a09] py-8 rounded-none">
    <div className="w-full">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h1 className="text-white font-bold text-2xl mb-4">TU SOLUCIÓN EN MAQUINARIA</h1>
        </div>
        <div>
          <FooterTitle className="text-x1 font-bold text-white" title="EXPLORA" />
          <FooterLinkGroup col className="text-white">
            <FooterLink className="text-gray-200" href="#QuienesSomos">¿Quienes somos?</FooterLink>
            <FooterLink className="text-gray-200" href="#Servicios">Servicios</FooterLink>
            <FooterLink className="text-gray-200" href="#Contratacion">Contratación</FooterLink>
            <FooterLink className="text-gray-200" href="#Maquinaria">Maquinaria</FooterLink>
            <FooterLink className="text-gray-200" href="#Testimonios">Testimonios</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
        <div>
          <FooterTitle className="text-x1 font-bold text-white" title="LEGAL" />
          <FooterLinkGroup col className="text-white">
            <FooterLink className="text-gray-200" href="#">Políticas de Privacidad</FooterLink>
            <FooterLink className="text-gray-200" href="#">Términos &amp; Condiciones</FooterLink>
          </FooterLinkGroup>
        </div>
        <br></br>
          <FooterTitle className="text-x1 font-bold text-white" title="SIGUENOS" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-left">
            <FooterIcon className="text-gray-200" href="#" icon={BsFacebook} />
            <FooterIcon className="text-gray-200" href="#" icon={BsInstagram} />
            <FooterIcon className="text-gray-200" href="#" icon={BsTwitter} />
            <FooterIcon className="text-gray-200" href="#" icon={BsTiktok} />
          </div>
        </div>
        <div>
          <FooterTitle className="text-x1 font-bold text-white" title="Servicio al cliente" />
          <FooterLinkGroup col className="text-white">
          <div className="text-white">
            <p className="text-sm text-gray-200">Dirección: Calle 56, Mérida, 97000</p>
            <p className="text-sm text-gray-200">Teléfono: (999) 123 4567</p>
            <p className="text-sm text-gray-200">Email: hola@sitioincreible.mx</p>
          </div>
          </FooterLinkGroup>
        </div>
      </div>
      <FooterDivider className="my-6" />
      <div className="w-full flex items-center justify-center">
  <FooterCopyright className="text-white" href="#" by="Tu solución en maquinaria™" year={2024} />
</div>
    </div>
  </Footer>
  );
}
