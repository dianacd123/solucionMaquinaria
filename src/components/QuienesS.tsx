import imagen1 from '../assets/Imagen1.jpg'

const QuienesS = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#0B0A09] p-20 sm:flex-row sm:h-auto">
        <img src={imagen1} className="w-full max-w-sm rounded-lg mb-6 sm:mb-0 sm:mr-6" />
        <article className="text-center space-y-6 md:text-left md:space-y-2">
          <h1 className="text-[#FDE502] font-bold text-5xl">¿QUIENES SOMOS?</h1>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify ">
            Somos una empresa líder en el sector de alquiler de maquinaria, comprometida con proporcionar
            soluciones integrales a las necesidades de nuestros clientes en la industria de la construcción, manufactura, agricultura y más. Con años de experiencia
            en el mercado, nos hemos consolidado como un socio confiable y eficiente para empresas de todos los tamaños
          </p>
        </article>
      </div>
    );
  }

export default QuienesS