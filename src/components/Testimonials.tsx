import { motion } from 'framer-motion';
import imagenNatalia from '../assets/natalia.jpg';
import imagenJulia from '../assets/julia.jpg';
import imagenPedro from '../assets/pedro.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Test = () => {
  const testimonios = [
    {
      nombre: "Natalia",
      testimonio: "Excelente servicio y maquinaria de calidad: Estoy muy impresionado con la atención al cliente y la calidad de la maquinaria proporcionada por Tu Solución en Maquinaria. Su equipo experto me ayudó a seleccionar la maquinaria adecuada para mi proyecto, y la entrega fue puntual y sin problemas.",
      imagen: imagenNatalia
    },
    {
      nombre: "Julia",
      testimonio: "Desde el primer contacto hasta la recogida de la maquinaria al finalizar mi proyecto, La cotización fue clara y detallada, la entrega de la maquinaria fue rápida y el soporte técnico durante el alquiler fue excepcional. ¡Sin duda volveré a trabajar con ellos en el futuro!",
      imagen: imagenJulia
    },
    {
      nombre: "Pedro",
      testimonio: "Alquilar maquinaria con Tu Solución en Maquinaria fue una experiencia sin complicaciones de principio a fin. Su equipo fue amable, atento y siempre disponible para responder a mis preguntas y brindar asesoramiento experto. ¡Gracias por hacer que mi proyecto sea un éxito!",
      imagen: imagenPedro
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 11000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: 'ease-out',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id='Testimonios' className="bg-black font-poppins min-h-2">
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold text-[#fde502]">Usuarios de <br /> "Tu solución en Maquinarias" satisfechos</h2>
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
                  <div className="bg-black p-6 rounded-lg text-center h-full flex flex-col justify-between">
                    <div className="bg-[#fde502] flex-1 flex flex-col justify-center py-7 rounded-sm" >
                      <img src={testimonio.imagen} alt={testimonio.nombre} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-black mb-2">{testimonio.nombre}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-b-lg">
                      <p className="text-md font-medium text-black md:text-md">
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