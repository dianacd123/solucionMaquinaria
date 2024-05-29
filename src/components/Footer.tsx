
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
    <Footer container className="bg-[#0b0a09] ">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="py-4">
            
            <div className="flex-1 flex justify-left items-left">
                <h1 className="text-white font-bold text-2xl">LOGOTIPO</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle className="text-xl font-bold text-white" title="Contacto" />
              <FooterLinkGroup col>
              <div className="text-white">
          
            <p className='text-sm'>Teléfono: (999) 123 4567</p>
            <p className='text-sm'>Dirección: Calle 56, Mérida, 97000</p>
            <p className='text-sm'>Email: hola@sitioincreible.mx</p>
          </div>
                
              </FooterLinkGroup>
            </div>
            <div>
              
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">¿Quienes somos?</FooterLink>
                <FooterLink href="#">Servicios</FooterLink>
                <FooterLink href="#">Maquinaria</FooterLink>
                <FooterLink href="#">Testimonios</FooterLink>
                <FooterLink href="#">Politicas de Privacidad</FooterLink>
                <FooterLink href="#">Terminos  &amp; Condiciones</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full  sm:flex sm:items-center sm:justify-between">
          <FooterCopyright className="text-white" href="#" by="Tu solucion en maquinaria™" year={2024} />
          <div className=" mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon className="text-white" href="#" icon={BsFacebook} />
            <FooterIcon className="text-white" href="#" icon={BsInstagram} />
            <FooterIcon className="text-white" href="#" icon={BsTwitter} />
            <FooterIcon className="text-white" href="#" icon={BsTiktok} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
