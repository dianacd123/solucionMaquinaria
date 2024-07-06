import { motion } from "framer-motion";
import imagenNatalia from "../assets/natalia.jpg";
import imagenJulia from "../assets/julia.jpg";
import imagenPedro from "../assets/pedro.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
  const testimonios = [
    {
      nombre: "Natalia",
      testimonio:
        "Excelente servicio y maquinaria de calidad: Estoy muy impresionado con la atención al cliente y la calidad de la maquinaria proporcionada por Tu Solución en Maquinaria. Su equipo experto me ayudó a seleccionar la maquinaria adecuada para mi proyecto, y la entrega fue puntual y sin problemas.",
      imagen: imagenNatalia,
    },
    {
      nombre: "Julia",
      testimonio:
        "Desde el primer contacto hasta la recogida de la maquinaria al finalizar mi proyecto, La cotización fue clara y detallada, la entrega de la maquinaria fue rápida y el soporte técnico durante el alquiler fue excepcional. ¡Sin duda volveré a trabajar con ellos en el futuro!",
      imagen: imagenJulia,
    },
    {
      nombre: "Pedro",
      testimonio:
        "Alquilar maquinaria con Tu Solución en Maquinaria fue una experiencia sin complicaciones de principio a fin. Su equipo fue amable, atento y siempre disponible para responder a mis preguntas y brindar asesoramiento experto. ¡Gracias por hacer que mi proyecto sea un éxito!",
      imagen: imagenPedro,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 11000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "ease-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Testimonios" className="font-poppins min-h-2 bg-black">
      <div className="py-10 text-center">
        <h2 className="text-5xl font-bold text-[#fde502]">
           CLIENTES SATISFECHOS
        </h2>
      </div>

      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <section className=" bg-black text-white">
          <div className="w-full pb-6">
            <Slider {...settings}>
              {testimonios.map((testimonio, index) => (
                <div key={index} className="px-4">
                  <div className="flex h-full flex-col justify-between rounded-lg bg-black p-6 text-center">
                    <div className="flex flex-1 flex-col justify-center rounded-sm bg-[#fde502] py-7">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                      />
                      <h3 className="mb-2 text-2xl font-bold text-black">
                        {testimonio.nombre}
                      </h3>
                    </div>
                    <div className="rounded-b-lg bg-white p-6">
                      <p className="text-md md:text-md font-medium text-black">
                        {testimonio.testimonio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Test;
