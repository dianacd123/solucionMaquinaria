import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/image.jpg";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function HiringProcess() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que la animación se repita al hacer scroll repetidas veces
    threshold: 0.1, // Umbral de visibilidad
  });

  useEffect(() => {
    if (inView) {
      setIsAnimationVisible(true);
    }
  }, [inView]);

  return (
    <section className="body-font text-gray-600">
      <div 
        className="container mx-auto flex flex-wrap justify-center sm:px-20 p-10"
        ref={ref}
      >
        <motion.h1 
          className="p-6 text-center text-5xl font-bold text-[#FDE502]"
          initial={{ opacity: 0, y: 50 }}
          animate={isAnimationVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          COMPRA Y RENTA EN 4 PASOS
        </motion.h1>
        <div className="flex w-full flex-wrap">
          <motion.div 
            className="md:w-1/2 md:py-6 md:pr-10 lg:w-3/5"
            initial="hidden"
            animate={isAnimationVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div 
                className="relative flex pb-12"
                key={i}
                variants={itemVariants}
                transition={{ duration: 1.2 }} // Duración más lenta
              >
                <div className="pointer-events-none h-full  w-1 bg-gray-200"></div>
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <h1>{i + 1}</h1>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-lg mb-1 font-medium tracking-wider text-[#FDE502]">
                    {["CONSULTA Y ASESORAMIENTO INICIAL", "COTIZACIÓN Y RESERVA", "ENTREGA Y SOPORTE DURANTE EL ALQUILER", "ENTREGA Y FACTURACIÓN"][i]}
                  </h2>
                  <p className="leading-relaxed text-white">
                    {[
                      "El cliente se pone en contacto con nosotros y nos proporciona detalles sobre su proyecto.",
                      "Proporcionamos una cotización detallada que incluye el costo del alquiler de la maquinaria y una vez que el cliente aprueba la cotización, procedemos a la reserva de la maquinaria.",
                      "Coordinamos la entrega de la maquinaria al lugar de trabajo del cliente y proporcionamos soporte técnico durante todo el período de alquiler.",
                      "Al finalizar el proyecto, coordinamos la recogida de la maquinaria y emitimos la factura correspondiente por los servicios prestados."
                    ][i]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.img 
            className="rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-2/5"
            src={img}
            alt="step"
            initial={{ opacity: 0, y: 50 }}
            animate={isAnimationVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}

