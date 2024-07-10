import React, { useEffect, useState } from "react";
import imagen1 from "../assets/Imagen1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QuienesS = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que la animación se repita al hacer scroll repetidas veces
    threshold: 0.5, // Umbral de visibilidad
  });

  useEffect(() => {
    if (inView) {
      setIsAnimationVisible(true);
    }
  }, [inView]);

  return (
    <div
      id="QuienesSomos"
      className="flex h-full flex-col items-center justify-center bg-[#0B0A09] sm:p-20  p-10 sm:h-auto sm:flex-row"
      ref={ref}
    >
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={isAnimationVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        src={imagen1}
        className="mb-6 w-full max-w-sm rounded-lg sm:mb-0 sm:mr-6"
      />
      <article className="space-y-6 text-center md:space-y-2 md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isAnimationVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-bold text-[#FDE502]"
        >
          ¿QUIÉNES SOMOS?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isAnimationVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-2 text-left text-gray-300 dark:text-gray-400"
        >
          Somos una empresa líder en el sector de alquiler de maquinaria,
          comprometida con proporcionar soluciones integrales a las necesidades
          de nuestros clientes en la industria de la construcción, manufactura,
          agricultura y más. Con años de experiencia en el mercado, nos hemos
          consolidado como un socio confiable y eficiente para empresas de todos
          los tamaños.
        </motion.p>
      </article>
    </div>
  );
};

export default QuienesS;
