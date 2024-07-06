import imagen1 from "../assets/Imagen1.jpg";

const QuienesS = () => {
  return (
    <div
      id="QuienesSomos"
      className="flex h-full flex-col items-center justify-center bg-[#0B0A09] p-10 sm:h-auto sm:flex-row"
    >
      <img
        src={imagen1}
        className="mb-6 w-full max-w-sm rounded-lg sm:mb-0 sm:mr-6"
      />
      <article className="space-y-6 text-center md:space-y-2 md:text-left">
        <h1 className="text-5xl font-bold text-[#FDE502]">¿QUIÉNES SOMOS?</h1>
        <p className="mb-2 text-left text-gray-300 dark:text-gray-400">
          Somos una empresa líder en el sector de alquiler de maquinaria,
          comprometida con proporcionar soluciones integrales a las necesidades
          de nuestros clientes en la industria de la construcción, manufactura,
          agricultura y más. Con años de experiencia en el mercado, nos hemos
          consolidado como un socio confiable y eficiente para empresas de todos
          los tamaños.
        </p>
      </article>
    </div>
  );
};

export default QuienesS;
