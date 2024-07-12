import { ButtonCTA } from "./ButtonCTA";
import image from "/src/assets/image.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BannerP() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Check initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="sm:flex md:h-[550px]">
      {/* Columna de texto y botón */}
      <motion.div
        initial={{ opacity: 0, y: isLargeScreen ? 50 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex sm:items-start justify-center sm:flex-1 flex-col bg-[#FDE502] p-7 animate-on-load"
      >
        <motion.h1
          initial={{ opacity: 0, y: isLargeScreen ? -50 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-bold text-[#0b0a09] sm:text-6xl sm:text-left animate-on-load"
        >
          ¡Maquinaria para tus proyectos!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: isLargeScreen ? -50 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg py-6 sm:py-8 text-[#0b0a09] sm:text-left animate-on-load"
        >
          Explore nuestros servicios de{" "}
          <strong>venta y renta de maquinaria</strong> y descubra cómo podemos
          ayudarle a alcanzar sus objetivos.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: isLargeScreen ? 50 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-left sm:text-left animate-on-load"
        >
          <ButtonCTA />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: isLargeScreen ? 50 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 justify-center sm:justify-end items-center animate-on-load"
      >
        <img className="object-cover w-full h-full" src={image} alt="" />
      </motion.div>
    </div>
  );
}
