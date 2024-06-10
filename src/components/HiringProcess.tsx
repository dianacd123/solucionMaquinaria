import { ButtonCTA } from "./ButtonCTA";
import image from "/src/assets/image.jpg"

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function HiringProcess() {
  return (
    <div className="h-full bg-[#0B0A09] p-20  sm:flex sm:h-auto">
  <div className="w-full sm:w-1/2 p-4">
  <div className="flex justify-center mb-8">
    <h1 className="text-[#FDE502] font-bold text-5xl">PROCESO DE CONTRATACIÓN</h1>
  </div>
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>1. Consulta y Asesoramiento Inicial</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-300 dark:text-gray-400">
          El cliente se pone en contacto con nosotros y nos
proporciona detalles sobre su proyecto.
          </p>
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>2. Cotización y Reserva</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-300 dark:text-gray-400">
          Proporcionamos una cotización detallada que incluye
el costo del alquiler de la maquinaria y una vez que el
cliente aprueba la cotización, procedemos a la
reserva de la maquinaria.
          </p>
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>3. Entrega y Soporte Durante el Alquiler</AccordionTitle>
        <AccordionContent>
          
          <p className="mb-2 text-gray-300 dark:text-gray-400">
          Coordinamos la entrega de la maquinaria al lugar de
trabajo del cliente y proporcionamos soporte técnico
durante todo el período de alquiler.
          </p>
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>4. Recogida y Facturación</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-300 dark:text-gray-400">
          Al finalizar el proyecto, coordinamos la recogida
de la maquinaria y emitimos la factura
correspondiente por los servicios prestados.
          </p>
          <div className="flex justify-center m-4">
    <ButtonCTA></ButtonCTA>
  </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    
  </div>
  <div className="flex-1 flex m-4">
    <img className="h-full object-cover rounded-md" src={image} alt="" />
  </div>
</div>

  );
}
