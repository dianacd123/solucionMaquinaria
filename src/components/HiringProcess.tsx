import img from "../assets/image.jpg"

export function HiringProcess() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-32 py-24 mx-auto flex flex-wrap justify-center">
    
  <h1 className="text-[#FDE502] font-bold text-5xl p-6 text-center">PROCESO DE CONTRATACIÓN</h1>
    <div className="flex flex-wrap w-full">
      
      <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
      
        <div className="flex relative pb-12">
          <div className="h-full w-1  bg-gray-200 pointer-events-none"></div>
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <h1>1</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-md text-[#FDE502] mb-1 tracking-wider">CONSULTA Y ASESORAMIENTO INICIAL</h2>
            <p className="leading-relaxed text-white">El cliente se pone en contacto con nosotros y nos
            proporciona detalles sobre su proyecto.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <h1>2</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-md text-[#FDE502] mb-1 tracking-wider">COTIZACIÓN Y RESERVA</h2>
            <p className="leading-relaxed text-white">Proporcionamos una cotización detallada que incluye
el costo del alquiler de la maquinaria y una vez que el
cliente aprueba la cotización, procedemos a la
reserva de la maquinaria.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <h1>3</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-md text-[#FDE502] mb-1 tracking-wider">ENTREGA Y SOPORTE DURANTE EL ALQUILER</h2>
            <p className="leading-relaxed text-white">Coordinamos la entrega de la maquinaria al lugar de
trabajo del cliente y proporcionamos soporte técnico
durante todo el período de alquiler.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 hidden bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <h1>4</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-md text-[#FDE502] mb-1 tracking-wider">RECOGIDA Y FACTURACIÓN</h2>
            <p className="leading-relaxed text-white"> Al finalizar el proyecto, coordinamos la recogida
de la maquinaria y emitimos la factura
correspondiente por los servicios prestados.</p>
          </div>
        </div>
        
      </div>
      <img className="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={img} alt="step"/>
    </div>
  </div>
</section>
  );
}
