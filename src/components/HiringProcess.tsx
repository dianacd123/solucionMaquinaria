import img from "../assets/image.jpg";

export function HiringProcess() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-wrap justify-center sm:px-20 p-10">
        <h1 className="p-6 text-center text-5xl font-bold text-[#FDE502]">
          COMPRA Y RENTA EN 4 PASOS
        </h1>
        <div className="flex w-full flex-wrap">
          <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-3/5">
            <div className="relative flex pb-12">
              <div className="pointer-events-none h-full  w-1 bg-gray-200"></div>
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <h1>1</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font text-lg mb-1 font-medium tracking-wider text-[#FDE502]">
                  CONSULTA Y ASESORAMIENTO INICIAL
                </h2>
                <p className="leading-relaxed text-white">
                  El cliente se pone en contacto con nosotros y nos proporciona
                  detalles sobre su proyecto.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <h1>2</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font text-lg mb-1 font-medium tracking-wider text-[#FDE502]">
                  COTIZACIÓN Y RESERVA
                </h2>
                <p className="leading-relaxed text-white">
                  Proporcionamos una cotización detallada que incluye el costo
                  del alquiler de la maquinaria y una vez que el cliente aprueba
                  la cotización, procedemos a la reserva de la maquinaria.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <h1>3</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font text-lg mb-1 font-medium tracking-wider text-[#FDE502]">
                  ENTREGA Y SOPORTE DURANTE EL ALQUILER
                </h2>
                <p className="leading-relaxed text-white">
                  Coordinamos la entrega de la maquinaria al lugar de trabajo
                  del cliente y proporcionamos soporte técnico durante todo el
                  período de alquiler.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none hidden h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <h1>4</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font text-lg mb-1 font-medium tracking-wider text-[#FDE502]">
                  ENTREGA Y FACTURACIÓN
                </h2>
                <p className="leading-relaxed text-white">
                  {" "}
                  Al finalizar el proyecto, coordinamos la recogida de la
                  maquinaria y emitimos la factura correspondiente por los
                  servicios prestados.
                </p>
              </div>
            </div>
          </div>
          <img
            className=" rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-2/5"
            src={img}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
}
